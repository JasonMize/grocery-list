# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery', '0004_groceryitem_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groceryitem',
            name='price',
            field=models.FloatField(null=True, blank=True),
        ),
    ]
