import React from 'react'
import data from '../assets/data.json'
const Timeline = () => {
  return (
    <div id='timeline'>
      <div className="timelineBox">
        {
            data.projects.map((item,index)=>(
                <TimelineItem key={index} heading={item.title} date={item.date} index={index}/>
            ))
        }
      </div>
    </div>
  )
}

const TimelineItem=({heading, date, index})=>(
    <div className={`timelineItem ${(index%2==0)?'leftTl':'rightTl'}`}>
        <div>
        <h2>{heading}</h2>
        <p>{date}</p>
        </div>
        
    </div>
)


export default Timeline
