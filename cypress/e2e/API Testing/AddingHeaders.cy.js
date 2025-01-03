it("GET Request with Headers", () => {
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users', // Base URL
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '910074ef11ca4af79163ce11243a8766b53cd413576b996432c09bbd87dff5bf'  // Adding Authorization header
        }
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('data');
    });
});
