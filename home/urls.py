from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('portfolio', views.portfolio, name='portfolio'),
    path('quote', views.quote, name='quote'),
    path('quote-page2', views.quote_page2, name='quote-page2'),
    path('not-registered', views.not_registered, name='not-registered'),
    path('print-publishing', views.print_publishing, name='print-publishing'),
    path('website', views.website, name='website'),
    path('illustration', views.illustration, name='illustration'),
    path('full-package', views.full_package, name='full-package'),
]
