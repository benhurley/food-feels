import React, { useState } from 'react';
import './Home-page.css';
import { Search } from '../Search/Search';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [searchRestaurant, setSearchRestaurant] = useState({});

  return (
      <div className="Home">
        <header className="Home-header">
          <h1> Food Feels </h1>
          { process.env.NODE_ENV === 'production' 
            ? <p> Website coming soon! </p>
            : <p> This is the developer-mode of Food Feels. </p>
          }
          <Search setSearchRestaurant={setSearchRestaurant} />
          <div style={{"marginTop": "10px"}}>
            <Link to={`/restaurant/${searchRestaurant._id}`}>
              <button>Submit</button>
            </Link>
          </div>
          <div style={{"marginTop": "150px"}}>
            <Link to='/add'>
              <button>Add New Restaurant</button>
            </Link>
          </div>
        </header>
      </div>
  );
}
