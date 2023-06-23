import React, { useState, useEffect } from "react";
import Papa from "papaparse";

import { connect } from "@argent/get-starknet"
import { Contract } from 'starknet'
import '../CSS/App.css'
import { ERC721ABI } from "./DeployContract/Constants/Constants";

let array = []
const ERC721 = () => {
    
    const [isConnect,setIsConnected] = useState("Connect")
  const [Address, setAddress] = useState()
  const [provider, setProvider] = useState()


    const [singleAdd, setSingleAdd] = useState()
    const [splitArray, setSplitArray] = useState()

    const [totalSupply, setTotalSupply] = useState()
    const [totalMinted, setTotalMinted] = useState()

    const [metaTxCounter, setMetaTxCounter] = useState()

    const [contractAdd, setContractAdd] = useState("")
    const [gasCost, setGasCost] = useState()
	const changeHandler = (e)=>{

        Papa.parse(e.target.files[0],{
            header:true,
            skipEmptyLines:true,
            complete: function(results){
                let p= (results.data).length
                // console.log("Data:- ",(results.data))
                let arr1 = []
                for(let i =0; i < p; i++){

                    // console.log((results.data)[i]['add'])
                    arr1.push(((results.data)[i]['add']))// Just change "add" to address for the csv input
                }
                sliceArray(arr1)
            },
        })
    }

    const connectFun = async() => {
    }
    
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const contractInstance = new ethers.Contract(contractAdd, ERC721ABI, signer);

    const sliceArray= (arr)=> {
        const newArray=[];
        for(let i = 0; i < arr.length; i += 100 ){
            const chunk = arr.slice(i , i + 100)// just change 2 to 100
            newArray.push(chunk);
        }
        setSplitArray(newArray);
        array = newArray;
    }

    const mintNFTs = async() => {
        await connectFun();
        const contractInstance = new Contract (ERC721ABI,contractAdd,  provider) 
        const tx = contractInstance.mint(singleAdd)

    }




    const takeInputAdd = (e)=>{
        setSingleAdd(e.target.value)
    }


    function takeInputContract(e){
      setContractAdd(e.target.value)
    }


	return (
		<div className="mainDiv">
                <input className="inputAdd" type="text" onChange={takeInputContract} placeholder="Contract Address"/>
                
                <br /> <br />

               {/*  Batch mint function */}
                {/* <label className="label1" htmlFor="chooseFile">Upload .csv file
                    <input id="chooseFile" className="inputFile" type="file" name= "file" accept=".csv"
                        onChange={changeHandler} />
                </label> */}
                

                <br/>
                <input className="inputAdd" type="text" onChange={takeInputAdd} placeholder="Enter address"/>
                <button className="mintBtn" onClick={mintNFTs}>Mint</button>

          


		</div>
	);
};


export default  ERC721;

