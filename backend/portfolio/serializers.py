from rest_framework import serializers
from .models import Project, ContactMessage, About


class ProjectSerializer(serializers.ModelSerializer):
    technologies_list = serializers.SerializerMethodField()
    
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'technologies', 'technologies_list',
                  'image', 'github_url', 'live_url', 'featured', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

    def get_technologies_list(self, obj):
        return obj.get_technologies_list()


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'subject', 'message', 'created_at']
        read_only_fields = ['created_at']


class AboutSerializer(serializers.ModelSerializer):
    skills_list = serializers.SerializerMethodField()
    
    class Meta:
        model = About
        fields = ['id', 'title', 'description', 'skills', 'skills_list',
                  'experience_years', 'image', 'updated_at']
        read_only_fields = ['updated_at']

    def get_skills_list(self, obj):
        return obj.get_skills_list()


