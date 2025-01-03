it("GET Request with Cookies", () => {
    // Set a cookie
    cy.setCookie('session_id', '123456');

    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users',
        headers: {
            'Authorization': '910074ef11ca4af79163ce11243a8766b53cd413576b996432c09bbd87dff5bf'
        }
    }).then((response) => {
        expect(response.status).to.equal(200);
        cy.getCookie('session_id').should('have.property', 'value', '123456');
    });
});
