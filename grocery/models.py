from django.db import models

class GroceryItem(models.Model):
    name = models.CharField(max_length = 50)
    quantity = models.IntegerField(blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
        









