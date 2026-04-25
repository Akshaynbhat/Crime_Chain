🚔 CrimeChain
Blockchain-Based Crime Record Management System

Link: https://crime-chain-orpin.vercel.app/

Immutable • Transparent • AI-Assisted

📌 Project Overview

CrimeChain is a decentralized application (DApp) built on Ethereum that ensures tamper-proof crime record management using blockchain and AI.

Traditional systems suffer from data tampering, lack of transparency, and siloed storage. CrimeChain solves this by storing case records and evidence hashes on-chain, ensuring integrity, transparency, and accountability.

🧠 Key Features
🔐 Immutable blockchain-based records
📂 SHA-256 evidence integrity verification
👮 Role-based portals (Police, Court, Public)
🤖 AI-powered legal risk scoring
🔍 Transparent and publicly verifiable system

⚠️ Problem Statement
| Issue              | Description                                             |
| ------------------ | ------------------------------------------------------- |
| Tampering Risk     | Centralized databases can be modified without detection |
| No Audit Trail     | No verifiable proof of changes                          |
| Siloed Systems     | No unified system across police & courts                |
| Evidence Integrity | Evidence can be altered without detection               |


💡 Solution
CrimeChain uses Ethereum smart contracts to:
Store case records immutably
Store evidence hashes (not files)
Enable public verification of evidence
Provide AI-based case prioritization

🏗️ System Architecture
| Layer          | Technology               | Role                           |
| -------------- | ------------------------ | ------------------------------ |
| Smart Contract | Solidity                 | Core logic & storage           |
| Blockchain     | Ethereum                 | Immutable ledger               |
| Wallet         | MetaMask                 | Identity & transaction signing |
| Frontend       | HTML, CSS, JS, ethers.js | User interaction               |
| Backend        | Python, Flask            | AI scoring model               |

📜 Smart Contract Overview
Data Structure
| Field           | Type    | Description    |
| --------------- | ------- | -------------- |
| id              | uint256 | Unique case ID |
| caseDescription | string  | FIR details    |
| evidenceHash    | string  | SHA-256 hash   |
| verified        | bool    | Court status   |

Functions
| Function   | Role   | Description     |
| ---------- | ------ | --------------- |
| createCase | Police | Create new case |
| verifyCase | Court  | Verify case     |
| getCase    | Public | Read case       |
| caseCount  | Public | Total cases     |

🔐 Evidence Integrity (SHA-256)
Evidence is not stored on-chain
Only its hash is stored
Any modification → hash mismatch → detected instantly
👥 Role-Based System
| Role   | Portal        | Permissions  |
| ------ | ------------- | ------------ |
| Police | Police Portal | Create cases |
| Court  | Court Portal  | Verify cases |
| Public | Public Portal | View cases   |

🔗 Tech Stack
| Component       | Technology      |
| --------------- | --------------- |
| Blockchain      | Ethereum        |
| Smart Contracts | Solidity        |
| Web3            | ethers.js       |
| Frontend        | HTML, CSS, JS   |
| Backend         | Python, Flask   |
| AI Model        | Custom ML model |

🔄 Data Flow
Police uploads evidence
Browser generates SHA-256 hash
Transaction sent via MetaMask
Smart contract stores case
Court verifies case
Public can view and verify
🤖 AI Legal Risk Scoring
Input:
Case description
Evidence completeness
Pattern matching
📁 Project Structure
crimechain/
│
├── contracts/
│   └── CrimeChain.sol
│
├── frontend/
│   ├── public/
│   ├── police/
│   ├── court/
│   ├── js/
│   └── css/
│
├── backend/
│   ├── app.py
│   ├── model/
│   └── requirements.txt
│
├── .env
├── hardhat.config.js
└── README.md
⚙️ Setup Guide
🔹 Smart Contract (Remix)
Open https://remix.ethereum.org
Paste CrimeChain.sol
Compile with Solidity 0.8.x
Deploy using MetaMask
Copy Contract Address & ABI
🔹 Frontend
# Update contract details in app.js
CONTRACT_ADDRESS = "your_address"
ABI = [...]

Open:

frontend/public/index.html
🔹 Backend (AI Model)
cd backend
pip install -r requirements.txt
python app.py

📊 SWOT Analysis
✅ Strengths
Immutable records
Transparent system
AI integration
No single point of failure
❌ Weaknesses
Requires MetaMask
Gas fees
MVP-level UI
🚀 Opportunities
IPFS integration
National crime database
Mobile app
⚠️ Threats
Smart contract bugs
Private key risks
Regulatory issues

📜 License

MIT License
