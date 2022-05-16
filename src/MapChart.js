import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  Line
} from "react-simple-maps";
import AuthorData from "./authors.json"
import './MapChart.css'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./slider.css";


function valuetext(value) {
    return `${value}°C`;
  }

const marks = [
    {
        value: -500,
        label: '500 BCE',
    },
    {
        value: 1,
        label: '1 CE',
        },
    {
        value: 500,
        label: '500 CE',
    },
    {
        value: 1000,
        label: '1000 CE',
    },
    {
        value: 1500,
        label: '1500 CE',
    },
    {
        value: 2000,
        label: '2000 CE',
    },
];

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const minDistance = 50;

const MapChart = () => {

    const [value1, setValue1] = useState([-500, -400]);
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked)
    }

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
        return;
        }

        if (activeThumb === 0) {
        setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
        setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };  

    return (
    <>
        <Box className="slider-box">
            <Slider
                min={-500}
                max={2022}
                getAriaLabel={() => 'Minimum distance'}
                value={value1}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                marks={marks}
            />
        </Box>
        <p className="mapCaption">Move the slider to select a timeframe.</p>
        <ComposableMap>
            <ZoomableGroup zoom={1}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                    geographies
                        .map(geo => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#EAEAEC"
                            stroke="#D6D6DA"
                        />
                        ))
                    }
                </Geographies>
                    {AuthorData.filter(author => (!checked ? author.Required : true) && parseInt(author.TimeDied) > value1[0] && parseInt(author.TimeDied) < value1[1]).map((info) => (   
                        <Marker 
                            key={info.Name} 
                            id="markerWithText"
                            coordinates={info.CoordsDied}>
                            <g
                                fill="none"
                                stroke="#808080"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform="translate(-12, -10)"
                            >
                                <circle cx="12" cy="10" r="3" />
                            </g>
                            <text
                                textAnchor="middle"
                                x={14}
                                style={{ fontFamily: "system-ui", fill: "#5D5A6D"}}
                                className="caption hidden-text"
                            >
                                {info.Name}
                            </text>
                        </Marker>
                    ))}
                    {AuthorData.filter(author => (!checked ? author.Required : true) && parseInt(author.TimeDied) > value1[0] && parseInt(author.TimeDied) < value1[1]).map((info) => (   
                        <Line  
                            key={info.Name}
                            coordinates={[info.CoordsBorn, info.CoordsDied]}
                            stroke="#42a5f5"
                            strokeWidth={2}
                            strokeLinecap="round"
                        />               
                    ))}
                    {AuthorData.filter(author => (!checked ? author.Required : true) && parseInt(author.TimeBorn) > value1[0] && parseInt(author.TimeBorn) <= value1[1]).map((info) => (  
                        <Marker
                            id="markerWithText" 
                            key={info.Name} 
                            coordinates={info.CoordsBorn}>
                            <g
                                fill="none"
                                stroke="#42a5f5"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform="translate(-12, -10)"
                            >
                                <circle cx="12" cy="10" r="3" />
                            </g>
                            <text
                                textAnchor="middle"
                                x={14}
                                style={{ fontFamily: "system-ui", fill: "#5D5A6D"}}
                                className="caption hidden-text"
                            >
                                {info.Name}
                            </text>
                        </Marker>
                    ))}
            </ZoomableGroup>
        </ComposableMap>
        <p className="mapCaption">Blue circles represent an author's birth, while grey circles represent an author's death. Blue lines have been drawn between these points for clarity.</p>
        <FormGroup>
            <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}/>} label="Show Optional Works" />
        </FormGroup>
    </>
  );
};

export default MapChart;