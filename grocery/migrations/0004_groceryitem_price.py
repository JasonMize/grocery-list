# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery', '0003_remove_groceryitem_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='groceryitem',
            name='price',
            field=models.IntegerField(null=True, blank=True),
        ),
    ]
