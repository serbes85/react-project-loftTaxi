import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import OrderTaxi from "../OrderTaxi";
import "./Map.css";
import { Grid } from "@material-ui/core";

class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  removeRoute = () => {
    if (this.map) {
      this.map.removeLayer("route");
      this.map.removeSource("route");
    }
  };
  addRoute = (coords) => {
    if (this.map) {
      this.map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: coords,
            },
          },
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#ffc617",
          "line-width": 8,
        },
      });
      this.map.flyTo({ center: coords[0], zoom: 9 });
    }
  };

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2VyYmVzODUiLCJhIjoiY2tkZTRxN2xuMXprYzM0azZ0djZncDg3YSJ9.JtK4UmQUDfdO1T2Lk_2etg";
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.2656504, 59.8029126],
      zoom: 15,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <Grid container>
        <Grid ref={this.mapContainer} />
        <OrderTaxi addRoute={this.addRoute} removeRoute={this.removeRoute} />
      </Grid>
    );
  }
}

export default connect()(Map);
