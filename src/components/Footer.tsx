import React from 'react'
import './css/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-bar d-f jc-sb">
        <ul className="footer-bl-list">
          <li><a href="">Home</a></li>
          <li><a href="">Catalogue</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Payment</a></li>
          <li><a href="">Delivery</a></li>
          <li><a href="">Return</a></li>
          <li><a href="">Privacy policy</a></li>
          <li><a href="">Terms & Conditions</a></li>
        </ul>
        <ul className="footer-bl-list">
          <li><a href="">Birthday Gift</a></li>
          <li><a href="">Christmas</a></li>
          <li><a href="">New Year</a></li>
          <li><a href="">Wedding</a></li>
          <li><a href="">Valentine’s Day</a></li>
          <li><a href="">Baby Shower</a></li>
          <li><a href="">Mother’s Day</a></li>
          <li><a href="">Father’s Day</a></li>
        </ul>
        <div>
          <h3 className="footer-bl-title">Information</h3>
          <p className="footer-bl-desc">Simple Brown Box Ltd</p>
          <p className="footer-bl-desc" style={{ marginTop: "20px" }}>
            Flat 44 <br />
            Manley Heights <br />
            1 South Way <br />
            Wembley <br />
            HA9 0JU
          </p>
          <p className="footer-bl-desc" style={{ marginTop: "19px" }}>Phone: +44 1234567899</p>
          <p className="footer-bl-desc" style={{ marginTop: "11px" }}>
            Company@SimpleBrownBox.co.uk <br />
            Service@SimpleBrownBox.co.uk <br />
            Hello@SimpleBrownBox.co.uk
          </p>
        </div>
        <div>
          <h3 className="footer-bl-title">My account</h3>
          <ul className="footer-bl-list">
            <li><a href="">Registration</a></li>
            <li><a href="">Log in</a></li>
            <li><a href="">My wishlist</a></li>
            <li><a href="">View bag</a></li>
          </ul>
          <div className="footer-payment">
            <div><img src="/images/footer-payment.png" alt="footer-payment" /></div>
            <p className="footer-payment-note">
              <span>We accept all major cards.</span> All the payments
              are made through the Secure Platform <span>Paypal</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyrights">Copyright &copy; 2022 «Simple Brown Box»</div>
    </footer>
  )
}

export default Footer