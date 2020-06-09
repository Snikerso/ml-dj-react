from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Image
from .serializers import ImageSerializer


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all().order_by('-uploaded')
    serializer_class = ImageSerializer


