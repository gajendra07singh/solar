console.log("Shri Solar Script Loaded v1.2");

// Determine Backend URL
const BACKEND_URL = 'https://solar-raq8.onrender.com';

console.log("Using Backend URL:", BACKEND_URL);

const HEADER_HTML = `
<!-- ===== TOPBAR ===== -->
<div class="topbar">
  <div class="topbar-inner">
    <div class="topbar-group">
      <div class="topbar-contact">
        <div class="topbar-icon"><i class="fas fa-phone-alt"></i></div>
        <span><b>Sales:</b> <a href="tel:+919266386005">+91 92663 86005</a></span>
      </div>
      <div class="topbar-contact">
        <div class="topbar-icon"><i class="fas fa-headset"></i></div>
        <span><b>Service:</b> <a href="tel:+919311201446">+91 93112 01446</a></span>
      </div>
    </div>
    <div class="topbar-group">
      <div class="topbar-contact">
        <div class="topbar-icon"><i class="fas fa-envelope"></i></div>
        <span><b>Sales Email:</b> <a href="mailto:sales@shrisolar.in">sales@shrisolar.in</a></span>
      </div>
      <div class="topbar-contact">
        <div class="topbar-icon"><i class="fas fa-envelope"></i></div>
        <span><b>Service Email:</b> <a href="mailto:service@shrisolar.in">service@shrisolar.in</a></span>
      </div>
    </div>
  </div>
</div>

<!-- ===== NAVBAR ===== -->
<nav class="navbar">
  <div class="nav-inner">
    <a class="nav-logo" href="index.html">
      <img src="https://shrisolar.com/assets/img/logo/logo.png" alt="Shri Solar">
    </a>
    <div class="nav-links" id="navLinks">
      <a class="nav-link" href="index.html">Home</a>
      <a class="nav-link" href="about.html">About Us</a>
      <a class="nav-link" href="products.html">Products</a>
      <a class="nav-link" href="pm-surya.html">PM Surya Ghar Bijli</a>
      <div class="nav-link nav-dd">
        Utility <i class="fas fa-chevron-down" style="font-size: 0.6rem; margin-left: 4px;"></i>
        <div class="nav-dd-menu">
          <a href="mssy-uttarakhand.html">MSSY Uttarakhand</a>
          <a href="kusum-mp.html">KUSUM-MP</a>
          <a href="open-access.html">Open Access</a>
        </div>
      </div>
      <div class="nav-link nav-dd">
        C&I <i class="fas fa-chevron-down" style="font-size: 0.6rem; margin-left: 4px;"></i>
        <div class="nav-dd-menu">
          <a href="on-grid.html">On Grid System</a>
          <a href="maintenance.html">Energy Storage with Grid Expert</a>
          <a href="off-grid.html">OFF Grid</a>
          <a href="capex-opex.html">Capex & Opex Model</a>
        </div>
      </div>
      <div class="nav-link nav-dd">
        Regional Offices <i class="fas fa-chevron-down" style="font-size: 0.6rem; margin-left: 4px;"></i>
        <div class="nav-dd-menu">
          <a href="contact.html">Sales Store & Branch Locator</a>
        </div>
      </div>
      <a class="nav-link" href="certificates.html">Certificates & Awards</a>
      <div class="nav-link nav-dd nav-contact-btn">
        Contact <i class="fas fa-chevron-down"></i>
        <div class="nav-dd-menu contact-dd">
          <a href="contact.html">Customers – Sales Service</a>
          <a href="channel-partner.html">Channel Partner</a>
          <a href="maintenance.html">Career with Us</a>
          <a href="vendor.html">Vendor</a>
        </div>
      </div>
    </div>
    <button onclick="openLeadModal()" class="mobile-quote-btn">Get Free Quote</button>
    <button class="hamburger" id="ham" aria-label="Menu"><i class="fas fa-bars"></i></button>
  </div>
</nav>
`;

const FOOTER_HTML = `
<!-- ===== CTA BANNER SECTION ===== -->
<section class="cta-banner-section">
  <div class="cta-banner-inner container">
    <div class="cta-banner-text">
      <h3 class="banner-title">India's Leading Integrated Solar Company</h3>
      <p class="banner-subtitle">Get a free solar consultation — enter your mobile number</p>
    </div>
    <div class="cta-banner-form">
      <input type="tel" id="mobile-banner" placeholder="Enter Mobile Number" maxlength="10">
      <button onclick="submitMobileBanner()"><i class="fas fa-paper-plane" aria-hidden="true"></i> Get Quote</button>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="https://shrisolar.com/assets/img/logo/logo.png" alt="Shri Solar">
        <p>Shri Solar – Committed to Clean, Sustainable, and Reliable Energy. A pioneer in bringing affordable, sustainable solar solutions to rural, commercial, and institutional clients across India since 2005.</p>
        <a href="contact.html" class="footer-contact-btn">
          <i class="fas fa-phone-alt"></i> Contact Us
        </a>
      </div>
      <div class="footer-col">
        <h4>Useful Links</h4>
        <ul class="footer-links">
          <li><a href="pm-surya.html"><i class="fas fa-chevron-right"></i> PM Surya Ghar Muft Bijli Yojna</a></li>
          <li><a href="mssy-uttarakhand.html"><i class="fas fa-chevron-right"></i> Utility Projects</a></li>
          <li><a href="on-grid.html"><i class="fas fa-chevron-right"></i> C&I Solutions</a></li>
          <li><a href="our-presence.html"><i class="fas fa-chevron-right"></i> Our Presence</a></li>
          <li><a href="certificates.html"><i class="fas fa-chevron-right"></i> Awards & Certificates</a></li>
          <li><a href="contact.html"><i class="fas fa-chevron-right"></i> Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="on-grid.html"><i class="fas fa-chevron-right"></i> On Grid System</a></li>
          <li><a href="maintenance.html"><i class="fas fa-chevron-right"></i> Energy Storage with Grid</a></li>
          <li><a href="off-grid.html"><i class="fas fa-chevron-right"></i> OFF Grid Solutions</a></li>
          <li><a href="capex-opex.html"><i class="fas fa-chevron-right"></i> Capex & Opex Model</a></li>
          <li><a href="our-presence.html"><i class="fas fa-chevron-right"></i> Store & Branch Locator</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Get In Touch</h4>
        <div class="f-contact">
          <div class="f-contact-item">
            <div class="icon-circle"><i class="fas fa-phone-alt"></i></div>
            <div class="f-contact-info">
              <a href="tel:+919266386005">+91 92663 86005</a>
              <a href="tel:+919311201446">+91 93112 01446</a>
            </div>
          </div>
          <div class="f-contact-item">
            <div class="icon-circle"><i class="fas fa-envelope"></i></div>
            <div class="f-contact-info">
              <a href="mailto:sales@shrisolar.in">sales@shrisolar.in</a>
              <a href="mailto:service@shrisolar.in">service@shrisolar.in</a>
            </div>
          </div>
        </div>
        <div class="f-socials">
          <a href="https://www.facebook.com/ShriBadrinathVaikalpikUrjaLimited" class="f-social" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="f-social"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/shrisolar_india/" class="f-social" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="#" class="f-social"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com/@shrisolarindia" class="f-social" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright &copy; 2026-27 <strong>Shri Solar</strong>. All Rights Reserved.</p>
    </div>
  </div>
</footer>

<!-- Floating Actions -->
<div class="floating-actions">
  <button class="float-btn back-top" id="backTopBtn" aria-label="Back to top">
    <i class="fas fa-chevron-up"></i>
  </button>
  <a href="tel:+919266386005" class="float-btn call-float" aria-label="Call Us">
    <i class="fas fa-phone-alt"></i>
  </a>
  <a href="https://wa.me/919266386005" class="float-btn wa-float" target="_blank" aria-label="WhatsApp">
    <i class="fab fa-whatsapp"></i>
  </a>
</div>

<!-- Lead Form Modal (Survey) -->
<div class="modal-overlay" id="leadModal">
  <div class="modal-container">
    <button class="modal-close" onclick="closeLeadModal()"><i class="fas fa-times"></i></button>
    <div class="modal-header">
      <h2>Quick Survey Form</h2>
    </div>
    <div class="modal-body">
      <div class="modal-form-grid">
        <div class="modal-form-group">
          <label class="modal-label" for="name">Name</label>
          <input type="text" id="name" class="modal-input" placeholder="Name">
        </div>
        <div class="modal-form-group">
          <label class="modal-label" for="city">City</label>
          <input type="text" id="city" class="modal-input" placeholder="City">
        </div>
      </div>
      <div class="modal-form-group">
        <label class="modal-label" for="phone">Mobile No</label>
        <input type="tel" id="phone" class="modal-input" placeholder="Enter Mobile Number">
      </div>

      <button class="modal-btn modal-btn-submit" onclick="submitForm()">
        Submit Now
      </button>
      <button class="modal-btn modal-btn-cancel" onclick="closeLeadModal()">
        Cancel
      </button>
    </div>
  </div>
</div>
`;

function injectComponents() {
  console.log("Injecting Header and Footer...");

  // Wake up backend (helpful for Render free tier)
  fetch(BACKEND_URL)
    .then(res => res.json())
    .then(data => console.log("Backend status:", data.status))
    .catch(err => console.warn("Backend wake-up ping failed."));

  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = HEADER_HTML;
    console.log("Header injected successfully.");
    initNav();
    highlightActiveLink();
  } else {
    console.warn("Header placeholder not found in DOM");
  }

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = FOOTER_HTML;
    console.log("Footer injected successfully.");
    initFooterLogic();
    initModal();
  } else {
    console.warn("Footer placeholder not found in DOM");
  }

  initFAQ();
}

/* ===== FAQ ACCORDION ===== */
function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.onclick = () => {
      const item = q.parentElement;
      const isActive = item.classList.contains('active');

      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      // If the clicked item wasn't active, open it
      if (!isActive) {
        item.classList.add('active');
      }
    };
  });
}

// Use a safer initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
} else {
    injectComponents();
}

/* ===== NAVIGATION LOGIC ===== */
function initNav() {
  const ham = document.getElementById('ham');
  const navLinks = document.getElementById('navLinks');
  if (ham && navLinks) {
    ham.onclick = () => {
      navLinks.classList.toggle('open');
      const icon = ham.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
      }
    };
  }

  // Handle dropdowns on click for both mobile and desktop
  const dropdowns = document.querySelectorAll('.nav-dd');
  dropdowns.forEach(dd => {
    dd.addEventListener('click', (e) => {
      // If clicking on a link inside the dropdown, don't toggle (allow navigation)
      if (e.target.tagName === 'A') return;

      e.preventDefault();
      e.stopPropagation();

      const isActive = dd.classList.contains('active');

      // Close all other dropdowns
      dropdowns.forEach(other => other.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        dd.classList.add('active');
      }
    });
  });

  // Close dropdowns if clicking outside
  document.addEventListener('click', () => {
    dropdowns.forEach(dd => dd.classList.remove('active'));
  });
}

function highlightActiveLink() {
  try {
    const path = window.location.pathname;
    let page = path.split("/").pop();
    if (!page || page === "" || page === "/") page = "index.html";

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === page) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  } catch (e) {
    console.error("Error highlighting active link:", e);
  }
}

/* ===== FOOTER & FLOATING LOGIC ===== */
function initFooterLogic() {
  const backTopBtn = document.getElementById('backTopBtn');
  if (backTopBtn) {
    backTopBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  window.addEventListener('scroll', () => {
    if (backTopBtn) {
      if (window.scrollY > 300) {
        backTopBtn.classList.add('visible');
      } else {
        backTopBtn.classList.remove('visible');
      }
    }

    // TOC Active State
    try {
        const sections = document.querySelectorAll('.content-col section[id]');
        let active = '';
        sections.forEach(s => {
          if (window.scrollY + 140 >= s.offsetTop) active = s.id;
        });
        document.querySelectorAll('.toc-list a').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + active);
        });
    } catch (e) {}
  });
}

/* ===== MODAL LOGIC ===== */
function initModal() {
  const modal = document.getElementById('leadModal');
  if (!modal) return;

  const isHomePage = document.querySelector('.home-page-body') !== null ||
                     window.location.pathname.endsWith('index.html') ||
                     window.location.pathname.endsWith('/') ||
                     window.location.pathname === '';

  if (isHomePage) {
    setTimeout(() => {
      modal.classList.add('show');
    }, 1000);
  }
}

function closeLeadModal() {
  const modal = document.getElementById('leadModal');
  if (modal) modal.classList.remove('show');
}

function openLeadModal() {
  const modal = document.getElementById('leadModal');
  if (modal) modal.classList.add('show');
}

/* ===== FORM SUBMISSIONS ===== */
async function submitForm() {
  const nameInput = document.getElementById('name');
  const cityInput = document.getElementById('city');
  const phoneInput = document.getElementById('phone');

  if (!nameInput || !cityInput || !phoneInput) return;

  const name = nameInput.value;
  const city = cityInput.value;
  const phone = phoneInput.value;

  if (!name || !city || !phone) {
    alert("Please fill all fields.");
    return;
  }

  try {
    const response = await fetch(`${BACKEND_URL}/submit-form`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, city, phone })
    });

    const data = await response.json();
    alert(data.message);
    if (response.ok) closeLeadModal();
  } catch (error) {
    console.error('Error:', error);
    alert('Submission failed. Please ensure the backend server is running and accessible.');
  }
}

async function submitMobileBanner() {
  const phoneInput = document.getElementById('mobile-banner');
  if (!phoneInput) return;
  const phone = phoneInput.value.trim();

  if (phone.length === 10 && /^\d+$/.test(phone)) {
    try {
      const response = await fetch(`${BACKEND_URL}/submit-mobile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      });
      const data = await response.json();
      alert(data.message);
      if (response.ok) phoneInput.value = '';
    } catch (error) {
      console.error('Error:', error);
      alert('Submission failed. Please ensure the backend server is running and accessible.');
    }
  } else {
    alert('Please enter a valid 10-digit mobile number.');
  }
}

async function submitMobile() {
  const phoneInput = document.getElementById('mobile');
  if (!phoneInput) return;
  const phone = phoneInput.value.trim();

  if (phone.length === 10 && /^\d+$/.test(phone)) {
    try {
      const response = await fetch(`${BACKEND_URL}/submit-mobile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      });
      const data = await response.json();
      alert(data.message);
      if (response.ok) phoneInput.value = '';
    } catch (error) {
      console.error('Error:', error);
      alert('Submission failed. Please ensure the backend server is running and accessible.');
    }
  } else {
    alert('Please enter a valid 10-digit mobile number.');
  }
}

/* ===== LOAN CALCULATOR ===== */
function updateLoanEMI() {
  const sizeSelect = document.getElementById('sys-size-selector');
  const display = document.getElementById('emi-display');
  if (!sizeSelect || !display) return;

  const size = sizeSelect.value;
  const emiMap = {
    '1': '₹300 - ₹450*',
    '2': '₹550 - ₹750*',
    '3': '₹850 - ₹1,100*',
    '3.6': '₹1,000 - ₹1,300*',
    '5': '₹1,400 - ₹1,800*'
  };
  display.innerText = emiMap[size] || 'Contact Sales';
}

// Global scope handlers for form submissions
document.addEventListener('submit', async (e) => {
  const target = e.target;
  try {
      // Contact Form
      if (target.closest('.contact-form-side form')) {
        e.preventDefault();
        const data = {
          name: document.getElementById('c-name')?.value || '',
          phone: document.getElementById('c-phone')?.value || '',
          email: document.getElementById('c-email')?.value || '',
          subject: document.getElementById('c-subject')?.value || '',
          message: document.getElementById('c-msg')?.value || ''
        };
        await handleFormSubmit(`${BACKEND_URL}/submit-message`, data, target);
      }

      // Vendor Form
      if (target.closest('.vendor-form-section form')) {
        e.preventDefault();
        const data = {
          name: document.getElementById('v-name')?.value || '',
          phone: document.getElementById('v-phone')?.value || '',
          email: document.getElementById('v-email')?.value || '',
          city: document.getElementById('v-city')?.value || '',
          company: document.getElementById('v-company')?.value || '',
          category: document.getElementById('v-category')?.value || '',
          gst: document.getElementById('v-gst')?.value || '',
          pan: document.getElementById('v-pan')?.value || '',
          message: document.getElementById('v-msg')?.value || ''
        };
        await handleFormSubmit(`${BACKEND_URL}/submit-vendor`, data, target);
      }

      // Partner Form
      if (target.closest('.partnership-form-section form')) {
        e.preventDefault();
        const data = {
          name: document.getElementById('p-name')?.value || '',
          phone: document.getElementById('p-phone')?.value || '',
          email: document.getElementById('p-email')?.value || '',
          city: document.getElementById('p-city')?.value || '',
          experience: document.getElementById('p-exp')?.value || '',
          message: document.getElementById('p-msg')?.value || ''
        };
        await handleFormSubmit(`${BACKEND_URL}/submit-partner`, data, target);
      }
  } catch (e) {
      console.error("Form handling error:", e);
  }
});

async function handleFormSubmit(url, data, formElement) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    alert(resData.message);
    if (response.ok) formElement.reset();
  } catch (error) {
    console.error('Error:', error);
    alert('Submission failed. Please ensure the backend server is running and accessible.');
  }
}
