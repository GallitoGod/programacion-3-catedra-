from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def render_home(request):
    return render(request, "index.html")


def about(request):
    return HttpResponse('ABOUT')