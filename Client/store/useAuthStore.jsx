import { create } from "zustand";
import { axiosInstance } from "../src/lib/axios";

export const useAuthStore = create((set) => ({
  authUser: null,
  isLoggingIn: false,
  isSigningUp: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");

      set({ authUser: res.data.user });
    } catch (err) {
      console.log("Error checking auth:", err);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
