import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { unauthenticate } from "../components/user/authSlice";
import { getUserProfile } from "../services/authApi";
import { updateUserDetails } from "../services/usersApi";
import { api } from "@/utils/index";
import constants from "@/services/constants.json";

const { BASE_URL } = constants;

export const useAllUsers = () => {
  const { data, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: () => api("GET", `${BASE_URL}/users`),
  });

  const users = data?.data?.users;

  return { users, isPending };
};

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
    queryKey: ["user", "mine"],
    queryFn: getUserProfile,
    enabled: auth?.isLoggedIn,
  });

  const isLoading = auth.isLoggedIn ? status === "pending" : false;

  useEffect(() => {
    if (error) dispatch(unauthenticate());
  }, [error, dispatch]);

  return { auth, user, isLoading, error };
};

export const useUserDelete = (userId) => {
  const method = "DELETE";
  const url = `${BASE_URL}/users/${userId}122`;
  const queryClient = useQueryClient();
  const { mutate: userDelete, isPending } = useMutation({
    mutationFn: api(method, url),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast.success("User Deleted Successfully");
    },
    onError: () => {
      toast.error("User could not be deleted");
    },
  });
  return { userDelete, isPending };
};

export const useUpdateUserById = (userId) => {
  const [method, url] = ["PATCH", `${BASE_URL}/users/${userId}`];
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: (details) => api(method, url, details),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user", userId],
      });
      toast.success("User updated successfully");
    },
    onError: () => {
      toast.error("User could not be updated");
    },
  });
  return { isPending, updateUser };
};

export const useUserById = (userId) => {
  const [method, url] = ["GET", `${BASE_URL}/users/${userId}`];
  const { data, isPending } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => api(method, url),
  });

  const user = data?.user;

  return { user, isPending };
};
