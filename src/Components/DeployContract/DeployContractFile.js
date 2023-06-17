import React, { useState } from 'react'
import DeployERC721 from './DeployERC721'
import DeployERC1155 from './DeployERC1155'

function DeployContract() {

    const [openModal , setOpenModal] = useState(false)
    const [openModal2 , setOpenModal2] = useState(false)

  return (
    <div>
        <div>
            <button onClick={() =>{
              setOpenModal(!openModal)
              setOpenModal2(false)
            }}>Deploy ERC721</button>
            
          
            <button onClick={() =>{
                setOpenModal2(!openModal2)
                setOpenModal(false)
            }}>Deploy ERC1155</button>
            <DeployERC721 open={openModal}/>
            <DeployERC1155 open={openModal2}/>
          </div>
    </div>
  )
}

export default DeployContract