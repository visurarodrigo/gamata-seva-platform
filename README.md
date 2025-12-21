# 🏡 Gamata Seva – ගමට සේවා  
### A Web-Based Platform Connecting Sri Lankan Micro-Entrepreneurs and Informal Workers with Local Customers

> **"Gamata Seva"** (ගමට සේවා) means **"Service to the Village"** — a digital solution to empower rural Sri Lankan communities through local economic connectivity.

This is a **fully functional client-side demo** of *Gamata Seva*, developed for the **CS2103 Software Engineering** course at General Sir John Kotelawala Defence University (KDU).

## 🚀 Quick Start

**No installation required!** Simply open `START_HERE.html` or `index.html` in any web browser.

### Demo Credentials
- **Customer**: customer@demo.com / password123
- **Provider**: provider@demo.com / password123  
- **Admin**: admin@demo.com / password123

---

## � Demo Video

Watch the platform in action! Check out our demo video to see all features and user interfaces:

**[📺 View Demo Video](Demo%20video.mp4)**

The video demonstrates:
- User registration and login
- Customer dashboard and service browsing
- Booking creation and management
- Provider dashboard and service management
- Admin dashboard and platform analytics
- All interactive features and workflows

---

## �🌟 Features

### Complete Client-Side Demo
- **✅ No Backend Required** - Works completely offline
- **✅ Real-Time Interactions** - All features work with local data
- **✅ Persistent Sessions** - Data stored in browser LocalStorage
- **✅ Interactive Charts** - Visual analytics with Chart.js
- **✅ Modern UI** - Animations, gradients, and responsive design

### Multi-User System
- **Customer Dashboard** - Browse services, create bookings, manage wallet, add favorites
- **Service Provider Dashboard** - Manage services, handle booking requests, track earnings
- **Admin Dashboard** - User management, platform analytics, review moderation

### Key Features

#### For Customers 👥
- Browse and search 20+ services across 8 categories
- Create and manage bookings with real-time status updates
- Digital wallet with top-up and transaction history
- Add favorite providers for quick access
- Rate and review completed services
- View personalized recommendations
- Track booking activity with charts

#### For Service Providers 🔧
- Create and manage service listings
- Accept/decline booking requests
- View earnings with interactive charts
- Track booking trends and service distribution
- Manage availability and schedule
- View customer reviews and ratings
- Monitor performance metrics

#### For Admins 🛡️
- Comprehensive user management
- Provider verification workflow
- Platform-wide analytics and charts
- Review moderation system
- Booking oversight and statistics
- Revenue and growth tracking
- Activity monitoring


## 🎨 Design Features

- Clean, professional green theme (#2d7a3e)
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Interactive cards and tables
- Role-based dashboard layouts
- Modern UI components (badges, stats cards, grids)
- Intuitive navigation with headers and footers

## 📁 Project Structure

```
gamata-seva-platform/
├── index.html                    # Landing page with login/register
├── customer-dashboard.html       # Customer dashboard
├── provider-dashboard.html       # Service provider dashboard
├── admin.html                    # Admin dashboard
├── css/
│   └── style.css                # Main stylesheet with green theme (25.8 KB)
├── images/                       # Images folder (ready for assets)
├── Gamata Seva - Project Report.pdf  # Full project documentation
├── README.md                     # This file
├── QUICKSTART.md                 # Quick start guide
├── PROJECT_SUMMARY.md            # Complete delivery summary
├── DEPLOYMENT.md                 # Deployment checklist
└── LICENSE                       # License file
```

## 🚀 Getting Started

### Option 1: View Live Demo (Recommended)
Simply visit: **https://visurarodrigo.github.io/gamata-seva-platform/**

### Option 2: Run Locally

#### Prerequisites
## 💻 Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Charts:** Chart.js for data visualization
- **Storage:** Browser LocalStorage for session persistence
- **Architecture:** Single Page Application (SPA) with client-side routing
- **Data:** Hardcoded JavaScript database (js/database.js)

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server, backend, or installation required!

## 🚀 Getting Started

1. **Clone or Download the Project**
   ```bash
   git clone https://github.com/visurarodrigo/gamata-seva-platform.git
   cd gamata-seva-platform
   ```

2. **Open in Browser**
   - Open `START_HERE.html` for the welcome page
   - Or directly open `index.html` to start using the app
   - No build process or dependencies needed!

3. **Optional: Use a Local Server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

## 🔐 Demo Accounts

Login with these credentials to explore different roles:

| Role | Email | Password |
|------|-------|----------|
| **Customer** | customer@demo.com | password123 |
| **Provider** | provider@demo.com | password123 |
| **Admin** | admin@demo.com | password123 |

## 📊 Demo Data

The application includes comprehensive demo data:

- **86 Users** - Customers, Providers, and Admin
- **8 Service Categories** - Cleaning, Plumbing, Electrical, Carpentry, etc.
- **20+ Services** - Active services with pricing and descriptions
- **15+ Bookings** - Various statuses (pending, confirmed, completed)
- **Reviews & Ratings** - Customer feedback and ratings
- **Transactions** - Wallet top-ups and service payments
- **Interactive Charts** - Earnings, bookings, revenue, user growth

- **Transaction Tables** with payment history
- **Calendar Views** for scheduling
- **Activity Feeds** for recent actions

## 📚 Project Documentation Overview

The main report (`Gamata Seva - Project report.pdf`) includes the following key sections:

- **Introduction** - Background and motivation for the platform
- **Project Objectives** - Clear goals addressing rural economic inclusion
- **Requirements Specification** - Functional, Non-Functional, and Domain Requirements
- **UML Diagrams & Specifications** - Use Case, Activity, Class, Sequence, and State Diagrams
- **Architectural Design** - High-level system structure and component interaction
- **Testing Plans** - How we planned to test this software
- **Business Model** - Revenue and sustainability approach

This project demonstrates a full **software development lifecycle (SDLC)** approach—from problem identification to technical modeling to **working implementation**.

## 🎯 Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Custom CSS with CSS Grid and Flexbox (25.8 KB)
- **Design:** Professional green theme (#2d7a3e)
## 📁 Project Structure

```
Gamata-Seva-Platform/
├── index.html                  # Login/Registration page
├── customer-dashboard.html     # Customer interface
├── provider-dashboard.html     # Provider interface  
├── admin.html                  # Admin panel
├── START_HERE.html            # Welcome page with quick start guide
├── css/
│   └── style.css              # Complete styling with animations
├── js/
│   ├── database.js            # In-memory database with demo data
│   └── api.js                 # API layer for data operations
├── images/                    # Image assets
├── README.md                  # This file
├── DEMO_README.md            # Detailed demo documentation
├── PROJECT_SUMMARY.md        # Project overview
└── LICENSE                    # MIT License
```

## 🔧 Customization

### Colors
Edit the CSS variables in [css/style.css](css/style.css):
```css
:root {
    --primary-green: #2d7a3e;
    --primary-green-dark: #1f5a2c;
    --secondary-blue: #4a90e2;
    /* ... more colors ... */
}
```

### Data
Modify demo data in [js/database.js](js/database.js):
- Users, services, bookings
- Categories and pricing
- Reviews and transactions

### Charts
Update chart data in the respective dashboard HTML files:
- Line charts for trends
- Bar charts for comparisons
- Pie/doughnut charts for distributions

## 📱 Responsive Design

Fully responsive across all devices:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktop (1440px+)

## ✨ Key Features Implemented

### Working Features:
- ✅ User authentication with role-based access
- ✅ Browse and search services
- ✅ Create and manage bookings
- ✅ Digital wallet with transactions
- ✅ Add/remove favorites
- ✅ Submit reviews and ratings
- ✅ Provider service management
- ✅ Admin user management
- ✅ Interactive charts and analytics
- ✅ Session persistence with LocalStorage
- ✅ Responsive mobile-first design


### For Production Use, You'll Need:
- ❌ Backend API (Node.js, Python, PHP, etc.)
- ❌ Database (MySQL, PostgreSQL, MongoDB)
- ❌ Authentication system
- ❌ Payment gateway integration
- ❌ Real-time functionality
- ❌ Security implementations (HTTPS, CSRF, etc.)
- ❌ Session management

## 🌐 Browser Support
## 🌐 Browser Support

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Opera (76+)

## 🚀 Future Enhancements

Potential production improvements:
- [ ] Backend API integration (Node.js/Python/PHP)
- [ ] Production database (PostgreSQL/MySQL)
- [ ] Email/SMS notifications
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Real-time chat system
- [ ] Push notifications
- [ ] Image upload for services
- [ ] Advanced search filters
- [ ] Mobile app (React Native/Flutter)
- [ ] Multi-language support (Sinhala, Tamil)
- [ ] Dark mode theme
- [ ] Export reports (PDF/Excel)

## 🤝 Contributing

Contributions welcome! Please submit a Pull Request or open an Issue.

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

This project is submitted as part of academic coursework at KDU.

## 👥 Authors

### Project Team - CS2103 Software Engineering

**Development Team:**
- **V.J.K. Rodrigo (Visura)** - Lead Developer & UI/UX
- **Janudi** - Frontend Developer

**Documentation Team:**
- **Minesi** - Documentation Lead
- **Sachila** - Research & Documentation

**Institution:** General Sir John Kotelawala Defence University (KDU)  
**Course:** CS2103 Software Engineering - Semester 4  
**Year:** 2025

## 🙏 Acknowledgments

- Chart.js for data visualization
- Material Design color palette
- Unicode Emoji for icons
- Modern dashboard design patterns

---

**📧 Contact:** For questions or collaboration, please open an issue on GitHub.

**⭐ Star this repo** if you found it helpful!

## 📚 Additional Documentation

- **QUICKSTART.md** - Quick start guide for immediate use
- **PROJECT_SUMMARY.md** - Complete delivery summary with all features
- **DEPLOYMENT.md** - Deployment checklist and hosting options
- **Gamata Seva - Project Report.pdf** - Full academic documentation

---

## 🎯 Project Status

**Current Phase:** ✅ UI Complete  
**Implementation:** HTML5 + CSS3 + Vanilla JavaScript  
**Type:** Front-end only (no backend)  
**Purpose:** UI demonstration, design mockup, development planning

---

**Note:** This is a UI-only demonstration project. All displayed data is static and hardcoded in the HTML files for presentation purposes.

---

Made with ❤️ for KDU Software Engineering Course  
**Last Updated:** November 29, 2025 



