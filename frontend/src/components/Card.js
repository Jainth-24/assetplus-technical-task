import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditModal from './EditModal';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard({
  title,
  imgUrl,
  desc,
  id,
  handleDelete,
  setSelectedId,
  openEditModal,
  setOpenEditModal,
  createdAt,
}) {
  const handleOpen = () => setOpenEditModal(true);
  const handleClose = () => setOpenEditModal(false);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={title} subheader={formatDate(createdAt)} />
        <CardMedia
          component="img"
          height="194"
          width={'1'}
          image={imgUrl}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {desc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              setSelectedId(id);
              handleDelete(id);
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <EditIcon onClick={() => handleOpen()} />
          </IconButton>
        </CardActions>
      </Card>
      <EditModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        openEditModal={openEditModal}
        id={id}
      />
    </>
  );
}
