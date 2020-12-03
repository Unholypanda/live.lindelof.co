# Generated by Django 3.1.4 on 2020-12-03 17:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_user_stream_key'),
    ]

    operations = [
        migrations.AlterField(
            model_name='viewerrecord',
            name='viewed_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='viewerrecord',
            name='viewing_user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='viewing_user', to=settings.AUTH_USER_MODEL),
        ),
    ]
