import { Button } from 'react-bootstrap';
import Header from './Header';
import {useState} from 'react';

function AddProducts(){
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [description,setDescription]=useState("");
    const [price,setPrice]=useState("");

    async function add(){
        console.warn(name, file, description, price);
        const formData = new FormData;
        formData.append('file',file);
        formData.append('price',price);
        formData.append('name',name);
        formData.append('description',description);
        
        let result = await fetch("http://localhost:8000/api/addProduct", {
        method:"POST",
        body: formData,
        });
        alert("Product added to Catalog!");
    }

    return(
        <div>
            <Header />
            <br/>
            <h1> Add Product</h1>
            <br/>
            <div className='col-sm-4 offset-sm-4'>
            <input type="text" className='form-control' onChange={(e) => setName(e.target.value)}
            placeholder='Product Name'></input>
            <br/>
            <input type="file" className='form-control' onChange={(e) => setFile(e.target.value)}
            placeholder='File'></input>
            <br/>
            <input type="text" className='form-control' onChange={(e) => setPrice(e.target.value)}
            placeholder='Price'></input>
            <br/>
            <input type="text" className='form-control' onChange={(e) => setDescription(e.target.value)}
            placeholder='Description'></input>
            <br/>
            <Button variant='dark' onClick={add}> Add to Catalog </Button>
            </div>
        </div>
    )
}
export default AddProducts