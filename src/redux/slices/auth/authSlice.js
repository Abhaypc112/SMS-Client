import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../../../api/authApi";

const initialState = {
    user: null,
    accessToken: null,
    loading: false,
    error: null, 
}

export const userLogin = createAsyncThunk('api/login',
    async(loginData,{rejectWithValue}) => {
        try{
            const response = await loginApi(loginData);
            return response;
        }catch(error){
            return rejectWithValue(error.response.data.message);
        }
    }
)

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            localStorage.removeItem('accessToken');
          },
    },
    extraReducers:(builder) => {
        builder

        // Login cases
        .addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('role', action.payload.role);
            localStorage.setItem('userName', action.payload.name);
            localStorage.setItem('userPermissions', action.payload.permissions);
            state.error = null;
        })
        .addCase(userLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const {logout} = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;