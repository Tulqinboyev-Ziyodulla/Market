import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface LogOutProps {
  open: boolean;
  onClose: () => void;
}

const LogOut: React.FC<LogOutProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          padding: 4,
          maxWidth: 400,
          margin: 'auto',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: 2,
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '1.25rem',
            color: '#333',
          }}
        >
          Are you sure you want to log out?
        </Typography>

        <div className="flex justify-center space-x-4">

        <Button
            variant="outlined"
            color="secondary"
            onClick={onClose}
            sx={{
              borderColor: '#1976d2',
              color: '#1976d2',
              '&:hover': {
                backgroundColor: '#e3f2fd',
              },
              padding: '10px 20px',
              borderRadius: '8px',
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleLogOut}
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
              padding: '10px 20px',
              borderRadius: '8px',
            }}
          >
            Log Out
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default LogOut;
