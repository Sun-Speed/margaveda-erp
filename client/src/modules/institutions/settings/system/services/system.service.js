import api from "@/api/axios";

export const getSystem = async (
    institutionId
) => {

    const response = await api.get(
        `/institutions/${institutionId}/settings/system`
    );

    return response.data.data;

};

export const updateSystem = async (
    institutionId,
    data
) => {

    const response = await api.put(
        `/institutions/${institutionId}/settings/system`,
        data
    );

    return response.data.data;

};