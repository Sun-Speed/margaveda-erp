import api from "@/api/axios";

export const getIdentity = async (institutionId) => {
    const response = await api.get(
        `/institutions/${institutionId}/settings/identity`
    );

    return response.data;
};

export const updateIdentity = async (
    institutionId,
    formData
) => {

    const response = await api.put(
        `/institutions/${institutionId}/settings/identity`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};