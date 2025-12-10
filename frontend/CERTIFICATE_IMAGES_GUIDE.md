# Certificate Images Setup Guide

## How to Add Certificate Images

To enable the hover preview functionality for certificates and awards, follow these steps:

### 1. Create the Images Directory

Create the following directory structure in your `frontend/public` folder:

```
frontend/public/
  └── images/
      └── certificates/
```

### 2. Add Your Certificate Images

Place your certificate images in the `frontend/public/images/certificates/` directory with the following naming convention:

#### First Prize Awards:
- `stepcone.jpg` - Best Paper Award - Stepcone 2k25
- `asthra.jpg` - First Prize, Paper Presentation - ASTHRA 3.0
- `utkarsh.jpg` - First Prize, Paper Presentation - UTKARSH 2k25
- `saarang.jpg` - First Prize, Paper Presentation - Saarang 2K25
- `techfest.jpg` - First Prize, Web Development - Tech Fest 2024

#### Second Prize Awards:
- `synergy.jpg` - Second Prize, Paper Presentation - Synergy 2k25
- `frontend.jpg` - Second Prize, React Development - Frontend Fest
- `backend.jpg` - Second Prize, Django Project - Backend Battle
- `iot.jpg` - Second Prize, IoT Implementation - Innovation Challenge

#### Third Prize Awards:
- `poster.jpg` - Third Prize, Poster Presentation - Saarang 2K25
- `testing.jpg` - Third Prize, Software Testing - Quality Quest
- `coding.jpg` - Third Prize, Real-time Systems - Live Coding

#### Professional Certifications:
- `java.jpg` - Full-Stack Java Development
- `python.jpg` - Advanced Python & Django
- `react.jpg` - React Development Specialization
- `iot-cert.jpg` - IoT Systems Integration
- `maps.jpg` - Google Maps API Integration
- `database.jpg` - Database Design & Management
- `security.jpg` - Web Security Fundamentals
- `3d.jpg` - 3D Printing & Prototyping
- `cloud.jpg` - Cloud Computing Basics

### 3. Image Recommendations

- **Format**: JPG or PNG
- **Size**: Recommended 800x600px or larger (will be scaled automatically)
- **Quality**: High quality images for best display
- **File Size**: Optimize images to keep file sizes reasonable (< 500KB recommended)

### 4. How It Works

When you hover over any certificate or award card on the Certificates page, a preview window will appear showing the certificate image. The preview follows your mouse cursor and displays the corresponding certificate image.

### 5. Testing

After adding your images:
1. Start the development server: `npm start`
2. Navigate to the Certificates page
3. Hover over any certificate/award card
4. The image preview should appear

### Note

If an image is missing, a placeholder will be shown with instructions. The component gracefully handles missing images without breaking the UI.

