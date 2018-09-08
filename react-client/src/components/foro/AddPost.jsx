import React from 'react';

class AddPost extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     description:""
   }
   this.add = this.add.bind(this);
   this.updateDescription = this.updateDescription.bind(this);
    }
 updateDescription(e){
   this.setState({
     description: e.target.value
   })
 }

 add(){
   this.props.addPost(this.state.description);
   this.setState({
     description:""
   })
 }

 render () {
   return(
       <div>
      Description:
        <input onChange={this.updateDescription} value={this.state.description}></input>
       <br />
          <button onClick={this.add}>Add Grocery</button>

     </div>);
 }
}

export default AddPost;
