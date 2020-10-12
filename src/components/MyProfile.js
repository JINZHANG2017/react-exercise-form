import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state={
    name:'',
    gender:'',
    description:''
  }
  change=function(e,inputid){
    this.setState({[inputid]:e.target.value});
  }

  handleFormSubmit=(event)=>{
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h1>My Profile</h1>
        <div class="form-group">
          <label htmlFor="name">Name:</label>
          <input className="form-control" id="name" value={this.state.name} onChange={(e) =>this.change(e,"name")}></input>
        </div>
        <div class="form-group">
          <label htmlFor="gender">Gender:</label>
          <input className="form-control" id="gender" value={this.state.gender} onChange={(e) =>this.change(e,"gender")}></input>
        </div>
        <div class="form-group">
          <label htmlFor="description">Description</label>
          <input className="form-control" id="description" value={this.state.description} onChange={(e) =>this.change(e,"description")}></input>
        </div>
        <button type="submit"   disabled={(this.state.name===''||this.state.gender===''||this.state.description==='')} className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default MyProfile;


