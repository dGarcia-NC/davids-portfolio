const ContactInfo = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Get in Touch</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51242.29554028716!2d-121.90869840996918!3d36.61089495900445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808de45270b5fb91%3A0xee484909d84a3d5e!2sMonterey%2C%20CA!5e0!3m2!1sen!2sus!4v1695249080979!5m2!1sen!2sus"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Address . . . . .</strong> Monterey County
              </li>
              <li>
                <strong>Email . . . . .</strong><br/>
                AnthonyGarcia833@gmail.com
              </li>
              <li>
                <strong>Phone . . . . .</strong> (831) 915 9299
              </li>
              <li>
                <strong>Open to Work . . . . .</strong> Available
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactInfo;
