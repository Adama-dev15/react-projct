import React from 'react'
import "./asideOne.css"

const AsideOne = () => {
  return (
    <div className='asideOne'>
      <div className='title'>
        <h2>Acceuil</h2>
      </div>
      <div className="elements">
        <div className="element">
          <div className="list"></div>
          <div className="name"><a href="#">TELEPHONES</a></div>
          <div className="add"><a href="#">+</a></div>
        </div>

        <div className="element">
          <div className="list"></div>
          <div className="name"><a href="#">TABLETTES</a></div>
          <div className="add"><a href="#">+</a></div>
        </div>

        <div className="element">
          <div className="list"></div>
          <div className="name"><a href="#">INFORMATIQUE</a></div>
          <div className="add"><a href="#">+</a></div>
        </div>

        <div className="element">
          <div className="list"></div>
          <div className="name"><a href="#">ELECTRONIQUE</a></div>
          <div className="add"><a href="#">+</a></div>
        </div>

        <div className="element">
          <div className="list"></div>
          <div className="name"><a href="#">MODES</a></div>
          <div className="add"><a href="#">+</a></div>
        </div>

        <div className="element">
          <div className="list"></div>
          <div className="name"><a href="#">ACCESOIRES</a></div>
          <div className="add"><a href="#">+</a></div>
        </div>

        <div className="element">
          <div className="list"></div>
          <div className="name"><a href="#">Jeux et divertissement</a></div>
        </div>

        <div className="element">
          <div className="list"></div>
          <div className="name"><a href="#">Equipements professionnels</a></div>
        </div>

        <div className="element">
          <div className="list"></div>
          <div className="name"><a href="#">BON PLANS</a></div>
        </div>
      </div>
    </div>
  )
}

export default AsideOne;
