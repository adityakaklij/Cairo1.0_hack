#[contract]

mod ERC721 {

use starknet::ContractAddress;
use starknet::get_caller_address;
use zeroable::Zeroable;
use starknet::ContractAddressZeroable;
use traits::TryInto;
use traits::Into;

struct Storage {
    // Static 
    _name:felt252,
    _symbol: felt252,
    _total_supply: u128,
    _base_URI:felt252,
    // Dynamic 
    _total_minted: u128,
    _balance: LegacyMap::<ContractAddress, u128>,
    _token_owner: LegacyMap::<u128, ContractAddress>,

    _token_URI: LegacyMap::<u128, felt252>,
}

#[view]
fn name() -> felt252 {
    _name::read()
}

#[view]
fn symbol() -> felt252 {
    _symbol::read()
}
#[view]
fn total_supply() -> u128 {
    _total_supply::read()
}
#[view]
fn URI() -> felt252 {
    _base_URI::read()
}

#[view]
fn balanceOf(_address: ContractAddress) -> u128 {
    _balance::read(_address)
}

#[view]
fn ownerOf(_tokenID:u128) -> ContractAddress {
    _token_owner::read(_tokenID)
}

#[view]
fn token_URI(_tokenID:u128) -> felt252 {
    _token_URI::read(_tokenID)
}

#[event]
fn mint_event(_owner: ContractAddress, _token_Id: u128){}

#[event]
fn transfer_event(_from: ContractAddress, _to: ContractAddress, _token_Id: u128){}

#[constructor]
fn constructor (_nameInp: felt252, _symbolInp: felt252, _total_supplyInp: u128, _URIInp:felt252){
    _name::write(_nameInp);
    _symbol::write(_symbolInp);
    _total_supply::write(_total_supplyInp);
    _base_URI::write(_URIInp);
}

#[external]
fn mint(_to: ContractAddress) {
    let user = get_caller_address();

    assert(!_to.is_zero(), 'not allowed');
    let supply = _total_minted::read();
    assert(supply < _total_supply::read(), 'Minting done');

    let num:u128 = 1_u128;
    let new_supply:u128 = supply + num ;
    _total_minted::write(new_supply);
    

    let receiver_balance:u128 = _balance::read(_to);
    let new_balance_receiver:u128 = receiver_balance + num;
    _balance::write(_to, new_balance_receiver);
    _token_owner::write(new_supply, _to);

    mint_event(_to,new_supply );
}


#[external]
fn transfer(_to: ContractAddress, _token_Id: u128) {
    let sender = get_caller_address();
    assert(!_to.is_zero(), 'not allowed');
    assert(_token_owner::read(_token_Id) == sender, 'Not the owner');
    
    let sender_balance:u128 = _balance::read(sender); 
    let new_balance_sender:u128 = sender_balance - 1_u128;
    _balance::write(sender, new_balance_sender);

    let receiver_balance:u128 = _balance::read(_to);
    let new_balance_receiver:u128 = receiver_balance + 1_u128;
    _balance::write(_to, new_balance_receiver);

    _token_owner::write(_token_Id, _to);

    transfer_event(sender, _to, _token_Id);

}

}

