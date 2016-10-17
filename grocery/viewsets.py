from rest_framework import viewsets

from .models import GroceryItem
from .serializers import GroceryItemSerializer


class GroceryItemViewSet(viewsets.ModelViewSet):
    queryset = GroceryItem.objects.all().order_by('-created')
    serializer_class = GroceryItemSerializer
    
    def list (self, request):
        response = super().list(request)
        response.data['item_count'] = GroceryItem.objects.count()

        total = 0
        for item in GroceryItem.objects.all():
            if item.item_price_total():
                total += item.item_price_total()
        response.data['total_cost'] = total
        
        return response