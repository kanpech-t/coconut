import React from 'react'
import diamond from '../assets/diamond.png'
import partialGreen from '../assets/partialGreen.png'
import cupcake from '../assets/cupcake.png'
import ball from '../assets/ball.png'

const CoconutBottom = () => {
  return (
    <div className="bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        Our Coconut
      </h1>

      {/* Shaped Coconut Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-green-700 mb-5">
          Shaped Coconut
        </h2>
        <div className="row">
          <div className="images col">
            <div className="">
              <img alt="diamond" src={diamond} />
              <div>Diamond</div>
            </div>

            <div>
              <img alt="partialGreen" src={partialGreen} />
              <div>Green Cut Diamond</div>
            </div>

            <div>
              <img alt="partialGreen" src={partialGreen} />
              <div>Partial Green Diamond</div>
            </div>
          </div>

          <div className="details col">
            <div>
              <div className="heading">Packing</div>
              <div className="subheading">Size dependent</div>
              <div className="detail">
                <div>9 Units / Carton</div>
                <div>12 Units / Carton</div>
              </div>
            </div>

            <div>
              <div className="heading">Container Load</div>
              <div className="subheading">Pallet</div>
              <div className="detail">
                <div>990 Carton / 20'RF</div>
                <div>1980 Carton / 40'RF (High Cube)</div>
              </div>
              <div className="subheading">No Pallet</div>
              <div className="detail">
                <div>1025 Carton / 20'RF</div>
                <div>2052 Carton / 40'RF (High Cube)</div>
              </div>
            </div>

            <div>
              <div className="heading">Packing</div>
              <div className="detail">
                <div>1x20'RF</div>
              </div>
            </div>

            <div>
              <div className="heading">Packing</div>
              <div className="detail">
                <div>L/C or T/T</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="polished-coconut">
        <h3>Polished Coconut</h3>
        <div className="images">
          <div>
            <img alt="cupcake" src={cupcake} />
            <div>Cupcake</div>
          </div>

          <div>
            <img alt="ball" src={ball} />
            <div>Ball</div>
          </div>
        </div>

        <div className="details">
          <div>
            <div className="heading">Packing</div>
            <div className="subheading">Size dependent</div>
            <div className="detail">
              <div>32 Units / Carton</div>
              <div>40 Units / Carton</div>
            </div>
          </div>

          <div>
            <div className="heading">Container Load</div>
            <div className="subheading">Pallet</div>
            <div className="detail">
              <div>990 Carton / 20'RF</div>
              <div>1980 Carton / 40'RF (High Cube)</div>
            </div>
            <div className="subheading">No Pallet</div>
            <div className="detail">
              <div>1025 Carton / 20'RF</div>
              <div>2052 Carton / 40'RF (High Cube)</div>
            </div>
          </div>

          <div>
            <div className="heading">Packing</div>
            <div className="detail">
              <div>1x20'RF</div>
            </div>
          </div>

          <div>
            <div className="heading">Packing</div>
            <div className="detail">
              <div>L/C or T/T</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoconutBottom
