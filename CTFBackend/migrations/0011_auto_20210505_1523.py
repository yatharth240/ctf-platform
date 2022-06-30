# Generated by Django 3.0.7 on 2021-05-05 09:53

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('CTFBackend', '0010_auto_20210505_1513'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questions',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='team',
            name='loginId',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='team',
            name='name',
            field=models.CharField(max_length=30, unique=True),
        ),
    ]