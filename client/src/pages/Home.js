import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {

    return (
        <div className="home">

            <div class="container">
                <h1>Free Online Chat With No Registration</h1>
                <Link className="button" to="/chat">
                    Start Chat Now
                </Link>
                <p>
                    This website is an online free chat. <br/>
                    With him, you can meet new friends from all over the world. For that, u dont need to registrate or download the application. <br/>
                </p>
                <svg id="wave" viewBox="0 0 1440 130" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="url(#sw-gradient-0)" d="M0,65L18.5,60.7C36.9,56,74,48,111,43.3C147.7,39,185,39,222,41.2C258.5,43,295,48,332,43.3C369.2,39,406,26,443,36.8C480,48,517,82,554,86.7C590.8,91,628,65,665,62.8C701.5,61,738,82,775,93.2C812.3,104,849,104,886,88.8C923.1,74,960,43,997,36.8C1033.8,30,1071,48,1108,52C1144.6,56,1182,48,1218,36.8C1255.4,26,1292,13,1329,17.3C1366.2,22,1403,43,1440,45.5C1476.9,48,1514,30,1551,36.8C1587.7,43,1625,74,1662,88.8C1698.5,104,1735,104,1772,99.7C1809.2,95,1846,87,1883,69.3C1920,52,1957,26,1994,15.2C2030.8,4,2068,9,2105,21.7C2141.5,35,2178,56,2215,71.5C2252.3,87,2289,95,2326,97.5C2363.1,100,2400,95,2437,97.5C2473.8,100,2511,108,2548,104C2584.6,100,2622,82,2640,73.7L2658.5,65L2658.5,130L2640,130C2621.5,130,2585,130,2548,130C2510.8,130,2474,130,2437,130C2400,130,2363,130,2326,130C2289.2,130,2252,130,2215,130C2178.5,130,2142,130,2105,130C2067.7,130,2031,130,1994,130C1956.9,130,1920,130,1883,130C1846.2,130,1809,130,1772,130C1735.4,130,1698,130,1662,130C1624.6,130,1588,130,1551,130C1513.8,130,1477,130,1440,130C1403.1,130,1366,130,1329,130C1292.3,130,1255,130,1218,130C1181.5,130,1145,130,1108,130C1070.8,130,1034,130,997,130C960,130,923,130,886,130C849.2,130,812,130,775,130C738.5,130,702,130,665,130C627.7,130,591,130,554,130C516.9,130,480,130,443,130C406.2,130,369,130,332,130C295.4,130,258,130,222,130C184.6,130,148,130,111,130C73.8,130,37,130,18,130L0,130Z"></path></svg>
            </div>
            
            <div class="container-2">
                <div className="home-anonymous">
                    <h3>Chat Anonymously</h3>
                    <p>The chat service is completely anonymous, the stranger you chat with cannot see who you are.</p>
                </div>
                <div className="home-strangers">
                    <h3>Talk to Strangers</h3>
                    <p>A great way to expand you social network is to talk to strangers.</p>
                </div>
                <div className="home-mobile">
                    <h3>Chat on Mobile</h3>
                    <p>This website also supports mobile, so you can chat from where you want.</p>
                </div>
            </div>

        </div>
        
    );
};

export default Home;