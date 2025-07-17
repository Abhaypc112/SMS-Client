import AdminDashboard from "../../pages/admin/AdminDashboard"
import AdminViewStaffs from "../../pages/admin/AdminViewStaffs"

const AdminRoutes = [
    {path : '/admin/dashboard', element : <AdminDashboard/>},
    {path : '/admin/students', element : <AdminDashboard/>},
    {path : '/admin/staffs', element : <AdminViewStaffs/>}
]

export default AdminRoutes
