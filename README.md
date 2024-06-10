# Spasalon
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" type="x-icon" href="Thespa.PNG">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beauty Parlour Spa Salon</title>

    <!-- Your custom CSS-->
    <link rel="stylesheet" href="styles/styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/> -->
    <!-- Include Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body data-spy="scroll" data-target=".navbar" data-offset="50">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#"><i class="fas fa-spa"></i>Beauty Parlour Spa</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <a class="nav-link" href="#home">
                  <i class="fas fa-home"></i> Home
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#service">
                  <i class="fas fa-tools"></i> Services
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#pricing">
                  <i class="fas fa-dollar-sign"></i> Pricing
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#gallery">
                  <i class="fas fa-images"></i> Gallery
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="about.html">
                  <i class="fas fa-info-circle"></i> About Us
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#contact">
                  <i class="fas fa-envelope"></i> Contact Us
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="Blogpost.html">
                  <i class="fas fa-blog"></i> Blog
              </a>
          </li>
      </ul>
      </div>
  </nav>
  <!-- Hero Banner -->

  <section id="home" class="bg-light py-5">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 order-md-1 text-center text-md-start"> 
              <h1 class="display-4 mb-3">Welcome to Beauty Parlour Spa</h1>
                <p class="lead">Your sanctuary for relaxation and rejuvenation</p>
                <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#bookingModal">
                    Book Now
                </button>
            </div>
            <div class="col-md-6 order-md-2"> 
              <img src="img/welcome.PNG" alt="Welcome to Beauty Parlour Spa" class="img-fluid rounded">
            
                <div class="rounded bg-gradient shadow p-10 mt-4 text-center countdown-container">
                  <p class="mb-0 font-weight-bold text-uppercase">Book Now before the time ends!</p>
                  <div id="clock-c" class="countdown py-2"></div>
              </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-12 text-center">
                <h2>WHAT IS A BEAUTY PARLOUR SPA SALON?</h2>
                <p>A salon is a place where people go for personal care and grooming services. 
                  These services can include hair cutting, styling, and coloring; manicures and pedicures; 
                  skincare treatments like facials; waxing; and sometimes makeup application. Salons often 
                  have a relaxing atmosphere, with comfortable chairs, soothing music, and calming scents. 
                  They are designed to be a haven where clients can escape the stresses of everyday life 
                  and emerge feeling refreshed and beautiful.</p>
            </div>
        </div>

        <div class="modal fade" id="bookingModal" tabindex="-1" role="dialog" aria-labelledby="bookingModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="bookingModalLabel">Book Your Appointment</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <form id="bookingForm">
                  <div class="mb-3">
                    <label for="user_id" class="form-label">Name:</label>
                    <input type="text" class="form-control" id="user_id" name="user_id" required>
                  </div>
                  <div class="mb-3">
                    <label for="email_id" class="form-label">Email:</label>
                    <input type="text" class="form-control" id="email_id" name="email_id" required>
                  </div>
                  <div class="mb-3">
                    <label for="service_id" class="form-label">Service:</label>
                    <select class="form-select" id="service_id" name="service_id" required>
                        <option value="" selected disabled>Select a service</option> 
                    </select>
                </div>
                  <div class="mb-3">
                    <label for="booking_date" class="form-label">Booking Date:</label>
                    <input type="date" class="form-control" id="booking_date" name="booking_date" required>
                  </div>
                  <div class="mb-3">
                    <label for="booking_time" class="form-label">Booking Time:</label>
                    <input type="time" class="form-control" id="booking_time" name="booking_time" required>
                  </div>          
                </form>
        
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" form="bookingForm" class="btn btn-primary">Book Appointment</button> 
              </div>
              <div id="message"></div>
            </div>
          </div>
        </div>
    </div>
</section>

<section class="bg-white py-5">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-4">
                <img src="img/Sinature.PNG" alt="Signature Facial" class="img-fluid rounded">
            </div>
            <div class="col-md-8">
                <h3 class="text-primary">Signature Facial</h3>
                <p>Experience the transformative power of our signature facial.</p>
                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signatureFacialModal">
                    Learn More
                </button>
            </div>
        </div>
    </div>

    <div class="modal fade" id="signatureFacialModal" tabindex="-1" role="dialog" aria-labelledby="signatureFacialModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="signatureFacialModalLabel">Signature Facial Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h4>What is a Signature Facial?</h4>
            <p>Our signature facial is a luxurious and personalized treatment tailored to your unique skin needs. It combines deep cleansing, exfoliation, massage, and a customized mask to leave your skin refreshed, revitalized, and glowing.</p>
    
            <h4>Benefits:</h4>
            <ul>
              <li>Improved skin texture and tone</li>
              <li>Reduced appearance of fine lines and wrinkles</li>
              <li>Increased hydration</li>
              <li>Enhanced circulation</li>
            </ul>
    
            <h4>Suitable for:</h4>
            <p>All skin types</p>
    
            <h4>Duration:</h4>
            <p>60 minutes</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="bookNowButton">Book Now</button> </div>
        </div>
      </div>
    </div>
</section>

<section class="testimonials bg-light py-5">
  <div class="container">
    <h2 class="text-center mb-4">Client Testimonials</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card h-100"> <div class="card-body">
            <p class="card-text">"I've never felt so pampered and refreshed! The staff at Beauty Parlour Spa is truly amazing." - Sarah M.</p>
            <img src="img/sarah m.PNG" alt="Sarah M." class="rounded-circle mx-auto d-block" style="width:100px; height:100px;"> 
          </div>
        </div>
      </div>
      </div>
  </div>
</section>

<section class="special-offers bg-white py-5">
  <div class="container text-center">
    <h2 class="text-primary mb-4">Special Offers</h2>
    <p>Book your first appointment today and receive a 20% discount on any service.</p>
    <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#offersModal">
      View All Offers
    </button>
  </div>

  <div class="modal fade" id="offersModal" tabindex="-1" aria-labelledby="offersModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="offersModalLabel">All Special Offers</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="offer">
            <h3>30% off on Haircuts</h3>
            <p>Valid for new customers only.</p>
          </div>
          <div class="offer">
            <h3>Buy 2, Get 1 Free Facials</h3>
            <p>Limited time offer.</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</section>

  <!-- SERVICE STARTS HERE -->
 <section class="services-section py-5" id="service">
  <div class="container">
    <div id="services-content" class="content-section">
      <h2 class="text-center mb-4">Services</h2>
      
      <div class="row">
        <div class="col-lg-4">
          <div class="service-category">
            <h3>Hair Services</h3>
            <ul class="list-unstyled">
              <li>Haircuts: Basic trims, stylish cuts for men, women, and children.</li>
              <li>Styling: Blowouts, updos, and special occasion hairstyles.</li>
              <li>Coloring: Highlights, lowlights, balayage, ombre, root touch-ups, full color.</li>
              <li>Treatments: Deep conditioning, keratin treatments, scalp treatments.</li>
            </ul>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div class="service-category">
            <h3>Skin Care Services</h3>
            <ul class="list-unstyled">
              <li>Facials: Basic, anti-aging, acne treatment, hydrating, and specialized facials.</li>
              <li>Microdermabrasion: Exfoliating treatment for smoother skin.</li>
              <li>Chemical Peels: Treatments for skin rejuvenation and addressing skin issues.</li>
              <li>Masks and Wraps: Hydrating, detoxifying, and anti-aging masks and body wraps.</li>
            </ul>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div class="service-category">
            <h3>Nail Services</h3>
            <ul class="list-unstyled">
              <li>Manicures: Basic, French, gel, and acrylic manicures.</li>
              <li>Pedicures: Basic, spa, and gel pedicures.</li>
              <li>Nail Art: Decorative designs and nail enhancements.</li>
              <li>Nail Repair: Treatment for broken or damaged nails.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-4">
          <div class="service-category">
            <h3>Massage Services</h3>
            <ul class="list-unstyled">
              <li>Swedish Massage: Relaxation-focused massage.</li>
              <li>Deep Tissue Massage: Targeting deeper muscle layers.</li>
              <li>Hot Stone Massage: Using heated stones for muscle relaxation.</li>
              <li>Aromatherapy Massage: Using essential oils for added benefits.</li>
            </ul>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div class="service-category">
            <h3>Waxing Services</h3>
            <ul class="list-unstyled">
              <li>Facial Waxing: Eyebrows, upper lip, chin.</li>
              <li>Body Waxing: Arms, legs, back, chest, underarms, bikini, Brazilian.</li>
            </ul>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div class="service-category">
            <h3>Makeup Services</h3>
            <ul class="list-unstyled">
              <li>Daily Makeup: Everyday look for various occasions.</li>
              <li>Bridal Makeup: Specialized makeup for weddings.</li>
              <li>Event Makeup: Makeup for proms, parties, photoshoots.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-4">
          <div class="service-category">
            <h3>Other Services</h3>
            <ul class="list-unstyled">
              <li>Eyelash Extensions: Semi-permanent lashes for enhanced appearance.</li>
              <li>Brow and Lash Tinting: Coloring eyebrows and eyelashes.</li>
              <li>Body Treatments: Exfoliation, detoxifying treatments.</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
<!-- SERVICE ENDS HERE -->
<!-- PRICING STARTS HERE -->
<section class="pricing section" id="pricing">
  <div class="price">
    <div id="pricing-content" class="content-section">
      <p class="color-cycling"><h2>Pricing</h2></p>

      <div class="pricing-factor">
        <h3>Cost of Services</h3>
        <ul>
          <li>Products: Hair products, skincare, nails, etc.</li>
          <li>Labor: Wages for stylists, therapists, etc.</li>
          <li>Overhead: Rent, utilities, insurance, etc.</li>
        </ul>
      </div>

      <div class="pricing-factor">
        <div class="container">
          <h1 class="mt-5">Profit Margin</h1>
          <div class="row mt-3">
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="card-text">Description of the product goes here.</p>
                  <p class="profit-margin text-success">Profit Margin: 25%</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="card-text">Description of the product goes here.</p>
                  <p class="profit-margin text-success">Profit Margin: 30%</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="card-text">Description of the product goes here.</p>
                  <p class="profit-margin text-success">Profit Margin: 20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pricing-factor">
        <h3>Market Factors</h3>
        <ul>
          <li>Competition: Prices of other salons nearby</li>
          <li>Demand: Popularity of specific services</li>
          <li>Location: Prime areas may have higher prices</li>
        </ul>
      </div>

      <div class="pricing-factor">
        <h3>Service-Specific Factors</h3>
        <ul>
          <li>Time: Duration of the treatment</li>
          <li>Expertise: Skill level required</li>
          <li>Additional Features: Extras like massage, etc.</li>
        </ul>
      </div>

      <div class="pricing-factor">
        <h3>Pricing Strategies</h3>
        <ul>
          <li>Premium: High prices for exclusivity</li>
          <li>Competitive: Matching or slightly below others</li>
          <li>Value: Good quality at reasonable prices</li>
          <li>Packages: Bundling services for a discount</li>
          <li>Memberships: Perks for regular clients</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<!-- PRICING ENDS HERE -->
<!-- GALLERY SECTION START -->
<section class="gallery section" id="gallery">
  <h2 class="heading">Gallery</h2>
  <div id="carouselMultiItemExample" class="carousel slide carousel-dark text-center" data-ride="carousel" style="background-color: pink;">
    <div class="d-flex justify-content-center mb-4">
      <button class="carousel-control-prev position-relative" type="button" data-target="#carouselMultiItemExample" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden" style="color: green;">Previous</span>
      </button>
      <button class="carousel-control-next position-relative" type="button" data-target="#carouselMultiItemExample" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden" style="color: green;">Next</span>
      </button>
    </div>

    <div class="carousel-inner py-4">
      <div class="carousel-item active">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="card">
                <img src="img/makeup.PNG" class="card-img-top" alt="Make up" />
                <div class="card-body">
                  <h5 class="card-title">Makeup Application and Beauty Enhancements</h5>
                  <p class="card-text"> This image depicts a woman with makeup applied to her face. She has red lipstick, dark eyeliner, and eye shadow. A makeup brush is touching her cheek, 
                    indicating the application of blush or foundation. </p>
                  <button class="btn btn-primary" data-toggle="modal" data-target="#imageModal" data-image="img/makeup.PNG">View Image</button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 d-none d-lg-block">
              <div class="card">
                <img src="img/cosmetic.PNG" class="card-img-top" alt="Sunset Over the Sea" />
                <div class="card-body">
                  <h5 class="card-title">Comprehensive Makeup Application</h5>
                  <p class="card-text">woman receiving a variety of makeup applications on her face simultaneously. 
                    Multiple hands are applying different makeup products: a brush applying blush or foundation to her cheek, 
                    a brush applying eye shadow to her eyelid, tweezers shaping her eyebrow, and a brush applying lipstick to her lips.</p>
                  <button class="btn btn-primary" data-toggle="modal" data-target="#imageModal" data-image="img/cosmetic.PNG">View Image</button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 d-none d-lg-block">
              <div class="card">
                <img src="img/Background.jpg" class="card-img-top" alt="Sunset over the Sea" />
                <div class="card-body">
                  <h5 class="card-title">Beauty Essentials Flat Lay or Make up spill</h5>
                  <p class="card-text">A flat lay of various beauty products spread out on a peach-colored surface. The products include makeup brushes, 
                    lipsticks, eyeliners, mascara, powder foundations, and a makeup sponge.</p>
                  <button class="btn btn-primary" data-toggle="modal" data-target="#imageModal" data-image="img/Background.jpg">View Image</button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 d-none d-lg-block">
              <div class="card">
                <img src="img/welcoming.PNG" class="card-img-top" alt="Sunset over the Sea" />
                <div class="card-body">
                  <h5 class="card-title">Natural Beauty or Eco-Friendly Cosmetics.</h5>
                  <p class="card-text">The image shows several cosmetic products, including bottles, jars, and tubes, arranged on a dark surface. 
                    This are our product of the beauty treatment. The products are in various shades of green and brown, with some having gold accents. 
                    They are surrounded by green and brown leaves, creating a natural and eco-friendly aesthetic.</p>
                  <button class="btn btn-primary" data-toggle="modal" data-target="#imageModal" data-image="img/welcoming.PNG">View Image</button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 d-none d-lg-block">
              <div class="card">
                <img src="img/Capture 6.PNG" class="card-img-top" alt="Sunset over the Sea" />
                <div class="card-body">
                  <h5 class="card-title">The final product, All beauty lies here</h5>
                  <p class="card-text"> A woman expressing the beauty of our services. Come and Express yours.</p>
                  <button class="btn btn-primary" data-toggle="modal" data-target="#imageModal" data-image="img/Capture 6.PNG">View Image</button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 d-none d-lg-block">
              <div class="card">
                <img src="img/beauty-lmage.PNG" class="card-img-top" alt="Sunset over the Sea" />
                <div class="card-body">
                  <h5 class="card-title">Be black Beauty</h5>
                  <p class="card-text">The beauty of being black lies withing you and we help to show it out to the world. Come and spread the word to the rest of the world.</p>
                  <button class="btn btn-primary" data-toggle="modal" data-target="#imageModal" data-image="img/beauty-lmage.PNG">View Image</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Add more carousel items as needed -->
    </div>
  </div>
</section>

<div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="imageModalLabel">Image Preview</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center">
        <img id="modalImage" src="https://search.app.goo.gl/NHXu4en" alt="Image Preview" class="img-fluid">
      </div>
    </div>
  </div>
</div>
<!-- GALLERY ENDS HERE -->
<!-- CONTACT STARTS HERE -->
<section class="contact section" id="contact">
  <div class="container">
    <div id="contact-content" class="content-section">
      <h2>Contact Us</h2>
      <div class="contact-info">
        <p><i class="fas fa-map-marker-alt"></i><strong>Salon Address:</strong> Machakos, Nairobi City, Main Street, Kenya, 90100, 00100</p>
        <p><i class="fas fa-phone-alt"></i><strong>Phone Number:</strong> <a href="tel:+254715959665">+1 (254) 0715959665</a></p>
        <p><i class="fas fa-envelope"></i><strong>Email:</strong><a href="mailto:nzebeauty@gmail.com">nzebeauty@gmail.com</a></p>
        <p><i class="fas fa-hashtag"></i><strong>FOLLOW US ON ALL SOCIAL MEDIA @BEAUTYPARLOUR</strong></p>
        <div class="map">
          <iframe src="img/map.PNG" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- CONTACT US ENDS HERE --><!-- BLOG START HERE -->
<div class="floating-contact" id="socialLinks">
  <button id="toggleButton" class="social-button btn btn-primary">
      <i class="fas fa-plus"></i> </button>

  <div id="socialIcons" class="social-icons">
      <a href="https://wa.me/+254715959665" class="whatsapp" target="_blank"><i class="fab fa-whatsapp"></i></a>
      <a href="https://x.com/@beautyparlour" class="twitter" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="https://www.facebook.com/@beautyparlour" class="facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.youtube.com/@beautyparlour" class="youtube" target="_blank"><i class="fab fa-youtube"></i></a>
      <a href="https://www.tiktok.com/@beautyparlour" class="tiktok" target="_blank"><i class="fab fa-tiktok"></i></a>
  </div>
</div>
    
<footer class="footer">
  <p>&copy; 2024 Beauty Parlour Spa Salon. All rights reserved.</p>
  <address>
      <i class="fas fa-map-marker-alt"></i>  <a href="Machakos, Nairobi, Main street">Machakos, Nairobi, Main street</a><br>
      <i class="fas fa-phone"></i> Phone:  <a href="tel:+254715959665">+254715959665</a><br>
      <i class="far fa-envelope"></i> Email: <a href="mailto:nzebeauty@gmail.com">nzebeauty@gmail.com</a>
  </address>
</footer>


  <!-- JAVASCRIPT STARTS HERE -->
  <script src="scripts/blockRight-click.js"></script>
  <script src="scripts/Action call.js"></script>
  <script src="scripts/services.js"></script>
  <!-- <script src="scripts/BookingSubmition.js"></script> -->
  <script type="text/javascript" src="scripts/main.js"></script>
  <!-- <script  src="scripts/admin.js"></script> -->
  <!-- <script src="scripts/services.js"></script> -->
  <!-- <script src="js/Retrieving and Pre-filling.js"></script> -->
  <!-- <script src="scripts/LOCALSTORAGE.js"></script> -->
  <script src="scripts/document.js"></script>
    <!-- Include Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

  <script>
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
  </script>
  <script>
    $(document).ready(function() {
      // Close navbar when clicking on a nav link
      $('.navbar-nav .nav-link').click(function() {
          $('.navbar-collapse').collapse('hide');
      });
  
      // Close navbar when clicking outside the navbar
      $(document).click(function(event) {
          var $navbarCollapse = $('.navbar-collapse');
          if ($navbarCollapse.hasClass('show') && !$(event.target).closest('.navbar-collapse, .navbar-toggler').length) {
              $navbarCollapse.collapse('hide');
          }
      });

  
  });
  </script>
  <script>
    const toggleButton = document.getElementById("toggleButton");
    const socialIcons = document.getElementById("socialIcons");
    
    toggleButton.addEventListener("click", () => {
    socialIcons.style.display = socialIcons.style.display === 'none' ? 'block' : 'none';
  });    
  </script>
  <script>
    $('#imageModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget); // Button that triggered the modal
      var imageSrc = button.data('image'); // Extract info from data-* attributes
      var modal = $(this);
      modal.find('.modal-body #modalImage').attr('src', imageSrc);
    });
  </script>
    <!-- JAVASCRIPT ENDS HERE -->
</body>
</html>
