import React from "react";
import './Season.css';
import Clock from "./ClockComponent";

const SeasonConfig={
    summer:{
        text : "Let's hit the beach",
        iconName : "sun"
    },
    winter:{
        text : "Burr, it's chilly",
        iconName : "snowflake"
    }
}


const getSeason = (lat , month) => {
    if (month > 2 && month < 9 ){
        return lat > 0 ? 'summer' :'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
};
const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text , iconName} = SeasonConfig[season]
//{`${icon} icon`}

    return <div className= {`seasondisplay ${season}`}>
                <i className={`icon-left massive ${iconName} icon`}/>
                <h1>{text}</h1>
                <p className='time'><Clock/></p>
                <i className={`icon-right massive ${iconName} icon`}/>
            </div>


}
export default SeasonDisplay;