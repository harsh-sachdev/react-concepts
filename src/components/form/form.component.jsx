import React from "react";

class Form extends React.Component {
  state = {
    username: "",
    password: ""
  };

  submitInput = React.createRef();

  handleChange = e => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.submitInput.current.innerHTML = JSON.stringify(this.state);
  };

  render() {
    return (
      <div className="form" onSubmit={e => this.handleSubmit(e)}>
        <form>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            value={this.state.firstName}
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <button type="submit">Submit</button>
        </form>
        <h3 ref={this.submitInput}>asda</h3>
      </div>
    );
  }
}

export default Form;
