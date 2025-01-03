const xml2js = require('xml2js');  // Import the xml2js library
const parser = new xml2js.Parser({ explicitArray: false });  // Initialize the parser

describe('POST Request with Payload in Cypress', () => {
    it('Successfully makes a POST request and validates the response with payload', () => {

        // Define the API endpoint
        const apiUrl = 'https://fakestoreapi.com/products';

        // Define the payload (data to be sent)
        const payload = {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        };

        // Send the POST request with payload
        cy.request({
            method: 'POST',
            url: apiUrl, // The URL of the API endpoint
            body: payload, // The data (payload) to be sent in the request
            headers: {
                'Content-Type': 'application/json' // Define content type as JSON
            }
        }).then((response) => {
            // Validate that the response status code is 200 (OK)
            expect(response.status).to.eq(200);

            // Validate the response body contains the expected data
            expect(response.body).to.have.property('title', 'test product');
            expect(response.body).to.have.property('price', 13.5);
            expect(response.body).to.have.property('description', 'lorem ipsum set');
            expect(response.body).to.have.property('image', 'https://i.pravatar.cc');
            expect(response.body).to.have.property('category', 'electronic');

            // Optionally, you can also validate other response headers or other details
            expect(response.headers).to.have.property('content-type');

            // If the response is XML and you need to parse it
            if (response.headers['content-type'].includes('application/xml')) {
                // Parse XML response body
                parser.parseString(response.body, (err, result) => {
                    if (err) {
                        cy.log('Error parsing XML:', err);
                    } else {
                        // Validate the parsed response (adjust the object structure accordingly)
                        expect(result).to.have.property('title', 'test product');
                        expect(result).to.have.property('price', '13.5');
                        expect(result).to.have.property('description', 'lorem ipsum set');
                    }
                });
            }
        });
    });
});
