import logo from "../assets/logo.png"; 

const Logo = ({ size = 5, textSize = "text-2xl" }) => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src={logo}
        alt="./assets/logo.png"
        className="w-[60px] h-[50px] -ml-3"
      />
      <span className={`${textSize} text-white font-bold font-poppins`}>
        DariKamiUntukmu
      </span>
    </div>
  );
};

export default Logo;