from django.contrib import admin

from accounts.models import User

# Register your models here.


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    fields = ('first_name', 'last_name', 'email',
              'is_staff', 'is_active', 'is_superuser')
