import React from "react";

import Date from "./Date";
import "./styles.css";

export default function Weather() {
  return (
    <div className="Weather">
      <Date />
      <div className="Forecast">
        <span className="Icon">
          {" "}
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            className="Icon"
            alt="Rainy weather icon. "
          />
        </span>
        <span className="Temp">7</span>
        <span className="Units">
          <a href="#" id="celsius">
            °C
          </a>
          |
          <a href="#" id="fahrenheit">
            °F
          </a>
        </span>
        <span className="todayWeather" id="description">
          Rain
        </span>
        <span className="feelsLike">
          Feels like: <span id="feels-like">5</span>°
        </span>
        <br />
        <div className="Wrapper">
          <div className="row">
            <div className="col highLow">
              <p>🌡</p>
              <strong>
                <span id="high">8</span>°
              </strong>
              /<span id="low">4</span>°
            </div>
            <div className="col Precipitation">
              <p>💧</p>
              <span id="humidity">100</span>%
            </div>
            <div className="col Wind">
              <p>🌬️</p>
              <span id="wind">8</span> km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}