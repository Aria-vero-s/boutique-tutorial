from django.contrib import admin
from .models import Product, Category, Quote

class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'sku',
        'name',
        'category',
        'price',
        'rating',
    )

    ordering = ('sku',)

class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        'friendly_name',
        'name',
    )

class QuoteAdmin(admin.ModelAdmin):
    list_display = (
        'service',
        'package',
    )

admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Quote, QuoteAdmin)

