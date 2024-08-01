/* eslint-disable no-unused-vars */

import { useContext } from "react"
import MyContext from "../Context/MyContext"

function Card(prop) {
    const {img,location,price,name,badroom,data,id}=prop

    const {cart,setCart}=useContext(MyContext);

    const addToCart=()=>{
      const datasave=[...new Set([...cart,data])]

      setCart(datasave)

      alert("Product Added Sucessfully")
    }

    const removeFromCart=()=>{
      const datasave=cart.filter((item)=>item!==data)

      setCart(datasave)
      alert("Product Deleted Sucessfully")
    }

  return (
   <>
   
   <div className="relative lg:w-[300px] overflow-hidden mx-auto bg-gray-100 rounded-xl card min-h-fit shadow-lg hover:scale-100 transition-all">
    {
      id?<p onClick={removeFromCart} className="absolute top-0 z-10 px-2 text-red-600 bg-black cursor-pointer right-1">X</p>:""
    }
    <div className="absolute px-2 py-1 text-sm text-blue-500 uppercase bg-white rounded-full right-4 top-2">{badroom} Bedroom </div>
   <div className="img">
   <img className=" h-[200px] w-[3000px] cursor-pointer  rounded-xl "  src={img} alt={name} />
   </div>
   <div className="px-4 content">
    <h2 className="my-2 text-xl font-bold capitalize ">{name}</h2>
    <p className="mb-2 text-lg font-light capitalize ">{location}</p>
    <p className="content-center mb-3 text-lg ">${price} <span className="text-sm"> per Month</span> </p>

   
   {
    !id?  <button onClick={addToCart} className="absolute px-3 py-2 rounded-lg bottom-1 right-1"> <i className="fa-solid fa-cart-shopping"></i></button>:""
   }
   
    {/* <button className="inline px-3 py-2 mb-2 text-white bg-black rounded-lg text-end">Add to Cart</button> */}
    
   </div>
   </div>



   </>
  )
}

export default Card