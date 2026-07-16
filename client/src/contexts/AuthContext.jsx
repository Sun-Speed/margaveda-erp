import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // -----------------------------
  // Session Storage Data
  // -----------------------------

  const [token, setToken] = useState(sessionStorage.getItem("token"));

  const [user, setUser] = useState(() => {
    const data = sessionStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  });

  const [memberships, setMemberships] = useState(() => {
    const data = sessionStorage.getItem("memberships");
    return data ? JSON.parse(data) : [];
  });

  const [currentOrganization, setCurrentOrganization] = useState(() => {
    const data = sessionStorage.getItem("organization");
    return data ? JSON.parse(data) : null;
  });

  // -----------------------------
  // Current Role
  // -----------------------------

  const currentRole = useMemo(() => {
    if (!memberships.length) return null;

    return memberships[0]?.roleId?.name || null;
  }, [memberships]);

  // -----------------------------
  // Login
  // -----------------------------

  const login = (data) => {
    sessionStorage.setItem("token", data.token);

    sessionStorage.setItem("user", JSON.stringify(data.user));

    sessionStorage.setItem("memberships", JSON.stringify(data.memberships));

    sessionStorage.setItem(
      "organization",
      JSON.stringify(data.currentOrganization),
    );

    setToken(data.token);

    setUser(data.user);

    setMemberships(data.memberships);

    setCurrentOrganization(data.currentOrganization);
  };

  // -----------------------------
  // Logout
  // -----------------------------

  const logout = () => {
    sessionStorage.removeItem("token");

    sessionStorage.removeItem("user");

    sessionStorage.removeItem("memberships");

    sessionStorage.removeItem("organization");

    setToken(null);

    setUser(null);

    setMemberships([]);

    setCurrentOrganization(null);
  };

  // -----------------------------
  // Switch Organization
  // -----------------------------

  const switchOrganization = (organizationId) => {
    const membership = memberships.find(
      (item) => item.organizationId._id === organizationId,
    );

    if (!membership) return;

    sessionStorage.setItem(
      "organization",
      JSON.stringify(membership.organizationId),
    );

    setCurrentOrganization(membership.organizationId);
  };

  // -----------------------------
  // Context
  // -----------------------------

  const value = {
    token,

    user,

    memberships,

    currentOrganization,

    currentRole,

    login,

    logout,

    switchOrganization,

    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
