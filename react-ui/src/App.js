import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from './Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      contacts: [{createddate: "this Date", name: "this Name", phone: "this Phone",title: "this Title", email: "this Email", sfid: "this Id"}],
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        console.log('response');
        console.log(response);
        return response.json();
      })
      .then(json => {
        let contactsList = new Array();
        for(let i=0; i<=json.length; i++)
        {
          let contact = {createddate: "", name: "", phone: "",title: "", email: "", sfid: ""};
          contact.createddate = json[i].createddate;
          contact.name = json[i].name;
          contact.phone = json[i].phone;
          contact.title = json[i].title;
          contact.email = json[i].email;
          contact.sfid = json[i].sfid;
          contact.id = i+1;
          console.log(contact);
          console.log(contact.name);
          contactsList.concat(contact);
        }

        console.log('contacts');
        console.log(contactsList);

        this.setState({
          message: 'this is new message',
          contacts: contactsList,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    return (
      <div className="App">
        <Table  contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
