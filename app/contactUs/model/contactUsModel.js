define(['jquery',
	'underscore',
	'backbone'	
	],function($,_,Backbone){

		var ContactUsModel = Backbone.Model.extend({
			
			urlRoot: '/contact',
            
            validate: function(attrs, options) {
			   if(attrs.name == "") {
			      	return "Name field cannot be empty";
			    }
			    if(attrs.emailId == ""){
			    	return "Email Id field cannot be empty";	
			    }
  			},

			defaults: {
			    "name":  "",
			    "emailId":  "",
			    "comments":  ""
  			}

		});
		return ContactUsModel;
})