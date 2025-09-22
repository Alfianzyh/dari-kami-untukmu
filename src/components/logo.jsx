const Logo = ({ size = 5, textSize = "text-2xl" }) => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="/logo.png" 
        alt="Logo"
        className="w-[60px] h-[50px] -ml-3"
      />
      <span className={`${textSize} bg-gradient-to-r from-amber-700 to-red-800 text-transparent bg-clip-text text-2xl font-poppins`}>
        DariKamiUntukmu
      </span>
    </div>
  );
};

export default Logo;