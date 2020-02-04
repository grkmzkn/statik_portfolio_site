import React from 'react';
import { Grid, Cell } from 'react-mdl';

import Education from './education';
import Experience from './experience';
import Skills from './Skills';

class Resume extends React.Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img 
                                src="https://tpmbc.com/wp-content/uploads/2018/02/UserIcon.png"
                                alt="avatar"
                                style={{height:'200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop:'2em'}}>Görkem ÖZKAN</h2>
                        <h4 style={{color:'grey', fontWeight:'bold'}}>Bilişim Sistemleri Mühendisi</h4>
                        <hr style={{borderTop:'3px solid black', width:'60%'}}/>
                        <p style={{fontWeight:'bold' , fontSize:'14px'}}>Sakarya Üniversitesi Bilişim Sistemleri Mühendisliği</p>
                        <hr style={{borderTop:'3px solid black', width:'60%'}}/>
                        <h5 style={{fontWeight:'bold'}}>Phone</h5>
                        <p style={{fontWeight:'bold'}}>0538 468 41 42</p>
                        <h5 style={{fontWeight:'bold'}}>E-mail</h5>
                        <p style={{fontWeight:'bold'}}>gorkem_ozkan98@hotmail.com</p>
                        <hr style={{borderTop:'3px solid black', width:'60%'}}/>
                        
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>

                        <Education
                            startYear={2012}
                            endYear={2016}
                            schoolName="Küçükyalı Mesleki ve Teknik Anadolu Lisesi"
                            schoolDescription="Bilişim Teknolojileri Alanı"
                        />

                        <Education
                            startYear={2016}
                            endYear={2020}
                            schoolName="Sakarya Üniversitesi"
                            schoolDescription="Bilişim Sistemleri Mühendisliği 4.Sınıf Öğrencisi"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience 
                            startYear={2013}
                            endYear={2013}
                            jobName="Bilen Bilgisayar"
                            jobDescription="Lise zorunlu yaz stajı kapsamında yapmış olduğum staj."
                        />

                        <Experience 
                            startYear={2014}
                            endYear={2014}
                            jobName="Online Bilgisayar"
                            jobDescription="Lise zorunlu yaz stajı kapsamında yapmış olduğum staj."
                        />

                        <Experience 
                            startYear={2018}
                            endYear={2018}
                            jobName="Deha Biodizel & Bitkisel Atık Yağ Toplama"
                            jobDescription="Üniversite zorunlu yaz stajı kapsamında üretim , muhasebe ve lojistik departmanlarında gerçekleştirmiş olduğum işletme stajım."
                        />
                            
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        
                        <h2>Skills</h2>

                        <Skills
                            skill="C#"
                            progress={70}
                        />

                        <Skills
                            skill="MSSQL"
                            progress={80}
                        />

                        <Skills
                            skill="Github"
                            progress={80}
                        />

                        <Skills
                            skill="Python"
                            progress={75}
                        />

                        <Skills
                            skill="React"
                            progress={40}
                        />

                        <Skills
                            skill="HTML-CSS-JS"
                            progress={60}
                        />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;