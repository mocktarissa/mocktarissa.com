import React, { Component } from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                        <h3 class="title">AWS certified Developer Associate</h3>
                        <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
                    </div>
                </div>

                {/* <!-- timeline item --> */}
                <div class="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                    <div class="content">
                        <span class="time">2020 - Present</span>
                        <h3 class="title">Saleforce Certified Solution Architect</h3>
                        <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
                    </div>
                </div>

                {/* <!-- timeline item --> */}
                <div class="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                    <div class="content">
                        <span class="time">2016 - 2020</span>
                        <h3 class="title">Bachelor Degree</h3>
                        <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
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
                        <span class="time">2019 - Present</span>
                        <h3 class="title">Full-stack Web developer</h3>
                        <p><em>Digital Trade Inc.</em> Working on the bilet.com project a leading  </p>
                    </div>
                </div>

                {/* <!-- timeline item --> */}
                <div class="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                    <div class="content">
                        <span class="time">2017 - 2013</span>
                        <h3 class="title">Front-End Developer</h3>
                        <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
                    </div>
                </div>

                {/* <!-- timeline item --> */}
                <div class="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                    <div class="content">
                        <span class="time">2015 - 2016</span>
                        <h3 class="title">Back-End Developer</h3>
                        <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
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