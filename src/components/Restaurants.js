
import Restaurant from "./Restaurant";

function Restaurants({ restaurants, setSearchTerm, searchTerm }) {
  function handleOnSearchRestaurant(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <>
      <h2 className="restaurant-browse">Browse Restaurants</h2>

      <form className="d-flex my-4">
        <input
          className="form-control me-2 search-box"
          type="search"
          placeholder="Search For Your Favorite Restaurant"
          aria-label="Search"
          value={searchTerm}
          onChange={handleOnSearchRestaurant}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className="container-fluid restaurant p-5 shadow">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
          {restaurants
            .filter((restaurant) => {
              return searchTerm.toLowerCase() === ""
                ? restaurant
                : restaurant.name.toLowerCase().includes(searchTerm);
            })
            .map((restaurant) => (
              <Restaurant restaurant={restaurant} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Restaurants;