import logo from "../../assets/images/LogoI.png";
const Footer = () => {
  return (
    <footer className="px-4 divide-y  text-gray-800 relative bottom-0 left-0">
      <div className="py-6 flex justify-center items-center text-sm text-center text-gray-400">
        <img className="h-12 w-12" src={logo} alt="" />
        <p>© City Scape Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
