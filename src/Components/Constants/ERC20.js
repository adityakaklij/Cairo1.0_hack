export const ERC20ABI = [
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
      "name": "decimal",
      "inputs": [],
      "outputs": [
        {
          "type": "core::integer::u8"
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
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "type": "core::starknet::contract_address::ContractAddress"
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
          "name": "_amount",
          "type": "core::integer::u128"
        }
      ],
      "outputs": [],
      "state_mutability": "external"
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
        }
      ]
    }
  ]