from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import Job
# Register your models here.


@admin.register(Job)
class AdminView(ImportExportModelAdmin):
    pass



