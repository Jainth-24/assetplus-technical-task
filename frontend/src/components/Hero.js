import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Hero.css';

const Hero = ({ open, setOpen }) => {
  const [post, setPost] = useState();
  const [selectedid, setSelectedId] = useState();
  const [openEditModal, setOpenEditModal] = React.useState();

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/post/${id}`);
  };
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:8000/post');
      setPost(response?.data);
    }
    fetchData();
  }, [open, selectedid, setOpen, openEditModal]);

  return (
    <div className="gridContainer">
      {post?.map((post) => (
        <div>
          <Card
            title={post.title}
            imgUrl={post.imgUrl}
            desc={post.desc}
            id={post._id}
            handleDelete={handleDelete}
            setSelectedId={setSelectedId}
            setOpenEditModal={setOpenEditModal}
            openEditModal={openEditModal}
            createdAt={post.createdAt}
          />
        </div>
      ))}
    </div>
  );
};

export default Hero;
