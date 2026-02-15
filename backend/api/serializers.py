from rest_framework import serializers
from .models import Projects,ProfileImage

class ProjectSerializer(serializers.ModelSerializer):
    tag = serializers.SerializerMethodField()
    class Meta:
        model = Projects
        fields = '__all__'

    def get_tag(self, obj):
        return obj.tag.split(',')
    


class ProfileImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileImage
        fields = "__all__"
