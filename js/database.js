// Hardcoded Demo Database for Gamata Seva Platform
// This file contains all data in memory for demo purposes

const DemoDatabase = (function() {
    'use strict';

    // Initialize data storage
    let currentUserId = null;
    let nextBookingId = 101;
    let nextReviewId = 51;
    let nextTransactionId = 101;

    // Users data
    const users = [
        { id: 1, name: 'Admin User', email: 'admin@demo.com', mobile: '+94771234567', password: 'password123', role: 'admin', status: 'active', avatar: null, created_at: '2025-01-01' },
        { id: 2, name: 'John Doe', email: 'customer@demo.com', mobile: '+94771234568', password: 'password123', role: 'customer', status: 'active', avatar: null, created_at: '2025-01-02' },
        { id: 3, name: 'Sarah Johnson', email: 'sarah@example.com', mobile: '+94771234569', password: 'password123', role: 'customer', status: 'active', avatar: null, created_at: '2025-01-03' },
        { id: 4, name: 'Michael Brown', email: 'michael@example.com', mobile: '+94771234570', password: 'password123', role: 'customer', status: 'active', avatar: null, created_at: '2025-01-04' },
        { id: 5, name: 'Emily Davis', email: 'emily@example.com', mobile: '+94771234580', password: 'password123', role: 'customer', status: 'active', avatar: null, created_at: '2025-01-05' },
        { id: 6, name: 'David Wilson', email: 'david@example.com', mobile: '+94771234581', password: 'password123', role: 'customer', status: 'active', avatar: null, created_at: '2025-01-06' },
        { id: 7, name: 'Nimal Perera', email: 'provider@demo.com', mobile: '+94771234571', password: 'password123', role: 'provider', status: 'active', avatar: null, created_at: '2025-01-07' }
    ];

    // Add more providers (10 per category)
    const providerData = [
        // Home Cleaning
        { name: 'Kamal Silva', email: 'kamal.cleaning@example.com', mobile: '+94771234572', category: 1 },
        { name: 'Sunil Fernando', email: 'sunil.clean@example.com', mobile: '+94771234573', category: 1 },
        { name: 'Chaminda Dias', email: 'chaminda.clean@example.com', mobile: '+94771234574', category: 1 },
        { name: 'Ruwan Bandara', email: 'ruwan.cleaning@example.com', mobile: '+94771234575', category: 1 },
        { name: 'Priyanka Jayasinghe', email: 'priyanka.clean@example.com', mobile: '+94771234576', category: 1 },
        { name: 'Sandun Wickramasinghe', email: 'sandun.clean@example.com', mobile: '+94771234577', category: 1 },
        { name: 'Lakshmi Rajapaksa', email: 'lakshmi.clean@example.com', mobile: '+94771234578', category: 1 },
        { name: 'Mahesh Gunawardena', email: 'mahesh.clean@example.com', mobile: '+94771234579', category: 1 },
        { name: 'Dilani Perera', email: 'dilani.clean@example.com', mobile: '+94771234590', category: 1 },
        // Plumbing
        { name: 'Ravi Kumar', email: 'ravi.plumb@example.com', mobile: '+94771234591', category: 2 },
        { name: 'Ajith Mendis', email: 'ajith.plumb@example.com', mobile: '+94771234592', category: 2 },
        { name: 'Pradeep Silva', email: 'pradeep.plumb@example.com', mobile: '+94771234593', category: 2 },
        { name: 'Nuwan Fernando', email: 'nuwan.plumb@example.com', mobile: '+94771234594', category: 2 },
        { name: 'Thilak Perera', email: 'thilak.plumb@example.com', mobile: '+94771234595', category: 2 },
        { name: 'Anura Jayawardena', email: 'anura.plumb@example.com', mobile: '+94771234596', category: 2 },
        { name: 'Buddhika Dias', email: 'buddhika.plumb@example.com', mobile: '+94771234597', category: 2 },
        { name: 'Gayan Bandara', email: 'gayan.plumb@example.com', mobile: '+94771234598', category: 2 },
        { name: 'Hasitha Silva', email: 'hasitha.plumb@example.com', mobile: '+94771234599', category: 2 },
        { name: 'Indika Kumara', email: 'indika.plumb@example.com', mobile: '+94771234600', category: 2 },
        // Add more categories...
    ];

    let userId = 8;
    providerData.forEach((provider, index) => {
        users.push({
            id: userId++,
            name: provider.name,
            email: provider.email,
            mobile: provider.mobile,
            password: 'password123',
            role: 'provider',
            status: 'active',
            avatar: null,
            created_at: `2025-01-${10 + index}`
        });
    });

    // Categories
    const categories = [
        { id: 1, name: 'Home Cleaning', description: 'Professional home cleaning services', icon: '🧹', status: 'active' },
        { id: 2, name: 'Plumbing', description: 'Plumbing repair and installation', icon: '🔧', status: 'active' },
        { id: 3, name: 'Electrical', description: 'Electrical services and repairs', icon: '⚡', status: 'active' },
        { id: 4, name: 'Carpentry', description: 'Furniture and carpentry work', icon: '🪚', status: 'active' },
        { id: 5, name: 'Painting', description: 'House painting services', icon: '🎨', status: 'active' },
        { id: 6, name: 'Gardening', description: 'Garden maintenance and landscaping', icon: '🌿', status: 'active' },
        { id: 7, name: 'AC Repair', description: 'Air conditioner service and repair', icon: '❄️', status: 'active' },
        { id: 8, name: 'Tutoring', description: 'Home tutoring services', icon: '📚', status: 'active' }
    ];

    // Provider profiles
    const providerProfiles = [];
    const cities = ['Colombo', 'Gampaha', 'Kandy', 'Negombo', 'Galle', 'Matara', 'Jaffna', 'Kurunegala'];
    const districts = ['Colombo', 'Gampaha', 'Kandy', 'Gampaha', 'Galle', 'Matara', 'Jaffna', 'Kurunegala'];
    
    for (let i = 0; i < providerData.length + 1; i++) {
        const userId = 7 + i;
        const cityIndex = i % cities.length;
        providerProfiles.push({
            id: i + 1,
            user_id: userId,
            bio: 'Experienced professional with quality service',
            address: `No. ${10 + i}, Main Street`,
            city: cities[cityIndex],
            district: districts[cityIndex],
            verification_status: i % 5 === 0 ? 'pending' : 'verified',
            verification_documents: null,
            rating: (4.0 + Math.random() * 1.0).toFixed(1),
            total_reviews: Math.floor(Math.random() * 50) + 5,
            total_earnings: Math.floor(Math.random() * 200000) + 50000,
            completed_jobs: Math.floor(Math.random() * 80) + 10,
            created_at: `2025-01-${10 + i}`
        });
    }

    // Services
    const services = [
        { id: 1, provider_id: 7, category_id: 1, title: 'House Deep Cleaning', description: 'Complete house cleaning including all rooms', price: 3500, price_unit: 'per service', duration: 180, location: 'Colombo 05', city: 'Colombo', status: 'active', image_url: null },
        { id: 2, provider_id: 7, category_id: 1, title: 'Office Cleaning', description: 'Professional office cleaning service', price: 2500, price_unit: 'per service', duration: 120, location: 'Colombo 05', city: 'Colombo', status: 'active', image_url: null },
        { id: 3, provider_id: 8, category_id: 1, title: 'Carpet Cleaning', description: 'Deep carpet wash and cleaning', price: 1500, price_unit: 'per service', duration: 90, location: 'Gampaha', city: 'Gampaha', status: 'active', image_url: null },
        { id: 4, provider_id: 8, category_id: 1, title: 'Window Cleaning', description: 'All windows professional cleaning', price: 1000, price_unit: 'per service', duration: 60, location: 'Gampaha', city: 'Gampaha', status: 'active', image_url: null },
        { id: 5, provider_id: 9, category_id: 1, title: 'Kitchen Deep Clean', description: 'Complete kitchen sanitation', price: 2000, price_unit: 'per service', duration: 120, location: 'Kandy', city: 'Kandy', status: 'active', image_url: null },
        { id: 6, provider_id: 17, category_id: 2, title: 'Plumbing Repairs', description: 'Fix leaks, unclog drains, pipe repairs', price: 2000, price_unit: 'per hour', duration: 60, location: 'Colombo', city: 'Colombo', status: 'active', image_url: null },
        { id: 7, provider_id: 17, category_id: 2, title: 'Bathroom Installation', description: 'Complete bathroom plumbing installation', price: 15000, price_unit: 'per service', duration: 480, location: 'Colombo', city: 'Colombo', status: 'active', image_url: null },
        { id: 8, provider_id: 18, category_id: 2, title: 'Kitchen Sink Install', description: 'Professional sink installation', price: 3000, price_unit: 'per service', duration: 120, location: 'Gampaha', city: 'Gampaha', status: 'active', image_url: null },
        { id: 9, provider_id: 19, category_id: 3, title: 'Electrical Wiring', description: 'House rewiring and installations', price: 5000, price_unit: 'per service', duration: 240, location: 'Kandy', city: 'Kandy', status: 'active', image_url: null },
        { id: 10, provider_id: 19, category_id: 3, title: 'Appliance Repair', description: 'Fix electrical appliances', price: 1500, price_unit: 'per hour', duration: 60, location: 'Kandy', city: 'Kandy', status: 'active', image_url: null },
        { id: 11, provider_id: 20, category_id: 4, title: 'Custom Furniture', description: 'Made-to-order furniture', price: 25000, price_unit: 'per service', duration: 720, location: 'Negombo', city: 'Negombo', status: 'active', image_url: null },
        { id: 12, provider_id: 20, category_id: 4, title: 'Furniture Repair', description: 'Restore old furniture', price: 3000, price_unit: 'per service', duration: 180, location: 'Negombo', city: 'Negombo', status: 'active', image_url: null },
        { id: 13, provider_id: 21, category_id: 5, title: 'House Painting', description: 'Interior and exterior painting', price: 35000, price_unit: 'per service', duration: 960, location: 'Colombo 07', city: 'Colombo', status: 'active', image_url: null },
        { id: 14, provider_id: 21, category_id: 5, title: 'Wall Painting', description: 'Single room wall painting', price: 8000, price_unit: 'per service', duration: 240, location: 'Colombo 07', city: 'Colombo', status: 'active', image_url: null },
        { id: 15, provider_id: 22, category_id: 6, title: 'Garden Maintenance', description: 'Regular garden care', price: 2500, price_unit: 'per service', duration: 120, location: 'Galle', city: 'Galle', status: 'active', image_url: null },
        { id: 16, provider_id: 22, category_id: 6, title: 'Lawn Mowing', description: 'Professional grass cutting', price: 1500, price_unit: 'per service', duration: 60, location: 'Galle', city: 'Galle', status: 'active', image_url: null },
        { id: 17, provider_id: 23, category_id: 7, title: 'AC Installation', description: 'New AC setup and installation', price: 5000, price_unit: 'per service', duration: 180, location: 'Matara', city: 'Matara', status: 'active', image_url: null },
        { id: 18, provider_id: 23, category_id: 7, title: 'AC Servicing', description: 'Regular AC maintenance', price: 1500, price_unit: 'per service', duration: 60, location: 'Matara', city: 'Matara', status: 'active', image_url: null },
        { id: 19, provider_id: 24, category_id: 8, title: 'Math Tutoring', description: 'Mathematics lessons all levels', price: 1500, price_unit: 'per hour', duration: 60, location: 'Jaffna', city: 'Jaffna', status: 'active', image_url: null },
        { id: 20, provider_id: 24, category_id: 8, title: 'Science Tutoring', description: 'Science classes for students', price: 1500, price_unit: 'per hour', duration: 60, location: 'Jaffna', city: 'Jaffna', status: 'active', image_url: null }
    ];

    // Bookings
    const bookings = [
        { id: 1, customer_id: 2, provider_id: 7, service_id: 1, booking_date: '2025-12-22', booking_time: '10:00', location: 'No. 45, Galle Road, Colombo 05', notes: 'Please bring supplies', status: 'accepted', price: 3500, payment_status: 'paid', created_at: '2025-12-20' },
        { id: 2, customer_id: 2, provider_id: 7, service_id: 2, booking_date: '2025-12-23', booking_time: '14:00', location: 'No. 12, Office Complex, Colombo 03', notes: null, status: 'completed', price: 2500, payment_status: 'paid', created_at: '2025-12-19' },
        { id: 3, customer_id: 2, provider_id: 17, service_id: 6, booking_date: '2025-12-20', booking_time: '09:00', location: 'No. 78, Main Street, Colombo', notes: 'Kitchen sink leak', status: 'completed', price: 2000, payment_status: 'paid', created_at: '2025-12-18' },
        { id: 4, customer_id: 2, provider_id: 17, service_id: 7, booking_date: '2025-12-21', booking_time: '11:00', location: 'No. 23, Temple Road, Colombo', notes: null, status: 'accepted', price: 15000, payment_status: 'paid', created_at: '2025-12-18' },
        { id: 5, customer_id: 2, provider_id: 19, service_id: 9, booking_date: '2025-12-19', booking_time: '08:00', location: 'No. 56, Ward Place, Colombo', notes: 'Full house rewiring', status: 'completed', price: 5000, payment_status: 'paid', created_at: '2025-12-17' },
        { id: 6, customer_id: 2, provider_id: 19, service_id: 10, booking_date: '2025-12-24', booking_time: '15:00', location: 'No. 89, Lake Road, Colombo', notes: 'Refrigerator repair', status: 'pending', price: 1500, payment_status: 'paid', created_at: '2025-12-20' },
        { id: 7, customer_id: 2, provider_id: 20, service_id: 11, booking_date: '2025-12-25', booking_time: '10:00', location: 'No. 34, Park Avenue, Negombo', notes: 'Custom dining table', status: 'accepted', price: 25000, payment_status: 'paid', created_at: '2025-12-19' },
        { id: 8, customer_id: 2, provider_id: 20, service_id: 12, booking_date: '2025-12-18', booking_time: '13:00', location: 'No. 67, Station Road, Negombo', notes: 'Old chair repair', status: 'completed', price: 3000, payment_status: 'paid', created_at: '2025-12-16' },
        { id: 9, customer_id: 2, provider_id: 21, service_id: 13, booking_date: '2025-12-26', booking_time: '09:00', location: 'No. 45, Market Street, Colombo', notes: 'Living room painting', status: 'pending', price: 35000, payment_status: 'paid', created_at: '2025-12-20' },
        { id: 10, customer_id: 2, provider_id: 21, service_id: 14, booking_date: '2025-12-17', booking_time: '11:00', location: 'No. 88, School Lane, Colombo', notes: 'Bedroom painting', status: 'completed', price: 8000, payment_status: 'paid', created_at: '2025-12-15' },
        { id: 11, customer_id: 2, provider_id: 22, service_id: 15, booking_date: '2025-12-27', booking_time: '08:00', location: 'No. 99, Garden Road, Galle', notes: 'Garden redesign', status: 'pending', price: 2500, payment_status: 'paid', created_at: '2025-12-20' },
        { id: 12, customer_id: 2, provider_id: 22, service_id: 16, booking_date: '2025-12-16', booking_time: '10:00', location: 'No. 12, Beach Road, Galle', notes: 'Weekly lawn mowing', status: 'completed', price: 1500, payment_status: 'paid', created_at: '2025-12-14' },
        { id: 13, customer_id: 2, provider_id: 23, service_id: 17, booking_date: '2025-12-28', booking_time: '14:00', location: 'No. 45, Hospital Road, Matara', notes: 'New AC installation', status: 'pending', price: 5000, payment_status: 'paid', created_at: '2025-12-20' },
        { id: 14, customer_id: 2, provider_id: 23, service_id: 18, booking_date: '2025-12-15', booking_time: '09:00', location: 'No. 78, Main Road, Matara', notes: 'AC maintenance', status: 'completed', price: 1500, payment_status: 'paid', created_at: '2025-12-13' },
        { id: 15, customer_id: 2, provider_id: 24, service_id: 19, booking_date: '2025-12-29', booking_time: '16:00', location: 'No. 23, Temple Lane, Jaffna', notes: 'Math tutoring for son', status: 'accepted', price: 1500, payment_status: 'paid', created_at: '2025-12-20' },
        { id: 16, customer_id: 3, provider_id: 8, service_id: 3, booking_date: '2025-12-22', booking_time: '10:00', location: 'No. 55, Hill Street, Gampaha', notes: null, status: 'accepted', price: 1500, payment_status: 'paid', created_at: '2025-12-20' },
        { id: 17, customer_id: 3, provider_id: 18, service_id: 8, booking_date: '2025-12-23', booking_time: '14:00', location: 'No. 66, Lake Road, Gampaha', notes: null, status: 'completed', price: 3000, payment_status: 'paid', created_at: '2025-12-19' }
    ];

    // Wallets
    const wallets = {};
    users.forEach(user => {
        wallets[user.id] = {
            user_id: user.id,
            balance: user.role === 'customer' || user.role === 'admin' ? 50000 : 10000
        };
    });

    // Transactions
    const transactions = [
        { id: 1, user_id: 2, booking_id: null, type: 'topup', amount: 50000, description: 'Initial wallet top-up', status: 'completed', created_at: '2025-12-01' },
        { id: 2, user_id: 2, booking_id: 1, type: 'debit', amount: 3500, description: 'Payment for House Deep Cleaning', status: 'completed', created_at: '2025-12-20' },
        { id: 3, user_id: 2, booking_id: 2, type: 'debit', amount: 2500, description: 'Payment for Office Cleaning', status: 'completed', created_at: '2025-12-19' },
        { id: 4, user_id: 2, booking_id: 3, type: 'debit', amount: 2000, description: 'Payment for Plumbing Repairs', status: 'completed', created_at: '2025-12-18' },
        { id: 5, user_id: 7, booking_id: 1, type: 'credit', amount: 3150, description: 'Earned from House Deep Cleaning (10% fee)', status: 'completed', created_at: '2025-12-20' },
        { id: 6, user_id: 7, booking_id: 2, type: 'credit', amount: 2250, description: 'Earned from Office Cleaning (10% fee)', status: 'completed', created_at: '2025-12-19' }
    ];

    // Reviews
    const reviews = [
        { id: 1, booking_id: 2, customer_id: 2, provider_id: 7, rating: 5, comment: 'Excellent service! Very professional and thorough cleaning.', status: 'approved', created_at: '2025-12-20' },
        { id: 2, booking_id: 3, customer_id: 2, provider_id: 17, rating: 5, comment: 'Great work! Fixed the plumbing issue quickly.', status: 'approved', created_at: '2025-12-19' },
        { id: 3, booking_id: 5, customer_id: 2, provider_id: 19, rating: 5, comment: 'Professional electrical work. Highly recommended!', status: 'approved', created_at: '2025-12-18' },
        { id: 4, booking_id: 8, customer_id: 2, provider_id: 20, rating: 4, comment: 'Good furniture repair work.', status: 'approved', created_at: '2025-12-17' },
        { id: 5, booking_id: 10, customer_id: 2, provider_id: 21, rating: 5, comment: 'Beautiful painting! Room looks amazing.', status: 'approved', created_at: '2025-12-16' },
        { id: 6, booking_id: 12, customer_id: 2, provider_id: 22, rating: 5, comment: 'Lawn looks perfect. Great service!', status: 'approved', created_at: '2025-12-15' },
        { id: 7, booking_id: 14, customer_id: 2, provider_id: 23, rating: 4, comment: 'AC working perfectly now.', status: 'approved', created_at: '2025-12-14' },
        { id: 8, booking_id: 17, customer_id: 3, provider_id: 18, rating: 5, comment: 'Excellent plumbing work!', status: 'approved', created_at: '2025-12-20' }
    ];

    // Favorites
    const favorites = [
        { id: 1, customer_id: 2, provider_id: 7, created_at: '2025-12-10' },
        { id: 2, customer_id: 2, provider_id: 17, created_at: '2025-12-11' },
        { id: 3, customer_id: 2, provider_id: 19, created_at: '2025-12-12' },
        { id: 4, customer_id: 2, provider_id: 20, created_at: '2025-12-13' },
        { id: 5, customer_id: 2, provider_id: 21, created_at: '2025-12-14' },
        { id: 6, customer_id: 3, provider_id: 8, created_at: '2025-12-15' },
        { id: 7, customer_id: 3, provider_id: 18, created_at: '2025-12-16' }
    ];

    // Activity log
    const activityLog = [
        { id: 1, user_id: 2, action: 'booking_created', details: 'Created booking #1', created_at: '2025-12-20' },
        { id: 2, user_id: 7, action: 'booking_accepted', details: 'Accepted booking #1', created_at: '2025-12-20' },
        { id: 3, user_id: 2, action: 'review_submitted', details: 'Submitted review for booking #2', created_at: '2025-12-20' }
    ];

    // Public API
    return {
        // Authentication
        login: function(email, password) {
            const user = users.find(u => u.email === email && u.password === password);
            if (!user) {
                return { success: false, message: 'Invalid credentials' };
            }
            if (user.status !== 'active') {
                return { success: false, message: 'Account is not active' };
            }
            currentUserId = user.id;
            const { password: _, ...userWithoutPassword } = user;
            return { success: true, data: { user: userWithoutPassword, token: 'demo-token-' + user.id } };
        },

        register: function(name, email, mobile, password, role = 'customer') {
            if (users.find(u => u.email === email)) {
                return { success: false, message: 'Email already exists' };
            }
            const newUser = {
                id: users.length + 1,
                name,
                email,
                mobile,
                password,
                role,
                status: 'active',
                avatar: null,
                created_at: new Date().toISOString().split('T')[0]
            };
            users.push(newUser);
            wallets[newUser.id] = { user_id: newUser.id, balance: 0 };
            const { password: _, ...userWithoutPassword } = newUser;
            return { success: true, data: { user: userWithoutPassword, token: 'demo-token-' + newUser.id } };
        },

        getCurrentUser: function() {
            if (!currentUserId) return null;
            const user = users.find(u => u.id === currentUserId);
            if (!user) return null;
            const { password: _, ...userWithoutPassword } = user;
            return userWithoutPassword;
        },

        setCurrentUser: function(userId) {
            currentUserId = userId;
        },

        logout: function() {
            currentUserId = null;
        },

        // Services
        getServices: function(filters = {}) {
            let filtered = [...services];
            if (filters.category_id) {
                filtered = filtered.filter(s => s.category_id == filters.category_id);
            }
            if (filters.city) {
                filtered = filtered.filter(s => s.city.toLowerCase().includes(filters.city.toLowerCase()));
            }
            if (filters.search) {
                filtered = filtered.filter(s => 
                    s.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                    s.description.toLowerCase().includes(filters.search.toLowerCase())
                );
            }
            if (filters.provider_id) {
                filtered = filtered.filter(s => s.provider_id == filters.provider_id);
            }
            if (filters.status) {
                filtered = filtered.filter(s => s.status === filters.status);
            }
            return { success: true, data: filtered };
        },

        getService: function(id) {
            const service = services.find(s => s.id == id);
            if (!service) return { success: false, message: 'Service not found' };
            return { success: true, data: service };
        },

        createService: function(data) {
            const newService = {
                id: services.length + 1,
                provider_id: currentUserId,
                category_id: data.category_id,
                title: data.title,
                description: data.description,
                price: data.price,
                price_unit: data.price_unit || 'per service',
                duration: data.duration,
                location: data.location,
                city: data.city,
                status: 'active',
                image_url: data.image_url || null
            };
            services.push(newService);
            return { success: true, data: newService };
        },

        updateService: function(id, data) {
            const index = services.findIndex(s => s.id == id);
            if (index === -1) return { success: false, message: 'Service not found' };
            if (services[index].provider_id !== currentUserId) {
                return { success: false, message: 'Unauthorized' };
            }
            services[index] = { ...services[index], ...data };
            return { success: true, data: services[index] };
        },

        deleteService: function(id) {
            const index = services.findIndex(s => s.id == id);
            if (index === -1) return { success: false, message: 'Service not found' };
            if (services[index].provider_id !== currentUserId) {
                return { success: false, message: 'Unauthorized' };
            }
            services.splice(index, 1);
            return { success: true, message: 'Service deleted' };
        },

        // Bookings
        getBookings: function(filters = {}) {
            let filtered = [...bookings];
            const user = this.getCurrentUser();
            if (!user) return { success: false, message: 'Not authenticated' };

            if (user.role === 'customer') {
                filtered = filtered.filter(b => b.customer_id === user.id);
            } else if (user.role === 'provider') {
                filtered = filtered.filter(b => b.provider_id === user.id);
            }

            if (filters.status) {
                filtered = filtered.filter(b => b.status === filters.status);
            }

            // Add service and user details
            return {
                success: true,
                data: filtered.map(b => {
                    const service = services.find(s => s.id === b.service_id);
                    const customer = users.find(u => u.id === b.customer_id);
                    const provider = users.find(u => u.id === b.provider_id);
                    return {
                        ...b,
                        service_title: service ? service.title : 'Unknown',
                        customer_name: customer ? customer.name : 'Unknown',
                        provider_name: provider ? provider.name : 'Unknown'
                    };
                })
            };
        },

        getBooking: function(id) {
            const booking = bookings.find(b => b.id == id);
            if (!booking) return { success: false, message: 'Booking not found' };
            const service = services.find(s => s.id === booking.service_id);
            const customer = users.find(u => u.id === booking.customer_id);
            const provider = users.find(u => u.id === booking.provider_id);
            return {
                success: true,
                data: {
                    ...booking,
                    service_title: service ? service.title : 'Unknown',
                    customer_name: customer ? customer.name : 'Unknown',
                    provider_name: provider ? provider.name : 'Unknown'
                }
            };
        },

        createBooking: function(data) {
            const user = this.getCurrentUser();
            if (!user || user.role !== 'customer') {
                return { success: false, message: 'Only customers can create bookings' };
            }

            const service = services.find(s => s.id == data.service_id);
            if (!service) return { success: false, message: 'Service not found' };

            // Check wallet balance
            if (wallets[user.id].balance < service.price) {
                return { success: false, message: 'Insufficient wallet balance' };
            }

            const newBooking = {
                id: nextBookingId++,
                customer_id: user.id,
                provider_id: service.provider_id,
                service_id: data.service_id,
                booking_date: data.booking_date,
                booking_time: data.booking_time,
                location: data.location,
                notes: data.notes || null,
                status: 'pending',
                price: service.price,
                payment_status: 'paid',
                created_at: new Date().toISOString().split('T')[0]
            };

            bookings.push(newBooking);

            // Deduct from wallet
            wallets[user.id].balance -= service.price;

            // Add transaction
            transactions.push({
                id: nextTransactionId++,
                user_id: user.id,
                booking_id: newBooking.id,
                type: 'debit',
                amount: service.price,
                description: `Payment for ${service.title}`,
                status: 'completed',
                created_at: new Date().toISOString().split('T')[0]
            });

            return { success: true, data: newBooking };
        },

        updateBookingStatus: function(id, status) {
            const index = bookings.findIndex(b => b.id == id);
            if (index === -1) return { success: false, message: 'Booking not found' };

            const user = this.getCurrentUser();
            const booking = bookings[index];

            if (user.role === 'provider' && booking.provider_id !== user.id) {
                return { success: false, message: 'Unauthorized' };
            }

            const oldStatus = booking.status;
            bookings[index].status = status;

            // Handle payment on completion
            if (status === 'completed' && oldStatus !== 'completed') {
                const platformFee = booking.price * 0.1;
                const providerAmount = booking.price - platformFee;
                wallets[booking.provider_id].balance += providerAmount;

                transactions.push({
                    id: nextTransactionId++,
                    user_id: booking.provider_id,
                    booking_id: booking.id,
                    type: 'credit',
                    amount: providerAmount,
                    description: `Earned from booking #${booking.id} (10% platform fee)`,
                    status: 'completed',
                    created_at: new Date().toISOString().split('T')[0]
                });
            }

            // Handle refund on cancellation/rejection
            if ((status === 'cancelled' || status === 'rejected') && booking.payment_status === 'paid') {
                wallets[booking.customer_id].balance += booking.price;

                transactions.push({
                    id: nextTransactionId++,
                    user_id: booking.customer_id,
                    booking_id: booking.id,
                    type: 'credit',
                    amount: booking.price,
                    description: `Refund for cancelled booking #${booking.id}`,
                    status: 'completed',
                    created_at: new Date().toISOString().split('T')[0]
                });
            }

            return { success: true, data: bookings[index] };
        },

        // Wallet
        getWallet: function() {
            const user = this.getCurrentUser();
            if (!user) return { success: false, message: 'Not authenticated' };
            return { success: true, data: wallets[user.id] };
        },

        getTransactions: function() {
            const user = this.getCurrentUser();
            if (!user) return { success: false, message: 'Not authenticated' };
            const userTransactions = transactions.filter(t => t.user_id === user.id);
            return { success: true, data: userTransactions };
        },

        topUpWallet: function(amount) {
            const user = this.getCurrentUser();
            if (!user) return { success: false, message: 'Not authenticated' };
            
            wallets[user.id].balance += amount;

            transactions.push({
                id: nextTransactionId++,
                user_id: user.id,
                booking_id: null,
                type: 'topup',
                amount: amount,
                description: 'Wallet top-up',
                status: 'completed',
                created_at: new Date().toISOString().split('T')[0]
            });

            return { success: true, data: wallets[user.id] };
        },

        withdrawFromWallet: function(amount) {
            const user = this.getCurrentUser();
            if (!user || user.role !== 'provider') {
                return { success: false, message: 'Only providers can withdraw' };
            }

            if (wallets[user.id].balance < amount) {
                return { success: false, message: 'Insufficient balance' };
            }

            wallets[user.id].balance -= amount;

            transactions.push({
                id: nextTransactionId++,
                user_id: user.id,
                booking_id: null,
                type: 'withdrawal',
                amount: amount,
                description: 'Wallet withdrawal',
                status: 'completed',
                created_at: new Date().toISOString().split('T')[0]
            });

            return { success: true, data: wallets[user.id] };
        },

        // Reviews
        getReviews: function(providerId) {
            const filtered = reviews.filter(r => r.provider_id == providerId && r.status === 'approved');
            return {
                success: true,
                data: filtered.map(r => {
                    const customer = users.find(u => u.id === r.customer_id);
                    return { ...r, customer_name: customer ? customer.name : 'Unknown' };
                })
            };
        },

        createReview: function(bookingId, rating, comment) {
            const user = this.getCurrentUser();
            if (!user || user.role !== 'customer') {
                return { success: false, message: 'Only customers can review' };
            }

            const booking = bookings.find(b => b.id == bookingId);
            if (!booking) return { success: false, message: 'Booking not found' };
            if (booking.customer_id !== user.id) {
                return { success: false, message: 'Unauthorized' };
            }
            if (booking.status !== 'completed') {
                return { success: false, message: 'Can only review completed bookings' };
            }

            if (reviews.find(r => r.booking_id == bookingId)) {
                return { success: false, message: 'Already reviewed' };
            }

            const newReview = {
                id: nextReviewId++,
                booking_id: bookingId,
                customer_id: user.id,
                provider_id: booking.provider_id,
                rating: rating,
                comment: comment,
                status: 'approved',
                created_at: new Date().toISOString().split('T')[0]
            };

            reviews.push(newReview);

            // Update provider rating
            const providerReviews = reviews.filter(r => r.provider_id === booking.provider_id);
            const avgRating = providerReviews.reduce((sum, r) => sum + r.rating, 0) / providerReviews.length;
            const profile = providerProfiles.find(p => p.user_id === booking.provider_id);
            if (profile) {
                profile.rating = avgRating.toFixed(1);
                profile.total_reviews = providerReviews.length;
            }

            return { success: true, data: newReview };
        },

        // Favorites
        getFavorites: function() {
            const user = this.getCurrentUser();
            if (!user || user.role !== 'customer') {
                return { success: false, message: 'Only customers have favorites' };
            }

            const userFavorites = favorites.filter(f => f.customer_id === user.id);
            return {
                success: true,
                data: userFavorites.map(f => {
                    const provider = users.find(u => u.id === f.provider_id);
                    const profile = providerProfiles.find(p => p.user_id === f.provider_id);
                    return {
                        ...f,
                        provider_name: provider ? provider.name : 'Unknown',
                        provider_email: provider ? provider.email : '',
                        rating: profile ? profile.rating : 0,
                        city: profile ? profile.city : ''
                    };
                })
            };
        },

        addFavorite: function(providerId) {
            const user = this.getCurrentUser();
            if (!user || user.role !== 'customer') {
                return { success: false, message: 'Only customers can add favorites' };
            }

            if (favorites.find(f => f.customer_id === user.id && f.provider_id == providerId)) {
                return { success: false, message: 'Already in favorites' };
            }

            const newFavorite = {
                id: favorites.length + 1,
                customer_id: user.id,
                provider_id: providerId,
                created_at: new Date().toISOString().split('T')[0]
            };

            favorites.push(newFavorite);
            return { success: true, data: newFavorite };
        },

        removeFavorite: function(providerId) {
            const user = this.getCurrentUser();
            if (!user) return { success: false, message: 'Not authenticated' };

            const index = favorites.findIndex(f => f.customer_id === user.id && f.provider_id == providerId);
            if (index === -1) return { success: false, message: 'Favorite not found' };

            favorites.splice(index, 1);
            return { success: true, message: 'Removed from favorites' };
        },

        // Categories
        getCategories: function() {
            return { success: true, data: categories };
        },

        // Admin functions
        getStatistics: function() {
            const user = this.getCurrentUser();
            if (!user || user.role !== 'admin') {
                return { success: false, message: 'Admin only' };
            }

            const stats = {
                users: {
                    total: users.length,
                    active_providers: users.filter(u => u.role === 'provider' && u.status === 'active').length,
                    customers: users.filter(u => u.role === 'customer').length
                },
                bookings: {
                    total: bookings.length,
                    pending: bookings.filter(b => b.status === 'pending').length,
                    accepted: bookings.filter(b => b.status === 'accepted').length,
                    completed: bookings.filter(b => b.status === 'completed').length
                },
                revenue: {
                    total: bookings.filter(b => b.payment_status === 'paid').reduce((sum, b) => sum + b.price * 0.1, 0)
                },
                pending: {
                    verifications: providerProfiles.filter(p => p.verification_status === 'pending').length,
                    flagged_reviews: reviews.filter(r => r.status === 'flagged').length
                },
                platform_rating: reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0
            };

            return { success: true, data: stats };
        },

        getAllUsers: function() {
            const user = this.getCurrentUser();
            if (!user || user.role !== 'admin') {
                return { success: false, message: 'Admin only' };
            }
            return {
                success: true,
                data: users.map(u => {
                    const { password: _, ...userWithoutPassword } = u;
                    return userWithoutPassword;
                })
            };
        },

        updateUserStatus: function(userId, status) {
            const admin = this.getCurrentUser();
            if (!admin || admin.role !== 'admin') {
                return { success: false, message: 'Admin only' };
            }

            const user = users.find(u => u.id == userId);
            if (!user) return { success: false, message: 'User not found' };

            user.status = status;
            return { success: true, data: user };
        },

        getPendingVerifications: function() {
            const user = this.getCurrentUser();
            if (!user || user.role !== 'admin') {
                return { success: false, message: 'Admin only' };
            }

            const pending = providerProfiles.filter(p => p.verification_status === 'pending');
            return {
                success: true,
                data: pending.map(p => {
                    const provider = users.find(u => u.id === p.user_id);
                    return { ...p, ...provider };
                })
            };
        },

        updateVerificationStatus: function(userId, status) {
            const admin = this.getCurrentUser();
            if (!admin || admin.role !== 'admin') {
                return { success: false, message: 'Admin only' };
            }

            const profile = providerProfiles.find(p => p.user_id == userId);
            if (!profile) return { success: false, message: 'Profile not found' };

            profile.verification_status = status;
            return { success: true, data: profile };
        },

        getAllBookings: function() {
            const user = this.getCurrentUser();
            if (!user || user.role !== 'admin') {
                return { success: false, message: 'Admin only' };
            }

            return {
                success: true,
                data: bookings.map(b => {
                    const service = services.find(s => s.id === b.service_id);
                    const customer = users.find(u => u.id === b.customer_id);
                    const provider = users.find(u => u.id === b.provider_id);
                    return {
                        ...b,
                        service_title: service ? service.title : 'Unknown',
                        customer_name: customer ? customer.name : 'Unknown',
                        provider_name: provider ? provider.name : 'Unknown'
                    };
                })
            };
        },

        getAllReviews: function() {
            const user = this.getCurrentUser();
            if (!user || user.role !== 'admin') {
                return { success: false, message: 'Admin only' };
            }

            return {
                success: true,
                data: reviews.map(r => {
                    const customer = users.find(u => u.id === r.customer_id);
                    const provider = users.find(u => u.id === r.provider_id);
                    return {
                        ...r,
                        customer_name: customer ? customer.name : 'Unknown',
                        provider_name: provider ? provider.name : 'Unknown'
                    };
                })
            };
        },

        updateReviewStatus: function(reviewId, status) {
            const admin = this.getCurrentUser();
            if (!admin || admin.role !== 'admin') {
                return { success: false, message: 'Admin only' };
            }

            const review = reviews.find(r => r.id == reviewId);
            if (!review) return { success: false, message: 'Review not found' };

            review.status = status;
            return { success: true, data: review };
        },

        getRecentActivity: function() {
            const user = this.getCurrentUser();
            if (!user || user.role !== 'admin') {
                return { success: false, message: 'Admin only' };
            }

            return {
                success: true,
                data: activityLog.slice(-20).reverse().map(a => {
                    const actUser = users.find(u => u.id === a.user_id);
                    return { ...a, user_name: actUser ? actUser.name : 'System' };
                })
            };
        },

        // Provider profiles
        getProviderProfile: function(userId) {
            const profile = providerProfiles.find(p => p.user_id == userId);
            if (!profile) return { success: false, message: 'Profile not found' };

            const user = users.find(u => u.id == userId);
            return { success: true, data: { ...profile, ...user } };
        },

        // Get provider with services
        getProviderWithServices: function(providerId) {
            const provider = users.find(u => u.id == providerId);
            const profile = providerProfiles.find(p => p.user_id == providerId);
            const providerServices = services.filter(s => s.provider_id == providerId);
            const providerReviews = reviews.filter(r => r.provider_id == providerId && r.status === 'approved');

            if (!provider || !profile) {
                return { success: false, message: 'Provider not found' };
            }

            return {
                success: true,
                data: {
                    ...provider,
                    ...profile,
                    services: providerServices,
                    reviews: providerReviews.map(r => {
                        const customer = users.find(u => u.id === r.customer_id);
                        return { ...r, customer_name: customer ? customer.name : 'Unknown' };
                    })
                }
            };
        }
    };
})();

// Make it globally accessible
window.DemoDatabase = DemoDatabase;
