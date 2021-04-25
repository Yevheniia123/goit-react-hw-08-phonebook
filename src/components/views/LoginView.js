import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperation from '../../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBotton: 15,
  },
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Login page</h1>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onLogin: authOperation.logIn,
};
export default connect(null, mapDispatchToProps)(LoginView);
