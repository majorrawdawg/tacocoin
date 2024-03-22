import { GalaChainContext, GalaContract } from "@gala-chain/chaincode";
import { ChainCallDTO } from "@gala-chain/api";
export declare class MintTacoCoinDto extends ChainCallDTO {
    amount: number;
    recipient: string;
    constructor(amount: number, recipient: string);
}
export declare class TransferTacoCoinDto extends ChainCallDTO {
    amount: number;
    from: string;
    to: string;
    constructor(amount: number, from: string, to: string);
}
export declare class TacoTokenContract extends GalaContract {
    constructor();
    mint(ctx: GalaChainContext, dto: MintTacoCoinDto): Promise<any>;
    transfer(ctx: GalaChainContext, dto: TransferTacoCoinDto): Promise<any>;
}
