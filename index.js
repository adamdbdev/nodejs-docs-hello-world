var http = require('http');
 
var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, you've got mail!");
});

var port = process.env.PORT || 1337;
server.listen(port);
import React from 'react'
import {Form, Field} from 'simple-react-form'
import DatePicker from './myFields/DatePicker'
import Text from './myFields/Text'
 
class PostsCreate extends React.Component {
  state = {}
 
  render() {
    return (
      <div>
        <Form state={this.state} onChange={state => this.setState(state)}>
          <Field fieldName="name" label="Name" type={Text} />
          <Field fieldName="date" label="A Date" type={DatePicker} />
        </Form>
        <p>My name is {this.state.name}</p>
      </div>
    )
  }
}
console.log("Server running at http://localhost:%d", port);
