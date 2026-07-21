import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

const DEFAULT_USER = {
  name: "User",
  email: "user@email.com",
  phone: "",
  title: "",
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user-profile");
    return stored ? JSON.parse(stored) : DEFAULT_USER;
  });

  useEffect(() => {
    localStorage.setItem("user-profile", JSON.stringify(user));
  }, [user]);

  const updateUser = (updates) => {
    setUser((prev) => ({ ...prev, ...updates }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}