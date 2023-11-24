import "./FAQ.css"

const FAQ = () => {
  return (
    <div id="faq-main">


      <section className="faq-area">
        <div className="container">
          <div className="faq-inner-wrap">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-70">
                  <h2 className="title mb-5">Ask Quick Question</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="faq-wrap">
                  <div className="accordion" id="accordionExample">


                    <div className="accordion-item">
                      <h2 className="accordion-header"><button
                        className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">What is VICTA?</button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p> VICTA is a blockchain ecosystem designed to redefine how users interact with decentralized technologies. It introduces the VICTA token, unlocking a world of utility and innovation within our diverse ecosystem.</p>
                        </div>
                      </div>
                    </div>



                    <div className="accordion-item">
                      <h2 className="accordion-header"><button
                        className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree">How does the VICTA token work?</button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>The VICTA token is at the heart of VICTA, serving as a utility for transactions, staking, and accessing various features. Holders can use it for utility payments, e-commerce transactions, and even earn rewards for participating in the ecosystem.</p>
                        </div>
                      </div>
                    </div>


                    <div className="accordion-item">
                      <h2 className="accordion-header"><button
                        className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour">What features does VICTA offer?</button></h2>
                      <div id="collapseFour" className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>VICTA offers a range of features, including utility wallets for bill payments, Shop Saver for exclusive discounts, an EV App for electric vehicle users, short video hosting,OTT platform, and a venture into the metaverse.</p>
                        </div>
                      </div>
                    </div>


                    <div className="accordion-item">
                      <h2 className="accordion-header"><button
                        className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"> How secure is VICTA?</button></h2>
                      <div id="collapseFive" className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p> Security is our top priority. VICTA employs smart contract audits, encryption protocols, and compliance with regulatory frameworks to ensure a secure environment for users. We prioritize the protection of user data and assets.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header"><button
                        className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsesix"
                        aria-expanded="false"
                        aria-controls="collapsesix"> Can I stake my VICTA tokens?</button></h2>
                      <div id="collapsesix" className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p> Yes, VICTA offers staking functionalities, allowing users to lock up their VICTA tokens and earn rewards. Staking not only incentivizes participation but also contributes to the stability and security of the VICTA network.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header"><button
                        className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseseven"
                        aria-expanded="false"
                        aria-controls="collapseseven"> How can I get involved in the VICTA community?</button></h2>
                      <div id="collapseseven" className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>We welcome you to join our vibrant community! Engage with us on social media, participate in community events, and share your feedback. The strength of VICTA lies in the active involvement of its community members.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header"><button
                        className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseeight"
                        aria-expanded="false"
                        aria-controls="collapseeight">  What is the roadmap for {"VICTA's"} future development?
                      </button></h2>
                      <div id="collapseeight" className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p> Our roadmap outlines key milestones, including ICO marketing, staking and DApp development, listings on major exchanges, and mobile CRM integration. We are committed to continuous development and improvement.
                          
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ 


