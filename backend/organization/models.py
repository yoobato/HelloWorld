from django.db import models


class Member(models.Model):
    name = models.CharField(max_length=64)
    job_title = models.CharField(max_length=64)
    manager = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name + ' (' + self.job_title + ')'
