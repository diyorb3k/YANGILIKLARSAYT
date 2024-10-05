import axios from "axios";
import { useEffect, useState } from "react";
import '../components/Header.scss'
const Hom = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const apiKey = '22b3f60844aa4886b6e24407fa6213ec';
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data.articles);
      })
      .catch((error) => console.error("Xato:", error));
  }, []);

  return (
    <div className="container">
      {data &&
        data.map((article) => (
          <div>
            <div key={article.url}>
            <p>{article.title}</p>
            <p>{article.content}</p>
            <img src={article.urlToImage} alt="" />
            <p> vaqti{article.publishedAt}</p>
            <p>{article.description}</p>
            <p>{}</p>
          </div>
          </div>
        ))}
    </div>
  );
};
export default Hom;
