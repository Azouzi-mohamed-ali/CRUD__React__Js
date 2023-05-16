import API from '../Axios/Api';
import React, {useState,useEffect} from 'react'
import Element1 from './Element1'
import Element from './Element'
function Index() {

  const [listProd,setListProd]=useState([]);
  useEffect(()=>{
    API.get('k4qAKksi/articles').then(res => {
      setListProd(res.data);
  })
  })

    return ( 
        <>
  
  <nav
    className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark"
    id="mainNav"
  >
    <div className="container">
      <a className="navbar-brand" href="#page-top">
        Brand
      </a>
      <button
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        className="navbar-toggler navbar-toggler-right"
        type="button"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto text-uppercase">
          <li className="nav-item">
            <a className="nav-link" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#team">
              Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header
    className="masthead"
    style={{ backgroundImage: 'url("assets/img/header-bg.jpg")' }}
  >
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">
          <span>Welcome To Our Studio!</span>
        </div>
        <div className="intro-heading text-uppercase">
          <span>It's Nice To Meet You</span>
        </div>
        <a
          className="btn btn-primary btn-xl text-uppercase"
          role="button"
          href="#services"
        >
          Tell me more
        </a>
      </div>
    </div>
  </header>
  <section id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="text-uppercase section-heading">Services</h2>
          <h3 className="text-muted section-subheading">
            Lorem ipsum dolor sit amet consectetur
          </h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse" />
          </span>
          <h4 className="section-heading">E-Commerce</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="fa fa-laptop fa-stack-1x fa-inverse" />
          </span>
          <h4 className="section-heading">Responsive Design</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="fa fa-lock fa-stack-1x fa-inverse" />
          </span>
          <h4 className="section-heading">Web Security</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-light" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="text-uppercase section-heading">Portfolio</h2>
          <h3 className="text-muted section-subheading">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 portfolio-item">
          <a
            className="portfolio-link"
            href="#portfolioModal1"
            data-bs-toggle="modal"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/1-thumbnail.jpg"
            />
          </a>
          <div className="portfolio-caption">
            <h4>Threads</h4>
            <p className="text-muted">Illustration</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 portfolio-item">
          <a
            className="portfolio-link"
            href="#portfolioModal2"
            data-bs-toggle="modal"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/2-thumbnail.jpg"
            />
          </a>
          <div className="portfolio-caption">
            <h4>Explore</h4>
            <p className="text-muted">Graphic Design</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 portfolio-item">
          <a
            className="portfolio-link"
            href="#portfolioModal3"
            data-bs-toggle="modal"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/3-thumbnail.jpg"
            />
          </a>
          <div className="portfolio-caption">
            <h4>Finish</h4>
            <p className="text-muted">Identity</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 portfolio-item">
          <a
            className="portfolio-link"
            href="#portfolioModal4"
            data-bs-toggle="modal"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/4-thumbnail.jpg"
            />
          </a>
          <div className="portfolio-caption">
            <h4>Lines</h4>
            <p className="text-muted">Branding</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 portfolio-item">
          <a
            className="portfolio-link"
            href="#portfolioModal5"
            data-bs-toggle="modal"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/5-thumbnail.jpg"
            />
          </a>
          <div className="portfolio-caption">
            <h4>Southwest</h4>
            <p className="text-muted">Website Design</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 portfolio-item">
          <a
            className="portfolio-link"
            href="#portfolioModal6"
            data-bs-toggle="modal"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/6-thumbnail.jpg"
            />
          </a>
          <div className="portfolio-caption">
            <h4>Window</h4>
            <p className="text-muted">Photography</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="about">
    <div className="container">
      <div
        data-reflow-type="product-list"
        data-reflow-layout="cards"
        data-reflow-order="date_desc"
        style={{
          color: "var(--bs-pink)",
          boxShadow: "0px 0px var(--bs-purple)"
        }}
      />
    </div>
    <div className="container">
      <div data-reflow-type="product" data-reflow-product={750216531} />
    </div>
    <Element1 />
    {listProd.map((p,index) =>  <div className="container" key={index}><Element p={p} /></div>  )}

      {/* 
    <div className="container">
      <div data-reflow-type="product" data-reflow-product="750216531">
        <div className="reflow-product">
          <div className="ref-media">
            <div className="ref-preview">
              <img className="ref-image" src="https://cdn.reflowhq.com/media/1691497927/750216531/6e7a2ff74124274d7dd0ccdf938d7939_md.jpg" data-reflow-preview-type="image"/>
              <img className="ref-image active" src="https://cdn.reflowhq.com/media/1691497927/750216531/9e6b493d321e4fd8d726d336bea82b5d_md.jpg" data-reflow-preview-type="image"/>
              <img className="ref-image" src="https://cdn.reflowhq.com/media/1691497927/750216531/410906950878caa5dd56eb44b0eab846_md.jpg" data-reflow-preview-type="image"/></div>
              <div className="ref-thumbnails">
                <div className="ref-thumbnail">
                  <div className="ref-image" data-reflow-preview-type="image" data-reflow-preview="undefined" style={{"backgroundImage": 'url(&quot;https://cdn.reflowhq.com/media/1691497927/750216531/d8d9bac90de87c11bc0fdf7080011228_sm.jpg&quot;);'}}></div></div><div className="ref-thumbnail">
                    <div className="ref-image active" data-reflow-preview-type="image" data-reflow-preview="undefined" style={{"backgroundImage": 'url(&quot;https://cdn.reflowhq.com/media/1691497927/750216531/9e6b493d321e4fd8d726d336bea82b5d_sm.jpg&quot;);'}}></div>
                    </div>
                    <div className="ref-thumbnail">
                      <div className="ref-image" data-reflow-preview-type="image" data-reflow-preview="undefined" style={{"background-image": 'url(&quot;https://cdn.reflowhq.com/media/1691497927/750216531/38991bc7a7b5b92814142517e9c2d219_sm.jpg&quot;);'}}></div></div></div></div>
                      <div className="ref-product-data">
                        <h2 className="ref-name">Android</h2>
                        <strong className="ref-price">€1,500.00</strong>
                        <span data-reflow-type="add-to-cart" data-reflow-product="750216531"><div className="ref-product-controls"><span data-reflow-product="750216531" data-reflow-max-qty="999" data-reflow-quantity="1">
			<div className="ref-quantity-widget">
				<div className="ref-decrease"><span></span></div>
				<input type="text" value="1"/>
				<div className="ref-increase"><span></span></div>
			</div>
		</span><a href="#" className="ref-button">Add to Cart</a></div></span><div className="ref-description"><p>Android version</p></div></div></div></div></div>
      */}

      {/*   {listProd.map((p) =>   
   <div className="container">
    <div data-reflow-type="product" data-reflow-product="750216531">
      <div className="reflow-product"><div className="ref-media">
        <div className="ref-preview">
          <img className="ref-image active" 
          src={p.imageartpetitf}
          data-reflow-preview-type="image"/>
          <img className="ref-image" src="https://cdn.reflowhq.com/media/1691497927/750216531/9e6b493d321e4fd8d726d336bea82b5d_md.jpg" data-reflow-preview-type="image"/>
            <img className="ref-image" src="https://cdn.reflowhq.com/media/1691497927/750216531/410906950878caa5dd56eb44b0eab846_md.jpg" data-reflow-preview-type="image"/>
            </div>
            <div className="ref-thumbnails">
              <div className="ref-thumbnail">
            <div className="ref-image active" data-reflow-preview-type="image" data-reflow-preview="undefined" 
           style={{
            backgroundImage: `url("https://cdn.reflowhq.com/media/1691497927/750216531/d8d9bac90de87c11bc0fdf7080011228_sm.jpg")` 
            }}></div></div>
            <div className="ref-thumbnail">
              <div className="ref-image" data-reflow-preview-type="image" data-reflow-preview="undefined" 
              style={{
                backgroundImage: `url("https://cdn.reflowhq.com/media/1691497927/750216531/9e6b493d321e4fd8d726d336bea82b5d_sm.jpg")` 
                }}></div></div>
              <div className="ref-thumbnail">
                <div className="ref-image" data-reflow-preview-type="image" data-reflow-preview="undefined" 
                style={{
                  backgroundImage: `url("https://cdn.reflowhq.com/media/1691497927/750216531/38991bc7a7b5b92814142517e9c2d219_sm.jpg")` 
                }}></div></div></div></div>
                <div className="ref-product-data">
                  <h2 className="ref-name">Android</h2>
                  <strong className="ref-price">€1,500.00</strong>
                  <span data-reflow-type="add-to-cart" data-reflow-product="750216531">
                    <div className="ref-product-controls"><span data-reflow-product="750216531" data-reflow-max-qty="999" data-reflow-quantity="1">
			<div className="ref-quantity-widget">
				<div className="ref-decrease"><span></span></div>
				<input type="text" value="1"/>
				<div className="ref-increase"><span></span></div>
			</div>
		</span>
    <a href="#" className="ref-button">Add to Cart</a></div></span><div className="ref-description"><p>Android version</p></div></div></div></div></div>
   
   )} 
   */} 
   <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="text-uppercase">About</h2>
          <h3 className="text-muted section-subheading">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="list-group timeline">
            <li className="list-group-item">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/1.jpg"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="list-group-item timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/2.jpg"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/3.jpg"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="list-group-item timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/4.jpg"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="list-group-item timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  &nbsp;Of Our
                  <br />
                  &nbsp;Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-light" id="team">
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img
              className="rounded-circle mx-auto"
              src="assets/img/team/1.jpg"
            />
            <h4>Kay Garland</h4>
            <p className="text-muted">Lead Designer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img
              className="rounded-circle mx-auto"
              src="assets/img/team/2.jpg"
            />
            <h4>Larry Parker</h4>
            <p className="text-muted">Lead Marketer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img
              className="rounded-circle mx-auto"
              src="assets/img/team/3.jpg"
            />
            <h4>Diana Pertersen</h4>
            <p className="text-muted">Lead Developer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <a href="#">
            <img
              className="img-fluid d-block mx-auto"
              src="assets/img/clients/creative-market.jpg"
            />
          </a>
        </div>
        <div className="col-sm-6 col-md-3">
          <a href="#">
            <img
              className="img-fluid d-block mx-auto"
              src="assets/img/clients/designmodo.jpg"
            />
          </a>
        </div>
        <div className="col-sm-6 col-md-3">
          <a href="#">
            <img
              className="img-fluid d-block mx-auto"
              src="assets/img/clients/envato.jpg"
            />
          </a>
        </div>
        <div className="col-sm-6 col-md-3">
          <a href="#">
            <img
              className="img-fluid d-block mx-auto"
              src="assets/img/clients/themeforest.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
  <section
    id="contact"
    style={{ backgroundImage: 'url("assets/img/map-image.png")' }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="text-uppercase section-heading">Contact Us</h2>
          <h3 className="text-muted section-subheading">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="contactForm" noValidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder="Your Name *"
                    required=""
                  />
                  <small className="form-text text-danger flex-grow-1 help-block lead" />
                </div>
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="Your Email *"
                    required=""
                  />
                  <small className="form-text text-danger help-block lead" />
                </div>
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    type="tel"
                    placeholder="Your Phone *"
                    required=""
                  />
                  <small className="form-text text-danger help-block lead" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Your Message *"
                    required=""
                    defaultValue={""}
                  />
                  <small className="form-text text-danger help-block lead" />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-lg-12 text-center">
                <div id="success" />
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  id="sendMessageButton"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <span className="copyright">Copyright&nbsp;© Brand 2022</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <div
    className="modal fade text-center portfolio-modal"
    role="dialog"
    tabIndex={-1}
    id="portfolioModal1"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body">
                <h2 className="text-uppercase">Project Name</h2>
                <p className="text-muted item-intro">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/1-full.jpg"
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-unstyled">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  <i className="fa fa-times" />
                  <span>&nbsp;Close Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade text-center portfolio-modal"
    role="dialog"
    tabIndex={-1}
    id="portfolioModal2"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body">
                <h2 className="text-uppercase">Project Name</h2>
                <p className="text-muted item-intro">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/2-full.jpg"
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-unstyled">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  <i className="fa fa-times" />
                  <span>&nbsp;Close Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade text-center portfolio-modal"
    role="dialog"
    tabIndex={-1}
    id="portfolioModal3"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body">
                <h2 className="text-uppercase">Project Name</h2>
                <p className="text-muted item-intro">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/3-full.jpg"
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-unstyled">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  <i className="fa fa-times" />
                  <span>&nbsp;Close Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade text-center portfolio-modal"
    role="dialog"
    tabIndex={-1}
    id="portfolioModal4"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body">
                <h2 className="text-uppercase">Project Name</h2>
                <p className="text-muted item-intro">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/4-full.jpg"
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-unstyled">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  <i className="fa fa-times" />
                  <span>&nbsp;Close Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade text-center portfolio-modal"
    role="dialog"
    tabIndex={-1}
    id="portfolioModal5"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body">
                <h2 className="text-uppercase">Project Name</h2>
                <p className="text-muted item-intro">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/5-full.jpg"
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-unstyled">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  <i className="fa fa-times" />
                  <span>&nbsp;Close Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade text-center portfolio-modal"
    role="dialog"
    tabIndex={-1}
    id="portfolioModal6"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body">
                <h2 className="text-uppercase">Project Name</h2>
                <p className="text-muted item-intro">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/6-full.jpg"
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-unstyled">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  <i className="fa fa-times" />
                  <span>&nbsp;Close Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

     );
}

export default Index;