import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardActions, TextareaAutosize, TextField } from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [imgUrl, setImgUrl] = React.useState('');
  console.log(title);

  return (
    <div style={{ paddingRight: '10px' }}>
      <Button variant="contained" onClick={handleOpen}>
        Add Post
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{paddingBottom: "10px"}}>
            Create an new post
          </Typography>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Image Url"
              variant="outlined"
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Type the description of the post"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <CardActions>
            <Button
              variant="contained"
              style={{ margin: '0px' }}
              onClick={async () => {
                await axios.post(`http://localhost:8000/post`, {
                  title,
                  imgUrl,
                  desc,
                });
                handleClose();
              }}
            >
              Create
            </Button>
          </CardActions>
        </Box>
      </Modal>
    </div>
  );
}
