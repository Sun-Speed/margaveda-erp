import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const [token, setToken] = useState(sessionStorage.getItem("token"));

  const login = (data) => {
    sessionStorage.setItem("token", data.token);

    sessionStorage.setItem("user", JSON.stringify(data.user));

    sessionStorage.setItem(
      "organization",
      JSON.stringify(data.currentOrganization),
    );

    sessionStorage.setItem("memberships", JSON.stringify(data.memberships));

    setUser(data.user);

    setToken(data.token);
  };

  const logout = () => {
    sessionStorage.clear();

    setUser(null);

    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,

        token,

        login,

        logout,

        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
