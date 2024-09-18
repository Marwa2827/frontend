
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Add Product</h1>
      <form>
        <label htmlFor='productname'>Product Name</label>
        <input type='text' placeholder='Enter product name' name='productname'/>

        <label htmlFor='productdescription'>Product Description</label>
        <textarea name='Description' id='Description' cols={30} rows={10} placeholder='Enter Description'></textarea>

        <button type='button'>Add</button>
      </form>
    </div>
  );
}

export default App;
