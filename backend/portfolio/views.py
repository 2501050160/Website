from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Project, ContactMessage, About
from .serializers import ProjectSerializer, ContactMessageSerializer, AboutSerializer


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for viewing projects.
    Provides list and detail views for projects.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get only featured projects"""
        featured_projects = Project.objects.filter(featured=True)
        serializer = self.get_serializer(featured_projects, many=True)
        return Response(serializer.data)


class ContactMessageViewSet(viewsets.ModelViewSet):
    """
    ViewSet for contact messages.
    Allows creating new messages (POST only for public).
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    http_method_names = ['post']  # Only allow POST for public access


class AboutViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for about section.
    Provides read-only access to about information.
    """
    queryset = About.objects.all()
    serializer_class = AboutSerializer

    def list(self, request, *args, **kwargs):
        """Return the first about entry or empty"""
        about = About.objects.first()
        if about:
            serializer = self.get_serializer(about)
            return Response(serializer.data)
        return Response({})


