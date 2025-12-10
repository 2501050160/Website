# Personal Portfolio Website

A modern, responsive portfolio website built with React (Frontend) and Django REST Framework (Backend) with MySQL database. This project demonstrates full-stack development with beautiful UI/UX design.

## 🚀 Tech Stack

- **Frontend**: React 18, React Router, Axios
- **Backend**: Django 4.2, Django REST Framework
- **Database**: MySQL
- **Styling**: Custom CSS with modern gradients and animations

## 📋 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Project showcase with images and links
- ✅ Contact form with backend integration
- ✅ About section with skills and experience
- ✅ Admin panel for content management
- ✅ Beautiful animations and transitions
- ✅ Modern dark theme UI

## 📁 Project Structure

```
Python Project/
├── backend/                    # Django Backend
│   ├── portfolio_backend/      # Django project settings
│   │   ├── settings.py         # Database and app configuration
│   │   ├── urls.py             # Main URL routing
│   │   └── wsgi.py             # WSGI configuration
│   ├── portfolio/              # Main app
│   │   ├── models.py           # Database models (Project, ContactMessage, About)
│   │   ├── views.py            # API viewsets
│   │   ├── serializers.py      # Data serialization
│   │   ├── admin.py            # Admin panel configuration
│   │   └── urls.py             # API endpoints
│   ├── manage.py               # Django management script
│   └── requirements.txt        # Python dependencies
│
├── frontend/                   # React Frontend
│   ├── public/                 # Static files
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── Navbar.js       # Navigation bar
│   │   │   ├── Home.js         # Home/hero section
│   │   │   ├── About.js        # About section
│   │   │   ├── Projects.js     # Projects showcase
│   │   │   ├── Contact.js      # Contact form
│   │   │   └── Footer.js        # Footer
│   │   ├── App.js              # Main app component
│   │   └── index.js            # Entry point
│   └── package.json            # Node dependencies
│
└── README.md                   # This file
```

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

1. **Python 3.8+** - [Download Python](https://www.python.org/downloads/)
2. **Node.js 16+** - [Download Node.js](https://nodejs.org/)
3. **MySQL** - [Download MySQL](https://dev.mysql.com/downloads/)
4. **Git** (optional) - [Download Git](https://git-scm.com/)

## 📦 Installation & Setup

### Step 1: Database Setup

1. **Create MySQL Database**:
   ```sql
   CREATE DATABASE portfolio_db;
   ```

2. **Note your MySQL credentials** (username, password, host, port)

### Step 2: Backend Setup (Django)

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Create a virtual environment** (recommended):
   ```bash
   # Windows
   python -m venv venv
   venv\Scripts\activate

   # Mac/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Create `.env` file** in the `backend` directory:
   ```env
   SECRET_KEY=your-secret-key-here-change-this
   DEBUG=True
   DB_NAME=portfolio_db
   DB_USER=root
   DB_PASSWORD=your-mysql-password
   DB_HOST=localhost
   DB_PORT=3306
   ```

5. **Run migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create a superuser** (for admin panel):
   ```bash
   python manage.py createsuperuser
   ```
   Follow the prompts to create an admin account.

7. **Start the Django server**:
   ```bash
   python manage.py runserver
   ```
   The backend will run on `http://localhost:8000`

### Step 3: Frontend Setup (React)

1. **Open a new terminal** and navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. **Install Node dependencies**:
   ```bash
   npm install
   ```

3. **Start the React development server**:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`

## 🎯 How to Run the Project

### Running Both Servers

You need to run both backend and frontend servers simultaneously:

1. **Terminal 1 - Backend**:
   ```bash
   cd backend
   # Activate virtual environment if not already activated
   python manage.py runserver
   ```

2. **Terminal 2 - Frontend**:
   ```bash
   cd frontend
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 📝 Admin Panel Usage

1. **Access Admin Panel**: Go to `http://localhost:8000/admin`
2. **Login** with the superuser credentials you created
3. **Add Content**:
   - **Projects**: Add your portfolio projects with images, descriptions, and links
   - **About**: Add your about information, skills, and experience
   - **Contact Messages**: View messages sent through the contact form

## 🔍 Project Explanation

### Backend Architecture (Django)

#### 1. **Models** (`portfolio/models.py`)
   - **Project Model**: Stores project information (title, description, technologies, images, URLs)
   - **ContactMessage Model**: Stores contact form submissions
   - **About Model**: Stores about section content and skills

#### 2. **Serializers** (`portfolio/serializers.py`)
   - Convert Django model instances to JSON format for API responses
   - Handle data validation and transformation

#### 3. **Views** (`portfolio/views.py`)
   - **ProjectViewSet**: Provides GET endpoints for projects
   - **ContactMessageViewSet**: Handles POST requests for contact form
   - **AboutViewSet**: Provides GET endpoint for about section

#### 4. **URLs** (`portfolio/urls.py`)
   - Defines API endpoints:
     - `/api/projects/` - List all projects
     - `/api/projects/{id}/` - Get specific project
     - `/api/projects/featured/` - Get featured projects
     - `/api/contact/` - Submit contact form
     - `/api/about/` - Get about information

#### 5. **Admin Panel** (`portfolio/admin.py`)
   - Customizes Django admin interface for easy content management
   - Allows CRUD operations on all models

### Frontend Architecture (React)

#### 1. **Component Structure**

   - **App.js**: Main component with routing setup
   - **Navbar.js**: Fixed navigation bar with smooth scrolling
   - **Home.js**: Hero section with animated typing effect
   - **About.js**: Displays about information and skills from API
   - **Projects.js**: Fetches and displays projects in a grid layout
   - **Contact.js**: Contact form with validation and API integration
   - **Footer.js**: Footer with social links

#### 2. **API Integration**

   All components use `axios` to communicate with Django backend:
   ```javascript
   // Example: Fetching projects
   const response = await axios.get('/api/projects/');
   ```

#### 3. **Styling Approach**

   - **CSS Variables**: Centralized color scheme in `index.css`
   - **Responsive Design**: Media queries for mobile, tablet, desktop
   - **Animations**: CSS keyframes for smooth transitions
   - **Modern UI**: Gradient backgrounds, glassmorphism effects

### Data Flow

1. **User visits website** → React app loads
2. **Components mount** → Fetch data from Django API
3. **Django processes request** → Queries MySQL database
4. **Data returned as JSON** → React components render
5. **User submits contact form** → POST request to Django
6. **Django saves to database** → Returns success response

## 🎨 Customization Guide

### Changing Colors

Edit CSS variables in `frontend/src/index.css`:
```css
:root {
  --primary-color: #6366f1;    /* Change primary color */
  --secondary-color: #8b5cf6;  /* Change secondary color */
  --dark-bg: #0f172a;          /* Change background */
}
```

### Adding Your Information

1. **Home Section**: Edit `frontend/src/components/Home.js`
   - Change name, title, description
   - Update social media links

2. **About Section**: Add content via Django admin or edit `frontend/src/components/About.js`

3. **Contact Info**: Edit `frontend/src/components/Contact.js`

### Adding Projects

1. Go to Django admin panel (`http://localhost:8000/admin`)
2. Click on "Projects"
3. Click "Add Project"
4. Fill in:
   - Title
   - Description
   - Technologies (comma-separated)
   - Upload image (optional)
   - GitHub URL (optional)
   - Live URL (optional)
   - Mark as featured (optional)

## 🐛 Troubleshooting

### Backend Issues

1. **MySQL Connection Error**:
   - Check MySQL is running
   - Verify database credentials in `.env`
   - Ensure database exists

2. **Migration Errors**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

3. **Port Already in Use**:
   ```bash
   python manage.py runserver 8001  # Use different port
   ```

### Frontend Issues

1. **npm install fails**:
   ```bash
   npm cache clean --force
   npm install
   ```

2. **API Connection Error**:
   - Ensure Django server is running
   - Check CORS settings in `settings.py`
   - Verify API endpoints in browser console

3. **Port 3000 in use**:
   - React will automatically suggest another port
   - Or set: `PORT=3001 npm start`

## 📚 Learning Outcomes

This project demonstrates:

1. **Frontend-Backend Integration**: React communicates with Django REST API
2. **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
3. **Database CRUD Operations**: Create, Read, Update, Delete via Django admin
4. **RESTful API Design**: Proper endpoint structure and HTTP methods
5. **State Management**: React hooks (useState, useEffect)
6. **Form Handling**: Controlled components and validation
7. **Modern CSS**: Variables, animations, gradients, responsive design

## 🔐 Security Notes

- Change `SECRET_KEY` in production
- Set `DEBUG=False` in production
- Use environment variables for sensitive data
- Implement rate limiting for contact form
- Add CSRF protection for production

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section
2. Verify all prerequisites are installed
3. Ensure both servers are running
4. Check browser console for errors

---

**Happy Coding! 🚀**


