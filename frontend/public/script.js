// CrimeChain Pro - Core UI Script

// Navigation logic
function showView(viewId) {
    // Hide all views
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target view
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Authentication Logic (Mock)
function startLoginFlow(role) {
    const roleBadge = document.getElementById('role-badge');
    const loginTitle = document.getElementById('login-title');
    const loginIcon = document.getElementById('login-icon');

    // Update login screen based on role
    if (roleBadge) roleBadge.textContent = role.toUpperCase();
    
    if (role === 'investigator') {
        loginTitle.textContent = "POLICE PORTAL LOGIN";
        // icon logic here if needed
    } else if (role === 'legal') {
        loginTitle.textContent = "LEGAL AGENCY LOGIN";
    } else {
        loginTitle.textContent = "PUBLIC RECORDS ACCESS";
    }

    showView('login');
}

function handleLogin(event) {
    event.preventDefault();
    // In a real app, verify credentials here
    console.log("Login verified");
    
    // Switch to dashboard and show appropriate content
    const role = document.getElementById('role-badge').textContent.toLowerCase();
    showView('dashboard');
    setupDashboard(role);
}

function setupDashboard(role) {
    // Hide all dash sections
    document.getElementById('dash-investigator').classList.add('hidden');
    document.getElementById('dash-legal').classList.add('hidden');
    document.getElementById('dash-public').classList.add('hidden');

    // Show correct section
    const targetDash = document.getElementById(`dash-${role}`);
    if (targetDash) {
        targetDash.classList.remove('hidden');
        if (role === 'public') {
            targetDash.classList.add('flex');
        }
    }
}

// Wallet Mock
async function connectWallet() {
    const walletEl = document.getElementById('wallet');
    walletEl.textContent = "SYNCING...";
    
    // Simulate connection
    setTimeout(() => {
        walletEl.textContent = "0x71C...4E81";
        walletEl.classList.remove('text-emerald-500');
        walletEl.classList.add('text-blue-400');
    }, 1500);
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
