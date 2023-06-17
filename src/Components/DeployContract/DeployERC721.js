import React from 'react'
import { ERC721ABI, ERC721Bytecode } from './Constants/Constants'
import { useState } from 'react'
import { connect } from "@argent/get-starknet"

function DeployERC721({open}) {

    const [name, setName]= useState()
    const [symbol, setSymbol]= useState()
    const [baseURI, setBaseURI]= useState()
    const [NFTSupply, setNFTSupply]= useState(10000)
    const [txHash, setTxHash] = useState() 
    const [provider, setProvider] = useState()
    const [isConnect,setIsConnected] = useState("Connect")
    const [Address, setAddress] = useState()

    if(!open){
        return null;
    }

    else{


        const connectFun = async() => {
            try{
        
                const starknet = await connect()
                await starknet?.enable({ starknetVersion: "v4" })
                setProvider(starknet.account)
                setAddress(starknet.selectedAddress)
                setIsConnected("Connected")
           }
           catch(error){
                alert(error.message)
           }
          }


  const deployContract = async () => {
    await connectFun()
    // Update ERC721 Contract Hash.
    const contractClassHash = '0x0238a1f2b3a1b36bb57bad9200f20bb91c6e812d8a952876de29c57213314465'; // Test2.sol   
    console.log("Deployment Tx - Contract to StarkNet...");

    const salt = (Date.now()).toString(); 

    const deployContractRes = await provider.deploy({ classHash: contractClassHash, salt,});

        console.log("Waiting for Tx to be Accepted on Starknet - Contract Deployment...");
        await provider.waitForTransaction(deployContractRes.transaction_hash);

        const txReceipt = await provider.getTransactionReceipt(deployContractRes.transaction_hash);
        console.log("txReceipt",txReceipt)
        // console.log("This the maing hash that containg actual contract address.",txReceipt.transaction_hash)
        const deployedContractAddress = txReceipt.events[0].data[0]
        window.alert("Contract Deployed successfully at:  ",deployedContractAddress)
        setTxHash(deployedContractAddress);

  }

  // Taking the contract information from the user
    function Getname(e){
        console.log(e.target.value)
        setName(e.target.value)
    }
    function Getsymbol(e){
        console.log(e.target.value)
        setSymbol(e.target.value)
    }
    function GetURI(e){
        console.log(e.target.value)
        setBaseURI(e.target.value)
    }
    function GetSupply(e){
        console.log(e.target.value)
        setNFTSupply(e.target.value)
    }


    return (
    <div>
        <h1>ERC721 contract deployment</h1>

        <br />
        <h3>Enter Name</h3>
        <input type="text" placeholder='Enter Collection Name' onChange={Getname}/>
        <input type="text" placeholder='Symbol' onChange={Getsymbol}/>
        <input type="text" placeholder='Base Uri' onChange={GetURI} />
        <input type="text" placeholder='Total Supply' onChange={GetSupply} />
        <br />
        <br />
        <button onClick={deployContract}>Deploy Contract</button>
        <br /><br />
    </div>
  )

    }
}

export default DeployERC721