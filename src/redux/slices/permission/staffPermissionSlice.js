import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../../../api/authApi";
import { getStaffPermissionById } from "../../../api/permissionApi";

const initialState = {
    Staffpermissions: null,
    accessToken: null,
    loading: false,
    error: null, 
}

export const getStaffPermission = createAsyncThunk('api/permisiion/get-permission-by-id',
    async(_,{rejectWithValue}) => {
        try{
            const response = await getStaffPermissionById();
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)

const staffPermissionSlice = createSlice({
    name:'staffPermission',
    initialState,
    reducers: {
    },
    extraReducers:(builder) => {
        builder

        .addCase(getStaffPermission.fulfilled, (state, action) => {
            state.Staffpermissions = action.payload;
            state.loading = false;
            state.error = null;
        })
    }
})

export default staffPermissionSlice.reducer;