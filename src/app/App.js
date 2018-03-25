import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
  }
  
  async componentDidMount() {
    const { data: users } = await axios.get('https://api.github.com/users');

    this.setState(() => ({
      users,
    }))
  }

  renderUser = (user) => {
    return (     
    <div style={{ display: 'flex', alignItems: 'center' }} key={user.id}>     
      <img width="100" height="100" src={user.avatar_url} />
      <span style={{ margin: '0 20px' }}>{user.login}</span>
      <span>{user.html_url}</span>
    </div>
    )
  }

  render() {
    if(!this.state.users.length) {
      return <div>Loading...</div>
    }

    return (
      <div>
        {this.state.users.map(user => this.renderUser(user))}
      </div>
    );
  }
}

export default App;
