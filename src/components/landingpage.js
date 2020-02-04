import React from 'react';

import { Grid, Cell } from 'react-mdl';

class Landing extends React.Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Information Systems Engineer</h1>

                            <hr/>

                            <p>Python | C # | MSSQL | React</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/g%C3%B6rkem-%C3%B6zkan-9257a5184/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/grkmzkn" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                {/* Freecodecamp */}
                                <a href="https://twitter.com/grkmzkn0" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                </a>

                                {/* Youtube */}
                                <a href="https://steamcommunity.com/id/daytolele/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-steam-square" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;