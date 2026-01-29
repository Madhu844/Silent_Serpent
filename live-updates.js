// Live Updates for Ticker and News Feed
// Now fetching REAL-TIME data from CoinGecko API

// --- Crypto Ticker Logic ---
let cryptoData = {
    bitcoin: { price: 64230, change: 1.2, symbol: 'BTC', color: '#f7931a' },
    ethereum: { price: 3450, change: 0.8, symbol: 'ETH', color: '#627eea' },
    monero: { price: 180, change: 0.5, symbol: 'XMR', color: '#ff6600' },
    tether: { price: 1.00, change: 0.01, symbol: 'USDT', color: '#26a17b' },
    tron: { price: 0.12, change: 2.1, symbol: 'TRX', color: '#ff0013' },
    dogecoin: { price: 0.15, change: -1.5, symbol: 'DOGE', color: '#c2a633' },
    'shiba-inu': { price: 0.000025, change: 3.4, symbol: 'SHIB', color: '#ff8a00' }
};

async function fetchPrices() {
    try {
        const ids = Object.keys(cryptoData).join(',');
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`);
        if (response.ok) {
            const data = await response.json();
            for (const id of Object.keys(cryptoData)) {
                if (data[id]) {
                    cryptoData[id].price = data[id].usd;
                    cryptoData[id].change = data[id].usd_24h_change;
                }
            }
        }
    } catch (e) {
        console.warn('Crypto API failed, using simulation');
    }
}

// Fetch prices every 60 seconds to avoid rate limits
setInterval(fetchPrices, 60000);
fetchPrices(); // Initial fetch

let currentCoinIndex = 0;
const coinKeys = Object.keys(cryptoData);

function updateTicker() {
    const tickerContent = document.querySelector('.ticker-content');
    if (!tickerContent) return;

    // Cycle through coins in the ticker along with alerts
    const activeCoin = cryptoData[coinKeys[currentCoinIndex]];
    currentCoinIndex = (currentCoinIndex + 1) % coinKeys.length;

    // Random cyber alert cycle
    const alerts = [
        "⚠ ALERT: New CVE-2026-9281 RCE exploitable in Win11",
        "⚡ 0-Day found in Kernel v6.8",
        "⚠ DDoS Attack Detected on Sector 7",
        "⚡ BREACH ALERT: HealthCorp Database Leaked",
        "⚠ THREAT LEVEL: ELEVATED",
        "👁️ OSINT: New Darkweb Market 'Hydra V2' Online",
        "🛡️ PATCH TUESDAY: 45 Critical Fixes Released",
        "☣️ MALWARE: 'BlackViper' ransomware spread via Discord"
    ];
    const alert = alerts[Math.floor(Math.random() * alerts.length)];

    const fmt = (num) => num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: (num < 1 ? 6 : 2) });
    const jitter = () => (Math.random() - 0.5) * (activeCoin.price * 0.0001);

    // Build ticker string with multiple coins visible
    let coinsDisplay = '';
    // Show 3 coins at a time
    for (let i = 0; i < 3; i++) {
        const idx = (currentCoinIndex + i) % coinKeys.length;
        const c = cryptoData[coinKeys[idx]];
        coinsDisplay += `<span style="color:${c.color}; font-weight:bold">${c.symbol}:</span> $${fmt(c.price + jitter())} (<span style="${getColor(c.change)}">${c.change > 0 ? '+' : ''}${c.change.toFixed(2)}%</span>) &nbsp; | &nbsp; `;
    }

    tickerContent.innerHTML = `
        <div style="display:inline-block; white-space:nowrap; animation: tickerScroll 20s linear infinite">
            ${coinsDisplay}
            <span style="color:#ff3333; font-weight:bold; animation: blink 2s infinite">${alert}</span> &nbsp; | &nbsp; 
            <span style="color:#00ff00">SYSTEM STATUS: <span style="animation: pulse 1s infinite">ONLINE</span></span> &nbsp; | &nbsp; 
            <span style="color:#00f3ff">DEFCON 34 Registration OPEN</span>
        </div>
    `;
}

function getColor(change) {
    return change >= 0 ? 'color:#00ff00' : 'color:#ff3333';
}

// Update ticker visuals every 3 seconds
setInterval(updateTicker, 3000);

// --- News Feed Auto-Refresh ---
async function refreshNewsFeed() {
    const container = document.getElementById('news-feed-container');
    if (!container) return;

    if (typeof fetchCyberSecurityNews === 'function') {
        const newsItems = await fetchCyberSecurityNews();
        if (newsItems && newsItems.length > 0) {
            const newsHTML = newsItems.map((item, idx) => `
                <div style="border-left:2px solid ${item.color}; padding-left:1rem; animation: fadeIn 0.5s ease-out; margin-bottom: 0.8rem;">
                    <small style="color:${item.color}">${item.time}</small>
                    <p style="margin:0; font-size:0.9rem">${item.type === 'critical' ? '<strong>⚠ CRITICAL</strong>: ' : item.type === 'breaking' ? '<strong>Breaking</strong>: ' : ''}${item.title}</p>
                </div>
            `).join('');

            container.innerHTML = newsHTML;
        }
    }
}

// Refresh news feed every 15 seconds
setInterval(refreshNewsFeed, 15000);

// Add animations
const style = document.createElement('style');
style.innerHTML = `
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }
  @keyframes pulse {
    0% { text-shadow: 0 0 5px #00ff00; }
    50% { text-shadow: 0 0 15px #00ff00, 0 0 20px #00ff00; }
    100% { text-shadow: 0 0 5px #00ff00; }
  }
  @keyframes tickerScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;
document.head.appendChild(style);

// Run immediately
updateTicker();
fetchPrices();
