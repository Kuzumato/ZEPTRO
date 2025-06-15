// ========== General: Public View (index.html) Redirect ========== //
// Smooth scroll for nav links
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav.main-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact form simulation
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const msg = document.getElementById('formMsg');
      msg.style.display = 'block';
      msg.style.color = "#5ee7df";

      // Basic validation
      let name = form.elements['name'].value.trim();
      let email = form.elements['email'].value.trim();
      let message = form.elements['message'].value.trim();

      if (!name || !email || !message) {
        msg.textContent = "Please fill in all fields.";
        msg.style.color = "#ff5864";
        return;
      }
      if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        msg.textContent = "Please enter a valid email address.";
        msg.style.color = "#ff5864";
        return;
      }
      msg.textContent = "Thank you for contacting us! We'll respond soon.";
      form.reset();
      setTimeout(() => { msg.style.display = 'none'; }, 3200);
    });
  }
});
// ========== Game Interface: Nickname Generator ========== //
function generateNickname() {
  const nicknameLabel = document.getElementById("nickname-label");
  if (!nicknameLabel) return;
  nicknameLabel.textContent = "Generating...";
  setTimeout(() => {
    const nicknames = [
      "CyberSage", "NeonOracle", "QuantumPilot", "BinaryWiz", "DigitalMaverick",
      "PixelGuru", "DataNomad", "CircuitShaman", "TechnoProphet", "SynthVisionary"
    ];
    const randomNickname = nicknames[Math.floor(Math.random() * nicknames.length)];
    nicknameLabel.textContent = randomNickname;
  }, 1000);
}
const nicknameBtn = document.getElementById("nickname-btn");
if (nicknameBtn) {
  nicknameBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    generateNickname();
  });
}

// ========== Game Interface: Panel Demos ========== //
const cryptoPanel = document.getElementById("crypto-panel");
if (cryptoPanel) cryptoPanel.addEventListener("click", function() {
  alert("Open CRYPTO details panel");
});
const inventoryPanel = document.getElementById("inventory-panel");
if (inventoryPanel) inventoryPanel.addEventListener("click", function() {
  alert("Open IN-GAME INVENTORY panel");
});
const marketplacePanel = document.getElementById("marketplace-panel");
if (marketplacePanel) marketplacePanel.addEventListener("click", function() {
  alert("Open MARKET PLACE panel");
});

// ========== Login Page Logic ========== //
function backToPublicView() {
  window.location.href = "index.html";
}
const backBtns = document.querySelectorAll('.back-public-btn');
backBtns.forEach(btn => btn.addEventListener("click", backToPublicView));

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const validUsername = "admin";
    const validPassword = "12345";
    if (username === validUsername && password === validPassword) {
      localStorage.setItem('loggedIn', 'true');
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password. Try again.");
    }
  });
}

// ========== Zeptro Landing: Navigation & Animated Panels ========== //
function showPage(page) {
  let sections = ['about', 'features', 'tokenomics', 'nfts', 'lore', 'progress'];
  sections.forEach(s => {
    let sec = document.getElementById(s + '-section');
    if (sec) sec.classList.add('hidden');
    let nav = document.getElementById('nav-' + s);
    if (nav) nav.classList.remove('active');
  });
  setTimeout(() => {
    let showSec = document.getElementById(page + '-section');
    if (showSec) showSec.classList.remove('hidden');
    let showNav = document.getElementById('nav-' + page);
    if (showNav) showNav.classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, 100);
}
if (document.getElementById('about-section')) showPage('about');
window.addEventListener('scroll', function() {
  const offset = window.pageYOffset;
  document.body.style.backgroundPosition = `center ${offset * 0.13}px`;
});
const logoImg = document.querySelector('.logo-img');
if (logoImg) logoImg.addEventListener('click', function() {
  showPage('about');
});
// Slide Panels for Gamers/Investors
const gamersBtn = document.getElementById("for-gamers-btn");
const investorsBtn = document.getElementById("for-investors-btn");
const gamersPanel = document.getElementById("gamers-panel");
const investorsPanel = document.getElementById("investors-panel");
if (gamersPanel && investorsPanel && gamersBtn && investorsBtn) {
  gamersPanel.classList.remove('active');
  investorsPanel.classList.remove('active');
  gamersBtn.onclick = function() {
    if (!gamersPanel.classList.contains('active')) {
      gamersPanel.classList.add('active');
      investorsPanel.classList.remove('active');
      setTimeout(() => {
        gamersPanel.scrollIntoView({behavior:'smooth', block:'center'});
      }, 130);
    } else {
      gamersPanel.classList.remove('active');
    }
  };
  investorsBtn.onclick = function() {
    if (!investorsPanel.classList.contains('active')) {
      investorsPanel.classList.add('active');
      gamersPanel.classList.remove('active');
      setTimeout(() => {
        investorsPanel.scrollIntoView({behavior:'smooth', block:'center'});
      }, 130);
    } else {
      investorsPanel.classList.remove('active');
    }
  };
}
document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signup-form');
  const errorMsg = document.getElementById('form-error');
  const successMsg = document.getElementById('form-success');

  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    errorMsg.style.display = 'none';
    successMsg.style.display = 'none';

    // KYC Section
    const fullName = signupForm.elements['fullName'].value.trim();
    const dob = signupForm.elements['dob'].value;
    const nationality = signupForm.elements['nationality'].value.trim();
    const idType = signupForm.elements['idType'].value;
    const idNumber = signupForm.elements['idNumber'].value.trim();
    const address = signupForm.elements['address'].value.trim();
    const kycEmail = signupForm.elements['kycEmail'].value.trim();
    const phone = signupForm.elements['phone'].value.trim();

    // Game Section
    const username = signupForm.elements['username'].value.trim();
    const gameEmail = signupForm.elements['gameEmail'].value.trim();
    const password = signupForm.elements['password'].value;
    const confirmPassword = signupForm.elements['confirmPassword'].value;
    const agree = signupForm.elements['agree'].checked;

    // Validation
    if (!fullName || !dob || !nationality || !idType || !idNumber || !address || !kycEmail || !phone ||
        !username || !gameEmail || !password || !confirmPassword) {
      errorMsg.textContent = 'Please fill in all required fields in both sections.';
      errorMsg.style.display = 'block'; return;
    }
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(kycEmail) || !/^[^@]+@[^@]+\.[^@]+$/.test(gameEmail)) {
      errorMsg.textContent = 'Enter valid email addresses.';
      errorMsg.style.display = 'block'; return;
    }
    if (!/^[0-9]{10,15}$/.test(phone)) {
      errorMsg.textContent = 'Enter a valid phone number (10-15 digits).';
      errorMsg.style.display = 'block'; return;
    }
    if (!/^[A-Za-z0-9\- ]{5,}$/.test(idNumber)) {
      errorMsg.textContent = 'Enter a valid ID number.';
      errorMsg.style.display = 'block'; return;
    }
    if (password.length < 6) {
      errorMsg.textContent = 'Password must be at least 6 characters.';
      errorMsg.style.display = 'block'; return;
    }
    if (password !== confirmPassword) {
      errorMsg.textContent = 'Passwords do not match.';
      errorMsg.style.display = 'block'; return;
    }
    if (!agree) {
      errorMsg.textContent = 'You must agree to the Terms & Privacy Policy.';
      errorMsg.style.display = 'block'; return;
    }

    // Save (simulate)
    localStorage.setItem('kycCompleted', 'true');
    localStorage.setItem('kycName', fullName);
    localStorage.setItem('gameSignup', 'true');
    localStorage.setItem('gameUser', username);

    successMsg.textContent = 'Sign up and KYC completed! Redirecting...';
    successMsg.style.display = 'block';
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1700);
  });
});