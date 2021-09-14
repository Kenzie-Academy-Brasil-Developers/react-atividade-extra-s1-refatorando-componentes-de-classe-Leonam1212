import { Component } from "react";

import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";
import {useState} from "react"
import "./App.css";


const App = () => {
const [weather, setWeather] = useState({})
const [city, setCity] = useState("")

const handleChangeWeather = (weatherData, city) => {
  setWeather(weatherData)
  setCity(city)
}

  return (
    <div className="App">
            <SearchWeather handleChangeWeather={handleChangeWeather} />
            <DisplayWeather weather={weather} city = {city}/>
    </div>
  )
}
export default App;



// class App extends Component {
//   state = {
//     weather: {},
//     city: "",
//   };

//   handleChangeWeather = (weatherData, city) => {
//     this.setState({ weather: weatherData, city: city });
//   };

//   render() {
//     return (
//       <div className="App">
//         <SearchWeather handleChangeWeather={this.handleChangeWeather} />
//         <DisplayWeather info={this.state} />
//       </div>
//     );
//   }
// }

// export default App;
