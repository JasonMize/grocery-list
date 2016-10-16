# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery', '0002_auto_20161016_2159'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='groceryitem',
            name='price',
        ),
    ]
