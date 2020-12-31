import React, { useState, useEffect } from 'react'
import Biglist from './Biglist'
import breed from './images/7213 [Converted].svg'

function Breeds() {

  useEffect(() => {
    document.addEventListener('click', outsideClick);
    return () => document.removeEventListener("click", outsideClick);
  })

  const dogUrl = 'https://dog.ceo/api/breeds/list/all'

  const [ceo, setCeo] = useState([])

  const [status, setStatus] = useState(false)

  const [overlay, setOverlay] = useState(false)

  const upDade = () => {
    fetch(dogUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json.message)
        setCeo(Object.keys(json.message))
      })
    document.getElementById('side').style.width = '50%';
    document.getElementById('close').style.display = 'block';
    setOverlay(!overlay)
  }

  const outsideClick = (e) => {

    if (!e.target.classList.contains('cook')) {

      console.log('clicked outside')
      console.log(e.target.classList)
      document.getElementById('close').style.display = 'none';
      document.getElementById('side').style.width = '0';
      document.getElementById('side').style.display = 'block';
    }
  }


  const dropaction = () => {
    setStatus(true)
  }

  const droprest = () => {
    setStatus(false)
  }


  const handleClose = () => {
    document.getElementById('side').style.width = '0';
    document.getElementById('side').style.display = 'none';
    setOverlay(!overlay)
  }

  return (
    <div>

      <div className='dropdown'
        onMouseEnter={dropaction}
        onMouseLeave={droprest}
      >
        <div className={status ? 'show' : 'hide'} >
          <div className="drop-item">
            {ceo.map(
              item => <Biglist cede={item} key={item} />
            )}
          </div>
          <p className='drop-item'>white</p>
          <p className='drop-item'>grey</p>
          <p className='drop-item'>yellow</p>
        </div>
      </div>

      <div className="intro page">
        <div className="intro-title mini-page">Dog Breeds</div>
        <div className="intro-text">
          There are various types of dog breeds, as a result of temperature,
          food availability, ancestors , location and other possible influnces,
          Below are the officially recognized and categorized breed of dogs,
          there may be new breeds or undiscoverd breeds.
        </div>
        <div className="intro-sample">
          e.g. The Afador is a mixed breed dog–a cross between the Afghan Hound
          and Labrador Retriever dog breeds.
        </div>
      </div>
      <div className="content-breed page">
        <div className="content1 second">
          <img
            src={breed}
            alt="dog img"
            className="w-full page"
          />
        </div>
        <div className="content2">
          <hr />
          <div className="context-1">
            <p>
              Knowing the breed of your dog helps you to narrow down the type of
              dog you want, for those looking to adopt; or how to care for your
              dog, for those who have a dog already; cause it really makes care
              easier for you, your family, the dog and the vetenerian to live
              happily
            </p>
          </div>
          <hr />
          <div className="context-2 ct2-breed">
            <p>2020 Most Popular Dog Breeds (Based on 2019 Stats)</p>
            <table className="">
              <thead>
                <tr>
                  <th>Dog Breed</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Retrievers (Labrador)</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>German Shepherd Dogs</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Retrievers (Golden</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div className="context-3">
            <p>The number of well known dog breeds is 195</p>
          </div>
          <hr />
          <div className="context-4 ">
            <p>
              <button onClick={upDade} className="cook">
                Check out the list of all mixed and purebred dog breeds below,
            </button>
            </p>
            <div className="overlay" id='side'>
              <button
                className="close-overlay"
                id="close" onClick={handleClose}>close</button>
              <div
                className={overlay ? 'overlay-content' : 'hide'}
              >
                {ceo.map(
                  item => <Biglist cede={item} key={item} />
                )}
                <p></p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>

    </div>
  )
}

export default Breeds
