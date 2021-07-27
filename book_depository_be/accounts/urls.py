from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from accounts.views import RegisterViewset

urlpatterns = [
    path('register/', RegisterViewset.as_view({'post':'create'})),
    path('token-auth/', obtain_jwt_token),
]
