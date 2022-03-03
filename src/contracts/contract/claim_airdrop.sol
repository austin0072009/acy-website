//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * Charaters:
 * - Owner:
 *   - Eventhing Manager Could Do;
 *   - Withdraw assets;
 * - Claimers 
 *   - Claim Check;
 *   - Claim Tokens;
 *   Conditions {
 *     - Not in the list; 
 *     - In the List not Claimed; 
 *     - In the list and Claimed;
 *     - Claimed and request to be reinserted;
 *   }
 */

contract ClaimAirdrop is AccessControl, Ownable {

    mapping(address => uint256) public addrToAmounts; 
    bytes32 public constant CLAIMER_ROLE = keccak256("CLAIMER_ROLE");
    bytes32 public constant NOT_CLAIMED_ROLE = keccak256("NOT_CLAIMED_ROLE");
    bytes32 public constant CLAIMED_ROLE = keccak256("CLAIMED_ROLE");
    address ACY_Address;

    constructor(address acyaddress) {
        // console.log("CLAIMER_ROLE");
        // console.logBytes32(CLAIMER_ROLE);
        // console.log("NOT_CLAIMED_ROLE");
        // console.logBytes32(NOT_CLAIMED_ROLE);
        // console.log("CLAIMED_ROLE");
        // console.logBytes32(CLAIMED_ROLE);
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(CLAIMER_ROLE, msg.sender);
        _setRoleAdmin(CLAIMER_ROLE, DEFAULT_ADMIN_ROLE);

        _setRoleAdmin(CLAIMED_ROLE, CLAIMER_ROLE);
        _setRoleAdmin(NOT_CLAIMED_ROLE, CLAIMER_ROLE);
        ACY_Address = acyaddress;
    }

    /// @dev Restricted to members of the admin role.
    modifier onlyAdmin() {
        require(isAdmin(msg.sender), "Restricted to admins.");
        _;
    }

    /// @dev Restricted to members of the claimers role.
    modifier onlyNotClaimedClaimers() {
        require(isClaimer_NOT_CLAIMED(msg.sender) && isClaimer(msg.sender), "Restricted to Not Claimed Users.");
        _;
    }

    /// @dev Return `true` if the account belongs to the admin role.
    function isAdmin(address account) public virtual view returns (bool) {
        return hasRole(DEFAULT_ADMIN_ROLE, account);
    }

    /// @dev Return `true` if the account belongs to the claimer role.
    function isClaimer(address account) public virtual view returns (bool) {
        return hasRole(CLAIMER_ROLE, account);
    }

    /// @dev Return `true` if the account belongs to the not claimed role.
    function isClaimer_NOT_CLAIMED(address account) public virtual view returns (bool) {
        return hasRole(NOT_CLAIMED_ROLE, account);
    }

    /// @dev Return `true` if the account belongs to the claimed role.
    function isClaimer_CLAIMED(address account) public virtual view returns (bool) {
        return hasRole(CLAIMED_ROLE, account);
    }

    /// @dev Return `true` if the account belongs to the claimed role.
    function getValueFromAccount(address account) public virtual view returns (uint256) {
        return addrToAmounts[account];
    }

    /// @dev Remove oneself from the admin role.
    function _renounceAdmin() private onlyAdmin{
        renounceRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// @dev Transfer Admin to New Admin oneself from the admin role.
    function transferAdmin(address account) public virtual onlyAdmin{
        _setupRole(DEFAULT_ADMIN_ROLE, account);
        _renounceAdmin();
    }

    /// @dev Add an account to the NOT_CLAIMED_ROLE role. Restricted to Admins.
    function _addToNotClaimedList(address account, uint256 amount) private onlyAdmin {
        if(isClaimer(account) == false && isClaimer_NOT_CLAIMED(account) == false && isClaimer_CLAIMED(account) == false) {
            grantRole(NOT_CLAIMED_ROLE, account);
            grantRole(CLAIMER_ROLE, account);
            addrToAmounts[account] = amount;
        }
    }

    /// @dev Move an account from the NOT_CLAIMED_ROLE role to CLAIMED_ROLE. Restricted to Claimers.
    function _moveFromNotClaimedToClaimed(address account) private {
        if(isClaimer(account) && isClaimer_NOT_CLAIMED(account)){
            revokeRole(NOT_CLAIMED_ROLE, account);
            grantRole(CLAIMED_ROLE, account);
            delete addrToAmounts[account];
        }
    }

    /// @dev FUNC: add addresses with different values
    function addAddressesDiffValues(address[] memory _recipients, uint256[] memory _values) onlyAdmin public returns (bool){
        require(_recipients.length > 0);
        require(_recipients.length == _values.length);
        for (uint i = 0; i < _recipients.length; i ++) {
            _addToNotClaimedList(_recipients[i], _values[i]);
        }
        return true;
    }

    /// @dev FUNC: add addresses with same values
    function addAddressesSameValue(address[] memory _recipients, uint256 _value) onlyAdmin public returns (bool){
        require(_recipients.length > 0);
        for (uint i = 0; i < _recipients.length; i ++) {
            _addToNotClaimedList(_recipients[i], _value);
        }
        return true;
    }

    /// @dev FUNC: claim for claimers
    function claim() onlyNotClaimedClaimers public returns (bool){
        require(isClaimer_NOT_CLAIMED(msg.sender), "Message Sender is not in the Claiming List");
        IERC20 token = IERC20(ACY_Address);
        require(token.balanceOf(address(this)) > addrToAmounts[msg.sender], "Contract has not enough Balance");
        token.transfer(msg.sender, addrToAmounts[msg.sender]);
        revokeRole(NOT_CLAIMED_ROLE, msg.sender);
        delete addrToAmounts[msg.sender];
        grantRole(CLAIMED_ROLE, msg.sender);

        return true;
    }

    /// @dev FUNC: delete from list
    function deleteAddresses(address[] memory _accounts) onlyAdmin public returns (bool) {
        for(uint i = 0; i < _accounts.length; i ++) {
            if (isClaimer(_accounts[i])){
                if (isClaimer_NOT_CLAIMED(_accounts[i])) {
                    revokeRole(NOT_CLAIMED_ROLE, _accounts[i]);
                    delete addrToAmounts[_accounts[i]];
                } else if (isClaimer_CLAIMED(_accounts[i])) {
                    revokeRole(CLAIMED_ROLE, _accounts[i]);
                }
                revokeRole(CLAIMER_ROLE, _accounts[i]);
            }
        }
        return true;
    }
    
    /// @dev FUNC: withdraw money from Smart Contract
    function withdrawAll() onlyAdmin public {
        IERC20 token = IERC20(ACY_Address);
        token.transfer(msg.sender, token.balanceOf(address(this)));
    }
}