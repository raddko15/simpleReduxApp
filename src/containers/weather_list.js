/**
 * Created by FBC834 on 26-Jul-17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';



class WeatherList extends Component {
  renderWeather(cityData) {
   const temps = cityData.list.map(weather => weather.main.temp - 273);
   const pressures = cityData.list.map(weather => weather.main.pressure);
   const humidities = cityData.list.map(weather => weather.main.humidity);

   console.log(temps);

    return (
      <tr key={cityData.city.id}>
        <td width="25%">{cityData.city.name} </td>
        <td width="25%"><Chart data={temps} color="orange" units="°C" /></td>
        <td width="25%"><Chart data={pressures} color="red" units ="hPa" /></td>
        <td width="25%"><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}
export default connect(mapStateToProps)(WeatherList);