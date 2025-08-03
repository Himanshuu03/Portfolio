# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite showcasing professional projects, skills, certifications, and contact information.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Dark Mode Toggle**: Switch between light and dark themes with proper contrast
- **Interactive Navigation**: Smooth section transitions
- **Professional Experience**: Timeline-style experience section with technology tags
- **Project Showcase**: Featured projects with technologies and links
- **Skills Display**: Visual representation of technical skills
- **Certifications**: Professional certifications with verification
- **Contact Form**: Easy way for visitors to get in touch
- **Modern UI**: Clean, professional design with smooth animations and hover effects

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
│   ├── About.jsx       # Personal information and experience timeline
│   ├── Skills.jsx      # Technical skills display
│   ├── Projects.jsx    # Project showcase
│   ├── Certifications.jsx # Professional certifications
│   └── Contact.jsx     # Contact form
├── data/               # Static data files
│   ├── projects.js     # Project information
│   ├── certifications.js # Certification details
│   └── experience.js   # Professional experience data
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
Personal introduction and background information with professional experience timeline

### Skills
Technical skills organized by categories with visual indicators

### Projects
Featured projects

### Certifications
Professional certifications

### Contact
Contact form for professional inquiries

## 🎨 Customization

### Adding Experience
Edit `src/data/experience.js` to add your experience:
```javascript
{
  id: 4,
  title: "Your Job Title",
  company: "Company Name",
  duration: "2024 - Present",
  description: "Your job description and responsibilities.",
  technologies: ["React", "Node.js", "MongoDB", "Express"]
}
```

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

Toggle between light and dark themes using the theme switch in the header. The theme preference is maintained during the session. All sections including the experience timeline are optimized for both light and dark modes with proper contrast and readability.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For any questions or suggestions, please reach out through the contact form on the website or create an issue in this repository.

---

Built using React and Vite
