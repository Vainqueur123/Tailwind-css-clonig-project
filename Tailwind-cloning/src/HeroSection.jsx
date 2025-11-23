import { useEffect, useState } from "react";


    const slideShow = [
        {
            image:"/1_public.png",
            text:"We are here for you occupational hazards",
        },
        {
            image:"/2_public.png",
            text:"EJOHEZA save for better future for you and your family",
        },
        {
            image:"/3_public.png",
            text:"MemebeMember First , data-driven, evidence-based and high performing organization.",
        },
        {
            image:"/4_public.png",
            text:"Our health our future",
        },
        {
            image:"/5_public.png",
            text:"Enjoy your Maternity Leave with your full salary.",
        },
        

    ];

function HeroSection(){
const [index, setIndex] = useState(0);

useEffect(() => {
    const timer = setInterval(()=>{
        setIndex((prev)=> (prev + 1) % slideShow.length);
    }, 4000);
    return () => clearInterval(timer);
}, []);

const currentSlide = slideShow[index];

    return(
        <div className=" w-350 h-100 bg-cover bg-center relative transition-all duration-700 "
                        style={{ backgroundImage: `url(${currentSlide.image})`,
                    }}>
            <div className="w-full bg-gray-200 bg-opacity-40 flex items-center">
                <div className="flex items-center gap-8 px-10">
                    <div className="text-blue-500 transition-opacity duration-700">
                        <h3 className="text-3xl font-bold px-8  mx-8"> {currentSlide.text}</h3><br/>
                        <button className="text-white mx-20 bg-blue-950 rounded w-40 h-15">Learn more</button>
                    </div>
                    <div className="w-full h-full">
                        <img 
                          src={currentSlide.image}
                          alt={currentSlide.text}
                          className="w-500 h-100 object-cover rounded-lg shadow-amber-100 transition-opacity duration-700 "
                        />

                    </div>

                  

                </div>

                    
            </div>
                    <div className="absolute flex flex-wrap mx-50 gap-10 top-80 bg-white">
                        <div className="bottom-7">
                        <img src="public/OIP.webp" className="w-5 h-5"/>
                        <h3 className="font-bold">
                            Member First
                        </h3>
                        <p className="text-gray-600">
                            <b className="text-black">13 Million</b> of Rwandans are<br/>
                            covered by RSSB services
                        </p>
                        </div>
                        <div className="">
                        <img src="/download.webp" className="w-5 h-5"/>
                        <h3 className="font-bold">
                            Experience
                            
                        </h3>
                        <p className="text-gray-600">
                            <b className="text-black">60 Years</b> of services for your<br/>
                            safety and well-being.
                        </p>
                        </div>
                        <div className="">
                        <img src="" className="w-5 h-5"/>
                        <h3 className="font-bold">
                            Branches
                        </h3>
                        <p className="text-gray-600">
                            Our services decentralized<br/>
                            in <b className="text-black">30 branches</b> for your <br/>satisfaction
                        </p>
                        </div>

                        <div className="">
                        <img src="" className="w-5 h-5"/>
                        <h3 className="font-bold">
                            Data-driven
                        </h3>
                        <p className="text-gray-600">
                            Learning from our data to<br/> 
                            improve the services offered <br/>
                            to our members
                        </p>  
                        </div>
                        
                    </div>
        </div>
    );

}
export default HeroSection;