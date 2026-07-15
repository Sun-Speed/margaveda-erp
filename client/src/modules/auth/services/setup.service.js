import api from "@/api/axios";

export const createERP = async (data) => {

    const response = await api.post("/setup", data);

    return response.data;

};