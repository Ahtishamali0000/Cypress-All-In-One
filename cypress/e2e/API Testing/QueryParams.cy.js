it("GET Request with Query Parameters", () => {
    const page = 2;  // Defining 'page' as a constant

    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users', 
        qs: {
            page: page,  // Using the 'page' constant
            per_page: 5  // Another query parameter
        }
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.page).to.equal(page);  
        expect(response.body.page).to.equal(2);  
        expect(response.body.data).has.length(5);
        
        expect(response.body.data[0]).have.property('id',6)

    });
});
