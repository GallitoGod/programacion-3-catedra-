from django.shortcuts import render
from  .models import Estudiante, Curso
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required(login_url='usuario:login')
def cargar_estudiante(request):
    if request.method == "POST":
        nombre = request.POST['nombre']
        apellido = request.POST['apellido']
        edad = request.POST['edad']
        curso_id = request.POST['curso']
        nota_curso = request.POST['nota_curso']
        curso = Curso.objects.get(id = curso_id)
        Estudiante.objects.create(nombre=nombre, apellido=apellido, edad=edad, curso=curso, nota_curso=nota_curso)
        respuesta = 'Estudiante cargado exitosamente'
        return render(request, 'crear_estudiante.html', {'respuesta': respuesta})

    else:
        cursos = Curso.objects.all()
        return render(request, 'crear_estudiante.html', {'cursos': cursos})
    

@login_required(login_url='usuario:login')
def tabla_estudiantes(request):
    estudiantes = Estudiante.objects.all()
    print(estudiantes)
    return render(request, 'estudiantes.html', {'estudiantes': estudiantes})


@login_required(login_url='usuario:login')
def detalles_curso(request):
    cursos = Curso.objects.all()
    curso_id = request.GET.get('curso')
    curso = None
    error = None
    if curso_id:
        try:
            curso = Curso.objects.get(id = int(curso_id))
        except (ValueError, Curso.DoesNotExist):
            error = "No existe un curso con ese id."

    return render(request, 
                'mostrar_curso.html', 
                {
                    'cursos':cursos,
                    'curso': curso,
                    'error': error
                })

    