# Generated by Django 3.0.7 on 2021-05-05 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CTFBackend', '0007_auto_20210427_1705'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='id',
        ),
        migrations.AlterField(
            model_name='questions',
            name='id',
            field=models.CharField(default='1uo43nz6lc', max_length=30, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='team',
            name='loginId',
            field=models.CharField(default='cqwfh6zso5', max_length=30, primary_key=True, serialize=False),
        ),
    ]