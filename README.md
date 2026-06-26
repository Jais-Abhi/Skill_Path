# SkillPath - AI-Powered Learning Platform

A modern, responsive React.js frontend for an AI-powered learning platform that helps users discover learning paths for different skills and provides personalized guidance.

## Project Overview

SkillPath is an innovative learning platform designed to democratize education through AI-guided skill development. The platform creates personalized learning paths tailored to each learner's unique needs, pace, and goals.

**Author:** Abhishek Kumar  
**Email:** abhijaiswal7479@gmail.com

## Features

- **🤖 AI-Powered Learning Guidance** - Advanced AI analyzes learning patterns and creates personalized paths
- **🎯 Personalized Skill Learning** - Customized learning modules based on individual goals
- **💬 Interactive AI Chat Support** - 24/7 AI mentor available to answer questions
- **✨ Beginner-Friendly Experience** - No prior experience needed, perfect for all skill levels
- **📱 Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **⚡ Modern UI** - Clean and intuitive interface with Tailwind CSS

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation bar with responsive menu
│   ├── Footer.jsx           # Footer with links and social media
│   ├── HeroSection.jsx      # Hero banner section
│   ├── FeatureCard.jsx      # Reusable feature card component
│   ├── TestimonialSection.jsx  # User testimonials display
│   ├── CTABanner.jsx        # Call-to-action banner
│   └── Layout.jsx           # Common layout wrapper with Navbar & Footer
├── pages/
│   ├── Landing.jsx          # Home page
│   ├── About.jsx            # About page
│   ├── Contact.jsx          # Contact form page
│   └── NotFound.jsx         # 404 error page
├── App.jsx                  # Main app component with routing
├── main.jsx                 # Entry point
└── index.css                # Tailwind CSS imports
```

## Pages

### Landing Page (/)
- Modern hero section with CTA buttons
- Feature cards highlighting platform benefits
- User testimonials section
- Call-to-action banner
- Responsive design for all screen sizes

### About Page (/about)
- Platform mission and purpose
- Key features overview
- Company vision
- Detailed information about SkillPath

### Contact Page (/contact)
- Functional contact form with validation
- Controlled form inputs (Name, Email, Subject, Message)
- Success message display
- Alternative contact methods
- Form submission handling

### Not Found Page (*)
- Custom 404 error page
- Friendly error message
- Quick navigation back to home

## Technologies Used

### Frontend Framework
- **React 19.2.0** - JavaScript library for building user interfaces
- **React Router 8.0.1** - Client-side routing with Outlet pattern for layout management

### Styling
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **PostCSS 8.5.15** - CSS processing
- **Autoprefixer 10.5.2** - Vendor prefixes

### Icons
- **React Icons 5.0.1** - Icon library with multiple icon sets

### Build Tools
- **Vite 7.3.1** - Next-generation frontend build tool
- **@vitejs/plugin-react 5.1.1** - React plugin for Vite

### Development Tools
- **ESLint 9.39.1** - Code quality and style checking
- **eslint-plugin-react-hooks** - ESLint rules for React hooks
- **eslint-plugin-react-refresh** - React Refresh support

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd SkillPath
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Project

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Build for Production
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Lint Code
Check for code quality issues:
```bash
npm run lint
```

## Key Components

### Layout Component
- Wraps all pages with Navbar and Footer
- Uses React Router's Outlet pattern
- Ensures consistent layout across all pages

### Navbar Component
- Responsive sticky navigation
- Mobile menu toggle
- Logo and branding
- Quick links to all pages
- CTA button

### Footer Component
- Multi-column layout
- Brand information
- Quick links
- Social media links
- Copyright and legal links

### Pages Architecture
- Clean separation of concerns
- Reusable component composition
- Controlled form handling in Contact page
- Proper error handling and 404 page

## Code Quality

- ✅ Clean, human-written code
- ✅ Proper component organization
- ✅ Meaningful variable names
- ✅ No unnecessary complexity
- ✅ Beginner-friendly codebase
- ✅ Responsive design patterns
- ✅ Accessibility considerations

## Design Features

- **Color Palette**: Blue and purple gradients with modern styling
- **Typography**: Clear hierarchy with proper font sizes
- **Spacing**: Consistent padding and margins
- **Shadows**: Soft, subtle shadows for depth
- **Rounded Corners**: Modern rounded UI elements
- **Hover Effects**: Smooth transitions and interactive feedback
- **Mobile First**: Responsive design principles throughout

## Form Handling

The Contact page implements:
- **Controlled Components**: All inputs are controlled with React state
- **Validation**: Required field validation before submission
- **Prevent Default**: Form submission prevents page reload
- **Success Feedback**: Clear success message after submission
- **User Experience**: Auto-reset form after submission

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization

- Lazy loading with React Router
- Optimized images and icons
- CSS minification with Tailwind
- Fast refresh with Vite
- Code splitting capabilities

## Future Enhancements

Potential features for future development:
- Backend API integration
- User authentication
- Database for learning data
- AI chatbot implementation
- User profiles and progress tracking
- Interactive lessons and quizzes

## Important Notes

- This is a **frontend-only** project
- No backend, database, or authentication is implemented
- The AI functionality is a concept demonstration
- Ready for backend integration when needed

## Contributing

This project is maintained by Abhishek Kumar.

## License

This project is available for personal and educational use.

## Contact

For questions or inquiries about this project:

**Author:** Abhishek Kumar  
**Email:** abhijaiswal7479@gmail.com

---

**Last Updated:** June 2026  
**Built with ❤️ using React and Tailwind CSS**
