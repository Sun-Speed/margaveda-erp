import { createContext, useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getInstitutionById } from "@/modules/groups/Institutions/services/institution.service";

const InstitutionContext = createContext();

export function InstitutionProvider({ children }) {
  const { institutionId } = useParams();

  const [institution, setInstitution] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!institutionId) return;

    loadInstitution();
  }, [institutionId]);

  async function loadInstitution() {
    try {
      setLoading(true);

      const response = await getInstitutionById(institutionId);

      setInstitution(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <InstitutionContext.Provider
      value={{
        institution,

        institutionId,

        loading,

        refreshInstitution: loadInstitution,
      }}
    >
      {children}
    </InstitutionContext.Provider>
  );
}

export function useInstitution() {
  return useContext(InstitutionContext);
}
