class ActorsView extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        lalaSomthing: 0
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
        <div>
            <p>Actors</p>
         
       </div>
      );
    }
  
  }
  