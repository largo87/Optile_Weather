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
     
		}
		this.showComponents = this.showComponents.bind(this);
	}

	showComponents() {
    
		this.setState({
      showComponent:!this.state.showComponent,
      
		});
	}
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  
  }

  


  render() {
    const { error, loading, products } = this.props;
    
  
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return  <ReactLoading type={"bars"} color={"black"} />;
    }


    return (
      <div>          
        <CheckboxGroup showComponents={this.showComponents} />
        <div className="row">
      {products.slice(0, 3).map( lista =>
         
            <div className="column">
            {this.state.showComponent ?  <WeatherCard key={lista.dt} temperature={Math.round(lista.main.temp * 9/5 - 459.67) + ' °F' } date={lista.dt_txt}/> : <WeatherCard key={lista.dt} temperature={Math.round(lista.main.temp - 273.15) + ' °C' } date={lista.dt_txt}/>}
             
            </div> 
          
       )} 
        </div>
         <BarGraph products={products}/>
               
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
