(function () {
  let zeroGEnabled = false;
  let clickCount = 0;
  const TRIGGER_COUNT = 3;
  const CLICK_TIMEOUT = 500;
  let clickTimer;

  function initTrigger() {
    const triggerEl = document.querySelector(".profile-image-container"); // Targeting the profile image
    
    if (!triggerEl) {
      console.warn("Zero-G: Profile image container not found.");
      return;
    }

    console.log("Zero-G: Initialized on profile image container.");

    triggerEl.style.cursor = "pointer";
    triggerEl.title = "Click me...";

    triggerEl.addEventListener("click", (e) => {
      clickCount++;
      console.log(`Zero-G: Click count ${clickCount}`);

      // Visual feedback loop
      triggerEl.style.transform = `scale(${1 + clickCount * 0.05})`;
      setTimeout(() => (triggerEl.style.transform = "scale(1)"), 100);

      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => {
        clickCount = 0;
        console.log("Zero-G: Click timer reset");
      }, CLICK_TIMEOUT);

      if (clickCount >= TRIGGER_COUNT && !zeroGEnabled) {
        enableZeroG();
      }
    });
  }

  function enableZeroG() {
    zeroGEnabled = true;
    console.log("Zero-G Mode Activated!");

    // Elements to float
    const elements = [
      document.querySelector('.profile-image-container')
    ].filter(el => el); // Filter nulls

    if (elements.length === 0) return;

    // Physics State
    const bodies = elements.map((el) => {
      const rect = el.getBoundingClientRect();
      // Clone to preserve layout space or just let it collapse?
      // Let's create a spacer to prevent layout shift if we wanted, but for chaos mode, let's just detach.
      // Actually, detaching might look weird if the text jumps.
      // Let's swap to fixed positioning.

      // Reset text alignment for pillars to ensure they look good floating
      if (el.classList.contains("pillar-card")) {
        el.style.textAlign = "center";
      }

      return {
        el: el,
        x: rect.left,
        y: rect.top,
        vx: (Math.random() - 0.5) * 10, // Random velocity
        vy: (Math.random() - 0.5) * 10,
        width: rect.width,
        height: rect.height,
        isDragging: false,
      };
    });

    // Apply initial fixed positioning
    bodies.forEach((b) => {
      b.el.style.position = "fixed";
      b.el.style.left = b.x + "px";
      b.el.style.top = b.y + "px";
      b.el.style.zIndex = "1000";
      b.el.style.margin = "0";
      b.el.style.transition = "none"; // Disable CSS transitions for physics
    });

    // Physics Loop
    function update() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const link = 0.9; // Bounciness (restitution)
      const friction = 0.995; // Air resistance

      bodies.forEach((b) => {
        if (b.isDragging) return;

        b.x += b.vx;
        b.y += b.vy;

        // Wall collisions
        if (b.x <= 0) {
          b.x = 0;
          b.vx *= -link;
        }
        if (b.x + b.width >= width) {
          b.x = width - b.width;
          b.vx *= -link;
        }
        if (b.y <= 0) {
          b.y = 0;
          b.vy *= -link;
        }
        if (b.y + b.height >= height) {
          b.y = height - b.height;
          b.vy *= -link;
        }

        // Friction
        b.vx *= friction;
        b.vy *= friction;

        // Apply
        b.el.style.left = b.x + "px";
        b.el.style.top = b.y + "px";
      });

      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);

    // Drag Interaction
    let activeBody = null;
    let startX, startY;
    let lastX, lastY;

    window.addEventListener("mousedown", (e) => {
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Find body under cursor
      activeBody = bodies.find((b) => {
        return (
          clientX >= b.x &&
          clientX <= b.x + b.width &&
          clientY >= b.y &&
          clientY <= b.y + b.height
        );
      });

      if (activeBody) {
        // Prevent link clicking if dragging
        activeBody.el.onclick = (e) => {
          if (
            Math.abs(e.clientX - startX) > 5 ||
            Math.abs(e.clientY - startY) > 5
          ) {
            e.preventDefault();
          }
        };

        activeBody.isDragging = true;
        activeBody.vx = 0;
        activeBody.vy = 0;
        startX = clientX;
        startY = clientY;
        lastX = clientX;
        lastY = clientY;
      }
    });

    window.addEventListener("mousemove", (e) => {
      if (!activeBody) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;

      activeBody.x += dx;
      activeBody.y += dy;

      activeBody.el.style.left = activeBody.x + "px";
      activeBody.el.style.top = activeBody.y + "px";

      // Calculate "throw" velocity
      activeBody.vx = dx;
      activeBody.vy = dy;

      lastX = e.clientX;
      lastY = e.clientY;
    });

    window.addEventListener("mouseup", () => {
      if (activeBody) {
        activeBody.isDragging = false;
        activeBody = null;
      }
    });
  }

  // Initialize triggers when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTrigger);
  } else {
    initTrigger();
  }
})();
