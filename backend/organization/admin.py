from django.contrib import admin
from .models import Member


class MemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'job_title', 'manager')


admin.site.register(Member, MemberAdmin)
