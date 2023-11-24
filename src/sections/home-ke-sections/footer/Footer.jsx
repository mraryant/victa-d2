import "./Footer.css"

const Footer = () => {
  return (
     <>
        <div className="fmain">
           <footer className="footer-02" >
              <div className="container" style={{ paddingTop: 73 }}>

                 <div className="row">
                    <div className="col-md-4 col-lg-5" >
                       <div className="row">
                          <div className="col-md-12 col-lg-8 mb-md-0 mb-4">
                             <h2 className="footer-heading"> VICTA </h2>
                             <p>VICTA: Where Innovation Meets Efficiency in Blockchain Evolution. Streamlining utility, e-commerce, and more for a seamless digital experience. Embrace the Future with {"VICTA's "}Pioneering Solutions. </p>

                          </div>

                       </div>
                    </div>
                    <div className="col-md-8 col-lg-7">
                       <div className="row">
                          <div className="col-md-3 mb-md-0 mb-4 border-left">
                             <h2 className="footer-heading">Quick Links</h2>
                             <ul className="list-unstyled">

                                <li><a href="#about-main" style={{ textDecoration: 'none' }} className="py-1 d-block">About</a></li>
                                <li><a href="#roadmap-main" style={{ textDecoration: 'none' }} className="py-1 d-block">Roadmap</a></li>
                                <li><a href="#toko-head" style={{ textDecoration: 'none' }} className="py-1 d-block">Tokenomics</a></li>
                                <li><a href="#hero-main" style={{ textDecoration: 'none' }} className="py-1 d-block">Whitepaper</a></li>
                                <li><a href="#usecase-main" style={{ textDecoration: 'none' }} className="py-1 d-block">Usecase</a></li>
                                {/* <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Team Members</a></li> */}
                             </ul>
                          </div>
                          <div className="col-md-3 mb-md-0 mb-4 border-left">
                             <h2 className="footer-heading">About</h2>
                             <ul className="list-unstyled">
                                <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Staff</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Location</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Careers</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Blog</a></li>
                             </ul>
                          </div>
                          <div className="col-md-3 mb-md-0 mb-4 border-left">
                             <h2 className="footer-heading">Privacy</h2>
                             <ul className="list-unstyled">
                                <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Terms and condition</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Privacy Policy</a></li>

                             </ul>
                          </div>
                          <div className="col-md-3 mb-md-0 mb-4 border-left">
                             <h2 className="footer-heading">Social</h2>
                             <ul className="list-unstyled">
                                <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block"><i className="ri-facebook-circle-line"></i> Facebook</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block"><i className="ri-twitter-x-line"></i> X - (Twitter)</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block"><i className="ri-instagram-line"></i> Instagram</a></li>
                                <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">  info@victacapitals.com</a></li>
                                {/* <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Googleplus</a></li> */}
                                 
                             </ul>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="row mt-5">
                    <div className="col-md-6 col-lg-8">


                    </div>

                 </div>
              </div>
           </footer>
        </div>

     </>
  )
}

export default Footer