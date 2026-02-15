from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet,ContactAPIView,ProfileImageAPIView

router= DefaultRouter()
router.register('projects',ProjectViewSet)


urlpatterns =[
    path('',include(router.urls)),
    path('contact/', ContactAPIView.as_view()),
    path("profile-image/", ProfileImageAPIView.as_view()),

]