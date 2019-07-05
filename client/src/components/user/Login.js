import React, { Component } from "react";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      username: "",
      password: "",
      
    };
  }
  handleChange = e => {
    
   
    if (e.target.name === "username") {
      this.setState({ username: e.target.value });
    }
    if (e.target.name === "password") {
      this.setState({ password: e.target.value });
    }
   
  };
  handleSubmit = e => {
    e.preventDefault();
    
     console.log('User name : ' + this.state.username)
             console.log('User PAss : ' + this.state.password)
                  const url ='/api/signup'
           const data = {  
              username:this.state.username , 
               
              password: this.state.password}
      fetch(url, { method: 'POST', 
            body: JSON.stringify(data), 
             headers:{ 'Content-Type': 'application/json' } })
             
                  .then(res => res.json() )
                    
                     .catch(error => console.error('Error:', error))
                      .then(response => console.log('Success:', response)); }
   

  render() {
    return (
      <div style={{ backgroundColor: "#0f7986" }}>
        <div>
          <div className="container">
            <div className="text-white  align-items-center text-center justify-content-center">
              <div>
                {" "}
                {/* <img src={logo} width="13%" /> */}
              </div>

              <h4 style={{ marginTop: "1%" }}>Bellevue Medical Center</h4>
            </div>
          </div>
          <div
            className="card"
            style={{
              borderWidth: "10px",
              borderColor: "#0f7986",
              borderStyle: "outset",
              width: "50%",
              margin: "0% 25%",
              borderRadius: "15px"
            }}
          >
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ color: "#0f7986" }}
              >
                Registration
              </h5>
              <form
                style={{
                  marginLeft: "15px",
                  marginRight: "15px",
                  marginTop: "10px"
                }}
              >
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-user" />{" "}
                    </span>
                  </div>
                  <input
                    name="first_name"
                    className="form-control"
                    placeholder=" first_name"
                    defaultValue={this.state.first_name}
                    type="text"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-user-edit" />{" "}
                    </span>
                  </div>
                  <input
                    name="last_name"
                    className="form-control"
                    placeholder=" last_name"
                    defaultValue={this.state.last_name}
                    type="text"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-envelope" />{" "}
                    </span>
                  </div>
                  <input
                    name="email"
                    className="form-control"
                    placeholder="Email address"
                    defaultValue={this.state.email}
                    type="email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-user" />{" "}
                    </span>
                  </div>
                  <input
                    name="username"
                    className="form-control"
                    placeholder="username"
                    defaultValue={this.state.username}
                    type="text"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i className="fa fa-lock" />{" "}
                    </span>
                  </div>

                  <input
                    name="password"
                    className="form-control"
                    placeholder="password"
                    defaultValue={this.state.password}
                    type="text"
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn "
                  style={{
                    backgroundColor: "#0f7986",
                    color: "white",
                    float: "right"
                  }}
                  disabled={!(this.state.first_name && this.state.email && this.state.password)}
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn