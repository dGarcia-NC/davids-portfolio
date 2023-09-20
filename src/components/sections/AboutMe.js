import { Fragment } from "react";
const bio_ = ` <p>
<strong>Hello! I’m David Garcia.</strong>
Back-end &amp; I'm a developer based out of California. I
have experience in Frontend, Backend, QA, and Management.
I'm also interested in Software Architecture and trade-off
analysis. Feel free to reach out if you'd like to chat.
</p>`;
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">About</span> Me
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
            ></div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Years in Tech . . . . .</strong> 6+
                </li>
                <li>
                  <strong>Country . . . . .</strong> USA
                </li>
                <li>
                  <strong>State . . . . .</strong> California
                </li>
                <li>
                  <strong>Open For Work . . . . .</strong> Yes
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;

// export const AboutMeClassic = () => {
//   return (
//     <div className="content about">
//       {/* title */}
//       <div className="title">About Me</div>
//       {/* content */}
//       <div className="row">
//         <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
//           <div className="text-box">
//             <p>
//             I'm David Garcia, I'm a developer based out of California. I
//             have experience in Frontend, Backend, QA, and Management.
//             I'm also interested in Software Architecture and trade-off
//             analysis. Feel free to reach out if you'd like to chat.
//             </p>
//           </div>
//           <div className="info-list">
//             <ul>
//               <li>
//                 <strong>Years in Tech . . . . .</strong> 6+
//               </li>
//               <li>
//                 <strong>Country . . . . .</strong> USA
//               </li>
//               <li>
//                 <strong>State . . . . .</strong> California
//               </li>
//               <li>
//                 <strong>Open For Work . . . . .</strong> Yes
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="clear" />
//       </div>
//     </div>
//   );
// };
