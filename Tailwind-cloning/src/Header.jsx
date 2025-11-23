

function Header() {
  const tabs = [
    "HOME",
    "SCHEMES",
    "INVESTMENT",
    "MANAGEMENT",
    "ABOUT",
    "CAREERS",
    "NEWS & EVENTS",
  ];

  return (
    <div className="max-w-[1200px] mx-auto bg-blue-950 rounded-lg h-20">
      <div className="">
        <ul className="flex items-center gap-10 px-10 py-4 text-white">
        {tabs.map((tab) => (
          <li
            key={tab}
            className="relative cursor-pointer font-medium hover:opacity-90 group"
          >
            {tab}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5
             bg-[#F6C235] group-hover:w-full transition-all duration-300"></span>
          </li>
        ))}
      </ul>
      </div>
       
    </div>
      
    
  );
}

export default Header;
