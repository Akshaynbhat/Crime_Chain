// CrimeChain Pro - Smart Search Module

const MOCK_LAWS = [
    { id: "IPC-302", title: "Murder", punishment: "Death or life imprisonment", group: "Violent Crime" },
    { id: "IPC-378", title: "Theft", punishment: "Imprisonment up to 3 years", group: "Property Crime" },
    { id: "IPC-420", title: "Cheating", punishment: "Imprisonment up to 7 years", group: "Financial Fraud" },
    { id: "IT-66A", title: "Cyber Defamation", punishment: "Imprisonment up to 3 years", group: "Cyber Crime" }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('law-search-input');
    const searchBtn = document.getElementById('search-submit-btn');
    const resultsView = document.getElementById('results-view');
    const heroView = document.getElementById('hero-view');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase();
            if (!query) return;

            // Search simulation
            const matches = MOCK_LAWS.filter(law => 
                law.title.toLowerCase().includes(query) || 
                law.group.toLowerCase().includes(query)
            );

            displayResults(matches, query);
        });
    }
});

function displayResults(matches, query) {
    const resultsGrid = document.getElementById('results-grid');
    const resultsView = document.getElementById('results-view');
    const heroView = document.getElementById('hero-view');
    const resultsTitle = document.getElementById('results-count-title');

    resultsGrid.innerHTML = '';
    resultsTitle.innerHTML = `${matches.length} Results found for <span class="text-blue-500">"${query}"</span>`;

    matches.forEach(law => {
        const card = document.createElement('div');
        card.className = 'p-6 glass-card space-y-4';
        card.innerHTML = `
            <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-blue-500 uppercase tracking-widest">${law.id}</span>
                <span class="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">${law.group}</span>
            </div>
            <h3 class="text-xl font-bold">${law.title}</h3>
            <p class="text-sm text-neutral-400">${law.punishment}</p>
        `;
        resultsGrid.appendChild(card);
    });

    heroView.classList.add('hidden');
    resultsView.classList.remove('hidden');
}
