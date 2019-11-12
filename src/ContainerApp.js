import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./productActions";
import ReactLoading from "react-loading";
import WeatherCard from "./WeatherCard";
import CheckboxGroup from "./CheckboxGroup";
import BarGraph from "./BarGraph";


class ContainerApp extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      showComponent: false,
      checked:true,
      active: false
     
		}
		this.showComponents = this.showComponents.bind(this);
	      this.handleOnChange = this.handleOnChange.bind(this);

	}

	showComponents(e) {
    
		this.setState({
      showComponent:!this.state.showComponent,
      checked:e.target.checked
      
		});
	}
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  
  }
 
  getDateRange(fullDate, i){ 
    fullDate = fullDate.split(' ');
    var date = fullDate[0].split(/\//);  
    var newDate =  date[0] +" "+fullDate[1];
    var k = new Date(newDate);
    k = k.getFullYear() +"-"+ (k.getMonth() + 1) +"-"+ k.getDate() + " "+fullDate[1]
    return k ;
  }
  getCheckDay(i){
    let checkDay = new Date();
    checkDay = checkDay.getFullYear() +"-"+ (checkDay.getMonth() + 1) +"-"+ (checkDay.getDate() + i) + " 21:00:00";
    return checkDay;
  }
  
  handleOnChange(){
        const currentState = this.state.active;
        this.setState({ active: !currentState });
  }
  
  arrowOnclick(){
    alert("Not implemented yet")
  }

  render() {
    const { error, loading, products } = this.props;
   
    if (error) {
      return <div>Error Fetch JSON! {error.message}</div>;
    }

    if (loading) {
      return  <ReactLoading type={"bars"} color={"black"} />;
    }


    return (
   <div>          
        <CheckboxGroup showComponents={this.showComponents} checked={this.state.checked}/>
        <div  className="img-arrow">
        <img src="https://img.icons8.com/material/24/000000/arrow.png" alt="to-right" style={{float: "right"}} onClick={this.arrowOnclick}></img>
        <img src="https://img.icons8.com/material/24/000000/arrow-pointing-left--v2.png" alt="to-left" onClick={this.arrowOnclick}></img>
          </div>
        <div className="row">
      {products.filter( data => this.getDateRange(data.dt_txt) === this.getCheckDay(0) || this.getDateRange(data.dt_txt) === this.getCheckDay(1) || this.getDateRange(data.dt_txt) === this.getCheckDay(2)).map( lista =>
        <div className="column" >
             <WeatherCard  handleOnChange={this.handleOnChange}  key={lista.dt} temperature={ this.state.showComponent ? Math.round(lista.main.temp * 9/5 - 459.67) + ' °F' : Math.round(lista.main.temp - 273.15) + ' °C'  } date={lista.dt_txt.split(" ")[0]}/>
        </div> 
     )}
        </div>
            {this.state.showComponent ?
             <BarGraph label={products.slice(0, 8).map( lista => Math.round(lista.main.temp * 9/5 - 459.67) + ' °F')}  axis = { products.slice(0, 8).map( lista => lista.main.temp * 9/5 - 459.67)}/> :
             <BarGraph label={products.slice(0, 8).map( lista => Math.round(lista.main.temp - 273.15) + ' °C')}  axis = { products.slice(0, 8).map( lista => lista.main.temp - 273.15)}/>}               
        </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ContainerApp);
