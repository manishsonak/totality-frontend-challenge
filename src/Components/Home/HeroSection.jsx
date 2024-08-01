

function HeroSection() {
  return (
   <div className="lg:w-[1100px] lg:min-h-[70vh] min-h-fit md:w-full lg:flex-row flex-col-reverse backimage mx-auto gap-6 bg-green-400 my-2 flex justify-evenly items-center ">
   
   <div className="flex flex-col w-2/3 lg:px-10 left justify-evenly h-80 ">
       <h2 className="text-xl font-normal text-blue-500 lg:text-4xl">Find Your Perfect Rental Home</h2>
       <p className="w-full text-sm lg:text lg:text-justify">Discover the best rental properties in your desired location. Whether you&apos;re looking for a cozy apartment, a spacious house, or a luxury condo, we have something for everyone.</p>
       <a href="#lists"> <button className="px-3 py-2 font-normal tracking-normal text-white uppercase bg-blue-500 rounded-lg btn lg:w-52">Start Your Search</button></a>
   </div>
   <div className="w-2/3 right ">
  <img className="rounded-lg shadow-lg" src="https://assets.softr-files.com/applications/fc5edba4-7b6c-41e3-90af-516a377b1e59/assets/c3560bc1-39f1-4eea-9353-7be2a318f7bf.png" alt="" />
   </div>
  
   </div>
  )
}

export default HeroSection