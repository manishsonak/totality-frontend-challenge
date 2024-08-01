import { useContext } from "react";
import Card from "../Cards/Card";
import MyContext from "../Context/MyContext";


function Cart() {

    const {cart}=useContext(MyContext);
    const totalValue = cart.reduce((acc, item) => acc + item.price * 1, 0);

  return (
    <div className="flex flex-col gap-8 px-4 py-4 mx-auto lists lg:h-screen lg:flex-row">
       
        <div className="flex-grow left">
        <div className="flex flex-wrap gap-4 overflow-scroll lg:max-h-screen hidescroll">
                {
       cart.length>0 && cart?.map((room)=>
          <Card key={room.id} img={room.image} name={room.name} location={room.location} price={room.price} badroom={room.bedroom} data={room} id={room.id}/>
        )
        || <h2 className="block w-full text-2xl text-center text-gray-400"> No Rooms Available</h2>
       }
        </div>
        </div>

        <div className=" lg:w-[40vw] lg:min-h-92">

        <div className="top-0 h-full p-4 bg-white shadow-md ">
      <h2 className="mb-4 text-2xl font-bold">Cart</h2>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li key={item.id} className="flex items-center justify-between">
            <span>{item.name}</span>
            <span>{item.price} x {item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4 mt-8 border-t">
        <h3 className="text-xl font-semibold text-end">Total: ${totalValue.toFixed(2)}</h3>
      </div>
      <div className="flex justify-end mt-10">
  <button className="px-3 py-2 text-white bg-green-700 rounded-xl">Proceed to pay</button>
</div>
    </div>


       </div>

        </div>
    
  )
}

export default Cart