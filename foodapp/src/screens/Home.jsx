import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import axios from "axios";

function Home() {
  const [search, setSearch] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadData = async () => {
    const response = (await axios.get("/api/foodData")).data;

    // const response = await fetch("/api/foodData", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const jsonData = await response.json();
    console.log(response[0], response[1]);
    setFoodData(response[0]);
    setFoodCategory(response[1]);
  };

  useEffect(() => {
    loadData();
    setLoading(false);
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="heading">Discover the best food & drinks</h1>
        <div
          id="carouselExampleInterval"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" style={{ height: "70vh" }}>
            <div className="carousel-item active" data-bs-interval="3000">
              <img
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="d-block w-100 "
                alt="..."
                style={{
                  filter: "brightness(50%)",
                }}
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="d-block w-100 "
                alt="..."
                style={{
                  filter: "brightness(50%)",
                }}
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="https://images.pexels.com/photos/2732663/pexels-photo-2732663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="d-block w-100 "
                alt="..."
                style={{
                  filter: "brightness(50%)",
                }}
              />
            </div>
          </div>

          <div className="carousel-caption d-none d-md-block">
            <div className="d-flex justify-content-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* <button
                className="btn"
                type="submit"
                style={{
                  background: "orange",
                  color: "black",
                }}
              >
                Search
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="container">
          {foodCategory !== [] ? (
            foodCategory.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-4 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodData !== [] ? (
                    foodData
                      .filter(
                        (food) =>
                          food.CategoryName === data.CategoryName &&
                          food.name
                            .toLowerCase()
                            .includes(search.toLocaleLowerCase())
                      )
                      .map((filteritem) => {
                        return (
                          <div
                            key={filteritem._id}
                            className="col-12 col-md-6 col-lg-3 justify-content-center d-flex"
                          >
                            <Card
                              foodData={filteritem}
                              options={filteritem.options[0]}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div>Loader...</div>
                  )}
                </div>
              );
            })
          ) : (
            <div>Loading</div>
          )}

          {/* <Card /> */}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Home;
