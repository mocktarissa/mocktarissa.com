import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
             <section id="about">
		<div className="container">
			
			{/* <!-- section title --> */}
			<h2 className="section-title wow fadeInUp">About Me</h2>

			<div className="spacer" data-height="60"></div>
			
			<div className="row">

				<div className="col-md-3">
					<div className="text-center text-md-left">
						{/* <!-- avatar image --> */}
						<img src="images/avatar-2.svg" alt="Bolby" />
					</div>
					<div className="spacer d-md-none d-lg-none" data-height="30"></div>
				</div>

				<div className="col-md-9 triangle-left-md triangle-top-sm">
					<div className="rounded bg-white shadow-dark padding-30">
						<div className="row">
							<div className="col-md-6">
								{/* <!-- about text --> */}
								<p>I am Mocktar Issa. I have rich experience web development, software engineering and cloud technologies , I also build a few AI projects times to time</p>
								<div className="mt-5 content-about">
									<a href="/download/cv" className="btn btn-default">Download CV</a>
								</div>
								<div className="spacer d-md-none d-lg-none" data-height="30"></div>
							</div>
							<div className="col-md-6">
								{/* <!-- skill item --> */}
								<div className="skill-item">
									<div className="skill-info clearfix">
										<h4 className="float-left mb-3 mt-0">Web Development</h4>
										<span className="float-right">Expert</span>
									</div>
									{/* <div className="progress">
										<div className="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="85" data-color="#FFD15C">
										</div>
									</div> */}
									<div className="spacer" data-height="20"></div>
								</div>

								{/* <!-- skill item --> */}
								<div className="skill-item">
									<div className="skill-info clearfix">
										<h4 className="float-left mb-3 mt-0">Software Engineering</h4>
										<span className="float-right">Expert</span>
									</div>
									{/* <div className="progress">
										<div className="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="95" data-color="#FF4C60">
										</div>
									</div> */}
									<div className="spacer" data-height="20"></div>
								</div>

								{/* <!-- skill item --> */}
								<div className="skill-item">
									<div className="skill-info clearfix">
										<h4 className="float-left mb-3 mt-0">DevOps</h4>
										<span className="float-right">Mid-level</span>
									</div>
									
                  <div className="spacer" data-height="20"></div>
								</div>
                <div className="skill-item">
									<div className="skill-info clearfix">
										<h4 className="float-left mb-3 mt-0">Mobile Development</h4>
										<span className="float-right">Mid-level</span>
									</div>
									
									<div className="spacer" data-height="20"></div>
								</div>
                <div className="skill-item">
									<div className="skill-info clearfix">
										<h4 className="float-left mb-3 mt-0">Machine Learning</h4>
										<span className="float-right">Hobbyist</span>
									</div>
									
									<div className="spacer" data-height="20"></div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
			{/* <!-- row end --> */}

			<div className="spacer" data-height="70"></div>
			
			<div className="row">
				
				<div className="col-md-3 col-sm-6">
					{/* <!-- fact item --> */}
					<div className="fact-item">
						<span className="icon icon-fire"></span>
						<div className="details">
							<h3 className="mb-0 mt-0 number"><em className="count">10</em>+</h3>
							<p className="mb-0">Large Projects completed</p>
						</div>
					</div>
					<div className="spacer d-md-none d-lg-none" data-height="30"></div>
				</div>

				<div className="col-md-3 col-sm-6">
					{/* <!-- fact item --> */}
					<div className="fact-item">
						<span className="icon icon-screen-desktop"></span>
						<div className="details">
							<h3 className="mb-0 mt-0 number"><em className="count">30</em>+</h3>
							<p className="mb-0"> Millions of Lines of code</p>
						</div>
					</div>
					<div className="spacer d-md-none d-lg-none" data-height="30"></div>
				</div>

				<div className="col-md-3 col-sm-6">
					{/* <!-- fact item --> */}
					<div className="fact-item">
						<span className="icon icon-people"></span>
						<div className="details">
							<h3 className="mb-0 mt-0 number"><em className="count">50</em>+</h3>
							<p className="mb-0">Satisfied clients</p>
						</div>
					</div>
					<div className="spacer d-md-none d-lg-none" data-height="30"></div>
				</div>

				<div className="col-md-3 col-sm-6">
					{/* <!-- fact item --> */}
					<div className="fact-item">
						<span className="icon icon-badge"></span>
						<div className="details">
							<h3 className="mb-0 mt-0 number"><em className="count">35</em></h3>
							<p className="mb-0">Open Source projects</p>
						</div>
					</div>
				</div>

			</div>

		</div>
		
	</section>
 
         );
    }
}
 
export default About;