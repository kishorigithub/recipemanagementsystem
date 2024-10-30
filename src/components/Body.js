import { useState } from "react";


const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchSubmit = () => {
    // You can navigate to a search results page or filter the current data
    console.log("Searching for: ", searchTerm);
  };

  return (
    <div>
      <div>
        <center>
          <h1>
            <span className="text1">Simple recipes made for </span>
            <span className="text2">real, actual, everyday life.</span>
          </h1>
        </center>
      </div>

      <div className="card-container">
        <div className="card">
          <img src=".\img1.jpg" alt="Card 1" />
          <center><div className="lable-main">
          <label>DINNER</label>
          </div></center>
        </div>
        <div className="card">
          <img src=".\img2.jpg" alt="Card 2" />
          <center><div className="lable-main">
          <label>BOWLS</label>
          </div></center>
        </div>
        <div className="card">
          <img src=".\img3.jpg" alt="Card 3" />
          <center><div className="lable-main">
          <label>SOS SERIES</label>
          </div></center>
        </div>
        <div className="card">
          <img src=".\img4.jpg" alt="Card 4" />
          <center><div className="lable-main">
          <label>FALL</label>
          </div></center>
        </div>

        <div className="image-container">
          <div className="image-item">
            <img src=".\img1.jpg" alt="Card 1" />
            <label>
              QUICK <br></br>
              AND EASY
            </label>
          </div>
          <div className="image-item">
            <img src=".\img2.jpg" alt="Card 1" />
            <label>DINNER</label>
          </div>
          <div className="image-item">
            <img src=".\img3.jpg" alt="Card 1" />
            <label>VEGETARIAN</label>
          </div>
          <div className="image-item">
            <img src=".\img4.jpg" alt="Card 1" />
            <label>HEALTHY</label>
          </div>
          <div className="image-item">
            <img src=".\img1.jpg" alt="Card 1" />
            <label>INSTANT POT</label>
          </div>
          <div className="image-item">
            <img src=".\img2.jpg" alt="Card 1" />
            <label>VEGAN</label>
          </div>
          <div className="image-item">
            <img src=".\img3.jpg" alt="Card 1" />
            <label>MEAL PREP</label>
          </div>
          <div className="image-item">
            <img src=".\img4.jpg" alt="Card 1" />
            <label>SOUPS</label>
          </div>

          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <button onClick={handleSearchSubmit}>Search</button>
          </div>
        </div>
      </div>
      {/* ------------------------Second section----------------------- */}
      <div className="maintwo-heder">
        <center>
          <h2>AS SEEN IN</h2>
        </center>
      </div>
      <div className="main-two">
        <span>CookBook Pro</span>
        <span>FlavorFusion</span>
        <span>RecipeVault</span>
        <span>TasteTrack</span>
        <span>SavorSteps</span>
        <span>MealMap</span>

        {/* <div>hdshsdh</div> */}
      </div>

      {/* ------------------------------Third section----------------------------------- */}

      <div className="third-container">
        <div className="third-header">
          <h2>THE LATEST AND GREATEST</h2>
        </div>
        <div className="third-main">
          <div>
            <div className="mainimg">
              <div>
                <img src=".\img3.jpg" alt="Card 1" />
              </div>
              <div>
                <h2>September 24, 2024</h2>
                <h1>Garlic and Black Pepper Beef Skewers</h1>
                <h3>
                  These beef skewers are bringing all the flavor! Thinly sliced
                  strips of steak browned and caramelized to juicy, sweet
                  perfection.
                </h3>
                <h2>Continue Reading</h2>
              </div>
            </div>

            {/* -------------------------------------------------------- */}

            <div className="mainimg">
              <div>
                <img src=".\img3.jpg" alt="Card 1" />
              </div>
              <div>
                <h2>September 24, 2024</h2>
                <h1>Garlic and Black Pepper Beef Skewers</h1>
                <h3>
                  These beef skewers are bringing all the flavor! Thinly sliced
                  strips of steak browned and caramelized to juicy, sweet
                  perfection.
                </h3>
                <h2>Continue Reading</h2>
              </div>
            </div>

            {/* ------------------------------------------------------------------- */}
            <div className="mainimg">
              <div>
                <img src=".\img3.jpg" alt="Card 1" />
              </div>
              <div>
                <h2>September 24, 2024</h2>
                <h1>Garlic and Black Pepper Beef Skewers</h1>
                <h3>
                  These beef skewers are bringing all the flavor! Thinly sliced
                  strips of steak browned and caramelized to juicy, sweet
                  perfection.
                </h3>
                <h2>Continue Reading</h2>
              </div>
            </div>
            {/* -------------------------------------------------------------------- */}
            <div className="mainimg">
              <div>
                <img src=".\img3.jpg" alt="Card 1" />
              </div>
              <div>
                <h2>September 24, 2024</h2>
                <h1>Garlic and Black Pepper Beef Skewers</h1>
                <h3>
                  These beef skewers are bringing all the flavor! Thinly sliced
                  strips of steak browned and caramelized to juicy, sweet
                  perfection.
                </h3>
                <h2>Continue Reading</h2>
              </div>
            </div>

            {/* ----------------------------------------------------------------- */}

            <div className="post-btn">
              <button>VIEW MORE RECENT POSTS</button>
            </div>
            {/* ----------------------------------------------------------------------------- */}

            <div className="img-container">
              <div className="image-item1">
                <img src=".\img1.jpg" alt="Card 1" />
              </div>
              <div className="image-item1">
                <img src=".\img2.jpg" alt="Card 1" />
              </div>
              <div className="image-item1">
                <img src=".\img3.jpg" alt="Card 1" />
              </div>
            </div>

            {/* ------------------------------------------------------ */}
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
