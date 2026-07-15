import { createContext, useContext, useState } from "react";

const initialState = {
  customer: {
    type: "",
    name: "",
    slug: "",
    email: "",
    phone: "",
    website: "",
    country: "India",
  },

  organization: {
    name: "",
    code: "",
    type: "",
    email: "",
    phone: "",
    address: "",
  },

  admin: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    },
};

const SetupContext = createContext();

export function SetupProvider({ children }) {
  const [setupData, setSetupData] = useState(initialState);

  const updateSection = (section, values) => {
    setSetupData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...values,
      },
    }));
  };

  const resetSetup = () => {
    setSetupData(initialState);
  };

  return (
    <SetupContext.Provider
      value={{
        setupData,

        updateSection,

        resetSetup,
      }}
    >
      {children}
    </SetupContext.Provider>
  );
}

export function useSetup() {
  return useContext(SetupContext);
}
