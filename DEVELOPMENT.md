# Development Notes

## GalaChain SDK Integration

### SDK Installation
The GalaChain SDK was installed using the following command:
```bash
npm install galachain-sdk@latest
```
This installed GalaChain SDK version `x.y.z`. (Replace `x.y.z` with the actual version installed.)

### Project Structure Adjustments
To accommodate the GalaChain SDK, the project structure was adjusted as follows:
- A `contracts` directory was created under the root to store GalaChain chaincode files.
- A `lib` directory was created under the root to store GalaChain client interaction code.

### Configuration
The SDK requires the following environment variables to be set in `.env`:
- `GALACHAIN_NETWORK_URL`: The URL to connect to the GalaChain network. `INPUT_REQUIRED {Provide the GalaChain network URL}`
- `GALACHAIN_CONTRACT_ADDRESS`: The deployed contract address on GalaChain. `INPUT_REQUIRED {Provide the deployed contract address}`

Please ensure these variables are correctly set for the SDK to function properly.