import './hero.css'
export default function Hero() {
  return (
    <section className='hero flex'>
      <div className='section-left'>
        <div className='parent-avatar flex'>
          <img src="./me.jpg" className='avatar' alt="picture" />
          <div className='icon-verified'></div>
        </div>

        <h1 className='title'>Full Stack Web Developer, Software Engineer.</h1>
          <p className='sub-title'>
            Dedicated and efficient full stack developer with 3+ years experience in
            application layers, presentation layers, and databases. Certified in both
            F/E and B/E technologies. Seeking to further improve HTML5 and CSS3 skills as the future full stack developer
            at Atmospheric Solutions.
          </p>

          <div className="all-icons flex">
            <div className="icon icon-instagram"></div>
            <div className="icon icon-twitter"></div>
            <div className="icon icon-whatsapp"></div>
            <div className="icon icon-github"></div>
            <div className="icon icon-linkedin"></div>
          </div>


      </div>
      <div className='section-right animation'>
        animation
      </div>
    </section>
  )
}
