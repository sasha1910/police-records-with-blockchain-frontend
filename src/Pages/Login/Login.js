
import Web3 from "web3";
import { useState } from "react";
import {useNavigate } from "react-router-dom";

import "./Login.css";
import ConnectWalletButton from "../../Componenets/WalletButton/ConnectWalletButton"
import mobileCheck from "../../Componenets/WalletButton/helpers/mobileCheck";
import getLinker from "../../Componenets/WalletButton/helpers/getLinker";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const navigate=useNavigate();

  const onPressConnect = async () => {
    setLoading(true);

    try {
      const yourWebUrl = ""; // Replace with your website domain
      const deepLink = `https://metamask.app.link/dapp/${yourWebUrl}`;
      const downloadMetamaskUrl = "https://metamask.io/download.html";

      if (window?.ethereum?.isMetaMask) {
        // Desktop browser
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = Web3.utils.toChecksumAddress(accounts[0]);
        setAddress(account);

        if (account==0xe8c1db146c5ffa8e954d31a8abD57cec197B659A) {
          navigate("/admindashboard")
        }
         else if(account==0x4049C9cA8DFC3Be414B2Ac06151BFa8be0C6773a) {
          navigate("/adminviewcriminals")
        }
         else if(account==0x78D84912160927dA58d1AcCE927145c51efb3516) {
          navigate("/adminviewcoart")
        }
        else{
          navigate("/")
        }
        
      } else if (mobileCheck()) {
        // Mobile browser
        const linker = getLinker(downloadMetamaskUrl);
        linker.openURL(deepLink);
      } else {
        window.open(downloadMetamaskUrl);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const onPressLogout = () => setAddress("");

  return (
    <div>
    <div className="login">
     
      <header  className="header" >
        <p>POLICE RECORDS MANAGEMENT SYSTEM</p>
     <div className="header_content">
       
        <a href="/" className="about">Home</a>
        <a href="/about" className="about">About</a>
        <a href="/contact" className="about">Contact</a>
        
      
        
  
        </div>
        
       
      </header>
      <div className="body">
        <div className="Login_card">
          <div className="metamask_image">
         
          </div>
          <div className="login_button">
          <ConnectWalletButton
          onPressConnect={onPressConnect}
          onPressLogout={onPressLogout}
          loading={loading}
          address={address}
        />
          </div>
        
        </div>
          
        </div>
    </div>
    </div>
  );
};

export default Login;
