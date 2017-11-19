// Copyright (c) 2017, libracore GmbH and contributors
// For license information, please see license.txt

frappe.ui.form.on('Binder', {
	refresh: function(frm) {
		frm.add_custom_button(__("Show location"), function() 
		{
			window.location.href = '/desk#archive_layout/' + frm.doc.name + '/' + frm.doc.shelf;
		});
	}
});
