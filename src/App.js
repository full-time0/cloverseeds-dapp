import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import HomePage from "./pages/Home";
import MyLand from "./pages/MyLand";
import MyNFT from "./pages/MyNFT";
import PreSaleMint from "./pages/PreSaleMint";
import VipMint from "./pages/VipMint";
import Whitepaper from "./pages/Whitepaper";
// import { connectWallet, disconnectWallet, getCoinbase } from "./functions/Setup"

function App() {

  const [ coinbase, setCoinbase ]= useState('')
  const [ isWalletConnect, setIsWalletConnect ] = useState(false)
  const [ walletButtonText, setWalletButtonText ] = useState('Connect')

  // const handleConnection = async () => {
  //   try {
  //     const isConnected = await connectWallet()
  //     const accounts = await getCoinbase()
  //     setCoinbase(accounts)
  //     setIsWalletConnect(isConnected)
  //     setWalletButtonText('Disconnect')
  //   } catch (e) {
  //     alertify.error(String(e))
  //   }
  // }

  // const handleDisConnection = async () => {
  //   try {
  //     // const disconnect = await disconnectWallet()
  //     setCoinbase('')
  //     setIsWalletConnect(false)
  //     setWalletButtonText('Connect')
  //   } catch (e) {
  //     alertify.error(String(e))
  //   }
  // }

  return (
    <div className="wrapper">
      {/* <Routes>
        <Route path="/" element={<HomePage coinbase={coinbase} isWalletConnect={isWalletConnect} walletButtonText={walletButtonText} handleConnection={!isWalletConnect? handleConnection : handleDisConnection} />} />
        <Route path="/my-nft" element={<MyNFT coinbase={coinbase} isWalletConnect={isWalletConnect} walletButtonText={walletButtonText} handleConnection={!isWalletConnect? handleConnection : handleDisConnection} />} />
        <Route path="/my-land" element={<MyLand coinbase={coinbase} isWalletConnect={isWalletConnect} walletButtonText={walletButtonText} handleConnection={!isWalletConnect? handleConnection : handleDisConnection} />} />
        <Route path="/vip-mint" element={<VipMint coinbase={coinbase} isWalletConnect={isWalletConnect} walletButtonText={walletButtonText} handleConnection={!isWalletConnect? handleConnection : handleDisConnection} />} />
        <Route path="/presale-mint" element={<PreSaleMint coinbase={coinbase} isWalletConnect={isWalletConnect} walletButtonText={walletButtonText} handleConnection={!isWalletConnect? handleConnection : handleDisConnection} />} />
        <Route path="/whitepaper" element={<Whitepaper coinbase={coinbase} isWalletConnect={isWalletConnect} walletButtonText={walletButtonText} handleConnection={!isWalletConnect? handleConnection : handleDisConnection} />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-nft" element={<MyNFT />} />
        <Route path="/my-land" element={<MyLand />} />
        <Route path="/vip-mint" element={<VipMint />} />
        <Route path="/presale-mint" element={<PreSaleMint />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </div>
  );
}

export default App;
