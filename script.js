// Shared JavaScript across all pages

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('IoT Water Solutions Pro - Application loaded');
    initializeApp();
});

// Application initialization
function initializeApp() {
    // Add loading animations
    addLoadingAnimations();
    
    // Initialize form handlers
    initializeFormHandlers();
    
    // Initialize data fetching
    initializeDataFetching();
}

// Loading animations for better UX
function addLoadingAnimations() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left');
    elements.forEach(element => {
        element.style.opacity = '0';
    });
    
    // Trigger animations after page load
    setTimeout(() => {
        elements.forEach(element => {
            element.style.opacity = '1';
        });
    }, 100);
}

// Form handling for admin and contact forms
function initializeFormHandlers() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
}

// Handle form submissions
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Show loading state
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = '<div class="loading-spinner mx-auto"></div>';
    }
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        showAlert('Form submitted successfully!', 'success');
        form.reset();
        
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.innerHTML = 'Submit';
        }
    }, 2000);
}

// Data fetching for product information
function initializeDataFetching() {
    // This would be replaced with actual API calls
    console.log('Initializing data fetching...');
}

// Alert system for user feedback
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert-${type} fixed top-4 right-4 z-50 max-w-sm`;
    alertDiv.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4">
            <i data-feather="x" class="w-4 h-4"></i>
        </div>
    `;
    
    document.body.appendChild(alertDiv);
    feather.replace();
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentElement) {
            alertDiv.remove();
        }
    }, 5000);
}

// Price formatting for Vietnamese Dong
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Role-based access control simulation
function checkUserRole() {
    const userRole = localStorage.getItem('userRole') || 'guest';
    return userRole;
}

// Authentication helper functions
function isAuthenticated() {
    return localStorage.getItem('isAuthenticated') === 'true';
}

function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = '/login.html';
        return false;
    }
    return true;
}

// Product data management
const productAPI = {
    async getProducts() {
        // Simulate API call
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        name: 'Data Logger',
                        price: 12500000,
                        description: 'Thiết bị ghi nhận dữ liệu nước thông minh với độ chính xác cao',
                        category: 'datalogger',
                        image: 'http://static.photos/technology/640x360/101'
                    },
                    {
                        id: 2,
                        name: 'Bộ Điều Áp Tự Động',
                        price: 8750000,
                        description: 'Điều chỉnh áp lực nước tự động với công nghệ IoT tiên tiến',
                        category: 'pressure-regulator',
                        image: 'http://static.photos/industry/640x360/102'
                    },
                    {
                        id: 3,
                        name: 'Thiết Bị Đọc Tự Động',
                        price: 15200000,
                        description: 'Giải pháp đọc đồng hồ nước tự động từ xa',
                        category: 'amr',
                        image: 'http://static.photos/science/640x360/103'
                    }
                ]);
            }, 500);
        });
    },
    
    async updateProduct(productId, updates) {
        // Simulate API call
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ success: true, message: 'Product updated successfully' });
            }, 500);
        });
    }
};

// Audit logging
function logAction(action, details) {
    const timestamp = new Date().toISOString();
    const user = localStorage.getItem('username') || 'unknown';
    
    const logEntry = {
        timestamp,
        user,
        action,
        details
    };
    
    // In a real application, this would be sent to a logging service
    console.log('AUDIT LOG:', logEntry);
}

// Export functions for use in other modules
window.productAPI = productAPI;
window.formatPrice = formatPrice;
window.showAlert = showAlert;
window.logAction = logAction;