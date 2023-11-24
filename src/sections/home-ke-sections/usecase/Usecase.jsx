import "./Usecase.css"
import { motion } from "framer-motion"
// import uleftimg from "../../../assets/images/usecase left 2.jpg"
import uleftimg from "../../../assets/images/ab2.jpg"
import u1 from '../../../assets/icons/u1.svg'
import u2 from '../../../assets/icons/u2.svg'
import u3 from '../../../assets/icons/u3.svg'
import u4 from '../../../assets/icons/u4.svg'
import u5 from '../../../assets/icons/u5.svg'
import u6 from '../../../assets/icons/u6.svg'
import u7 from '../../../assets/icons/u7.svg'
import u8 from '../../../assets/icons/u8.svg'
// import urightimg from "../../../assets/images/usecase right img 1.svg"

const usecase = () => {
  return (
    <div id="usecase-main">
      <motion.div className='s3header' whileHover={{ scale: 1.05 }} initial={{ opacity: 0 }} transition={{
        ease: "linear",
        duration: 1,
      }}
        whileInView={{ opacity: 1 }}>
        <p className='s3headersmall'>Usecase</p>
        <p className='s3header1'>The versatility of VCTA manifests through its diverse use cases, enhancing user engagement and utility within the VICTA ecosystem. Some key use cases include
</p>

      </motion.div>

      <motion.div className='s3usecase'
        initial={{ opacity: 0 }}
        transition={{ ease: "linear", duration: 1, }} whileInView={{ opacity: 1 }}>
        
        <motion.div
          className='s3usecaseleft'
          initial={{
            scale: 1
          }}
          transition={{
            ease: "easeInOut",
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          whileInView={{
            scale: 1.2,
          }}
        >
          
          <img src={uleftimg} className='s3img1' />
        </motion.div>


        <div className='s3usecaseright'>

          <div className='usecasemain'>
            
            <motion.div
              className='usecase1'
              initial={{
                opacity: 0,
                x: 200
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                duration: 20,
              }}
              >
              <div>
                <img src={u1} style={{ width: 50, height: 50, marginRight: 5 }} />
              </div>
              <div>
                <p className='ucheading'>Utility Payments</p>
                <p className='ucpara'>VICTA serves as the medium for seamless utility payments, encompassing mobile recharges, electricity bills, fast tag transactions, and various other bill settlements within the utility wallet.</p>
                {/* <p className='ucbutton'>Learn More ^</p> */}
              </div>

            </motion.div>

            <motion.div
              className='usecase1'
              initial={{
                opacity: 0,
                x: 200
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                duration: 20,
              }}
              >
              <div>
                <img src={u2} style={{ width: 50, height: 50, marginRight: 5 }} />
              </div>
              <div>
                <p className='ucheading'>E-Commerce Transactions</p>
                <p className='ucpara'>Users can utilize VCTA for transactions within the {"Shop Saver"} feature, making purchases across a wide range of e-commerce products and services.

                </p>
                <p className='ucbutton'>Learn More ^</p>
              </div>

            </motion.div>
            
            <motion.div
              className='usecase1'
              initial={{
                opacity: 0,
                x: 200
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                duration: 20,
              }}
              >
              <div>
                <img src={u3} style={{ width: 50, height: 50, marginRight: 5 }} />
              </div>
              <div>
                <p className='ucheading'>EV App</p>
                <p className='ucpara'>VCTA facilitates transactions within the dedicated EV App, allowing users to redeem tokens and purchase vouchers for electric vehicle-related services.</p>
                {/* <p className='ucbutton'>Learn More ^</p> */}
              </div>

            </motion.div>

            <motion.div
              className='usecase1'
              initial={{
                opacity: 0,
                x: 200
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                duration: 20,
              }}
              >
              <div>
                <img src={u4} style={{ width: 50, height: 50, marginRight: 5 }} />
              </div>
              <div>
                <p className='ucheading'>Short Video Hosting Rewards.</p>
                <p className='ucpara'>Content creators are rewarded with VCTA for hosting short videos, fostering engagement and content creation within the platform.
                </p>
                {/* <p className='ucbutton'>Learn More ^</p> */}
              </div>

            </motion.div>
            <motion.div
              className='usecase1'
              initial={{
                opacity: 0,
                x: 200
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                duration: 20,
              }}
              >
              <div>
                <img src={u5} style={{ width: 50, height: 50, marginRight: 5 }} />
              </div>
              <div>
                <p className='ucheading'>OTT Platform Subscriptions.</p>
                <p className='ucpara'> Users can subscribe to the  OTT platform using VCTA, gaining access to a diverse array of content, including local markets, gaming, short storytelling, and motivational pieces.

                </p>
                {/* <p className='ucbutton'>Learn More ^</p> */}
              </div>

            </motion.div>

           
            <motion.div
              className='usecase1'
              initial={{
                opacity: 0,
                x: 200
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                duration: 20,
              }}
              >
              <div>
                <img src={u6} style={{ width: 50, height: 50, marginRight: 5 }} />
              </div>
              <div>
                <p className='ucheading'>Dating App Interactions</p>
                <p className='ucpara'> VCTA plays a role in the dating app, potentially facilitating transactions, rewarding engagements, or unlocking premium features.

                </p>
                {/* <p className='ucbutton'>Learn More ^</p> */}
              </div>

            </motion.div>

            <motion.div
              className='usecase1'
              initial={{
                opacity: 0,
                x: 200
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                duration: 20,
              }}
              >
              <div>
                <img src={u8} style={{ width: 50, height: 50, marginRight: 5 }} />
              </div>
              <div>
                <p className='ucheading'>Green Energy Blockchain</p>
                <p className='ucpara'>VCTA is integral to transactions within the green energy blockchain, supporting renewable energy projects with lower transaction costs.</p>
                {/* <p className='ucbutton'>Learn More ^</p> */}
              </div>

            </motion.div>
            <motion.div
              className='usecase1'
              initial={{
                opacity: 0,
                x: 200
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                duration: 20,
              }}
              >
              <div>
                <img src={u7} style={{ width: 50, height: 50, marginRight: 5 }} />
              </div>
              <div>
                <p className='ucheading'>DEXA Transactions</p>
                <p className='ucpara'>In the decentralized exchange (DEXA), users can utilize VCTA for secure and efficient transactions, contributing to liquidity and platform functionality.</p>
                {/* <p className='ucbutton'>Learn More ^</p> */}
              </div>

            </motion.div>
          </div>
        </div>
      </motion.div>


      {/* <div className='s3usecase2' >
        <div className='s3usecaseleft'>
          <motion.img
            initial={{
              scale: 1.2
            }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            whileInView={{
              scale: 1.4,
            }}
            src={urightimg} className='s3img2' />
        </div>

        <motion.div className='s3usecaseright' initial={{ opacity: 0 }} transition={{ ease: "linear", duration: 1, }} whileInView={{ opacity: 1 }}>

          <div className='usecasemain' >
            <motion.div
              initial={{
                opacity: 0,
                x: -200
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                duration: 20,
              }}
              className='usecase1'>
              <div>
                <img src="" style={{ width: 50, height: 50, marginRight: 5 }} />
              </div>
              <div style={{ width: "100%", height: "100%" }}>
                <p className='ucheading'>Lorem ipsum dolor sit.</p>
                <p className='ucpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda totam, alias rerum voluptate harum sequi magni molestiae ipsa recusandae!</p>
                <p className='ucbutton'>Learn More ^</p>
              </div>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: -200
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                duration: 20,
              }}
              className='usecase1'>
              <div>
                <img src="" style={{ width: 50, height: 50, marginRight: 5 }} />
              </div>
              <div>
                <p className='ucheading'>Lorem ipsum dolor sit.</p>
                <p className='ucpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, culpa voluptates voluptas commodi consectetur nesciunt ipsa earum aperiam unde! Facilis?</p>
                <p className='ucbutton'>Learn More ^</p>
              </div>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: -200
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                duration: 20,
              }}
              className='usecase1'>
              <div>
                <img src="" style={{ width: 50, height: 50, marginRight: 5 }} />
              </div>
              <div>
                <p className='ucheading'>Lorem ipsum dolor sit amet.</p>
                <p className='ucpara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam distinctio libero doloribus obcaecati quasi soluta sunt tempora, modi ab laudantium!</p>
                <p className='ucbutton'>Learn More ^</p>
              </div>

            </motion.div>


          </div>



        </motion.div>
      </div> */}
    </div>
  )
}

export default usecase