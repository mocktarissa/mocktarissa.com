import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="experience">
        <div class="container">
          {/* <!-- section title --> */}
          <h2 class="section-title wow fadeInUp">Experience</h2>

          <div class="spacer" data-height="60"></div>

          <div class="row">
            <div class="col-md-6">
              {/* <!-- timeline wrapper --> */}
              <div class="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
                {/* <!-- timeline item --> */}
                <div class="timeline-container wow fadeInUp">
                  <div class="content">
                    <span class="time">2020 - Present</span>
                    <h3 class="title">
                      Lead Full Stack Developper at{" "}
                      <em>Neo Software and Cloud Solutions LLC</em>
                      <a href="https://bilet.com">(neosoftwarellc.com</a> )
                    </h3>
                    <p>
                      After comming in as a react native developper I climbed
                      the ranks and became a core member of the operations in
                      the company
                    </p>
                  </div>
                </div>
                {/* <!-- timeline item --> */}
                <div class="timeline-container wow fadeInUp">
                  <div class="content">
                    <span class="time">2020 - Present</span>
                    <h3 class="title">
                      Software Engineer at <em>Digital Trade</em>{" "}
                      <a href="https://bilet.com">(Bilet.com</a> )
                    </h3>
                    <p>
                      After working as a part-time Junior Backend Engineer in
                      the company as Student, after my graduation I was offered
                      a full-time position. My duty involved bulding web and
                      Mobile apps, using the agile methodology as well as
                      maintaining the CI/CD pipelines for automatic deployment
                      on our Digital Ocean clusters.{" "}
                    </p>
                  </div>
                </div>

                {/* <!-- timeline item --> */}
                <div
                  class="timeline-container wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div class="content">
                    <span class="time">May 2020 - July 2020</span>
                    <h3 class="title">
                      Software Engineering Intern at Flutterwave Inc
                      <em>
                        <a href="https://flutterwave.com">(Flutterwave)</a>
                      </em>
                    </h3>
                    <p>
                      Being a self taught Node JS currently planning to complete
                      the training to become a certified Saleforce Developer
                    </p>
                  </div>
                </div>

                {/* <!-- timeline item --> */}
                <div
                  class="timeline-container wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div class="content">
                    <span class="time">2016 - 2020</span>
                    <h3 class="title">Bachelor Degree</h3>
                    <p>
                      First Class Dregree and bachelor in
                      <b> Computer Engineering</b> from
                      <a href="https://www.istanbul.edu.tr/en/_">
                        {" "}
                        Istanbul University
                      </a>{" "}
                      one of the 500 University in the World (According to QS
                      World School Ranks)
                    </p>
                  </div>
                </div>

                {/* <!-- main line --> */}
                <span class="line"></span>
              </div>
            </div>

            <div class="col-md-6">
              {/* <!-- responsive spacer --> */}
              <div class="spacer d-md-none d-lg-none" data-height="30"></div>

              {/* <!-- timeline wrapper --> */}
              <div class="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
                {/* <!-- timeline item --> */}
                <div class="timeline-container wow fadeInUp">
                  <div class="content">
                    <span class="time">2020 - 2020</span>
                    <h3 class="title">Full-stack Web developer</h3>
                    <p>
                      <em>Digital Trade Inc.</em> Working on the bilet.com
                      project a leading{" "}
                    </p>
                  </div>
                </div>

                {/* <!-- timeline item --> */}
                <div
                  class="timeline-container wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div class="content">
                    <span class="time">2014 - 2019</span>
                    <h3 class="title">Freelance developer</h3>
                    <p>
                      Work on building multiple websites and apps for both
                      academical and leisure purposes on my time away from
                      school including a mockup of famous websites including
                      facebook yelp Instagram and Amazon. 
                    </p>
                  </div>
                </div>

                {/* <!-- timeline item --> */}
                <div
                  class="timeline-container wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div class="content">
                    <span class="time">2018 - 2019</span>
                    <h3 class="title">
                      Virtual Internship (Remotely in United States)
                    </h3>
                    <p>
                      I was granted the{" "}
                      <a href="https://www.theforage.com/">
                        <b>Inside Sherpa Fellowship</b>
                      </a>{" "}
                      and as my internship project I built a stock price
                      visualization web application that display the price of
                      stocks and compared them to other stocks over time. I used
                      React Js in the frontend and Python(Django) in the
                      Backend. I also gained an understanding of financial
                      analysis and Jp Morgan’s own Perspective API.
                    </p>
                  </div>
                </div>

                {/* <!-- main line --> */}
                <span class="line"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
