import { connect } from 'react-redux';
import { login } from '../../redux/reducer';
import React, { useState, Component } from "react";
import { IMAGE } from "../../components/constant";
import "./index.css";

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
      <div className="row">
            <div className="col-md-8 col-lg-8 bg-primary p-0 cover">
                <div className="d-flex h-100 flex-column justify-content-between">
                    <h1 className="home-title title-cover font-medium">
                        Book is a window <br /> to the world
                    </h1>
                    <h5 className="title-cover cover-footer font-medium pb-3">
                        Photo by Mark Pan4ratte on Unsplash
                    </h5>
                </div>
            </div>
            <div className="col-md-4 col-lg-4">
                <div className="row h-cover">
                    <div className="d-flex flex-column">
                        <div className="logo ms-auto p-3 d-none d-lg-block">
                            <img src={IMAGE.MAIN_LOGO} alt="Logo Brand" />
                        </div>
                        <div className="content mt-5">
                            <div className="head mb-5 color-primary">
                                <h1
                                    id="title"
                                    className="fw-bold font-xtrabold"
                                >
                                    Login
                                </h1>
                                <p id="subtitle">
                                    Welcome Back, Please Login <br /> to your
                                    account.
                                </p>
                            </div>
                            <form name="loginForm" onSubmit={this.onSubmit}>
                                <div className="form-group-collection">
                                    <div className="shadow rounded-2 mb-3">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control focus-ring-0 rounded-0 rounded-top"
                                                id="email"
                                                name="email"
                                                placeholder="name@example.com"
                                                autoFocus
                                                onChange={e => this.setState({email: e.target.value})} value={email}
                                            />
                                            <label htmlFor="email" className="color-primary">
                                                Email address
                                            </label>
                                        </div>
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control focus-ring-0 rounded-0 rounded-bottom border-top-0"
                                                id="password"
                                                placeholder="Password"
                                                name="password"
                                                onChange={e => this.setState({password: e.target.value})} value={password}
                                            />
                                            <label htmlFor="password" className="color-primary">
                                                Password
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-between align-items-center mb-5">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    id="remember"
                                                    className="form-check-input"
                                                />
                                                <label
                                                    htmlFor="remember"
                                                    className="form-check-label"
                                                >
                                                    <small className="color-secondary">
                                                        Remember me
                                                    </small>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <p className="color-primary d-sm-none d-lg-block text-end mb-0">
                                                <small>Forgot password</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" className="btn btn-dark px-4 me-1" value="Login" />
                                <a
                                    to={"/register"}
                                    className="btn btn-outline-secondary color-secondary px-4"
                                >
                                    Sign up
                                </a>
                                <div className="message">
                                { isLoginPending && <div>Please wait...</div> }
                                { isLoginSuccess && <div>Success.</div> }
                                { loginError && <div>{loginError.message}</div> }
                                </div>
                            </form>
                        </div>
                        <div className="footer fw-semibold font-bold color-primary mt-auto">
                            <span className="color-secondary font-bold">
                                By signing up, you agree to Book's
                            </span>
                            <br /> Terms and Condition
                            <span className="color-secondary font-bold">&</span>
                            Privacy Policy
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);