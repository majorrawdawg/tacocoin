"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) Gala Games Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var api_1 = require("@gala-chain/api");
var chaincode_1 = require("@gala-chain/chaincode");
var class_transformer_1 = require("class-transformer");
var fabric_contract_api_1 = require("fabric-contract-api");
var package_json_1 = require("../../package.json");
var GalaChainTokenContract = function () {
    var _classDecorators = [(0, fabric_contract_api_1.Info)({ title: "GalaChainToken", description: "Contract for managing GalaChain tokens" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = chaincode_1.GalaContract;
    var _instanceExtraInitializers = [];
    var _CreateTokenClass_decorators;
    var _UpdateTokenClass_decorators;
    var _FetchTokenClasses_decorators;
    var _FetchTokenClassesWithPagination_decorators;
    var _GrantAllowance_decorators;
    var _RefreshAllowances_decorators;
    var _FullAllowanceCheck_decorators;
    var _FetchAllowances_decorators;
    var _DeleteAllowances_decorators;
    var _FetchBalances_decorators;
    var _RequestMint_decorators;
    var _FulfillMint_decorators;
    var _HighThroughputMint_decorators;
    var _FetchMintRequests_decorators;
    var _MintToken_decorators;
    var _MintTokenWithAllowance_decorators;
    var _BatchMintToken_decorators;
    var _UseToken_decorators;
    var _ReleaseToken_decorators;
    var _LockToken_decorators;
    var _LockTokens_decorators;
    var _UnlockToken_decorators;
    var _UnlockTokens_decorators;
    var _TransferToken_decorators;
    var _BurnTokens_decorators;
    var _FetchBurns_decorators;
    var GalaChainTokenContract = _classThis = /** @class */ (function (_super) {
        __extends(GalaChainTokenContract_1, _super);
        function GalaChainTokenContract_1() {
            var _this = _super.call(this, "GalaChainToken", package_json_1.version) || this;
            __runInitializers(_this, _instanceExtraInitializers);
            return _this;
        }
        GalaChainTokenContract_1.prototype.CreateTokenClass = function (ctx, dto) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return (0, chaincode_1.createTokenClass)(ctx, {
                network: (_a = dto.network) !== null && _a !== void 0 ? _a : api_1.CreateTokenClassDto.DEFAULT_NETWORK,
                tokenClass: dto.tokenClass,
                isNonFungible: !!dto.isNonFungible,
                decimals: (_b = dto.decimals) !== null && _b !== void 0 ? _b : api_1.CreateTokenClassDto.DEFAULT_DECIMALS,
                name: dto.name,
                symbol: dto.symbol,
                description: dto.description,
                rarity: dto.rarity,
                image: dto.image,
                metadataAddress: dto.metadataAddress,
                contractAddress: dto.contractAddress,
                maxSupply: (_c = dto.maxSupply) !== null && _c !== void 0 ? _c : api_1.CreateTokenClassDto.DEFAULT_MAX_SUPPLY,
                maxCapacity: (_d = dto.maxCapacity) !== null && _d !== void 0 ? _d : api_1.CreateTokenClassDto.DEFAULT_MAX_CAPACITY,
                totalMintAllowance: (_e = dto.totalMintAllowance) !== null && _e !== void 0 ? _e : api_1.CreateTokenClassDto.INITIAL_MINT_ALLOWANCE,
                totalSupply: (_f = dto.totalSupply) !== null && _f !== void 0 ? _f : api_1.CreateTokenClassDto.INITIAL_TOTAL_SUPPLY,
                totalBurned: (_g = dto.totalBurned) !== null && _g !== void 0 ? _g : api_1.CreateTokenClassDto.INITIAL_TOTAL_BURNED,
                authorities: (_h = dto.authorities) !== null && _h !== void 0 ? _h : [ctx.callingUser]
            });
        };
        GalaChainTokenContract_1.prototype.UpdateTokenClass = function (ctx, dto) {
            return (0, chaincode_1.updateTokenClass)(ctx, dto);
        };
        GalaChainTokenContract_1.prototype.FetchTokenClasses = function (ctx, dto) {
            return (0, chaincode_1.fetchTokenClasses)(ctx, dto.tokenClasses);
        };
        GalaChainTokenContract_1.prototype.FetchTokenClassesWithPagination = function (ctx, dto) {
            return (0, chaincode_1.fetchTokenClassesWithPagination)(ctx, dto);
        };
        GalaChainTokenContract_1.prototype.GrantAllowance = function (ctx, dto) {
            var _a;
            return (0, chaincode_1.grantAllowance)(ctx, {
                tokenInstance: dto.tokenInstance,
                allowanceType: dto.allowanceType,
                quantities: dto.quantities,
                uses: dto.uses,
                expires: (_a = dto.expires) !== null && _a !== void 0 ? _a : api_1.GrantAllowanceDto.DEFAULT_EXPIRES
            });
        };
        GalaChainTokenContract_1.prototype.RefreshAllowances = function (ctx, dto) {
            return (0, chaincode_1.refreshAllowances)(ctx, dto.allowances);
        };
        GalaChainTokenContract_1.prototype.FullAllowanceCheck = function (ctx, dto) {
            var _a, _b, _c;
            return (0, chaincode_1.fullAllowanceCheck)(ctx, {
                owner: (_a = dto.owner) !== null && _a !== void 0 ? _a : ctx.callingUser,
                grantedTo: (_b = dto.grantedTo) !== null && _b !== void 0 ? _b : ctx.callingUser,
                allowanceType: (_c = dto.allowanceType) !== null && _c !== void 0 ? _c : api_1.AllowanceType.Use,
                collection: dto.collection,
                category: dto.category,
                type: dto.type,
                additionalKey: dto.additionalKey
            });
        };
        GalaChainTokenContract_1.prototype.FetchAllowances = function (ctx, dto) {
            var _a;
            return (0, chaincode_1.fetchAllowancesWithPagination)(ctx, __assign(__assign({}, dto), { limit: (_a = dto.limit) !== null && _a !== void 0 ? _a : api_1.FetchAllowancesDto.DEFAULT_LIMIT }));
        };
        GalaChainTokenContract_1.prototype.DeleteAllowances = function (ctx, dto) {
            return (0, chaincode_1.deleteAllowances)(ctx, dto);
        };
        GalaChainTokenContract_1.prototype.FetchBalances = function (ctx, dto) {
            var _a;
            return (0, chaincode_1.fetchBalances)(ctx, __assign(__assign({}, dto), { owner: (_a = dto.owner) !== null && _a !== void 0 ? _a : ctx.callingUser }));
        };
        GalaChainTokenContract_1.prototype.RequestMint = function (ctx, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, chaincode_1.requestMint)(ctx, dto, undefined)];
                });
            });
        };
        GalaChainTokenContract_1.prototype.FulfillMint = function (ctx, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, chaincode_1.fulfillMintRequest)(ctx, dto)];
                });
            });
        };
        /**
         * Mint a new instance of an existing TokenClass. High-throughput implementation.
         *
         * @experimental 2023-03-23
         *
         * @decorator `@GalaTransaction(GalaTransactionOptions<HighThroughputMintTokenDto>)`
         */
        GalaChainTokenContract_1.prototype.HighThroughputMint = function (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ctx, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, Promise.reject(new Error("HighThroughputMint is a sequence call: Execute RequestMint and FulfillMint sequentially."))];
                });
            });
        };
        GalaChainTokenContract_1.prototype.FetchMintRequests = function (ctx, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var mintRequestsClassKey;
                return __generator(this, function (_a) {
                    mintRequestsClassKey = (0, class_transformer_1.plainToClass)(api_1.TokenClassKey, {
                        collection: dto.collection,
                        category: dto.category,
                        type: dto.type,
                        additionalKey: dto.additionalKey
                    });
                    return [2 /*return*/, (0, chaincode_1.mintRequestsByTimeRange)(ctx, mintRequestsClassKey, dto.startTimestamp, dto.endTimestamp)];
                });
            });
        };
        /**
         * Mint a new instance of an existing TokenClass.
         *
         * @deprecated 2022-12-12, replaced with high-throughput implementation.
         *
         * @decorator `@GalaTransaction(GalaTransactionOptions<MintTokenDto>)`
         */
        GalaChainTokenContract_1.prototype.MintToken = function (ctx, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    return [2 /*return*/, (0, chaincode_1.mintToken)(ctx, {
                            tokenClassKey: dto.tokenClass,
                            owner: (_a = dto.owner) !== null && _a !== void 0 ? _a : ctx.callingUser,
                            quantity: dto.quantity,
                            authorizedOnBehalf: undefined,
                            applicableAllowanceKey: dto.allowanceKey
                        })];
                });
            });
        };
        GalaChainTokenContract_1.prototype.MintTokenWithAllowance = function (ctx, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    return [2 /*return*/, (0, chaincode_1.mintTokenWithAllowance)(ctx, {
                            tokenClassKey: dto.tokenClass,
                            tokenInstance: dto.tokenInstance,
                            owner: (_a = dto.owner) !== null && _a !== void 0 ? _a : ctx.callingUser,
                            quantity: dto.quantity
                        })];
                });
            });
        };
        GalaChainTokenContract_1.prototype.BatchMintToken = function (ctx, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var params, _a, _b;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            params = dto.mintDtos.map(function (d) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    return [2 /*return*/, ({
                                            tokenClassKey: d.tokenClass,
                                            owner: (_a = d.owner) !== null && _a !== void 0 ? _a : ctx.callingUser,
                                            quantity: d.quantity,
                                            authorizedOnBehalf: undefined
                                        })];
                                });
                            }); });
                            _a = chaincode_1.batchMintToken;
                            _b = [ctx];
                            return [4 /*yield*/, Promise.all(params)];
                        case 1: return [2 /*return*/, _a.apply(void 0, _b.concat([_c.sent()]))];
                    }
                });
            });
        };
        GalaChainTokenContract_1.prototype.UseToken = function (ctx, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    return [2 /*return*/, (0, chaincode_1.useToken)(ctx, {
                            owner: (_a = dto.owner) !== null && _a !== void 0 ? _a : ctx.callingUser,
                            inUseBy: dto.inUseBy,
                            tokenInstanceKey: dto.tokenInstance,
                            quantity: dto.quantity,
                            allowancesToUse: (_b = dto.useAllowances) !== null && _b !== void 0 ? _b : [],
                            authorizedOnBehalf: undefined
                        })];
                });
            });
        };
        GalaChainTokenContract_1.prototype.ReleaseToken = function (ctx, dto) {
            return (0, chaincode_1.releaseToken)(ctx, {
                tokenInstanceKey: dto.tokenInstance
            });
        };
        GalaChainTokenContract_1.prototype.LockToken = function (ctx, dto) {
            var _this = this;
            var _a, _b;
            return (0, chaincode_1.lockToken)(ctx, {
                owner: (_a = dto.owner) !== null && _a !== void 0 ? _a : ctx.callingUser,
                lockAuthority: dto.lockAuthority,
                tokenInstanceKey: dto.tokenInstance,
                quantity: dto.quantity,
                allowancesToUse: (_b = dto.useAllowances) !== null && _b !== void 0 ? _b : [],
                name: undefined,
                expires: 0,
                verifyAuthorizedOnBehalf: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, undefined];
                }); }); }
            });
        };
        GalaChainTokenContract_1.prototype.LockTokens = function (ctx, dto) {
            var _this = this;
            var _a, _b;
            // const verifyAuthorizedOnBehalf = (c: TokenClassKey) => bridgeTypeUser(ctx, dto.lockAuthority, c);
            return (0, chaincode_1.lockTokens)(ctx, {
                lockAuthority: dto.lockAuthority,
                tokenInstances: dto.tokenInstances,
                allowancesToUse: (_a = dto.useAllowances) !== null && _a !== void 0 ? _a : [],
                name: dto.name,
                expires: (_b = dto.expires) !== null && _b !== void 0 ? _b : 0,
                verifyAuthorizedOnBehalf: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, undefined];
                }); }); }
            });
        };
        GalaChainTokenContract_1.prototype.UnlockToken = function (ctx, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, chaincode_1.unlockToken)(ctx, {
                            tokenInstanceKey: dto.tokenInstance,
                            name: undefined,
                            quantity: dto.quantity
                        })];
                });
            });
        };
        GalaChainTokenContract_1.prototype.UnlockTokens = function (ctx, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var params, _a, _b;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            params = dto.tokenInstances.map(function (d) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    return [2 /*return*/, ({
                                            tokenInstanceKey: d.tokenInstanceKey,
                                            quantity: d.quantity,
                                            owner: (_a = d.owner) !== null && _a !== void 0 ? _a : ctx.callingUser,
                                            name: dto.name,
                                            forSwap: false
                                        })];
                                });
                            }); });
                            _a = chaincode_1.unlockTokens;
                            _b = [ctx];
                            return [4 /*yield*/, Promise.all(params)];
                        case 1: return [2 /*return*/, _a.apply(void 0, _b.concat([_c.sent()]))];
                    }
                });
            });
        };
        GalaChainTokenContract_1.prototype.TransferToken = function (ctx, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    return [2 /*return*/, (0, chaincode_1.transferToken)(ctx, {
                            from: (_a = dto.from) !== null && _a !== void 0 ? _a : ctx.callingUser,
                            to: dto.to,
                            tokenInstanceKey: dto.tokenInstance,
                            quantity: dto.quantity,
                            allowancesToUse: (_b = dto.useAllowances) !== null && _b !== void 0 ? _b : [],
                            authorizedOnBehalf: undefined
                        })];
                });
            });
        };
        GalaChainTokenContract_1.prototype.BurnTokens = function (ctx, dto) {
            var _a;
            return (0, chaincode_1.burnTokens)(ctx, {
                owner: (_a = dto.owner) !== null && _a !== void 0 ? _a : ctx.callingUser,
                toBurn: dto.tokenInstances
            });
        };
        GalaChainTokenContract_1.prototype.FetchBurns = function (ctx, dto) {
            return (0, chaincode_1.fetchBurns)(ctx, dto);
        };
        return GalaChainTokenContract_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GalaChainTokenContract");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _CreateTokenClass_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.CreateTokenClassDto,
                out: api_1.TokenClassKey,
                allowedOrgs: ["CuratorOrg"],
                verifySignature: true
            })];
        _UpdateTokenClass_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.UpdateTokenClassDto,
                out: api_1.TokenClassKey,
                allowedOrgs: ["CuratorOrg"],
                verifySignature: true
            })];
        _FetchTokenClasses_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.EVALUATE,
                in: api_1.FetchTokenClassesDto,
                out: { arrayOf: api_1.TokenClass }
            })];
        _FetchTokenClassesWithPagination_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.EVALUATE,
                in: api_1.FetchTokenClassesWithPaginationDto,
                out: api_1.FetchTokenClassesResponse
            })];
        _GrantAllowance_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.GrantAllowanceDto,
                out: { arrayOf: api_1.TokenAllowance },
                verifySignature: true
            })];
        _RefreshAllowances_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.RefreshAllowancesDto,
                out: { arrayOf: api_1.TokenAllowance },
                verifySignature: true
            })];
        _FullAllowanceCheck_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.EVALUATE,
                in: api_1.FullAllowanceCheckDto,
                out: api_1.FullAllowanceCheckResDto
            })];
        _FetchAllowances_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.EVALUATE,
                in: api_1.FetchAllowancesDto,
                out: api_1.FetchAllowancesResponse
            })];
        _DeleteAllowances_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.DeleteAllowancesDto,
                out: "number",
                verifySignature: true
            })];
        _FetchBalances_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.EVALUATE,
                in: api_1.FetchBalancesDto,
                out: { arrayOf: api_1.TokenBalance }
            })];
        _RequestMint_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.HighThroughputMintTokenDto,
                out: api_1.FulfillMintDto,
                verifySignature: true
            })];
        _FulfillMint_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.FulfillMintDto,
                out: { arrayOf: api_1.TokenInstanceKey },
                allowedOrgs: ["CuratorOrg"]
            })];
        _HighThroughputMint_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.HighThroughputMintTokenDto,
                out: { arrayOf: api_1.TokenInstanceKey },
                verifySignature: true,
                sequence: [
                    {
                        methodName: "RequestMint",
                        isWrite: true,
                        dtoSchema: (0, api_1.generateSchema)(api_1.HighThroughputMintTokenDto),
                        responseSchema: (0, api_1.generateResponseSchema)(api_1.FulfillMintDto)
                    },
                    {
                        methodName: "FulfillMint",
                        isWrite: true,
                        dtoSchema: (0, api_1.generateSchema)(api_1.FulfillMintDto),
                        responseSchema: (0, api_1.generateResponseSchema)(api_1.TokenInstanceKey, "array")
                    }
                ]
            })];
        _FetchMintRequests_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.EVALUATE,
                in: api_1.FetchMintRequestsDto,
                out: { arrayOf: api_1.MintRequestDto }
            })];
        _MintToken_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.MintTokenDto,
                out: { arrayOf: api_1.TokenInstanceKey },
                verifySignature: true
            })];
        _MintTokenWithAllowance_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.MintTokenWithAllowanceDto,
                out: { arrayOf: api_1.TokenInstanceKey },
                verifySignature: true
            })];
        _BatchMintToken_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.BatchMintTokenDto,
                out: { arrayOf: api_1.TokenInstanceKey },
                verifySignature: true
            })];
        _UseToken_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.UseTokenDto,
                out: api_1.TokenBalance,
                verifySignature: true
            })];
        _ReleaseToken_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.ReleaseTokenDto,
                out: api_1.TokenBalance,
                verifySignature: true
            })];
        _LockToken_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.LockTokenDto,
                out: api_1.TokenBalance,
                verifySignature: true
            })];
        _LockTokens_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.LockTokensDto,
                out: { arrayOf: api_1.TokenBalance },
                verifySignature: true
            })];
        _UnlockToken_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.UnlockTokenDto,
                out: api_1.TokenBalance,
                verifySignature: true
            })];
        _UnlockTokens_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.UnlockTokensDto,
                out: { arrayOf: api_1.TokenBalance },
                verifySignature: true
            })];
        _TransferToken_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.TransferTokenDto,
                out: { arrayOf: api_1.TokenBalance },
                verifySignature: true
            })];
        _BurnTokens_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: api_1.BurnTokensDto,
                out: { arrayOf: api_1.TokenBurn },
                verifySignature: true
            })];
        _FetchBurns_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.EVALUATE,
                in: api_1.FetchBurnsDto,
                out: { arrayOf: api_1.TokenBurn }
            })];
        __esDecorate(_classThis, null, _CreateTokenClass_decorators, { kind: "method", name: "CreateTokenClass", static: false, private: false, access: { has: function (obj) { return "CreateTokenClass" in obj; }, get: function (obj) { return obj.CreateTokenClass; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _UpdateTokenClass_decorators, { kind: "method", name: "UpdateTokenClass", static: false, private: false, access: { has: function (obj) { return "UpdateTokenClass" in obj; }, get: function (obj) { return obj.UpdateTokenClass; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _FetchTokenClasses_decorators, { kind: "method", name: "FetchTokenClasses", static: false, private: false, access: { has: function (obj) { return "FetchTokenClasses" in obj; }, get: function (obj) { return obj.FetchTokenClasses; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _FetchTokenClassesWithPagination_decorators, { kind: "method", name: "FetchTokenClassesWithPagination", static: false, private: false, access: { has: function (obj) { return "FetchTokenClassesWithPagination" in obj; }, get: function (obj) { return obj.FetchTokenClassesWithPagination; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _GrantAllowance_decorators, { kind: "method", name: "GrantAllowance", static: false, private: false, access: { has: function (obj) { return "GrantAllowance" in obj; }, get: function (obj) { return obj.GrantAllowance; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _RefreshAllowances_decorators, { kind: "method", name: "RefreshAllowances", static: false, private: false, access: { has: function (obj) { return "RefreshAllowances" in obj; }, get: function (obj) { return obj.RefreshAllowances; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _FullAllowanceCheck_decorators, { kind: "method", name: "FullAllowanceCheck", static: false, private: false, access: { has: function (obj) { return "FullAllowanceCheck" in obj; }, get: function (obj) { return obj.FullAllowanceCheck; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _FetchAllowances_decorators, { kind: "method", name: "FetchAllowances", static: false, private: false, access: { has: function (obj) { return "FetchAllowances" in obj; }, get: function (obj) { return obj.FetchAllowances; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _DeleteAllowances_decorators, { kind: "method", name: "DeleteAllowances", static: false, private: false, access: { has: function (obj) { return "DeleteAllowances" in obj; }, get: function (obj) { return obj.DeleteAllowances; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _FetchBalances_decorators, { kind: "method", name: "FetchBalances", static: false, private: false, access: { has: function (obj) { return "FetchBalances" in obj; }, get: function (obj) { return obj.FetchBalances; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _RequestMint_decorators, { kind: "method", name: "RequestMint", static: false, private: false, access: { has: function (obj) { return "RequestMint" in obj; }, get: function (obj) { return obj.RequestMint; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _FulfillMint_decorators, { kind: "method", name: "FulfillMint", static: false, private: false, access: { has: function (obj) { return "FulfillMint" in obj; }, get: function (obj) { return obj.FulfillMint; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _HighThroughputMint_decorators, { kind: "method", name: "HighThroughputMint", static: false, private: false, access: { has: function (obj) { return "HighThroughputMint" in obj; }, get: function (obj) { return obj.HighThroughputMint; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _FetchMintRequests_decorators, { kind: "method", name: "FetchMintRequests", static: false, private: false, access: { has: function (obj) { return "FetchMintRequests" in obj; }, get: function (obj) { return obj.FetchMintRequests; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _MintToken_decorators, { kind: "method", name: "MintToken", static: false, private: false, access: { has: function (obj) { return "MintToken" in obj; }, get: function (obj) { return obj.MintToken; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _MintTokenWithAllowance_decorators, { kind: "method", name: "MintTokenWithAllowance", static: false, private: false, access: { has: function (obj) { return "MintTokenWithAllowance" in obj; }, get: function (obj) { return obj.MintTokenWithAllowance; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _BatchMintToken_decorators, { kind: "method", name: "BatchMintToken", static: false, private: false, access: { has: function (obj) { return "BatchMintToken" in obj; }, get: function (obj) { return obj.BatchMintToken; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _UseToken_decorators, { kind: "method", name: "UseToken", static: false, private: false, access: { has: function (obj) { return "UseToken" in obj; }, get: function (obj) { return obj.UseToken; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _ReleaseToken_decorators, { kind: "method", name: "ReleaseToken", static: false, private: false, access: { has: function (obj) { return "ReleaseToken" in obj; }, get: function (obj) { return obj.ReleaseToken; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _LockToken_decorators, { kind: "method", name: "LockToken", static: false, private: false, access: { has: function (obj) { return "LockToken" in obj; }, get: function (obj) { return obj.LockToken; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _LockTokens_decorators, { kind: "method", name: "LockTokens", static: false, private: false, access: { has: function (obj) { return "LockTokens" in obj; }, get: function (obj) { return obj.LockTokens; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _UnlockToken_decorators, { kind: "method", name: "UnlockToken", static: false, private: false, access: { has: function (obj) { return "UnlockToken" in obj; }, get: function (obj) { return obj.UnlockToken; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _UnlockTokens_decorators, { kind: "method", name: "UnlockTokens", static: false, private: false, access: { has: function (obj) { return "UnlockTokens" in obj; }, get: function (obj) { return obj.UnlockTokens; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _TransferToken_decorators, { kind: "method", name: "TransferToken", static: false, private: false, access: { has: function (obj) { return "TransferToken" in obj; }, get: function (obj) { return obj.TransferToken; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _BurnTokens_decorators, { kind: "method", name: "BurnTokens", static: false, private: false, access: { has: function (obj) { return "BurnTokens" in obj; }, get: function (obj) { return obj.BurnTokens; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _FetchBurns_decorators, { kind: "method", name: "FetchBurns", static: false, private: false, access: { has: function (obj) { return "FetchBurns" in obj; }, get: function (obj) { return obj.FetchBurns; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GalaChainTokenContract = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GalaChainTokenContract = _classThis;
}();
exports.default = GalaChainTokenContract;
