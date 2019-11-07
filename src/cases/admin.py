from django.contrib import admin

from .models import Case, Category, Court, Judge, Icon, City


admin.site.register(Case)
admin.site.register(City)
admin.site.register(Court)
admin.site.register(Category)
admin.site.register(Judge)
admin.site.register(Icon)
