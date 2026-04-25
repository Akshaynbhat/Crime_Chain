// e-FIR System Component

export function initEFIR() {
    console.log("e-FIR System Initialized");
    const container = document.getElementById('app-container');
    if (!container) return;

    container.innerHTML = `
        <div class="p-10 space-y-8 animate-in fade-in duration-500">
            <div class="flex flex-col gap-2">
                <span class="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Step 1 of 4</span>
                <h3 class="text-xl font-bold">Incident Information</h3>
                <p class="text-sm text-neutral-400">Please provide accurate details about the incident for the legal report.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                    <label class="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Type of Offense</label>
                    <select class="w-full bg-black/40 border border-[#262626] rounded-xl p-4 outline-none focus:border-blue-500 text-white">
                        <option>Cyber Fraud</option>
                        <option>Theft</option>
                        <option>Harassment</option>
                        <option>Assault</option>
                    </select>
                </div>
                <div class="space-y-2">
                    <label class="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Incident Date/Time</label>
                    <input type="datetime-local" class="w-full bg-black/40 border border-[#262626] rounded-xl p-4 outline-none focus:border-blue-500 text-white">
                </div>
            </div>

            <div class="space-y-2">
                <label class="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Describe what happened</label>
                <textarea placeholder="Provide a detailed account of the events..." class="w-full bg-black/40 border border-[#262626] rounded-xl p-4 h-32 outline-none focus:border-blue-500 text-white"></textarea>
            </div>

            <button class="w-full py-5 bg-blue-500 text-white font-bold uppercase tracking-widest rounded-2xl hover:brightness-110 transition-all">Proceed to Location Protocol</button>
        </div>
    `;
}

// Initial mount
document.addEventListener('DOMContentLoaded', () => {
    initEFIR();
});
