import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="container mx-auto ">
       <div className="flex items-center justify-between mx-auto conatiner ">
       <div className="px-10 logo">
            <img className='w-12 rounded-full' src={logo} alt="" />
        </div>
        <div className="px-10 auth">
            <button className='px-2 py-1 font-bold text-blue-500 border-2 border-blue-400 rounded-md'>
                <a href="" className='text-sm'>LOG IN/SIGN UP </a>
            </button>
        </div>
       </div>
      
    </div>
  )
}

export default Navbar
