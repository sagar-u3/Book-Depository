from rest_framework import serializers

from books.models import Author, Book, Genre


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Book


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Author


class BookListSerializer(serializers.ModelSerializer):
    #author = AuthorSerializer()
    class Meta:
        fields = '__all_'
        model = Book

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Genre