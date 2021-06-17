import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import "../styles/App.css";

const App = (props) => {
  const { location } = props;
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
