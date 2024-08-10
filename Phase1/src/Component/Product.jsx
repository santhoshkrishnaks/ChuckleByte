import{ useState } from "react";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import '../Component/Product.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Product = () => {
  const [mainImage, setMainImage] = useState(img1);
  const [comments, setComments] = useState([
    { id: 1, author: "Santhosh Krishna", body:"A fantastic product that I can't imagine living without."},
    { id: 2, author: "Tamil Selvan", body:"Great value for money, and the quality is top-notch."},
    { id: 3, author: "Velmurugan", body: "This product has exceeded my expectations. Highly recommended!"},
  ]);
  const handleDelete=(id)=>{
    setComments(comments.filter(task=>(task.id!==id)))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const author = event.target.elements.author.value;
    const body = event.target.elements.body.value;
    addComment(author, body);
    event.target.reset();
    setOpen(false);
  };
  const addComment = (author, body) => {
    const newComment = { id: comments.length + 1, author, body };
    setComments([...comments, newComment]);
  };
  return (
    <div>
      <div className="product-container">

        <div className="image-gallery">
          <img src={mainImage} alt="Product Name" className="main-image" />
          <div className="thumbnail-images">
            <img
              src={img1}
              alt="img1"
              className={`thumbnail ${mainImage===img1 ? 'active-thumbnail' : ''}`}
              onClick={() => setMainImage(img1)}
            />
            <img
              src={img2}
              alt="img2"
              className={`thumbnail ${mainImage===img2 ? 'active-thumbnail' : ''}`}
              onClick={() => setMainImage(img2)}
            />
            <img
              src={img3}
              alt="img3"
              className={`thumbnail ${mainImage===img3 ? 'active-thumbnail' : ''}`}
              onClick={() => setMainImage(img3)}
            />
            <img
              src={img4}
              alt="img4"
              className={`thumbnail ${mainImage===img4 ? 'active-thumbnail' : ''}`}
              onClick={() => setMainImage(img4)}
            />
            <img
              src={img5}
              alt="img5"
              className={`thumbnail ${mainImage===img5 ? 'active-thumbnail' : ''}`}
              onClick={() => setMainImage(img5)}
            />
            </div>
        </div>
        <div className="product-details">
          <h1 className="product-title">Sparx Mens Sd0439gCasual Shoe</h1>
          <div className="rating">4.2 ⭐⭐⭐⭐ (1234 reviews)</div>
          <div className="price">₹849</div>
          <div className="product-description">
            <p>The product will be an excellent pick for you. It ensures an easy maintenance.</p>
          </div>
          <div className="specifications">
            <h3>Specifications:</h3>
            <ul>
            <li><h4>Material type</h4>: Mesh</li>
            <li><h4>Closure type</h4>: Lace-Up</li>
            <li><h4>Heel type</h4>: Flat</li>
            <li><h4>Water resistance level</h4>: Not Water Resistant</li>
            <li><h4>Sole material</h4>: Ethylene Vinyl Acetate</li>
            <li><h4>Style</h4>: Walking</li>
            <li><h4>Country of Origin</h4>: India</li>
            
            </ul>
          </div>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
      <div className="containeru">
      <h2 className='text'>Customer Review</h2>
    <div className="comment-box">

<form className="comment-form" onSubmit={handleSubmit}>
          <div className="comment-form-fields">
            <input placeholder="Name" required name="author" />
            <br />
            <textarea placeholder="Comment" rows="4" required name="body" />
          </div>
          <div className="comment-form-actions">
            <button className='post-button' type="submit">Post</button>
          </div>
        </form>
        <div className="comment-list">
        {comments.map((comment) => (     
             <div className="comment">
                 <div className='border'>
    <div style={{display:"flex"}}>
      <h6 className="comment-header" >{comment.author} </h6>
      </div>
      <p className="comment-body">- {comment.body}</p>
      <div className="comment-footer">
      <div className="comment-footer-delete" onClick={()=>handleDelete(comment.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </div>
    </div></div>
        ))}
      </div>
</div>
</div>
<footer className="footer">
                <p>&copy; 2024 A2Z. All rights reserved.</p>
            </footer>
    </div>
  );
};

export default Product;
