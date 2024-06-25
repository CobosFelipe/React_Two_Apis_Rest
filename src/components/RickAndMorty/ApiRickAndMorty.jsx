import React, { useState } from "react";
import "/src/styles/ApiRickAndMorty.css";

export const ApiRickAndMorty = () => {
  return (
    <div className="container">
      <h2>RICK AND MORTY</h2>
      <div className="categories d-flex mt-4 justify-content-center">
        <div className="card text-bg-dark">
          <img src="https://th.bing.com/th/id/OIP.oxOeJLfQdgpEJJ38IXFZEQHaEK?rs=1&pid=ImgDetMain" className="card-img-top" />
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              PERSONAJES
            </a>
          </div>
        </div>

        <div className="card text-bg-dark">
          <img src="https://vignette.wikia.nocookie.net/rickandmorty/images/0/07/S2e2_impressed_aliens.png/revision/latest?cb=20160919072720" className="card-img-top" />
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              ESPECIES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
