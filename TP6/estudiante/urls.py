from django.urls import path
from . import views

app_name = 'estudiantes'
urlpatterns = [
    path('agregar/', views.cargar_estudiante, name='agregar'),
    path('', views.tabla_estudiantes, name='tabla'),
    path('curso/', views.detalles_curso, name='curso')
]