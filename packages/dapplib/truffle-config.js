require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue repeat pitch exchange hope arctic army genuine'; 
let testAccounts = [
"0x99bea18105066dad31deb4a02cf2b2db701dd37c01f8716cb9625faf4e810ce0",
"0xe0d15267a41212c3e1122014dc7b6cba45af036df14ac00dcfd3b5d38881b44b",
"0x0e522d3745696d22101670d6bb569c97e62688a8ae5ef70e5751efe40f83191f",
"0x271c80b219ecb61c094c5b023ac4d329d7e851e30fc84f418ce513363f2b937e",
"0x1384a62ba9461e84c72ee2a1058f22926ef4911cd65c47bbd1706f7a020b1f57",
"0x6ee8f44c8c98e64c7594734c0c472f139ee31a2982d44a1cbdfc9acb3ecf7871",
"0x5fe227fcb2b31d7d9c464337ca09398b2ff0f1b2aa6a30fe78b8ddf597b6e3a7",
"0x85d94dfa253fd5505aff37d1cdc5911096cd9ea6f85e1d14c6430750b2927726",
"0x5ef7f9976a61f583fd4d6849867c5af42184aba8a59db97f0d77372a58a1bd74",
"0x0ab9947fa41cc6cdb9804b37003b6e0bf47c55e4a811be42407f7f8d1cfc898b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

