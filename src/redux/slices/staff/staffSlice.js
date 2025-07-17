import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createStaffApi, deleteStaffApi, getAllStaffsApi, updateStaffApi } from '../../../api/staffApi'

const initialState = {
    staffs : null,
    loading : false,
    error : null
}

export const getAllStaffs = createAsyncThunk('api/staff/get-staffs',
    async(_, {rejectWithValue}) => {
        try{
            const response = await getAllStaffsApi();
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)
export const createStaff = createAsyncThunk('api/staff/create-staff',
    async(staffData, {rejectWithValue}) => {
        try{
            const response = await createStaffApi(staffData);
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)
export const updateStaff = createAsyncThunk('api/staff/update-staff',
    async(staffData, {rejectWithValue}) => {
        try{
            const response = await updateStaffApi(staffData);
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)
export const deleteStaff = createAsyncThunk('api/staff/delete-staff',
    async(staffId, {rejectWithValue}) => {
        try{
            const response = await deleteStaffApi(staffId);
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)

const staffSlice = createSlice({
    name:'staff',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder

        .addCase(getAllStaffs.fulfilled, (state, action) => {
            state.loading = false;
            state.staffs = action.payload;
        })
        .addCase(createStaff.fulfilled, (state, action) => {
            state.loading = false;
            state.staffs.push(action.payload)
        })
        .addCase(updateStaff.fulfilled, (state, action) => {
            const {_id} = action.payload;
            const index = state.staffs.findIndex((staff)=>staff._id === _id);
            console.log(index)
            state.staffs[index] = action.payload;
            state.loading = false;
        })
        .addCase(deleteStaff.fulfilled, (state, action) => {
            const {_id} = action.payload;
            const data = state.staffs.filter((staff)=>staff._id !== _id);
            state.staffs = data;
            state.loading = false;
        })
    }
})

export default staffSlice.reducer;