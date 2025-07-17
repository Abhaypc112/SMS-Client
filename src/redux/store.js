import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import staffReducer from './slices/staff/staffSlice';
import studentReducer from './slices/student/studentSlice';
import permissionReducer from './slices/permission/permissionSlice';
import staffPermissionReducer from './slices/permission/staffPermissionSlice';


export const store = configureStore({
    reducer : {
        auth:authReducer,
        staff:staffReducer,
        student:studentReducer,
        permission:permissionReducer,
        staffPermission:staffPermissionReducer
    }
});
