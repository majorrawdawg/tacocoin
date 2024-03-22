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
exports.TacoTokenContract = void 0;
var chaincode_1 = require("@gala-chain/chaincode");
var api_1 = require("@gala-chain/api");
var fabric_contract_api_1 = require("fabric-contract-api");
var package_json_1 = require("../../package.json"); // Ensure this path is correct
// Extending ChainCallDTO to ensure compatibility with GalaChain transactions
var MintTacoCoinDto = /** @class */ (function (_super) {
    __extends(MintTacoCoinDto, _super);
    function MintTacoCoinDto(amount, recipient) {
        var _this = _super.call(this) || this;
        _this.amount = amount;
        _this.recipient = recipient;
        return _this;
    }
    return MintTacoCoinDto;
}(api_1.ChainCallDTO));
var TransferTacoCoinDto = /** @class */ (function (_super) {
    __extends(TransferTacoCoinDto, _super);
    function TransferTacoCoinDto(amount, from, to) {
        var _this = _super.call(this) || this;
        _this.amount = amount;
        _this.from = from;
        _this.to = to;
        return _this;
    }
    return TransferTacoCoinDto;
}(api_1.ChainCallDTO));
var TacoTokenContract = function () {
    var _classDecorators = [(0, fabric_contract_api_1.Info)({ title: "TacoTokenContract", description: "Contract for managing TacoChain tokens" })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = chaincode_1.GalaContract;
    var _instanceExtraInitializers = [];
    var _mint_decorators;
    var _transfer_decorators;
    var TacoTokenContract = _classThis = /** @class */ (function (_super) {
        __extends(TacoTokenContract_1, _super);
        function TacoTokenContract_1() {
            var _this = _super.call(this, "TacoTokenContract", package_json_1.version) || this;
            __runInitializers(_this, _instanceExtraInitializers);
            return _this;
        }
        TacoTokenContract_1.prototype.mint = function (ctx, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // Example minting logic, replace with actual logic
                    console.log("Minting logic here");
                    // Instead of returning a direct function call, you'd implement the minting logic here.
                    return [2 /*return*/, {}]; // Return a meaningful response based on your minting result
                });
            });
        };
        TacoTokenContract_1.prototype.transfer = function (ctx, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // Example transferring logic, replace with actual logic
                    console.log("Transferring logic here");
                    // Instead of returning a direct function call, you'd implement the transferring logic here.
                    return [2 /*return*/, {}]; // Return a meaningful response based on your transferring result
                });
            });
        };
        return TacoTokenContract_1;
    }(_classSuper));
    __setFunctionName(_classThis, "TacoTokenContract");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _mint_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: MintTacoCoinDto,
                out: api_1.TokenInstanceKey,
                verifySignature: true
            })];
        _transfer_decorators = [(0, chaincode_1.GalaTransaction)({
                type: chaincode_1.SUBMIT,
                in: TransferTacoCoinDto,
                out: api_1.TokenBalance,
                verifySignature: true
            })];
        __esDecorate(_classThis, null, _mint_decorators, { kind: "method", name: "mint", static: false, private: false, access: { has: function (obj) { return "mint" in obj; }, get: function (obj) { return obj.mint; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _transfer_decorators, { kind: "method", name: "transfer", static: false, private: false, access: { has: function (obj) { return "transfer" in obj; }, get: function (obj) { return obj.transfer; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TacoTokenContract = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TacoTokenContract = _classThis;
}();
exports.TacoTokenContract = TacoTokenContract;
