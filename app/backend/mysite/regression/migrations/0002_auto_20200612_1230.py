# Generated by Django 3.0.3 on 2020-06-12 10:30

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('regression', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='classfied',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name='image',
            name='picture',
            field=models.ImageField(default=1, upload_to=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='image',
            name='uploaded',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='image',
            name='title',
            field=models.TextField(blank=True, max_length=32, null=True),
        ),
    ]
