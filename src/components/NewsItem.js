import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, discription, imageurl, newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageurl
                ? "https:th.bing.com/th/id/OIP.Cl56H6WgxJ8npVqyhefTdQHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{discription}</p>
            <a
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
