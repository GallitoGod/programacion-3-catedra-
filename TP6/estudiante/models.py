from django.db import models

# Create your models here.

class Curso(models.Model):
    nombre = models.CharField(max_length= 50)
    cantidad_horas = models.IntegerField()

class Estudiante(models.Model):
    nombre = models.CharField(max_length= 50)
    apellido = models.CharField(max_length= 50)
    nota_curso = models.IntegerField()
    edad = models.IntegerField()
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
