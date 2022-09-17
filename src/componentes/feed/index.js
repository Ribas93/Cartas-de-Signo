import React, {Component} from "react";


class Feed extends Component{
 

render(){

      return(
      <div key={this.props.id}>
          <h2>{this.props.nome}</h2>
           <p> {this.props.curtidas < 2 ? `${this.props.curtidas} Curtida!` : `${this.props.curtidas} Curtidas!`}</p>
           <hr/>
      </div>)
            
        
    


}
}

export default Feed;