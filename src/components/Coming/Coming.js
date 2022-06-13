import React from 'react';
import './Coming.css'

const Coming = () => {
    return (
        <div>
            <h1 className="coming-heading">This Services Will Be Coming Soon!!!</h1>
            <div className="card-group p-5 gap-4">
                <div className="card bg-dark text-white">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDl2mcnYk_BTegnPyRYAQCctAOQ4yynqbQkQ&usqp=CAU" className="card-img-top coming-image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">BMW CAR</h5>
                        <p className="card-text">BMW is known for manufacturing some of the most luxury cars in the world and hence they don't come cheap. </p>

                    </div>
                </div>
                <div className="card bg-dark text-white">
                    <img src="https://i.ibb.co/s1XBM02/bugatti.jpg" className="card-img-top coming-image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">FERRARI CAR</h5>
                        <p className="card-text">Ferrari - All the official contents of the Maranello based carmaker: all the cars in the range and the great historic cars, the official Ferrari dealers.</p>

                    </div>
                </div>
                <div className="card bg-dark text-white">
                    <img src="https://i.ibb.co/ZHzpGQW/ferrari.jpg" className="card-img-top coming-image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">BUGATTI CAR</h5>
                        <p className="card-text">Automobiles Ettore Bugatti was a German then French car manufacturer of high-performance automobiles, founded in 1909 in the then-German  </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coming;