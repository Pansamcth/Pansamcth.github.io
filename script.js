/* ==========================================================================
   ระบบสารวัตรนักเรียน - Dynamic Random Gradient Orbs Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  createRandomGradientOrbs();
});

/**
 * Generates random blurred gradient color spots in the background
 */
function createRandomGradientOrbs() {
  const container = document.getElementById('ambient-bg');
  if (!container) return;

  // Clear previous orbs
  container.innerHTML = '';

  // Palette of warm, golden, peach, and soft amber colors matching the emblem theme
  const colors = [
    'radial-gradient(circle, rgba(251, 191, 36, 0.55) 0%, rgba(251, 191, 36, 0) 70%)',  // Gold
    'radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(245, 158, 11, 0) 70%)',  // Amber
    'radial-gradient(circle, rgba(253, 186, 116, 0.6) 0%, rgba(253, 186, 116, 0) 70%)',  // Peach
    'radial-gradient(circle, rgba(254, 240, 138, 0.65) 0%, rgba(254, 240, 138, 0) 70%)', // Soft Yellow
    'radial-gradient(circle, rgba(251, 146, 60, 0.4) 0%, rgba(251, 146, 60, 0) 70%)',   // Warm Orange
    'radial-gradient(circle, rgba(234, 179, 8, 0.5) 0%, rgba(234, 179, 8, 0) 70%)'      // Deep Gold
  ];

  // Number of random color spots (5 to 7 spots)
  const orbCount = 6;

  for (let i = 0; i < orbCount; i++) {
    const orb = document.createElement('div');
    orb.className = 'gradient-orb';

    // Randomize dimensions (between 300px and 600px)
    const size = Math.floor(Math.random() * 300) + 320;
    
    // Randomize position across viewport (%)
    const top = Math.floor(Math.random() * 90) - 10;
    const left = Math.floor(Math.random() * 90) - 10;

    // Randomize background gradient color
    const bgGradient = colors[i % colors.length];

    // Randomize blur amount (80px to 130px)
    const blurAmount = Math.floor(Math.random() * 50) + 80;

    // Randomize animation duration and delay
    const animDuration = Math.floor(Math.random() * 10) + 12; // 12s - 22s
    const animDelay = (Math.random() * -10).toFixed(1); // negative delay for immediate variety

    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;
    orb.style.top = `${top}%`;
    orb.style.left = `${left}%`;
    orb.style.background = bgGradient;
    orb.style.filter = `blur(${blurAmount}px)`;
    orb.style.animationDuration = `${animDuration}s`;
    orb.style.animationDelay = `${animDelay}s`;

    container.appendChild(orb);
  }
}
