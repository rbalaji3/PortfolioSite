import React, { Component } from 'react';
import Resume from './Resume';
import resumeData from './resumeData';


export default class About extends Component {
  render() {
   let resumeData = this.props.resumeData;
   return (
     <section id="about">
        <div className="row">

           <div className="three columns">

              <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
           </div>

           <div className="nine columns main-col">

              <h2>About Me</h2>
              <p style={{ color: 'white' }}>
              {
                resumeData.aboutme
              }
              </p>

             
           </div>
        </div>
     </section>
   );
 }
}