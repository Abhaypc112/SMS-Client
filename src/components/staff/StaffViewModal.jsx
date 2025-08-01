import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box
} from "@mui/material";
import ConfirmDialogExample from "../ConfirmDialogExample";

export default function StaffViewModal({ open, onClose, staff, onDelete }) {
  const handleDelete = () => {
    if (staff && onDelete) {
      onDelete(staff._id);
      onClose()
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Staff Details</DialogTitle>

      <DialogContent dividers>
        {staff ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography><strong>Name:</strong> {staff.name}</Typography>
            <Typography><strong>Email:</strong> {staff.email}</Typography>
            <Typography><strong>Position:</strong> {staff.role}</Typography>
            <Typography>
              <strong>Status:</strong>{" "}
              {staff.isActive ? "Active ✅" : "Inactive ❌"}
            </Typography>
          </Box>
        ) : (
          <Typography>No data available</Typography>
        )}
      </DialogContent>

      <DialogActions sx={{ justifyContent: "end" }}>
        <ConfirmDialogExample
          open={open}
          title="Delete"
          message="Are you sure you want to delete?"
          onOk={handleDelete}
          color={'red'}
        /> 
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
