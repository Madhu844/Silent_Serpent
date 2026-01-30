// Styling for images and modal
const additionalStyles = `
    .article-view {
        animation: fadeIn 0.3s ease-out;
    }
    .back-btn {
        background: none;
        border: none;
        color: var(--primary);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        font-family: var(--font-head);
    }
    .back-btn:hover { text-decoration: underline; }
    .hero-img {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 2rem;
        border: 1px solid #333;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .buy-btn {
        background: var(--primary);
        color: #000;
        border: none;
        padding: 0.6rem 1.2rem;
        font-weight: 700;
        cursor: pointer;
        font-size: 0.8rem;
        transition: all 0.3s;
    }
    
    .buy-btn:hover {
        background: #fff;
        box-shadow: 0 0 15px var(--primary);
        transform: translateY(-2px);
    }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.innerText = additionalStyles;
document.head.appendChild(styleSheet);

const contentData = {
    threat_map: `
        <div class="inner-page">
            <h2 class="section-title">🌍 LIVE GLOBAL THREAT MAP</h2>
            <p class="section-subtitle">Real-time cyber attack visualization across the globe</p>
            
            <div class="card" style="padding: 0; overflow: hidden; height: 600px; animation: fadeInUp 0.5s ease-out; border-color: var(--primary);">
                <iframe src="threat-map.html" style="width: 100%; height: 100%; border: none; display: block;"></iframe>
            </div>
            
            <div class="card-grid" style="margin-top: 4rem; padding-bottom: 4rem;">
                <div class="card" style="animation: fadeInUp 0.5s ease-out 0.1s both;">
                    <div style="padding: 1.5rem;">
                        <h3 style="color: #ff0000; margin-bottom: 1rem;">
                            <i data-lucide="activity" style="width: 24px; height: 24px; vertical-align: middle;"></i>
                            What You're Seeing
                        </h3>
                        <p style="color: #ccc; line-height: 1.8;">
                            This live threat map visualizes real-time cyber attacks happening globally. Each line represents 
                            an active attack vector, with colors indicating the type of attack (DDoS, Malware, Phishing, etc.). 
                            Data is aggregated from honeypots, IDS sensors, and threat intelligence feeds worldwide.
                        </p>
                    </div>
                </div>
                
                <div class="card" style="animation: fadeInUp 0.5s ease-out 0.15s both;">
                    <div style="padding: 1.5rem;">
                        <h3 style="color: var(--primary); margin-bottom: 1rem;">
                            <i data-lucide="shield-alert" style="width: 24px; height: 24px; vertical-align: middle;"></i>
                            Attack Types Monitored
                        </h3>
                        <ul style="color: #aaa; line-height: 2;">
                            <li><span style="color: #ff0000;">●</span> DDoS Attacks</li>
                            <li><span style="color: #ff6600;">●</span> Malware Distribution</li>
                            <li><span style="color: #ffff00;">●</span> Phishing Campaigns</li>
                            <li><span style="color: #ff00ff;">●</span> Ransomware</li>
                            <li><span style="color: #00ffff;">●</span> SQL Injection</li>
                        </ul>
                    </div>
                </div>
                
                <div class="card" style="animation: fadeInUp 0.5s ease-out 0.2s both;">
                    <div style="padding: 1.5rem;">
                        <h3 style="color: #00f3ff; margin-bottom: 1rem;">
                            <i data-lucide="globe" style="width: 24px; height: 24px; vertical-align: middle;"></i>
                            Global Coverage
                        </h3>
                        <p style="color: #ccc; line-height: 1.8;">
                            Our monitoring network spans 150+ countries with sensors deployed in major data centers, 
                            ISPs, and cloud platforms. We track millions of attack attempts daily, providing you with 
                            unparalleled visibility into the global threat landscape.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,
    networking: `
        <div class="inner-page">
            <h2 class="section-title">NETWORKING & LAB SETUP</h2>
            <p class="section-subtitle"> The backbone of all cyber operations. Master the flow of data.</p>
            
            <div class="card-grid">
                <div class="card" onclick="loadArticle('net_basics')">
                    <img src="assets/networking.png" class="content-img" alt="Server Rack">
                    <div style="padding:1rem">
                        <h3>Networking Basics</h3>
                        <p>TCP/IP, OSI Model, Subnetting.</p>
                        <button class="text-btn">READ MODULE ></button>
                    </div>
                </div>
                <div class="card" onclick="loadArticle('lab_setup')">
                     <img src="assets/networking.png" class="content-img" alt="Hacker Matrix">
                    <div style="padding:1rem">
                        <h3>Home Lab Setup</h3>
                        <p>Building a safe environment. Kali vs Parrot.</p>
                         <button class="text-btn">VIEW GUIDE ></button>
                    </div>
                </div>
                <div class="card" onclick="loadArticle('pivoting')">
                     <img src="assets/networking.png" class="content-img" alt="Router">
                    <div style="padding:1rem">
                        <h3>Advanced Pivoting</h3>
                        <p>Ssh tunneling, Chisel, and Proxychains.</p>
                         <button class="text-btn">LEARN PIVOTING ></button>
                    </div>
                </div>
                <div class="card" onclick="loadArticle('ad_networks')">
                     <img src="assets/networking.png" class="content-img" alt="Active Directory">
                    <div style="padding:1rem">
                        <h3>Active Directory Labs</h3>
                        <p>Setting up Domain Controllers and Forests.</p>
                         <button class="text-btn">DIVE IN ></button>
                    </div>
                </div>
            </div>
        </div>
    `,
    offensive: `
        <div class="inner-page">
            <h2 class="section-title">OFFENSIVE SECURITY</h2>
            <p class="section-subtitle">Red Teaming, Pentesting & Exploitation.</p>
            
            <div class="card-grid">
                <div class="card" onclick="loadArticle('ethical_hack')">
                    <img src="assets/offensive.png" class="content-img" alt="Code Lock">
                    <div style="padding:1rem">
                        <h3>Ethical Hacking 101</h3>
                        <p>Methodologies & Legal Frameworks.</p>
                        <button class="text-btn">ACCESS ></button>
                    </div>
                </div>
                <div class="card" onclick="loadArticle('bug_bounty')">
                    <img src="assets/offensive.png" class="content-img" alt="Glitch Screen">
                    <div style="padding:1rem">
                        <h3>Bug Bounty Hunting</h3>
                        <p>Earn while securing the web. Platforms: HackerOne, Bugcrowd.</p>
                        <button class="text-btn">START HUNTING ></button>
                    </div>
                </div>
                <div class="card" onclick="loadArticle('exploit_dev')">
                    <img src="assets/offensive.png" class="content-img" alt="Shellcode">
                    <div style="padding:1rem">
                        <h3>Exploit Development</h3>
                        <p>Buffer Overflows, Heap Spraying, Shellcoding.</p>
                        <button class="text-btn">BECOME EXPERT ></button>
                    </div>
                </div>
                <div class="card" onclick="loadArticle('social_eng')">
                    <img src="assets/offensive.png" class="content-img" alt="Phone">
                    <div style="padding:1rem">
                        <h3>Social Engineering</h3>
                        <p>The human element. Phishing and Pretexting.</p>
                        <button class="text-btn">HACK THE HUMAN ></button>
                    </div>
                </div>
            </div>
        </div>
    `,
    defensive: `
         <div class="inner-page">
            <h2 class="section-title">DEFENSIVE OPERATIONS (BLUE TEAM)</h2>
            <p class="section-subtitle">Protect, Detect, Respond.</p>
            
            <div class="card-grid">
                <div class="card" onclick="loadArticle('blue_team')">
                    <img src="assets/defensive.png" class="content-img" alt="Security Center">
                    <div style="padding:1rem">
                        <h3>Blue Teaming Strategies</h3>
                        <p>SIEM, SOC Setup, and Incident Response.</p>
                         <button class="text-btn">SECURE PERIMETER ></button>
                    </div>
                </div>
                 <div class="card" onclick="loadArticle('sec_news')">
                    <img src="assets/defensive.png" class="content-img" alt="News Feed">
                    <div style="padding:1rem">
                        <h3>Security News</h3>
                        <p>Latest CVEs, Breaches, and Patches.</p>
                         <button class="text-btn">READ BRIEFING ></button>
                    </div>
                </div>
                <div class="card" onclick="loadArticle('threat_hunting')">
                    <img src="assets/defensive.png" class="content-img" alt="Magnifier">
                    <div style="padding:1rem">
                        <h3>Threat Hunting</h3>
                        <p>Find the threats before they strike.</p>
                         <button class="text-btn">START HUNTING ></button>
                    </div>
                </div>
                <div class="card" onclick="loadArticle('digital_forensics')">
                    <img src="assets/defensive.png" class="content-img" alt="Floppy">
                    <div style="padding:1rem">
                        <h3>Digital Forensics</h3>
                        <p>Memory analysis and Disk imaging.</p>
                         <button class="text-btn">ANALYZE EVIDENCE ></button>
                    </div>
                </div>
            </div>
        </div>
    `,
    intel: `
         <div class="inner-page">
            <h2 class="section-title">INTELLIGENCE (OSINT)</h2>
            <p class="section-subtitle">Open Source Intelligence Gathering.</p>
            
            <div class="card-grid">
                 <div class="card" onclick="loadArticle('osint_tools')">
                    <img src="assets/osint.png" class="content-img" alt="Globe Network">
                    <div style="padding:1rem">
                        <h3>OSINT Tools</h3>
                        <p>Maltego, Shodan, Google Dorks.</p>
                         <button class="text-btn">INITIATE SCAN ></button>
                    </div>
                </div>
            </div>
        </div>
    `,
    library: `
         <div class="inner-page">
            <h2 class="section-title">RESOURCE LIBRARY</h2>
            <p class="section-subtitle">Knowledge Base & Archives.</p>
            
            <div class="card-grid">
                 <div class="card" onclick="loadArticle('ctf_writeups')">
                    <img src="assets/academy.png" class="content-img" alt="Code Screen">
                    <div style="padding:1rem">
                        <h3>CTF Write-ups</h3>
                        <p>Solutions for HackTheBox & TryHackMe challenges.</p>
                         <button class="text-btn">DECODE ></button>
                    </div>
                </div>
                 <div class="card" onclick="loadArticle('cheat_sheets')">
                    <img src="assets/academy.png" class="content-img" alt="Paperwork">
                    <div style="padding:1rem">
                        <h3>Cheat Sheets</h3>
                        <p>Quick references for Nmap, SQLi, and Shells.</p>
                         <button class="text-btn">DOWNLOAD ></button>
                    </div>
                </div>
            </div>
        </div>
    `,
    career: `
         <div class="inner-page">
            <h2 class="section-title">CAREER ROADMAP</h2>
            <p class="section-subtitle">Your path to PRO status.</p>
            
            <div class="card-grid">
                 <div class="card" onclick="loadArticle('roadmap')">
                    <img src="assets/academy.png" class="content-img" alt="Roadmap">
                    <div style="padding:1rem">
                        <h3>Certification Path</h3>
                        <p>CompTIA -> eJPT -> OSCP -> CISSP.</p>
                         <button class="text-btn">CHART COURSE ></button>
                    </div>
                </div>
            </div>
        </div>
    `,
    store: (() => {
        let toolsHTML = '';
        if (typeof toolsData !== 'undefined') {
            toolsHTML = toolsData.map((tool, idx) => `
                <div class="card" style="animation: fadeInUp 0.5s ease-out ${idx * 0.05}s both;">
                    <img src="${tool.img}" class="content-img" alt="${tool.name}">
                    <div style="padding:1rem">
                        <h3>${tool.name}</h3>
                        <p>${tool.desc}</p>
                        <div class="price-tag" style="color:var(--primary); font-weight:bold; font-size:1.2rem; margin:1rem 0;">${tool.price}</div>
                        <button class="buy-btn" onclick="buyItem('${tool.name}')">ADD TO CART</button>
                    </div>
                </div>
            `).join('');
        }
        return `
        <div class="inner-page">
            <h2 class="section-title">BLACK_MARKET // TOOLS</h2>
            <p class="section-subtitle">Hardware & Software for Red Team Operations. ${typeof toolsData !== 'undefined' ? toolsData.length : 0} items available.</p>
            <div class="card-grid">
                ${toolsHTML}
            </div>
        </div>
    `;
    })(),
    about: `
        <div class="inner-page">
            <h2 class="section-title">ABOUT // SILENT_SERPENT</h2>
            <p class="section-subtitle">Elite Cyber Defense Operations - Established 2019</p>
            
            <div class="card" style="margin-bottom: 2rem; animation: fadeInUp 0.5s ease-out;">
                <div style="padding: 2rem;">
                    <h3 style="color: var(--primary); font-family: var(--font-head); font-size: 1.8rem; margin-bottom: 1rem;">
                        <i data-lucide="shield-check" style="width: 30px; height: 30px; vertical-align: middle;"></i> OUR ORIGIN
                    </h3>
                    <p style="line-height: 1.8; color: #ccc; font-size: 1rem;">
                        Silent_Serpent was founded in 2019 by a collective of former government cyber specialists, ethical hackers, 
                        and security researchers who recognized a critical gap in the cybersecurity training landscape. 
                        We emerged from the shadows with a singular mission: <strong style="color: var(--primary)">to democratize 
                        elite cyber defense knowledge and create the next generation of security professionals.</strong>
                    </p>
                    <p style="line-height: 1.8; color: #ccc; font-size: 1rem; margin-top: 1rem;">
                        Our name reflects our philosophy: like a serpent, we move silently, strike precisely, and adapt constantly. 
                        We operate at the intersection of offensive and defensive security, teaching both the art of penetration 
                        and the science of protection.
                    </p>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
                <div class="card" style="text-align: center; padding: 2rem; animation: fadeInUp 0.5s ease-out 0.1s both;">
                    <div style="font-size: 3rem; font-weight: bold; color: var(--primary);">50K+</div>
                    <div style="color: #777; font-size: 0.9rem; margin-top: 0.5rem;">STUDENTS TRAINED</div>
                </div>
                <div class="card" style="text-align: center; padding: 2rem; animation: fadeInUp 0.5s ease-out 0.15s both;">
                    <div style="font-size: 3rem; font-weight: bold; color: var(--secondary);">500+</div>
                    <div style="color: #777; font-size: 0.9rem; margin-top: 0.5rem;">SECURITY TOOLS</div>
                </div>
                <div class="card" style="text-align: center; padding: 2rem; animation: fadeInUp 0.5s ease-out 0.2s both;">
                    <div style="font-size: 3rem; font-weight: bold; color: #f0f;">24/7</div>
                    <div style="color: #777; font-size: 0.9rem; margin-top: 0.5rem;">THREAT MONITORING</div>
                </div>
                <div class="card" style="text-align: center; padding: 2rem; animation: fadeInUp 0.5s ease-out 0.25s both;">
                    <div style="font-size: 3rem; font-weight: bold; color: #ff3;">150+</div>
                    <div style="color: #777; font-size: 0.9rem; margin-top: 0.5rem;">COUNTRIES SERVED</div>
                </div>
            </div>

            <div class="card-grid">
                <div class="card" style="animation: fadeInUp 0.5s ease-out 0.3s both;">
                    <img src="assets/offensive.png" class="content-img" alt="Red Team">
                    <div style="padding: 1.5rem;">
                        <h3 style="color: #ff3333;">RED TEAM DIVISION</h3>
                        <p style="color: #aaa; margin: 1rem 0;">Our offensive security specialists simulate real-world attacks. Led by certified OSCP and OSCE professionals.</p>
                        <ul style="color: #888; line-height: 1.8; font-size: 0.9rem;">
                            <li>Penetration Testing</li>
                            <li>Exploit Development</li>
                            <li>Social Engineering</li>
                            <li>Zero-Day Research</li>
                        </ul>
                    </div>
                </div>

                <div class="card" style="animation: fadeInUp 0.5s ease-out 0.35s both;">
                    <img src="assets/defensive.png" class="content-img" alt="Blue Team">
                    <div style="padding: 1.5rem;">
                        <h3 style="color: #3399ff;">BLUE TEAM DIVISION</h3>
                        <p style="color: #aaa; margin: 1rem 0;">Our defensive operations team builds robust security infrastructures. Specialists in SIEM, SOC operations, and IR.</p>
                        <ul style="color: #888; line-height: 1.8; font-size: 0.9rem;">
                            <li>Security Monitoring</li>
                            <li>Incident Response</li>
                            <li>Threat Hunting</li>
                            <li>Forensic Analysis</li>
                        </ul>
                    </div>
                </div>

                <div class="card" style="animation: fadeInUp 0.5s ease-out 0.4s both;">
                    <img src="assets/osint.png" class="content-img" alt="Intel Team">
                    <div style="padding: 1.5rem;">
                        <h3 style="color: var(--primary);">INTELLIGENCE DIVISION</h3>
                        <p style="color: #aaa; margin: 1rem 0;">OSINT and threat intelligence experts gather critical data to keep you ahead of adversaries.</p>
                        <ul style="color: #888; line-height: 1.8; font-size: 0.9rem;">
                            <li>OSINT Gathering</li>
                            <li>Dark Web Monitoring</li>
                            <li>APT Tracking</li>
                            <li>Threat Prediction</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card" style="margin-top: 2rem; border-left: 4px solid var(--primary); animation: fadeInUp 0.5s ease-out 0.5s both;">
                <div style="padding: 2rem;">
                    <h3 style="color: var(--primary); font-family: var(--font-head); font-size: 1.5rem; margin-bottom: 1rem;">OUR MISSION</h3>
                    <p style="line-height: 1.8; color: #ccc; font-size: 1.1rem;">
                        "<em>To empower individuals and organizations with cutting-edge cybersecurity knowledge, tools, and methodologies. 
                        We believe security is not a product—it's a mindset. Through continuous education and community collaboration, 
                        we forge the guardians of the digital frontier.</em>"
                    </p>
                    <p style="margin-top: 1.5rem; color: var(--primary); font-weight: bold; font-family: var(--font-head);">
                        — Silent_Serpent Core Team
                    </p>
                </div>
            </div>

            <div class="card" style="margin-top: 2rem; animation: fadeInUp 0.5s ease-out 0.6s both;">
                <div style="padding: 2rem;">
                    <h3 style="color: var(--secondary); font-family: var(--font-head); margin-bottom: 1rem;">CERTIFICATIONS & PARTNERSHIPS</h3>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; color: #aaa;">
                        <div>✓ EC-Council Authorized Training Center</div>
                        <div>✓ Offensive Security Partner</div>
                        <div>✓ CompTIA Academic Partner</div>
                        <div>✓ SANS Institute Collaborator</div>
                        <div>✓ ISO 27001 Certified</div>
                        <div>✓ Bug Bounty Platform Partner</div>
                    </div>
                </div>
            </div>

            <div style="text-align: center; margin-top: 3rem;">
                <h3 style="color: #ccc; margin-bottom: 1rem;">Ready to Join the Elite?</h3>
                <button class="primary-btn" onclick="navigate('courses')" style="display: inline-flex;">
                    START YOUR JOURNEY <i data-lucide="arrow-right" style="margin-left: 0.5rem;"></i>
                </button>
            </div>
        </div>
    `,
    contact: `
        <div class="inner-page">
            <h2 class="section-title">SECURE COMMUNICATIONS</h2>
            <p class="section-subtitle">Establish an encrypted link.</p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 2rem;">
                <div class="card">
                    <h3 style="color:var(--primary)">OPERATOR DETAILS</h3>
                    <ul style="list-style:none; margin-top: 1.5rem; line-height: 2;">
                        <li><strong>CODENAME:</strong> Silent_Serpent</li>
                        <li><strong>BASE OF OPS:</strong> 35/A Galle Road, Colombo City</li>
                        <li><strong>SECURE LINE:</strong> 072-574-0456</li>
                        <li><strong>EMAIL:</strong> silentserpent4@gmail.com</li>
                    </ul>
                    <div style="margin-top: 2rem;">
                        <h4 style="color:#ccc; margin-bottom:1rem">SOCIAL UPLINKS:</h4>
                        <div style="display:flex; gap:1rem; flex-wrap:wrap">
                            <a href="https://www.facebook.com" target="_blank" class="secondary-btn icon-only"><i data-lucide="facebook"></i></a>
                            <a href="https://www.youtube.com" target="_blank" class="secondary-btn icon-only"><i data-lucide="youtube"></i></a>
                            <a href="https://www.linkedin.com" target="_blank" class="secondary-btn icon-only"><i data-lucide="linkedin"></i></a>
                            <a href="https://wa.me" target="_blank" class="secondary-btn icon-only"><i data-lucide="message-circle"></i></a>
                            <a href="https://www.tiktok.com" target="_blank" class="secondary-btn icon-only"><i data-lucide="video"></i></a>
                        </div>
                    </div>
                </div>

                <div class="card" style="padding:0; overflow:hidden; min-height:300px;">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.958737525345!2d79.84379366977539!3d6.892707700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bad50514213%3A0x6734182470788730!2sGalle%20Rd%2C%20Colombo!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
                        width="100%" 
                        height="100%" 
                        style="border:0; filter: invert(90%) hue-rotate(180deg);" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    `,
    courses: (() => {
        let coursesHTML = '';
        if (typeof coursesData !== 'undefined') {
            const badgeColors = { 'BEGINNER': 'var(--secondary)', 'INTERMEDIATE': 'var(--primary)', 'EXPERT': '#f0f' };
            coursesHTML = coursesData.map((course, idx) => `
                <div class="card" style="animation: fadeInUp 0.5s ease-out ${idx * 0.03}s both;">
                    <img src="${course.img}" class="content-img" alt="${course.title}">
                    <div style="padding:1rem">
                        <span style="background:${badgeColors[course.level]}; color:#000; padding:2px 8px; font-size:0.7rem; font-weight:bold; border-radius:2px">${course.level}</span>
                        <h3 style="margin-top:0.5rem">${course.title}</h3>
                        <p>${course.desc}</p>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1rem">
                             <span style="color:white; font-weight:bold">${course.price}</span>
                             <button class="buy-btn" style="width:auto" onclick="buyItem('${course.title}')">ENROLL NOW</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        return `
        <div class="inner-page">
            <h2 class="section-title">ACADEMY // COURSES</h2>
            <p class="section-subtitle">Enroll in elite cyber security training programs. ${typeof coursesData !== 'undefined' ? coursesData.length : 0} courses available.</p>
            <div class="card-grid">
                ${coursesHTML}
            </div>
        </div>
    `;
    })(),
    news: (() => {
        // Generate dynamic news feed
        let newsHTML = '';

        // This will be called when the page loads
        const generateNewsHTML = async () => {
            const newsItems = await fetchCyberSecurityNews();
            if (newsItems && newsItems.length > 0) {
                return newsItems.map((item, idx) => `
                    <div style="border-left:2px solid ${item.color}; padding-left:1rem; animation: slideInLeft 0.5s ease-out ${0.2 + (idx * 0.05)}s both;">
                        <small style="color:${item.color}">${item.time}</small>
                        <p style="margin:0; font-size:0.9rem">${item.type === 'critical' ? '<strong>⚠ CRITICAL</strong>: ' : item.type === 'breaking' ? '<strong>Breaking</strong>: ' : ''}${item.title}</p>
                    </div>
                `).join('');
            }
            return '';
        };

        return `
        <div class="inner-page">
            <h2 class="section-title">GLOBAL THREAT WIRE // NEWS</h2>
            <p class="section-subtitle">Real-time intelligence feed - Auto-updated.</p>
            
            <div class="card-grid">
                <div class="card" style="grid-column: span 2; animation: fadeInUp 0.5s ease-out;">
                     <img src="assets/osint.png" style="width:100%; height:300px; object-fit:cover; border-bottom:2px solid var(--primary)" alt="News Hero">
                    <div style="padding:1.5rem">
                         <h3 style="font-size:1.8rem; margin-bottom:0.5rem">Live Cyber Threat Intelligence</h3>
                         <p style="color:#ccc; margin-bottom:1rem">Automated threat feed aggregating the latest vulnerabilities, exploits, and security incidents from global sources. Updated every time you visit this page.</p>
                         <button class="text-btn" onclick="location.reload()">REFRESH FEED ></button>
                    </div>
                </div>
                
                <div class="card" style="height:100%; overflow-y:auto; max-height:600px; animation: fadeInUp 0.5s ease-out 0.1s both;">
                    <h3 style="border-bottom:1px solid #333; padding-bottom:0.5rem; margin-bottom:1rem">LIVE FEED <span style="color:var(--primary); font-size:0.8rem; margin-left:0.5rem">● ACTIVE</span></h3>
                    <div id="news-feed-container" style="display:flex; flex-direction:column; gap:1rem;">
                        <div style="text-align:center; padding:2rem; color:#777;">
                            <div class="spinner" style="border: 3px solid #333; border-top: 3px solid var(--primary); border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 1rem;"></div>
                            Loading latest threat intelligence...
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            // Auto-load news when NEWS section is viewed
            (async () => {
                const container = document.getElementById('news-feed-container');
                if (container && typeof fetchCyberSecurityNews === 'function') {
                    try {
                        const newsItems = await fetchCyberSecurityNews();
                        if (newsItems && newsItems.length > 0) {
                            container.innerHTML = newsItems.map((item, idx) => \`
                                <div style="border-left:2px solid \${item.color}; padding-left:1rem; animation: slideInLeft 0.5s ease-out \${0.2 + (idx * 0.05)}s both;">
                                    <small style="color:\${item.color}">\${item.time}</small>
                                    <p style="margin:0; font-size:0.9rem">\${item.type === 'critical' ? '<strong>⚠ CRITICAL</strong>: ' : item.type === 'breaking' ? '<strong>Breaking</strong>: ' : ''}\${item.title}</p>
                                </div>
                            \`).join('');
                        } else {
                            container.innerHTML = '<p style="color:#777; text-align:center;">No news available at this time.</p>';
                        }
                    } catch (error) {
                        console.error('News load error:', error);
                        container.innerHTML = '<p style="color:#ff3333; text-align:center;">Failed to load news feed.</p>';
                    }
                }
            })();
        </script>
    `;
    })(),














    dashboard: `
        <div class="inner-page">
            <h2 class="section-title">COMMAND CENTER // DASHBOARD</h2>
            <p class="section-subtitle">Real-time threat monitoring and system status.</p>

            <!--Stats Row-->
            <div class="dash-grid">
                <div class="stat-card">
                    <div class="stat-num">12,402</div>
                    <div class="stat-label">ATTACKS BLOCKED</div>
                </div>
                <div class="stat-card">
                    <div class="stat-num" style="color:var(--secondary)">ACTIVE</div>
                    <div class="stat-label">FIREWALL STATUS</div>
                </div>
                <div class="stat-card">
                    <div class="stat-num" style="color:#f0f">3</div>
                    <div class="stat-label">CRITICAL 0-DAYS</div>
                </div>
            </div>

            <!--Threat Map-->
            <h3 style="margin-top:2rem">GLOBAL THREAT MAP</h3>
            <div id="threat-map-container" style="display:block; position:relative; background: #050505 url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg') no-repeat center center; background-size: contain;">
                <div style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7);"></div>
                <canvas id="threat-map" style="position:relative; z-index:2;"></canvas>
            </div>

            <div class="card-grid">
                <div class="card">
                    <h3>System Logs</h3>
                    <div style="font-family:'Fira Code'; font-size:0.8rem; color:#777; height:100px; overflow:hidden">
                        [10:42] SSH Auth Failed from 192.168.1.5<br>
                            [10:45] Port Scan detected on port 80<br>
                                [10:48] Malicious Payload dropped in /tmp<br>
                                    [10:50] Auto-mitigation trigger... SUCCESS
                                </div>
                            </div>
                            <div class="card">
                                <h3>Server Resources</h3>
                                <p>CPU Usage: <span style="color:var(--primary)">12%</span></p>
                                <div style="width:100%; height:4px; background:#333; margin-bottom:1rem"><div style="width:12%; height:100%; background:var(--primary)"></div></div>
                                <p>RAM Usage: <span style="color:var(--secondary)">48%</span></p>
                                <div style="width:100%; height:4px; background:#333"><div style="width:48%; height:100%; background:var(--secondary)"></div></div>
                            </div>
                    </div>
                </div>
                `,
    reviews: `
        <div class="inner-page">
            <h2 class="section-title">OPERATOR FEEDBACK // REVIEWS</h2>
            <p class="section-subtitle">Verified testimonials from our elite global community.</p>
            
            <div style="display: flex; align-items: center; gap: 2rem; margin-bottom: 4rem; background: rgba(57, 255, 20, 0.05); padding: 2rem; border-radius: 12px; border: 1px solid var(--primary-dim);">
                <div style="text-align: center;">
                    <div style="font-size: 3.5rem; font-weight: bold; color: var(--primary); line-height: 1;">4.9</div>
                    <div style="color: #666; font-size: 0.8rem; letter-spacing: 1px; margin-top: 0.5rem;">GLOBAL RATING</div>
                </div>
                <div style="flex: 1;">
                    <div style="font-size: 1.2rem; color: #fff; font-family: var(--font-head); margin-bottom: 0.5rem;">EXCELLENT REPUTATION</div>
                    <div style="display: flex; gap: 3px; color: gold; margin-bottom: 0.5rem;">★★★★★</div>
                    <p style="color: #888; font-size: 0.9rem;">"Silent_Serpent has consistently maintained a near-perfect satisfaction rate across 50,000+ graduates since 2019."</p>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 1.5rem; font-weight: bold; color: #fff;">18,240+</div>
                    <div style="color: #666; font-size: 0.8rem;">VERIFIED REVIEWS</div>
                </div>
            </div>

            <div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
                <div class="card review-card" style="padding: 2rem;">
                    <div class="review-status" style="color: var(--primary); font-size: 0.7rem; margin-bottom: 1rem;">
                        <div>> CONNECTION: SECURE</div>
                        <div>> IDENTITY: VERIFIED</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div class="avatar-ring" style="width: 45px; height: 45px; border-radius: 50%; border: 2px solid var(--primary); padding: 2px;">
                            <img src="assets/offensive.png" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; filter: grayscale(1);">
                        </div>
                        <div>
                            <div style="color: #fff; font-weight: 600;">Dark_Shadow // Red Team</div>
                            <div style="color: gold; font-size: 0.7rem;">★★★★★</div>
                        </div>
                    </div>
                    <p style="color: #bbb; font-size: 0.9rem; line-height: 1.6;">"The best investment I've made for my career. The lab setups alone are worth the price of the academy."</p>
                </div>

                <div class="card review-card" style="padding: 2rem;">
                    <div class="review-status" style="color: var(--secondary); font-size: 0.7rem; margin-bottom: 1rem;">
                        <div>> CONNECTION: ENCRYPTED</div>
                        <div>> STATUS: AUTHORIZED</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div class="avatar-ring" style="width: 45px; height: 45px; border-radius: 50%; border: 2px solid var(--secondary); padding: 2px;">
                            <img src="assets/defensive.png" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; filter: grayscale(1);">
                        </div>
                        <div>
                            <div style="color: #fff; font-weight: 600;">NetSafe_Admin</div>
                            <div style="color: gold; font-size: 0.7rem;">★★★★★</div>
                        </div>
                    </div>
                    <p style="color: #bbb; font-size: 0.9rem; line-height: 1.6;">"Exceptional defensive training. Our SOC team performance improved by 40% after the course."</p>
                </div>

                <div class="card review-card" style="padding: 2rem;">
                    <div class="review-status" style="color: #f0f; font-size: 0.7rem; margin-bottom: 1rem;">
                        <div>> CLEARANCE: LEVEL 5</div>
                        <div>> ORIGIN: UNKNOWN</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div class="avatar-ring" style="width: 45px; height: 45px; border-radius: 50%; border: 2px solid #f0f; padding: 2px;">
                            <img src="assets/osint.png" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; filter: grayscale(1);">
                        </div>
                        <div>
                            <div style="color: #fff; font-weight: 600;">Null_PointerX</div>
                            <div style="color: gold; font-size: 0.7rem;">★★★★★</div>
                        </div>
                    </div>
                    <p style="color: #bbb; font-size: 0.9rem; line-height: 1.6;">"The OSINT module is frighteningly good. These methodologies aren't taught in university."</p>
                </div>

                <div class="card review-card" style="padding: 2rem;">
                    <div class="review-status" style="color: var(--primary); font-size: 0.7rem; margin-bottom: 1rem;">
                        <div>> BASE: COLOMBO OPS</div>
                        <div>> ROLE: TRAINEE</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div class="avatar-ring" style="width: 45px; height: 45px; border-radius: 50%; border: 2px solid var(--primary); padding: 2px;">
                            <img src="assets/academy.png" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; filter: grayscale(1);">
                        </div>
                        <div>
                            <div style="color: #fff; font-weight: 600;">Kasun // SL_Cyber</div>
                            <div style="color: gold; font-size: 0.7rem;">★★★★★</div>
                        </div>
                    </div>
                    <p style="color: #bbb; font-size: 0.9rem; line-height: 1.6;">"Silent_Serpent changed my life. I went from knowing nothing to landing my first cyber security job in 6 months."</p>
                </div>

                <div class="card review-card" style="padding: 2rem;">
                    <div class="review-status" style="color: #666; font-size: 0.7rem; margin-bottom: 1rem;">
                        <div>> UPLINK: STABLE</div>
                        <div>> METHOD: CRYPTO</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div class="avatar-ring" style="width: 45px; height: 45px; border-radius: 50%; border: 2px solid #666; padding: 2px;">
                            <img src="assets/networking.png" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; filter: grayscale(1);">
                        </div>
                        <div>
                            <div style="color: #fff; font-weight: 600;">GhostInTheWire</div>
                            <div style="color: gold; font-size: 0.7rem;">★★★★★</div>
                        </div>
                    </div>
                    <p style="color: #bbb; font-size: 0.9rem; line-height: 1.6;">"Untraceable payments, elite knowledge. This is exactly what the community needed."</p>
                </div>

                <div class="card review-card" style="padding: 2rem;">
                    <div class="review-status" style="color: var(--primary); font-size: 0.7rem; margin-bottom: 1rem;">
                        <div>> VERIFIED OPERATOR</div>
                        <div>> RANK: ELITE</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
                        <div class="avatar-ring" style="width:45px; height:45px;">
                            <img src="assets/offensive.png" alt="" style="width:100%; height:100%; object-fit:cover; filter:grayscale(1);">
                        </div>
                        <div>
                            <div style="color:#fff; font-weight:600;">X_Viper_X</div>
                            <div style="color:gold; font-size:0.7rem;">★★★★★</div>
                        </div>
                    </div>
                    <p style="color:#bbb; font-size:0.9rem; line-height:1.6;">"The exploitation guides are updated daily with the latest CVEs. Simply unmatched quality."</p>
                </div>
            </div>
        </div>
    `,
};

// Detailed Articles Data
const articleData = {
    net_basics: {
        title: "Networking Basics: The Foundation",
        img: "assets/networking.png",
        content: `
                <h3>Understanding the TCP/IP Stack</h3>
                <p>To hack a network, you must first understand how it talks. The TCP/IP model separates communication into layers.</p>
                <ul>
                    <li><strong>Application Layer:</strong> HTTP, FTP, SSH.</li>
                    <li><strong>Transport Layer:</strong> TCP (Reliable), UDP (Fast).</li>
                    <li><strong>Network Layer:</strong> IP Addressing (IPv4/IPv6).</li>
                </ul>
                <br>
                    <h3>Subnetting</h3>
                    <p>Breaking down networks into smaller subnets for security and efficiency. A crucial skill for setting up your lab.</p>
                    `
    },
    lab_setup: {
        title: "Building Your Helper Lab",
        img: "assets/networking.png",
        content: `
                    <h3>Hardware Requirements</h3>
                    <p>Minimum: 16GB RAM, 500GB SSD. Recommended: 32GB RAM for multiple VMs.</p>
                    <h3>Software</h3>
                    <p>1. <strong>Hypervisor:</strong> VirtualBox (Free) or VMware Workstation.<br>
                        2. <strong>Attacker VM:</strong> Kali Linux or Parrot OS.<br>
                            3. <strong>Victim VM:</strong> Metasploitable 2/3, Windows 10 (Unpatched).</p>
                        `
    },
    ethical_hack: {
        title: "Ethical Hacking Methodologies",
        img: "assets/offensive.png",
        content: `
                        <h3>The 5 Phases of Hacking</h3>
                        <ol>
                            <li><strong>Reconnaissance:</strong> Passive & Active info gathering.</li>
                            <li><strong>Scanning:</strong> Nmap, Nikto.</li>
                            <li><strong>Gaining Access:</strong> Exploitation, Metasploit.</li>
                            <li><strong>Maintaining Access:</strong> Backdoors, Rootkits.</li>
                            <li><strong>Clearing Tracks:</strong> Deleting logs.</li>
                        </ol>
                        `
    },
    bug_bounty: {
        title: "Bug Bounty Hunting Guide",
        img: "assets/offensive.png",
        content: `
                        <h3>Getting Started</h3>
                        <p>Don't hack random sites. Sign up for <strong>HackerOne</strong>, <strong>Bugcrowd</strong>, or <strong>Integrity</strong>.</p>
                        <h3>Top Vulnerabilities to Look For (OWASP Top 10)</h3>
                        <ul>
                            <li>Broken Access Control (IDOR)</li>
                            <li>Cryptographic Failures</li>
                            <li>Injection (SQLi, XSS)</li>
                            <li>Insecure Design</li>
                        </ul>
                        `
    },
    osint_tools: {
        title: "OSINT: The Art of Intelligence",
        img: "assets/osint.png",
        content: `
                        <h3>Google Dorks</h3>
                        <p>Using advanced search operators to find sensitive files.</p>
                        <code>site:github.com "password"</code><br><br>
                            <h3>Shodan.io</h3>
                            <p>The search engine for connected devices. Find webcams, servers, and SCADA systems.</p>
                            `
    },
    pivoting: {
        title: "Pivoting & Port Redirection",
        img: "assets/networking.png",
        content: `<h3>Tunnelling Through the Perimeter</h3><p>Once you compromise one machine, you use it as a jump-host to reach internal segments.</p><ul><li><strong>SSH Tunneling:</strong> Port forwarding using secure shells.</li><li><strong>Chisel:</strong> A fast TCP/UDP tunnel over HTTP.</li><li><strong>Proxychains:</strong> Routing your tools through a SOCKS proxy.</li></ul>`
    },
    ad_networks: {
        title: "Active Directory Lab Setup",
        img: "assets/networking.png",
        content: `<h3>Building the Windows Forest</h3><p>Mastering AD is essential for corporate pentesting.</p><ul><li><strong>DC Setup:</strong> Installing Windows Server 2022 and AD DS.</li><li><strong>User Sim:</strong> Using Bloodhound scripts to simulate realistic ACLs.</li><li><strong>GPO Security:</strong> Understanding how Group Policies apply settings.</li></ul>`
    },
    exploit_dev: {
        title: "Exploit Development (Buffer Overflows)",
        img: "assets/offensive.png",
        content: `<h3>Controlled Memory Corruption</h3><p>Learning how to overwrite the EIP/RIP register to control execution flow.</p><ul><li><strong>Fuzzing:</strong> Sending large buffers to find crashes.</li><li><strong>Offset Discovery:</strong> Pattern create and offset.</li><li><strong>Bad Characters:</strong> Filtering chars that break shellcode.</li></ul>`
    },
    social_eng: {
        title: "Social Engineering: The Human Hack",
        img: "assets/offensive.png",
        content: `<h3>Manipulating the Operator</h3><p>The most vulnerable component is the human behind the screen.</p><ul><li><strong>Phishing:</strong> Crafting the perfect lure.</li><li><strong>Pretexting:</strong> Building a credible persona.</li><li><strong>Baiting:</strong> Leaving malicious USBs in parking lots.</li></ul>`
    },
    threat_hunting: {
        title: "Threat Hunting (Blue Team Pro)",
        img: "assets/defensive.png",
        content: `<h3>Proactive Defense</h3><p>Don't wait for alerts. Go find the indicators of compromise (IoCs).</p><ul><li><strong>ELK Stack:</strong> Aggregating logs for analysis.</li><li><strong>Sigma Rules:</strong> Generic detection signatures.</li><li><strong>TTP Mapping:</strong> Aligning with MITRE ATT&CK.</li></ul>`
    },
    digital_forensics: {
        title: "Digital Forensics & Incident Response",
        img: "assets/defensive.png",
        content: `<h3>Reconstructing the Crime Scene</h3><p>Analyzing artifacts to determine what happened during a breach.</p><ul><li><strong>Memory Analysis:</strong> Using Volatility to find hidden processes.</li><li><strong>Timeline Analysis:</strong> Matching log timestamps.</li><li><strong>Disk Imaging:</strong> Creating forensic copies of evidence.</li></ul>`
    },

    // Add generic fallback for others
    default: {
        title: "Access Restricted",
        content: "<p>Content is currently being uploaded to the secure server. Check back later.</p>"
    }
};

let homeContentHTML = '';
let termOpen = false;

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        homeContentHTML = mainContent.innerHTML;
    }
    initMatrixEffect();
    initNavigation();
    initTerminal();
    lucide.createIcons();

    // Keyboard shortcut for terminal
    document.addEventListener('keydown', (e) => {
        if (e.key === '`' || (e.ctrlKey && e.key === '`')) {
            toggleTerminal();
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Window resize handler
    window.addEventListener('resize', () => {
        if (document.getElementById('threat-map')) {
            initCanvasThreatMap();
        }
    });

    // Hero Slider Logic
    let currentSlide = 0;
    setInterval(() => {
        const slides = document.querySelectorAll('.hero-slider .slide');
        if (slides.length === 0) return;

        // Ensure index is within bounds if DOM changed
        if (currentSlide >= slides.length) currentSlide = 0;

        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000); // Change image every 5 seconds

    // Threat map loop if on dashboard
    setInterval(() => {
        if (document.getElementById('threat-map')) {
            drawThreatMap();
        }
    }, 1000); // Trigger visual updates
});

function initNavigation() {
    const links = document.querySelectorAll('.nav-links a, .cta-btn, .primary-btn, .secondary-btn');
    links.forEach(link => {
        // Skip links that might be external or javascript void
        link.addEventListener('click', (e) => {
            // Handle terminal toggle explicitly if class is secondary-btn and text contains TERMINAL?
            // Actually initTerminal handles the button click if we attach it, but here we use onclick in HTML.
            // We just need to handle nav links.
            const target = link.dataset.target || link.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];

            // Special case: don't navigate if it's just a toggle function call in onclick
            if (link.getAttribute('onclick') && link.getAttribute('onclick').includes('toggleTerminal')) return;
            if (link.getAttribute('onclick') && link.getAttribute('onclick').includes('checkLogin')) return;

            if (target) {
                e.preventDefault();
                navigate(target);
                // Close mobile menu on click
                const navLinks = document.querySelector('.nav-links');
                if (navLinks) navLinks.classList.remove('active');
            }
        });
    });
}

function navigate(targetId) {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    // Update Active Nav
    document.querySelectorAll('.nav-links a').forEach(l => {
        l.classList.remove('active');
        if (l.dataset.target === targetId) l.classList.add('active');
    });

    mainContent.style.opacity = 0;

    setTimeout(() => {
        window.scrollTo(0, 0);
        if (targetId === 'home') {
            mainContent.innerHTML = homeContentHTML;
        } else if (contentData[targetId]) {
            mainContent.innerHTML = contentData[targetId];

            // Immediate news load
            if (targetId === 'news' && typeof refreshNewsFeed === 'function') {
                refreshNewsFeed();
            }
        } else {
            mainContent.innerHTML = `<div class="inner-page"><h2>404: SECTOR NOT FOUND</h2></div>`;
        }
        mainContent.style.opacity = 1;
        lucide.createIcons();
    }, 200);
}

function loadArticle(articleId) {
    const mainContent = document.getElementById('main-content');
    const data = articleData[articleId] || articleData['default'];

    mainContent.style.opacity = 0;

    setTimeout(() => {
        mainContent.innerHTML = `
            <div class="inner-page article-view">
                <button class="back-btn" onclick="history.back() // crude back, better to re-nav"><i data-lucide="arrow-left"></i> RETURN TO BASE</button>
                <div class="row">
                     ${data.img ? `<img src="${data.img}" class="hero-img" alt="Hero">` : ''}
                </div>
                <h1 style="color:white; font-family:var(--font-head); font-size:2.5rem; margin-bottom:1rem">${data.title}</h1>
                <div style="font-size: 1.1rem; line-height:1.7; color:#bbb">
                    ${data.content}
                </div>
                
                <div style="margin-top: 3rem; padding: 2rem; background: #111; border-left: 4px solid var(--primary);">
                    <h4 style="color: var(--primary)">AUTHOR'S NOTE:</h4>
                    <p>Always perform these actions in a controlled environment. Unauthorized access is illegal.</p>
                </div>
            </div>
        `;

        // Fix back button
        mainContent.querySelector('.back-btn').onclick = () => {
            let category = 'home';
            if (['net_basics', 'lab_setup', 'pivoting', 'ad_networks'].includes(articleId)) category = 'networking';
            if (['ethical_hack', 'bug_bounty', 'exploit_dev', 'social_eng'].includes(articleId)) category = 'offensive';
            if (['blue_team', 'sec_news', 'threat_hunting', 'digital_forensics'].includes(articleId)) category = 'defensive';
            if (['osint_tools'].includes(articleId)) category = 'intel';
            if (['ctf_writeups', 'cheat_sheets'].includes(articleId)) category = 'library';
            if (['roadmap'].includes(articleId)) category = 'career';
            navigate(category);
        };

        mainContent.style.opacity = 1;
        lucide.createIcons();
    }, 200);
}

// Keep Matrix Effect
function initMatrixEffect() {
    const canvas = document.getElementById('matrix-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const rainDrops = [];
    for (let x = 0; x < columns; x++) rainDrops[x] = 1;

    const draw = () => {
        ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#1a331a';
        ctx.font = fontSize + 'px monospace';
        for (let i = 0; i < rainDrops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) rainDrops[i] = 0;
            rainDrops[i]++;
        }
    };
    setInterval(draw, 50);
}


// --- Terminal Logic ---
function toggleTerminal() {
    const term = document.getElementById('terminal-overlay');
    const input = document.getElementById('term-input');
    termOpen = !termOpen;

    if (termOpen) {
        term.classList.add('open');
        input.focus();
    } else {
        term.classList.remove('open');
    }
}

function initTerminal() {
    const input = document.getElementById('term-input');
    const output = document.getElementById('term-output');

    if (!input) return;

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim().toLowerCase();
            input.value = '';

            printTerm(`guest@serpent:~$ ${cmd}`);
            processCommand(cmd);
        }
    });

    function printTerm(text) {
        const line = document.createElement('div');
        line.innerHTML = text;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }

    function processCommand(cmd) {
        const responses = {
            'help': 'Available commands: help, clear, whoami, scan, ls, cat, status, ssh, nmap, login, date, hack, exit',
            'whoami': 'guest_operator_71',
            'clear': () => output.innerHTML = '',
            'date': new Date().toString(),
            'ls': 'drwxr-xr-x  bin <br> -rw-r--r--  readme.txt <br> -rw-r--r--  mission_brief.pdf <br> drwxr-xr-x  tools',
            'cat readme.txt': 'SILENT_SERPENT V3.0.0 <br> Status: ALPHA <br> Location: Colombo, SL <br> Welcome to the command center.',
            'cat mission_brief.pdf': 'ACCESS DENIED: Resource encrypted with AES-256. Private key required.',
            'cat': 'Usage: cat [filename]',
            'status': 'CPU: 14% <br> RAM: 4.2GB / 16GB <br> PERSISTENCE: STABLE <br> UPLINK: ENCRYPTED',
            'ssh': 'Usage: ssh [user]@[host]',
            'ssh admin@serpent.com': 'Permission denied (publickey).',
            'nmap': 'Nmap 7.92 scan report for localhost (127.0.0.1) <br> PORT     STATE SERVICE <br> 22/tcp   open  ssh <br> 80/tcp   open  http <br> 443/tcp  open  https <br> 1337/tcp open  leethack',
            'sudo': 'Nice try. This incident will be reported.',
            'exit': () => toggleTerminal(),
            'matrix': 'Wake up, Neo... The Matrix has you...',
            'login': 'Use the GUI login button at top right.',
            'scan': 'Scanning local subnet... <br> [>] 192.168.1.1 (Gateway) - UP <br> [>] 192.168.1.15 (Target_Alpha) - VULNERABLE (CVE-2023-XXXX) <br> [>] 192.168.1.22 (DB_Server) - UP',
            'hack': 'Initiating brute force attack on Target_Alpha... <br> [..........] 10% <br> [ERROR] Firewall detected malicious activity. Connection dropped.',
            'root': 'Access Granted. Password found in source code.',
            'toor': 'Password Accepted. Try "login" with these creds.'
        };

        if (responses[cmd]) {
            if (typeof responses[cmd] === 'function') responses[cmd]();
            else printTerm(responses[cmd]);
        } else if (cmd !== '') {
            printTerm(`Command not found: ${cmd}`);
        }
    }
}

// --- Dashboard & Threat Map ---
function checkLogin() {
    // Hardcoded simple auth
    const user = prompt("ENTER USERNAME:");
    if (user === "root") {
        const pass = prompt("ENTER PASSWORD:");
        if (pass === "toor") {
            alert("ACCESS GRANTED. WELCOME ADMIN.");
            navigate('dashboard');
            setTimeout(initCanvasThreatMap, 500); // Wait for DOM
        } else {
            alert("ACCESS DENIED.");
        }
    } else {
        alert("USER NOT FOUND.");
    }
}

function initCanvasThreatMap() {
    const canvas = document.getElementById('threat-map');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    window.threatCtx = ctx;
    window.threatCanvas = canvas;
}

function drawThreatMap() {
    if (!window.threatCtx) return;
    const ctx = window.threatCtx;
    const w = window.threatCanvas.width;
    const h = window.threatCanvas.height;

    // Fade effect
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 0, w, h);

    // Random arc
    ctx.beginPath();
    const x1 = Math.random() * w;
    const y1 = Math.random() * h;
    const x2 = Math.random() * w;
    const y2 = Math.random() * h;

    const grad = ctx.createLinearGradient(x1, y1, x2, y2);
    grad.addColorStop(0, '#0f0');
    grad.addColorStop(1, 'transparent');

    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(w / 2, h / 2, x2, y2);
    ctx.stroke();

    // Impact circle
    ctx.beginPath();
    ctx.arc(x2, y2, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#f00';
    ctx.fill();

    // Grid overlay (static-ish)
    ctx.fillStyle = 'rgba(0, 50, 0, 0.3)';
    for (let i = 0; i < w; i += 50) ctx.fillRect(i, 0, 1, h);
    for (let i = 0; i < h; i += 50) ctx.fillRect(0, i, w, 1);
}


