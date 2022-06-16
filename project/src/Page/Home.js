import "./Main.css";
import { FaEthereum } from "react-icons/fa";
import { Card, Button } from "react-bootstrap";
import img from '../Image/origin-banner.png'
import Menu from "./Menu";
import { Component } from "react";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      Items:[]
    }
  }
  deleteRow(_id){  
    axios.delete(`http://localhost:8090/api/items/${_id}`)
      .then(res => {
        console.log(res);  
        console.log(res.data);
      })  
    window.location.reload(true);
 }  
  componentDidMount(){
    axios.get('http://localhost:8090/api/items').then(response =>{
      this.setState({Items: response.data});
      console.log(response.data);
    }).catch(function(error){
      console.log(error);
    })
  }
  render(){
    const Items = this.state.Items;
    

  return (
    <div className="main">
      <Menu></Menu>
      <div className="HomePoster"> 
        <h2 className="texth2">Axie Infinity: Origin is live in Early Access!</h2>
        <h4 className="texth4"> 
          The day is here! Axie Infinity: Origin is now available to play via
          Mavis Hub!
        </h4>
        <div className="ClickButton">
          <a target="_blank" href="https://welcome.skymavis.com/download/">
            Download on Mavis Hub
          </a>
        </div>
        <img className="image" src={img} alt="Snow" style={{width:'100%', height:'100%'}}></img>
      </div>
      <div className="HomeMainSecond">
        <div className="Header-HomeMainSecond">
          <h3>Header1</h3>
        </div>
        <div className="Detail-HomeMainSecond">
        <h3>Total Item</h3>
          <h3>{Items.length}</h3>
        </div>
        <div className="Detail-Volume-HomeMainSecond">
          <h3>Total Volume</h3>
          {/* <h3>{Voloumn}</h3> */}
        </div>
      </div>
      <div className="row">
      {this.state.Items.map((Item, index) => (
        
        <Card className="btn-card" key={index}>
          
          <Card.Body className="bodycard">
            <center>

              <Card.Img className="CardImg" variant="top" src={Item.itemSaleImg} />
              <Card.Title className="text">
                {Item.ItemPrice}
                <FaEthereum className="ether"></FaEthereum>
              </Card.Title>
              <br></br>
              <Card.Footer style={{ color: "white", fontSize: "14px" }}>
                {Item.ItemOwner}
              </Card.Footer>
              <br></br>
              <Card.Footer style={{ color: "white", fontSize: "14px" }}>
                {Item.ItemDetail}
              </Card.Footer>
              <br></br>
            </center>
            {/* <Button variant="white" onClick={()=> this.deleteRow(Item._id)} >Xac Nhan</Button>  */}
          </Card.Body>
        </Card>
  ))}
      </div>
    </div>
  );
}
}
export default Home;
