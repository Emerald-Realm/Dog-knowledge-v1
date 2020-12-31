import React from 'react'
import red from './images/red pillow bulldog.jpg'
import pup from './images/pup.jpg'
import ball from './images/ball bulldog.jpg'
import ele from './images/dog-1194083_1920.jpg'
import dob from './images/doberman-1334497_1920.jpg'


function Care() {
    return (
        <div>
      <div className="intro">
        <div className="intro-title">Dog Care</div>
        <div className="intro-text">
          Learn to care for your canine, to prevent diseases , death and keep
          your canine in good shape
          <p>
            Learn how to care for your dog, train your dog, what to feed your
            dog, avoid your dog falling sick, grooming your dog and how to raise
            an healthy dog
          </p>
        </div>
        <div className="intro-sample">
          e.g. How to teach your dog to greet people politely at home
        </div>
      </div>
      <div className="content-care">
        <div className="context center">
          <div className="content1 page">
            <img
              src={red}
              alt="dog-img"
              className=""
            />
            Dog Ages and Stages
          </div>
          <div className="content2 page">
            <img src={pup} alt="dog-img" className="" />
            Dog Behaviour
          </div>
          <div className="content3 page">
            <img src={ball} alt="dog-img" className="" />
            Dog Fitness
          </div>
          <div className="content4 page">
            <img src={ele} alt="dog-img" />
            Dog Food and Nutrition
          </div>
          <div className="content5 page">
            <img src={ele} alt="dog-img" />
            Dog Cancer
          </div>
          <div className="content6 page">
            <img src={dob} alt="dog-img" />
            Dog Flea and Tick
          </div>
        </div>
      </div>
        </div>
    )
}

export default Care
