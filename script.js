
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

    const codeModal = document.getElementById("code-modal");
    const codeTerminal = document.getElementById("code-terminal");
    const codeProjectName = document.getElementById("code-project-name");
    const codeCloseBtn = document.getElementById("code-close-btn");
    const codeViewBtn = document.getElementById("code-view-btn");

    const codingMessages = [
        { icon: "$", text: "npm start && open_editor" },
        { icon: "☕", text: "brewing_coffee()... ☕" },
        { icon: "💻", text: "opening_vscode()...", class: "terminal-cmd" },
        { icon: "🎵", text: "activating_lofi_beats()..." },
        { icon: "🛠️", text: "oh_no()... debugging_mode_ON!!" },
        { icon: "✓", text: "CODE_SESSION_READY! Happy Coding!", class: "terminal-success" }
    ];

    function openCodeModal(projectName, projectLink) {
        codeModal.classList.add("active");
        codeProjectName.textContent = projectName;
        codeTerminal.innerHTML = "";
        codeViewBtn.style.display = "none";
        codeViewBtn.onclick = () => window.open(projectLink, "_blank");

        let lineIndex = 0;
        const lineInterval = setInterval(() => {
            if (lineIndex < codingMessages.length) {
                const msg = codingMessages[lineIndex];
                const line = document.createElement("div");
                line.className = "terminal-line";
                const icon = document.createElement("span");
                icon.className = "terminal-icon";
                icon.textContent = msg.icon;
                const text = document.createElement("span");
                if (msg.class) {
                    text.className = msg.class;
                }
                text.textContent = msg.text;
                line.appendChild(icon);
                line.appendChild(text);
                codeTerminal.appendChild(line);
                codeTerminal.scrollTop = codeTerminal.scrollHeight;

                if (lineIndex === codingMessages.length - 1) {
                    setTimeout(() => {
                        codeViewBtn.style.display = "block";
                    }, 300);
                }
                lineIndex++;
            } else {
                clearInterval(lineInterval);
            }
        }, 400);
    }

    function closeCodeModal() {
        codeModal.classList.remove("active");
    }

    codeCloseBtn.addEventListener("click", closeCodeModal);
    codeModal.addEventListener("click", (e) => {
        if (e.target === codeModal) {
            closeCodeModal();
        }
    });

    document.querySelectorAll('.project-card a[href*="github"]').forEach((button) => {
        const projectCard = button.closest(".project-card");
        const projectTitle = projectCard.querySelector(".pixel-text");

        if (projectTitle && button.textContent.includes("VIEW")) {
            const originalLink = button.href;

            button.addEventListener("click", (e) => {
                e.preventDefault();
                const projectName = projectTitle.textContent.trim();
                openCodeModal(projectName, originalLink);
            });
        }
    });

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

    const pongModal = document.getElementById("pong-modal");
    const pongCloseBtn = document.getElementById("pong-close-btn");
    const pongGameBtn = document.getElementById("pong-game-btn");
    const canvas = document.getElementById("pong-canvas");
    const ctx = canvas.getContext("2d");
    const speedIndicator = document.getElementById("speed-indicator");

    let gameRunning = false;
    let gamePaused = false;
    let gameLoopId = null;
    const paddleHeight = 80;
    const paddleWidth = 10;
    const ballSize = 8;
    const speedNames = ["0.5x (Snail)", "1x (Normal)", "1.5x (Fast)", "2x (Very Fast)", "2.5x (Insane)"];

    const game = {
        leftPaddle: { x: 10, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight, dy: 0 },
        rightPaddle: {
            x: canvas.width - paddleWidth - 10,
            y: canvas.height / 2 - paddleHeight / 2,
            width: paddleWidth,
            height: paddleHeight,
            dy: 0
        },
        ball: { x: canvas.width / 2, y: canvas.height / 2, dx: 4, dy: 4, size: ballSize, baseSpeed: 4 },
        leftScore: 0,
        rightScore: 0,
        keys: {},
        ballSpeed: 1,
        speedLevel: 1
    };

    function drawGame() {
        ctx.fillStyle = "#142120";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = "#b8e0e0";
        ctx.setLineDash([10, 10]);
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "#fcd34d";
        ctx.fillRect(game.leftPaddle.x, game.leftPaddle.y, game.leftPaddle.width, game.leftPaddle.height);
        ctx.fillRect(game.rightPaddle.x, game.rightPaddle.y, game.rightPaddle.width, game.rightPaddle.height);

        ctx.beginPath();
        ctx.arc(game.ball.x, game.ball.y, game.ball.size, 0, Math.PI * 2);
        ctx.fillStyle = "#b8e0e0";
        ctx.fill();

        if (gamePaused) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#fcd34d";
            ctx.font = "bold 50px Arial";
            ctx.textAlign = "center";
            ctx.fillText("⏸ PAUSED", canvas.width / 2, canvas.height / 2 - 40);
            ctx.font = "16px Arial";
            ctx.fillStyle = "#b8e0e0";
            ctx.fillText("Press SPACE to resume", canvas.width / 2, canvas.height / 2 + 30);
        }
    }

    function updateGame() {
        if (!gameRunning) {
            return;
        }
        if (gamePaused) {
            drawGame();
            return;
        }

        if (game.keys.w && game.leftPaddle.y > 0) {
            game.leftPaddle.y -= 6;
        }
        if (game.keys.s && game.leftPaddle.y < canvas.height - game.leftPaddle.height) {
            game.leftPaddle.y += 6;
        }
        if (game.keys.ArrowUp && game.rightPaddle.y > 0) {
            game.rightPaddle.y -= 6;
        }
        if (game.keys.ArrowDown && game.rightPaddle.y < canvas.height - game.rightPaddle.height) {
            game.rightPaddle.y += 6;
        }

        game.ball.x += game.ball.dx * game.ballSpeed;
        game.ball.y += game.ball.dy * game.ballSpeed;

        if (game.ball.y - game.ball.size < 0) {
            game.ball.dy = Math.abs(game.ball.dy);
            game.ball.y = game.ball.size;
        }
        if (game.ball.y + game.ball.size > canvas.height) {
            game.ball.dy = -Math.abs(game.ball.dy);
            game.ball.y = canvas.height - game.ball.size;
        }

        if (
            game.ball.x - game.ball.size < game.leftPaddle.x + game.leftPaddle.width &&
            game.ball.x > game.leftPaddle.x &&
            game.ball.y > game.leftPaddle.y &&
            game.ball.y < game.leftPaddle.y + game.leftPaddle.height
        ) {
            game.ball.dx = Math.abs(game.ball.dx);
            game.ball.x = game.leftPaddle.x + game.leftPaddle.width + game.ball.size;
        }

        if (
            game.ball.x + game.ball.size > game.rightPaddle.x &&
            game.ball.x < game.rightPaddle.x + game.rightPaddle.width &&
            game.ball.y > game.rightPaddle.y &&
            game.ball.y < game.rightPaddle.y + game.rightPaddle.height
        ) {
            game.ball.dx = -Math.abs(game.ball.dx);
            game.ball.x = game.rightPaddle.x - game.ball.size;
        }

        if (game.ball.x < 0) {
            game.rightScore++;
            resetBall();
        }
        if (game.ball.x > canvas.width) {
            game.leftScore++;
            resetBall();
        }

        document.getElementById("pong-score").textContent = `SCORE: ${game.leftScore} - ${game.rightScore}`;
        drawGame();
    }

    function resetBall() {
        game.ball.x = canvas.width / 2;
        game.ball.y = canvas.height / 2;
        const angle = (Math.random() - 0.5) * 0.5;
        game.ball.dx = (Math.random() > 0.5 ? 1 : -1) * game.ball.baseSpeed;
        game.ball.dy = game.ball.dx * Math.tan(angle);
    }

    function gameLoop() {
        updateGame();
        if (gameRunning) {
            gameLoopId = requestAnimationFrame(gameLoop);
        }
    }

    function openPongGame() {
        pongModal.classList.add("active");

        // Resize canvas to fit container on small screens
        const container = document.querySelector(".pong-container");
        if (container) {
            const maxW = Math.min(700, container.clientWidth - 24);
            const ratio = maxW / 700;
            canvas.width = maxW;
            canvas.height = Math.round(400 * ratio);
            // Re-init game positions to match new dimensions
            game.leftPaddle.x = 10;
            game.leftPaddle.y = canvas.height / 2 - paddleHeight / 2;
            game.rightPaddle.x = canvas.width - paddleWidth - 10;
            game.rightPaddle.y = canvas.height / 2 - paddleHeight / 2;
        }

        gameRunning = true;
        gamePaused = false;
        game.leftScore = 0;
        game.rightScore = 0;
        game.ballSpeed = 1;
        game.speedLevel = 1;
        speedIndicator.textContent = speedNames[1];
        resetBall();
        gameLoop();
    }

    function closePongGame() {
        gameRunning = false;
        gamePaused = false;
        if (gameLoopId) {
            cancelAnimationFrame(gameLoopId);
        }
        gameLoopId = null;
        pongModal.classList.remove("active");
    }

    pongGameBtn.addEventListener("click", openPongGame);
    pongCloseBtn.addEventListener("click", closePongGame);
    pongModal.addEventListener("click", (e) => {
        if (e.target === pongModal) {
            closePongGame();
        }
    });

    // === MOBILE TOUCH CONTROLS FOR PONG ===
    const touchBtns = {
        "touch-left-up":    { key: "w",          down: true },
        "touch-left-down":  { key: "s",          down: true },
        "touch-right-up":   { key: "ArrowUp",    down: true },
        "touch-right-down": { key: "ArrowDown",  down: true },
    };
    Object.entries(touchBtns).forEach(([id, cfg]) => {
        const btn = document.getElementById(id);
        if (!btn) return;
        const press   = () => { game.keys[cfg.key] = true; };
        const release = () => { game.keys[cfg.key] = false; };
        btn.addEventListener("touchstart",  press,   { passive: true });
        btn.addEventListener("touchend",    release, { passive: true });
        btn.addEventListener("touchcancel", release, { passive: true });
        btn.addEventListener("mousedown",   press);
        btn.addEventListener("mouseup",     release);
        btn.addEventListener("mouseleave",  release);
    });

    document.addEventListener("keydown", (e) => {
        if (gameRunning && pongModal.classList.contains("active")) {
            const key = e.key.toLowerCase();
            game.keys[key] = true;
            game.keys[e.key] = true;

            if (e.code === "Space") {
                e.preventDefault();
                gamePaused = !gamePaused;
            }

            if (e.key >= "1" && e.key <= "5") {
                const speedLevel = parseInt(e.key, 10) - 1;
                game.ballSpeed = (speedLevel + 1) * 0.5;
                game.speedLevel = speedLevel;
                speedIndicator.textContent = speedNames[speedLevel];
                e.preventDefault();
            }
        }
    });

    document.addEventListener("keyup", (e) => {
        const key = e.key.toLowerCase();
        game.keys[key] = false;
        game.keys[e.key] = false;
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
    const secretCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let currentSequence = [];

    const canvas = document.getElementById("matrix-canvas");
    const ctx = canvas.getContext("2d");
    let matrixInterval;

    const secretOverrideBtn = document.getElementById("secret-override-btn");
    if (secretOverrideBtn) {
        secretOverrideBtn.addEventListener("click", () => {
            triggerMatrix();
        });
    }

    document.addEventListener("keydown", (e) => {
        currentSequence.push(e.key);
        if (currentSequence.length > secretCode.length) {
            currentSequence.shift();
        }
        if (JSON.stringify(currentSequence) === JSON.stringify(secretCode)) {
            if (typeof startBossFight === "function") {
                startBossFight();
            } else {
                triggerMatrix();
            }
            currentSequence = [];
        }
    });

    let isMatrixActive = false;
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function triggerMatrix() {
        if (isMatrixActive) return;
        isMatrixActive = true;
        initAudio();

        // 1. UI Glitch & Shake
        document.body.classList.add("ui-shake", "ui-glitch");



        // 3. Hacking Terminal Intro
        setTimeout(() => {
            document.body.classList.remove("ui-shake", "ui-glitch");
            const termOverlay = document.getElementById("hacking-terminal");
            const termContent = document.getElementById("terminal-content");
            if (termOverlay && termContent) {
                termOverlay.style.display = "flex";
                termContent.innerHTML = "";
                
                const logs = [
                    "INITIATING OVERRIDE PROTOCOL...",
                    "BYPASSING MAINFRAME FIREWALL...",
                    "DECRYPTING AES-256 KERNEL...",
                    "ACCESS GRANTED.",
                    "WAKING UP..."
                ];
                let logIdx = 0;
                
                const typeLog = () => {
                    if (logIdx < logs.length) {
                        termContent.innerHTML += "> " + logs[logIdx] + "<br>";
                        logIdx++;
                        setTimeout(typeLog, 300);
                    } else {
                        // Move to Matrix phase
                        setTimeout(() => {
                            termOverlay.style.display = "none";
                            startMatrixRain();
                        }, 500);
                    }
                };
                typeLog();
            } else {
                startMatrixRain(); // fallback
            }
        }, 1500);
    }

    function startMatrixRain() {
        if (!isMuted) {
            playSound("matrix");
        }

        canvas.style.display = "block";
        canvas.style.pointerEvents = "auto";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヲギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヲゴゾドボポオォコソトノホモヨョロ";
        const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const nums = "0123456789";
        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                
                // Interactive distance check
                const charX = i * fontSize;
                const charY = drops[i] * fontSize;
                const dx = mouseX - charX;
                const dy = mouseY - charY;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if (dist < 100) {
                    ctx.fillStyle = "#FFF";
                    // Slight scatter effect
                    ctx.fillText(text, charX + (Math.random() * 10 - 5), charY);
                } else {
                    ctx.fillStyle = "#0F0";
                    ctx.fillText(text, charX, charY);
                }

                if (charY > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        if (matrixInterval) {
            clearInterval(matrixInterval);
        }
        matrixInterval = setInterval(draw, 30);

        // Show Achievement
        const ach = document.getElementById("achievement-notification");
        if (ach) {
            ach.classList.add("show");
            setTimeout(() => {
                ach.classList.remove("show");
            }, 4000);
        }

        canvas.addEventListener(
            "click",
            () => {
                canvas.style.display = "none";
                canvas.style.pointerEvents = "none";
                clearInterval(matrixInterval);
                isMatrixActive = false;
            },
            { once: true }
        );
    }

    window.addEventListener("resize", () => {
        if (canvas.style.display === "block") {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    });

    // --- ADVANCED EASTER EGGS LOGIC ---

    // 1. Custom Cursor
    const customCursor = document.getElementById("custom-cursor");
    const cursorTrail = document.getElementById("cursor-trail");
    if (customCursor && cursorTrail) {
        let cursorX = window.innerWidth / 2, cursorY = window.innerHeight / 2;
        let trailX = cursorX, trailY = cursorY;

        document.addEventListener("mousemove", (e) => {
            cursorX = e.clientX;
            cursorY = e.clientY;
            customCursor.style.left = cursorX + "px";
            customCursor.style.top = cursorY + "px";
        });

        function animateTrail() {
            trailX += (cursorX - trailX) * 0.15;
            trailY += (cursorY - trailY) * 0.15;
            cursorTrail.style.left = trailX + "px";
            cursorTrail.style.top = trailY + "px";
            requestAnimationFrame(animateTrail);
        }
        animateTrail();

        document.querySelectorAll("a, button, input, .project-card, .pixel-btn-3d").forEach(el => {
            el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
            el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
        });
    }

    // 2. Retro CRT TV Filter
    const retroCode = ["r", "e", "t", "r", "o"];
    let retroSequence = [];

    document.addEventListener("keydown", (e) => {
        retroSequence.push(e.key.toLowerCase());
        if (retroSequence.length > retroCode.length) {
            retroSequence.shift();
        }
        if (JSON.stringify(retroSequence) === JSON.stringify(retroCode)) {
            document.body.classList.toggle("crt-mode");
            retroSequence = [];

        }
    });

    // 3. Self-Destruct Protocol
    const nukeBtn = document.getElementById("nuke-btn");
    const nukeOverlay = document.getElementById("nuke-overlay");
    const nukeCountdown = document.getElementById("nuke-countdown");
    let isNuked = false;

    if (nukeBtn) {
        nukeBtn.addEventListener("click", () => {
            if (isNuked) return;
            isNuked = true;
            
            nukeOverlay.style.display = "flex";


            let count = 5;
            nukeCountdown.innerText = "0" + count;
            
            const countdownInterval = setInterval(() => {
                count--;
                nukeCountdown.innerText = "0" + count;
                if (count <= 0) {
                    clearInterval(countdownInterval);
                    nukeOverlay.style.display = "none";
                    
                    document.querySelectorAll("section, header, footer, canvas").forEach(el => {
                        el.classList.add("fall-down");
                        el.style.transform = `translateY(150vh) rotate(${(Math.random() - 0.5) * 60}deg)`;
                        el.style.transitionDuration = (1 + Math.random() * 2) + "s";
                    });
                }
            }, 1000);
        });
    }

    // 4. CLI Mode
    const cliModeBtn = document.getElementById("cli-mode-btn");
    const cliOverlay = document.getElementById("cli-mode-overlay");
    const cliInput = document.getElementById("cli-input");
    const cliOutput = document.getElementById("cli-output");

    if (cliModeBtn && cliOverlay) {
        cliModeBtn.addEventListener("click", () => {
            cliOverlay.style.display = "flex";
            cliInput.focus();
            cliOutput.innerHTML = "Welcome to APURVE.DEV Terminal v1.0.0\nType 'help' to see available commands.\n\n";
        });

        cliOverlay.addEventListener("click", () => cliInput.focus());

        cliInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const cmd = cliInput.value.trim().toLowerCase();
                cliInput.value = "";
                cliOutput.innerHTML += `<span style="color:#0f0;">admin@apurve.dev:~$ </span>${cmd}\n`;
                
                if (cmd === "help") {
                    cliOutput.innerHTML += `Available commands:\n  help      - show this message\n  whoami    - about the author\n  ls        - list files and directories\n  cat       - display file contents (try 'cat skills.txt')\n  open      - open a section (try 'open projects')\n  date      - show current system date and time\n  echo      - print text to terminal\n  matrix    - ???\n  sandbox   - launch live code injector\n  hack      - initiate system override protocol\n  sudo      - execute a command as superuser\n  clear     - clear terminal\n  exit      - exit terminal mode\n`;
                } else if (cmd === "whoami") {
                    cliOutput.innerHTML += `Name: Apurve Karanwal\nRole: Backend & DevOps-Focused Engineer\nLocation: Asia/Delhi\nStatus: Shipping reliable systems.\nBio: I build APIs, async job systems, containerized services, and production-minded developer tooling across modern backend stacks.\n`;
                } else if (cmd === "ls") {
                    cliOutput.innerHTML += `skills.txt   projects.dir   education.txt   hobbies.txt   resume.pdf   top_secret.enc\n`;
                } else if (cmd === "cat skills.txt") {
                    cliOutput.innerHTML += `[LANGUAGES]: Python, TypeScript, JavaScript, HTML5, CSS3, C++\n[FRONTEND]: React 19, Next.js, Vite, React Router, TipTap, Zustand, Leaflet\n[BACKEND]: FastAPI, Django, Node.js, Express, REST APIs, SQLAlchemy, Prisma\n[DATA]: PostgreSQL, MongoDB, SQLite, MySQL, Redis, BullMQ, Celery\n[AI_AND_VISION]: LangChain, LangGraph, RAG Pipelines, OCR, Tesseract OCR, OpenCV, PyTorch, Scikit-learn, Pillow\n[SECURITY]: Encryption, JWT/Auth, Password Managers, Invisible Watermarking, Web3\n[HARDWARE]: Arduino, NodeMCU, Embedded Systems, IoT Sensors, Automation\n[TOOLS]: Git, GitHub, Docker, Firebase, Cloudinary, Multer, Socket.IO, Zod\n`;
                } else if (cmd === "cat education.txt") {
                    cliOutput.innerHTML += `B.Tech in Computer Science and Engineering\nFocus: Software Engineering, Data Structures, Algorithms, and System Design.\n`;
                } else if (cmd === "cat hobbies.txt") {
                    cliOutput.innerHTML += `1. Piano\n2. Reading and long-form writing\n3. Systems-driven side projects\n4. Gaming\n`;
                } else if (cmd === "cat top_secret.enc") {
                    cliOutput.innerHTML += `Access Denied: File is encrypted with AES-256. Requires superuser privileges.\n`;
                } else if (cmd === "sudo cat top_secret.enc") {
                    cliOutput.innerHTML += `Decrypting...\n...\n...\nThe cake is a lie.\nAlso, try typing 'matrix' or 'retro'.\n`;
                } else if (cmd.startsWith("cat ")) {
                    cliOutput.innerHTML += `cat: ${cmd.substring(4)}: No such file or directory\n`;
                } else if (cmd.startsWith("echo ")) {
                    cliOutput.innerHTML += `${cmd.substring(5)}\n`;
                } else if (cmd === "date") {
                    cliOutput.innerHTML += `${new Date().toString()}\n`;
                } else if (cmd === "matrix") {
                    cliOutput.innerHTML += `Initializing Matrix Protocol...\n`;
                    setTimeout(() => {
                        cliOverlay.style.display = "none";
                        if (typeof triggerMatrix === "function") triggerMatrix();
                    }, 800);
                } else if (cmd === "retro") {
                    cliOutput.innerHTML += `Toggling CRT retro filter...\n`;
                    document.body.classList.toggle("crt-mode");
                } else if (cmd === "sandbox") {
                    cliOutput.innerHTML += `Launching Live Code Injector...\n`;
                    setTimeout(() => {
                        cliOverlay.style.display = "none";
                        document.getElementById("sandbox-modal").style.display = "flex";
                    }, 500);
                } else if (cmd === "hack") {
                    cliOutput.innerHTML += `Bypassing security protocols...\n`;
                    setTimeout(() => {
                        cliOverlay.style.display = "none";
                        if (typeof initHeistGame === "function") initHeistGame();
                    }, 500);
                } else if (cmd.startsWith("sudo ")) {
                    cliOutput.innerHTML += `[sudo] password for guest: \nSorry, try again.\n[sudo] password for guest: \nsudo: 3 incorrect password attempts\nThis incident will be reported.\n`;
                } else if (cmd.startsWith("open ")) {
                    const target = cmd.substring(5).trim();
                    if (target === "projects" || target === "skills" || target === "contact" || target === "about") {
                        cliOutput.innerHTML += `Opening ${target} section...\n`;
                        setTimeout(() => {
                            cliOverlay.style.display = "none";
                            const el = document.getElementById(target);
                            if (el) el.scrollIntoView({behavior: "smooth"});
                        }, 500);
                    } else {
                        cliOutput.innerHTML += `open: ${target}: Section not found\n`;
                    }
                } else if (cmd === "clear") {
                    cliOutput.innerHTML = "";
                } else if (cmd === "exit") {
                    cliOverlay.style.display = "none";
                } else if (cmd !== "") {
                    cliOutput.innerHTML += `Command not found: ${cmd}\n`;
                }
                
                cliOutput.innerHTML += "\n";
                cliOverlay.scrollTop = cliOverlay.scrollHeight;
            }
        });
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



    // 3. Dark Web Mode
    const torCode = ["t", "o", "r"];
    let torSequence = [];

    document.addEventListener("keydown", (e) => {
        torSequence.push(e.key.toLowerCase());
        if (torSequence.length > torCode.length) torSequence.shift();
        
        if (JSON.stringify(torSequence) === JSON.stringify(torCode)) {
            document.body.classList.toggle("dark-web-mode");
            torSequence = [];
            
            // Text mutations for Dark Web Mode
            if (document.body.classList.contains("dark-web-mode")) {
                document.querySelectorAll("h2.pixel-text").forEach(el => {
                    if (el.innerText.includes("PROJECTS")) el.setAttribute("data-orig", el.innerText), el.innerText = "CONTRABAND CACHE";
                    if (el.innerText.includes("SKILLS")) el.setAttribute("data-orig", el.innerText), el.innerText = "AVAILABLE EXPLOITS";
                });
                const resBtn = document.getElementById("resume-download-btn");
                if (resBtn) resBtn.querySelector("span").innerText = "DECRYPT DOSSIER";
                

            } else {
                document.querySelectorAll("h2.pixel-text").forEach(el => {
                    if (el.getAttribute("data-orig")) el.innerText = el.getAttribute("data-orig");
                });
                const resBtn = document.getElementById("resume-download-btn");
                if (resBtn) resBtn.querySelector("span").innerText = "Resume";
            }
        }
    });

    // 4. Boss Fight
    window.startBossFight = function() {
        const bossOverlay = document.getElementById("boss-fight-overlay");
        const bossChar = document.getElementById("boss-character");
        const healthBar = document.getElementById("boss-health-bar");
        if (!bossOverlay || !bossChar || !healthBar) {
            triggerMatrix(); // fallback
            return;
        }
        
        bossOverlay.style.display = "flex";
        let bossHealth = 10;
        let pos = 50;
        let dir = 1;
        healthBar.style.width = "100%";
        bossChar.classList.remove("explosion", "hit");
        

        
        const moveInterval = setInterval(() => {
            pos += dir * (Math.random() * 5 + 2);
            if (pos > 90) dir = -1;
            if (pos < 10) dir = 1;
            bossChar.style.left = pos + "%";
            // erratic vertical movement
            bossChar.style.top = (100 + Math.random() * 200) + "px";
        }, 100);

        bossChar.onclick = function() {
            bossHealth--;
            healthBar.style.width = (bossHealth * 10) + "%";
            bossChar.classList.add("hit");
            setTimeout(() => bossChar.classList.remove("hit"), 100);
            
            if (bossHealth <= 0) {
                clearInterval(moveInterval);
                bossChar.classList.add("explosion");
                bossChar.onclick = null;
                

                setTimeout(() => {
                    bossOverlay.style.display = "none";
                    triggerMatrix();
                }, 1000);
            }
        };
    }

    // === PHASE 4 LEGENDARY FEATURES ===

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

    // 2. Sandbox Modal
    const sandboxModal = document.getElementById("sandbox-modal");
    const closeSandboxBtn = document.getElementById("close-sandbox-btn");
    const runSandboxBtn = document.getElementById("run-sandbox-btn");
    const sandboxEditor = document.getElementById("sandbox-editor");

    if (sandboxModal) {
        closeSandboxBtn.addEventListener("click", () => sandboxModal.style.display = "none");
        runSandboxBtn.addEventListener("click", () => {
            const code = sandboxEditor.value;
            try {
                new Function(code)();
            } catch (err) {
                alert("Sandbox Error: " + err.message);
            }
        });
    }

    // 3. Heist Mini-Game
    window.initHeistGame = function() {
        const heistModal = document.getElementById("heist-modal");
        const heistWordsContainer = document.getElementById("heist-words");
        const heistLogs = document.getElementById("heist-logs");
        const heistAttemptsEl = document.getElementById("heist-attempts");
        const closeHeistBtn = document.getElementById("close-heist-btn");
        
        if (!heistModal) return;
        heistModal.style.display = "flex";
        heistWordsContainer.innerHTML = "";
        heistLogs.innerHTML = "> Enter Password...<br>";
        
        const words = ["HACKER", "SYSTEM", "SECURE", "ACCESS", "CYBER", "MATRIX", "CODING", "FUTURE"];
        const gameWords = words.sort(() => 0.5 - Math.random()).slice(0, 6);
        const password = gameWords[Math.floor(Math.random() * gameWords.length)];
        let attempts = 4;

        function updateAttempts() {
            let blocks = "";
            for(let i=0; i<attempts; i++) blocks += "⬛ ";
            heistAttemptsEl.innerText = `${attempts} ATTEMPTS REMAINING: ${blocks}`;
        }
        updateAttempts();

        gameWords.forEach(word => {
            const span = document.createElement("span");
            span.className = "heist-word";
            span.innerText = word;
            span.onclick = () => {
                if (attempts <= 0) return;
                
                let matches = 0;
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === password[i]) matches++;
                }
                
                heistLogs.innerHTML += `> ${word}<br>> Entry denied (${matches}/${word.length} correct)<br>`;
                heistLogs.scrollTop = heistLogs.scrollHeight;
                
                if (word === password) {
                    heistLogs.innerHTML += `<span style="color:#fff; background:#0f0;">> EXACT MATCH! ACCESS GRANTED.</span><br>`;
                    setTimeout(() => {
                        heistModal.style.display = "none";
                        alert("VIP Access Granted: You have successfully hacked the portfolio. Hire me! 😉");
                    }, 1500);
                } else {
                    attempts--;
                    updateAttempts();
                    if (attempts === 0) {
                        heistLogs.innerHTML += `<span style="color:#f00;">> SYSTEM LOCKED.</span><br>`;
                        setTimeout(() => heistModal.style.display = "none", 2000);
                    }
                }
            };
            heistWordsContainer.appendChild(span);
        });

        closeHeistBtn.onclick = () => heistModal.style.display = "none";
    };

});
