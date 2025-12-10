"""
Django management script to populate database with resume data
Run this after migrations: python manage.py shell < populate_resume_data.py
Or run: python manage.py runscript populate_resume_data (if django-extensions is installed)
"""

import os
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from portfolio.models import About, Project
import json

def populate_data():
    # Read resume data
    resume_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'resume_data.json')
    
    if not os.path.exists(resume_path):
        print("resume_data.json not found. Please run extract_resume.py first.")
        return
    
    with open(resume_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Create or update About entry
    about, created = About.objects.get_or_create(
        id=1,
        defaults={
            'title': 'About Me',
            'description': data.get('objective', '') + ' I\'m a B.Tech graduate with experience in web development, AutoCAD, and engineering estimation.',
            'skills': ', '.join(data.get('skills', []) + ['React', 'Django', 'Python', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'Git']),
            'experience_years': 1
        }
    )
    
    if not created:
        about.description = data.get('objective', '') + ' I\'m a B.Tech graduate with experience in web development, AutoCAD, and engineering estimation.'
        about.skills = ', '.join(data.get('skills', []) + ['React', 'Django', 'Python', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'Git'])
        about.save()
    
    print(f"About entry {'created' if created else 'updated'}")
    
    # Create projects from resume
    for proj_data in data.get('projects', []):
        project, created = Project.objects.get_or_create(
            title=proj_data.get('title', ''),
            defaults={
                'description': proj_data.get('description', ''),
                'technologies': proj_data.get('technologies', ''),
                'featured': True
            }
        )
        print(f"Project '{project.title}' {'created' if created else 'already exists'}")
    
    # Add portfolio website as a project
    portfolio_project, created = Project.objects.get_or_create(
        title='Personal Portfolio Website',
        defaults={
            'description': 'A modern, responsive portfolio website built with React frontend and Django REST API backend. Features include project showcase, contact form, admin panel, and MySQL database integration.',
            'technologies': 'React, Django, MySQL, Python, JavaScript, HTML, CSS, REST API',
            'github_url': 'https://github.com',
            'featured': True
        }
    )
    print(f"Portfolio project {'created' if created else 'already exists'}")
    
    print("\nDatabase populated successfully!")
    print("You can now view the data at http://localhost:8000/admin")

if __name__ == '__main__':
    populate_data()


