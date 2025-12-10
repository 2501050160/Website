from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ContactMessageViewSet, AboutViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'contact', ContactMessageViewSet, basename='contact')
router.register(r'about', AboutViewSet, basename='about')

urlpatterns = [
    path('', include(router.urls)),
]


