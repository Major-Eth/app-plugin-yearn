import "core-js/stable";
import "regenerator-runtime/runtime";
import { waitForAppScreen, zemu } from './test.fixture';

const BASE_SCREENS_S = (1 + 1 + 1 + 1 + 1) //YEARN + AMOUNT + VAULT + GAS_FEES + APPROVE
const BASE_SCREENS_X = (1 + 1 + 1 + 1 + 1) //YEARN + AMOUNT + VAULT + GAS_FEES + APPROVE

test('[Nano S] Zap In USDC to Pickle', zemu("nanos", async (sim, eth) => {
  // Original TX: https://etherscan.io/tx/0x61f02ce33a8e3a29bf2b386ef06377295b6e494595b491af872687fe73fb21d9
  eth.signTransaction(
    "44'/60'/0'/0/0",
    "02f902f401820330843b9aca00851e449a94008316e36094c695f73c1862e050059367b2e64489e66c52598380b9028428932094000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000000000000000000000000000000000109d8af02d0000000000000000000000001bf62acb8603ef7f3a0dfaf79b25202fe1faee06000000000000000000000000000000000000000000000d80f48a4300a0482b590000000000000000000000005a6a4d54456819380173272a5e8e9b9904bdf41b0000000000000000000000005ce9b49b7a1be9f2c3dc2b2a5bacea56fa21fbee00000000000000000000000000000000000000000000000000000000000001000000000000000000000000003ce37278de6388532c3949ce4e886f365b14fb56000000000000000000000000000000000000000000000000000000000000014464c98c6c000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000005a6a4d54456819380173272a5e8e9b9904bdf41b000000000000000000000000000000000000000000000000000000109d8af02d000000000000000000000000000000000000000000000e74221c1aa530bd84ad0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c080a0144681723c231d223cb69f91f20ac6f69e1913f67214c554a3c7f69b0913822ba0487c99336cd9c55a98f49cb9ac70597165ef8229530eaa6633b92d1cfb906641"
  );

  await waitForAppScreen(sim);
  await sim.navigateAndCompareSnapshots('.', 'nanos_zapin_usdc_pickle', [BASE_SCREENS_S, 0]);
}));


test('[Nano X] Zap In USDC to Pickle', zemu("nanox", async (sim, eth) => {
  // Original TX: https://etherscan.io/tx/0x61f02ce33a8e3a29bf2b386ef06377295b6e494595b491af872687fe73fb21d9
  eth.signTransaction(
    "44'/60'/0'/0/0",
    "02f902f401820330843b9aca00851e449a94008316e36094c695f73c1862e050059367b2e64489e66c52598380b9028428932094000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000000000000000000000000000000000109d8af02d0000000000000000000000001bf62acb8603ef7f3a0dfaf79b25202fe1faee06000000000000000000000000000000000000000000000d80f48a4300a0482b590000000000000000000000005a6a4d54456819380173272a5e8e9b9904bdf41b0000000000000000000000005ce9b49b7a1be9f2c3dc2b2a5bacea56fa21fbee00000000000000000000000000000000000000000000000000000000000001000000000000000000000000003ce37278de6388532c3949ce4e886f365b14fb56000000000000000000000000000000000000000000000000000000000000014464c98c6c000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000005a6a4d54456819380173272a5e8e9b9904bdf41b000000000000000000000000000000000000000000000000000000109d8af02d000000000000000000000000000000000000000000000e74221c1aa530bd84ad0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c080a0144681723c231d223cb69f91f20ac6f69e1913f67214c554a3c7f69b0913822ba0487c99336cd9c55a98f49cb9ac70597165ef8229530eaa6633b92d1cfb906641"
  );

  await waitForAppScreen(sim);
  await sim.navigateAndCompareSnapshots('.', 'nanox_zapin_usdc_pickle', [BASE_SCREENS_X, 0]);
}));