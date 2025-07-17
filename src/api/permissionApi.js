import axiosInstance from "./axiosInstance";

export const getAllPermissionsApi = async() => {
    const response = await axiosInstance.get('/permission/get-all-permissions');
    return response.data.data;
};
export const createPermissionApi = async(permissionData) => {
    const response = await axiosInstance.post('/permission/create-permission',permissionData);
    return response.data.data;
};
export const deletePermissionApi = async(permissionId) => {
    const response = await axiosInstance.delete(`/permission/delete-permission/${permissionId}`);
    return response.data.data;
};