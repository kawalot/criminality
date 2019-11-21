from rest_framework import serializers

from cases.models import Case


class CaseModelSerializer(serializers.ModelSerializer):
    case_city = serializers.StringRelatedField(many=False)

    class Meta:
        model = Case
        fields = [
            'registry_number',
            'case_number',
            'url',
            'address',
            'case_city',
        ]
