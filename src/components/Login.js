import React, {Component} from "react";
import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: "",
            txtPassword: ""
        }
    };

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    };

    onSubmit = (event) => {
        event.preventDefault();
        var {txtUsername, txtPassword} = this.state;
        if (txtUsername === "admin" && txtPassword === "123456") {
            localStorage.setItem("user", JSON.stringify({
                txtUsername: txtUsername,
                txtPassword: txtPassword
            }));
        }
    }

    render() {
        var {txtUsername, txtPassword} = this.state;
        var loggedUser = localStorage.getItem("user");
        var { location } = this.props;
        if (loggedUser !== null) {
            return (
                <Redirect to={{
                    pathname : "/shop",
                    state : {
                        from : location
                    }
                }} />
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <form onSubmit={this.onSubmit}>
                            <legend>Đăng nhập</legend>
                            <div className="form-group">
                                <label className="custom-file">Tài Khoản</label>
                                <input type="text" name="txtUsername"
                                       className="form-control"
                                       value={txtUsername}
                                       onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="custom-file">Mật khẩu</label>
                                <input type="password" name="txtPassword"
                                       className="form-control"
                                       value={txtPassword}
                                       onChange={this.onChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-success"> Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;