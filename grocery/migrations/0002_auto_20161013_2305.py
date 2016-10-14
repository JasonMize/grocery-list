# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groceryitem',
            name='price',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='groceryitem',
            name='quantity',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
