it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {amount: 2000, years: 2, rate: 1.5};
    expect(calculateMonthlyPayment(values)).toEqual ("86.64")
  });
  
  
  it("should return a result with 2 decimal places", function() {
    // ..
  });
  
  /// etc