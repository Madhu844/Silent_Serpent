// Advanced Modals for Login, Payment, and Anonymous Hero Injection

// --- CSS Injection ---
const modalStyles = `
    .modal-overlay {
        position: fixed; top:0; left:0; width:100%; height:100%;
        background: rgba(0,0,0,0.9); backdrop-filter: blur(8px);
        display: none; justify-content: center; align-items: center; z-index: 10000;
        animation: modalFadeIn 0.3s forwards;
    }
    @keyframes modalFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    .modal-card {
        background: linear-gradient(135deg, rgba(15, 15, 25, 0.95), rgba(5, 5, 10, 0.98));
        border: 1px solid var(--primary);
        box-shadow: 0 0 50px rgba(0, 255, 65, 0.15), inset 0 0 20px rgba(0, 255, 65, 0.05);
        padding: 2.5rem; border-radius: 12px; width: 90%; max-width: 500px;
        position: relative;
        color: #fff;
    }
    .modal-close {
        position: absolute; top: 15px; right: 20px; color: #666; cursor: pointer; font-size: 1.8rem;
        transition: color 0.2s;
    }
    .modal-close:hover { color: var(--primary); }
    
    .pay-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-top: 1.5rem; }
    .pay-opt {
        border: 1px solid #222; padding: 1.2rem 0.5rem; text-align: center; cursor: pointer; transition: all 0.3s;
        border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 0.8rem;
        background: rgba(255,255,255,0.02);
    }
    .pay-opt i { font-size: 1.5rem; }
    .pay-opt:hover { border-color: var(--primary); background: rgba(0,255,65,0.08); transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
    .pay-opt.active { border-color: var(--primary); background: rgba(0,255,65,0.1); }
    
    .crypto-addr {
        background: #000; padding: 0.8rem; font-family: 'Fira Code', monospace; font-size: 0.85rem;
        word-break: break-all; margin-top: 0.8rem; border: 1px dashed var(--primary); color: var(--primary);
        position: relative; border-radius: 4px;
    }
    .copy-btn {
        position: absolute; right: 5px; top: 5px; background: #222; color: #fff; border: none; 
        padding: 2px 5px; font-size: 0.7rem; border-radius: 3px; cursor: pointer;
    }
    
    .social-login {
        display: flex; gap: 1.5rem; justify-content: center; margin-top: 2rem;
    }
    .s-btn {
        width: 50px; height: 50px; border-radius: 12px; border: 1px solid #222;
        display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s;
        background: rgba(255,255,255,0.03); color: #888;
    }
    .s-btn:hover { border-color: var(--primary); color: #fff; transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0,255,65,0.1); }
    
    .form-input {
        background: rgba(0,0,0,0.5); border: 1px solid #222; padding: 1rem; 
        color: #fff; width: 100%; border-radius: 6px; transition: border-color 0.3s;
        outline: none;
    }
    .form-input:focus { border-color: var(--primary); }
    
    /* Creative Hero Figure */
    .anon-figure {
        position: absolute; left: 5%; top: 45%; transform: translateY(-50%);
        width: 450px; height: 600px;
        background: url('assets/offensive.png') no-repeat center;
        background-size: cover;
        opacity: 0.5;
        filter: grayscale(1) contrast(1.2) brightness(0.5);
        mask-image: linear-gradient(to left, black, transparent);
        -webkit-mask-image: linear-gradient(to left, black, transparent);
        z-index: -1;
        pointer-events: none;
        animation: floatImg 8s ease-in-out infinite, figureGlitch 12s step-end infinite;
    }
    @keyframes floatImg {
        0%, 100% { transform: translateY(-50%) translateX(0); }
        50% { transform: translateY(-52%) translateX(10px); }
    }
    @keyframes figureGlitch {
        0%, 95%, 100% { filter: grayscale(1) contrast(1.5) brightness(0.7); opacity: 0.7; }
        96% { filter: grayscale(0) hue-rotate(90deg) contrast(2); opacity: 0.9; transform: translateY(-50%) skewX(5deg); }
        98% { filter: invert(1) brightness(2); transform: translateY(-50%) skewX(-5deg); }
    }
`;
const mStyle = document.createElement('style');
mStyle.innerHTML = modalStyles;
document.head.appendChild(mStyle);

// --- Modals HTML ---
const modalHTML = `
    <div id="login-modal" class="modal-overlay">
        <div class="modal-card">
            <span class="modal-close" onclick="closeModals()">×</span>
            <div style="text-align:center; margin-bottom:2rem">
                <i data-lucide="shield-lock" style="width:48px; height:48px; color:var(--primary); margin-bottom:1rem"></i>
                <h2 style="font-family:var(--font-head); letter-spacing:2px">IDENTITY VERIFICATION</h2>
                <p style="color:#666; font-size:0.9rem">Access Restricted Areas</p>
            </div>
            
            <div style="display:flex; flex-direction:column; gap:1.2rem">
                <div class="input-group">
                    <input type="email" placeholder="OPERATOR EMAIL" class="form-input">
                </div>
                <div class="input-group">
                    <input type="password" placeholder="ACCESS KEY" class="form-input">
                </div>
                <button class="cta-btn" style="width:100%; text-align:center; justify-content:center; padding:1.2rem" onclick="completeLogin()">INITIALIZE LOGIN</button>
            </div>

            <div style="display:flex; align-items:center; margin:2rem 0; gap:1rem">
                <div style="flex:1; height:1px; background:#222"></div>
                <div style="color:#444; font-size:0.7rem; letter-spacing:1px">SECURE UPLINK</div>
                <div style="flex:1; height:1px; background:#222"></div>
            </div>

            <div class="social-login">
                <div class="s-btn" onclick="socialLogin('Google')" title="Google Intelligence"><i data-lucide="mail"></i></div>
                <div class="s-btn" onclick="socialLogin('Facebook')" title="Facebook Network"><i data-lucide="facebook"></i></div>
                <div class="s-btn" onclick="socialLogin('GitHub')" title="GitHub Repository"><i data-lucide="github"></i></div>
            </div>
            
             <p style="text-align:center; margin-top:2rem; font-size:0.8rem; color:#444">
                No credentials? <span style="color:var(--primary); cursor:pointer" onclick="alert('Registration sequence starting...')">REGISTER NEW OPERATOR</span>
             </p>
        </div>
    </div>

    <div id="payment-modal" class="modal-overlay">
        <div class="modal-card" style="max-width: 650px;">
            <span class="modal-close" onclick="closeModals()">×</span>
            <div style="display:flex; gap:1.5rem; align-items:center; margin-bottom:2rem; border-bottom:1px solid #222; padding-bottom:1rem">
                <div style="background:rgba(0,255,65,0.1); padding:1rem; border-radius:12px; border:1px solid var(--primary)">
                    <i data-lucide="shopping-cart" style="width:32px; height:32px; color:var(--primary)"></i>
                </div>
                <div>
                    <h2 id="payment-title" style="font-family:var(--font-head); margin-bottom:0.2rem">SECURE CHECKOUT</h2>
                    <p style="color:#666; font-size:0.9rem">Encrypted Transaction Portal</p>
                </div>
            </div>
            
            <p style="font-size:0.8rem; color:#888; text-transform:uppercase; letter-spacing:1px; margin-bottom:1rem">1. Select Payment Method</p>
            <div class="pay-grid">
                <div class="pay-opt" onclick="setPaymentMethod('Card', this)">
                    <i data-lucide="credit-card"></i> <span>VISA/MC</span>
                </div>
                <div class="pay-opt" onclick="setPaymentMethod('Paypal', this)">
                    <i data-lucide="wallet"></i> <span>PAYPAL</span>
                </div>
                 <div class="pay-opt" onclick="setPaymentMethod('Crypto', this)">
                    <i data-lucide="bitcoin"></i> <span>CRYPTO</span>
                </div>
            </div>

            <div id="payment-content" style="margin-top:2.5rem; display:none">
                <div id="crypto-ui" style="display:none">
                    <p style="font-size:0.8rem; color:#888; text-transform:uppercase; letter-spacing:1px; margin-bottom:1rem">2. Choose Cryptocurrency</p>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem">
                        <select id="coin-select" onchange="updateWalletInfo(this.value)" class="form-input" style="font-family:'Fira Code', monospace">
                            <option value="">-- SELECT ASSET --</option>
                            <option value="BTC">BITCOIN (BTC)</option>
                            <option value="ETH">ETHEREUM (ETH)</option>
                            <option value="USDT">TETHER (USDT-TRC20)</option>
                            <option value="XMR">MONERO (XMR)</option>
                            <option value="DOGE">DOGECOIN (DOGE)</option>
                            <option value="SHIB">SHIBA INU (SHIB)</option>
                            <option value="TRX">TRON (TRX)</option>
                        </select>
                        <div id="crypto-price" style="display:flex; align-items:center; gap:0.5rem; background:rgba(255,255,255,0.03); border:1px solid #222; padding:0 1rem; border-radius:6px; color:var(--primary); font-family:'Fira Code'">
                            ---
                        </div>
                    </div>
                    
                    <div id="wallet-info" style="display:none; margin-top:2rem; animation: fadeIn 0.4s">
                        <div style="display:flex; gap:2rem; align-items:center">
                            <div style="background:#fff; padding:0.8rem; border-radius:8px">
                                <img src="" id="qr-img" style="width:120px; height:120px; display:block">
                            </div>
                            <div style="flex:1">
                                <p style="color:#666; font-size:0.75rem; margin-bottom:0.5rem">SEND EXACT AMOUNT TO ADDRESS:</p>
                                <div class="crypto-addr">
                                    <span id="addr-text">...</span>
                                    <button class="copy-btn" onclick="copyAddr()">COPY</button>
                                </div>
                                <p style="color:#555; font-size:0.7rem; margin-top:1rem">Network: <span id="network-text" style="color:#888">Mainnet</span></p>
                            </div>
                        </div>
                        <button class="buy-btn" style="width:100%; margin-top:2rem; padding:1.2rem; font-size:1rem" onclick="confirmPayment()">I HAVE COMPLETED THE TRANSFER</button>
                    </div>
                </div>
                
                <div id="fiat-ui" style="display:none; text-align:center; padding:2rem 0">
                    <div class="loading-spinner" style="margin: 0 auto 2rem"></div>
                    <p style="color:#888">Initializing Secure Shell with <span id="fiat-provider" style="color:#fff">...</span></p>
                    <button class="cta-btn" style="margin-top:2rem" onclick="alert('Gateway communication failed. Please use Crypto for untraceable transactions.')">CONNECT GATEWAY</button>
                </div>
            </div>
        </div>
    </div>
`;
const mDiv = document.createElement('div');
mDiv.id = "modals-container";
mDiv.innerHTML = modalHTML;
document.body.appendChild(mDiv);

// --- Global Logic ---

window.checkLogin = function () {
    document.getElementById('login-modal').style.display = 'flex';
    if (window.lucide) lucide.createIcons();
};

window.closeModals = function () {
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
};

window.completeLogin = function () {
    alert('SECURE LOGIN SEQUENCE COMPLETE. Welcome, Operator.');
    closeModals();
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.innerHTML = '<i data-lucide="user-check"></i> OPERATOR_01';
        loginBtn.style.color = 'var(--secondary)';
        loginBtn.style.borderColor = 'var(--secondary)';
        if (window.lucide) lucide.createIcons();
    }
};

window.socialLogin = function (provider) {
    alert(`Establishing OAuth link with ${provider}... SECURE.`);
    completeLogin();
};

window.buyItem = function (itemName) {
    const modal = document.getElementById('payment-modal');
    modal.style.display = 'flex';
    document.getElementById('payment-title').innerText = itemName.toUpperCase();
    document.getElementById('payment-content').style.display = 'none';
    document.querySelectorAll('.pay-opt').forEach(opt => opt.classList.remove('active'));
    if (window.lucide) lucide.createIcons();
};

window.setPaymentMethod = function (method, el) {
    document.querySelectorAll('.pay-opt').forEach(opt => opt.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('payment-content').style.display = 'block';

    const cryptoUI = document.getElementById('crypto-ui');
    const fiatUI = document.getElementById('fiat-ui');

    if (method === 'Crypto') {
        cryptoUI.style.display = 'block';
        fiatUI.style.display = 'none';
    } else {
        cryptoUI.style.display = 'none';
        fiatUI.style.display = 'block';
        document.getElementById('fiat-provider').innerText = method;
    }
};

const walletAddrs = {
    'BTC': { addr: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', network: 'Bitcoin' },
    'ETH': { addr: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', network: 'Ethereum (ERC20)' },
    'USDT': { addr: 'T9yD14Nj9g782973942387423987423', network: 'Tron (TRC20)' },
    'XMR': { addr: '4AdUndXHH99AnK84AdUndXHH99AnK84AdUndXHH99AnK8', network: 'Monero Mainnet' },
    'DOGE': { addr: 'D8vE9D8vE9D8vE9D8vE9D8vE9D8vE9', network: 'Doge Chain' },
    'SHIB': { addr: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', network: 'Ethereum (ERC20)' },
    'TRX': { addr: 'TPJTPJTPJTPJTPJTPJTPJTPJTPJTPJTPJ', network: 'Tron' }
};

window.updateWalletInfo = function (coin) {
    if (!coin) {
        document.getElementById('wallet-info').style.display = 'none';
        return;
    }
    const info = walletAddrs[coin];
    document.getElementById('wallet-info').style.display = 'block';
    document.getElementById('addr-text').innerText = info.addr;
    document.getElementById('network-text').innerText = info.network;
    document.getElementById('qr-img').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${info.addr}`;

    // Get live price if available from cryptoData in live-updates.js
    if (window.cryptoData) {
        const key = coin === 'USDT' ? 'tether' : coin === 'SHIB' ? 'shiba-inu' : coin === 'BTC' ? 'bitcoin' : coin === 'ETH' ? 'ethereum' : coin === 'XMR' ? 'monero' : coin === 'DOGE' ? 'dogecoin' : coin === 'TRX' ? 'tron' : '';
        if (key && cryptoData[key]) {
            document.getElementById('crypto-price').innerText = `$${cryptoData[key].price.toLocaleString()}`;
        }
    }
};

window.copyAddr = function () {
    const text = document.getElementById('addr-text').innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.innerText = 'COPIED!';
        setTimeout(() => btn.innerText = 'COPY', 2000);
    });
};

window.confirmPayment = function () {
    alert('TRANSACTION INITIALIZED. Waiting for network confirmations (1/3)... Please do not close this window.');
    setTimeout(() => {
        alert('SUCCESS: Payment Confirmed. Your download/access keys have been sent to your registered email.');
        closeModals();
    }, 3000);
};

// --- Anonymous Figure UI Enhancement ---
function injectAnonymousHero() {
    setInterval(() => {
        const main = document.getElementById('main-content');
        const hero = document.querySelector('.hero-section');

        // Only inject if on home page (hero section exists)
        if (hero && !document.querySelector('.anon-figure')) {
            const figure = document.createElement('div');
            figure.className = 'anon-figure';
            hero.appendChild(figure);
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    injectAnonymousHero();
});
// Fallback if DOMContentLoaded already fired
injectAnonymousHero();
