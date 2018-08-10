var http = require('http');

import { Form, Text } from 'informed';
 
var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, you've got mail!");
   <Form id="simple-form">
    <label htmlFor="name-field">First name:</label>
    <Text field="name" id="name-field" />
    <button type="submit">
      Submit
    </button>
   </Form>

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
