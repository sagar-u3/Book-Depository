from django.db import models

# Create your models here.


class Author(models.Model):
    name = models.CharField(max_length=50)
    about = models.TextField(null=True)
    photo = models.ImageField(upload_to='uploads/author_photos', blank=True)

    def __str__(self) -> str:
        return self.name

class Genre(models.Model):
    name = models.CharField(max_length=15, unique=True)

class Book(models.Model):
    name = models.CharField(max_length=50)
    cover = models.ImageField(upload_to='uploads/book_covers', blank=True)
    description = models.TextField(null=True)
    author = models.ForeignKey(to=Author, on_delete=models.CASCADE)
    genre = models.ManyToManyField(to=Genre)
    isbn = models.CharField(max_length=15, unique=True)
    price = models.FloatField()

    def __str__(self) -> str:
        return "%s (%s)" % (self.name, self.author.name)
