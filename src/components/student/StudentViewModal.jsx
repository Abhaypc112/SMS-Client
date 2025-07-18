import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box
} from "@mui/material";
import ConfirmDialogExample from "../ConfirmDialogExample";

export default function StudentViewModal({ open, onClose, student, onDelete }) {
  const handleDelete = () => {
    if (onDelete && student) {
      onDelete(student._id);
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Student Details</DialogTitle>

      <DialogContent dividers>
        {student ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography><strong>Name:</strong> {student.name}</Typography>
            <Typography><strong>Age:</strong> {student.age}</Typography>
            <Typography><strong>Grade:</strong> {student.grade}</Typography>
            <Typography><strong>Contact Info:</strong> {student.contactInfo}</Typography>
            <Typography>
              <strong>Status:</strong>{" "}
              {student.isActive ? "Active ✅" : "Inactive ❌"}
            </Typography>
          </Box>
        ) : (
          <Typography>No student data available</Typography>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined" color="primary">
          Close
        </Button>
        <ConfirmDialogExample 
          open={open}
          title="Delete"
          message="Are you sure you want to delete?"
          onOk={handleDelete}
          color={'red'}
        />
      </DialogActions>
    </Dialog>
  );
}
