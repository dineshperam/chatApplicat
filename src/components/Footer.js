import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { LinkedIn, Telegram, WhatsApp, YouTube } from '@mui/icons-material';


export default function Footer() {
  return (
    <div className='m-5  border-top'>
      <footer className='py-5' >
        <div className="row">
          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col-4 offset-1">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                  <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-between py-4 border-top">
          <p>© 2023 HungryVerse, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-light" href="/"><svg className="bi" width="24" height="24"><FacebookIcon/></svg></a></li>
            <li className="ms-3"><a className="link-light" href="/"><svg className="bi" width="24" height="24"><TwitterIcon/></svg></a></li>
            <li className="ms-3"><a className="link-light" href="/"><svg className="bi" width="24" height="24"><InstagramIcon/></svg></a></li>
            <li className="ms-3"><a className="link-light" href="/"><svg className="bi" width="24" height="24"><WhatsApp/></svg></a></li>
            <li className="ms-3"><a className="link-light" href="/"><svg className="bi" width="24" height="24"><LinkedIn/></svg></a></li>
            <li className="ms-3"><a className="link-light" href="/"><svg className="bi" width="24" height="24"><Telegram/></svg></a></li>
            <li className="ms-3"><a className="link-light" href="/"><svg className="bi" width="24" height="24"><YouTube/></svg></a></li>
          </ul>
        </div>
      </footer>
    </div >
  )
}
