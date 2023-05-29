"use client"
import axios from 'axios';

const API_KEY = process.env.UNSPLASH_KEY;

const api = axios.create({
  baseURL: 'https://api.unsplash.com',
});

export const fetchPhotos = async (query, page, order) => {
    try {
      const response = await api.get(`/photos/?client_id=v-Lh3JXBoz01lm9Zq-N8kIvGe1Mslr7Y7FpLbZoFUIc&query=${query}&page=${page}&per_page=30&order_by=${order}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const fetchPhoto = async (photoId) => {
  try {
    const response = await api.get(`/photos/${photoId}?client_id=v-Lh3JXBoz01lm9Zq-N8kIvGe1Mslr7Y7FpLbZoFUIc`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};