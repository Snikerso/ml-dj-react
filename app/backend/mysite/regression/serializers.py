from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer
from .models import Image




class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id','title']
        
