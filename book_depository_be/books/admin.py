from django.contrib import admin

from books.models import Author, Book, Genre

admin.site.site_header = "Book Depository Admin"
admin.site.site_title = "Book Depository Admin Portal"
admin.site.index_title = "Welcome to Book DEpository Admin Portal"

# Register your models here.


@admin.register(Book)
class AuthorAdmin(admin.ModelAdmin):
    fields = ('name', 'cover', 'description', 'author', 'isbn', 'price', 'genre')


admin.site.register(Author)
admin.site.register(Genre)
