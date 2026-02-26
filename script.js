// Smooth scroll with offset fix
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        const offset = 100; // adjust if needed

        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});



// Fade Starts


console.log("JS is running");

// Select elements
const animatedElements = document.querySelectorAll(
    ".project-card, .skills-category, .contact-box, .resume-card, .hero-content, .cert-card"
);

// Add fade-in class initially
animatedElements.forEach(el => {
    el.classList.add("fade-in");
});

// Create observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });
}, {
    threshold: 0.1
});

// Observe elements
animatedElements.forEach(el => {
    observer.observe(el);
});

// 👇 Important fix: if element already visible on load, show it
window.addEventListener("load", () => {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add("show");
        }
    });
});


// --------------------
// FMCG Revenue Trend
// --------------------
const revenueTrendCtx = document.getElementById('revenueTrend');

if (revenueTrendCtx) {
    new Chart(revenueTrendCtx, {
        type: 'line',
        data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
                label: 'Monthly Revenue',
                data: [120000,140000,135000,150000,160000,170000,165000,180000,190000,200000,210000,220000],
                borderColor: '#1f3c88',
                backgroundColor: 'rgba(31,60,136,0.1)',
                fill: true,
                tension: 0.3,
                pointRadius: 5,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                tooltip: {
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#1f3c88',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 10
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return '₹ ' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// --------------------
// Revenue by Channel
// --------------------
const channelCtx = document.getElementById('channelRevenue');
if (channelCtx) {
    new Chart(channelCtx, {
        type: 'bar',
        data: {
            labels: ['Retail','Wholesale','Online'],
            datasets: [{
                label: 'Revenue',
                data: [450000, 300000, 250000],
                backgroundColor: ['#1f3c88','#3f72af','#112d4e']
            }]
        }
    });
}

// --------------------
// Promotion Impact
// --------------------
const promoCtx = document.getElementById('promotionImpact');
if (promoCtx) {
    new Chart(promoCtx, {
        type: 'bar',
        data: {
            labels: ['No Promotion','Promotion'],
            datasets: [{
                label: 'Total Revenue',
                data: [800000, 250000],
                backgroundColor: ['#888','#1f3c88']
            }]
        }
    });
}