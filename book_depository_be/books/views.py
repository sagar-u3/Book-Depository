from django.shortcuts import render
from rest_framework import filters, viewsets
from rest_framework.permissions import AllowAny, IsAdminUser

from books.models import Author, Book, Genre
from books.serializers import (AuthorSerializer, BookListSerializer,
                               BookSerializer, GenreSerializer)

# Create your views here.


class BookViewset(viewsets.ModelViewSet):
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', ]

    def get_permissions(self):
        perm = []
        if self.action == 'list' or self.action == 'retrieve':
            perm.append(AllowAny())
        else:
            perm.append(IsAdminUser())
        return perm
    def get_queryset(self):
        user = self.request.user
        if self.request.query_params.get('author'):
            return Book.objects.filter(author=self.request.query_params.get('author'))
        if self.request.query_params.get('author'):
            return Book.objects.filter(genre=self.request.query_params.get('genre'))

    def get_serializer_class(self, *args, **kwargs):
        if self.action == 'list':
            serializer = BookListSerializer
        else:
            serializer = BookSerializer
        return serializer


class AuthorViewset(viewsets.ModelViewSet):

    def get_permissions(self):
        perm = []
        if self.action == 'list' or self.action == 'retrieve':
            perm.append(AllowAny())
        else:
            perm.append(IsAdminUser())
        return perm
    queryset = Author.objects.all()

    def get_serializer_class(self, *args, **kwargs):
        return AuthorSerializer

class GenreViewset(viewsets.ModelViewSet):
    def get_permissions(self):
        perm = []
        if self.action == 'list' or self.action == 'retrieve':
            perm.append(AllowAny())
        else:
            perm.append(IsAdminUser())
        return perm
    queryset = Genre.objects.all()

    def get_serializer_class(self, *args, **kwargs):
        return GenreSerializer