define(['../../app/contactUs/model/contactUsModel'], function(ContactUsModel) {
  describe("ContactUsModel", function() {
  	beforeEach(function() {
  		this.contactUs = new ContactUsModel();
  	})
    
    it("On insantiating Contact Us Model checking defaults", function() {
      expect(this.contactUs.get('name')).toEqual('');
      expect(this.contactUs.get('emailId')).toEqual('');
      expect(this.contactUs.get('comments')).toEqual('');
    })

    describe("Validating ContactUs on Save when name and email are present", function(){
    	beforeEach(function() {
  			model = new ContactUsModel();
  			errors = model.validate({name : "abc" , emailId : "xyz"});
  		})

    	it("Should not contain Error",function(){
    		expect(errors).not.toBeDefined();
    	})
	});

	describe("Validating ContactUs on Save when name is absent and email is present", function(){
    	beforeEach(function() {
  			model = new ContactUsModel();
  			errors = model.validate({name : "" , emailId : "xyz"});
  		})

    	it("Should contain Error for Name Field",function(){
    		expect(errors).toBeDefined();

    	})
	});
    
    describe("Validating ContactUs on Save when name is absent and email is present", function(){
    	beforeEach(function() {
  			model = new ContactUsModel();
  			errors = model.validate({name : "abc" , emailId : ""});
  		})

    	it("Should contain Error for Email Field",function(){
    		expect(errors).toBeDefined();

    	})
	});

  })

});