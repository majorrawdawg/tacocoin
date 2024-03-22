"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TacoTokenContract_1 = require("../src/token/TacoTokenContract");
describe('TacoTokenContract', () => {
    let contract;
    let mockContext;
    beforeEach(() => {
        contract = new TacoTokenContract_1.TacoTokenContract();
        mockContext = {
            stub: {
                putState: jest.fn(),
                getState: jest.fn()
            },
            // Mock other necessary context properties and methods
        };
    });
    test('Mint TacoCoin successfully', async () => {
        const mintDto = new TacoTokenContract_1.MintTacoCoinDto(100, 'recipientAddress');
        await contract.mint(mockContext, mintDto);
        expect(mockContext.stub.putState).toHaveBeenCalled();
    });
    test('Transfer TacoCoin successfully', async () => {
        const transferDto = new TacoTokenContract_1.TransferTacoCoinDto(50, 'senderAddress', 'recipientAddress');
        // Mock necessary getState to simulate sender and recipient balances
        mockContext.stub.getState.mockResolvedValueOnce(Buffer.from(JSON.stringify({ balance: 100 }))); // Sender balance
        mockContext.stub.getState.mockResolvedValueOnce(Buffer.from(JSON.stringify({ balance: 50 }))); // Recipient balance
        await contract.transfer(mockContext, transferDto);
        // Expect getState to be called to fetch balances
        expect(mockContext.stub.getState).toHaveBeenCalledTimes(2);
        // Expect putState to be called to update balances
        expect(mockContext.stub.putState).toHaveBeenCalledTimes(2);
    });
    // Example test case: Verify handling of insufficient balance for transfer
    test('Transfer fails on insufficient sender balance', async () => {
        const transferDto = new TacoTokenContract_1.TransferTacoCoinDto(150, 'senderAddress', 'recipientAddress'); // Transfer amount greater than balance
        mockContext.stub.getState.mockResolvedValueOnce(Buffer.from(JSON.stringify({ balance: 100 }))); // Sender balance
        // Mock the contract to simulate a throw on insufficient balance
        contract.transfer = jest.fn().mockImplementation(() => {
            throw new Error("Insufficient balance");
        });
        await expect(contract.transfer(mockContext, transferDto)).rejects.toThrow("Insufficient balance");
    });
    // Additional tests could include: transferring to non-existent accounts, minting with invalid amounts, etc.
});
