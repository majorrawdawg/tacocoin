"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@gala-chain/client");
describe('TacoTokenContract e2e tests', () => {
    let client;
    beforeAll(() => {
        client = new client_1.ChainClient( /* Configuration details */);
    });
    test('Mint TacoCoin successfully', async () => {
        const mintDto = {
            amount: 100,
            recipient: 'testUser',
        };
        const mintResult = await client.submitTransaction('TacoTokenContract', 'mint', mintDto);
        expect(mintResult).toBeTruthy();
    });
    test('Transfer TacoCoin successfully', async () => {
        const transferDto = {
            amount: 50,
            from: 'testUser',
            to: 'anotherUser',
        };
        const transferResult = await client.submitTransaction('TacoTokenContract', 'transfer', transferDto);
        expect(transferResult).toBeTruthy();
    });
    test('Fail to transfer more TacoCoins than owned', async () => {
        const excessiveTransferDto = {
            amount: 999999,
            from: 'testUser',
            to: 'anotherUser',
        };
        await expect(client.submitTransaction('TacoTokenContract', 'transfer', excessiveTransferDto)).rejects.toThrow();
    });
});
