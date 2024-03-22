"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TacoTokenContract = exports.TransferTacoCoinDto = exports.MintTacoCoinDto = void 0;
const tslib_1 = require("tslib");
const chaincode_1 = require("@gala-chain/chaincode");
const api_1 = require("@gala-chain/api");
const fabric_contract_api_1 = require("fabric-contract-api");
const package_json_1 = require("../../package.json"); // Ensure this path is correct
// Extending ChainCallDTO to ensure compatibility with GalaChain transactions
class MintTacoCoinDto extends api_1.ChainCallDTO {
    constructor(amount, recipient) {
        super();
        this.amount = amount;
        this.recipient = recipient;
    }
}
exports.MintTacoCoinDto = MintTacoCoinDto;
class TransferTacoCoinDto extends api_1.ChainCallDTO {
    constructor(amount, from, to) {
        super();
        this.amount = amount;
        this.from = from;
        this.to = to;
    }
}
exports.TransferTacoCoinDto = TransferTacoCoinDto;
let TacoTokenContract = class TacoTokenContract extends chaincode_1.GalaContract {
    constructor() {
        super("TacoTokenContract", package_json_1.version);
    }
    async mint(ctx, dto) {
        // Example minting logic, replace with actual logic
        console.log("Minting logic here");
        // Instead of returning a direct function call, you'd implement the minting logic here.
        return {}; // Return a meaningful response based on your minting result
    }
    async transfer(ctx, dto) {
        // Example transferring logic, replace with actual logic
        console.log("Transferring logic here");
        // Instead of returning a direct function call, you'd implement the transferring logic here.
        return {}; // Return a meaningful response based on your transferring result
    }
};
exports.TacoTokenContract = TacoTokenContract;
tslib_1.__decorate([
    (0, chaincode_1.GalaTransaction)({
        type: chaincode_1.SUBMIT,
        in: MintTacoCoinDto,
        out: api_1.TokenInstanceKey,
        verifySignature: true
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [chaincode_1.GalaChainContext, MintTacoCoinDto]),
    tslib_1.__metadata("design:returntype", Promise)
], TacoTokenContract.prototype, "mint", null);
tslib_1.__decorate([
    (0, chaincode_1.GalaTransaction)({
        type: chaincode_1.SUBMIT,
        in: TransferTacoCoinDto,
        out: api_1.TokenBalance,
        verifySignature: true
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [chaincode_1.GalaChainContext, TransferTacoCoinDto]),
    tslib_1.__metadata("design:returntype", Promise)
], TacoTokenContract.prototype, "transfer", null);
exports.TacoTokenContract = TacoTokenContract = tslib_1.__decorate([
    (0, fabric_contract_api_1.Info)({ title: "TacoTokenContract", description: "Contract for managing TacoChain tokens" }),
    tslib_1.__metadata("design:paramtypes", [])
], TacoTokenContract);
