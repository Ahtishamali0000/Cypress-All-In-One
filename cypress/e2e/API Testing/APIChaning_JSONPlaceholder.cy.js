describe('API Authentication and Chaining', () => {
    let authToken; // Variable to store the authentication token

    /**
     * Step 1: Log in to the API and receive a token
     * Purpose: Verify valid credentials return an authentication token.
     */
    it('should log in and receive a token', () => {
        cy.request({
            method: 'POST',
            url: 'https://fakestoreapi.com/auth/login',
            body: {
                username: 'mor_2314',
                password: '83r5^_'
            }
        }).then((response) => {
            expect(response.status).to.eq(200); // Validate successful login
            authToken = response.body.token; // Save the token for subsequent requests
            cy.log(`Auth Token: ${authToken}`); // Log the token for debugging
        });
    });

    /**
     * Step 2: Access a protected API endpoint with the token
     * Purpose: Verify token obtained from login allows access to a protected resource.
     */
    it('should access a protected API endpoint using the token', () => {
        // Chaining from Step 1
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/users',
            headers: {
                Authorization: `Bearer ${authToken}` // Use token for authentication
            }
        }).then((response) => {
            expect(response.status).to.eq(200); // Ensure access is granted
            expect(response.body).to.be.an('array').and.have.length.greaterThan(0); // Validate response format
            cy.log('Protected API accessed successfully');
        });
    });

    /**
     * Step 3: Perform Basic Authentication (API Key Auth)
     * Purpose: Verify Basic Authentication works with valid credentials.
     */
    it('should perform Basic Authentication', () => {
        const username = 'mor_2314';
        const password = '83r5^_';

        // Chaining from Step 2
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/users',
            headers: {
                Authorization: 'Basic ' + btoa(`${username}:${password}`) // Base64 encode username and password
            }
        }).then((response) => {
            expect(response.status).to.eq(200); // Ensure access is granted
            cy.log('Basic Authentication successful');
        });
    });

    /**
     * Step 4: Handle Digest Authentication (if applicable)
     * Purpose: Verify Digest Authentication works correctly.
     */
    it('should perform Digest Authentication', () => {
        // Chaining from Step 3
        cy.request({
            method: 'POST',
            url: 'https://fakestoreapi.com/auth/login',
            body: {
                username: 'mor_2314',
                password: '83r5^_',
                method: 'Digest'
            }
        }).then((response) => {
            expect(response.status).to.eq(200); // Check for successful authentication
            authToken = response.body.token; // Save the new token
            cy.log(`Digest Auth Token: ${authToken}`);
        });
    });
});
