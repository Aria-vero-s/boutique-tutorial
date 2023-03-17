from django.shortcuts import render, redirect


# Create your views here.
def index(request):
    """ A view to return the index page """

    return render(request, 'home/index.html')


def portfolio(request):
    return render(request, "home/portfolio.html", {})


def quote(request):
    return render(request, "home/quote.html", {})


def quote_page2(request):
    return render(request, "home/quote-page2.html", {})


def print_publishing(request):
    return render(request, "home/print-publishing.html", {})


def website(request):
    return render(request, "home/website.html", {})


def illustration(request):
    return render(request, "home/illustration.html", {})


def full_package(request):
    return render(request, "home/full-package.html", {})


def not_registered(request):
    return render(request, "home/not-registered.html", {})


