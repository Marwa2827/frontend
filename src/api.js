import axios from 'axios';

const API_BASE_URL = 'http://localhost:5225/api'; 

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const productsApi = {
  getAllProducts: () => api.get('/products'),
  getProduct: (id) => api.get(`/products/${id}`),
  createProduct: (product) => api.post('/products', product),
  updateProduct: (id, product) => api.put(`/products/${id}`, product),
  deleteProduct: (id) => api.delete(`/products/${id}`),
};