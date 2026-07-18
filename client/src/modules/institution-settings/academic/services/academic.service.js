import api from "@/api/axios";

export const getAcademic = async (institutionId) => {
    const response = await api.get(
        `/institutions/${institutionId}/settings/academic`
    );

    return response.data.data;
};

export const updateAcademic = async (
    institutionId,
    data
) => {
    const response = await api.put(
        `/institutions/${institutionId}/settings/academic`,
        data
    );

    return response.data.data;
};