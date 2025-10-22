from django.urls import path
from . import views


app_name = "principal"
urlpatterns = [
    path('', views.render_home, name='home'),
    path('about', views.about, name='about'),
]