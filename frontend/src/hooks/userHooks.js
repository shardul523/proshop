import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

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
