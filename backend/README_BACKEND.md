# Backend API Documentation

## API Endpoints

### Projects

- **GET** `/api/projects/` - List all projects
- **GET** `/api/projects/{id}/` - Get specific project
- **GET** `/api/projects/featured/` - Get featured projects only

**Response Example**:
```json
{
  "id": 1,
  "title": "Project Name",
  "description": "Project description",
  "technologies": "React, Django, MySQL",
  "technologies_list": ["React", "Django", "MySQL"],
  "image": "/media/projects/image.jpg",
  "github_url": "https://github.com/...",
  "live_url": "https://example.com",
  "featured": true,
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}
```

### Contact

- **POST** `/api/contact/` - Submit contact form

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "Your message here"
}
```

**Response**:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "Your message here",
  "created_at": "2024-01-01T00:00:00Z"
}
```

### About

- **GET** `/api/about/` - Get about information

**Response Example**:
```json
{
  "id": 1,
  "title": "About Me",
  "description": "About description...",
  "skills": "React, Django, Python",
  "skills_list": ["React", "Django", "Python"],
  "experience_years": 2,
  "image": "/media/about/image.jpg",
  "updated_at": "2024-01-01T00:00:00Z"
}
```


