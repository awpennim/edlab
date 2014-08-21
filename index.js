// JavaScript Document

jQuery(document).on("ready", function() {
	var iframe = jQuery("#iframe");
	var body = jQuery("#body");
	var back_link = jQuery(".back_link");
	
	showIframe = function(url) {
		iframe.html("<iframe src=\"" + url + "\"  width=\"100%\" height=\"100%\"></iframe>");
		body.hide();
		
		back_link.show();
		iframe.show();	
	}
	
	hideIframe = function() {	
		back_link.hide();
		iframe.hide();	
		
		body.show();
	}
	
	jQuery(document).on("click", '.iframe_link', function() {	
		showIframe(jQuery(this).data('url'));
	});
	
	jQuery(document).on("click", '.back_link', function() {	
		hideIframe();
	});
});