import TrandingLocation from "./TrandingLocation"



function Locations() {

    const Locations=[
        {
            id:1,
            name:'Delhi',
            image:'https://media.istockphoto.com/id/1219712209/photo/high-rise-multi-story-skyscrapers-lit-up-at-night-with-small-houses-in-the-foreground-at.webp?b=1&s=170667a&w=0&k=20&c=p06_ge8CaTIXScihlzVYStGbmVAd-JS-0Tpkh2jgYO4=',
            description:'Delhi is the capital city of India.',

        },
        {
            id:2,
            name:"Mumbai",
            image:'https://imgs.search.brave.com/xyuXDQakrqdIa9PbGthq0-WJI4ah46KeC3mYM3r5O3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTg2/NzMzNDcyL3Bob3Rv/L3ZpZXctb2YtbXVt/YmFpLWNpdHktZnJv/bS1mbG9vci03NS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UGEtQnI4VFFXYUdp/WUdfNnRySTlPRjVf/b2dWY0VuZXJfdzht/WEplRlZVUT0',
            description:'Mumbai is the financial capital of India.',

        },
        {
            id:3,
            name:'Hadrabad',
            image:'https://imgs.search.brave.com/3Zqg_HG2PrXAo_NvZ4RahfPw9XEaEBVY2XOSkdtGPJY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzAwLzY1LzI3/LzM2MF9GXzgwMDY1/Mjc1NF9TS0hZYlpw/NWhPSUs1dVhlZTJy/dTg5dzgyZVRVcDRu/Sy5qcGc',
            description:'Hadrabad is the city of Nizams.',

        },
    ]

  return (
    <div className="container lg:w-[1200px] min-h-[80vh] rounded-lg mx-auto  flex justify-between flex-col">
        
        <h1 className="my-16 text-3xl font-bold text-center text-blue-500 ">Explore Tranding Locations</h1>

        <div className="flex flex-col items-center justify-between mb-10 lg:flex-row h-fit">
        {
                Locations?.map((loc)=>
                   (
                    <TrandingLocation key={loc.id} City={loc.name} description={loc.description} image={loc.image}/>
                   )
                ) || "Something went wrong"
            }
           
        </div>

    </div>
  )
}

export default Locations