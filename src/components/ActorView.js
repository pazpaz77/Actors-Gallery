class ActorsView extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        colorindex: 0
      };
    }
  
    render() {
  
      const lalala = (event) =>{
        this.setState({
          lalaSomthing: event.target.value
        }
      );
      }
      
      return (
        <div class="card" style="width: 18rem;">
           <img class="card-img-top" src={this.props.img} alt="Card image cap"></img>

       </div>
      );
    }
  
  }
  