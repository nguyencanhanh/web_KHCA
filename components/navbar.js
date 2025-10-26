class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #0066cc 0%, #00a8e8 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .nav-link:hover {
          opacity: 0.8;
          transform: translateY(-1px);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #0066cc 0%, #00a8e8 100%);
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
          }
          
          .nav-links.mobile-open {
            display: flex;
          }
        }
      </style>
      
      <nav>
        <a href="/" class="logo">
          <i data-feather="droplet"></i>
          IoT Water Pro
        </a>
        
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        
        <ul class="nav-links">
          <li><a href="/" class="nav-link"><i data-feather="home"></i> Trang Chủ</a></li>
          <li><a href="/products.html" class="nav-link"><i data-feather="package"></i> Sản Phẩm</a></li>
          <li><a href="/about.html" class="nav-link"><i data-feather="info"></i> Giới Thiệu</a></li>
          <li><a href="/contact.html" class="nav-link"><i data-feather="mail"></i> Liên Hệ</a></li>
          <li><a href="/admin.html" class="nav-link"><i data-feather="settings"></i> Quản Trị</a></li>
        </ul>
      </nav>
    `;
    
    // Initialize mobile menu functionality
    this.initializeMobileMenu();
  }
  
  initializeMobileMenu() {
    const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      feather.replace();
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!this.contains(event.target)) {
        navLinks.classList.remove('mobile-open');
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);