from django.contrib import admin
from .models import Departments, Employees
# Register your models here.

class StatDep(admin.ModelAdmin):
    list_display = ('DepartmentId', 'DepartmentName')


admin.site.register(Departments, StatDep)

class StatEmp(admin.ModelAdmin):
    list_display = ('EmployeeId', 'EmployeeName', 'Department', 'DateOfJoining', 'PhotoFileName')

admin.site.register(Employees , StatEmp)