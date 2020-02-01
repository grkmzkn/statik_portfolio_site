import React from 'react';

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = { activeTabs : 0 };
    }

    toggleCategories(){
        if(this.state.activeTabs === 0){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', 
                        background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPj7WC4KEEoQMueP1KnXhZvwesSdmrMWsgz4A5aF8H2mFbI9gn) center / cover'}}>     
                        React Project #1
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> 
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', 
                        background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPj7WC4KEEoQMueP1KnXhZvwesSdmrMWsgz4A5aF8H2mFbI9gn) center / cover'}}>     
                        React Project #2
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> 
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', 
                        background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPj7WC4KEEoQMueP1KnXhZvwesSdmrMWsgz4A5aF8H2mFbI9gn) center / cover'}}>     
                        React Project #3
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> 
                </Card>
                </div>
                
            )
        }else if(this.state.activeTabs === 1){
            return(
                <div><h1>This is Angular</h1></div>
            )
        }else if(this.state.activeTabs === 2){
            return(
                <div><h1>This is VueJS</h1></div>
            )
        }else if(this.state.activeTabs === 3){
            return(
                <div><h1>This is MongoDB</h1></div>
            )
        }

    }
    

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTabs={this.state.activeTabs} onChange={(tabId) => this.setState({activeTabs : tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>

                        </Cell>
                    </Grid>
                    
                
            </div>
        );
    }
}

export default Projects;