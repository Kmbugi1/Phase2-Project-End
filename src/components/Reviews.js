import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [formData, setFormData] = useState({
    userName: '',
    restaurantName: '',
    reviewText: '',
  });

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from your JSON server when the component mounts
    fetch("http://localhost:3000/Reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/Reviews", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Return the newly created review
        }
        throw new Error('Failed to submit review. Please try again.');
      })
      .then((newReview) => {
        // Update the reviews state with the new review
        setReviews((prevReviews) => [...prevReviews, newReview]);

        // Clear the form after successful submission
        setFormData({
          userName: '',
          restaurantName: '',
          reviewText: '',
          id: '',
        });

        alert('Review submitted successfully!');
      })
      .catch((error) => {
        console.error('Error submitting review:', error);
        alert(error.message);
      });
  };

  return (
    <div>
      <h2>Review Your FAV!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Your Name:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="restaurantName">Restaurant Name:</label>
          <input
            type="text"
            id="restaurantName"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="reviewText">Your Review:</label>
          <textarea
            id="reviewText"
            name="reviewText"
            value={formData.reviewText}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>

      <div>
        <h3>Reviews</h3>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.userName}</strong> - {review.restaurantName}: {review.reviewText}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;


