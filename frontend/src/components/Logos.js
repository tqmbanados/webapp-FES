import React, { Component } from "react";
import Image from "material-ui-image";
import { Grid } from "@material-ui/core";


export default class Logos extends Component {
    constructor(props) {
        super(props);
        this.image_path = "static/images/logos/"
    }

    render() {
        return (<Grid container spacing={0} className="Logos">
            <Grid item xs={3} align="center">
                <img src={this.image_path + "suts_negro.png"} className="logoimg"/>
            </Grid>
            <Grid item xs={3} align="center">
                <img src={this.image_path + "convergencia.png"} className="logoimg"/>
            </Grid>
            <Grid item xs={3} align="center">
                <img src={this.image_path + "epaa.png"} className="logoimg"/>
            </Grid>
            <Grid item xs={3} align="center">
                <img src={this.image_path + "vocalia.png"} className="logoimg"/>
            </Grid>
        </Grid>);
    }
}