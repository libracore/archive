from __future__ import unicode_literals
from frappe import _

def get_data():
    return[
        {
            "label": _("Records"),
            "icon": "fa fa-book",
            "items": [
                {
                    "type": "doctype",
                    "name": "City",
                    "description": _("List of cities")
                },
                {
                    "type": "doctype",
                    "name": "Area",
                    "description": _("List of areas")
                },
                {
                    "type": "doctype",
                    "name": "Binder",
                    "description": _("List of binders")
                }
            ]
        },
        {
            "label": _("Tools"),
            "icon": "fa fa-sitemap",
            "items": [
                   {
                       "type": "page",
                       "name": "archive_layout",
                       "label": _("Archive layout"),
                       "description": _("Archive layout")
                   }
            ]
        },
        {
            "label": _("Configuration"),
            "icon": "fa fa-wrench",
            "items": [
                   {
                       "type": "doctype",
                       "name": "Shelf",
                       "description": _("Shelf configuration")
                   }
            ]
        }
    ]

