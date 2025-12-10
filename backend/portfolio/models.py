from django.db import models
from django.utils import timezone


class Project(models.Model):
    """Model to store portfolio projects"""
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.CharField(max_length=500, help_text="Comma-separated list of technologies")
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    live_url = models.URLField(blank=True, null=True)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def get_technologies_list(self):
        """Returns technologies as a list"""
        return [tech.strip() for tech in self.technologies.split(',')]


class ContactMessage(models.Model):
    """Model to store contact form messages"""
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.subject}"


class About(models.Model):
    """Model to store about section content"""
    title = models.CharField(max_length=200, default="About Me")
    description = models.TextField()
    skills = models.TextField(help_text="Comma-separated list of skills")
    experience_years = models.IntegerField(default=0)
    image = models.ImageField(upload_to='about/', blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "About"

    def __str__(self):
        return self.title

    def get_skills_list(self):
        """Returns skills as a list"""
        return [skill.strip() for skill in self.skills.split(',')]


