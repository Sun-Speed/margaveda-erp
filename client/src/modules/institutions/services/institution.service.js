import api from "@/api/axios";

// ======================================================
// GET ALL
// ======================================================

export async function getInstitutions() {

    const response = await api.get(
        "/institutions"
    );

    return response.data;

}

// ======================================================
// GET ONE
// ======================================================

export async function getInstitutionById(id) {

    const response = await api.get(
        `/institutions/${id}`
    );

    return response.data;

}

// ======================================================
// CREATE
// ======================================================

export async function createInstitution(data) {

    const response = await api.post(
        "/institutions",
        data
    );

    return response.data;

}

// ======================================================
// UPDATE
// ======================================================

export async function updateInstitution(id, data) {

    const response = await api.put(
        `/institutions/${id}`,
        data
    );

    return response.data;

}

// ======================================================
// STATUS
// ======================================================

export async function updateInstitutionStatus(
    id,
    status
) {

    const response = await api.patch(
        `/institutions/${id}/status`,
        {
            status,
        }
    );

    return response.data;

}

// ======================================================
// DELETE (Future Archive)
// ======================================================

export async function deleteInstitution(id) {

    const response = await api.delete(
        `/institutions/${id}`
    );

    return response.data;

}