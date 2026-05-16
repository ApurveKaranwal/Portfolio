
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
        "> **[STATUS: ONLINE]** Aspiring Full-Stack Developer | IoT Engineer. Turning ideas into interactive systems.";
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
    let audioCtx = null;
    let isMuted = true;

    const audioToggle = document.getElementById("audio-toggle");
    const audioIcon = document.getElementById("audio-icon");

    function initAudio() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContext();
        }
    }

    function playSound(type) {
        if (isMuted || !audioCtx) {
            return;
        }

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        const now = audioCtx.currentTime;

        if (type === "hover") {
            osc.type = "sine";
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.start(now);
            osc.stop(now + 0.05);
        } else if (type === "click") {
            osc.type = "square";
            osc.frequency.setValueAtTime(200, now);
            osc.frequency.exponentialRampToValueAtTime(50, now + 0.1);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === "matrix") {
            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(100, now);
            osc.frequency.linearRampToValueAtTime(800, now + 1);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.linearRampToValueAtTime(0, now + 1);
            osc.start(now);
            osc.stop(now + 1);
        }
    }

    document.querySelectorAll("a, button, .project-card, .pixel-block-3d").forEach((el) => {
        el.addEventListener("mouseenter", () => playSound("hover"));
        el.addEventListener("click", () => playSound("click"));
    });

    audioToggle.addEventListener("click", () => {
        initAudio();
        isMuted = !isMuted;
        if (!isMuted) {
            audioIcon.classList.replace("fa-volume-xmark", "fa-volume-high");
            playSound("click");
        } else {
            audioIcon.classList.replace("fa-volume-high", "fa-volume-xmark");
        }
    });

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
            triggerMatrix();
            currentSequence = [];
        }
    });

    function triggerMatrix() {
        initAudio();
        if (!isMuted) {
            playSound("matrix");
        }

        canvas.style.display = "block";
        canvas.style.pointerEvents = "auto";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const katakana =
            "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヲギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヲゴゾドボポオォコソトノホモヨョロ";
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

            ctx.fillStyle = "#0F0";
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        if (matrixInterval) {
            clearInterval(matrixInterval);
        }
        matrixInterval = setInterval(draw, 30);

        canvas.addEventListener(
            "click",
            () => {
                canvas.style.display = "none";
                canvas.style.pointerEvents = "none";
                clearInterval(matrixInterval);
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
});
