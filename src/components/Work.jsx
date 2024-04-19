import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import data from '../assets/data.json'
const Work = () => {
  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
            <Carousel autoPlay={true} swipeable={false}  infiniteLoop={true}  showArrows={true} showIndicators=
            {false} showStatus={false} showThumbs={false} >
                {
                    data.projects.map(item=>(
                       <div key={item.title} className='myWork'>
                        <img src={item.imgSrc} alt="ProjectImage" />
                        <aside>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href={item.url} target='blank' >View Project</a>
                        </aside>
                       </div>
                    ))
                }
            </Carousel>
        </article>
      </section>
    </div>
  )
}

export default Work
