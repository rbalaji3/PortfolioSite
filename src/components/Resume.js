import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">


      <div className="row education">

      <div className="three columns header-col">
        <h1><span>Education</span></h1>
      </div>

      <div className="nine columns main-col">
        {
          resumeData.education && resumeData.education.map((item)=>{
            return(
              <div className="row item">
                <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                    {item.specialization}
                    <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                    <p>
                    {item.Achievements}
                    </p>
                </div>
              </div>
            )
          })
        }
      </div>
      </div>
         
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Experience</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          <ul>
                              <li>{item.Achievement1}</li>
                              <li>{item.Achievement2}</li>
                              <li>{item.Achievement3}</li>
                              <li>{item.Achievement4}</li>

                        </ul>
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Research</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.research && resumeData.research.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          <ul>
                              <li>{item.Achievement1}</li>
                              <li>{item.Achievement2}</li>
                              <li>{item.Achievement3}</li>
                              <li>{item.Achievement4}</li>

                        </ul>
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
         
         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.skills && resumeData.skills.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p>
                            <ul>
                              <li>{item.Element1}</li>
                              <li>{item.Element2}</li>
                              <li>{item.Element3}</li>
                              <li>{item.Element4}</li>
                              <li>{item.Element5}</li>
                              <li>{item.Element6}</li>
                              <li>{item.Element7}</li>
                              <li>{item.Element8}</li>


                            </ul>
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
{/* 

         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div> */}


      </section>
    );
  }
}