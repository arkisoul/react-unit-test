import React from 'react';

import CounterComponent from '../Counter/Counter';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false, count: 0}
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick() {
        this.setState({clicked: true})
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
          <div className="container">
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <button onClick={this.handleClick}>Click me</button>
            <CounterComponent count={this.state.count} />
          </div>
        );
    }
}