from django import forms
from .widgets import CustomClearableFileInput
from .models import Product, Category

from django.forms import ModelForm
from django.db import models
from .models import Quote


class ProductForm(forms.ModelForm):

    class Meta:
        model = Product
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        categories = Category.objects.all()
        friendly_names = [(c.id, c.get_friendly_name()) for c in categories]

        self.fields['category'].choices = friendly_names
        for field_name, field in self.fields.items():
            field.widget.attrs['class'] = 'border-black rounded-0'


class QuoteForm(forms.ModelForm):
    class Meta:
        model = Quote
        fields = ['service', 'package']
