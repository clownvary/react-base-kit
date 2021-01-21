/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { getWeatherAction } from './action';
import './style.less';

export class Weather extends React.PureComponent {
  handleClick = () => {
    this.props.getWeatherAction();
  };

  render() {
    const {
      weather: { weatherData, errorInfo },
    } = this.props;
    return (
      <div className="weather">
        <div className="weather__panel">
          {weatherData && (
            <div className="info">
              <p>城市:{weatherData.city}</p>
              <p>温度:{weatherData.temperature}</p>
              <p>空气质量:{weatherData.quality}</p>
              <p>建议:{weatherData.advice}</p>
            </div>
          )}
          {errorInfo && <p className="error">{errorInfo}</p>}
        </div>
        <div className="weather__button">
          <button type="button" onClick={this.handleClick}>
            西安天气
          </button>
        </div>
      </div>
    );
  }
}
// istanbul ignore next
export default connect(
  (state) => ({
    weather: state.weather,
  }),
  {
    getWeatherAction,
  },
)(Weather);
