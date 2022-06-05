from django.shortcuts import render, redirect
from django.urls import path, reverse_lazy
from django.contrib.auth.views import LoginView
from . import views
from .forms import NewUserForm
from django.contrib.auth import login
from django.contrib import messages
# Create your views here.
from django.contrib.auth import logout as logout


def mainPage(request):
    return render(request, 'index.html')

def loginPage(request):
    return render(request, 'login.html')

