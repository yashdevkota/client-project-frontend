import React, { Component } from 'react';
import axios from 'axios';
import * as Constants from '../constants'


const Client = props => (
  <tr>
    <td>{props.client.name}</td>
    <td>{props.client.gender}</td>
    <td>{props.client.phone}</td>
    <td>{props.client.email}</td>
  </tr>
)

export default class ClientsList extends Component {
  constructor(props) {
    super(props)

    this.state = { clients: [] }
  }

  componentDidMount() {
    axios.get(Constants.SERVER_URL + 'clients')
      .then(response => {
        console.log(response)
        this.setState({ clients: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  clientsList() {
    return this.state.clients.map(currentclient => {
      console.log(currentclient);
      const test = <Client client={currentclient} />
      console.log(test);
      return <Client client={currentclient} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Clients</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.clientsList()}
          </tbody>
        </table>
      </div>
    )
  }
}