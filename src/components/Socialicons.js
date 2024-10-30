import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Socialicon=()=>{
    return(
        <div>
             <div className="social-container">
              <div className="social-icons">
                <h3>FOLLOW US</h3>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="3x" />
                </a>
              </div>
              {/* ------------------------------------------------------------- */}
              <div>
                <form className="form-update">
                  <h2>Sign Up for email Updates</h2>
                  <input placeholder="First Name"></input>
                  <input placeholder="Email"></input>
                <button>GO</button>
                </form>
              </div>
            </div>
        </div>

    )

}
export default Socialicon;