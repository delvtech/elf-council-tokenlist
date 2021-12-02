/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestVestingVault,
  TestVestingVaultInterface,
} from "../TestVestingVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stale",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount",
        type: "int256",
      },
    ],
    name: "VoteChange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_startTime",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_expiration",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_cliff",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "_delegatee",
        type: "address",
      },
    ],
    name: "addGrantAndDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_multiplier",
        type: "uint256",
      },
    ],
    name: "changeUnvestedMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "getGrant",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "allocation",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "withdrawn",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "created",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "expiration",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "cliff",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "latestVotingPower",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "delegatee",
            type: "address",
          },
        ],
        internalType: "struct VestingVaultStorage.Grant",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager_",
        type: "address",
      },
      {
        internalType: "address",
        name: "timelock_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "queryVotePower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "queryVotePowerView",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "removeGrant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager_",
        type: "address",
      },
    ],
    name: "setManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "timelock_",
        type: "address",
      },
    ],
    name: "setTimelock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "staleBlockLag",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timelock",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unassigned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unvestedMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "updateVotingPower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200290238038062002902833981016040819052620000349162000050565b60609190911b6001600160601b03191660805260a0526200008a565b6000806040838503121562000063578182fd5b82516001600160a01b03811681146200007a578283fd5b6020939093015192949293505050565b60805160601c60a05161282c620000d6600039600081816102f4015261183701526000818161035c0152818161049b0152818161075f01528181610c8a0152611546015261282c6000f3fe608060405234801561001057600080fd5b506004361061016b5760003560e01c8063b6b55f25116100cd578063d0ebdbe711610081578063e7d2028311610066578063e7d2028314610331578063e91f323514610344578063fc0c546a146103575761016b565b8063d0ebdbe714610316578063d33219b4146103295761016b565b8063bf31dbf4116100b2578063bf31dbf414610260578063c1006f4f146102e7578063c2c94b88146102ef5761016b565b8063b6b55f251461023a578063bdacb3031461024d5761016b565b80634e71d92d116101245780635f389a9d116101095780635f389a9d146101fe57806373afce6e14610211578063747c1255146102275761016b565b80634e71d92d146101e35780635c19a95c146101eb5761016b565b8063267406cb11610155578063267406cb14610198578063481c6a75146101ab578063485cc955146101d05761016b565b8062f714ce146101705780632168034d14610185575b600080fd5b61018361017e3660046124fb565b61037e565b005b6101836101933660046124e3565b61051d565b6101836101a6366004612359565b610617565b6101b3610999565b6040516001600160a01b0390911681526020015b60405180910390f35b6101836101de366004612373565b6109a9565b610183610baf565b6101836101f9366004612359565b610d6e565b61018361020c3660046123a5565b611036565b610219611447565b6040519081526020016101c7565b610183610235366004612359565b611457565b6101836102483660046124e3565b611486565b61018361025b366004612359565b6115cf565b61027361026e366004612359565b611670565b6040516101c79190600060e0820190506001600160801b038084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401528060a08501511660a0840152506001600160a01b0360c08401511660c083015292915050565b610219611749565b6102197f000000000000000000000000000000000000000000000000000000000000000081565b610183610324366004612359565b611753565b6101b36117f4565b61021961033f366004612418565b6117fe565b610219610352366004612441565b611820565b6101b37f000000000000000000000000000000000000000000000000000000000000000081565b61038661186f565b516001600160a01b031633146103e35760405162461bcd60e51b815260206004820152600860248201527f216d616e6167657200000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b60006103ed6118d9565b905082816000015410156104435760405162461bcd60e51b815260206004820152601460248201527f496e73756666696369656e742062616c616e636500000000000000000000000060448201526064016103da565b828160000160008282546104579190612781565b90915550506040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b1580156104df57600080fd5b505af11580156104f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051791906124c3565b50505050565b61052561191e565b516001600160a01b0316331461057d5760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b000000000000000000000000000000000000000000000060448201526064016103da565b60648111156105ce5760405162461bcd60e51b815260206004820152600a60248201527f41626f766520313030250000000000000000000000000000000000000000000060448201526064016103da565b61061461060f6040518060400160405280601281526020017f756e7665737465644d756c7469706c696572000000000000000000000000000081525061196b565b829055565b50565b61061f61186f565b516001600160a01b031633146106775760405162461bcd60e51b815260206004820152600860248201527f216d616e6167657200000000000000000000000000000000000000000000000060448201526064016103da565b60006106816119e4565b6001600160a01b03808416600090815260209283526040808220815160e08101835281546001600160801b038082168352700100000000000000000000000000000000918290048116978301979097526001830154808816948301949094529283900486166060820152600282015480871660808301529290920490941660a0820152600384015490921660c083015291925061071d90611a24565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152602482018390529192507f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb90604401602060405180830381600087803b1580156107a557600080fd5b505af11580156107b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107dd91906124c3565b5060006107e86118d9565b835490915060009061081890849070010000000000000000000000000000000090046001600160801b031661258d565b845461082d91906001600160801b0316612781565b905080826000016000828254610843919061258d565b9091555060009050610853611b08565b60038601549091506000906108729083906001600160a01b0316611b5b565b600387015460028801549192506108be916001600160a01b03909116906108b69070010000000000000000000000000000000090046001600160801b031684612781565b849190611be6565b600386015460028701546001600160a01b038981169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e0906109219070010000000000000000000000000000000090046001600160801b03166000196125df565b60405190815260200160405180910390a361093a6119e4565b6001600160a01b039097166000908152602097909752505060408520858155600181018690556002810195909555505050600390910180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905550565b60006109a361186f565b51905090565b6109e76040518060400160405280600b81526020017f696e697469616c697a656400000000000000000000000000000000000000000081525061196b565b5415610a355760405162461bcd60e51b815260206004820152600b60248201527f696e697469616c697a656400000000000000000000000000000000000000000060448201526064016103da565b610a7c610a766040518060400160405280600b81526020017f696e697469616c697a656400000000000000000000000000000000000000000081525061196b565b60019055565b610af0610abd6040518060400160405280600781526020017f6d616e6167657200000000000000000000000000000000000000000000000000815250611cf5565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038516179055565b610b64610b316040518060400160405280600881526020017f74696d656c6f636b000000000000000000000000000000000000000000000000815250611cf5565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038416179055565b610bab610ba56040518060400160405280601281526020017f756e7665737465644d756c7469706c696572000000000000000000000000000081525061196b565b60649055565b5050565b6000610bb96119e4565b33600090815260209182526040808220815160e08101835281546001600160801b038082168352700100000000000000000000000000000000918290048116968301969096526001830154808716948301949094529283900485166060820152600282015480861660808301529290920490931660a082015260038301546001600160a01b031660c082015291925090610c5290611a24565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b158015610cd657600080fd5b505af1158015610cea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0e91906124c3565b50815481908390601090610d4090849070010000000000000000000000000000000090046001600160801b0316612562565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610bab3383611d30565b6000610d786119e4565b3360009081526020919091526040902060038101549091506001600160a01b0383811691161415610deb5760405162461bcd60e51b815260206004820152601160248201527f416c72656164792064656c65676174656400000000000000000000000000000060448201526064016103da565b6000610df5611b08565b6003830154909150600090610e149083906001600160a01b0316611b5b565b6040805160e08101825285546001600160801b03808216835270010000000000000000000000000000000091829004811660208401526001880154808216948401949094529281900483166060830152600287015480841660808401520490911660a082015260038501546001600160a01b031660c0820152909150600090610e9c90611eee565b60038501546002860154919250610ee8916001600160a01b0390911690610ee09070010000000000000000000000000000000090046001600160801b031685612781565b859190611be6565b6003840154600285015433916001600160a01b0316907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e090610f499070010000000000000000000000000000000090046001600160801b03166000196125df565b60405190815260200160405180910390a36000610f668487611b5b565b9050336001600160a01b0316866001600160a01b03167f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e084604051610fad91815260200190565b60405180910390a3610fcb86610fc3848461258d565b869190611be6565b506002840180546001600160801b03928316700100000000000000000000000000000000029216919091179055505060030180546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055565b61103e61186f565b516001600160a01b031633146110965760405162461bcd60e51b815260206004820152600860248201527f216d616e6167657200000000000000000000000000000000000000000000000060448201526064016103da565b826001600160801b0316826001600160801b0316111580156110ca5750826001600160801b0316846001600160801b031611155b6111165760405162461bcd60e51b815260206004820152601560248201527f496e76616c696420636f6e66696775726174696f6e000000000000000000000060448201526064016103da565b6001600160801b038416611128574393505b60006111326118d9565b9050600061113e611f5f565b9050866001600160801b03168260000154101561119d5760405162461bcd60e51b815260206004820152601460248201527f496e73756666696369656e742062616c616e636500000000000000000000000060448201526064016103da565b60006111a76119e4565b6001600160a01b038a1660009081526020919091526040902080549091506001600160801b03161561121b5760405162461bcd60e51b815260206004820152600960248201527f486173204772616e74000000000000000000000000000000000000000000000060448201526064016103da565b6001600160a01b038416156112305783611232565b885b93506000606483600001518a6112489190612697565b61125291906125a5565b90506040518060e001604052808a6001600160801b0316815260200160006001600160801b03168152602001896001600160801b03168152602001886001600160801b03168152602001876001600160801b03168152602001826001600160801b03168152602001866001600160a01b03168152506112cf6119e4565b6001600160a01b038c81166000908152602092835260408082208551948601516001600160801b0395861670010000000000000000000000000000000091871682021782559186015160608701519086169086168302176001820155608086015160a087015190861690861690920291909117600282015560c090940151600390940180547fffffffffffffffffffffffff000000000000000000000000000000000000000016949092169390931790558554908b16918691611393908490612781565b90915550600090506113a3611b08565b60038401549091506000906113c29083906001600160a01b0316611b5b565b60038501549091506113ea906001600160a01b03166108b66001600160801b0386168461258d565b60038401546040516001600160801b03851681526001600160a01b038e81169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a3505050505050505050505050565b60006114516118d9565b54905090565b60006114616119e4565b6001600160a01b0383166000908152602091909152604090209050610bab8282611d30565b61148e61186f565b516001600160a01b031633146114e65760405162461bcd60e51b815260206004820152600860248201527f216d616e6167657200000000000000000000000000000000000000000000000060448201526064016103da565b60006114f06118d9565b905081816000016000828254611506919061258d565b90915550506040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b15801561159257600080fd5b505af11580156115a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ca91906124c3565b505050565b6115d761191e565b516001600160a01b0316331461162f5760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b000000000000000000000000000000000000000000000060448201526064016103da565b610614610b316040518060400160405280600881526020017f74696d656c6f636b000000000000000000000000000000000000000000000000815250611cf5565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091526116b16119e4565b6001600160a01b0380841660009081526020928352604090819020815160e08101835281546001600160801b038082168352700100000000000000000000000000000000918290048116968301969096526001830154808716948301949094529283900485166060820152600282015480861660808301529290920490931660a08201526003909201541660c082015290505b919050565b60006109a3611f5f565b61175b61191e565b516001600160a01b031633146117b35760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b000000000000000000000000000000000000000000000060448201526064016103da565b610614610b316040518060400160405280600781526020017f6d616e6167657200000000000000000000000000000000000000000000000000815250611cf5565b60006109a361191e565b600080611809611b08565b9050611816818585611fc0565b9150505b92915050565b60008061182b611b08565b9050611865868661185c7f000000000000000000000000000000000000000000000000000000000000000043612781565b84929190612019565b9695505050505050565b6040805160208101909152600081526118bc6040518060400160405280600781526020017f6d616e6167657200000000000000000000000000000000000000000000000000815250611cf5565b604080516020810190915290546001600160a01b03168152905090565b60006119196040518060400160405280600a81526020017f756e61737369676e65640000000000000000000000000000000000000000000081525061196b565b905090565b6040805160208101909152600081526118bc6040518060400160405280600881526020017f74696d656c6f636b000000000000000000000000000000000000000000000000815250611cf5565b6000807fec13d6d12b88433319b64e1065a96ea19cd330ef6603f5f6fb685dde3959a3209050600081846040516020016119a692919061251d565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120949350505050565b60006119196040518060400160405280600681526020017f6772616e74730000000000000000000000000000000000000000000000000000815250612087565b600081608001516001600160801b0316431080611a4d575081604001516001600160801b031643105b15611a5a57506000611744565b81606001516001600160801b03164310611a8f5760208201518251611a7f9190612759565b6001600160801b03169050611744565b600082604001518360600151611aa59190612759565b6001600160801b031683604001516001600160801b031643611ac79190612781565b8451611adc91906001600160801b03166126c6565b611ae691906125cb565b905082602001516001600160801b031681611b019190612781565b9392505050565b6040805180820190915260608152600060208201526119196040518060400160405280600b81526020017f766f74696e67506f7765720000000000000000000000000000000000000000008152506120c2565b600080611b69846020015190565b6001600160a01b03841660009081526020919091526040902080549091506001600160801b031680611ba05760009250505061181a565b6000611bdb83611bb1600185612781565b016001015460c081901c9177ffffffffffffffffffffffffffffffffffffffffffffffff90911690565b979650505050505050565b77ffffffffffffffffffffffffffffffffffffffffffffffff811115611c4e5760405162461bcd60e51b815260206004820152600360248201527f4f6f42000000000000000000000000000000000000000000000000000000000060448201526064016103da565b6000611c5b846020015190565b6001600160a01b03841660009081526020829052604081208054929350914360c01b9185831791608081901c916001600160801b03909116908115611cad57611ca986611bb1600185612781565b5090505b8143821415611cc457611cc1600184612781565b90505b8481600189010155438214611ce857611ce88785611ce386600161258d565b6120fb565b5050505050505050505050565b6000807f421683f821a0574472445355be6d2b769119e8515f8376a1d7878523dfdecf7b9050600081846040516020016119a692919061251d565b6000611d3a611b08565b6003830154909150600090611d599083906001600160a01b0316611b5b565b6040805160e08101825285546001600160801b03808216835270010000000000000000000000000000000091829004811660208401526001880154808216948401949094529281900483166060830152600287015480841660808401520490911660a082015260038501546001600160a01b031660c0820152909150600090611de190611eee565b6002850154909150600090611e139070010000000000000000000000000000000090046001600160801b0316836126e5565b905080611e235750505050610bab565b6000811315611e4d576003850154611e48906001600160a01b0316610fc3838661258d565b611e75565b6003850154611e75906001600160a01b0316611e6b836000196125df565b610fc39086612781565b60038501546040518281526001600160a01b038881169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a3506002840180546001600160801b0392831670010000000000000000000000000000000002921691909117905550505050565b600080611efa83611a24565b9050600083602001516001600160801b031682611f17919061258d565b8451611f2c91906001600160801b0316612781565b90506064611f38611f5f565b51611f4390836126c6565b611f4d91906125cb565b611f57908361258d565b949350505050565b604080516020810190915260008152611fac6040518060400160405280601281526020017f756e7665737465644d756c7469706c696572000000000000000000000000000081525061196b565b604080516020810190915290548152905090565b600080611fce856020015190565b6001600160a01b0385166000908152602082905260408120805492935091608081901c916001600160801b039091169061200b848883868661211b565b9a9950505050505050505050565b600080612027866020015190565b6001600160a01b0386166000908152602082905260408120805492935091608081901c916001600160801b039091169080612065858a8a878761211b565b915091508382111561200b5761207c8483876122c0565b61200b8583856120fb565b6000807fe09ca27c98c7039e0ebb504afcf592a1c02936970c7b5952890c3a3eea53d63c9050600081846040516020016119a692919061251d565b60408051808201909152606081526000602082015260006120e2836122f0565b6040805180820190915293845260208401525090919050565b80821061210757600080fd5b6001600160801b031660809190911b179055565b6000808261216b5760405162461bcd60e51b815260206004820152600d60248201527f756e696e697469616c697a65640000000000000000000000000000000000000060448201526064016103da565b8585111561217857600080fd5b82841061218457600080fd5b6000612191600185612781565b90508460005b82821461223557600060026121ac858561258d565b6121b790600161258d565b6121c191906125cb565b6001818d01015490915060c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168b821415612203579296509194506122b69350505050565b8b82101561221f578a821015612217578293505b82945061222d565b61222a600184612781565b95505b505050612197565b60018a8301015460c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168a8211156122ac5760405162461bcd60e51b815260206004820152600e60248201527f536561726368204661696c75726500000000000000000000000000000000000060448201526064016103da565b9195509093505050505b9550959350505050565b818311156122cd57600080fd5b60018101835b838110156122e9576000828201556001016122d3565b5050505050565b6000807f7b1a68ec3e3284b167e69db1c622dcfa612281976b71d7e2d239dbe16a75891a9050600081846040516020016119a692919061251d565b80356001600160a01b038116811461174457600080fd5b80356001600160801b038116811461174457600080fd5b60006020828403121561236a578081fd5b611b018261232b565b60008060408385031215612385578081fd5b61238e8361232b565b915061239c6020840161232b565b90509250929050565b60008060008060008060c087890312156123bd578182fd5b6123c68761232b565b95506123d460208801612342565b94506123e260408801612342565b93506123f060608801612342565b92506123fe60808801612342565b915061240c60a0880161232b565b90509295509295509295565b6000806040838503121561242a578182fd5b6124338361232b565b946020939093013593505050565b60008060008060608587031215612456578384fd5b61245f8561232b565b935060208501359250604085013567ffffffffffffffff80821115612482578384fd5b818701915087601f830112612495578384fd5b8135818111156124a3578485fd5b8860208285010111156124b4578485fd5b95989497505060200194505050565b6000602082840312156124d4578081fd5b81518015158114611b01578182fd5b6000602082840312156124f4578081fd5b5035919050565b6000806040838503121561250d578182fd5b8235915061239c6020840161232b565b60008382528251815b8181101561254257602081860181015185830182015201612526565b818111156125535782602083860101525b50919091016020019392505050565b60006001600160801b0380831681851680830382111561258457612584612798565b01949350505050565b600082198211156125a0576125a0612798565b500190565b60006001600160801b03808416806125bf576125bf6127c7565b92169190910492915050565b6000826125da576125da6127c7565b500490565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8184138284138583048511828216161561261e5761261e612798565b7f80000000000000000000000000000000000000000000000000000000000000008487128682058812818416161561265857612658612798565b85871292508782058712848416161561267357612673612798565b8785058712818416161561268957612689612798565b505050929093029392505050565b60006001600160801b03808316818516818304811182151516156126bd576126bd612798565b02949350505050565b60008160001904831182151516156126e0576126e0612798565b500290565b6000808312837f80000000000000000000000000000000000000000000000000000000000000000183128115161561271f5761271f612798565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01831381161561275357612753612798565b50500390565b60006001600160801b038381169083168181101561277957612779612798565b039392505050565b60008282101561279357612793612798565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220ab1b372bd5ad82b7e450edb6ee7b3892082102bd4939418be9ed5d117b34588764736f6c63430008030033";

export class TestVestingVault__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _token: string,
    _stale: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestVestingVault> {
    return super.deploy(
      _token,
      _stale,
      overrides || {}
    ) as Promise<TestVestingVault>;
  }
  getDeployTransaction(
    _token: string,
    _stale: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _stale, overrides || {});
  }
  attach(address: string): TestVestingVault {
    return super.attach(address) as TestVestingVault;
  }
  connect(signer: Signer): TestVestingVault__factory {
    return super.connect(signer) as TestVestingVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestVestingVaultInterface {
    return new utils.Interface(_abi) as TestVestingVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestVestingVault {
    return new Contract(address, _abi, signerOrProvider) as TestVestingVault;
  }
}
