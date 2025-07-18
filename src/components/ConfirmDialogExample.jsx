import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from "@mui/material";

export default function ConfirmDialogExample({title, message, color, width, onOk}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOk = () => {
    onOk()
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" sx={{bgcolor:color, width:width}} onClick={handleOpen}>
        {title}
      </Button>

      <Dialog open={open} onClose={handleClose} PaperProps={{sx: {minWidth: 400}}}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <Typography>{message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleOk} color="primary" variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
