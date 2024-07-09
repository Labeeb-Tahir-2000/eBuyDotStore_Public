import 'mdb-ui-kit';
function ImageSliderLarger(){
    return(
<div
  id="carouselImageSmaller"
  class="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>

  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselImageSmaller"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselImageSmaller"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselImageSmaller"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>


  <div class="carousel-inner">
 
    <div class="carousel-item active">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/meharsuperstore-2021.appspot.com/o/images%2Fshop-online-e-commerce-marketing-business-concept.jpg?alt=media&token=49a78d78-5bfb-42cc-af1b-31aa50adecd8"
        class="d-block w-100"
        alt="..."
      />
     
    </div>


    <div class="carousel-item">
      <img
      src="https://firebasestorage.googleapis.com/v0/b/meharsuperstore-2021.appspot.com/o/images%2Fonline-shopping-web-shop-e-shopping-concept.jpg?alt=media&token=4573a704-38a1-4edc-8e6f-646733c2fd58" 
        class="d-block w-100"
        alt="..."
      />
      
    </div>


    <div class="carousel-item">
      <img
         src="https://firebasestorage.googleapis.com/v0/b/meharsuperstore-2021.appspot.com/o/images%2FOnline_Shoping_13.jpg?alt=media&token=5e03cffe-4bcb-46de-ad0f-df5752e1d29e"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>

  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselImageSmaller"
    data-mdb-slide="prev"
    
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselImageSmaller"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    )
}
export default ImageSliderLarger;
