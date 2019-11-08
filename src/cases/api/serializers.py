from rest_framework import serializers

from cases.models import Case


class CaseModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Case
        fields = [
            'case_number',
            'address',
        ]
