import React, { useState, MouseEvent } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, TextField, Button, DialogActions } from '@mui/material';
import { instance } from '../../utils/axios';

interface Info {
  id: number;
  link: string
  title: string
  description: string
  address: string
  tel: string
  status: number;
}

interface InfoEditDialogProps {
  open: boolean;
  onClose: () => void;
  info: Info;
}

function InfoEditDialog({ open, onClose, info }: InfoEditDialogProps) {
  const [editedInfo, setEditedInfo] = useState<Info>({
    id: info.id,
    link: info.link,
    title: info.title,
    description: info.description,
    address: info.address,
    tel: info.tel,
    status: info.status
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await instance.put("/berlin/restaurants_info/admin", editedInfo);
      console.log("User data updated successfully:", editedInfo);
      onClose()
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };
  return (
    <Dialog open={open} onClose={onClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <DialogTitle>Редактировать информацию</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Id"
          name="id"
          value={editedInfo.id}
          onChange={handleInputChange}
          sx={{ marginBottom: '15px', marginTop: '15px' }}
        />

        <TextField
          fullWidth
          label="Заголовок"
          name="title"
          value={editedInfo.title}
          onChange={handleInputChange}
          sx={{ marginBottom: '15px', marginTop: '15px' }}
        />
        <TextField
          fullWidth
          label="Описание"
          name="description"
          value={editedInfo.description}
          onChange={handleInputChange}
          multiline
          rows={4}
          sx={{ marginBottom: '15px' }}
        />
        <TextField
          fullWidth
          label="Адрес"
          name="address"
          value={editedInfo.address}
          onChange={handleInputChange}
          sx={{ marginBottom: '15px' }}
        />
        <TextField
          fullWidth
          label="Телефон"
          name="tel"
          value={editedInfo.tel}
          onChange={handleInputChange}
          sx={{ marginBottom: '15px' }}
        />
        <TextField
          fullWidth
          label="Ссылка"
          name="link"
          value={editedInfo.link}
          onChange={handleInputChange}
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          fullWidth
          label="Статус"
          name="status"
          value={editedInfo.status}
          onChange={handleInputChange}
          sx={{ marginBottom: '10px' }}
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Сохранить
        </Button>
        <Button onClick={onClose} variant="contained" color="secondary">
          Отмена
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoEditDialog;
