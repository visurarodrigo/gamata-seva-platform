# 🏡 Gamata Seva – ගමට සේවා  
### A Web-Based Platform Connecting Sri Lankan Micro-Entrepreneurs and Informal Workers with Local Customers

> **"Gamata Seva"** (ගමට සේවා) means **"Service to the Village"** — a digital solution to empower rural Sri Lankan communities through local economic connectivity.

This repository contains the **Software Engineering project documentation** AND a **professional UI-only front-end** for *Gamata Seva*, developed for the **CS2103 Software Engineering** course at General Sir John Kotelawala Defence University (KDU).

## 🌐 Live Demo
**🔗 https://visurarodrigo.github.io/gamata-seva-platform/**

Experience the complete UI with all three dashboards (Customer, Provider, Admin) - no installation required!

---

## 🌟 Features

### Multi-User System (UI-Only)
- **Customer Portal** - Browse services, view bookings, manage wallet (UI demonstration)
- **Service Provider Portal** - Service management, booking requests, earnings dashboard (UI demonstration)
- **Admin Portal** - User management, provider verification, platform oversight (UI demonstration)

### Key UI Components

#### For Customers 👥
- Browse and search services interface
- Booking display cards with status tracking
- Wallet balance and transaction history UI
- Favorite providers grid
- Service history table with rating options
- Recommendations section
- Quick action buttons

#### For Service Providers 🔧
- Service management cards (Add/Edit/Enable/Disable)
- Booking request cards with Accept/Decline buttons
- Schedule calendar view
- Earnings overview dashboard
- Customer reviews display
- Performance metrics cards
- Transaction history table

#### For Admins 🛡️
- User management table with filters
- Provider verification approval cards
- Review moderation interface
- Platform statistics dashboard
- Booking oversight table
- Category management table
- Recent activity feed

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
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or backend required - pure HTML/CSS/JS!

#### Installation

1. **Clone or Download the Project**
   ```bash
   git clone https://github.com/visurarodrigo/gamata-seva-platform.git
   cd gamata-seva-platform
   ```

2. **Open in Browser**
   - Simply double-click `index.html` or open it in your web browser
   - Or use a local development server (optional):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. **Access the Application**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or directly open `index.html` file in any browser

## 🔐 Demo Usage

### Login Instructions (UI-Only)
Use these roles on the login page - **any email and password will work** as this is a UI demonstration:

### Customer View
- **Role:** Select "Customer" from dropdown
- **Features:** Browse services, view bookings, manage wallet UI

### Service Provider View
- **Role:** Select "Service Provider" from dropdown
- **Features:** Service management UI, booking requests, earnings dashboard

### Admin View
- **Role:** Select "Admin" from dropdown
- **Features:** User management, provider verification, platform oversight

## 📊 UI Demonstration Data

The application displays static demonstration data including:

- **Statistics Cards** showing platform metrics
- **Service Cards** with pricing and ratings
- **Booking Cards** in various states (pending, confirmed, completed)
- **Review Cards** with customer feedback
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
- **Icons:** Unicode emojis (no external dependencies)
- **Architecture:** UI-only implementation (no backend)

## 🔧 Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-green: #2d7a3e;
    --primary-green-dark: #1f5a2c;
    --primary-green-light: #4caf50;
    /* ... more colors ... */
}
```

### Adding Content
All content is hardcoded in the HTML files for UI demonstration purposes. To modify:
- Edit service cards directly in the HTML
- Update statistics in the dashboard pages
- Modify booking data in the respective HTML files

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1440px and up)

## 🔒 Important Notes

⚠️ **This is a UI-only demonstration** - No backend functionality included.

### Current Implementation:
- ✅ Professional HTML/CSS interface
- ✅ Responsive design
- ✅ Navigation between pages
- ✅ Static demonstration data
- ✅ Form layouts (non-functional)

### For Production Use, You'll Need:
- ❌ Backend API (Node.js, Python, PHP, etc.)
- ❌ Database (MySQL, PostgreSQL, MongoDB)
- ❌ Authentication system
- ❌ Payment gateway integration
- ❌ Real-time functionality
- ❌ Security implementations (HTTPS, CSRF, etc.)
- ❌ Session management

## 🌐 Browser Support

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Opera (76+)

## 📝 Integration Points for Backend Development

When moving to production, this UI is ready for:
- [ ] REST API or GraphQL backend integration
- [ ] Database connection for dynamic data
- [ ] Authentication system implementation
- [ ] Payment gateway integration
- [ ] Real-time notifications using WebSockets
- [ ] Map integration for location services
- [ ] Chat system between customers and providers
- [ ] Email/SMS notifications
- [ ] Chart library integration (Chart.js or D3.js)
- [ ] File upload functionality (profile pictures, service images)
- [ ] Multi-language support (Sinhala, Tamil, English)
- [ ] Dark mode theme option

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is submitted as part of an academic requirement at KDU.  
All content is the intellectual property of the author unless otherwise stated.  
For educational reference only—please credit the author if used.

## 👥 Authors

### Project Team - CS2103 Software Engineering

**UI Development & Implementation:**
- **V.J.K. Rodrigo (Visura)** - Lead UI Developer
- **Janudi** - UI Developer

**Documentation & Research:**
- **Minesi** - Documentation Lead
- **Sachila** - Documentation & Research

**Project Ideation:** All team members contributed to the project concept and planning

**Institution:** General Sir John Kotelawala Defence University (KDU)  
**Course:** CS2103 Software Engineering - Semester 4

## 🙏 Acknowledgments

- Icons: Unicode Emoji
- Color Scheme: Material Design inspired
- Layout: Modern dashboard design patterns

---

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



