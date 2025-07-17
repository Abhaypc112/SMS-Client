import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";
import NewPermissionForm from "./NewPermissionForm";
import EditPermissionForm from "./EditPermissionForm";

export default function PermissionsModal({
  open,
  onClose,
  permissions = [],
  staffOptions = [],
  studentOptions = [],
  onSave,
  onUpdate,
  onDelete
}) {
  const [openForm, setOpenForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const handleAdd = () => {
    setEditing(null);
    setOpenForm(true);
  };

  const handleEdit = (perm) => {
    setEditing(perm);
    setOpenEditForm(true);
  };

  return (
    <>
      {/* Main Modal to list permissions */}
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <DialogTitle>Permissions</DialogTitle>

        <DialogContent dividers>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAdd}
            sx={{ mb: 2 }}
          >
            ➕ Add Permission
          </Button>

          {permissions && permissions.length === 0 ? (
            <p>No permissions found.</p>
          ) : (
            <TableContainer sx={{height:400, overflowY:'auto'}} component={Paper}>
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Staff</strong></TableCell>
                    <TableCell><strong>Student</strong></TableCell>
                    <TableCell><strong>Actions</strong></TableCell>
                    <TableCell align="right"><strong>Edit</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                  {permissions && permissions.map((perm) => (
                    <TableRow key={perm._id}>
                      <TableCell>
                        {perm.staffId.name}
                      </TableCell>
                      <TableCell>
                        {perm.studentId.name}
                      </TableCell>
                      <TableCell>{perm.actions.join(", ")}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handleEdit(perm)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          color="error"
                          sx={{ml:2}}
                          onClick={() => onDelete(perm)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} variant="outlined" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <NewPermissionForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        staffOptions={staffOptions}
        studentOptions={studentOptions}
        onSave={onSave}
      />
      <EditPermissionForm
        open={openEditForm}
        onClose={() => setOpenEditForm(false)}
        staffOptions={staffOptions}
        studentOptions={studentOptions}
        existingData={editing}
        onSave={onUpdate}
      />
    </>
  );
}
