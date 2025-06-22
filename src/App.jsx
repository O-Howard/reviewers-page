import './App.css'
import done from './assets/Done_ring_round_fill.svg'
import google from './assets/google-png.png'
import meta from './assets/meta-png.png'
import starY from './assets/Star_fill.svg'
import starG from './assets/Star_fill_gray.svg'
function App() {
  return (
    <>
      <div className='container'>
        <div className='left'>
          <div className='summery'>
            <h1>Reviewers</h1>
            <p>Reviewers is where people can access guidelines, checklists, and other tools to assist them in reviewing papers or manuscripts. It provides a structured approach to ensure that the review process is thorough, efficient, and consistent.</p>
          </div>
          <div>
            <div className='iconRow'>
              <img src={done} alt="done" />
              <p>Checklist to Review an Academic Paper</p>
            </div>
            <div className='iconRow'>
              <img src={done} alt="done" />
              <p>Peer Review Checklist</p>
            </div>
            <div className='iconRow'>
              <img src={done} alt="done" />
              <p>Checklist for Editors, Reviewers, and Authors of SPIE Journals</p>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='google'>
            <div className='stars'>
              <img className='logo' src={google} alt="google icon" />
              <img src={starY} alt="full star" />
              <img src={starY} alt="full star" />
              <img src={starY} alt="full star" />
              <img src={starY} alt="full star" />
              <img src={starG} alt="empty star" />
            </div>
            <p className='heading'>Samantha Lee</p>
            <p className='text'>The checklist ensures that the review process is thorough</p>
          </div>
          <div className='meta'>
            <div className='stars'>
              <img className='logo' src={meta} alt="meta icon" />
              <img src={starY} alt="full star" />
              <img src={starY} alt="full star" />
              <img src={starY} alt="full star" />
              <img src={starY} alt="full star" />
              <img src={starY} alt="full star" />
            </div>
            <p className='heading'>Rachel Patel</p>
            <p className='text'>I highly recommend the Writecream Business Description</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
