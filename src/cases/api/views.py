from rest_framework import generics

from cases.models import Case
from .serializers import CaseModelSerializer


class CasesListAPIView(generics.ListAPIView):
    serializer_class = CaseModelSerializer

    def get_queryset(self):
        return Case.objects.all()
