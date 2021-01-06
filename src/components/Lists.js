import React from "react";
import up from "./images/dog up.jpg";
import ball from "./images/ball bulldog.jpg"

function Lists() {


  return (
    <div>
      <div className="intro">
        <div className="intro-title">Dog Lists</div>
        <div className="intro-text">
          Want to make dog identification and specification easier , don’t worry
          we have it handled, below.
            If you want to have a dog, you have to know the purpose breed is
            famed for, if it aligns with you, your location or specific age
            groups or not.
        </div>
        <div className="intro-sample tx-ct">
          e.g.The dogs in the herding list were developed to control large
          flocks of sheep or herds of cattle.
        </div>
      </div>
      <div className="content-list">
        <div className="content1 page">
          <img src={up} alt="dog img" className="first" />
          <div className="text">
            <h4 className="head-text siteTitle hover">
              Dogs that can adapt to Little space or Apartment living
            </h4>
            <p>
              Contrary to popular belief, small size doesn’t necessarily an
              apartment dog make. Plenty of small dogs are too high-energy and
              yappy for life in a high-rise. Being quiet, low energy, fairly
              calm indoors, and polite with the other residents are all good
              qualities in an apartment dog. And you can find an awesome crate
              for your dog here to give them a little more personal space in
              your apartment. See Dogs Not Well Suited to Apartment Living
            </p>
          </div>
        </div>
        <div className="content2 page">
          <img src={ball} alt="dog img" />
          <div className="text">
            <h4 className="head-text siteTitle hover">Dogs that are Affectionate to Family</h4>
            <p>
              Some breeds are independent and aloof, even if they’ve been raised
              by the same person since puppyhood; others bond closely to one
              person and are indifferent to everyone else; and some shower the
              whole family with affection. Breed isn’t the only factor that goes
              into affection levels; dogs who were raised inside a home with
              people around feel more comfortable with humans and bond more
              easily. Treats can help the bonding process go more smoothly. Try
              giving your dog Glyde Mobility Chews to help them see you as a
              provider and to keep their joints healthy! See Dogs Less
              Affectionate with Family
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lists;
