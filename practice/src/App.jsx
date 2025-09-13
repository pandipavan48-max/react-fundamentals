import ProductCard from "./ProductCard.jsx";
import  "./ProductCard.css"
import './App.css';
import BlogPost from "./BlogPost.jsx";
import './BlogPost.css';

function App() {
  const products = [
    {
      productname: "pavan",
      price:" iphone",
      isAvailable: true
      
    },
    {
      productname   : "iphone",
      price: "$699",
      isAvailable: false
    },
    {
      productname: "samsung",
      price: "$799",
      isAvailable: true
    }
  ];
  const posts = [
    {
      id: 1,
      Author: "teja sajja",
      title: "mirai",
      description: "third  pan india movie"
    },
    {
      id: 2,
      Author: "mouli",
      title: "little hearts",
      description: "debut movie"
    },
    {
      id: 3,
      Author: "pavan kalyan",
      title: "OG",
      description: "blockbuster movie"
    }
  ];


  return (
    <div className="App">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          author={post.Author}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
}

export default App;





