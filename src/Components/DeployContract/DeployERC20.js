import React from 'react'
import { ERC721ABI, ERC721Bytecode } from './Constants/Constants'
import { useState } from 'react'
import { connect } from "@argent/get-starknet"

function DeployERC20() {

    const [name, setName]= useState()
    const [symbol, setSymbol]= useState()
    const [NFTSupply, setNFTSupply]= useState(10000)
    const [txHash, setTxHash] = useState() 
    const [provider, setProvider] = useState()
    const [isConnect,setIsConnected] = useState("Connect")
    const [Address, setAddress] = useState()


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
    // Test contract Hash, not original ERC20 contract Hash. Just update contract Hash to deploy the new contract
    const contractClassHash = '0x077b6790bcb0b797564e8a5e05dd5b978739f415228404e9ba04a3a9e96e18be'; // 
    console.log("Deployment Tx - Contract to StarkNet...");

    const salt = (Date.now()).toString(); 

    const deployContractRes = await provider.deploy({ classHash: contractClassHash, salt,
        name, symbol, NFTSupply,
    });

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

    function GetSupply(e){
        console.log(e.target.value)
        setNFTSupply(e.target.value)
    }


    return (
    <div>
        <h1>Create ERC20 token</h1>

        <br />
        <h3>Enter Name</h3>
        <input type="text" placeholder='Enter Token Name' onChange={Getname}/>
        <input type="text" placeholder='Symbol' onChange={Getsymbol}/>
        <input type="text" placeholder='Total Supply' onChange={GetSupply} />
        <br />
        <br />
        <button onClick={deployContract}>Deploy Token</button>
        <br /><br />
    </div>
  )

    }
export default DeployERC20