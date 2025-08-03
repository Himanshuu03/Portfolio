# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite showcasing professional projects, skills, certifications, and contact information.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Dark Mode Toggle**: Switch between light and dark themes
- **Interactive Navigation**: Smooth section transitions
- **Project Showcase**: Featured projects with technologies and links
- **Skills Display**: Visual representation of technical skills
- **Certifications**: Professional certifications with verification
- **Contact Form**: Easy way for visitors to get in touch
- **Modern UI**: Clean, professional design with smooth animations

## 🛠️ Technologies Used

- **Frontend**: React 19.1.0, Vite 7.0.4
- **Styling**: CSS3 with custom animations
- **Build Tool**: Vite for fast development and optimized builds
- **Linting**: ESLint with React-specific rules
- **Icons**: SVG icons and emoji for visual elements

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation and theme toggle
│   ├── About.jsx       # Personal information
│   ├── Skills.jsx      # Technical skills display
│   ├── Projects.jsx    # Project showcase
│   ├── Certifications.jsx # Professional certifications
│   └── Contact.jsx     # Contact form
├── data/               # Static data files
│   ├── projects.js     # Project information
│   └── certifications.js # Certification details
├── assets/             # Static assets
└── App.jsx             # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📋 Sections

### About
Personal introduction and background information

### Skills
Technical skills organized by categories with visual indicators

### Projects
Featured projects including:
- E-Commerce Platform (React, Node.js, MongoDB)
- Task Management App (React, Firebase, Material-UI)
- Weather Dashboard (JavaScript, Chart.js)
- Portfolio Website (React, CSS3, Vite)
- Blog Platform (Next.js, PostgreSQL, Prisma)
- Chat Application (React, Socket.io, Node.js)

### Certifications
Professional certifications from:
- AWS Certified Solutions Architect
- React Developer Certification (Meta)
- Node.js Backend Development (Coursera)
- Python for Data Science (DataCamp)
- UI/UX Design Fundamentals (Google)
- DevOps Engineering (Microsoft)

### Contact
Contact form for professional inquiries

## 🎨 Customization

### Adding New Projects
Edit `src/data/projects.js` to add your projects:
```javascript
{
  id: 7,
  title: 'Your Project',
  description: 'Project description',
  technologies: ['React', 'Node.js'],
  image: '🚀',
  liveUrl: 'https://your-project.com',
  githubUrl: 'https://github.com/your-username/project',
  featured: true
}
```

### Adding Certifications
Edit `src/data/certifications.js` to add your certifications:
```javascript
{
  id: 7,
  title: 'Your Certification',
  issuer: 'Issuing Organization',
  date: '2024',
  credentialId: 'CERT-123456',
  image: '🏆',
  category: 'Category',
  description: 'Certification description',
  verified: true
}
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌙 Dark Mode

Toggle between light and dark themes using the theme switch in the header. The theme preference is maintained during the session.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For any questions or suggestions, please reach out through the contact form on the website or create an issue in this repository.

---

Built with ❤️ using React and Vite
