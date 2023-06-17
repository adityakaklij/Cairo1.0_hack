import React, { useState , useEffect} from 'react'
import "../App.css"


export default function Navbar() {
    

  return (

    <div>
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
        <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/#/">Home</a>
                        {/* <link rel="stylesheet" href="/Home" /> */}
                        
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#/DeployContract">DeployNFTs</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#/DeployERC20">Create Token</a>
                    </li>

             
                        
                    {/* <li lassName='nav-item1'>
                        <button className="connectBtn " onClick={Connect}>{connectIs}</button>
                            
                    </li> */}
                </ul>

                        
                </div>
            </div>
        </nav>  
    </div>
  )
}