from django.shortcuts import render
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import ImageViewSet


router = routers.DefaultRouter()
router.register(r'images', ImageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]