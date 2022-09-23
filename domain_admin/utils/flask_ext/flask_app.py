# -*- coding: utf-8 -*-

from collections import Iterator

from flask import Flask
from peewee import ModelSelect, Model

from domain_admin.utils.flask_ext.api_result import ApiResult
from domain_admin.utils.flask_ext.json_encoder import JSONEncoder
from domain_admin.utils.flask_ext.json_provider import JSONProvider
from domain_admin.utils.flask_ext.request import Request


class FlaskApp(Flask):
    """
    扩展Flask
    """
    # json_encoder = JSONEncoder

    # Flask 2
    json_provider_class = JSONProvider

    request_class = Request

    def make_response(self, rv):

        if isinstance(rv, ModelSelect):
            rv = list(rv.dicts())

        if isinstance(rv, Iterator):
            rv = list(rv)

        if isinstance(rv, (list, dict)) or rv is None:
            rv = ApiResult.success(rv)

        if isinstance(rv, ApiResult):
            rv = rv.to_dict()

        return super().make_response(rv)
