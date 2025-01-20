// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

import { TokenAdapter } from "../TokenAdapter.sol";

// @dev WARNING: This is for testing purposes only
contract MyOFTAdapterMock is TokenAdapter {
    constructor(address _token, address _lzEndpoint, address _delegate) TokenAdapter(_token, _lzEndpoint, _delegate) {}
}
