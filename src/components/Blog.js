import React from 'react'
import red from './images/red pillow bulldog.jpg'
import pup from './images/pup.jpg'
import ball from './images/ball bulldog.jpg'
import ele from './images/dog-1194083_1920.jpg'
import dob from './images/doberman-1334497_1920.jpg'
import talk from './images/dog-talk.png'


function Blog() {
    return (
        <div>
      <div className="intro">
        <div className="intro-title">Dog Blogs</div>
        <div className="intro-text">Learn and Write Everthing About Dogs</div>
        <div className="intro-sample center">Everything About Dogs</div>
      </div>
      <div className="content-blog content">
        <div className="context center">
          <div className="content1 page">
            <img src={ball} alt="dog img" />
            Famous Dog Breeds
          </div>
          <div className="content2 page">
            <img src={dob} alt="dog img" />
            Famous Dogs
          </div>
          <div className="content3 page">
            <img src={talk} alt="dog img" className="" />
            Are You Ready For A Dog ?
          </div>
          <div className="content4 page">
            <img src={red} alt="dog img" />
            Dog Names by Theme
          </div>
          <div className="content5 page">
            <img src={ele} alt="dog img" />
            Dog Names by Gender
          </div>
          <div className="content6 page">
            <img src={pup} alt="dog img" className="" />
            Dog Names by Breeds
          </div>
        </div>
      </div>
        </div>
    )
}

export default Blog
