import api from "@/api/axios";

export const getAddress = async (institutionId) => {

    const response = await api.get(
        `/institutions/${institutionId}/settings/address`
    );

    return response.data;
};

export const updateAddress = async (
    institutionId,
    data
) => {

    const response = await api.put(
        `/institutions/${institutionId}/settings/address`,
        data
    );

    return response.data;
};