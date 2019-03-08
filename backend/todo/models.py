from django.db import models


class Todo(models.Model):
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        if len(self.description) > 80 - 3:
            return self.description[:77] + '...'
        else:
            return self.description
