from django.db import models


class GroceryItem(models.Model):
    name = models.CharField(max_length = 50)
    quantity = models.IntegerField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    price = models.IntegerField(
        blank=True, 
        null=True)


    def __str__(self):
        return self.name

    def item_count(self):
        item_count = GroceryItem.objects.count()
        return item_count

    def min_quantity(self):
        if (self.quantity):
            return self.quantity
        else:
            self.quantity = 1
        return self.quantity

    def item_price_total(self):
        if (self.price and self.quantity):
            item_price_total = self.price * self.quantity
        else:
            item_price_total = self.price
        return item_price_total





