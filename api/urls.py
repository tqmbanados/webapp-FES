from .views import QuestionView

from django.urls import path

urlpatterns = [
    path('', QuestionView.as_view())
]
