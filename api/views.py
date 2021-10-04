from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import Question
from .serializers import QuestionSerializer

class QuestionView(generics.CreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
