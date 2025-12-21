// Gamata Seva - Frontend API Helper (Demo Mode - Hardcoded Database)
// This file provides the same API interface but uses local hardcoded data

// Storage keys
const TOKEN_KEY = 'gamata_seva_token';
const USER_KEY = 'gamata_seva_user';

// ====================
// Authentication Helpers
// ====================

function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}

function getUser() {
    const userStr = localStorage.getItem(USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
}

function setUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    // Also set current user in database
    if (window.DemoDatabase) {
        window.DemoDatabase.setCurrentUser(user.id);
    }
}

function removeUser() {
    localStorage.removeItem(USER_KEY);
}

function isLoggedIn() {
    return !!getToken();
}

function logout() {
    removeToken();
    removeUser();
    if (window.DemoDatabase) {
        window.DemoDatabase.logout();
    }
    window.location.href = 'index.html';
}

// ====================
// Async wrapper for synchronous database calls
// ====================

async function asyncWrap(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback());
        }, 100); // Simulate network delay
    });
}

// ====================
// Auth API Functions
// ====================

async function registerUser(name, email, mobile, password, role = 'customer') {
    return asyncWrap(() => {
        const result = window.DemoDatabase.register(name, email, mobile, password, role);
        if (result.success) {
            setToken(result.data.token);
            setUser(result.data.user);
        }
        return result;
    });
}

async function loginUser(email, password, role) {
    return asyncWrap(() => {
        const result = window.DemoDatabase.login(email, password);
        if (result.success) {
            setToken(result.data.token);
            setUser(result.data.user);
        }
        return result;
    });
}

async function getProfile() {
    return asyncWrap(() => {
        const user = getUser();
        if (!user) {
            return { success: false, message: 'Not authenticated' };
        }
        return { success: true, data: user };
    });
}

async function updateProfile(data) {
    return asyncWrap(() => {
        const user = getUser();
        if (!user) {
            return { success: false, message: 'Not authenticated' };
        }
        
        // Update user data
        const updatedUser = { ...user, ...data };
        setUser(updatedUser);
        return { success: true, data: updatedUser };
    });
}

// ====================
// Service API Functions
// ====================

async function getAllServices(filters = {}) {
    return asyncWrap(() => window.DemoDatabase.getServices(filters));
}

async function getServiceById(id) {
    return asyncWrap(() => window.DemoDatabase.getService(id));
}

async function getAllCategories() {
    return asyncWrap(() => window.DemoDatabase.getCategories());
}

async function createService(data) {
    return asyncWrap(() => window.DemoDatabase.createService(data));
}

async function updateService(id, data) {
    return asyncWrap(() => window.DemoDatabase.updateService(id, data));
}

async function deleteService(id) {
    return asyncWrap(() => window.DemoDatabase.deleteService(id));
}

async function getProviderServices() {
    return asyncWrap(() => {
        const user = getUser();
        if (!user) return { success: false, message: 'Not authenticated' };
        return window.DemoDatabase.getServices({ provider_id: user.id });
    });
}

// ====================
// Booking API Functions
// ====================

async function createBooking(data) {
    return asyncWrap(() => window.DemoDatabase.createBooking(data));
}

async function getCustomerBookings(status = null) {
    return asyncWrap(() => window.DemoDatabase.getBookings(status ? { status } : {}));
}

async function getProviderBookings(status = null) {
    return asyncWrap(() => window.DemoDatabase.getBookings(status ? { status } : {}));
}

async function getBookingById(id) {
    return asyncWrap(() => window.DemoDatabase.getBooking(id));
}

async function updateBookingStatus(id, status) {
    return asyncWrap(() => window.DemoDatabase.updateBookingStatus(id, status));
}

async function cancelBooking(id) {
    return asyncWrap(() => window.DemoDatabase.updateBookingStatus(id, 'cancelled'));
}

// ====================
// Wallet API Functions
// ====================

async function getWalletBalance() {
    return asyncWrap(() => window.DemoDatabase.getWallet());
}

async function getTransactions(type = null) {
    return asyncWrap(() => window.DemoDatabase.getTransactions());
}

async function topUpWallet(amount) {
    return asyncWrap(() => window.DemoDatabase.topUpWallet(amount));
}

async function withdrawFromWallet(amount) {
    return asyncWrap(() => window.DemoDatabase.withdrawFromWallet(amount));
}

// ====================
// Review API Functions
// ====================

async function createReview(data) {
    return asyncWrap(() => window.DemoDatabase.createReview(data.booking_id, data.rating, data.comment));
}

async function getProviderReviews(providerId) {
    return asyncWrap(() => window.DemoDatabase.getReviews(providerId));
}

async function getCustomerReviews() {
    return asyncWrap(() => {
        // Customer reviews not implemented in DemoDatabase, return empty
        return { success: true, data: [] };
    });
}

// ====================
// Favorites API Functions
// ====================

async function addFavorite(providerId) {
    return asyncWrap(() => window.DemoDatabase.addFavorite(providerId));
}

async function removeFavorite(providerId) {
    return asyncWrap(() => window.DemoDatabase.removeFavorite(providerId));
}

async function getFavorites() {
    return asyncWrap(() => window.DemoDatabase.getFavorites());
}

async function checkFavorite(providerId) {
    return asyncWrap(() => {
        const result = window.DemoDatabase.getFavorites();
        if (!result.success) return result;
        const isFavorite = result.data.some(f => f.provider_id == providerId);
        return { success: true, data: { is_favorite: isFavorite } };
    });
}

// ====================
// Admin API Functions
// ====================

async function getStatistics() {
    return asyncWrap(() => window.DemoDatabase.getStatistics());
}

async function getAllUsers(filters = {}) {
    return asyncWrap(() => window.DemoDatabase.getAllUsers());
}

async function updateUserStatus(userId, status) {
    return asyncWrap(() => window.DemoDatabase.updateUserStatus(userId, status));
}

async function getPendingVerifications() {
    return asyncWrap(() => window.DemoDatabase.getPendingVerifications());
}

async function updateVerificationStatus(userId, status) {
    return asyncWrap(() => window.DemoDatabase.updateVerificationStatus(userId, status));
}

async function getAllBookings(status = null) {
    return asyncWrap(() => window.DemoDatabase.getAllBookings());
}

async function getAllReviews(status = null) {
    return asyncWrap(() => window.DemoDatabase.getAllReviews());
}

async function updateReviewStatus(reviewId, status) {
    return asyncWrap(() => window.DemoDatabase.updateReviewStatus(reviewId, status));
}

async function getRecentActivity() {
    return asyncWrap(() => window.DemoDatabase.getRecentActivity());
}

// ====================
// UI Helper Functions
// ====================

function showLoading(element) {
    if (element) {
        element.innerHTML = '<div class="loading">⏳ Loading...</div>';
    }
}

function showError(element, message) {
    if (element) {
        element.innerHTML = `<div class="error">❌ ${message}</div>`;
    }
}

function showSuccess(element, message) {
    if (element) {
        element.innerHTML = `<div class="success">✅ ${message}</div>`;
    }
}

function formatCurrency(amount) {
    return `LKR ${parseFloat(amount).toLocaleString('en-US')}`;
}

function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatDateTime(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// ====================
// Check Authentication on Page Load
// ====================

function checkAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

function checkRole(requiredRole) {
    const user = getUser();
    if (!user || user.role !== requiredRole) {
        alert(`This page is for ${requiredRole}s only`);
        logout();
        return false;
    }
    return true;
}

// ====================
// Initialize User Display
// ====================

function displayUserInfo() {
    const user = getUser();
    if (user) {
        // Update user name displays
        document.querySelectorAll('.user-name').forEach(el => {
            el.textContent = user.name;
        });

        // Update user email displays
        document.querySelectorAll('.user-email').forEach(el => {
            el.textContent = user.email;
        });

        // Update role badge
        document.querySelectorAll('.user-role').forEach(el => {
            el.textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
        });

        // Update page title if it has welcome message
        const titleElements = document.querySelectorAll('.page-title');
        titleElements.forEach(el => {
            const currentText = el.textContent;
            if (currentText.includes('Welcome back')) {
                el.textContent = currentText.replace(/Welcome back, .*?[!👋]/, `Welcome back, ${user.name}! 👋`);
            }
        });
    }
}

// Initialize on load - sync user from localStorage to DemoDatabase
document.addEventListener('DOMContentLoaded', () => {
    const user = getUser();
    if (user && window.DemoDatabase) {
        window.DemoDatabase.setCurrentUser(user.id);
    }

    // Skip auth check on login page
    if (!window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
        if (checkAuth()) {
            displayUserInfo();
        }
    }
});
