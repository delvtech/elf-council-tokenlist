/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CoreVotingInterface extends ethers.utils.Interface {
  functions: {
    "DAY_IN_BLOCKS()": FunctionFragment;
    "approvedVaults(address)": FunctionFragment;
    "authorize(address)": FunctionFragment;
    "authorized(address)": FunctionFragment;
    "baseQuorum()": FunctionFragment;
    "changeExtraVotingTime(uint256)": FunctionFragment;
    "changeVaultStatus(address,bool)": FunctionFragment;
    "deauthorize(address)": FunctionFragment;
    "execute(uint256,address[],bytes[])": FunctionFragment;
    "extraVoteTime()": FunctionFragment;
    "isAuthorized(address)": FunctionFragment;
    "lockDuration()": FunctionFragment;
    "minProposalPower()": FunctionFragment;
    "owner()": FunctionFragment;
    "proposal(address[],bytes[],address[],bytes[],uint256,uint8)": FunctionFragment;
    "proposalCount()": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "quorums(address,bytes4)": FunctionFragment;
    "setCustomQuorum(address,bytes4,uint256)": FunctionFragment;
    "setDefaultQuorum(uint256)": FunctionFragment;
    "setLockDuration(uint256)": FunctionFragment;
    "setMinProposalPower(uint256)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "vote(address[],bytes[],uint256,uint8)": FunctionFragment;
    "votes(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DAY_IN_BLOCKS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "approvedVaults",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "authorize", values: [string]): string;
  encodeFunctionData(functionFragment: "authorized", values: [string]): string;
  encodeFunctionData(
    functionFragment: "baseQuorum",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeExtraVotingTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeVaultStatus",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "deauthorize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [BigNumberish, string[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "extraVoteTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorized",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lockDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minProposalPower",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposal",
    values: [
      string[],
      BytesLike[],
      string[],
      BytesLike[],
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quorums",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCustomQuorum",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultQuorum",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLockDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinProposalPower",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [string[], BytesLike[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "votes",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DAY_IN_BLOCKS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approvedVaults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "authorize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "authorized", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseQuorum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeExtraVotingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeVaultStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deauthorize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "extraVoteTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minProposalPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proposal", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quorums", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCustomQuorum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultQuorum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLockDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinProposalPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "votes", data: BytesLike): Result;

  events: {
    "ProposalCreated(uint256,uint256,uint256,uint256)": EventFragment;
    "ProposalExecuted(uint256)": EventFragment;
    "Voted(address,uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Voted"): EventFragment;
}

export type ProposalCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber] & {
    proposalId: BigNumber;
    created: BigNumber;
    execution: BigNumber;
    expiration: BigNumber;
  }
>;

export type ProposalExecutedEvent = TypedEvent<
  [BigNumber] & { proposalId: BigNumber }
>;

export type VotedEvent = TypedEvent<
  [
    string,
    BigNumber,
    [BigNumber, number] & { votingPower: BigNumber; castBallot: number }
  ] & {
    voter: string;
    proposalId: BigNumber;
    vote: [BigNumber, number] & { votingPower: BigNumber; castBallot: number };
  }
>;

export class CoreVoting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CoreVotingInterface;

  functions: {
    DAY_IN_BLOCKS(overrides?: CallOverrides): Promise<[BigNumber]>;

    approvedVaults(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    baseQuorum(overrides?: CallOverrides): Promise<[BigNumber]>;

    changeExtraVotingTime(
      _extraVoteTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeVaultStatus(
      vault: string,
      isValid: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execute(
      proposalId: BigNumberish,
      targets: string[],
      calldatas: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    extraVoteTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<[boolean]>;

    lockDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    minProposalPower(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proposal(
      votingVaults: string[],
      extraVaultData: BytesLike[],
      targets: string[],
      calldatas: BytesLike[],
      lastCall: BigNumberish,
      ballot: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proposalCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        proposalHash: string;
        created: BigNumber;
        unlock: BigNumber;
        expiration: BigNumber;
        quorum: BigNumber;
        lastCall: BigNumber;
      }
    >;

    quorums(
      target: string,
      functionSelector: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setCustomQuorum(
      target: string,
      selector: BytesLike,
      quorum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDefaultQuorum(
      quorum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLockDuration(
      _lockDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinProposalPower(
      _minProposalPower: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vote(
      votingVaults: string[],
      extraVaultData: BytesLike[],
      proposalId: BigNumberish,
      ballot: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    votes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number] & { votingPower: BigNumber; castBallot: number }
    >;
  };

  DAY_IN_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;

  approvedVaults(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  authorize(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  baseQuorum(overrides?: CallOverrides): Promise<BigNumber>;

  changeExtraVotingTime(
    _extraVoteTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeVaultStatus(
    vault: string,
    isValid: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deauthorize(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execute(
    proposalId: BigNumberish,
    targets: string[],
    calldatas: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  extraVoteTime(overrides?: CallOverrides): Promise<BigNumber>;

  isAuthorized(who: string, overrides?: CallOverrides): Promise<boolean>;

  lockDuration(overrides?: CallOverrides): Promise<BigNumber>;

  minProposalPower(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  proposal(
    votingVaults: string[],
    extraVaultData: BytesLike[],
    targets: string[],
    calldatas: BytesLike[],
    lastCall: BigNumberish,
    ballot: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

  proposals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      proposalHash: string;
      created: BigNumber;
      unlock: BigNumber;
      expiration: BigNumber;
      quorum: BigNumber;
      lastCall: BigNumber;
    }
  >;

  quorums(
    target: string,
    functionSelector: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setCustomQuorum(
    target: string,
    selector: BytesLike,
    quorum: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDefaultQuorum(
    quorum: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLockDuration(
    _lockDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinProposalPower(
    _minProposalPower: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vote(
    votingVaults: string[],
    extraVaultData: BytesLike[],
    proposalId: BigNumberish,
    ballot: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  votes(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number] & { votingPower: BigNumber; castBallot: number }
  >;

  callStatic: {
    DAY_IN_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;

    approvedVaults(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    authorize(who: string, overrides?: CallOverrides): Promise<void>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    baseQuorum(overrides?: CallOverrides): Promise<BigNumber>;

    changeExtraVotingTime(
      _extraVoteTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeVaultStatus(
      vault: string,
      isValid: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    deauthorize(who: string, overrides?: CallOverrides): Promise<void>;

    execute(
      proposalId: BigNumberish,
      targets: string[],
      calldatas: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    extraVoteTime(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<boolean>;

    lockDuration(overrides?: CallOverrides): Promise<BigNumber>;

    minProposalPower(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    proposal(
      votingVaults: string[],
      extraVaultData: BytesLike[],
      targets: string[],
      calldatas: BytesLike[],
      lastCall: BigNumberish,
      ballot: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        proposalHash: string;
        created: BigNumber;
        unlock: BigNumber;
        expiration: BigNumber;
        quorum: BigNumber;
        lastCall: BigNumber;
      }
    >;

    quorums(
      target: string,
      functionSelector: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setCustomQuorum(
      target: string,
      selector: BytesLike,
      quorum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDefaultQuorum(
      quorum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setLockDuration(
      _lockDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinProposalPower(
      _minProposalPower: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(who: string, overrides?: CallOverrides): Promise<void>;

    vote(
      votingVaults: string[],
      extraVaultData: BytesLike[],
      proposalId: BigNumberish,
      ballot: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    votes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number] & { votingPower: BigNumber; castBallot: number }
    >;
  };

  filters: {
    "ProposalCreated(uint256,uint256,uint256,uint256)"(
      proposalId?: null,
      created?: null,
      execution?: null,
      expiration?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber],
      {
        proposalId: BigNumber;
        created: BigNumber;
        execution: BigNumber;
        expiration: BigNumber;
      }
    >;

    ProposalCreated(
      proposalId?: null,
      created?: null,
      execution?: null,
      expiration?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber],
      {
        proposalId: BigNumber;
        created: BigNumber;
        execution: BigNumber;
        expiration: BigNumber;
      }
    >;

    "ProposalExecuted(uint256)"(
      proposalId?: null
    ): TypedEventFilter<[BigNumber], { proposalId: BigNumber }>;

    ProposalExecuted(
      proposalId?: null
    ): TypedEventFilter<[BigNumber], { proposalId: BigNumber }>;

    "Voted(address,uint256,tuple)"(
      voter?: string | null,
      proposalId?: BigNumberish | null,
      vote?: null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        [BigNumber, number] & { votingPower: BigNumber; castBallot: number }
      ],
      {
        voter: string;
        proposalId: BigNumber;
        vote: [BigNumber, number] & {
          votingPower: BigNumber;
          castBallot: number;
        };
      }
    >;

    Voted(
      voter?: string | null,
      proposalId?: BigNumberish | null,
      vote?: null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        [BigNumber, number] & { votingPower: BigNumber; castBallot: number }
      ],
      {
        voter: string;
        proposalId: BigNumber;
        vote: [BigNumber, number] & {
          votingPower: BigNumber;
          castBallot: number;
        };
      }
    >;
  };

  estimateGas: {
    DAY_IN_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;

    approvedVaults(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    baseQuorum(overrides?: CallOverrides): Promise<BigNumber>;

    changeExtraVotingTime(
      _extraVoteTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeVaultStatus(
      vault: string,
      isValid: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execute(
      proposalId: BigNumberish,
      targets: string[],
      calldatas: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    extraVoteTime(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    lockDuration(overrides?: CallOverrides): Promise<BigNumber>;

    minProposalPower(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proposal(
      votingVaults: string[],
      extraVaultData: BytesLike[],
      targets: string[],
      calldatas: BytesLike[],
      lastCall: BigNumberish,
      ballot: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quorums(
      target: string,
      functionSelector: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setCustomQuorum(
      target: string,
      selector: BytesLike,
      quorum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDefaultQuorum(
      quorum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLockDuration(
      _lockDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinProposalPower(
      _minProposalPower: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vote(
      votingVaults: string[],
      extraVaultData: BytesLike[],
      proposalId: BigNumberish,
      ballot: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    votes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DAY_IN_BLOCKS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approvedVaults(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    authorized(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseQuorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeExtraVotingTime(
      _extraVoteTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeVaultStatus(
      vault: string,
      isValid: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      proposalId: BigNumberish,
      targets: string[],
      calldatas: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    extraVoteTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAuthorized(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minProposalPower(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposal(
      votingVaults: string[],
      extraVaultData: BytesLike[],
      targets: string[],
      calldatas: BytesLike[],
      lastCall: BigNumberish,
      ballot: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quorums(
      target: string,
      functionSelector: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setCustomQuorum(
      target: string,
      selector: BytesLike,
      quorum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDefaultQuorum(
      quorum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLockDuration(
      _lockDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinProposalPower(
      _minProposalPower: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vote(
      votingVaults: string[],
      extraVaultData: BytesLike[],
      proposalId: BigNumberish,
      ballot: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    votes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
