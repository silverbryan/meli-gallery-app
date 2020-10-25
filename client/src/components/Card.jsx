import React from 'react'

function Card({ image, title, subtitle, rank }) {
    return (
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card">
                <div className="card__image">
                    <img
                        src={image}
                        alt="motorola-g-plus"
                        height="200"
                    />
                </div>
            </div>
            <div className="card__content">
                <div className="content">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                </div>
                <div className="content">
                    <h6>{'Rank '+ rank}</h6>
                </div>
            </div>
        </div>
    );
}

export default Card;