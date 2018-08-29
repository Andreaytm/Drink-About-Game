describe ("whatCanIDrink", function() {
    
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Check age", function() {
       it("should exist", function(){
			expect(whatCanIDrink).toBeDefined(); 
		 });

		it("should return drink Toddy when called as whatCanIDrink(13)", function(){
			var result= whatCanIDrink(12)
			expect(result).toBe("Drink Toddy");
		});

		it("should return drink Coke when called as whatCanIDrink(17)", function(){
			var result= whatCanIDrink(17)
			expect(result).toBe("Drink Coke");
		});


		it("should return drink Beer when called as whatCanIDrink(20)", function(){
			var result= whatCanIDrink(20)
			expect(result).toBe("Drink Beer");
		});


		it("should return drink Whisky when called as whatCanIDrink(129)", function(){
			var result= whatCanIDrink(129)
			expect(result).toBe("Drink Whisky");
		});

		it("should return Sorry when called as whatCanIDrink(140)", function(){
			var result= whatCanIDrink(140)
			expect(result).toBe("Sorry I can't tell what drink because that age is incorrect!");
		});

		it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
		});
	});
});
