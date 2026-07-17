import api from "@/api/axios";

// ==================================================
// GET PROFILE
// ==================================================

export async function getInstitutionProfile(institutionId) {
    const response = await api.get(
        `/institutions/${institutionId}/settings/profile`
    );

    return response.data;
}

// ==================================================
// UPDATE PROFILE
// ==================================================

export async function updateInstitutionProfile(institutionId, data) {
    const response = await api.put(
        `/institutions/${institutionId}/settings/profile`,
        data
    );

    return response.data;
}