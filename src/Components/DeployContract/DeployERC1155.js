import React, { useState } from 'react'
import {NFTStorage} from 'nft.storage'
import { ERC1155ABI, ERC1155Bytecode } from './Constants/Constants';
import { connect } from "@argent/get-starknet"


function DeployERC1155({open}) {

    const [name, setName]= useState()
    const [symbol, setSymbol]= useState()
    const [imgName, setImgName]= useState()
    const [descriptionData ,setDescriptionData] = useState()
    const [uploadFile ,setUploadFile] = useState()
    const [txHash, setTxHash] = useState() 
    const [provider, setProvider] = useState()
    const [isConnect,setIsConnected] = useState("Connect")
    const [Address, setAddress] = useState()

    if(!open){
        return null
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


//   Uploadig NFT data to IPFS
    const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFhNWNiQTlFYkQwRTcxZWE4NTA0Zjk5NGE0MkNBOUE3MWRlQTkwZTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MTU3NjQ1MTE4MCwibmFtZSI6Ikluc3RpdHV0ZSBNYW5hZ2VtZW50In0.s4o-sf9pRDr7oZq-zTDiedhNm49JW_AKGibtGOCg9VY'

const uploadNFTContent = async(inputFile)  =>{
    const nftStorage = new NFTStorage({token: API_KEY,})

    try {
        const metaData = await nftStorage.store({
            name:imgName,
            description: descriptionData ,
            image:inputFile
            
        });

        deployContract(metaData.url)
        return metaData
    } catch (error) {
        alert(error)
    }
  }

  const handleFileUpload= async(event) =>{
    event.preventDefault()
    setUploadFile(event.target.files[0])
  }

  const mintNFTToken = async(event , uploadedFile) =>{
    event.preventDefault()
    const metadata = await uploadNFTContent(uploadFile)
  }

  const deployContract = async (metaData) => {
    await connectFun()
    
    // Update ERC1155 Contract Hash.
    // Test contract Hash, not original ERC1155 contract Hash. Just update contract Hash to deploy the new contract
    const contractClassHash = '0x077b6790bcb0b797564e8a5e05dd5b978739f415228404e9ba04a3a9e96e18be'; // 
    console.log("Deployment Tx - Contract to StarkNet...");

    const salt = (Date.now()).toString(); 

    const deployContractRes = await provider.deploy({ classHash: contractClassHash, salt,
                
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

    function Getname(e){
        console.log(e.target.value)
        setName(e.target.value)
    }
    function Getsymbol(e){
        console.log(e.target.value)
        setSymbol(e.target.value)
    }
    function ImgName(e){
        console.log(e.target.value)
        setImgName(e.target.value)
    }
    function DescriptionData(e){
        console.log(e.target.value)
        setDescriptionData(e.target.value)
    }


    return (
    <div>
        <h1>ERC1155 contract deployment</h1>

        <form className='form'>
              <label className='label1' htmlFor="chooseFile">Upload NFT image
              <input className='fileUpload' type="file" id='chooseFile' onChange={handleFileUpload}/>
              </label>
        </form>

        <br />
        <h3>Enter Name</h3>
        <input type="text" placeholder='Enter Collection Name' onChange={Getname}/>
        <input type="text" placeholder='Symbol' onChange={Getsymbol}/>
        <input type="text" placeholder='Image Name' onChange={ImgName} />
        <input type="text" placeholder='Ehter Decription' onChange={DescriptionData} />
        <br />
        <br />
        <button onClick={mintNFTToken}>Deploy Contract</button>
    </div>
  )
}
}

export default DeployERC1155 