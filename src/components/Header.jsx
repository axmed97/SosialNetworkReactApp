import React, { useEffect } from "react";
import Auth from "./Auth";
import Message from "./Message";
import { useSelector } from "react-redux";

const Header = () => {
  // const [auth, setAuth] = useState(true);

  const {userinfo} = useSelector(x => x.user)
  useEffect(() => {
  }, [userinfo])

  return (
    <div id="header" className="bg-cyan-950">
      <div className="container mx-auto py-3">
        <div className="flex justify-between items-center">
          <div className="logo text-white text-2xl font-black">LOGO</div>
          <div>
            {
                userinfo.success ? 
                (
                    <div className="flex items-center"> 
                        <Message />
                        <Auth />
                    </div>
                ) :
                (
                    <div className="text-white italic tracking-widest">
                        Login/Register
                    </div>
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
