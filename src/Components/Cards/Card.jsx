/* eslint-disable no-unused-vars */

function Card(prop) {
    const {img,location,price,name,badroom}=prop
  return (
   <>
   
   <div className="relative lg:w-[300px] overflow-hidden mx-auto bg-gray-100 rounded-xl card min-h-fit shadow-lg hover:scale-100 transition-all">
    <div className="absolute px-2 py-1 text-sm text-blue-500 uppercase bg-white rounded-full right-4 top-2">{badroom} Bedroom </div>
   <div className="img">
   <img className=" h-[200px] w-[3000px] cursor-pointer  rounded-xl "  src={img} alt={name} />
   </div>
   <div className="px-4 content">
    <h2 className="my-2 text-xl font-bold capitalize ">{name}</h2>
    <p className="mb-2 text-lg font-light capitalize ">{location}</p>
    <p className="content-center mb-3 text-lg ">${price} <span className="text-sm"> per Month</span> </p>

   </div>
   </div>



   </>
  )
}

export default Card