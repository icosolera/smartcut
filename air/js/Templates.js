Templates = {
	timeline: new Ext.XTemplate(
		'<tpl for=".">',
		    '<div class="clip"><img src="{url}" title="{name}"></div>',
   	    '</tpl>',
   	    '<div class="x-clear"></div>'
	),
  effect: new Ext.XTemplate(
    '<tpl for=".">',
        '<div class="effect">{display}</div>',
        '</tpl>',
   	    '<div class="x-clear"></div>'
  )
};
