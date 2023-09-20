import { Fragment } from "react";
const ResumeSection = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Resume</div>
        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="name">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h active">
                <div className="date">2023 - Present</div>
                <div className="name">Contracted Tech Subject SME</div>
                <div className="company">The Bridging Group</div>
                <p>
                Reviewing agency data systems, co-facilitating evaluation
                planning sessions, developing our evaluation plan and tools,
                and conducting learning sessions and storytelling to improve
                our processes and outcomes.
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2023</div>
                <div className="name">Contracted Content Manager</div>
                <div className="company">Savelle LLC</div>
                <p>
                Efficiently managed an international e-commerce website with
                multilingual content, spanning multiple countries, and utilized
                Sanity CMS to optimize the content management system for effective
                remote collaboration and high-quality outcomes.
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2022 - 2023</div>
                <div className="name">Backend Developer</div>
                <div className="company">GoodRx</div>
                <p>
                Contributed to the Subscription Service and used Golang on the
                backend to reduce latency to 50%. Collaborated with the Gold Frontend
                team, used React and TypeScript to tackle bug issues. Worked with
                the Gold API team, using GraphQL I created and updated endpoints.
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2022</div>
                <div className="name">Contracted Frontend Developer</div>
                <div className="company">Next Chapter Project</div>
                <p>
                I developed and implemented new features, fixed bugs, conducted
                informative meetings, and provided JavaScript tutoring to enhance
                the functionality and user experience of a web application while
                ensuring optimal performance.
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2016 - 2022</div>
                <div className="name">Lead QA Engineer</div>
                <div className="company">iFood Decision Sciences</div>
                <p>
                {`I led a QA team for over 6 years, overseeing the development of
                end-to-end tests in Java with WebDriver and Selenium for full
                coverage, contributed to bulk-loading scripts in Python for > 100,000
                records, and managed the team using Agile/Scrum methodologies.`}
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2015</div>
                <div className="name">Software Engineering Intern</div>
                <div className="company">LanguageLine Solutions</div>
                <p>
                Developed a location algorithm using Java, MongoDB, and SalesForce
                to track 100% of abandoned calls. Produced an interactive map using
                ElastiSearch and Kibana to view call abandonment in Realtime
                throughout the US
                </p>
              </div>
            </div>
          </div>
          {/* education */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-university" />
              </div>
              <div className="name">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h">
                <div className="date">2013 - 2016</div>
                <div className="name">CSU-Monterey Bay</div>
                <div className="company">Monterey, CA</div>
                <p>
                  {`Bachelor's`} Degree in Computer Science with an emphasis
                  in Software Engineering
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2013 - 2015</div>
                <div className="name">Hartnell College</div>
                <div className="company">Salinas, CA</div>
                <p>
                  {`Associate's`} Degree in Language and Rationality
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2022</div>
                <div className="name">Hack Reactor</div>
                <div className="company">Remote</div>
                <p>
                  Certificate in Advanced Software Engineering
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2023</div>
                <div className="name">Amazon Web Services</div>
                <div className="company">Remote</div>
                <p>
                  Certified Cloud Practitioner
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2023</div>
                <div className="name">Google</div>
                <div className="company">Remote</div>
                <p>
                  Certified IT Support Services
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2018</div>
                <div className="name">SimpliLearn</div>
                <div className="company">Remote</div>
                <p>
                  Certified Automation with Selenium
                </p>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default ResumeSection;

// export const ResumeSectionFitness = () => {
//   return (
//     <div className="content resume">
//       {/* title */}
//       <div className="title">
//         <div className="first-letter">Resume</div>
//       </div>
//       {/* content */}
//       <div className="row">
//         {/* experience */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-briefcase" />
//             </div>
//             <div className="name">Experience</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h active">
//               <div className="date">2013 - Present</div>
//               <div className="name">Fitness Trainer</div>
//               <div className="company">Gym Club</div>
//               <p>
//                 Inspired clients to push their hardest and do their very best.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2011 - 2012</div>
//               <div className="name">Cardio Trainer</div>
//               <div className="company">High-Intensity Complex</div>
//               <p>
//                 Dynamic sculpting exercises for the perfect balance of cardio
//                 and strength training.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* education */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-university" />
//             </div>
//             <div className="name">Education</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h">
//               <div className="date">2006 - 2008</div>
//               <div className="name">Pace University</div>
//               <div className="company">New York</div>
//               <p>
//                 Pace University is a private university with its main campus in
//                 New York City.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2005 - 2006</div>
//               <div className="name">Fitness Course</div>
//               <div className="company">London</div>
//               <p>Personal trainer and fitness instructor courses in London.</p>
//             </div>
//           </div>
//         </div>
//         <div className="clear" />
//       </div>
//     </div>
//   );
// };
// export const ResumeSectionLawyer = () => {
//   return (
//     <div className="content resume">
//       {/* title */}
//       <div className="title">Resume</div>
//       {/* content */}
//       <div className="row">
//         {/* experience */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-briefcase" />
//             </div>
//             <div className="name">Experience</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h active">
//               <div className="date">2013 - Present</div>
//               <div className="name">Law Director</div>
//               <div className="company">Facebook Inc.</div>
//               <p>
//                 Head of the Law Department which represents and advises the City
//                 in all civil.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2011 - 2012</div>
//               <div className="name">Lawyer Leader</div>
//               <div className="company">Google Inc.</div>
//               <p>
//                 Was part of a client focused organisation that makes a
//                 difference.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2009 - 2010</div>
//               <div className="name">Junior Lawyer</div>
//               <div className="company">ABC Inc.</div>
//               <p>
//                 A fast-growing international pharmaceutical services company.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* education */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-university" />
//             </div>
//             <div className="name">Education</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h">
//               <div className="date">2006 - 2008</div>
//               <div className="name">Law University</div>
//               <div className="company">London</div>
//               <p>
//                 {`Gray's`} Inn, 4 {`Gray's`} Inn Place, Warwick Ct
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2005 - 2006</div>
//               <div className="name">Law Schools</div>
//               <div className="company">London</div>
//               <p>
//                 The Law School of English has over 50 years experience teaching
//                 general.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2004 - 2005</div>
//               <div className="name">London School</div>
//               <div className="company">London</div>
//               <p>
//                 The London School of English has over 100 years experience
//                 teaching general.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="clear" />
//       </div>
//     </div>
//   );
// };
// export const ResumeSectionWritter = () => {
//   return (
//     <div className="content resume">
//       {/* title */}
//       <div className="title">Resume</div>
//       {/* content */}
//       <div className="row">
//         {/* experience */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-briefcase" />
//             </div>
//             <div className="name">Experience</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h active">
//               <div className="date">2013 - Present</div>
//               <div className="name">Writer Director</div>
//               <div className="company">DBBooks</div>
//               <p>
//                 Collaborate with creative and development teams on the execution
//                 of ideas.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2011 - 2012</div>
//               <div className="name">Team Leader</div>
//               <div className="company">ABC Inc.</div>
//               <p>
//                 A team leader is responsible for guiding a group of employees as
//                 they complete a project.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2009 - 2010</div>
//               <div className="name">Business Writer</div>
//               <div className="company">Writer Corporation.</div>
//               <p>Corporate writing is writing for business purposes.</p>
//             </div>
//           </div>
//         </div>
//         {/* education */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-university" />
//             </div>
//             <div className="name">Education</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h">
//               <div className="date">2006 - 2008</div>
//               <div className="name">New York University</div>
//               <div className="company">New York</div>
//               <p>
//                 New York University offers 2 Creative Writing Degree programs.
//                 {`It's`} a large private university in a large city.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2005 - 2006</div>
//               <div className="name">Writing Course</div>
//               <div className="company">London</div>
//               <p>
//                 Creative writing short courses is taught at City, University of
//                 London. Develop writing skills with professional and published
//                 authors.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2004 - 2005</div>
//               <div className="name">New York School</div>
//               <div className="company">Brooklyn, NY, United States</div>
//             </div>
//           </div>
//         </div>
//         <div className="clear" />
//       </div>
//     </div>
//   );
// };
// export const ResumeSectionMusician = () => {
//   return (
//     <div className="content resume">
//       {/* title */}
//       <div className="title">Resume</div>
//       {/* content */}
//       <div className="row">
//         {/* experience */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-briefcase" />
//             </div>
//             <div className="name">Experience</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h active">
//               <div className="date">2018 - Present</div>
//               <div className="name">Schenectady Symphony Orchestra</div>
//               <div className="company">New York</div>
//               <p>Third chair, first violin section.</p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2016 - 2018</div>
//               <div className="name">Utica Symphony Orchestra</div>
//               <div className="company">New York</div>
//               <p>
//                 First violin section; orchestra is currently without contract.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2014 - 2016</div>
//               <div className="name">Frequent freelance</div>
//               <div className="company">New York</div>
//               <p>
//                 Work in: New York Capital Region for Cohoes Music Hall, Hubbard
//                 Hall Opera Theater.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* education */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-university" />
//             </div>
//             <div className="name">Education</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h">
//               <div className="date">2011 - 2014</div>
//               <div className="name">Peabody Institute</div>
//               <div className="company">Baltimore</div>
//               <p>
//                 M.M. in Performance, Peabody Institute {`–`} Baltimore, MD 2015.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2008 - 2011</div>
//               <div className="name">American University</div>
//               <div className="company">Washington</div>
//               <p>
//                 B.A. in Music, American University {`–`} Washington, D.C. 2012.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2000 - 2008</div>
//               <div className="name">New York School of Music</div>
//               <div className="company">New York</div>
//               <p>Great school! The teachers really care about the students.</p>
//             </div>
//           </div>
//         </div>
//         <div className="clear" />
//       </div>
//     </div>
//   );
// };

// export const ResumeSectionClassic = () => {
//   return (
//     <div className="content resume">
//       {/* title */}
//       <div className="title">Resume</div>
//       {/* content */}
//       <div className="row">
//         {/* experience */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="ion ion-briefcase" />
//             </div>
//             <div className="name">Experience</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h active">
//               <div className="date">2013 - Present</div>
//               <div className="name">Art Director</div>
//               <div className="company">Facebook Inc.</div>
//               <p>
//                 Collaborate with creative and development teams on the execution
//                 of ideas.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2011 - 2012</div>
//               <div className="name">Front-end Developer</div>
//               <div className="company">Google Inc.</div>
//               <p>
//                 Monitored technical aspects of the front-end delivery for
//                 several projects.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2009 - 2010</div>
//               <div className="name">Senior Developer</div>
//               <div className="company">Abc Inc.</div>
//               <p>Optimize website performance using latest technology.</p>
//             </div>
//           </div>
//         </div>
//         {/* education */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="ion ion-university" />
//             </div>
//             <div className="name">Education</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h">
//               <div className="date">2006 - 2008</div>
//               <div className="name">Art University</div>
//               <div className="company">New York</div>
//               <p>
//                 {`Bachelor's`} Degree in Computer Science ABC Technical
//                 Institute, Jefferson, Missouri
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2005 - 2006</div>
//               <div className="name">Programming Course</div>
//               <div className="company">Paris</div>
//               <p>Coursework - Git, WordPress, Javascript, iOS, Android.</p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2004 - 2005</div>
//               <div className="name">Web Design Course</div>
//               <div className="company">London</div>
//               <p>
//                 Converted Photoshop layouts to web pages using HTML, CSS, and
//                 JavaScript
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="clear" />
//       </div>
//     </div>
//   );
// };
