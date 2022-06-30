from django.urls import path
from .views import index,TeamDetails,QuestionDetails


urlpatterns=  [
    path('',index,name="index"),
    path('teamapi/',TeamDetails.as_view(),name="TeamView"),
    path('questionapi/',QuestionDetails.as_view(),name="Questions")
]
