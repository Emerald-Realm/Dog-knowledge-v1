import React from "react";
import red from './images/red pillow bulldog.jpg'
import pup from './images/pup.jpg'
import ele from './images/dog-1194083_1920.jpg'


function Talk() {
  return (
    <div>
      <div className="intro">
        <div className="intro-title">Dog Communication</div>
        <div className="intro-text">
          Want to make dog identification and specification easier , don’t worry
          Dogs are social animals, famed as man’s best friend and their loyalty
          to owners; to learn how to talk , relate with your dog and understand
          your dog.
        </div>
        <div className="intro-sample tx-ct">
          e.g. Dog Growling: What It Means And What You Should Do
        </div>
      </div>
      <div className="content content-talk">
        <div className="content1 page">
          <img src={red} alt="" className="" />
          <div className="text">
            <h3 className="text-head hover">
              Improving communication between you and your canine
            </h3>
            <p>
              Canine body language has been studied by researchers and
              scientists for years. Dogs are equipped with this very reliable
              and consistent language to help them communicate their intentions
              to one another. Their primary goal in using their language is to
              reduce and resolve conflict. Imagine that! How very civil of
              them!Dogs use this very same […]
            </p>
          </div>
        </div>
        <div className="content2 page">
          <img src={pup} alt="" className="" />
          <div className="text">
            <h3 className="text-head hover">Your Dog’s yawning, translated</h3>
            <p>
              Dog-language expert Colleen Safford examines dog yawning and what
              it means for pet owners in this latest installment of Dog yawning,
              translated
            </p>
          </div>
        </div>
        <div className="content3 page">
          <img src={ele} alt="" className="img-fluid" />
          <div className="text">
            <h3 className="text-head hover">When Your Dog turn its Head</h3>
            <p>
              Dog-language expert Colleen Safford, who studies non-verbal dog
              communication, reveals what it means when a dog turns its head. Is
              it camera shy or annoyed?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talk;
