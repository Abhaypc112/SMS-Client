import axiosInstance from "./axiosInstance";

export const getAllStaffsApi = async() => {
    const response = await axiosInstance.get('/staff/get-staffs');
    return response.data.data;
};
export const createStaffApi = async(staffData) => {
    const response = await axiosInstance.post('/staff/create-staff', staffData);
    return response.data.data;
};
export const updateStaffApi = async(staffData) => {
    const {_id} = staffData;
    const response = await axiosInstance.patch(`/staff/update-staff/${_id}`, staffData);
    console.log(response.data.data)
    return response.data.data;
};
export const deleteStaffApi = async(staffId) => {
    const response = await axiosInstance.delete(`/staff/delete-staff/${staffId}`);
    return response.data.data;
};
