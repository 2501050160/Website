from django.contrib import admin
from .models import Project, ContactMessage, About


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'featured', 'created_at', 'updated_at']
    list_filter = ['featured', 'created_at']
    search_fields = ['title', 'description', 'technologies']
    list_editable = ['featured']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'read', 'created_at']
    list_filter = ['read', 'created_at']
    search_fields = ['name', 'email', 'subject', 'message']
    list_editable = ['read']
    readonly_fields = ['created_at']


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ['title', 'experience_years', 'updated_at']
    readonly_fields = ['updated_at']


