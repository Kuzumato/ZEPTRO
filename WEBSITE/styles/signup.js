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
    const idUpload = signupForm.elements['idUpload'].files[0];
    const selfieUpload = signupForm.elements['selfieUpload'].files[0];

    // Game Section
    const username = signupForm.elements['username'].value.trim();
    const gameEmail = signupForm.elements['gameEmail'].value.trim();
    const password = signupForm.elements['password'].value;
    const confirmPassword = signupForm.elements['confirmPassword'].value;
    const agree = signupForm.elements['agree'].checked;

    // Validation
    if (!fullName || !dob || !nationality || !idType || !idNumber || !address || !kycEmail || !phone ||
        !username || !gameEmail || !password || !confirmPassword || !idUpload || !selfieUpload) {
      errorMsg.textContent = 'Please fill in all required fields and upload all necessary documents.';
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

    // File validation
    const validFileTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!validFileTypes.includes(idUpload.type)) {
      errorMsg.textContent = 'Uploaded ID must be a PDF, JPG, or PNG file.';
      errorMsg.style.display = 'block'; return;
    }
    if (!['image/jpeg', 'image/png'].includes(selfieUpload.type)) {
      errorMsg.textContent = 'Selfie must be a JPG or PNG image.';
      errorMsg.style.display = 'block'; return;
    }
    if (idUpload.size > 4 * 1024 * 1024 || selfieUpload.size > 4 * 1024 * 1024) {
      errorMsg.textContent = 'Each file must be less than 4MB.';
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