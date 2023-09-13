describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function() {
        billAmtInput.value = 200;
        tipAmtInput.value = 2;
    });

    it('should add a curPayment object to allPayments when submitPaymentInfo() is called', function() {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('200');
        expect(allPayments['payment1'].tipAmt).toEqual('2');
        expect(allPayments['payment1'].tipPercent).toEqual(1);
    });

    it('should not add a curPayment object to allPayments if the input is empty', function() {
        billAmtInput.value = '';
        submitPaymentInfo();
        
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should update html when submitPaymentInfo() is called', function() {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        //Create a test payment with given functions and add it to allPayments

        appendPaymentTable(curPayment);
        //Update #paymentTable html correctly

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$200');
        expect(curTdList[1].innerText).toEqual('$2');
        expect(curTdList[2].innerText).toEqual('1%');
        //Check to see if the tds in the html are equal to the strings that were given by appendPaymentTable() and if the amount of tds provided is correct
    })
})
