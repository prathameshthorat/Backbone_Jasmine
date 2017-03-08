define([
   'jquery',
   'underscore',
   'backbone',
   'text!../templates/ContactUs.html',
   '../model/contactUsModel',
   'i18next',
   'bootstrap'
],function($, _, Backbone, contactUsTpl, ContactUsModel, i18next){
	
	var ContactUsView = Backbone.View.extend({
		
		//el : "#contactUsForm",
		
		events: {
			"click button#submit" : "submitForm"
		},
		
		initialize : function(){
			console.log("In intialize");
		},
		
		render : function(){
			this.template = _.template(contactUsTpl,{i18next : i18next});
			//this.tpl = this.template;
			this.$el.html(this.template);
			this.model = new ContactUsModel();
			return this;
		},

		submitForm : function(e){
			this.$('.errorSpan').text("");
			var name = this.$('#name').val();
			var emailId = this.$('#emailId').val();
			var comments = this.$('#coments').val();
			this.model.set({ name : name, emailId : emailId, comments : comments});
			var self = this;
			this.model.on("invalid",function(model,error){
				$('.errorSpan').text(error);
			});
			this.model.save();
		}

		
	});
	return ContactUsView;
});