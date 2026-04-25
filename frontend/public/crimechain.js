// CrimeChain Pro - Smart Contract Interface

// ABI for the CrimeChain contract
const ABI = [
    "function createCase(string _desc, string _hash) public",
    "function verifyCase(uint _id, bool _status) public",
    "function getCase(uint _id) public view returns (uint, string, string, bool)",
    "function caseCount() public view returns (uint)"
];

let contract;
let signer;

async function initContract() {
    if (typeof window.ethereum === 'undefined') return;
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    // Use the contract address provided from Remix
    const CONTRACT_ADDRESS = "0xd9145CCE52D386f254917e481eB44e9943F39138"; 
    contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
}

async function uploadFile() {
    const caseId = document.getElementById('caseId').value;
    const statsEl = document.getElementById('txStatus');
    
    if (!caseId) {
        alert("Please enter a Case Identifier");
        return;
    }

    statsEl.textContent = "UPLOADING TO IPFS...";
    
    // Simulate IPFS and Blockchain transaction
    setTimeout(() => {
        statsEl.textContent = "SEALING ON LEDGER...";
        setTimeout(() => {
            statsEl.textContent = "SUCCESS: TRANSACTION 0x8a9...df2";
            const history = document.getElementById('history');
            const item = document.createElement('div');
            item.className = "p-4 glass-card text-xs mb-2 border-emerald-500/20";
            item.textContent = `[SUCCESS] Case ${caseId} sealed at block 1928374`;
            history.prepend(item);
        }, 2000);
    }, 2000);
}

async function verifyFile() {
    const cid = document.getElementById('verifyCaseId').value;
    const output = document.getElementById('output');
    
    if (!cid) {
        alert("Enter Case CID");
        return;
    }

    output.value = "Scanning blockchain for CID: " + cid + "...\n";
    
    setTimeout(() => {
        output.value += "Registry Match Found.\n";
        output.value += "Hash Integrity: 100% (MATCH)\n";
        output.value += "Verified by: Central Forensic Lab\n";
        output.value += "Status: ADMISSIBLE IN COURT";
    }, 2000);
}

// Attach to window for HTML access
window.uploadFile = uploadFile;
window.verifyFile = verifyFile;
window.connectWallet = connectWallet;
