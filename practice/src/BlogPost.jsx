
import './App.css';
function BlogPost({ author, title, description }) {
    return (
        <div className="BlogPost">
            <p>Author: {author}</p>
            <h1>Title: {title}</h1>
            <p>Description: {description}</p>
        </div>
    );
}

export default BlogPost;