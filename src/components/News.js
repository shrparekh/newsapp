import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles;

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=753201a411a64bf59ecd69009e03cbad";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News by Shrey -Top headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  discription={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
