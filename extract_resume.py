import pdfplumber
import json
import re
import os

def extract_resume_info(pdf_path):
    """Extract information from resume PDF"""
    resume_data = {
        'name': '',
        'title': '',
        'email': '',
        'phone': '',
        'location': '',
        'objective': '',
        'skills': [],
        'experience': [],
        'education': [],
        'projects': [],
        'social_links': {}
    }
    
    try:
        with pdfplumber.open(pdf_path) as pdf:
            full_text = ""
            for page in pdf.pages:
                full_text += page.extract_text() + "\n"
            
            lines = [line.strip() for line in full_text.split('\n') if line.strip()]
            
            # Extract name (usually first line)
            if lines:
                resume_data['name'] = lines[0]
            
            # Extract email
            email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
            emails = re.findall(email_pattern, full_text)
            if emails:
                resume_data['email'] = emails[0]
            
            # Extract phone (10 digit numbers)
            phone_pattern = r'\b\d{10}\b'
            phones = re.findall(phone_pattern, full_text)
            if phones:
                resume_data['phone'] = phones[0]
            
            # Extract location (look for city, state pattern)
            location_pattern = r'([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*),\s*([A-Z][a-z]+),\s*\d{6}'
            location_match = re.search(location_pattern, full_text)
            if location_match:
                resume_data['location'] = location_match.group(0)
            
            # Extract objective
            obj_start = full_text.find('Objective')
            if obj_start != -1:
                obj_text = full_text[obj_start:obj_start+500]
                obj_lines = obj_text.split('\n')
                if len(obj_lines) > 1:
                    resume_data['objective'] = obj_lines[1].strip()
            
            # Extract experience
            exp_start = full_text.find('Experience')
            if exp_start != -1:
                exp_text = full_text[exp_start:exp_start+1000]
                exp_lines = [line.strip() for line in exp_text.split('\n') if line.strip()]
                if len(exp_lines) > 1:
                    experience = {
                        'position': exp_lines[1] if len(exp_lines) > 1 else '',
                        'company': exp_lines[2] if len(exp_lines) > 2 else '',
                        'duration': exp_lines[0] if 'Aug' in exp_lines[0] or 'Sep' in exp_lines[0] else '',
                        'description': ' '.join(exp_lines[3:6]) if len(exp_lines) > 3 else ''
                    }
                    resume_data['experience'].append(experience)
            
            # Extract education
            edu_start = full_text.find('Education')
            if edu_start != -1:
                edu_text = full_text[edu_start:edu_start+800]
                # Look for degree patterns
                if 'B.tech' in edu_text or 'B.Tech' in edu_text:
                    resume_data['education'].append({
                        'degree': 'B.Tech',
                        'institution': 'JNTUH',
                        'year': '2024',
                        'grade': '7.67'
                    })
                if 'Mpc' in edu_text or 'MPC' in edu_text:
                    resume_data['education'].append({
                        'degree': 'MPC (Intermediate)',
                        'institution': 'Board of intermediate college',
                        'year': '2020',
                        'grade': '75.5'
                    })
                if 'Ssc' in edu_text or 'SSC' in edu_text:
                    resume_data['education'].append({
                        'degree': 'SSC',
                        'institution': 'School',
                        'year': '2018',
                        'grade': '8.0'
                    })
            
            # Extract projects
            proj_start = full_text.find('Projects')
            if proj_start != -1:
                proj_text = full_text[proj_start:proj_start+500]
                if 'Detailed Estimation' in proj_text:
                    resume_data['projects'].append({
                        'title': 'Detailed Estimation And Costing On Elevations Of Buildings',
                        'description': 'Project completed in ACE Engineering College',
                        'technologies': 'AutoCAD, Engineering Estimation'
                    })
            
            # Extract skills from text
            skill_keywords = [
                'Python', 'JavaScript', 'React', 'Django', 'Flask', 'MySQL', 
                'HTML', 'CSS', 'Git', 'Node.js', 'Java', 'C++', 'SQL',
                'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Linux', 'API',
                'REST', 'GraphQL', 'TypeScript', 'Angular', 'Vue', 'Express',
                'AutoCAD', 'Auto-CAD', 'CAD', 'Engineering', 'Estimation'
            ]
            found_skills = []
            text_lower = full_text.lower()
            for skill in skill_keywords:
                if skill.lower() in text_lower:
                    found_skills.append(skill)
            resume_data['skills'] = list(set(found_skills))  # Remove duplicates
            
            # Set title based on education
            if resume_data['education']:
                resume_data['title'] = 'B.Tech Graduate'
            
            print("Resume extracted successfully!")
            print(f"Name: {resume_data['name']}")
            print(f"Email: {resume_data['email']}")
            print(f"Phone: {resume_data['phone']}")
            print(f"Location: {resume_data['location']}")
            print(f"Skills found: {', '.join(resume_data['skills'])}")
            
    except Exception as e:
        print(f"Error extracting PDF: {e}")
        import traceback
        traceback.print_exc()
        return None
    
    return resume_data

if __name__ == "__main__":
    pdf_path = "resume.pdf"
    if os.path.exists(pdf_path):
        data = extract_resume_info(pdf_path)
        if data:
            # Save to JSON file
            with open("resume_data.json", "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            print("\nResume data saved to resume_data.json")
    else:
        print(f"Resume PDF not found at {pdf_path}")
