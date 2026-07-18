import api from "@/api/axios";

export const getGeneral = async (
    institutionId
) => {
    const response = await api.get(
        `/institutions/${institutionId}/settings/general`
    );

    return response.data.data;
};

export const updateGeneral = async (
    institutionId,
    data
) => {
    const response = await api.put(
        `/institutions/${institutionId}/settings/general`,
        data
    );

    return response.data.data;
};