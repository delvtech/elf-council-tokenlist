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

interface LockingVaultInterface extends ethers.utils.Interface {
  functions: {
    "changeDelegation(address)": FunctionFragment;
    "deposit(address,uint256,address)": FunctionFragment;
    "deposits(address)": FunctionFragment;
    "queryVotePower(address,uint256,bytes)": FunctionFragment;
    "queryVotePowerView(address,uint256)": FunctionFragment;
    "staleBlockLag()": FunctionFragment;
    "token()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "changeDelegation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "deposits", values: [string]): string;
  encodeFunctionData(
    functionFragment: "queryVotePower",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "queryVotePowerView",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "staleBlockLag",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeDelegation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryVotePower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryVotePowerView",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "staleBlockLag",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "VoteChange(address,address,int256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "VoteChange"): EventFragment;
}

export type VoteChangeEvent = TypedEvent<
  [string, string, BigNumber] & { from: string; to: string; amount: BigNumber }
>;

export class LockingVault extends BaseContract {
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

  interface: LockingVaultInterface;

  functions: {
    changeDelegation(
      newDelegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      fundedAccount: string,
      amount: BigNumberish,
      firstDelegation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposits(
      who: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    queryVotePower(
      user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queryVotePowerView(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    staleBlockLag(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  changeDelegation(
    newDelegate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    fundedAccount: string,
    amount: BigNumberish,
    firstDelegation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposits(
    who: string,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  queryVotePower(
    user: string,
    blockNumber: BigNumberish,
    arg2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queryVotePowerView(
    user: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  staleBlockLag(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    changeDelegation(
      newDelegate: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      fundedAccount: string,
      amount: BigNumberish,
      firstDelegation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deposits(
      who: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    queryVotePower(
      user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryVotePowerView(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    staleBlockLag(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "VoteChange(address,address,int256)"(
      from?: string | null,
      to?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; amount: BigNumber }
    >;

    VoteChange(
      from?: string | null,
      to?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    changeDelegation(
      newDelegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      fundedAccount: string,
      amount: BigNumberish,
      firstDelegation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposits(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    queryVotePower(
      user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queryVotePowerView(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    staleBlockLag(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeDelegation(
      newDelegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      fundedAccount: string,
      amount: BigNumberish,
      firstDelegation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposits(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queryVotePower(
      user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queryVotePowerView(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    staleBlockLag(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
