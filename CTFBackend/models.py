from django.db import models
import uuid

# Create your models here.
class Questions(models.Model):

  
    Difficulty_Choices = (
        ('Low','Low'),
        ('Medium','Medium'),
        ('High','High'),
    )
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(null=False,max_length= 30)
    description = models.TextField(null = False)
    flag = models.CharField(null = False,max_length=50)
    category = models.CharField(null = False,max_length=30)
    points = models.IntegerField(null = False, default=0)
    difficulty_level = models.CharField(max_length=200,choices=Difficulty_Choices)

class Team(models.Model):
    
    loginId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=30,unique=True)
    questions_solved = models.IntegerField(default=0,null=False)
    total_score = models.IntegerField(default = 0,null =  False)
    loginPass = models.CharField(max_length=30,null = False) 
