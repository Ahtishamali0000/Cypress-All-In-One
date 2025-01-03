describe("Parsing JSON Response", () => {

    // Common API URL
    const baseURL = 'https://fakestoreapi.com/products';

    it("Validates specific fields in the JSON response", () => {
        cy.request({
            method: "GET",
            url: baseURL
        }).then((response) => {
            expect(response.status).to.eq(200);

            // Test data for validation
            const expectedData = [
                { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, rating: 3.9 },
                { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts ", price: 22.3, rating: 4.1 }
            ];

            // Loop through the expected data to validate response
            expectedData.forEach((item, index) => {
                expect(response.body[index].id).to.eq(item.id);
                expect(response.body[index].title).to.eq(item.title);
                expect(response.body[index].price).to.eq(item.price);
                expect(response.body[index].rating.rate).to.eq(item.rating);
            });
        });
    });

    it("Calculates total price of limited items", () => {
        let totalPrice = 0;

        cy.request({
            method: "GET",
            url: baseURL,
            qs: { limit: 3 }
        }).then((response) => {
            expect(response.status).to.eq(200);

            // Calculate total price u 
            totalPrice = response.body.reduce((sum, item) => sum + item.price, 0);

            // Validate total price
            expect(totalPrice).to.eq(188.24); // Limit 3
        });
    });

});
