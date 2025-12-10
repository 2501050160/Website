# Quick Start Guide

## 🚀 Fast Setup (Windows)

### Prerequisites Check
```powershell
python --version    # Should be 3.8+
node --version      # Should be 16+
mysql --version     # MySQL should be installed
```

### Step 1: Create MySQL Database
1. Open MySQL Command Line or MySQL Workbench
2. Run:
```sql
CREATE DATABASE portfolio_db;
```

### Step 2: Backend Setup (PowerShell Terminal 1)

```powershell
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
.\venv\Scripts\Activate.ps1

# If activation fails, run:
# Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Install dependencies
pip install -r requirements.txt

# Create .env file (copy from .env.example and edit)
# SECRET_KEY=your-secret-key-here
# DEBUG=True
# DB_NAME=portfolio_db
# DB_USER=root
# DB_PASSWORD=your-mysql-password
# DB_HOST=localhost
# DB_PORT=3306

# Run migrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Start server
python manage.py runserver
```

### Step 3: Frontend Setup (PowerShell Terminal 2)

```powershell
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start React app
npm start
```

### Step 4: Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/api/
- **Admin Panel**: http://localhost:8000/admin

### Step 5: Add Initial Content

1. Go to http://localhost:8000/admin
2. Login with your superuser credentials
3. Add:
   - **About** entry (your information)
   - **Projects** (your portfolio projects)

## 📝 Common Commands

### Backend
```powershell
python manage.py runserver          # Start server
python manage.py makemigrations     # Create migrations
python manage.py migrate            # Apply migrations
python manage.py createsuperuser   # Create admin user
```

### Frontend
```powershell
npm start      # Start development server
npm build      # Build for production
npm test       # Run tests
```

## ⚠️ Troubleshooting

### Virtual Environment Activation Issue
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### MySQL Connection Error
- Check MySQL service is running
- Verify credentials in `.env` file
- Ensure database exists

### Port Already in Use
- Backend: Change port in `runserver` command: `python manage.py runserver 8001`
- Frontend: React will automatically use next available port

### Module Not Found
```powershell
# Reinstall dependencies
pip install -r requirements.txt  # Backend
npm install                      # Frontend
```

## 🎯 Next Steps

1. Customize your information in components
2. Add your projects via admin panel
3. Update social media links
4. Change colors in CSS variables
5. Deploy to production (when ready)

---

**Need help?** Check the main README.md for detailed explanations!


