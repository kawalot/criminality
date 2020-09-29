from django.db import models


class Icon(models.Model):
    icon = models.CharField("Icon's name", max_length=30)

    def __str__(self):
        return str(self.icon)


class Case(models.Model):
    registry_number = models.IntegerField(primary_key=True)
    url = models.URLField()
    case_date = models.DateField()
    address = models.CharField(max_length=100)

    latitude = models.DecimalField(max_digits=8, decimal_places=6)
    longitude = models.DecimalField(max_digits=8, decimal_places=6)

    color = models.BooleanField(default=False)
    icon = models.ForeignKey(Icon, on_delete=models.PROTECT)

    comment = models.TextField(blank=True)

    def __str__(self):
        return str("Case no.: ", self.registry_number)

    def get_coordinates(self):
        return [float(self.latitude), float(self.longitude)]
