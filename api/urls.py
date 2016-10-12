from django.conf.urls import include, url
from rest_framework import routers

from grocery.viewsets import GroceryItemViewSet


router = routers.DefaultRouter()
router.register(r'groceryitems', GroceryItemViewSet)

urlpatterns = [
    url(r'^', include(router.urls)), 
]









