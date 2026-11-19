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

    renderCategories();

    const clearBtn = document.getElementById('clear-search-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            resultsView.classList.add('hidden');
            heroView.classList.remove('hidden');
            const categoriesView = document.getElementById('categories-view');
            if (categoriesView) categoriesView.classList.remove('hidden');
        });
    }
});

// Category cards for the "Browse Categories" grid (built from MOCK_LAWS groups)
function renderCategories() {
    const grid = document.getElementById('categories-grid');
    const count = document.getElementById('module-count');
    if (!grid) return;

    const groups = [...new Set(MOCK_LAWS.map(law => law.group))];
    grid.innerHTML = '';
    groups.forEach(group => {
        const total = MOCK_LAWS.filter(law => law.group === group).length;
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'p-5 glass-card text-left flex flex-col gap-2 hover:-translate-y-1';
        card.innerHTML = `
            <span class="text-[10px] font-bold text-blue-400 uppercase tracking-widest">${total} Section${total === 1 ? '' : 's'}</span>
            <span class="text-base font-bold text-white">${group}</span>
        `;
        card.addEventListener('click', () => displayResults(MOCK_LAWS.filter(law => law.group === group), group.toLowerCase()));
        grid.appendChild(card);
    });
    if (count) count.textContent = `${groups.length} MODULES`;
}

// Sidebar category links (onclick="handleCategoryClick(...)")
const CATEGORY_QUERIES = { 'cat-cyber': 'cyber', 'cat-women': 'women' };
window.handleCategoryClick = function (categoryId) {
    const query = CATEGORY_QUERIES[categoryId] || categoryId;
    const matches = MOCK_LAWS.filter(law =>
        law.title.toLowerCase().includes(query) ||
        law.group.toLowerCase().includes(query)
    );
    displayResults(matches, query);
};

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

    if (matches.length === 0) {
        resultsGrid.innerHTML = '<div class="md:col-span-2 p-6 glass-card text-sm text-neutral-400">No matching sections found. Try different keywords.</div>';
    }

    heroView.classList.add('hidden');
    const categoriesView = document.getElementById('categories-view');
    if (categoriesView) categoriesView.classList.add('hidden');
    resultsView.classList.remove('hidden');
    document.getElementById('content-area')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
