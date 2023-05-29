"use client"
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '@components/LoadingSpinner';
import axios from 'axios';
import { motion } from 'framer-motion';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const ImageDetail = (inputData) => {
    const [image, setImage] = useState(null);


    const fetchData = async (page) => {
        const api = axios.create({
            baseURL: 'https://api.unsplash.com',
        });

        try {
            const response = await api.get(`/photos/${inputData.params.id}?client_id=v-Lh3JXBoz01lm9Zq-N8kIvGe1Mslr7Y7FpLbZoFUIc`);
            setImage(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData()
    }, [inputData.params.id]);

    if (!image) {
        return <LoadingSpinner />
  }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
        >
            <Paper
                elevation={3}
                sx={{
                width: 'auto',
                height:'90vh',
                maxWidth: '100%',
                maxHeight: '90vh%',
                margin: '0 auto 50px auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                }}
            >
            <div
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            overflow: 'hidden',
          }}
        >
          <img
            src={image.urls.full}
            alt={image.alt_description}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar alt={image.user.username} src={image.user.links.self} />
          <Typography variant="h6" component="div" style={{ marginLeft: '1rem' }}>
            {image.user.username}
          </Typography>

        </div>
        <Typography variant="h6" component="div" style={{ marginTop: '1rem' }}>
          {image.alt_description}
        </Typography>

        <Typography variant="body2" color="text.secondary" style={{ marginTop: '1rem' }}>
          {image.description ? image.description : 'No description available for this image'}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '1rem' }}>
          Created At: {image.created_at}
        </Typography>
        <Typography variant="body2" color="text.primary" style={{ marginTop: '1rem' }}>
          Total Likes {image.likes}
        </Typography>

      </Paper>
    </motion.div>
    );
    };

export default ImageDetail;
