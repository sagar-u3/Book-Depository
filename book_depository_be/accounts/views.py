from django.shortcuts import render
from rest_framework import mixins, viewsets
from rest_framework.permissions import AllowAny

from accounts.serializers import RegisterSerializer

# Create your views here.


class RegisterViewset(viewsets.ViewSet, mixins.CreateModelMixin):
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer
