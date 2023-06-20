#[contract]

mod ERC20 {

use starknet::ContractAddress;
use starknet::ContractAddress;
use starknet::get_caller_address;
use zeroable::Zeroable;
use starknet::ContractAddressZeroable;
use traits::TryInto;
use traits::Into;

use Storage {
    _name:felt252,
    _symbol: felt252,
    _total_supply: u128,
    _decimal: u8,
    _owner: ContractAddress,

    _balance: LegacyMap::<ContractAddress, u128>,

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
fn decimal() -> u128 {
    _decimal::read()
}
#[view]
fn balanceOf(_address: ContractAddress) -> u128 {
    _balance::read(_address)
}

#[view]
fn owner() -> ContractAddress {
    _owner::read()
}

#[event]
fn transfer_event(_from: ContractAddress, _to: ContractAddress, _token_Id: u128){}

#[constructor]
fn constructor (_nameInp: felt252, _symbolInp: felt252, _total_supplyInp: u128){
    _name::write(_nameInp);
    _symbol::write(_symbolInp);
    _total_supply::write(_total_supplyInp);

    let user = get_caller_address();
    _balance::write(user, _total_supplyInp );
}


#[external]
fn transfer(_to: ContractAddress, _amount: u128) {
    let sender = get_caller_address();
    assert(!_to.is_zero(), 'not allowed');
    let sender_balance:u128 = _balance::read(sender); 
    assert( sender_balance >= _amount, 'Insufficient amount');

    let new_balance_sender:u128 = sender_balance - _amount;
    _balance::write(sender, new_balance_sender);
    let receiver_balance:u128 = _balance::read(_to);
    let new_balance_receiver:u128 = receiver_balance + _amount;
    _balance::write(_to, new_balance_receiver);

    transfer_event(sender, _to, _token_Id);


}


}