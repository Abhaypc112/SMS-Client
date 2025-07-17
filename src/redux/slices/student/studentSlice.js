import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createStudentApi, deleteStudentApi, getAllStudentsApi, updateStudentApi } from "../../../api/studentApi";

const initialState = {
    students: null,
    loading: false,
    error: null, 
}

export const getAllStudents = createAsyncThunk('api/student/view-students',
    async(_,{rejectWithValue}) => {
        try{
            const response = await getAllStudentsApi();
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)
export const createStudent = createAsyncThunk('api/student/create-student',
    async(studentData,{rejectWithValue}) => {
        try{
            const response = await createStudentApi(studentData);
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)
export const updateStudent = createAsyncThunk('api/student/update-student',
    async(studentData,{rejectWithValue}) => {
        try{
            const response = await updateStudentApi(studentData);
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)
export const deletetudent = createAsyncThunk('api/student/delete-student',
    async(studentId,{rejectWithValue}) => {
        try{
            const response = await deleteStudentApi(studentId);
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)

const studentSlice = createSlice({
    name:'student',
    initialState,
    reducers: {
    },
    extraReducers:(builder) => {
        builder

        .addCase(getAllStudents.fulfilled, (state, action) => {
            state.loading = false;
            state.students = action.payload;
        })
        .addCase(createStudent.fulfilled, (state, action) => {
            state.loading = false;
            state.students.push(action.payload);
        })
        .addCase(updateStudent.fulfilled, (state, action) => {
            const {_id} = action.payload;
            const index = state.students.findIndex((student)=>student._id === _id);
            state.students[index] = action.payload;
            state.loading = false;
        })
        .addCase(deletetudent.fulfilled, (state, action) => {
            const {_id} = action.payload;
            const data = state.students.filter((student)=>student._id !== _id);
            state.students = data;
            state.loading = false;
        })
    }
})

export default studentSlice.reducer;