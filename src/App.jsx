import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import products from './data'

function App() {
  console.log(products)
  //const ishiring = true;
  // add state in here
  const [productList, setProductList] = useState(products)
  const [value, setValue] = useState("");
   const [ishiring,setIsHiring]=useState(true)

  const [form, setForm] = useState({
    itemName: "",
    price: 0,
    description: "Describe this item",
})


// handleChange function
   const handleChange = (e) => {
    const {name , value} = e.target;
    setForm({
      ...form, [name]:value,
    });
   }

// handleSubmit
  const  handleSubmit = (event) =>{ 
    event.preventDefault() 
    console.log('you prevented the default'); 
    console.log(form);
    const newProduct = form;
    setProductList([newProduct, ...productList])
    setForm({
      itemName: "",
      price: 0,
      description: "Describe this item",
    })
    }

const toggleHiring = () => { setIsHiring(!ishiring) }
  
  // return
  return (

    <div>
       <h1 onClick={toggleHiring}> Big Time Shopping </h1>
        {ishiring ? <h2>Yes, we are hiring </h2>: <h2>Sorry, try again tomorrow</h2>}
       
       <form onSubmit={handleSubmit}>  
         <input
          type="text"
          value={form.itemName}
          onChange={handleChange}
          name="itemName"
          placeholder="write name here"
        />
        <input
          type="number"
          value={form.price}
          onChange={handleChange}
          name="price"
          placeholder="write price here"
        />
        <input
          type="description"
          value={form.description}
          onChange={handleChange}
          name="description"
          placeholder="describe the product"
        />
        <button type='submit'>Submit</button>
 </form > 
 <div> <h2>Preview our new item</h2> <h3>{form.itemName}</h3> 
             <h4>{form.price}</h4> 
             <h5>{form.description}</h5> </div>

      <ul> {productList.map(item => <li>{item.itemName}{item.price}</li>)} 
      </ul>   
    </div>
  )
}

export default App;