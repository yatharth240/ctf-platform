from rest_framework import serializers
from .models import Questions,Team


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions 
        fields = '__all__'

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class TeamFlagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['loginId','questions_solved','total_score']