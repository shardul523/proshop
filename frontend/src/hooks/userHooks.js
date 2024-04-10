import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { unauthenticate } from "../components/user/authSlice";
import { getUserProfile } from "../services/authApi";
import { updateUserDetails } from "../services/usersApi";

export const useUserUpdate = () => {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateUserDetails,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("Details Updated Successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isPending };
};

export const useProfile = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    data: user,
    status,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUserProfile,
    enabled: auth?.isLoggedIn,
  });

  const isLoading = auth.isLoggedIn ? status === "pending" : false;

  useEffect(() => {
    if (error) dispatch(unauthenticate());
  }, [error, dispatch]);

  return { auth, user, isLoading, error };
};
