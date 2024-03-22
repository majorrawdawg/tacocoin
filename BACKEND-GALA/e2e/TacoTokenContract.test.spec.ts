import { ChainClient } from '@gala-chain/client';
import { MintTacoCoinDto, TransferTacoCoinDto } from '../TacoTokenContract';

describe('TacoTokenContract e2e tests', () => {
  let client: ChainClient;

  beforeAll(() => {
    client = new ChainClient(/* Configuration details */);
  });

  test('Mint TacoCoin successfully', async () => {
    const mintDto: MintTacoCoinDto = {
      amount: 100,
      recipient: 'testUser',
    };
    const mintResult = await client.submitTransaction('TacoTokenContract', 'mint', mintDto);
    expect(mintResult).toBeTruthy();
  });

  test('Transfer TacoCoin successfully', async () => {
    const transferDto: TransferTacoCoinDto = {
      amount: 50,
      from: 'testUser',
      to: 'anotherUser',
    };
    const transferResult = await client.submitTransaction('TacoTokenContract', 'transfer', transferDto);
    expect(transferResult).toBeTruthy();
  });

  test('Fail to transfer more TacoCoins than owned', async () => {
    const excessiveTransferDto: TransferTacoCoinDto = {
      amount: 999999,
      from: 'testUser',
      to: 'anotherUser',
    };
    await expect(
      client.submitTransaction('TacoTokenContract', 'transfer', excessiveTransferDto)
    ).rejects.toThrow();
  });
});
