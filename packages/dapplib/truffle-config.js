require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'idea nasty flee spot warrior ridge remember pudding include knee success gaze'; 
let testAccounts = [
"0xe91412c9d9e6e03a8b4f1b9e2be1d051fef072335c1b600d56643231d3fd735c",
"0x96f9c0b04fdaa3c49d697527b5bf18712838d1ea7e231972b929ebfdec0957dc",
"0x30378550c82bcffe1449fc642c8629e0b9e730d55f233860eaee971599048369",
"0xc183894c9e13cbb6ffe9e4392bc3d25e6e1d061ddd0c3d0a826dc9ed46e6c96c",
"0x14ad3f7d788b03de8d7e7fb660fb5cbd66823ba26e033ebd6133a609fbf2b30a",
"0xb2ff5e4570d748bc75b53b1e68e27768e2e3a36fe54b641f1fa95f43b37e9d13",
"0xb6fd1f80e7dd41763564a97a88b2b5a955fb1d39e6bf2cee1cdec65808138278",
"0x4a72570d31dd8dcbee29b183cc65304a1eb625e05ecd919c9c437313c0f470af",
"0x1949478a003dece1f88e7a2c025e2d715460f9ae97d8d94a6b51b30ba8691687",
"0xb3ea3f9ba1ba04a5b71bd93bf0afb31f5a65f4fffa27dfb8e6b142a5f030c4aa"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


