# Task Management dApp

A decentralized application (dApp) for managing tasks using Ethereum smart contracts. Built with Next.js, Tailwind CSS, and Ethers.js, with interactive UI components powered by Headless UI and react-hot-toast for notifications. This project is created as a task for internship application at @tecksteck

## 🚀 Features
- **Add Tasks**: Submit tasks directly to the blockchain.
- **Real-time Feedback**: Toast notifications for transaction status (loading, success, error).
- **Modal Interface**: Clean and responsive modal using Headless UI.
- **Blockchain Interaction**: Securely interact with Ethereum smart contracts.

## 🛠️ Technologies Used
- **Next.js** - React framework for building the frontend.
- **Foundry** - Fast, portable, and modular toolkit for Ethereum application development.
- **Ethers.js** - Library for interacting with Ethereum smart contracts.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **Headless UI** - Accessible UI components.
- **React Hot Toast** - Beautiful notifications for React.

## Verified Sepolia Contract Address And Etherscan URL

```bash
0x47FE4d9E8c12eBC8fB775f612E2350bA6e5d2aBC
```

```bash
https://sepolia.etherscan.io/address/0x47fe4d9e8c12ebc8fb775f612e2350ba6e5d2abc
```

## 📦 Installation and Running the Frontend
1. **Clone the repository:**
```bash
git clone https://github.com/YashSharma22003/task-manager-dapp.git
cd task-manager-dapp
```
2. **cd to frontend**
```bash
cd taskmanager-frontend
```
3. **Install dependencies:**
```bash
npm install
```

4. **Run the development server:**
```bash
npm run dev
```

## ⚙️ Foundry Setup and Testing

1. **Install Foundry:**
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```
2. **cd to foundry**
```bash
cd foundry
```
3. **Build smart contracts:**
```bash
forge build
```

4. **Run tests:**
```bash
forge test
```

5. **Run tests with coverage:**
```bash
forge coverage
```

6. **Deploy contracts to Sepolia:**
Make .env file with SEPOLIA_RPC and PRIVATE_KEY
```bash
forge forge script script/DeployTaskManager.s.sol:DeployTaskManager --rpc-url $SEPOLIA_RPC --private-key $PRIVATE_KEY --broadcast -vvv
```

## Coverage and Test Report

```bash
Ran 5 tests for test/TaskManager.t.sol:TaskManagerTest
[PASS] testAddTask() (gas: 140703)
[PASS] testDeleteTask() (gas: 108740)
[PASS] testEditTask() (gas: 148113)
[PASS] testMarkTask() (gas: 143516)
[PASS] testOnlyOwnerCanModify() (gas: 143115)
Suite result: ok. 5 passed; 0 failed; 0 skipped; finished in 4.42ms (3.74ms CPU time)

Ran 1 test suite in 18.53ms (4.42ms CPU time): 5 tests passed, 0 failed, 0 skipped (5 total tests)

╭--------------------------------+-----------------+-----------------+---------------+---------------╮
| File                           | % Lines         | % Statements    | % Branches    | % Funcs       |
+====================================================================================================+
| script/DeployTaskManager.s.sol | 0.00% (0/5)     | 0.00% (0/5)     | 100.00% (0/0) | 0.00% (0/1)   |
|--------------------------------+-----------------+-----------------+---------------+---------------|
| src/TaskManager.sol            | 100.00% (40/40) | 100.00% (41/41) | 100.00% (9/9) | 100.00% (6/6) |
|--------------------------------+-----------------+-----------------+---------------+---------------|
| Total                          | 88.89% (40/45)  | 89.13% (41/46)  | 100.00% (9/9) | 85.71% (6/7)  |
╰--------------------------------+-----------------+-----------------+---------------+---------------╯

```
## ✅ Requirements
- Node.js >= 16
- MetaMask or any Ethereum-compatible wallet.
- Hardhat (for local blockchain testing)
- Network - Sepolia

## 🤝 Contribution
Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/YashSharma22003/task-manager-dapp/issues).

## 📔 License
This project is [MIT](LICENSE) licensed.

## 🔗 Connect
- [LinkedIn](https://www.linkedin.com/in/yash-sharma-655985205)
- [Twitter](https://x.com/yash_ether)
- [GitHub](https://github.com/YashSharma22003)

---

> Built with ❤️ by Yash Sharma.

