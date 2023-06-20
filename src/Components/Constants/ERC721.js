export const ERC721ABI =  [
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "type": "core::felt252"
        }
      ],
      "state_mutability": "view"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "type": "core::felt252"
        }
      ],
      "state_mutability": "view"
    },
    {
      "type": "function",
      "name": "total_supply",
      "inputs": [],
      "outputs": [
        {
          "type": "core::integer::u128"
        }
      ],
      "state_mutability": "view"
    },
    {
      "type": "function",
      "name": "URI",
      "inputs": [],
      "outputs": [
        {
          "type": "core::felt252"
        }
      ],
      "state_mutability": "view"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "_address",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ],
      "outputs": [
        {
          "type": "core::integer::u128"
        }
      ],
      "state_mutability": "view"
    },
    {
      "type": "function",
      "name": "ownerOf",
      "inputs": [
        {
          "name": "_tokenID",
          "type": "core::integer::u128"
        }
      ],
      "outputs": [
        {
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ],
      "state_mutability": "view"
    },
    {
      "type": "function",
      "name": "token_URI",
      "inputs": [
        {
          "name": "_tokenID",
          "type": "core::integer::u128"
        }
      ],
      "outputs": [
        {
          "type": "core::felt252"
        }
      ],
      "state_mutability": "view"
    },
    {
      "type": "function",
      "name": "constructor",
      "inputs": [
        {
          "name": "_nameInp",
          "type": "core::felt252"
        },
        {
          "name": "_symbolInp",
          "type": "core::felt252"
        },
        {
          "name": "_total_supplyInp",
          "type": "core::integer::u128"
        },
        {
          "name": "_URIInp",
          "type": "core::felt252"
        }
      ],
      "outputs": [],
      "state_mutability": "external"
    },
    {
      "type": "function",
      "name": "mint",
      "inputs": [
        {
          "name": "_to",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ],
      "outputs": [],
      "state_mutability": "external"
    },
    {
      "type": "function",
      "name": "transfer",
      "inputs": [
        {
          "name": "_to",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "_token_Id",
          "type": "core::integer::u128"
        }
      ],
      "outputs": [],
      "state_mutability": "external"
    },
    {
      "type": "event",
      "name": "mint_event",
      "inputs": [
        {
          "name": "_owner",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "_token_Id",
          "type": "core::integer::u128"
        }
      ]
    },
    {
      "type": "event",
      "name": "transfer_event",
      "inputs": [
        {
          "name": "_from",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "_to",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "_token_Id",
          "type": "core::integer::u128"
        }
      ]
    }
  ]