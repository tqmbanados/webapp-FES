from django.db import models

# Create your models here.
class Question(models.Model):
    prompt = models.CharField(max_length=128, unique=False)
    answer = models.CharField(max_length=512)
