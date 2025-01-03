describe("POST Request Tests - Different Approaches",()=>{

    // 1. Hardcoded JSON in the Request
    it("POST Method - Hardcoded JSON", () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('name', 'morpheus');
            expect(response.body).to.have.property('job', 'leader');
        });
    });


     // 2. Dynamically Generated Data
     it("POST Method - Dynamic Data", () => {
        const dynamicData = {
            // name: `user_${Date.now()}`, // Unique name with timestamp

            name: Math.random().toString(6).substring(3),
            email: Math.random().toString(6).substring(3)+"@gmail.com",
            job: 'tester'
        };

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: dynamicData
        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('name', dynamicData.name);
            expect(response.body).to.have.property('email', dynamicData.email);
            expect(response.body).to.have.property('job', dynamicData.job);
        });
    });


    // 3. Using Cypress Fixtures
it("POST Method - Fixture Data with Email", () => {
    cy.fixture('APIData').then((userData) => {
        // Add 'email' to the request body
        const requestBody = { 
            ...userData, 
            email: "morpheus@reqres.in" // Adding an email field for testing
        };

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: requestBody
        }).then((response) => {
            // Assert status code
            expect(response.status).to.equal(201);

            // Assert response body properties
            expect(response.body).to.have.property('name', requestBody.name); // Matches 'name'
            expect(response.body).to.have.property('job', requestBody.job);   // Matches 'job'
            expect(response.body).to.have.property('email', requestBody.email); // Matches 'email'

            // Assert optional fields like 'id' and 'createdAt'
            expect(response.body).to.have.property('id').and.to.be.a('string'); // 'id' exists and is a string
            expect(response.body).to.have.property('createdAt').and.to.match(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/ // ISO 8601 timestamp format
            );
        });
    });
});

// 4. Using Environment Variables
it("POST Method - Environment Variables", () => {
    // Prepare the request body dynamically from environment variables
    const requestBody = {
        name: Cypress.env('userName'),  // || 'defaultUser', // Fallback to 'defaultUser' if not set
        job: Cypress.env('userJob') , // || 'defaultJob',   // Fallback to 'defaultJob' if not set
        email: Cypress.env('userEmail') // || 'default@example.com' // Optional email environment variable
    };

    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: requestBody
    }).then((response) => {
        // Assert status code
        expect(response.status).to.equal(201);

        // // Assert response body properties
        // expect(response.body).to.have.property('name', requestBody.name); // Validate 'name'
        // expect(response.body).to.have.property('job', requestBody.job);   // Validate 'job'
        // expect(response.body).to.have.property('email', requestBody.email); // Validate 'email' if supported by the API

        // Assert optional fields
        expect(response.body).to.have.property('id').and.to.be.a('string'); // Check if 'id' exists and is a string
        expect(response.body).to.have.property('createdAt').and.to.match(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/ // Validate ISO 8601 timestamp format
        );

        cy.log(JSON.stringify(response.body));

    });
});


})