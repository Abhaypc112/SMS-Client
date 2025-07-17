import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  MenuItem,
  FormControlLabel,
  Switch
} from "@mui/material";

export default function StaffEditFormModal({ open, onClose, staff, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    isActive: false,
  });

  useEffect(() => {
    if (staff) {
      setFormData(staff);
    }
  }, [staff]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (e) => {
    setFormData((prev) => ({ ...prev, isActive: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Staff:", formData);
    if (onSave) onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Staff</DialogTitle>

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
            label="Email"
            name="email"
            type="email"
            value={formData.email || ""}
            onChange={handleChange}
            required
          />

          {/* ✅ Role dropdown */}
          <TextField
            select
            label="Role"
            name="role"
            value={formData.role || ""}
            onChange={handleChange}
            required
          >
            <MenuItem value="">Select Role</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="staff">Staff</MenuItem>
          </TextField>

          {/* ✅ Active status switch */}
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
