# Asset Management System (Igloo)

> A modern, ERP-ready Asset Management System designed to improve asset visibility, traceability, warranty management, and operational efficiency through standardized Asset Identification Numbers (AIN) and QR Code technology.

---

## 📖 Overview

The **Asset Management System (AMS)** is a web-based as well as mobile application developed to digitally manage freezer assets throughout their entire lifecycle.

Every asset is assigned a unique **Asset Identification Number (AIN)** and an associated **QR Code**, allowing users to quickly identify, locate, track, and manage assets by simply scanning the QR code.

The system centralizes asset information, simplifies maintenance and warranty tracking, and provides a scalable foundation for future digital asset management initiatives.

---

## 🎯 Project Objectives

* Improve asset visibility across the organization
* Enable end-to-end asset traceability
* Simplify warranty management
* Digitize maintenance records
* Reduce manual data entry
* Support faster asset identification using QR Codes
* Build an ERP-friendly asset database
* Improve reporting and operational efficiency

---

## ✨ Key Features

### Asset Management

* Add new assets
* Update asset information
* Delete assets
* View complete asset details
* Search assets instantly

### Asset Identification

* Unique numeric Asset Identification Number (AIN)
* Automatic AIN generation (optional)
* QR Code generation for every asset
* QR Code scanning support

### Warranty Management

* Warranty start & expiry date
* Warranty status tracking
* Expired warranty alerts (future enhancement)

### Maintenance Management

* Maintenance history
* Service records
* Last maintenance date
* Next maintenance schedule

### Asset Tracking

* Current location
* Asset status
* Department allocation
* Assigned employee (optional)

### Dashboard

* Total Assets
* Active Assets
* Assets Under Maintenance
* Warranty Expiring

### Authentication

* Secure Login
* Logout
* Session Management
* Role-based access (future enhancement)

---

## 🛠 Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* C# is primarily built on Microsoft’s .NET ecosystem, using the powerful ASP.NET Core framework to build scalable, high-performance web APIs and microservices

### Database

* MySQL

### Other Technologies

* QR Code Generator
* QR Code Scanner
* Git
* GitHub

---

## 📂 Project Structure

```
Asset-Management-System/

│── login.html
│── login.css
│── login.js
│── home.html
│── home.css
│── home.js
.
.
⏳ Upcoming

│── README.md
```

---

## 🗃 Database Information

Each asset stores information such as:

* Asset Identification Number (AIN)
* QR Code
* Serial Number
* Asset Name
* Brand
* Model
* Category
* Purchase Date
* Supplier
* Location
* Department
* Warranty Start Date
* Warranty Expiry Date
* Asset Status
* Maintenance History
* Remarks

---

## 🔄 Asset Lifecycle

```
Asset Registration
        │
        ▼
Generate Asset ID (AIN)
        │
        ▼
Generate QR Code
        │
        ▼
Assign Asset
        │
        ▼
Track & Monitor
        │
        ▼
Maintenance
        │
        ▼
Warranty Monitoring
        │
        ▼
Reporting
        │
        ▼
Asset Retirement
```

---

## 🚀 Future Enhancements

* Mobile application
* QR Code scanning using camera
* Asset transfer module
* Maintenance scheduling
* Email notifications
* Warranty expiry reminders
* Preventive maintenance planning
* Export reports (PDF & Excel)
* Barcode support
* ERP integration
* Audit logs
* Role-based permissions
* Analytics dashboard
* Dark mode

---

## 💻 Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/Asset-Management-System.git
```

2. Open the project folder.

3. Import the SQL database into MySQL.

4. Configure the database connection.

5. Start your local server (e.g., XAMPP).

6. Open the application in your browser.

---

## 📸 Screenshots

Add screenshots here after completing the project.

* Login Page
* Dashboard
* Asset List
* Add Asset
* Asset Details
* QR Code View

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## 📄 License

This project is intended for educational and portfolio purposes unless otherwise specified.

---

## 👨‍💻 Author

**Sakib Al-Hasan**

Frontend Developer | Backend Learner | Software Engineering Enthusiast

---

## ⭐ Project Vision

This project aims to demonstrate how digital asset management can simplify business operations through standardized identification, QR Code technology, and centralized data management. By replacing manual tracking with an efficient digital workflow, the system improves accuracy, traceability, and operational efficiency while providing a scalable foundation for future enterprise solutions.
