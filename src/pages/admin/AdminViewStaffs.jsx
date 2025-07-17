import { Box } from '@mui/material'
import StaffTable from '../../components/staff/StaffTable'
import AdminTopSection from '../../components/admin/AdminTopSection'

const AdminViewStaffs = () => {
  return (
    <Box marginTop="10px">
          <AdminTopSection/>
          <StaffTable/>
        </Box>
  )
}

export default AdminViewStaffs
