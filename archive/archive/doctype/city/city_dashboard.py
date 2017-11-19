from frappe import _

def get_data():
   return {
      'fieldname': 'city',
      'transactions': [
         {
            'label': _('Related information'),
            'items': ['Area', 'Binder']
         }
      ]
   }
