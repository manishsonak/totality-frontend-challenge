

function Subscribe() {
  return (
    <div className="bg-blue-500 lg:h-[50vh]  flex justify-center items-center flex-col text-white  relative ">
            <img className="absolute top-0 h-[50vh] w-full text-white"  src="https://assets.softr-files.com/applications/fc5edba4-7b6c-41e3-90af-516a377b1e59/assets/217af23a-9206-4a33-a12c-ffa2f3f1c9cf.svg" alt="" />

            <h1 className="my-2 text-3xl lg:mb-5 "> Stay Updated.</h1>
            <p className="my-2 lg:my-5">
            Get notified of new listings from your inbox.
            </p>
            <form className="z-10 my-2 lg:mt-5">
                <input className="px-2 py-2 mr-2 text-black rounded-lg outline-none" type="email" placeholder="Email" />
                <button className="px-3 py-2 border-2 border-white rounded-lg cursor-pointer btn">Subscribe</button>
            </form>
    </div>
  )
}

export default Subscribe

