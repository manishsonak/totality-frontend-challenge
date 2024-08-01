/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import MyContext from "./MyContext"

const ContextProvider = ({children}) => {



    const [filtered,setfiltered]=useState([])
    

    const [token,setToken]=useState("");

    const [cart,setCart]=useState([])

    const rooms=[
        {
          "id": 6,
          "name": "Taj Mahal Palace",
          "location": "Mumbai, India",
          "price": 5000,
          "image": "https://plus.unsplash.com/premium_photo-1697729434815-40ab4970ebc1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGFqJTIwTWFoYWwlMjBQYWxhY2UlMjBtdW1iYWl8ZW58MHx8MHx8fDA%3D",
          "bedroom": "3"
      },
      {
          "id": 7,
          "name": "Leela Palace",
          "location": "New Delhi, India",
          "price": 6000,
          "image": "https://plus.unsplash.com/premium_photo-1697729603596-90888a05a6bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "bedroom": "4"
      },
      {
          "id": 8,
          "name": "Oberoi Udaivilas",
          "location": "Udaipur, India",
          "price": 7000,
          "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE9iZXJvaSUyMFVkYWl2aWxhcyUyMCUyMGhvdGVsfGVufDB8fDB8fHww",
          "bedroom": "5"
      },
      {
          "id": 9,
          "name": "ITC Grand Chola",
          "location": "Chennai, India",
          "price": 4500,
          "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE9iZXJvaSUyMFVkYWl2aWxhcyUyMCUyMGhvdGVsfGVufDB8fDB8fHww",
          "bedroom": "3"
      },
      {
          "id": 10,
          "name": "Trident",
          "location": "Jaipur, India",
          "price": 3000,
          "image": "https://www.bing.com/th?id=OADD2.7421765055757_1HFHO34A3B80PET4XM&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=472&h=247&rs=2&qlt=100",
          "bedroom": "2"
      },
      {
          "id": 11,
          "name": "Vivanta by Taj",
          "location": "Bangalore, India",
          "price": 3500,
          "image": "https://luxurylaunches.com/wp-content/uploads/2010/09/vivanta-taj.jpg",
          "bedroom": "3"
      },
      {
          "id": 12,
          "name": "The Oberoi",
          "location": "Mumbai, India",
          "price": 5500,
          "image": "https://th.bing.com/th/id/OIP.fzMTJOFMTLCuVGBtzl9yfAHaE8?w=267&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
          "bedroom": "4"
      },
      {
          "id": 13,
          "name": "The Leela Kovalam",
          "location": "Kerala, India",
          "price": 6500,
          "image": "https://www.indianholiday.com/pictures/hotel/hotelgalleryn/the-leela-5451-15.jpg",
          "bedroom": "5"
      },
      {
          "id": 14,
          "name": "Rambagh Palace",
          "location": "Jaipur, India",
          "price": 7500,
          "image": "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/18000000/17310000/17300800/17300750/6dc12a13_z.jpg?w=580&h=300&mode=crop&scale=both&anchor=middlecenter&quality=80",
          "bedroom": "2"
      },
      {
          "id": 15,
          "name": "The Claridges",
          "location": "New Delhi, India",
          "price": 4000,
          "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/c2/9c/80/the-claridges-new-delhi.jpg?w=1200&h=-1&s=1",
          "bedroom": "3"
      },
      {
          "id": 16,
          "name": "Park Hyatt",
          "location": "Chennai, India",
          "price": 5000,
          "image": "https://davidmitchener.com/wp-content/uploads/2018/08/PHB_Exterior_Horizontal_LowRes-705x433.jpg",
          "bedroom": "1"
      },
      {
          "id": 17,
          "name": "The Lalit",
          "location": "Kolkata, India",
          "price": 3500,
          "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/53/a5/b6/the-lalit-new-delhi.jpg?w=2000&h=-1&s=1",
          "bedroom": "3"
      },
      {
          "id": 18,
          "name": "Hyatt Regency",
          "location": "Pune, India",
          "price": 3000,
          "image": "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/21/1452/PERTH-P107-Pool.jpg/PERTH-P107-Pool.16x9.jpg?imwidth=2560",
          "bedroom": "2"
      },
      {
          "id": 19,
          "name": "Taj West End",
          "location": "Bangalore, India",
          "price": 4500,
          "image": "https://cfw43.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoibXltYW5kYXAuaW4iLCJ2IjozNTA3MDAwMTg5LCJpIjoiOWUzZWZjZDUtZGQ2ZS00ODZiLWIwZWItM2Q5ZDVjNzg1ZDAwIn0/wp-content/uploads/2019/08/the-taj-west-end-wedding-venue-in-bangalore-1.jpg",
          "bedroom": "4"
      },
      {
          "id": 20,
          "name": "JW Marriott",
          "location": "Mumbai, India",
          "price": 5500,
          "image": "https://luxelistreviews.com/wp-content/uploads/2014/08/1-MAIN-Exterior-of-JW-Marriott-Las-Vegas-Resort-Spa-Courtesy-JW-Marriott-Las-Vegas-Resort-and-Rampart-Casino.jpg",
          "bedroom": "1"
      }
      
      ]

      const allrooms=()=>{
        setfiltered(rooms)
      }

      const filterbyroom=(value)=>{

        if(value==="all"){

           setfiltered(rooms)
        }else if(value==="5+"){
            const filtered=rooms.filter(room=>room.bedroom>=5)
            
            console.log(filtered);
            
            setfiltered(filtered)
        }
        else{
            const filtered=rooms.filter(room=>room.bedroom===value)
            
            setfiltered(filtered)
        }
      }

      useEffect(() => {
        allrooms();
      }, []);

      const searchhotel=(value)=>{


        if (value=="all") {

            
            return setfiltered(rooms)
        }

        const byLocation=rooms?.filter((hotel)=>hotel.location.toLowerCase().includes(value.toLowerCase()))

        const byCity=rooms?.filter((hotel)=>hotel.name.toLowerCase().includes(value.toLowerCase()))


        
        const data=[...new Set([...byLocation, ...byCity])]
        
        setfiltered(data)
        


      }

     
     const filterbycity=(filt)=>{

       let filters= rooms.filter((room)=>(
        room.location.toLowerCase().includes(filt.toLowerCase())
       ))

       if (filters.length > 0) {
        setfiltered(filters);
      } else {
        setfiltered([]); 
      }
       

     } 



    

  return (
   <MyContext.Provider value={{cart,setCart,token,setToken,rooms,filterbycity,filtered,allrooms,filterbyroom,searchhotel}}>
    {children}
   </MyContext.Provider>
  )
}

export default ContextProvider
