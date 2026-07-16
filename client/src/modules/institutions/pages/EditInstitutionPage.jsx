import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import InstitutionForm from "../components/InstitutionForm";

import {
    getInstitutionById,
    updateInstitution,
} from "../services/institution.service";

export default function EditInstitutionPage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [institution, setInstitution] = useState(null);

    useEffect(() => {

        loadInstitution();

    }, []);

    async function loadInstitution() {

        try {

            setLoading(true);

            const response =
                await getInstitutionById(id);

            setInstitution(response.data);

        } catch (error) {

            alert(

                error?.response?.data?.message ||

                "Unable to load institution."

            );

            navigate("/app/institutions");

        } finally {

            setLoading(false);

        }

    }

    async function handleUpdate(formData) {

        try {

            setLoading(true);

            await updateInstitution(id, formData);

            alert("Institution updated successfully.");

            navigate("/app/institutions");

        } catch (error) {

            alert(

                error?.response?.data?.message ||

                "Unable to update institution."

            );

        } finally {

            setLoading(false);

        }

    }

    if (loading && !institution) {

        return (

            <div className="text-center py-20">

                Loading Institution...

            </div>

        );

    }

    return (

        <div className="space-y-6">

            <div>

                <h1 className="text-3xl font-bold">

                    Edit Institution

                </h1>

                <p className="text-gray-500 mt-2">

                    Update institution information.

                </p>

            </div>

            {

                institution && (

                    <InstitutionForm

                        initialValues={institution}

                        loading={loading}

                        isEdit

                        onSubmit={handleUpdate}

                    />

                )

            }

        </div>

    );

}