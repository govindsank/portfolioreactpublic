import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div>
      
		{/* <!-- top-area Start --> */}
		<header class="top-area">
			<div class="header-area">
				{/* <!-- Start Navigation --> */}
			    <nav class="navbar navbar-default bootsnav navbar-fixed dark no-background">

			        <div class="container">

			            {/* <!-- Start Header Navigation --> */}
			            <div class="navbar-header">
			                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
			                    <i class="fa fa-bars"></i>
			                </button>
			                <a class="navbar-brand" href="index.html">browny</a>
			            </div>
                  {/* <!--/.navbar-header--> */}
			            {/* <!-- End Header Navigation --> */}

			            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
			            <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
			                <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
			                <li class=" smooth-menu active"></li>
							  <li class="smooth-menu"><a href="#about">about</a></li>
			                    <li class=" smooth-menu"><a href="#education">education</a></li>
			                    <li class="smooth-menu"><a href="#skills">skills</a></li>
			                    <li class="smooth-menu"><a href="#experience">experience</a></li>
			                    <li class="smooth-menu"><a href="#portfolio">portfolio</a></li>
			                    <li class="smooth-menu"><a href="#clients">clients</a></li>
			                    <li class="smooth-menu"><a href="#contact">contact</a></li>
			                </ul>
                      {/* <!--/.nav --> */}
			            </div>
                  {/* <!-- /.navbar-collapse --> */}
			        </div>
              {/* <!--/.container--> */}
			    </nav>
          {/* <!--/nav--> */}
			    {/* <!-- End Navigation --> */}
			</div> 
      {/* <!--/.header-area--> */}

		    <div class="clearfix"></div>

		</header>
    {/* <!-- /.top-area-->
		<!-- top-area End --> */}
    
		{/* <!--welcome-hero start --> */}
		<section id="welcome-hero" class="welcome-hero">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="header-text">
							{/* <h2>hi <span>,</span> i am <br> browny <br> star <span>.</span>   </h2> */}
              <h2> hi<span>,</span> i am Govind</h2>
							{/* <p>ui/ux designer and web developer</p> */}
              <p>I'm  Developer, Freelancer</p>
							{/* <a href="assets/download/browney.txt" download>download resume</a> */}
						</div>
            {/* <!--/.header-text--> */}
					</div>
          {/* <!--/.col--> */}
				</div>
        {/* <!-- /.row--> */}
			</div>
      {/* <!-- /.container--> */}

		</section>
    {/* <!--/.welcome-hero--> */}
		{/* <!--welcome-hero end --> */}
		{/* <!--about start --> */}
		<section id="about" class="about">
			<div class="section-heading text-center">
				<h2>about me</h2>
			</div>
			<div class="container">
				<div class="about-content">
					<div class="row">
						<div class="col-sm-6">
							<div class="single-about-txt">
								<h3>
									{/* I am a Professional UI/UX Designer and Web developer. Consectetur an adipisi elita, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud. */}
								</h3>
								<p>
								 My name is Govind Sankar H. I am Web Developer| |UI/UX Designer| |Photographer| |.
								</p>
								<div class="row">
									<div class="col-sm-4">
										<div class="single-about-add-info">
											<h3>phone</h3>
											<p>+91-8848513321</p>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="single-about-add-info">
											<h3>email</h3>
											<p>govindsankarkerala@gmail.com</p>
										</div>
									</div>
									<div class="col-sm-4">
										{/* <div class="single-about-add-info">
											<h3>website</h3>
											<p>www.brownsine.com</p>
										</div> */}
									</div>
								</div>
							</div>
						</div>
						<div class="col-sm-offset-1 col-sm-5">
							<div class="single-about-img">
								<img src="assets/images/Govind.jpeg"  alt="profile_image"/>
								<div class="about-list-icon">
									<ul>
										<li>
											<a href="#">
												<i  class="fa fa-facebook" aria-hidden="true"></i>
											</a>
										</li>
                    {/* <!-- / li --> */}
										<li>
											<a href="#">
												<i  class="fa fa-dribbble" aria-hidden="true"></i>
											</a>
											
										</li>
                    {/* <!-- / li --> */}
										<li>
											<a href="#">
												<i  class="fa fa-twitter" aria-hidden="true"></i>
											</a>
											
										</li>
                    {/* <!-- / li --> */}
										<li>
											<a href="#">
												<i  class="fa fa-linkedin" aria-hidden="true"></i>
											</a>
										</li>
                    {/* <!-- / li --> */}
										<li>
											<a href="#">
												<i  class="fa fa-instagram" aria-hidden="true"></i>
											</a>
										</li>
                    {/* <!-- / li --> */}
										
										
									</ul>
                  {/* <!-- / ul --> */}
								</div>
                {/* <!-- /.about-list-icon --> */}

							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
    {/* <!--/.about--> */}
		{/* <!--about end --> */}
    {/* <!--education start --> */}
		<section id="education" class="education">
			<div class="section-heading text-center">
				<h2>education</h2>
			</div>
			<div class="container">
				<div class="education-horizontal-timeline">
					<div class="row">
						<div class="col-sm-4">
							<div class="single-horizontal-timeline">
								<div class="experience-time">
									<h2>2023</h2>
									<h3>Intership <span>In </span> MERN Stack</h3>
								</div>
                {/* <!--/.experience-time--> */}
								<div class="timeline-horizontal-border">
									<i class="fa fa-circle" aria-hidden="true"></i>
									<span class="single-timeline-horizontal"></span>
								</div>
								<div class="timeline">
									<div class="timeline-content">
										<h4 class="title">
											{/* university of north carolina */}
                      Synnefo Solutions
										</h4>
										<h5>Kochi</h5>
										<p class="description">
											{/* Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.  */}
										</p>
									</div>
                  {/* <!--/.timeline-content--> */}
								</div>
                {/* <!--/.timeline--> */}
							</div>
						</div>
						<div class="col-sm-4">
							<div class="single-horizontal-timeline">
								<div class="experience-time">
									<h2>2020-2023</h2>
									<h3>Bachelor<span> of </span> computer application</h3>
								</div>
                {/* <!--/.experience-time--> */}
								<div class="timeline-horizontal-border">
									<i class="fa fa-circle" aria-hidden="true"></i>
									<span class="single-timeline-horizontal"></span>
								</div>
								<div class="timeline">
									<div class="timeline-content">
										<h4 class="title">
											Mahatma Gandhi University
										</h4>
										<h5>Kochi</h5>
										<p class="description">
											{/* Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.  */}
										</p>
									</div>
                  {/* <!--/.timeline-content--> */}
								</div>
                {/* <!--/.timeline--> */}
							</div>
						</div>
						<div class="col-sm-4">
							<div class="single-horizontal-timeline">
								<div class="experience-time">
									<h2>2019-2020</h2>
									<h3>12<span>th </span> creative design</h3>
								</div>
                {/* <!--/.experience-time--> */}
								<div class="timeline-horizontal-border">
									<i class="fa fa-circle" aria-hidden="true"></i>
									<span class="single-timeline-horizontal spacial-horizontal-line
									"></span>
								</div>
								<div class="timeline">
									<div class="timeline-content">
										<h4 class="title">
											National Institute Of Open Schooling
										</h4>
										<h5>kochi</h5>
										<p class="description">
											{/* Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.  */}
										</p>
									</div>
                  {/* <!--/.timeline-content--> */}
								</div>
                {/* <!--/.timeline--> */}
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
    {/* <!--/.education--> */}
		{/* <!--education end --> */}


    {/* <!--skills start --> */}
		<section id="skills" class="skills">
				<div class="skill-content">
					<div class="section-heading text-center">
						<h2>skills</h2>
					</div>
					<div class="container">
						<div class="row">
							<div class="col-md-6">
								<div class="single-skill-content">
									<div class="barWrapper">
										<span class="progressText">adobe photoshop</span>
										<div class="single-progress-txt">
											<div class="progress ">
												<div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" >
													  
												</div>
											</div>
											<h3>90%</h3>	
										</div>
									</div>
                  {/* <!-- /.barWrapper --> */}
									<div class="barWrapper">
										<span class="progressText">adobe illustrator</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="10" aria-valuemax="100">
												    
											   </div>
											</div>
											<h3>85%</h3>	
										</div>
									</div>
                  {/* <!-- /.barWrapper --> */}
									<div class="barWrapper">
										<span class="progressText">adobe after effects</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="97" aria-valuemin="10" aria-valuemax="100" >
												   
											   </div>
											</div>
											<h3>97%</h3>	
										</div>
									</div>
                  {/* <!-- /.barWrapper --> */}
									<div class="barWrapper">
										<span class="progressText">sketch</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100">
												    
											   </div>
											</div>
											<h3>90%</h3>	
										</div>
									</div>
                  {/* <!-- /.barWrapper --> */}
								</div>
							</div>
							<div class="col-md-6">
								<div class="single-skill-content">
									<div class="barWrapper">
										<span class="progressText">html 5</span>
										<div class="single-progress-txt">
											<div class="progress ">
												<div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" >
													
												</div>
											</div>
											<h3>90%</h3>	
										</div>
									</div>
                  {/* <!-- /.barWrapper --> */}
									<div class="barWrapper">
										<span class="progressText">css 3 animation</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="10" aria-valuemax="100" >
												    
											   </div>
											</div>
											<h3>85%</h3>	
										</div>
									</div>
                  {/* <!-- /.barWrapper --> */}
									<div class="barWrapper">
										<span class="progressText">communication</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="97" aria-valuemin="10" aria-valuemax="100" >
												   
											   </div>
											</div>
											<h3>97%</h3>	
										</div>
									</div>
                  {/* <!-- /.barWrapper --> */}
									<div class="barWrapper">
										<span class="progressText"> creativity</span>
										<div class="single-progress-txt">
											<div class="progress ">
											   <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" >
												    
											   </div>
											</div>
											<h3>90%</h3>	
										</div>
									</div>
                  {/* <!-- /.barWrapper --> */}
								</div>
							</div>
						</div>
            {/* <!-- /.row --> */}
					</div>	
          {/* <!-- /.container -->		 */}
				</div>
        {/* <!-- /.skill-content--> */}

		</section>
    {/* <!--/.skills--> */}
		{/* <!--skills end --> */}

    {/* <!--experience start --> */}
		<section id="experience" class="experience">
			<div class="section-heading text-center">
				<h2>Internship</h2>
			</div>
			<div class="container">
				<div class="experience-content">
						<div class="main-timeline">
							<ul>
								<li>
									<div class="single-timeline-box fix">
										<div class="row">
											<div class="col-md-5">
												<div class="experience-time text-right">
													<h2>2023</h2>
													<h3>Mern Stack</h3>
												</div>
                        {/* <!--/.experience-time--> */}
											</div>
                      {/* <!--/.col--> */}
											<div class="col-md-offset-1 col-md-5">
												<div class="timeline">
													<div class="timeline-content">
														<h4 class="title">
															<span><i class="fa fa-circle" aria-hidden="true"></i></span>
															Synnefo Solutions
														</h4>
														<h5>Kochi</h5>
														<p class="description">
															{/* Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.  */}
														</p>
													</div>
                          {/* <!--/.timeline-content--> */}
												</div>
                        {/* <!--/.timeline--> */}
											</div>
                      {/* <!--/.col--> */}
										</div>
									</div>
                  {/* <!--/.single-timeline-box--> */}
								</li>

								<li>
									<div class="single-timeline-box fix">
										<div class="row">
											<div class="col-md-offset-1 col-md-5 experience-time-responsive">
												<div class="experience-time">
													<h2>
														<span><i class="fa fa-circle" aria-hidden="true"></i></span>
														2022
													</h2>
													<h3>Project done in Android</h3>
												</div>
                        {/* <!--/.experience-time--> */}
											</div>
                      {/* <!--/.col--> */}
											<div class="col-md-5">
												<div class="timeline">
													<div class="timeline-content text-right">
														<h4 class="title">
														Allievo Project Center And Internship Training Center
														</h4>
														<h5>Kochi</h5>
														<p class="description">
															{/* Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.  */}
														</p>
													</div>
                          {/* <!--/.timeline-content--> */}
												</div>
                        {/* <!--/.timeline--> */}
											</div>
                      {/* <!--/.col--> */}
											<div class="col-md-offset-1 col-md-5 experience-time-main">
												<div class="experience-time">
													<h2>
														<span><i class="fa fa-circle" aria-hidden="true"></i></span>
														2016 - 2018
													</h2>
													<h3>Project done in Android</h3>
												</div>
                        {/* <!--/.experience-time--> */}
											</div>
                      {/* <!--/.col--> */}
										</div>
									</div>
                  {/* <!--/.single-timeline-box--> */}
								</li>


							</ul>
						</div>
            {/* <!--.main-timeline--> */}
					</div>
          {/* <!--.experience-content--> */}
			</div>

		</section>
    {/* <!--/.experience--> */}
		{/* <!--experience end --> */}

    {/* <!--profiles start --> */}
		{/* <section id="profiles" class="profiles">
			<div class="profiles-details">
				<div class="section-heading text-center">
					<h2>profiles</h2>
				</div>
				<div class="container">
					<div class="profiles-content">
						<div class="row">
							<div class="col-sm-3">
								<div class="single-profile">
									<div class="profile-txt">
										<a href=""><i class="flaticon-themeforest"></i></a>
										<div class="profile-icon-name">themeforest</div>
									</div>
									<div class="single-profile-overlay">
										<div class="profile-txt">
											<a href=""><i class="flaticon-themeforest"></i></a>
											<div class="profile-icon-name">themeforest</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="single-profile">
									<div class="profile-txt">
										<a href=""><i class="flaticon-dribbble"></i></a>
										<div class="profile-icon-name">dribbble</div>
									</div>
									<div class="single-profile-overlay">
										<div class="profile-txt">
											<a href=""><i class="flaticon-dribbble"></i></a>
											<div class="profile-icon-name">dribbble</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="single-profile">
									<div class="profile-txt">
										<a href=""><i class="flaticon-behance-logo"></i></a>
										<div class="profile-icon-name">behance</div>
									</div>
									<div class="single-profile-overlay">
										<div class="profile-txt">
											<a href=""><i class="flaticon-behance-logo"></i></a>
											<div class="profile-icon-name">behance</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="single-profile profile-no-border">
									<div class="profile-txt">
										<a href=""><i class="flaticon-github-logo"></i></a>
										<div class="profile-icon-name">github</div>
									</div>
									<div class="single-profile-overlay">
										<div class="profile-txt">
											<a href=""><i class="flaticon-github-logo"></i></a>
											<div class="profile-icon-name">github</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="profile-border"></div>
						<div class="row">
							<div class="col-sm-3">
								<div class="single-profile">
									<div class="profile-txt">
										<a href=""><i class="flaticon-flickr-website-logo-silhouette"></i></a>
										<div class="profile-icon-name">flickR</div>
									</div>
									<div class="single-profile-overlay">
										<div class="profile-txt">
											<a href=""><i class="flaticon-flickr-website-logo-silhouette"></i></a>
											<div class="profile-icon-name">flickR</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="single-profile">
									<div class="profile-txt">
										<a href=""><i class="flaticon-smug"></i></a>
										<div class="profile-icon-name">smungMung</div>
									</div>
									<div class="single-profile-overlay">
										<div class="profile-txt">
											<a href=""><i class="flaticon-smug"></i></a>
											<div class="profile-icon-name">smungMung</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="single-profile">
									<div class="profile-txt">
										<a href=""><i class="flaticon-squarespace-logo"></i></a>
										<div class="profile-icon-name">squareSpace</div>
									</div>
									<div class="single-profile-overlay">
										<div class="profile-txt">
											<a href=""><i class="flaticon-squarespace-logo"></i></a>
											<div class="profile-icon-name">squareSpace</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="single-profile profile-no-border">
									<div class="profile-txt">
										<a href=""><i class="flaticon-bitbucket-logotype-camera-lens-in-perspective"></i></a>
										<div class="profile-icon-name">bitBucket</div>
									</div>
									<div class="single-profile-overlay">
										<div class="profile-txt">
											<a href=""><i class="flaticon-bitbucket-logotype-camera-lens-in-perspective"></i></a>
											<div class="profile-icon-name">bitBucket</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section> */}
    {/* <!--/.profiles--> */}
		{/* <!--profiles end --> */}

    {/* <!--portfolio start --> */}
		<section id="portfolio" class="portfolio">
			<div class="portfolio-details">
				<div class="section-heading text-center">
					<h2>portfolio</h2>
				</div>
				<div class="container">
					<div class="portfolio-content">
						<div class="isotope">
							<div class="row">

								<div class="col-sm-4">
									<div class="item">
										<img src="assets/images/portfolio/p1.jpg" alt="portfolio image"/>
										<div class="isotope-overlay">
											<a href="#">
												ui/ux design
											</a>
										</div>
                    {/* <!-- /.isotope-overlay --> */}
									</div>
                  {/* <!-- /.item --> */}
									<div class="item">
										<img src="assets/images/portfolio/p2.jpg" alt="portfolio image"/>
										<div class="isotope-overlay">
											<a href="#">
												ui/ux design
											</a>
										</div>
                    {/* <!-- /.isotope-overlay --> */}
									</div>
                  {/* <!-- /.item --> */}
								</div>
                {/* <!-- /.col --> */}

								<div class="col-sm-4">
									<div class="item">
										<img src="assets/images/portfolio/p3.jpg" alt="portfolio image"/>
										<div class="isotope-overlay">
											<a href="#">
												web design
											</a>
										</div>
                    {/* <!-- /.isotope-overlay --> */}
									</div>
                  {/* <!-- /.item --> */}
								</div>
                {/* <!-- /.col --> */}

								<div class="col-sm-4">
									<div class="item">
										<img src="assets/images/portfolio/p4.jpg" alt="portfolio image"/>
										<div class="isotope-overlay">
											<a href="#">
												web development
											</a>
										</div>
                    {/* <!-- /.isotope-overlay --> */}
									</div>
                  {/* <!-- /.item --> */}
									<div class="item">
										<img src="assets/images/portfolio/p5.jpg" alt="portfolio image"/>
										<div class="isotope-overlay">
											<a href="#">
												web development
											</a>
										</div>
                    {/* <!-- /.isotope-overlay --> */}
									</div>
                  {/* <!-- /.item --> */}
								</div>
                {/* <!-- /.col --> */}
							</div>
              {/* <!-- /.row --> */}
						</div>
            {/* <!--/.isotope--> */}
					</div>
          {/* <!--/.gallery-content--> */}
				</div>
        {/* <!--/.container--> */}
			</div>
      {/* <!--/.portfolio-details--> */}

		</section>
    {/* <!--/.portfolio--> */}
		{/* <!--portfolio end --> */}

    {/* <!--contact start --> */}
		<section id="contact" class="contact">
			<div class="section-heading text-center">
				<h2>contact me</h2>
			</div>
			<div class="container">
				<div class="contact-content">
					<div class="row">
						<div class="col-md-offset-1 col-md-5 col-sm-6">
							<div class="single-contact-box">
								<div class="contact-form">
									<form>
										<div class="row">
											<div class="col-sm-6 col-xs-12">
												<div class="form-group">
												  <input type="text" class="form-control" id="name" placeholder="Name*" name="name"/>
												</div>
                        {/* <!--/.form-group--> */}
											</div>
                      {/* <!--/.col--> */}
											<div class="col-sm-6 col-xs-12">
												<div class="form-group">
													<input type="email" class="form-control" id="email" placeholder="Email*" name="email"/>
												</div>
                        {/* <!--/.form-group--> */}
											</div>
                      {/* <!--/.col--> */}
										</div>
                    {/* <!--/.row--> */}
										<div class="row">
											<div class="col-sm-12">
												<div class="form-group">
													<input type="text" class="form-control" id="subject" placeholder="Subject" name="subject"/>
												</div>
                        {/* <!--/.form-group--> */}
											</div>
                      {/* <!--/.col--> */}
										</div>
                    {/* <!--/.row--> */}
										<div class="row">
											<div class="col-sm-12">
												<div class="form-group">
													<textarea class="form-control" rows="8" id="comment" placeholder="Message" ></textarea>
												</div>
                        {/* <!--/.form-group--> */}
											</div>
                      {/* <!--/.col--> */}
										</div>
                    {/* <!--/.row--> */}
										<div class="row">
											<div class="col-sm-12">
												<div class="single-contact-btn">
													<a class="contact-btn" href="#" role="button">submit</a>
												</div>
                        {/* <!--/.single-single-contact-btn--> */}
											</div>
                      {/* <!--/.col--> */}
										</div>
                    {/* <!--/.row--> */}
									</form>
                  {/* <!--/form--> */}
								</div>
                {/* <!--/.contact-form--> */}
							</div>
              {/* <!--/.single-contact-box--> */}
						</div>
            {/* <!--/.col--> */}
						<div class="col-md-offset-1 col-md-5 col-sm-6">
							<div class="single-contact-box">
								<div class="contact-adress">
									<div class="contact-add-head">
										<h3>Govind Sankar H</h3>
										<p>Web Developer</p>
									</div>
									<div class="contact-add-info">
										<div class="single-contact-add-info">
											<h3>phone</h3>
											<p>+91-8848513321</p>
										</div>
										<div class="single-contact-add-info">
											<h3>email</h3>
											<p>govindsankarkerala@gmail.com</p>
										</div>
									
									</div>
								</div>
                {/* <!--/.contact-adress--> */}
								<div class="hm-foot-icon">
									<ul>
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    {/* <!--/li--> */}
										<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                    {/* <!--/li--> */}
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    {/* <!--/li--> */}
										<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    {/* <!--/li--> */}
										<li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    {/* <!--/li--> */}
									</ul>
                  {/* <!--/ul--> */}
								</div>
                {/* <!--/.hm-foot-icon--> */}
							</div>
              {/* <!--/.single-contact-box--> */}
						</div>
            {/* <!--/.col--> */}
					</div>
          {/* <!--/.row--> */}
				</div>
        {/* <!--/.contact-content--> */}
			</div>
      {/* <!--/.container--> */}

		</section>
    {/* <!--/.contact--> */}
		{/* <!--contact end --> */}

    {/* <!--footer-copyright start--> */}
		<footer id="footer-copyright" class="footer-copyright">
			<div class="container">
				<div class="hm-footer-copyright text-center">
					<p>
						&copy; copyright Govind Sankar H.
					</p>
          {/* <!--/p--> */}
				</div>
        {/* <!--/.text-center--> */}
			</div>
      {/* <!--/.container--> */}

			<div id="scroll-Top">
				<div class="return-to-top">
					<i class="fa fa-angle-up " id="scroll-top" ></i>
				</div>
				
			</div>
      {/* <!--/.scroll-Top--> */}
			
        </footer>
        {/* <!--/.footer-copyright--> */}
		{/* <!--footer-copyright end--> */}

      </div>
    </>
  )
}

export default App
