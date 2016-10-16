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
            field=models.DecimalField(null=True, blank=True, decimal_places=2, max_digits=9),
        ),
        migrations.AlterField(
            model_name='groceryitem',
            name='quantity',
            field=models.IntegerField(null=True, blank=True),
        ),
    ]
