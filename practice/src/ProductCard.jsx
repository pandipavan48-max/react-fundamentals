function ProductCard(app){
  return(

    
    <div className="container">

      <h1 className="title">{app.productname} </h1>
      <h2 className="price">{app.bloodgroup}</h2>
      <h3 className="date">{app.DOB}</h3>
      <h4 className="name">{app.RollNO}</h4>
      <img className="photo" src={app.photoUrl} alt="Student Image" />
    </div>
  )
}

export default ProductCard