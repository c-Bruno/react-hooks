import { createContext, useContext } from "react";
import { User } from "../hooks/useContextCompoent";

export const DashboardContext = createContext<User | undefined>(undefined);

export const useUserContext = () => {
  const user = useContext(DashboardContext);

  if (user === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return user;
};
