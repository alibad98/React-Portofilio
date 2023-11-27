import './main.css'
export default function Main() {
  return (
    <main className='flex'>
      <div className=' flex section-left'>
        <button className='active'>All Projects</button>
        <button>Django</button>
        <button>React</button>
        <button>Odoo</button>
        <button>Other</button>
      </div>
      <div className='flex section-right'>

        {['a', 'b', 'c', 3, 4].map((item) => { 
          return (
            <article key={item} className='card'>
          <img width={266} src="./page.jpg" alt="" />
          <div style={{width:"266px"}} className='box'>
            <h1 className='title'>Landing Page</h1>
            <p className='sub-title'>This is just a test paragraph and it is not by any meaning perminant yall,
            and I need more ctent so imma just say fuck israel.</p>
            <div className='flex icons'>
              <div style={{gap:'11px'}} className='flex'>
                <a href="sssss" className="icon-link"></a>
                <a href="sssssss" className="icon-github"></a>
              </div>
              <a className='link flex' href="sssss">
                more
                <span style={{alignSelf: "end"}} className='icon-arrow-right'></span>
              </a>
            </div>
          </div>
        </article>
          )
        })}

      </div>
    </main>
  )
}
