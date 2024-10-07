import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BREAD
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const breadAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_wxDai', internalType: 'address', type: 'address' },
      { name: '_sexyDai', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'BurnZero' },
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'ClaimZero' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'increasedSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'cap', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20ExceededSafeSupply',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  { type: 'error', inputs: [], name: 'ERC6372InconsistentClock' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'IsCollateral' },
  { type: 'error', inputs: [], name: 'MintZero' },
  { type: 'error', inputs: [], name: 'MismatchAmount' },
  { type: 'error', inputs: [], name: 'MismatchArray' },
  { type: 'error', inputs: [], name: 'NativeTransferFailed' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'OnlyClaimers' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  { type: 'error', inputs: [], name: 'YieldInsufficient' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Burned',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ClaimedYield',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Minted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'yieldClaimer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'YieldClaimerSet',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'receivers', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'batchMint',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'pos', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkpoints',
    outputs: [
      {
        name: '',
        internalType: 'struct Checkpoints.Checkpoint208',
        type: 'tuple',
        components: [
          { name: '_key', internalType: 'uint48', type: 'uint48' },
          { name: '_value', internalType: 'uint208', type: 'uint208' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'claimYield',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
      { name: 'owner_', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tok', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rescueToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_yieldClaimer', internalType: 'address', type: 'address' },
    ],
    name: 'setYieldClaimer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sexyDai',
    outputs: [{ name: '', internalType: 'contract ISXDAI', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'wxDai',
    outputs: [{ name: '', internalType: 'contract IWXDAI', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'yieldAccrued',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'yieldClaimer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__
 */
export const useReadBread = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadBreadClockMode = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadBreadAllowance = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadBreadBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"checkpoints"`
 */
export const useReadBreadCheckpoints = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'checkpoints',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"clock"`
 */
export const useReadBreadClock = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadBreadDecimals = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"delegates"`
 */
export const useReadBreadDelegates = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadBreadEip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const useReadBreadGetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: breadAbi,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const useReadBreadGetPastVotes = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"getVotes"`
 */
export const useReadBreadGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"name"`
 */
export const useReadBreadName = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadBreadNonces = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"numCheckpoints"`
 */
export const useReadBreadNumCheckpoints = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'numCheckpoints',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"owner"`
 */
export const useReadBreadOwner = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"sexyDai"`
 */
export const useReadBreadSexyDai = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'sexyDai',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadBreadSymbol = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadBreadTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"wxDai"`
 */
export const useReadBreadWxDai = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'wxDai',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"yieldAccrued"`
 */
export const useReadBreadYieldAccrued = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'yieldAccrued',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"yieldClaimer"`
 */
export const useReadBreadYieldClaimer = /*#__PURE__*/ createUseReadContract({
  abi: breadAbi,
  functionName: 'yieldClaimer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__
 */
export const useWriteBread = /*#__PURE__*/ createUseWriteContract({
  abi: breadAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteBreadApprove = /*#__PURE__*/ createUseWriteContract({
  abi: breadAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"batchMint"`
 */
export const useWriteBreadBatchMint = /*#__PURE__*/ createUseWriteContract({
  abi: breadAbi,
  functionName: 'batchMint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteBreadBurn = /*#__PURE__*/ createUseWriteContract({
  abi: breadAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"claimYield"`
 */
export const useWriteBreadClaimYield = /*#__PURE__*/ createUseWriteContract({
  abi: breadAbi,
  functionName: 'claimYield',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"delegate"`
 */
export const useWriteBreadDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: breadAbi,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useWriteBreadDelegateBySig = /*#__PURE__*/ createUseWriteContract({
  abi: breadAbi,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteBreadInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: breadAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteBreadMint = /*#__PURE__*/ createUseWriteContract({
  abi: breadAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteBreadRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: breadAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"rescueToken"`
 */
export const useWriteBreadRescueToken = /*#__PURE__*/ createUseWriteContract({
  abi: breadAbi,
  functionName: 'rescueToken',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"setYieldClaimer"`
 */
export const useWriteBreadSetYieldClaimer =
  /*#__PURE__*/ createUseWriteContract({
    abi: breadAbi,
    functionName: 'setYieldClaimer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteBreadTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: breadAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteBreadTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: breadAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteBreadTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: breadAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__
 */
export const useSimulateBread = /*#__PURE__*/ createUseSimulateContract({
  abi: breadAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateBreadApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: breadAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"batchMint"`
 */
export const useSimulateBreadBatchMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: breadAbi,
    functionName: 'batchMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateBreadBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: breadAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"claimYield"`
 */
export const useSimulateBreadClaimYield =
  /*#__PURE__*/ createUseSimulateContract({
    abi: breadAbi,
    functionName: 'claimYield',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"delegate"`
 */
export const useSimulateBreadDelegate = /*#__PURE__*/ createUseSimulateContract(
  { abi: breadAbi, functionName: 'delegate' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useSimulateBreadDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: breadAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateBreadInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: breadAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateBreadMint = /*#__PURE__*/ createUseSimulateContract({
  abi: breadAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateBreadRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: breadAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"rescueToken"`
 */
export const useSimulateBreadRescueToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: breadAbi,
    functionName: 'rescueToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"setYieldClaimer"`
 */
export const useSimulateBreadSetYieldClaimer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: breadAbi,
    functionName: 'setYieldClaimer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateBreadTransfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: breadAbi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateBreadTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: breadAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link breadAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateBreadTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: breadAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link breadAbi}__
 */
export const useWatchBreadEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: breadAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link breadAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchBreadApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: breadAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link breadAbi}__ and `eventName` set to `"Burned"`
 */
export const useWatchBreadBurnedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: breadAbi,
    eventName: 'Burned',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link breadAbi}__ and `eventName` set to `"ClaimedYield"`
 */
export const useWatchBreadClaimedYieldEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: breadAbi,
    eventName: 'ClaimedYield',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link breadAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const useWatchBreadDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: breadAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link breadAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const useWatchBreadDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: breadAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link breadAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchBreadEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: breadAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link breadAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchBreadInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: breadAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link breadAbi}__ and `eventName` set to `"Minted"`
 */
export const useWatchBreadMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: breadAbi,
    eventName: 'Minted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link breadAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchBreadOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: breadAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link breadAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchBreadTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: breadAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link breadAbi}__ and `eventName` set to `"YieldClaimerSet"`
 */
export const useWatchBreadYieldClaimerSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: breadAbi,
    eventName: 'YieldClaimerSet',
  })
