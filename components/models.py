from django.db import models

# Create your models here.


class Job(models.Model):
    city = models.CharField(max_length=100)
    province_id = models.CharField(max_length=100)
    job_number = models.CharField(max_length=100)
    province_name = models.CharField(max_length=100)
    #updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.city