class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1a202c;
          color: white;
          padding: 3rem 2rem;
          margin-top: auto;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-section h3 {
          color: #00a8e8;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: #cbd5e0;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #00a8e8;
        }
        
        .footer-bottom {
          border-top: 1px solid #2d3748;
          padding-top: 2rem;
          margin-top: 2rem;
          text-align: center;
          color: #a0aec0;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-link {
          color: #cbd5e0;
          transition: color 0.3s ease;
        }
        
        .social-link:hover {
          color: #00a8e8;
        }
        
        @media (max-width: 768px) {
          footer {
            padding: 2rem 1rem;
          text-align: center;
          }
        }
      </style>
      
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>IoT Water Solutions Pro</h3>
            <p>Giải pháp nước thông minh hàng đầu Việt Nam với công nghệ IoT tiên tiến.</p>
            <div class="social-links">
              <a href="#" class="social-link"><i data-feather="facebook"></i></a>
              <a href="#" class="social-link"><i data-feather="twitter"></i></a>
            </div>
          </div>
          
          <div class="footer-section">
            <h3>Sản Phẩm</h3>
            <ul class="footer-links">
              <li><a href="/products/datalogger.html">Data Logger</a></li>
              <li><a href="/products/pressure-regulator.html">Bộ Điều Áp</a></li>
              <li><a href="/products/amr.html">Thiết Bị Đọc Tự Động</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Liên Hệ</h3>
            <ul class="footer-links">
              <li><i data-feather="phone"></i> +84 123 456 789</li>
              <li><i data-feather="mail"></i> info@iotwaterpro.vn</li>
              <li><i data-feather="map-pin"></i> Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 IoT Water Solutions Pro. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);