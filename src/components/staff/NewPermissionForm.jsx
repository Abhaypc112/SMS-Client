import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@mui/material";

export default function NewPermissionForm({
  open,
  onClose,
  staffOptions = [],
  studentOptions = [],
  onSave
}) {
  const [formData, setFormData] = useState({
    staffId: "",
    studentId: "",
    actions: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleActionsChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData((prev) => ({
      ...prev,
      actions: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
    setFormData({ staffId: "", studentId: "", actions: [] }); // reset
  };

  const actionOptions = ["read", "create", "update", "delete"];

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Permission</DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          {/* Staff dropdown */}
          <FormControl fullWidth>
            <InputLabel id="staff-label">Staff</InputLabel>
            <Select
              labelId="staff-label"
              name="staffId"
              value={formData.staffId}
              onChange={handleChange}
              input={<OutlinedInput label="Staff" />}
            >
              {staffOptions && staffOptions.map((staff) => (
                <MenuItem key={staff._id} value={staff._id}>
                  {staff.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Student dropdown */}
          <FormControl fullWidth>
            <InputLabel id="student-label">Student</InputLabel>
            <Select
              labelId="student-label"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              input={<OutlinedInput label="Student" />}
            >
              {studentOptions && studentOptions.map((student) => (
                <MenuItem key={student._id} value={student._id}>
                  {student.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Permissions multi-select */}
          <FormControl fullWidth>
            <InputLabel id="actions-label">Permissions</InputLabel>
            <Select
              labelId="actions-label"
              multiple
              name="actions"
              value={formData.actions}
              onChange={handleActionsChange}
              input={<OutlinedInput label="Permissions" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {actionOptions && actionOptions.map((action) => (
                <MenuItem key={action} value={action}>
                  <Checkbox checked={formData.actions.indexOf(action) > -1} />
                  <ListItemText primary={action} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
