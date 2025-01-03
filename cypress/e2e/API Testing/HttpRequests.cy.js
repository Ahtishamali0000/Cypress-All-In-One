describe("HTTP Methods", () => {

    // Test GET method
    it("GET Method", () => {
        cy.request("GET", "https://reqres.in/api/users?page=1")
            .then((response) => {
                expect(response.status).to.equal(200);    // Check for 200 status
                expect(response.body).to.have.property('page'); // Verify response body contains 'page'
                expect(response.body.data).to.be.an('array');  // Verify that 'data' is an array
            });
    });

    // Test POST method
    it("POST Method", () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then((response) => {
            expect(response.status).to.equal(201);    // Check for 201 status
            expect(response.body).to.have.property('name', 'morpheus'); // Check if the response contains the correct name
            expect(response.body).to.have.property('job', 'leader');   // Check if the response contains the correct job
        });
    });

    // Test PUT method
    it("PUT Method", () => {
        cy.request({
            method: 'PUT',
            url: "https://67472845-a2d8-4a4a-b2ca-8dec1680208d.mock.pstmn.io/user/1",
            body: {
                "name": "Ali Hassan",
                "email": "alihassan@example.com"
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Check for 200 status
            expect(response.body).to.have.property('name', 'Ali Hassan'); // Verify the updated name
            expect(response.body).to.have.property('email', 'alihassan@example.com'); // Verify the updated email
        });
    });

    // Test DELETE method
    it("DELETE Method", () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users?page=1'
        }).then((response) => {
            expect(response.status).to.equal(204);  // Check for 204 status, indicating successful deletion
        });
    });
});
