import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  
  //set up state
  const [currentItem, setCurrentItem] = useState(0);
  const [news, setNews] = useState(null);
 const [loading, setLoading] = useState(true);

  //set initial state
  useEffect(() => {
    const newsItems = [
    {
      title: "BBC News",
      url: "https://www.bbc/news",
      description: "Latest news from BBC",
    },
    {
      title: "Google News",
      url: "https://news.google.com/",
      description: "Latest news from Google",
    },
    {
      title: "CNN News",
      url: "https://www.cnn/news",
      description: "Latest news from CNN",
    },
    {
      title: "TechCrunch",
      url: "https://techcrunch.com",
      description: "Latest news from BBC",
    },
    {
      title: "The Verge",
      url: "https://www.theverge.com",
      description: "Latest news from BBC",
    },
  ];
    const item = newsItems[currentItem];
    console.log(item)
    setNews(item);
    setLoading(false);
  }, [currentItem]);

  //handle next button
  const handleNext = (event) => {
    event.preventDefault();
    //update
    setCurrentItem(prev => prev + 1);
  };

  //handle previous button
  const handlePrevious = (event) => {
    event.preventDefault();
    //update
    setCurrentItem(prev => prev - 1);
  };

  //list items
  // const newsList = newsItems.map((item) => {
  //     return (
  //         <div className="news-item" key={item.id}>
  //             <h2>{item.title}</h2>
  //             <p>{item.description}</p>
  //             <a href={item.url}>{item.url}</a>
  //         </div>

  //     );
  // });
  return (
    <div className="minipage">
      <h1>Welcome Here</h1>
      <div className="redirect">
        <Link className="btn-pink" role="button" to="/">
          Home
        </Link>
      </div>
      <div className="newItems">
        <div className="news">
            {loading ? <div>Loading</div>
            : <div className="news-item">
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <a href={news.url}>{news.url}</a>
          </div>
          }
          {/* <div className="news-item">
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <a href={news.url}>{news.url}</a>
          </div> */}
        </div>
        <div className="paginate">
          <button className="prev" onClick={handlePrevious}>Prev</button>
          <button className="next" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
