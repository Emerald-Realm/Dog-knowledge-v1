import React from "react";
import { Link } from 'react-router-dom';
import "./style/main.css";
import showcase from "./images/dog-showcase.png";
import breed from "./images/7213 [Converted].svg";
import list from "./images/dog-list.png";
import talk from "./images/dog-talk.png";
import care from "./images/dog-care.png";

function Home() {
  return (
    <div>
      <div className="home-content">
        <div className="showcase">
          <div className="showcase-img">
            <img
              src={showcase}
              alt="dogs landing page"
              className="case-img"
              href="#"
            />
          </div>
          <div className="showcase-text">
            <p className="">COMMON NAME: Domestic Dog</p>
            <p className="">SCIENTIFIC NAME: Canis familiaris</p>
            <p className="">TYPE: Mammals</p>
            <p className="">DIET: Omnivore</p>
            <p className="">GROUP NAME: Pack</p>
            <p className="">SIZE: Height at the shoulder: 6 to 33 inches</p>
            <p className="">WEIGHT: 3 to 175 pounds</p>
          </div>
        </div>
        <hr />
        <div className="breeds page">
          <div className="breed-img">
            <img src={breed} alt="dog breeds" className="img-breed" />
          </div>
          <div className="breed-info">
            <div className="siteTitle">
              <h2>All Dog Breeds</h2>
            </div>
            <div className="siteText">
              There are various breeds of dogs, each with their own unique
              characteristics ; to effectively identify and learn their habits,
              temperament e.t.c
            </div>
            <div className="siteSample">
              <small>
                e.g. The Afador is a mixed breed dog–a cross between the Afghan
                Hound and Labrador Retriever dog breeds.
              </small>
            </div>
            <Link to="/breeds">
              <div className="moreBtn">
                Learn more
            </div>
            </Link>
          </div>
        </div>
        <hr />
        <div className="list page">
          <div className="list-img">
            <img src={list} alt="dog list" className="img-list" />
          </div>
          <div className="list-info">
            <div className="siteTitle">
              <h2>Dog List</h2>
            </div>
            <div className="siteText">
              If you want to have a dog you have to know the purpose breed is
              famed for, if it aligns with you, your location or specific age
              groups or not.
            </div>
            <div className="siteSample">
              <small>
                e.g.The dogs in the herding list were developed to control large
                flocks of sheep or herds of cattle.
              </small>
            </div>
            <Link to="/lists">
              <div className="moreBtn">
                Learn more
            </div>
            </Link>
          </div>
        </div>
        <hr />
        <div className="talk page">
          <div className="talk-img">
            <img src={talk} alt="dog talk" className="img-talk" />
          </div>
          <div className="talk-info">
            <div className="siteTitle">
              <h2>Dog Communication</h2>
            </div>
            <div className="siteText">
              Dogs are social animals, famed as man’s best friend and their
              loyalty to owners; to learn how to talk , relate with your dog and
              understand your dog
            </div>
            <div className="siteSample">
              <small>
                e.g. Dog Growling: What It Means And What You Should Do
              </small>
            </div>
            <Link to="/talk">
              <div className="moreBtn">
                Learn more
            </div>
            </Link>
          </div>
        </div>
        <hr />
        <div className="care page">
          <div className="care-img">
            <img src={care} alt="dog care" className="img-care" />
          </div>
          <div className="care-info">
            <div className="siteTitle">
              <h2>Dog Care</h2>
            </div>
            <div className="siteText">
              Learn how to care for your dog, train your dog, what to feed your
              dog, avoid your dog falling sick, grooming your dog and how to
              raise an healthy dog
            </div>
            <div className="siteSample">
              <small>
                e.g. How to teach your dog to greet people politely at home
              </small>
            </div>
            <Link to="/care">
              <div className="moreBtn">
                Learn more
            </div>
            </Link>
          </div>
        </div>
        <hr />
        <div className="blog page center">
          <div className="siteInfo">
            <div className="siteInfo">
              <div className="siteTitle">
                <h2>Dog Blog</h2>
              </div>
              <div className="siteText">Learn everything about dogs</div>
              <div className="siteSample">
                <small>everything dogs</small>
              </div>
              <Link to="/blog">
              <div className="moreBtn">
                Learn more
            </div>
            </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Home;
