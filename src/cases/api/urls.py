from django.urls import path

from .views import CasesListAPIView


urlpatterns = [
    path('v0/', CasesListAPIView.as_view(), name='list'),
    # path('api/', include("cases.api.urls", namespace='cases_api')),
]
