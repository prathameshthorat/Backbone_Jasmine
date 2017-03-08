define(['../../app/contactUs/view/ContactUsView', '../../app/contactUs/model/contactUsModel'],function(ContactUsView, Model){
	describe("ContactUsView.js spec",function(){
		beforeEach(function(){
			view = new ContactUsView();
			model = new Model();
			view.render();
		});

		describe('when view is constructing', function () {

			beforeEach(function(){
				spyOn(view, 'render').andCallThrough();
			});

			it("should render view",function(){
				view.render();
				expect(view.render).toHaveBeenCalled();
			});

        	it ('should exist', function () {
            	expect(view).toBeDefined();
        	});

        	it ('should name field be empty', function () {
        		expect(view.$el.find('#name').val()).toEqual('');
    		});

    		it ('should emailId field be empty', function () {
        		expect(view.$el.find('input#emailId').val()).toEqual('');
    		});
    	});

    	describe("When Submit is Clicked", function(){
    		
    		beforeEach(function(){
    			view.$el.find("#name").val("Prathamesh");
    			view.$el.find("#emailId").val("test@gmail.com");
    			view.$el.find("#submit").trigger('click');

    		});

    		it("name and email id fields are not empty", function(){
    			expect(view.$el.find(".errorSpan").val()).toEqual("");
    		});

    	});

    	 // describe("When Submit is Clicked", function(){
    		
    	 // 	beforeEach(function(){
    	 // 		view.$el.find('#name').val('').trigger('change');
      //   		view.$el.find('#emailId').val('a@a.com').trigger('change');
    	 // 		view.$el.find("#submit").trigger('click');
    	 // 	});

    	 // 	it("name is empty", function(){
    	 // 		console.log(view.$el.find(".errorSpan"));
    	 // 		expect(view.$el.find(".errorSpan").val()).toEqual("Name field cannot be empty");
    	 // 	});

    	 // });


		describe('name and emailId filled', function () {
        
			beforeEach(function(){
				spyOn(view.model, 'save').andCallThrough();
			});

			beforeEach(function(){
				view.$el.find('#name').val('prathamesh').trigger('change');
        		view.$el.find('#emailId').val('a@a.com').trigger('change');
        	});	

			beforeEach(function () {
        		view.$el.find('#submit').trigger('click');
    		});

			it('should save model', function () {
        		expect(view.model.save).toHaveBeenCalled();
    		});
        });

	});
});