from django.urls import include, path
from rest_framework.routers import DefaultRouter

from books.views import AuthorViewset, BookViewset

router = DefaultRouter()

router.register(r'books', BookViewset, 'book')
router.register(r'authors', AuthorViewset, 'author')


urlpatterns = [
    path('', include(router.urls))
]
