
document.addEventListener("DOMContentLoaded", () => {
    // === WEB3 PHYSICAL ELEMENTS ===

    function createBlockchainNodes() {
        const container = document.body;
        for (let i = 0; i < 12; i++) {
            const node = document.createElement("div");
            node.className = "blockchain-node";
            node.style.left = Math.random() * 100 + "%";
            node.style.top = Math.random() * 100 + "%";
            node.style.animationDelay = Math.random() * 6 + "s";
            node.style.animationDuration = 4 + Math.random() * 3 + "s";
            container.appendChild(node);
        }
    }

    function createFloatingSymbols() {
        const symbols = ["◆", "⬡", "◇"];
        const container = document.body;
        for (let i = 0; i < 8; i++) {
            const symbol = document.createElement("div");
            symbol.className = "floating-symbol";
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            symbol.style.left = Math.random() * 100 + "%";
            symbol.style.top = Math.random() * 100 + "%";
            symbol.style.animationDelay = Math.random() * 8 + "s";
            symbol.style.color = Math.random() > 0.5 ? "#627eea" : "#00f5ff";
            container.appendChild(symbol);
        }
    }

    function createHexagonGrid() {
        const grid = document.getElementById("hexagon-grid");
        const hexSize = 60;
        for (let x = 0; x < window.innerWidth; x += hexSize) {
            for (let y = 0; y < window.innerHeight; y += hexSize) {
                const hex = document.createElement("div");
                hex.className = "hexagon";
                hex.style.width = hexSize + "px";
                hex.style.height = hexSize + "px";
                hex.style.left = x + "px";
                hex.style.top = y + "px";
                hex.style.animationDelay = Math.random() * 4 + "s";
                grid.appendChild(hex);
            }
        }
    }

    function createParticles() {
        const container = document.body;
        setInterval(() => {
            if (Math.random() > 0.7) {
                const particle = document.createElement("div");
                particle.className = "particle";
                particle.style.left = Math.random() * window.innerWidth + "px";
                particle.style.bottom = "-10px";
                particle.style.setProperty("--tx", (Math.random() - 0.5) * 200 + "px");
                particle.style.animationDuration = 5 + Math.random() * 5 + "s";
                container.appendChild(particle);

                setTimeout(() => particle.remove(), 10000);
            }
        }, 200);
    }

    function createConnectingLines() {
        const svg = document.querySelector("svg");
        setInterval(() => {
            if (Math.random() > 0.8) {
                const x1 = Math.random() * window.innerWidth;
                const y1 = Math.random() * window.innerHeight;
                const x2 = x1 + (Math.random() - 0.5) * 300;
                const y2 = y1 + (Math.random() - 0.5) * 300;

                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.setAttribute("x1", x1);
                line.setAttribute("y1", y1);
                line.setAttribute("x2", x2);
                line.setAttribute("y2", y2);
                line.setAttribute("class", "tech-line");
                svg.appendChild(line);

                setTimeout(() => line.remove(), 4000);
            }
        }, 300);
    }

    createBlockchainNodes();
    createFloatingSymbols();
    createHexagonGrid();
    createParticles();
    createConnectingLines();



    const resumeModal = document.getElementById("resume-modal");
    const resumeConfirmBtn = document.getElementById("resume-confirm-btn");
    const resumeCancelBtn = document.getElementById("resume-cancel-btn");
    const resumeDownloadBtn = document.getElementById("resume-download-btn");
    const funnyMessages = [
        "> Initializing resume download sequence...<br>> Are you SURE you want to see how awesome I am?<br>> This might change your hiring decisions! 😎",
        "> WARNING: Resume contains extreme awesomeness!<br>> Side effects may include: Instant Hiring<br>> Proceed at your own risk! ⚡",
        "> ALERT: You are about to download excellence!<br>> This file is too powerful for average recruiters<br>> Are you ready? 🚀",
        "> Resume.pdf is loading...<br>> Calibrating awesome-o-meter...<br>> Buckle up! 🎯"
    ];

    function openResumeModal() {
        resumeModal.classList.add("active");
        const randomMsg = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        document.getElementById("resume-message").innerHTML = randomMsg;
    }

    function closeResumeModal() {
        resumeModal.classList.remove("active");
    }

    function downloadResume() {
        closeResumeModal();
        const link = document.createElement("a");
        link.href = "resume.pdf";
        link.download = "Apurve_Karanwal_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    resumeDownloadBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openResumeModal();
    });

    resumeConfirmBtn.addEventListener("click", downloadResume);
    resumeCancelBtn.addEventListener("click", closeResumeModal);
    resumeModal.addEventListener("click", (e) => {
        if (e.target === resumeModal) {
            closeResumeModal();
        }
    });



    const textToType =
        "> **[STATUS: ONLINE]** Backend & DevOps-Focused Engineer. Building reliable APIs, job systems, and production-minded software.";
    const typeWriterElement = document.getElementById("hero-typewriter");

    function startTypewriter() {
        if (typeWriterElement) {
            typeWriterElement.textContent = "";
            let i = 0;
            function typeWriter() {
                if (i < textToType.length) {
                    typeWriterElement.textContent += textToType.charAt(i);
                    i++;
                    setTimeout(typeWriter, 35);
                }
            }
            typeWriter();
        }
    }

    const preloader = document.getElementById("preloader");
    const progressBar = document.getElementById("progress-bar");
    const loaderText = document.getElementById("loader-text");
    const loaderSubtext = document.getElementById("loader-subtext");

    let width = 0;
    const interval = setInterval(() => {
        width += Math.floor(Math.random() * 5) + 1;

        if (width > 30 && width < 50) {
            loaderSubtext.innerText = "> LOADING_ASSETS...";
        }
        if (width > 50 && width < 80) {
            loaderSubtext.innerText = "> ESTABLISHING_LINK...";
        }
        if (width > 80) {
            loaderSubtext.innerText = "> DECODING_DATA...";
        }

        if (width >= 100) {
            width = 100;
            clearInterval(interval);
            loaderText.innerText = "ACCESS GRANTED";
            loaderSubtext.innerText = "> WELCOME_USER";
            progressBar.style.backgroundColor = "var(--color-accent-secondary)";

            setTimeout(() => {
                preloader.classList.add("fade-out");
                document.body.style.overflow = "";
                setTimeout(startTypewriter, 500);
            }, 800);
        }
        progressBar.style.width = width + "%";
    }, 30);

    function updateClock() {
        const now = new Date();
        const timeElement = document.getElementById("live-time");
        const dateElement = document.getElementById("live-date");

        if (timeElement) {
            timeElement.textContent = now.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
        }
        if (dateElement) {
            dateElement.textContent = now.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit"
            });
        }
    }

    updateClock();
    setInterval(updateClock, 1000);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    entry.target.style.opacity = 1;
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    document.querySelectorAll(".animated-section").forEach((section) => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Custom Cursor - Instant 1:1 Response & Smooth Hardware-Accelerated Trail
    const customCursor = document.getElementById("custom-cursor");
    const cursorTrail = document.getElementById("cursor-trail");
    if (customCursor && cursorTrail) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let trailX = mouseX, trailY = mouseY;

        document.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Instant 1:1 lockstep position for main dot (0ms input lag)
            customCursor.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
        }, { passive: true });

        function updateCursorTrail() {
            // High-precision smooth trail lerp (0.45 for rapid response)
            trailX += (mouseX - trailX) * 0.45;
            trailY += (mouseY - trailY) * 0.45;

            cursorTrail.style.transform = `translate3d(${trailX - 16}px, ${trailY - 16}px, 0)`;

            requestAnimationFrame(updateCursorTrail);
        }
        requestAnimationFrame(updateCursorTrail);

        // High-performance event delegation for hover states
        document.body.addEventListener("mouseover", (e) => {
            if (e.target.closest("a, button, input, textarea, select, .project-card, .pixel-btn-3d, .pixel-block-3d")) {
                document.body.classList.add("cursor-hover");
            }
        }, { passive: true });

        document.body.addEventListener("mouseout", (e) => {
            if (e.target.closest("a, button, input, textarea, select, .project-card, .pixel-btn-3d, .pixel-block-3d")) {
                document.body.classList.remove("cursor-hover");
            }
        }, { passive: true });
    }

    // --- PHASE 3: ULTIMATE INTERACTIVE FEATURES ---

    // 1. Spiderweb Canvas
    const swCanvas = document.getElementById("spiderweb-canvas");
    if (swCanvas) {
        const sctx = swCanvas.getContext("2d");
        let particles = [];
        const numParticles = 60;
        const connectionDistance = 120;
        const mouseConnectionDistance = 180;

        function resizeSw() {
            swCanvas.width = window.innerWidth;
            swCanvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resizeSw);
        resizeSw();

        class Particle {
            constructor() {
                this.x = Math.random() * swCanvas.width;
                this.y = Math.random() * swCanvas.height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > swCanvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > swCanvas.height) this.vy *= -1;
            }
            draw() {
                sctx.beginPath();
                sctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
                sctx.fillStyle = "rgba(0, 245, 255, 0.5)";
                sctx.fill();
            }
        }

        for (let i = 0; i < numParticles; i++) particles.push(new Particle());

        function drawSpiderweb() {
            sctx.clearRect(0, 0, swCanvas.width, swCanvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                // Check mouse
                const dxm = mouseX - particles[i].x;
                const dym = mouseY - particles[i].y;
                const distm = Math.sqrt(dxm*dxm + dym*dym);
                if (distm < mouseConnectionDistance) {
                    sctx.beginPath();
                    sctx.moveTo(particles[i].x, particles[i].y);
                    sctx.lineTo(mouseX, mouseY);
                    sctx.strokeStyle = `rgba(252, 211, 77, ${1 - distm/mouseConnectionDistance})`;
                    sctx.lineWidth = 1.5;
                    sctx.stroke();
                }

                // Check other particles
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if (dist < connectionDistance) {
                        sctx.beginPath();
                        sctx.moveTo(particles[i].x, particles[i].y);
                        sctx.lineTo(particles[j].x, particles[j].y);
                        sctx.strokeStyle = `rgba(0, 245, 255, ${0.4 * (1 - dist/connectionDistance)})`;
                        sctx.lineWidth = 0.5;
                        sctx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawSpiderweb);
        }
        drawSpiderweb();
    }



    // 1. Cyber Skull Centerpiece
    const skull = document.getElementById("cyber-skull");
    if (skull) {
        let skullRotX = 0;
        let skullRotY = 0;
        document.addEventListener('mousemove', (event) => {
            const x = (event.clientX / window.innerWidth - 0.5) * 2;
            const y = (event.clientY / window.innerHeight - 0.5) * 2;
            skullRotX = -y * 25;
            skullRotY = x * 25;
        });
        
        function animateSkull() {
            requestAnimationFrame(animateSkull);
            skull.style.transform = `rotateX(${skullRotX}deg) rotateY(${skullRotY}deg)`;
        }
        animateSkull();
    }

    // Fetch Live GitHub Telemetry Metrics
    async function fetchLiveGitHubStats() {
        const reposEl = document.getElementById("gh-stat-repos");
        const mergedPrsEl = document.getElementById("gh-stat-merged-prs");
        const openPrsEl = document.getElementById("gh-stat-open-prs");
        const openIssuesEl = document.getElementById("gh-stat-open-issues");

        try {
            const [userRes, mergedRes, openPrRes, openIssueRes] = await Promise.all([
                fetch("https://api.github.com/users/ApurveKaranwal"),
                fetch("https://api.github.com/search/issues?q=author:ApurveKaranwal+type:pr+is:merged"),
                fetch("https://api.github.com/search/issues?q=author:ApurveKaranwal+type:pr+is:open"),
                fetch("https://api.github.com/search/issues?q=author:ApurveKaranwal+type:issue+is:open")
            ]);

            if (userRes.ok) {
                const userData = await userRes.json();
                if (reposEl && userData.public_repos !== undefined) reposEl.textContent = userData.public_repos;
            }
            if (mergedRes.ok) {
                const mergedData = await mergedRes.json();
                if (mergedPrsEl && mergedData.total_count !== undefined) mergedPrsEl.textContent = mergedData.total_count;
            }
            if (openPrRes.ok) {
                const openPrData = await openPrRes.json();
                if (openPrsEl && openPrData.total_count !== undefined) openPrsEl.textContent = openPrData.total_count;
            }
            if (openIssueRes.ok) {
                const openIssueData = await openIssueRes.json();
                if (openIssuesEl && openIssueData.total_count !== undefined) openIssuesEl.textContent = openIssueData.total_count;
            }
        } catch (e) {
            console.log("GitHub API live telemetry fallback active.", e);
        }
    }
    fetchLiveGitHubStats();
});
