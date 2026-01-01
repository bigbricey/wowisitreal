/**
 * LiveCounter - Real-time counting animation
 * Creates the mesmerizing "ticking up" effect
 */
class LiveCounter {
    constructor(elementId, baseValue, ratePerSecond, options = {}) {
        this.element = document.getElementById(elementId);
        this.baseValue = baseValue;
        this.ratePerSecond = ratePerSecond;
        this.startTime = null;
        this.animationFrame = null;
        this.mode = 'session'; // 'session' = since arrived, 'rate' = per second
        
        // Options
        this.prefix = options.prefix || '';
        this.suffix = options.suffix || '';
        this.decimals = options.decimals || 0;
        this.format = options.format !== false; // Add commas by default
        
        // For "since you arrived" mode
        this.sessionStart = Date.now();
    }
    
    formatNumber(num) {
        if (!this.format) return num.toFixed(this.decimals);
        
        const parts = num.toFixed(this.decimals).split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }
    
    update() {
        const now = Date.now();
        const elapsed = (now - this.sessionStart) / 1000; // seconds since page load
        
        let currentValue;
        if (this.mode === 'session') {
            // "Since you arrived" mode - starts from 0
            currentValue = this.baseValue + (elapsed * this.ratePerSecond);
        } else {
            // Rate mode - just shows the rate
            currentValue = this.ratePerSecond;
        }
        
        const formatted = this.prefix + this.formatNumber(currentValue) + this.suffix;
        this.element.textContent = formatted;
        
        this.animationFrame = requestAnimationFrame(() => this.update());
    }
    
    start() {
        this.sessionStart = Date.now();
        this.update();
    }
    
    stop() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
    }
    
    setMode(mode) {
        this.mode = mode;
        this.sessionStart = Date.now(); // Reset timer when switching modes
    }
    
    toggleMode() {
        this.mode = this.mode === 'session' ? 'rate' : 'session';
        this.sessionStart = Date.now();
    }
}

/**
 * Counter configurations for all 55 stats
 */
const COUNTER_CONFIGS = {
    // Money
    'nvidia-revenue': { rate: 4140, prefix: '$', suffix: '', unit: 'revenue' },
    'elon-wealth': { rate: 6800, prefix: '$', suffix: '', unit: 'wealth growth' },
    'amazon-revenue': { rate: 19800, prefix: '$', suffix: '', unit: 'revenue' },
    'visa-transactions': { rate: 470000, prefix: '$', suffix: '', unit: 'transactions' },
    'taylor-swift': { rate: 16, prefix: '$', suffix: '', unit: 'earnings' },
    'crypto-volume': { rate: 3200000, prefix: '$', suffix: '', unit: 'trading volume' },
    'ronaldo-income': { rate: 8.80, prefix: '$', suffix: '', decimals: 2, unit: 'income' },
    'lottery-spending': { rate: 3500, prefix: '$', suffix: '', unit: 'lottery tickets' },
    'iss-cost': { rate: 96, prefix: '$', suffix: '', unit: 'to keep ISS running' },
    'sports-betting': { rate: 4100, prefix: '$', suffix: '', unit: 'wagered' },
    
    // Digital
    'whatsapp-messages': { rate: 1600000, prefix: '', suffix: '', unit: 'messages' },
    'google-searches': { rate: 105000, prefix: '', suffix: '', unit: 'searches' },
    'chatgpt-prompts': { rate: 29000, prefix: '', suffix: '', unit: 'prompts' },
    'netflix-hours': { rate: 6000, prefix: '', suffix: ' hrs', unit: 'watched' },
    'youtube-uploaded': { rate: 8.3, prefix: '', suffix: ' hrs', decimals: 1, unit: 'uploaded' },
    'emails-sent': { rate: 4300000, prefix: '', suffix: '', unit: 'emails' },
    'tinder-swipes': { rate: 23000, prefix: '', suffix: '', unit: 'swipes' },
    'spotify-streams': { rate: 46000, prefix: '', suffix: '', unit: 'streams' },
    'roblox-hours': { rate: 2600, prefix: '', suffix: ' hrs', unit: 'played' },
    'smartphones-sold': { rate: 40, prefix: '', suffix: '', unit: 'phones' },
    
    // Food
    'coffee-cups': { rate: 26000, prefix: '', suffix: '', unit: 'cups' },
    'mcdonalds-burgers': { rate: 75, prefix: '', suffix: '', unit: 'burgers' },
    'coca-cola': { rate: 22000, prefix: '', suffix: '', unit: 'drinks' },
    'lego-bricks': { rate: 1140, prefix: '', suffix: '', unit: 'bricks' },
    'pizza-slices': { rate: 350, prefix: '', suffix: '', unit: 'slices' },
    'nutella-jars': { rate: 0.4, prefix: '', suffix: '', decimals: 1, unit: 'jars' },
    'bananas-eaten': { rate: 3100, prefix: '', suffix: '', unit: 'bananas' },
    'hershey-kisses': { rate: 1100, prefix: '', suffix: '', unit: 'kisses' },
    'tacos-eaten': { rate: 140, prefix: '', suffix: '', unit: 'tacos' },
    'plastic-bottles': { rate: 20000, prefix: '', suffix: '', unit: 'bottles' },
    
    // Cosmic
    'voyager-distance': { rate: 17, prefix: '', suffix: ' km', unit: 'traveled' },
    'stars-born': { rate: 4800, prefix: '', suffix: '', unit: 'stars' },
    'earth-orbit': { rate: 30, prefix: '', suffix: ' km', unit: 'traveled' },
    'sun-mass': { rate: 600000000, prefix: '', suffix: ' tons', unit: 'burnt' },
    'speed-of-light': { rate: 299792, prefix: '', suffix: ' km', unit: 'traveled' },
    'lightning-strikes': { rate: 45, prefix: '', suffix: '', unit: 'strikes' },
    'raindrops': { rate: 380000000000000, prefix: '', suffix: '', unit: 'drops' },
    'trees-planted': { rate: 60, prefix: '', suffix: '', unit: 'trees' },
    'niagara-water': { rate: 600000, prefix: '', suffix: ' gal', unit: 'water' },
    'iss-speed': { rate: 7.66, prefix: '', suffix: ' km', decimals: 2, unit: 'traveled' },
    
    // Human
    'blood-cells': { rate: 2400000, prefix: '', suffix: '', unit: 'cells created by YOU' },
    'heartbeats': { rate: 10600000000, prefix: '', suffix: '', unit: 'heartbeats' },
    'skin-cells': { rate: 4800000000000, prefix: '', suffix: '', unit: 'cells shed' },
    'human-blinks': { rate: 1600000000, prefix: '', suffix: '', unit: 'blinks' },
    'babies-born': { rate: 4.3, prefix: '', suffix: '', decimals: 1, unit: 'babies' },
    'ants-born': { rate: 6000000, prefix: '', suffix: '', unit: 'ants' },
    'steps-walked': { rate: 380000000, prefix: '', suffix: '', unit: 'steps' },
    
    // Quirky
    'weddings': { rate: 1.5, prefix: '', suffix: '', decimals: 1, unit: 'weddings' },
    'planes-takeoff': { rate: 1.2, prefix: '', suffix: '', decimals: 1, unit: 'planes' },
    'elevator-rides': { rate: 35000, prefix: '', suffix: '', unit: 'rides' },
    'golf-balls-lost': { rate: 10, prefix: '', suffix: '', unit: 'balls' },
    'wikipedia-edits': { rate: 2, prefix: '', suffix: '', unit: 'edits' },
    'pencils-made': { rate: 450, prefix: '', suffix: '', unit: 'pencils' },
    'shoes-sold': { rate: 760, prefix: '', suffix: '', unit: 'pairs' },
    'year-countdown': { rate: -1, prefix: '', suffix: '', unit: 'seconds' }
};

/**
 * Initialize counter from config
 */
function initCounter(elementId, configKey) {
    const config = COUNTER_CONFIGS[configKey];
    if (!config) {
        console.error(`Counter config not found: ${configKey}`);
        return null;
    }
    
    return new LiveCounter(elementId, 0, config.rate, {
        prefix: config.prefix,
        suffix: config.suffix,
        decimals: config.decimals || 0
    });
}

// Export for use in pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LiveCounter, COUNTER_CONFIGS, initCounter };
}
