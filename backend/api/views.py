from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
from .models import Projects,ProfileImage
from .serializers import ProjectSerializer,ProfileImageSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings


# Create your views here.

class ProjectViewSet(ModelViewSet):
    queryset = Projects.objects.all().order_by("-id")
    serializer_class = ProjectSerializer


class ContactAPIView(APIView):
    def post(self, request):
        name = request.data.get("name")
        email = request.data.get("email")
        subject = request.data.get("subject")
        message = request.data.get("message")

        full_message = f"""
        New Contact Message

        Name: {name}
        Email: {email}

        Message:
        {message}
        """

        send_mail(
            subject,
            full_message,
            settings.EMAIL_HOST_USER,
            [settings.EMAIL_HOST_USER],
            fail_silently=False,
        )

        return Response(
            {"message": "Email sent successfully"},
            status=status.HTTP_200_OK,
        )
    
class ProfileImageAPIView(ListAPIView):
    queryset = ProfileImage.objects.all()
    serializer_class = ProfileImageSerializer