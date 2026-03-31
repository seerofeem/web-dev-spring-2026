from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'categories'


class Product(models.Model):
    name        = models.CharField(max_length=255)
    price       = models.FloatField()
    description = models.TextField()
    count       = models.IntegerField()
    is_active   = models.BooleanField(default=True)
    category    = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    rating      = models.FloatField(default=0.0)
    image       = models.URLField(max_length=500, blank=True)
    link        = models.URLField(max_length=500, blank=True)

    def __str__(self):
        return self.name