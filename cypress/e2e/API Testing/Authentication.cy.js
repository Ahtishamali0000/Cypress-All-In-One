describe('API Authentication', () => {
  let authToken;

  it('should log in and receive a token', () => {
    cy.request({
      method: 'POST',  // Use POST method for login
      url: 'https://fakestoreapi.com/auth/login',
      body: {
        username: 'mor_2314',
        password: '83r5^_'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      authToken = response.body.token; // Save the token if needed for further requests
      cy.log(authToken); // Log the token if necessary
    });
  });



  it('Digest Authentication', () => {
    cy.request({
      method: 'POST',  // Use POST method for login
      url: 'https://fakestoreapi.com/auth/login',
      body: {
        username: 'mor_2314',  
        password: '83r5^_', 
        method: 'Digest'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      authToken = response.body.token; 
      cy.log(authToken); 
  });

  // Use the token for future requests if needed
  it('should access a protected API endpoint with the token', () => {
    cy.request({
      method: 'GET',
      url: 'https://fakestoreapi.com/users', 
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });


  it('API KEY Auth', () => {
    const username = 'mor_2314';
    const password = '83r5^_';

    cy.request({
      method: 'GET',
      url: 'https://fakestoreapi.com/users',
      headers: {
        Authorization: 'Basic ' + btoa(username + ':' + password)
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
