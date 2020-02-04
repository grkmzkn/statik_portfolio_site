import React from 'react';

import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends React.Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Görkem Özkan</h2>
                        <img 
                            src="https://tpmbc.com/wp-content/uploads/2018/02/UserIcon.png"
                            alt="avatar"
                            style={{height:'250px'}}
                            
                        />
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>Sakarya Üniversitesi Bilişim Sistemleri Mühendisliği 4.sınıf öğrencisiyim.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}} >
                                        <i className="fa fa-phone-square" area-hidden="true"/>
                                        0555-555-55-55
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}} >
                                        <i className="fa fa-envelope" area-hidden="true"/>
                                        gorkem_ozkan98@hotmail.com
                                    </ListItemContent>
                                </ListItem>

                                
                                
                            </List>
                        </div>                           
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;