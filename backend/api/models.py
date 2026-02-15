from django.db import models

# Create your models here.
class Projects(models.Model):
    title = models.CharField(max_length=80)
    description = models.TextField()
    image = models.ImageField(upload_to="projects/", null= True, blank= True)
    git = models.URLField()
    link = models.URLField(blank=True, null=True)
    tag = models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return self.title
    

class ProfileImage(models.Model):
    image = models.ImageField(upload_to="profile/")

    def __str__(self):
        return "Profile Image"
