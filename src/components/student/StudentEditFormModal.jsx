import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  FormControlLabel,
  Switch
} from "@mui/material";

export default function StudentEditFormModal({ open, onClose, student, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    grade: "",
    contact: "",
    isActive: false,
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (e) => {
    setFormData((prev) => ({ ...prev, isActive: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Student</DialogTitle>

      <DialogContent dividers>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            required
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            value={formData.age || ""}
            onChange={handleChange}
            required
          />
          <TextField
            label="Grade"
            name="grade"
            value={formData.grade || ""}
            onChange={handleChange}
            required
          />
          <TextField
            label="Contact Info"
            name="contact"
            value={formData.contactInfo || ""}
            onChange={handleChange}
            required
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.isActive || false}
                onChange={handleStatusChange}
                color="primary"
              />
            }
            label={formData.isActive ? "Active ✅" : "Inactive ❌"}
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
