from django.db import models


from django.contrib.auth.models import User
from django import forms
from datetime import datetime
from django.utils import timezone

SERVICE = (
    ("print-publishing", "print-publishing"),
    ("website", "website"),
    ("illustration", "illustration"),
    ("full-package", "full-package"),
    )

PACKAGE = (
    ("bronze", "bronze"),
    ("silver", "silver"),
    ("gold", "gold"),
)


class Quote(models.Model):
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE)
    service = models.CharField(max_length=50, choices=SERVICE, blank=False, null=False)
    package = models.CharField(max_length=50, choices=PACKAGE, blank=False, null=False)
    time_ordered = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return f"service: {self.service} | package: {self.package}"


class Category(models.Model):

    class Meta:
        verbose_name_plural = 'Categories'

    name = models.CharField(max_length=254)
    friendly_name = models.CharField(max_length=254, null=True, blank=True)

    def __str__(self):
        return self.name

    def get_friendly_name(self):
        return self.friendly_name


class Product(models.Model):
    category = models.ForeignKey('Category', null=True, blank=True, on_delete=models.SET_NULL)
    sku = models.CharField(max_length=254, null=True, blank=True)
    name = models.CharField(max_length=254)
    description = models.TextField()
    has_sizes = models.BooleanField(default=False, null=True, blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    rating = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.name

