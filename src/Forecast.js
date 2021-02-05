import React from "react";
import "./forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="next-5">
        <p class="sub-heading">Next 5 Days</p>
        <div class="row friday">
          <div class="col-4">
            <p class="day-otw">Friday</p>
          </div>
          <div class="col-4">
            <p class="h-l">
              <strong>45°</strong>/33°
            </p>
          </div>
          <div class="col-4 emoji">
            🌧
            <br />
            <div class="weather-descr">Showers</div>
          </div>
        </div>
        <div class="row saturday">
          <div class="col-4">
            <p class="day-otw">Saturday</p>
          </div>
          <div class="col-4">
            <p class="h-l">
              <strong>50°</strong>/43°
            </p>
          </div>
          <div class="col-4 emoji">
            🌤
            <br />
            <div class="weather-descr">Sunny</div>
          </div>
        </div>
        <div class="row sunday">
          <div class="col-4">
            <p class="day-otw">Sunday</p>
          </div>
          <div class="col-4">
            <p class="h-l">
              <strong>50°</strong>/33°
            </p>
          </div>
          <div class="col-4 emoji">
            🌧
            <br />
            <div class="weather-descr">Showers</div>
          </div>
        </div>
        <div class="row monday">
          <div class="col-4">
            <p class="day-otw">Monday</p>
          </div>
          <div class="col-4">
            <p class="h-l">
              <strong>42°</strong>/36°
            </p>
          </div>
          <div class="col-4 emoji">
            ⛅
            <br />
            <div class="weather-descr">Partly cloudy</div>
          </div>
        </div>
        <div class="row tuesday">
          <div class="col-4">
            <p class="day-otw">Tuesday</p>
          </div>
          <div class="col-4">
            <p class="h-l">
              <strong>51°</strong>/41°
            </p>
          </div>
          <div class="col-4 emoji">
            ⛅
            <br />
            <div class="weather-descr">Partly cloudy</div>
          </div>
        </div>
      </div>
      <footer>
        <a href="https://github.com/karyraquell/weather-react" target="_blank" rel="noreferrer">Open-source code by:</a>
          Karina Palomeque
      </footer>
    </div>
  );
}