import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPermissionApi, deletePermissionApi, getAllPermissionsApi } from "../../../api/permissionApi";

const initialState = {
    permissions: null,
    loading: false,
    error: null, 
}

export const getAllPermissions = createAsyncThunk('api/permission/get-all-permissions',
    async(_,{rejectWithValue}) => {
        try{
            const response = await getAllPermissionsApi();
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)
export const createPermission = createAsyncThunk('api/permission/create-permission',
    async(permissionData,{rejectWithValue}) => {
        try{
            const response = await createPermissionApi(permissionData);
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)
export const updatepermission = createAsyncThunk('api/permission/update-permission',
    async(permissionData,{rejectWithValue}) => {
        try{
            const response = await createPermissionApi(permissionData);
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)
export const deletepermission = createAsyncThunk('api/permission/delete-permission',
    async(permissionId,{rejectWithValue}) => {
        try{
            const response = await deletePermissionApi(permissionId);
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)

const permissionSlice = createSlice({
    name:'permission',
    initialState,
    reducers: {
    },
    extraReducers:(builder) => {
        builder

        .addCase(getAllPermissions.fulfilled, (state, action) => {
            state.permissions = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(createPermission.fulfilled, (state, action) => {
            state.permissions.push(action.payload);
            state.loading = false;
            state.error = null;
        })
        .addCase(updatepermission.fulfilled, (state, action) => {
            const {_id} = action.payload;
            const index = state.permissions.findIndex((permission) => permission._id === _id)
            state.permissions[index] = action.payload ;
            state.loading = false;
            state.error = null;
        })
        .addCase(deletepermission.fulfilled, (state, action) => {
            const {_id} = action.payload;
            const updateData = state.permissions.filter((permission) => permission._id !== _id)
            state.permissions = updateData ;
            state.loading = false;
            state.error = null;
        })

    }
})

export default permissionSlice.reducer;