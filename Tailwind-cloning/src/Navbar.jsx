

function Navbar(){
return(
 <nav className="bg-blue-50 border-b border-gray-200 shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-16 py-3">
        <div className="flex divide-x divide-gray-300">
        {['linkedin', 'x', 'face', 'tube', 'ig'].map(icon => <a key={icon} href="#" 
        className="px-4">
        <img src={`/${icon}.svg`} alt={icon} className="w-5 h-5" /></a>)}</div>
        <div className=""></div>
        <div className="flex gap-5">
          <h3 className="">Online Services<select></select></h3>
          <h3 className="">Publications</h3>
        </div>
    </div>  
 </nav>
)
}

export default Navbar;