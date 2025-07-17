import axiosInstance from "./axiosInstance"


export const getAllStudentsApi = async() => {
    const response = await axiosInstance.get('/student/view-students');
    return response.data.data;
};
export const createStudentApi = async(studentData) => {
    const response = await axiosInstance.post('/student/create-student', studentData);
    return response.data.data;
};
export const updateStudentApi = async(studentData) => {
    const {_id} = studentData;
    const response = await axiosInstance.patch(`/student/update-student/${_id}`, studentData);
    return response.data.data;
};
export const deleteStudentApi = async(studentId) => {
    const response = await axiosInstance.delete(`/student/delete-student/${studentId}`);
    return response.data.data;
};