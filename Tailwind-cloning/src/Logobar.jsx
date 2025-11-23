 
 function Logobar(){
    return(
     <div className="max-w-7xl mx-auto flex justify-between items-center px-16 py-3">
        <div>
          <img src="/image.png" alt="" className="" />
        </div>
        <div>

        </div>
        <div className="flex gap-5 divide-gray-200 divide-x">
           
           <div className="flex items-center gap-3 ">
            <img src="/call.svg" alt="" className=" w-6 h-6 " />
             <h3 className="text-blue-950 font-bold">4044 <br/>
             <span className="text-gray-700">Toll free</span></h3>
             
             
           </div>
           
           <div className="flex items-center gap-3">
            <img src="/sms.svg" alt="" className="w-6 h-6" />
            <h3 className="text-blue-950 font-bold">info@rssb.rw<br/>
            <span className="text-gray-700">Reach to us</span></h3>
           </div>
           
        </div>
     </div>
    )
 }

 export default Logobar;