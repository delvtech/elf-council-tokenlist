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

interface MerkleRewardsInterface extends ethers.utils.Interface {
  functions: {
    "claim(uint256,uint256,bytes32[],address)": FunctionFragment;
    "claimAndDelegate(uint256,address,uint256,bytes32[],address)": FunctionFragment;
    "claimed(address)": FunctionFragment;
    "lockingVault()": FunctionFragment;
    "rewardsRoot()": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, BigNumberish, BytesLike[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimAndDelegate",
    values: [BigNumberish, string, BigNumberish, BytesLike[], string]
  ): string;
  encodeFunctionData(functionFragment: "claimed", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lockingVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimAndDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockingVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export class MerkleRewards extends BaseContract {
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

  interface: MerkleRewardsInterface;

  functions: {
    claim(
      amount: BigNumberish,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimAndDelegate(
      amount: BigNumberish,
      delegate: string,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    lockingVault(overrides?: CallOverrides): Promise<[string]>;

    rewardsRoot(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  claim(
    amount: BigNumberish,
    totalGrant: BigNumberish,
    merkleProof: BytesLike[],
    destination: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimAndDelegate(
    amount: BigNumberish,
    delegate: string,
    totalGrant: BigNumberish,
    merkleProof: BytesLike[],
    destination: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  lockingVault(overrides?: CallOverrides): Promise<string>;

  rewardsRoot(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    claim(
      amount: BigNumberish,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: CallOverrides
    ): Promise<void>;

    claimAndDelegate(
      amount: BigNumberish,
      delegate: string,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: CallOverrides
    ): Promise<void>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    lockingVault(overrides?: CallOverrides): Promise<string>;

    rewardsRoot(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    claim(
      amount: BigNumberish,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimAndDelegate(
      amount: BigNumberish,
      delegate: string,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    lockingVault(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsRoot(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      amount: BigNumberish,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimAndDelegate(
      amount: BigNumberish,
      delegate: string,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockingVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
