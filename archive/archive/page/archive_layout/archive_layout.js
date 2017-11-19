frappe.pages['archive_layout'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: __('Archive layout'),
		single_column: true
	});

	frappe.visual.make(page);
	// frappe.visual.run();
}

frappe.visual = {
	start: 0,
	make: function(page) {
		var me = frappe.archive_layout;
		me.page = page;
		me.body = $('<div></div>').appendTo(me.page.main);
		var data = "Archive";
		$(frappe.render_template('archive_layout', data)).appendTo(me.page.main);

		me.more = $('<div class="for-more"><button class="btn btn-sm btn-default btn-more">'
			+ __("More") + '</button></div>').appendTo(me.page.main)
			.find('.btn-more').on('click', function() {
				me.start += 40;
				me.run();
			});
	},
	run: function() {
		var me = frappe.archive_layout;
		frappe.call({
			method: 'archive.archive_layout.get_data',
			args: {
				start: me.start
			},
			callback: function(r) {
				if(r.message) {
					r.message.forEach(function(d) {
						// me.add_row(d);
					});
				} else {
					frappe.show_alert({message:__('No more updates'), indicator:'darkgrey'});
					me.more.parent().addClass('hidden');
				}
			}
		});
	}
}

