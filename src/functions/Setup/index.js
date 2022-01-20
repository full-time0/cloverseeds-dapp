import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { isMobile } from "react-device-detect";
// import { config } from "../constances";
// import ZARD from "../constances/abis/zard_abi.json";
// import ZARD_STAKING from "../constances/abis/zard_staking_abi.json";

let cached_contracts = {}
//  Create WalletConnect Provider
const providerOptions = {
    /* See Provider Options Section */
    // Example with injected providers
    injected: {
        display: {
            name: "MetaMask",
        },
        package: null
    },
    // Example with WalletConnect provider
    walletconnect: {
        display: {
            name: "Mobile",
        },
        package: WalletConnectProvider, // required
        options: {
            infuraId: "27e484dcd9e3efcfd25a83a78777cdf1" // required
        }
    }
};
  
const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
});

//Have to check the ethereum binding on the window object to see if it's installed
const { ethereum } = window

let { web3 } = window
// Function to Connect Wallet
export const connectWallet = async () => {
    if (ethereum) {
        try {
            //  Web3Modal Connect
            const provider = await web3Modal.connect();
            //  Create Web3 instance
            web3 = new Web3(provider)
            console.log("Connected!")
            return true
        } catch (e) {
            console.error(e)
            throw new Error("User denied wallet connection!")
        }
    } else {
        throw new Error("No web3 detected!")
    }
}
// Function to Disconnect Wallet
export const disconnectWallet = async () => {
    //  Disconnect Wallet
    web3Modal.clearCachedProvider();
    console.log("Disconnected!")
    return false
}
// Function to get Accounts
export const getCoinbase = async () => {
    //  Get Accounts
    const accounts = isMobile? await web3.eth.getAccounts() : await ethereum.request({ method: 'eth_accounts' })
    //  Get Chain Id
    // const chainId = await web3.eth.chainId();
    //  Get Network Id
    // const networkId = await web3.eth.net.getId();
    return accounts ? accounts[0] : undefined
}

// Function to get Contract
// export const getContract = async (key) => {
//     let ABI, address
//     if (key === 'ZARD') {
//         ABI = ZARD.abi
//         address = ZARD.contractAddress
//     } else if (key === 'ZARD_STAKING') {
//         ABI = ZARD_STAKING.abi
//         address = ZARD_STAKING.contractAddress
//     }
//     if (web3.eth && !cached_contracts[key]) {
//         cached_contracts[key] = new web3.eth.Contract(ABI, address, {from: await getCoinbase()})
//     }
//     return cached_contracts[key]
// }

// class ZardContract {
//     async transfer(to, amount) {
//         let contract = await getContract("ZARD")
//         return (await contract?.methods.transfer(to, amount).send({
//             from: await getCoinbase(),
//             gasPrice: config.default_gasprice_gwei*1e9,
//             gas: config.default_gas_amount,
//         }))
//     }
//     async totalSupply() {
//         let contract = await getContract("ZARD")
//         return (await contract?.methods.totalSupply().call())
//     }
//     async approve(spender, amount) {
//         let contract = await getContract("ZARD")
//         return (await contract?.methods.approve(spender, amount).send({
//             from: await getCoinbase(),
//             gasPrice: config.default_gasprice_gwei*1e9,
//             gas: config.default_gas_amount,
//         }))
//     }
//     async balanceOf(address) {
//         let contract = await getContract("ZARD")
//         return (await contract?.methods.balanceOf(address).call())
//     }
// }

// class ZardStakingContract {
// 	constructor() {
// 		ZARD_STAKING.callFunctions.forEach(fn_name => {
// 			this[fn_name] = async function(...args) {
// 				let contract = await getContract("ZARD_STAKING")
// 				return (await contract?.methods[fn_name](...args).call())
// 			}
// 		});

// 		ZARD_STAKING.transactionFunctions.forEach(fn_name => {
// 			this[fn_name] = async function(...args) {
// 				let contract = await getContract("ZARD_STAKING")
// 				return (await contract?.methods[fn_name](...args).send({
//                     from: await getCoinbase(),
//                     gasPrice: config.default_gasprice_gwei*1e9,
//                     gas: config.default_gas_amount,
//                 }))
// 			}
// 		});
// 	}
//     async rewardRate() {
// 		let contract = await getContract("ZARD_STAKING")
//         return (await contract?.methods.rewardRate().call())
// 	}
// }

// window.zard = new ZardContract
// window.zard_staking = new ZardStakingContract