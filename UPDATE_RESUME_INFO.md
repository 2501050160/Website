# Resume Information Updated

## ✅ What Was Updated

I've extracted information from your resume PDF and updated the portfolio website with your details:

### Personal Information
- **Name**: T. Vamsi Krishna
- **Email**: Vamsi826258@gmail.com
- **Phone**: +91 9390752169
- **Location**: Hyderabad, Telangana, India
- **Title**: B.Tech Graduate / Full Stack Developer

### Home Page Updates
- Updated name to "T. Vamsi Krishna"
- Updated description with your objective
- Updated email link in social icons

### About Page Updates
- Added your objective statement
- Updated skills list (including AutoCAD, Engineering Estimation, CAD)
- Added Education section with:
  - B.Tech from JNTUH (2024, CGPA: 7.67)
  - MPC (Intermediate) from Board of Intermediate College (2020, 75.5%)
  - SSC (2018, CGPA: 8.0)
- Added Experience section:
  - Student Intern at Advaita Gloval IT Labs Pvt Ltd (Aug 2023 - Sep 2023)
  - Worked on Auto-CAD Software
  - Completed 2D House plan project

### Contact Page Updates
- Updated email: Vamsi826258@gmail.com
- Updated phone: +91 9390752169
- Updated location: Hyderabad, Telangana, India

### Footer Updates
- Updated email link

## 📋 Database Configuration

✅ **Database is already configured as MySQL** in `backend/portfolio_backend/settings.py`

The database settings use:
- Engine: `django.db.backends.mysql`
- Database name: `portfolio_db` (configurable via .env)
- Connection via environment variables

## 🚀 Next Steps

1. **Create MySQL Database**:
   ```sql
   CREATE DATABASE portfolio_db;
   ```

2. **Configure .env file** in `backend/` directory:
   ```env
   SECRET_KEY=your-secret-key-here
   DEBUG=True
   DB_NAME=portfolio_db
   DB_USER=root
   DB_PASSWORD=your-mysql-password
   DB_HOST=localhost
   DB_PORT=3306
   ```

3. **Run migrations**:
   ```bash
   cd backend
   python manage.py migrate
   ```

4. **Populate database with resume data** (optional):
   ```bash
   python manage_resume_data.py
   ```
   This will add your About information and projects to the database.

5. **Create admin user**:
   ```bash
   python manage.py createsuperuser
   ```

6. **Start servers**:
   - Backend: `python manage.py runserver`
   - Frontend: `npm start` (in frontend directory)

## 📝 Files Created/Modified

### Created:
- `extract_resume.py` - Script to extract data from PDF
- `resume_data.json` - Extracted resume data in JSON format
- `backend/manage_resume_data.py` - Script to populate database
- `UPDATE_RESUME_INFO.md` - This file

### Modified:
- `frontend/src/components/Home.js` - Updated with your name and info
- `frontend/src/components/About.js` - Added education and experience sections
- `frontend/src/components/About.css` - Added styles for new sections
- `frontend/src/components/Contact.js` - Updated contact information
- `frontend/src/components/Footer.js` - Updated email
- `backend/requirements.txt` - Added PDF extraction libraries

## 🎯 Additional Projects

You can add more projects through the Django admin panel at `http://localhost:8000/admin` after logging in with your superuser credentials.

The portfolio website project is automatically added when you run `manage_resume_data.py`.

---

**All resume information has been successfully integrated into your portfolio website!** 🎉


