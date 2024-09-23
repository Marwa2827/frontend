
import React, { useState } from 'react';
import { productsApi } from './api';
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('hjhfg');
      console.log(name);
      await productsApi.createProduct({ name, description });
      setMessage('Product added successfully!');
      setName(name);
      setDescription(description);
      
    } catch (error) {
      setMessage('Error adding product. Please try again.');
      console.error('Error:', error);
    }
  }

  return (
    <div className="container">
      <h1>Add Product</h1>
      <form>
        <label htmlFor='productname'>Product Name</label>
        <input type='text' placeholder='Enter product name' name='productname' 
        onChange={(e)=> setName(e.target.value)}/>

        <label htmlFor='productdescription'>Product Description</label>
        <textarea name='Description' id='Description' cols={30} rows={10} placeholder='Enter Description'
        onChange={(e)=> setDescription(e.target.value)}></textarea>

        <button type='button' onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default App;
