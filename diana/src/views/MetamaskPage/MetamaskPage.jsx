import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { Button } from "antd";

export default function MetamaskPage(){
  
  const [address, setAddress] = useState('');

  useEffect(() => {
    const connectToMetamask = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAddress(accounts[0]);
          
        } catch (error) {
          console.error(error);
        }
      }
    };
    connectToMetamask();
  }, []);
  return (
    <div>
      {address ? (
        <div>
          <p>Connected to MetaMask with address: {address}</p>
        </div>
      ) : (
        <Button type="primary">Connect with MetaMask</Button>
      )}
    </div>
  );
};

