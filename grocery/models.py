from django.db import models


class GroceryItem(models.Model):
    name = models.CharField(max_length = 50)
    quantity = models.IntegerField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    price = models.FloatField(
        blank=True, 
        null=True)


    def __str__(self):
        return self.name

    # if user doesn't enter an amount, default to 1        
    def min_quantity(self):
        if (self.quantity):
            return self.quantity
        else:
            self.quantity = 1
        return self.quantity

    # individual item cost total - amount * price
    def item_price_total(self):
        if (self.price and self.quantity):
            item_price_total = self.price * self.quantity
        else:
            item_price_total = self.price
        return item_price_total






