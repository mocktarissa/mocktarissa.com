import React, { Component } from "react";

class MyStack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="services">
        <div class="container">
          {/* <!-- section title --> */}
          <h2 class="section-title wow fadeInUp">Services</h2>

          <div class="spacer" data-height="60"></div>

          <div class="row">
            <div class="col-md-4">
              {/* <!-- service box --> */}
              <div
                class="service-box rounded data-background padding-30 text-center text-light shadow-blue"
                data-color="#6C6CE5"
              >
                <img src="images/service-1.svg" alt="UI/UX design" />
                <h3 class="mb-3 mt-0">UI/UX design</h3>
                <p class="mb-0">
                  I build designs and Mockups using Figma and Adobe XD
                </p>
              </div>
              <div class="spacer d-md-none d-lg-none" data-height="30"></div>
            </div>

            <div class="col-md-4">
              {/* <!-- service box --> */}
              <div
                class="service-box rounded data-background padding-30 text-center shadow-yellow"
                data-color="#F9D74C"
              >
                <img src="images/service-2.svg" alt="UI/UX design" />
                <h3 class="mb-3 mt-0">Web Development</h3>
                <p class="mb-0">
                  My main stack are React js or Vanila js/Jquery for the front
                  end and Node Js, Ruby on Rails or Laravel for the Backend. I
                  also build Wordpress themes and plugins as well as Shopify
                  themes and Apps.
                </p>
              </div>
              <div class="spacer d-md-none d-lg-none" data-height="30"></div>
            </div>

            <div class="col-md-4">
              {/* <!-- service box --> */}
              <div
                class="service-box rounded data-background padding-30 text-center text-light shadow-pink"
                data-color="#F97B8B"
              >
                <img src="images/client-1.svg" alt="UI/UX design" />
                <h3 class="mb-3 mt-0">Mobile Developement</h3>
                <p class="mb-0">
                  I build mobile apps using React Native for Cross-Platform
                  Development
                </p>
              </div>
            </div>
          </div>

          <div class="mt-5 text-center">
            <p class="mb-0">
              Looking for a custom job? <a href="#contact">Click here</a> to
              contact me! 👋
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default MyStack;
