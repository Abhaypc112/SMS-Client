import { Box } from '@mui/material'
import StudentTable from '../../components/student/StudentTable';
import AdminTopSection from '../../components/admin/AdminTopSection';

const AdminDashboard = () => {

  return (
    <Box marginTop="10px">
      <AdminTopSection/>
      <StudentTable/>
    </Box>
  )
}

export default AdminDashboard
