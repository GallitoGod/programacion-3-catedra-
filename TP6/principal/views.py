from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required(login_url='usuario:login')
def render_home(request):
    return render(request, "index.html")

@login_required(login_url='usuario:login')
def about(request):
    return HttpResponse('ABOUT')