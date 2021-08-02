from django.urls import include, path
from rest_framework.routers import DefaultRouter

from books.views import AuthorViewset, BookViewset, GenreViewset

router = DefaultRouter()

router.register(r'books', BookViewset, 'book')
router.register(r'authors', AuthorViewset, 'author')
router.register(r'genres', GenreViewset, 'genre')


urlpatterns = [
    path('', include(router.urls))
]
