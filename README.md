# 📚 Event Management System (Campus Connect)

<div align="center">
  <img src="assets/Dashboard%20(1).png" width="800" alt="Dashboard 1">
  <img src="assets/Dashboard%20(2).png" width="800" alt="Dashboard 2">
  <img src="assets/Dashboard%20(3).png" width="800" alt="Dashboard 3">
  <img src="assets/Dashboard%20(4).png" width="800" alt="Dashboard 4">
  <img src="assets/Dashboard%20(5).png" width="800" alt="Dashboard 5">
</div>


## ✨ Overview
A modern, **feature‑rich** web application that streamlines campus event management. It provides **role‑based access**, **event creation**, **registration**, **attendance tracking**, **certificate generation**, and **analytics**, all wrapped in a **visually stunning UI** with smooth animations and glass‑morphism cards.

## 🚀 Features
- **Role‑Based Access Control**
  - 🎓 *Student*: Browse events, register, download certificates.
  - 👩‍🏫 *Faculty*: Create events, manage participants, issue certificates.
  - 🛠️ *Admin*: Full system control, user management, analytics.
- **Event Lifecycle**
  - Create, approve, edit, and publish events.
  - Team or individual registration with real‑time capacity tracking.
- **Certificate System**
  - Automatic PDF generation with QR‑code verification.
  - Download and manage issued certificates.
- **User Management**
  - View, search, filter, and deactivate users.
- **Analytics & Tracking**
  - Participation stats, department breakdowns, and attendance rates.
- **Polished UI/UX**
  - Gradient backgrounds, glass‑morphism cards, responsive layout, and subtle micro‑animations.

## 🛠️ Tech Stack
- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui, Tailwind CSS Animate
- **State Management**: React Context
- **Routing**: React Router
- **PDF Generation**: jsPDF
- **QR Codes**: `qrcode` library
- **Build Tool**: Vite
- **Testing**: (Add your test framework here if any)

## 📦 Installation
```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/campus-connect.git

# Change directory
cd campus-connect

# Install dependencies
npm install

# Run development server
npm run dev
```

## ⚙️ Configuration
The app uses **localStorage** for data persistence during development. No backend is required for a quick start. For production, replace the storage layer with your preferred API.

## 📖 Usage
### Student
1. Sign up with a college email (`@klh.edu.in`).
2. Browse upcoming events.
3. Register for events and view your participation history.
4. Download certificates after event completion.

### Faculty / Admin
1. Sign up with any email.
2. Create and manage events.
3. Approve registrations and issue certificates.
4. Manage users and view detailed analytics.



## 📚 Documentation
- Code is organized under `/src` with clear separation of **components**, **contexts**, **hooks**, and **pages**.
- Tailwind configuration lives in `tailwind.config.ts` – feel free to customize the design tokens.

## 🙏 Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.


