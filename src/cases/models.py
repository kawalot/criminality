from django.db import models


class Category(models.Model):
    name = models.CharField("Category's name", max_length=200)
    article = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return str(self.name)


class City(models.Model):
    name = models.CharField("City name", max_length=50)

    class Meta:
        verbose_name_plural = "Cities"

    def __str__(self):
        return str(self.name)


class Court(models.Model):
    title = models.CharField("Court's title", max_length=50)
    city = models.ForeignKey(City, on_delete=models.PROTECT)

    def __str__(self):
        return str(self.title)


class Icon(models.Model):
    icon = models.CharField("Icon's name", max_length=30)

    def __str__(self):
        return str(self.icon)


class Judge(models.Model):
    name = models.CharField("Judge's name", max_length=50)

    def __str__(self):
        return str(self.name)


class Case(models.Model):
    registry_number = models.IntegerField(primary_key=True)
    case_number = models.CharField("Case number", max_length=50)
    url = models.URLField()

    case_date = models.DateField()
    address = models.CharField(max_length=100)
    case_city = models.ForeignKey(City, on_delete=models.PROTECT)

    latitude = models.DecimalField(max_digits=8, decimal_places=6)
    longitude = models.DecimalField(max_digits=8, decimal_places=6)

    court = models.ForeignKey(Court, on_delete=models.PROTECT)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)

    color = models.BooleanField(default=False)
    icon = models.ForeignKey(Icon, on_delete=models.PROTECT)

    judge = models.ForeignKey(Judge, on_delete=models.PROTECT)

    comment = models.TextField(blank=True)

    def __str__(self):
        return str(self.registry_number)

    def get_coordinates(self):
        return [float(self.latitude), float(self.longitude)]
