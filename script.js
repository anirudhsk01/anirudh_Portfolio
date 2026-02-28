// Smooth scroll with offset fix (safe version)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        // Only apply smooth scroll if target exists
        if (target) {
            e.preventDefault();

            const offset = 100; // adjust if needed

            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = target.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
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


// ==============================
// FMCG Revenue Trend (Line Chart)
// ==============================
const revenueCanvas = document.getElementById("revenueTrend");

if (revenueCanvas) {
    new Chart(revenueCanvas, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Monthly Revenue",
                data: [120000, 140000, 135000, 150000, 160000, 170000, 165000, 180000, 190000, 200000, 210000, 220000],
                borderColor: "#0284c7",
                backgroundColor: "rgba(2,132,199,0.1)",
                fill: true,
                tension: 0.3,
                pointRadius: 4,
                pointHoverRadius: 6,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: "index",
                intersect: false
            },
            plugins: {
                tooltip: {
                    backgroundColor: "#1f3c88",
                    titleColor: "#fff",
                    bodyColor: "#fff",
                    padding: 10
                },
                legend: {
                    display: true,
                    labels: {
                        color: "#94a3b8"
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                },
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: '#94a3b8',
                        callback: (value) => "₹ " + value.toLocaleString()
                    },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            }
        }
    });
}


// ==============================
// Revenue by Channel (Bar Chart)
// ==============================
const channelCtx = document.getElementById("channelRevenue");

if (channelCtx) {
    new Chart(channelCtx, {
        type: "bar",
        data: {
            labels: ["Retail", "Wholesale", "Online"],
            datasets: [{
                label: "Revenue",
                data: [450000, 300000, 250000],
                backgroundColor: ["#0284c7", "#14b8a6", "#38bdf8"],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: { color: "#94a3b8" }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#94a3b8' },
                    grid: { display: false }
                },
                y: {
                    ticks: { color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            }
        }
    });
}


// ==============================
// Promotion Impact (Bar Chart)
// ==============================
const promoCtx = document.getElementById("promotionImpact");

if (promoCtx) {
    new Chart(promoCtx, {
        type: "bar",
        data: {
            labels: ["No Promotion", "Promotion"],
            datasets: [{
                label: "Total Revenue",
                data: [800000, 250000],
                backgroundColor: ["#94a3b8", "#0284c7"],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: { color: "#94a3b8" }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#94a3b8' },
                    grid: { display: false }
                },
                y: {
                    ticks: { color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            }
        }
    });
}