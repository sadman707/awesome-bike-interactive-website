import React from 'react';
import './Coming.css'

const Coming = () => {
    return (
        <div>
            <h1 class="coming-heading">This Services Will Be Coming Soon!!!</h1>
            <div class="card-group p-5 gap-4">
                <div class="card bg-dark text-white">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDl2mcnYk_BTegnPyRYAQCctAOQ4yynqbQkQ&usqp=CAU" class="card-img-top coming-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">BMW CAR</h5>
                        <p class="card-text">BMW is known for manufacturing some of the most luxury cars in the world and hence they don't come cheap. </p>

                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://i.ibb.co/s1XBM02/bugatti.jpg" class="card-img-top coming-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">FERRARI CAR</h5>
                        <p class="card-text">Ferrari - All the official contents of the Maranello based carmaker: all the cars in the range and the great historic cars, the official Ferrari dealers.</p>

                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="https://i.ibb.co/ZHzpGQW/ferrari.jpg" class="card-img-top coming-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">BUGATTI CAR</h5>
                        <p class="card-text">Automobiles Ettore Bugatti was a German then French car manufacturer of high-performance automobiles, founded in 1909 in the then-German  </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coming;