from rest_framework import serializers

from cases.models import Case


class CaseModelSerializer(serializers.ModelSerializer):

    icon = serializers.StringRelatedField(many=False)

    class Meta:
        model = Case
        fields = [
            'registry_number',
            'url',
            'address',
            'case_date',
            'icon',
            'color',
            'get_coordinates',
            'comment',
        ]
