describe("POST Request with Bearer Token Authentication", () => {
    
    let authToken;

    before("Creating access token", () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                clientName: 'Ahtisham',
                clientEmail: Math.random().toString(36).substring(3) + "@gmail.com"
            }
        }).then((response) => {
            // Store the token
            authToken = response.body.accessToken;
            expect(response.status).to.equal(201);
            expect(authToken).to.exist;  // Ensure token is created successfully
        });
    });

    before("Creating new Order with Bearer Token", () => {
        // Ensure authToken is available before proceeding
        cy.wrap(authToken).should('exist').then(() => {
            cy.request({
                method: 'POST',
                url: 'https://simple-books-api.glitch.me/orders/',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + authToken
                },
                body: {
                    "bookId": 1,
                    "customerName": "Ahtisham Ali"
                }
            }).then((response) => {
                // Validate response status and content
                expect(response.status).to.equal(201);
                expect(response.body.created).to.equal(true);
                expect(response.body).to.have.property('orderId');
            });
        });
    });

    it('Fetching the Orders',()=>{

        cy.request({
            method:"GET",
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            cookies:{
                'cookieName':'mycookie'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).has.length(1);
        })
    })
});
