/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { useContext, useEffect, useState } from "react";
import MyContext from "../Context/MyContext";
import Card from '../Cards/Card'

function Lisining() {
  const {filtered,filterbycity,filterbyroom,searchhotel}=useContext(MyContext);
  const [search,setSearch]=useState("");

  const handleform=(e)=>{
    

      setSearch(e.target.value)


      searchhotel(e.target.value)
    

     

  }

 const Serachfilter=()=>{
  
  searchhotel(search)
 }


 

  return (
    <div className=" lg:min-h-[120vh] heading mb-10" id="lists">
      <h1 className="mb-10 text-4xl text-center text-blue-500 "> List Your Property</h1>
      <div className="lg:w-[1100px] mx-auto items-center pl-2 w-[300px]  sm:w-[400px] bg-gray-100 overflow-hidden flex justify-between  rounded-lg ">
        <svg
        className="hidden sm:block"
       
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="7" stroke="gray" strokeWidth="2" />
          <line
            x1="16.65"
            y1="16.65"
            x2="22"
            y2="22"
            stroke="gray"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input className="flex-grow px-4 py-2 bg-transparent outline-none " value={search} onChange={handleform} type="search" placeholder="Search by location or name" />
        <button className="px-3 py-2 text-white bg-blue-500 " onClick={Serachfilter}>Search</button>

      </div>
      <div className="flex flex-col gap-8 px-4 py-4 lists lg:h-screen lg:flex-row">
        <div className="filters min-w-52">
          <div className="lg:pl-10 by_bad">
            <h2 className="">Filter by Bedrooms</h2>
            <div className="flex mx-auto overflow-auto content-center md:text-[12px] text-[10px] text-gray-400 lg:flex-col lg:text-center ">
              <p className="px-2 py-1 my-4 transition rounded-lg cursor-pointer hover:bg-gray-100 " onClick={()=>{
              filterbyroom("all");
            }} >ALL</p>
            <p className="px-2 py-1 my-4 transition rounded-lg cursor-pointer hover:bg-gray-100 " onClick={()=>{
              filterbyroom("1");
            }}>1 BEDROOM</p>
            <p className="px-2 py-1 my-4 transition rounded-lg cursor-pointer hover:bg-gray-100 " onClick={()=>{
              filterbyroom("2");
            }}>2 BEDROOM</p>
            <p className="px-2 py-1 my-4 transition rounded-lg cursor-pointer hover:bg-gray-100 " onClick={()=>{
              filterbyroom("3");
            }} >3 BEDROOM</p>
           
            <p className="px-2 py-1 my-4 transition rounded-lg cursor-pointer hover:bg-gray-100 " onClick={()=>{
              filterbyroom("4");
            }} >4 BEDROOM</p>
           
            <p className="px-2 py-1 my-4 transition rounded-lg cursor-pointer hover:bg-gray-100 " onClick={()=>{
              filterbyroom("5+");
            }} >5+ BEDROOM</p>
            </div>
          </div>
          <div className="lg:pl-10 loaction">
            <h2 className="">Filter by City</h2>
            <div className="flex gap-3 mx-auto overflow-auto text-sm text-gray-400 lg:flex-col text-start ">
            <p className="px-2 py-1 transition rounded-lg cursor-pointer hover:bg-gray-100 "    onClick={()=>{filterbycity("Delhi")}}    > Dellhi</p>
            <p className="px-2 py-1 transition rounded-lg cursor-pointer hover:bg-gray-100 "    onClick={()=>{filterbycity("Mumbai")}}    >Mumbai</p>
            <p className="px-2 py-1 transition rounded-lg cursor-pointer hover:bg-gray-100 "    onClick={()=>{filterbycity("Jaipur")}}    >Jaipur</p>
            <p className="px-2 py-1 transition rounded-lg cursor-pointer hover:bg-gray-100 "    onClick={()=>{filterbycity("Chennai")}}    >Chennai</p>
            <p className="px-2 py-1 transition rounded-lg cursor-pointer hover:bg-gray-100 "    onClick={()=>{filterbycity("Bangalore")}}    >Bangalore</p>
              </div>
          </div>
        </div>
        <div className=" right">
        <div className="flex flex-wrap gap-4 py-5 overflow-scroll rounded-lg shadow-md lg:max-h-screen hidescroll">
                {
       filtered.length>0 && filtered?.map((room)=>
          <Card key={room.id} img={room.image} name={room.name} location={room.location} price={room.price} badroom={room.bedroom} data={room}/>
        )
        || <h2 className="block w-full text-2xl text-center text-gray-400"> No Rooms Available</h2>
       }
        </div>
        </div>
      </div>
    </div>
  );
}

export default Lisining;
