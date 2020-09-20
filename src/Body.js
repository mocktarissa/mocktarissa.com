import React from 'react';
import './RICK.png';
import './styles/body.css';
import Home from './components/Home'
// import Contact from './containers/Contact';

import MyWork from './components/MyWork'

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    var background = this.props.background + " jumbotron jumbotron-fluid jb-is"
    return (
      <main>
      <section id="about">
      <Home></Home>
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
									<a href="#" className="btn btn-default">Download CV</a>
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
										<h4 className="float-left mb-3 mt-0">Machine Learning Engineering</h4>
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
      </main>
    );
  }
}
export default Body;