import React from 'react'
import '../Styles/Services.css'
import eggs from '../assets/Eggspics.jpeg'
import chicken from '../assets\/broiler-chicken-2.jpg'
import cows from '../assets/Cows.jpg'
import turkey from '../assets/Turkey.jpg'
import fish from '../assets/Catfish.webp'
import frozenfoods from '../assets/Frozen foods.jpg'


const Services = () => {
  return (
    <section id='Services' className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-lg text-gray-600 mt-2">
            High-quality poultry, livestock, and fresh produce delivered with care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={eggs} // Replace with actual image URL
              alt="Fresh Eggs"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Fresh Eggs</h3>
              <p className="text-sm text-gray-600 mt-2">
                Farm-fresh eggs packed with nutrients and flavor.
              </p>
              <p className="text-green-500 font-semibold mt-4">Price Vary</p>
              <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded hover:bg-green-600 transition-colors"><a href="https://wa.link/but5j8">Contact to Order</a>
              
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={chicken} // Replace with actual image URL
              alt="Healthy Chickens"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Healthy Chickens</h3>
              <p className="text-sm text-gray-600 mt-2">
                Free-range chickens raised with care.
              </p>
              <p className="text-green-500 font-semibold mt-4">Price Vary</p>
              <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded hover:bg-green-600 transition-colors"><a href="https://wa.link/1zo0c9">Contact to Order</a>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={cows} // Replace with actual image URL
              alt="Dairy Cow"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Dairy Cow</h3>
              <p className="text-sm text-gray-600 mt-2">
                High-yielding cows for fresh milk production.
              </p>
              <p className="text-green-500 font-semibold mt-4">Price Vary</p>
              <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded hover:bg-green-600 transition-colors"><a href="https://wa.link/53oco5">Contact to Order</a>    
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={turkey} // Replace with actual image URL
              alt="turkey"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Healthy Turkey</h3>
              <p className="text-sm text-gray-600 mt-2">
              Free-range chickens raised with care.
              </p>
              <p className="text-green-500 font-semibold mt-4">Price Vary</p>
              <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded hover:bg-green-600 transition-colors"><a href="https://wa.link/hpxip7"> Contact to Order</a>
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={fish} // Replace with actual image URL
              alt="fish"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Cat Fish</h3>
              <p className="text-sm text-gray-600 mt-2">
                Well fed and healthy cat fish.
              </p>
              <p className="text-green-500 font-semibold mt-4">Price Vary</p>
              <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded hover:bg-green-600 transition-colors"><a href="https://wa.link/dcbhon"> Contact to Order</a>
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={frozenfoods} // Replace with actual image URL
              alt="Dairy Cow"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Frozen Foods</h3>
              <p className="text-sm text-gray-600 mt-2">
                Nutritious and hygenic frozen foods
              </p>
              <p className="text-green-500 font-semibold mt-4">Price Vary</p>
              <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded hover:bg-green-600 transition-colors"><a href="https://wa.link/03l3a2">Contact to Order</a>
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Services