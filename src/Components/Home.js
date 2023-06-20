import React from 'react'
import '../CSS/Home.css'

function Home() {
  return (
    <>
      <div className="mainContainer">
        <div className="leftSubpart">
          <div className="headLine">Starknet Contract Deployer. </div>
          <p>
            NFTs, ERC20 
          </p>
          <div className="description">
            <span>Deploy One-Click NFT collection on Starknet </span> 
            <br/>
            
            {/* <span>Think you have the best Idea? Let the peaople decide..</span> */}


            <span> Deploy your own customizable ERC20 token</span>
            <br />
            <span> Interact with any NFT smart contract!</span>
            {/* Let the people decide which is the best idea that can change the world.</span> */}
          </div>
        </div>
        <div className="rightSubpart">
        <div className="headLine">Get Started</div>
        <div className="description"> Create a NFT collection</div>
        <a className="listButton" href="#/DeployContract">Deploy NFTs</a>
        </div>
      </div>
    </>
  );
}

export default Home