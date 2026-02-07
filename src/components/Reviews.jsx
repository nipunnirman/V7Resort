import React from 'react';

const Reviews = () => {
    return (
        <section id="reviews" className="reviews-section">
            <div className="section-header">
                <h2 className="section-title">Guest Reviews</h2>
                <p className="section-subtitle">What our guests say about us</p>
            </div>
            <div className="reviews-container">
                <div className="review-card">
                    <div className="review-stars">⭐⭐⭐⭐⭐</div>
                    <p className="review-text">"Absolutely wonderful stay! The AC rooms were spotless and comfortable. The staff went above and beyond to make our vacation memorable. Highly recommend Cozy Garden!"</p>
                    <div className="review-author">
                        <div className="author-avatar">S</div>
                        <div className="author-info">
                            <h4>Sarah Johnson</h4>
                            <p>Stayed 1 week</p>
                        </div>
                    </div>
                </div>

                <div className="review-card">
                    <div className="review-stars">⭐⭐⭐⭐⭐</div>
                    <p className="review-text">"Perfect location in Ahangama! The rooms are modern and clean. The monthly package was great value for money. Will definitely return for our next visit to Sri Lanka."</p>
                    <div className="review-author">
                        <div className="author-avatar">M</div>
                        <div className="author-info">
                            <h4>Michael Chen</h4>
                            <p>Stayed 1 month</p>
                        </div>
                    </div>
                </div>

                <div className="review-card">
                    <div className="review-stars">⭐⭐⭐⭐⭐</div>
                    <p className="review-text">"Exceptional service and beautiful accommodation. The AC kept the room perfectly cool even during the hottest days. Great amenities and very responsive staff!"</p>
                    <div className="review-author">
                        <div className="author-avatar">P</div>
                        <div className="author-info">
                            <h4>Priya Patel</h4>
                            <p>Stayed 3 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
