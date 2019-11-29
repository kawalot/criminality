from rest_framework import serializers

from cases.models import Case


class CaseModelSerializer(serializers.ModelSerializer):
    case_city = serializers.StringRelatedField(many=False)
    icon = serializers.StringRelatedField(many=False)
    court = serializers.StringRelatedField(many=False)
    category = serializers.StringRelatedField(many=False)
    judge = serializers.StringRelatedField(many=False)

    class Meta:
        model = Case
        fields = [
            'registry_number',
            'case_number',
            'url',
            'address',
            'case_city',
            'case_date',
            'icon',
            'court',
            'category',
            'color',
            'judge',
            'get_coordinates',
            'comment',
        ]
