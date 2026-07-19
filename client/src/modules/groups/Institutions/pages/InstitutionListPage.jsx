import { useEffect, useState } from "react";
import { Plus, RefreshCw, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import InstitutionTable from "../components/InstitutionTable";
import { getInstitutions } from "../services/institution.service";


export default function InstitutionListPage() {
  const navigate = useNavigate();

  const [institutions, setInstitutions] = useState([]);

  const [loading, setLoading] = useState(true);

  async function loadInstitutions() {
    try {
      setLoading(true);

      const response = await getInstitutions();

      setInstitutions(response.data);
    } catch (error) {
      alert(error?.response?.data?.message || "Unable to load institutions.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadInstitutions();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Institutions</h1>

          <p className="text-gray-500">
            Manage all institutions of your education group.
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="secondary" onClick={loadInstitutions}>
            <RefreshCw size={18} />
            Refresh
          </Button>

          <Button onClick={() => navigate("/app/institutions/add")}>
            <Plus size={18} />
            Add Institution
          </Button>
        </div>
      </div>

      <Card>
        {loading ? (
          <div className="text-center py-20">Loading...</div>
        ) : institutions.length === 0 ? (
          <div className="text-center py-20">
            <Building2 size={60} className="mx-auto text-gray-400" />

            <h2 className="text-2xl font-semibold mt-5">No Institutions</h2>

            <Button
              className="mt-8"
              onClick={() => navigate("/app/institutions/add")}
            >
              <Plus size={18} />
              Create Institution
            </Button>
          </div>
        ) : (
          <InstitutionTable
            institutions={institutions}
            refresh={loadInstitutions}
          />
        )}
      </Card>
    </div>
  );
}
