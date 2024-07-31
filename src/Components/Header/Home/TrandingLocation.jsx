/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


function TrandingLocation(props) {
    const {image,City,description}=props
  return (
    <div className="card ">
        <img className="transition-all shadow-xl rounded-xl h-52 w-80 hover:scale-110" src={image} alt="hii" />

        <div className="text-center">
            <h2 className="my-3 text-2xl text-blue-500">{City}</h2>
            <p className="text-lg text-gray-400">{description}</p>
            <button className="mt-6 text-sm text-blue-500">Read more</button>
        </div>
    </div>
  )
}

export default TrandingLocation