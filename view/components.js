const components = {}
components.welcomeScreen = `
<!--==========================
  Intro Section
============================-->
<div id="carouselExampleControls" class="carousel carousel-dark slide" data-interval="10000" data-bs-ride="carousel">
<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
    <section id="intro" class="clearfix">

    <div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
    
    
      <div class="col-md-12 intro-img order-md-last order-first">
        <img src="public/image/slider/slider-01.png" alt="" class="img-fluid">
      </div>
    
    </div>
    </div>
    </section><!-- #intro -->    </div>
    <div class="carousel-item" data-interval="1000">
    <section id="intro" class="clearfix">

        <div class="container d-flex h-100">
        <div class="row justify-content-center align-self-center">
        <div class="col-md-12 intro-img order-md-last order-first">
        <img src="public/image/slider/slider-02.png" alt="" class="img-fluid">
        </div>
    
    </div>
    </div>
    </section><!-- #intro -->     </div>
    <div class="carousel-item" data-interval="1000">
    <section id="intro" class="clearfix">

        <div class="container d-flex h-100">
        <div class="row justify-content-center align-self-center">
        <div class="col-md-12 intro-img order-md-last order-first">
        <img src="public/image/slider/slider-03.png" alt="" class="img-fluid">
        </div>
    
    </div>
    </div>
    </section><!-- #intro -->     </div>
    
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<main id="main">

<!-- <section id="call-to-action" class="call-to-action wow bounceInUp scale" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
<div class="container" data-aos="zoom-out">
  <div class="row">
    <div class="col-lg-9 text-center text-lg-start">
      <h3 class="cta-title" style="font-family : 'Arial'; font-size: 19px">Hot : Webinar 2021: x??y d???ng k??? ho???ch cu???c ?????i h???u ?????i d???ch covid-19???!</h3>
      <p class="cta-text">"Tham gia ngay, nh???n qu?? li???n tay" </br>
      Nh???n ngay s??ch Spenditude, kh??a coaching c??ng chuy??n gia v?? t??i kho???n premium Active Ageing Vietnam!
      </p>
      <p class="cta-text" ></p>
    </div>
    <div class="col-lg-3 cta-btn-container text-center">
    <div class="container">
    <div class ="row">
    <a class="cta-btn align-middle" id="" href="./posts/webinar2.html" style="text-transform: uppercase;">T??m hi???u ngay</a>
    </div>
    <div class = "row">
    <a class="cta-btn align-middle register-webinar" id="" href="https://bit.ly/3ApwREb" style="text-transform: uppercase;">????ng k?? tham d???</a>
    </div>
    </div>
    </div>
  </div>

</div>
</section> -->
  <!--==========================
    About Us Section
  ============================-->
  <section id="about" style = " background: #ECF9F4;">
    <div class="container">
      <div class="row">

        <div class="col-lg-5 col-md-6">
          <div class="about-img">
            <img src="public/image/story.jpg" alt="">
          </div>
        </div>

        <div class="col-lg-7 col-md-6">
          <div class="about-content">
            <h2>C??u chuy???n c???a  <br> Active Ageing Vietnam</h2>
            <p>D??? ??n Active Ageing Vi???t Nam ???????c ra ?????i v???i n???i tr??n tr??? v??? m???t v???n ????? m?? Vi???t Nam v?? c??c n?????c trong khu v???c ??ang v?? s??? ph???i ?????i m???t trong t????ng lai g???n, ???? ch??nh l?? gi?? ho?? d??n s??? v?? nh???ng h??? lu??? c?? li??n quan.<br><br>Ch??ng t??i tin r???ng vi???c ?????ng h??nh c??ng m???i c?? nh??n n??ng cao s??? ch??? ?????ng trong qu???n l?? t??i ch??nh v?? b???o v??? s???c kho??? s??? t???o ra nh???ng ???nh h?????ng t??ch c???c cho c???ng ?????ng, g??p ph???n ki???n t???o m???t t????ng lai b???n v???ng h??n. Nh???ng gi???i ph??p m?? Active Ageing Vi???t Nam ??ang ph??t tri???n s??? gi??p t???t c??? m???i ng?????i, ??? m???i l???a tu???i, c?? ???????c s??? hi???u bi???t v?? c?? th??? b???t ?????u chu???n b??? cho tu???i gi?? v??? t??i ch??nh v?? s???c kho??? ngay t??? h??m nay.</p>
            <div>
            <a id="learn_more_about" href="#"><h4>T??m hi???u th??m</h4></a>
            </div>
          </div>
            
        </div>


      </div>
    </div>

  </section><!-- #about -->
  

  <section id="about" class="wow fadeInUp">
      <div class="container min-height">
      <header class="section-header" style="text-align: center;">
          <h3 style="">G??i gi???i ph??p c???a Active Ageing Vietnam</h3>
          <p></p>
        </header>

        <div class="row solution">

          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box make-plan">
              <div class="row fixed"> <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">construction</i></div>
              <h4 class="title"><a href="">C??ng c???</a></h4>
              <p class="description">H??? tr??? t??nh to??n, qu???n l??, l???p b??o c??o qua website v?? app</p>
              </div> 
              <div class="row"><button type="button" class="btn explore" style=" background: #12B281;color: white;">Kh??m ph??</button></div>
            </div>
           
          </div>
          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box information">
            <div class="row fixed">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">school</i></div>
              <h4 class="title"><a href="">Ki???n th???c</a></h4>
              <p class="description">C??c b??i vi???t chuy??n m??n, chia s??? t??? di???n gi??? qua webinars, h???i th???o</p>
            </div>
            <div class="row"><button type="button" class="btn explore" style=" background: #12B281;color: white;">Kh??m ph??</button></div>
            </div>
            
          </div>

          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box events-link">
            <div class="row fixed">
              <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">share</i></div>
                <h4 class="title"><a href="">S??? k???t n???i</a></h4>
                <p class="description">C??c c???ng ?????ng c?? c??ng m???i quan t??m, m???ng l?????i chuy??n gia</p>
            </div>
            <div class="row"><button type="button" class="btn explore" style=" background: #12B281;color: white;">Kh??m ph??</button></div>
            </div>
           
          </div>

          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
          <div class="box regist-link">
          <div class="row fixed">
          <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">layers</i></div>
            <h4 class="title"><a href="">S??? c??? v???n</a></h4>
            <p class="description">C?? h???i t????ng t??c v???i chuy??n gia v?? nh???n c??? v???n</p>
          </div>
          <div class="row"><button type="button" class="btn explore" style=" background: #12B281;color: white;">Kh??m ph??</button></div>
          </div>
        </div>
          

        </div>
      </div>
      </div>
    </section><!-- #clients -->

    
    

  <!--==========================
    Team Section
  ============================-->
  <section id="team" class="section-bg" style = " background: #ECF9F4;">
  
    <div class="container">
      <div class="section-header">
        <h3>Ch??ng t??i</h3>
        <p>Nh???ng ng?????i tr??? c??ng chung n???i tr??n tr???</p>
      </div>
      
      <div class="row justify-content-md-center">
      
        <div class="col-lg-3 col-md-9 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/quynh.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Nguy???n L?? Nh?? Qu???nh</h4>
                <span>Project Leader</span>
                <span>?????i h???c Ngo???i Th????ng CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/vy.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>H??? Phan Thanh Vy</h4>
                <span>Finance Executive</span>
                <span>?????i h???c Ngo???i Th????ng CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/thu2.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Tr???n Minh Th??</h4>
                <span>Project Development Executive</span>
                <span>?????i h???c Ngo???i Th????ng CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row  justify-content-md-center">
      <div class="col-lg-3 col-md-6 wow fadeInUp">
      <div class="member">
        <img src="public/image/team/long.jpg" class="img-fluid" alt="">
        <div class="member-info">
          <div class="member-info-content">
            <h4>V?? Th??nh Long</h4>
            <span>Technical Leader</span>
            <span>?????i h???c Khoa H???c v?? C??ng Ngh???, Nga</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/du.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Nguy???n Chi???m D???</h4>
                <span>Engineering Executive</span>
                <span>?????i h???c Khoa H???c v?? C??ng Ngh???, Nga</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/quang.png" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>L??u V?? Quang</h4>
                <span>App Designer</span>
                <span>?????i h???c Ngo???i Th????ng H?? N???i</span>
              </div>
            </div>
          </div>
        </div>

       

        

        

        
        


      </div>
      <div class="row  justify-content-md-center">
      <div class="col-lg-3 col-md-6 wow fadeInUp">
      <div class="member">
        <img src="public/image/team/nhu.jpg" class="img-fluid" alt="">
        <div class="member-info">
          <div class="member-info-content">
            <h4>L??m T??? Nh??</h4>
            <span>External Relations Executive</span>
            <span>?????i h???c Ngo???i Th????ng CS2. TPHCM</span>
          </div>
        </div>
      </div>
    </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/tuan.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Nguy???n Qu???c Tu???n</h4>
                <span>Marketing Executive</span>
                <span>?????i h???c Ngo???i Th????ng CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/trang.jpg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Nguy???n Huy???n Trang</h4>
                <span>Marketing Executive</span>
                <span>?????i h???c Ngo???i Th????ng H?? N???i</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class = "row justify-content-md-center">
      <div class="col-lg-3 col-md-9 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/co-thuy.jpeg" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>H??? Th??? H???i Th??y (MBus)</h4>
                <span>Project Mentor</span>
                <span>?????i h???c Ngo???i Th????ng CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-9 wow fadeInUp">
        <div class="member">
          <img src="public/image/team/co-khanh.jpeg" class="img-fluid" alt="">
          <div class="member-info">
            <div class="member-info-content">
              <h4>Ph???m Th??? Mai Khanh (PhD)</h4>
              <span>Project Mentor</span>
              <span>?????i h???c Ngo???i Th????ng CS2. TPHCM</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-9 wow fadeInUp">
      <div class="member">
        <img src="public/image/team/co-chat.jpg" class="img-fluid" alt="">
        <div class="member-info">
          <div class="member-info-content">
            <h4>Tr???n Nguy??n Ch???t (PhD)</h4>
            <span>Project Mentor</span>
            <span>?????i h???c Ngo???i Th????ng CS2. TPHCM</span>
          </div>
        </div>
      </div>
    </div>
        <div class="col-lg-3 col-md-9 wow fadeInUp">
          <div class="member">
            <img src="public/image/team/thay-quang.png" class="img-fluid" alt="">
            <div class="member-info">
              <div class="member-info-content">
                <h4>Ng?? Ng???c Quang (PhD)</h4>
                <span>Project Mentor</span>
                <span>?????i h???c Ngo???i Th????ng CS2. TPHCM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section><!-- #team -->
  <section id="clients" class="wow fadeInUp">
      <div class="container">

        <header class="section-header">
          <h3>Ch??ng t??i vinh d??? ???????c ?????ng h??nh b???i</h3>
        </header>

        <div class="row">

        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
            <img src="public/image/clients/client-3.png" alt="">
        </div>
        
        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
          
          <img src="public/image/clients/client-2.png" alt="">
        </div>

        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <img src="public/image/clients/client-6.png" alt="">
        </div>

        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <img src="public/image/clients/client-15.jpeg" alt="">
        </div>
      </div>
      <div class='row justify-content-md-center'>
          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
          <img src="public/image/clients/client-12.jpeg" alt="">
          </div>
          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
              <img src="public/image/clients/client-13.svg" alt="">
          </div>
          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
          <img src="public/image/clients/client-11.jpg" alt="">
          </div>
          <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <img src="public/image/clients/client-14.png" alt="">
          </div>
      </div>

        <div class="owl-carousel clients-carousel">
          <img src="public/image/clients/client-1.png" alt="">
          <img src="public/image/clients/client-9.jpg" alt="">
          <img src="public/image/clients/client-4.png" alt="">
          <img src="public/image/clients/client-5.png" alt="">
          <img src="public/image/clients/client-10.jpg" alt="">
          <img src="public/image/clients/client-16.png" alt="">

        </div>

      </div>
    </section><!-- #clients -->
  <!--==========================
    Find Section
  ============================-->
  <section id="find" class="section-bg" style = " background: #ECF9F4;">
    <div class="container">
      <div class="row feature-item mt-5 pt-5">
        <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
          <img src="public/image/survey.png" class="img-fluid" alt="">
        </div>
        <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1 find-university">
          <h2>Ch??ng t??i c???n b???n!</h2>
          <h3>?? ki???n c???a b???n s??? gi??p ch??ng t??i ho??n thi???n gi???i ph??p h??n.</h3>
          <!-- Du Search box and Find Button -->
          <div>
          <a href="" target="_blank" class="btn-survey scrollto">?? KI???N C???A B???N</a>
          </div>
        </div>
      </div>

    </div>

    <!--==========================
    Footer
  ============================-->
  <footer id="footer" class="section-bg">
    <div class="footer-top">
      <div class="container">
  
        <div class="row">
  
          <div class="col-lg-6">
  
            <div class="row">
  
                <div class="col-sm-6">
  
                  <div class="footer-info">
                    <h4>Active Ageing Vietnam</h4>
                    <p>D??? ??n Active Ageing ???????c ra ?????i v???i n???i tr??n tr??? v??? m???t v???n ????? m?? Vi???t Nam v?? c??c n?????c trong khu v???c ??ang v?? s??? ph???i ?????i m???t trong t????ng lai g???n, ???? ch??nh l?? gi?? ho?? d??n s??? v?? nh???ng h??? lu??? c?? li??n quan. Ch??ng t??i tin r???ng vi???c ?????ng h??nh c??ng m???i c?? nh??n n??ng cao s??? ch??? ?????ng trong qu???n l?? t??i ch??nh v?? b???o v??? s???c kho??? s??? t???o ra nh???ng ???nh h?????ng t??ch c???c cho c???ng ?????ng, g??p ph???n ki???n t???o m???t t????ng lai b???n v???ng h??n.</p>
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <div class="footer-contact">
                    <h4>Li??n h???</h4>
                    <p>
                      (Ms.) L??m T??? Nh??<br>
                      External Relations Executive<br>
                      <strong>Phone:</strong> +84 914864707<br>
                      <strong>Email:</strong> activeageingvietnam@gmail.com<br>
                    </p>
                  </div>
  
              
  
                </div>
  
            </div>
  
          </div>
  
          <div class="col-lg-6">
  
            <div class="form">
              
              <h4>?????t c??u h???i cho ch??ng t??i</h4>
              <p>Ch??ng t??i s???n s??ng l???ng nghe m???i c??u h???i, b??n kho??n t??? b???n!</p>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="T??n c???a b???n" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Ch??? ?????" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="N???i dung"></textarea>
                  <div class="validation"></div>
                </div>
  
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
  
                <div class="text-center"><button type="submit" title="Send Message">G???i c??u h???i</button></div>
              </form>
            </div>
  
          </div>
  
          
  
        </div>
  
      </div>
    </div>
  
  </footer><!-- #footer -->
  

</main>



<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
<!-- Uncomment below i you want to use a preloader -->
<!-- <div id="preloader"></div> -->
`;
components.universityScreen = `

<!--==========================
  Intro Section
============================-->
<section id="intro" class="clearfix">
  <div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
      <div class="col-md-6 intro-info order-md-first order-last">
        <h2>Getting old before<br><span>Getting rich...</span></h2>
        <div>
          <a href="#portfolio" class="btn-get-started">Chi ti???t v???n ?????</a>
        </div>
      </div>

      <div class="col-md-6 intro-img order-md-last order-first">
        <img src="public/image/issue.png" alt="" class="img-fluid">
      </div>
    </div>

  </div>
</section><!-- #intro -->

<main id='main'>
  <!--==========================
    V???n ????? x?? h???i
  ============================-->
  <section id="portfolio" class="section-bg fadeIn">
    <div class="container">

      <header class="section-header">
        <h3 class="section-title">V???n ????? x?? h???i</h3>
      </header>
      <div class="content-issue">
      <p>Theo V??? Li??n Hi???p Qu???c v??? v???n ????? Kinh t??? v?? X?? h???i, t???c ????? gi?? ho?? d??n s??? t???i c??c qu???c gia ????ng Nam ?? hi???n nay r???t nhanh. Theo b??o c??o n??m 2019 c???a ???y ban Qu???c gia v??? Ng?????i cao tu???i Vi???t Nam, kho???ng 1/5 ng?????i Vi???t Nam s??? t??? 60 tu???i tr??? l??n v??o n??m 2035, ????a Vi???t Nam tr??? th??nh m???t trong ba n?????c ASEAN duy nh???t c?? t??? l??? ng?????i cao tu???i tr??n 20%.</p>
      <p>Tr?????c th???c t??? ????, s??? chu???n b??? cho giai ??o???n gi?? ho?? d??n s??? l?? v?? c??ng c???p thi???t. N???u kh??ng n???m b???t ???????c giai ??o???n v??ng l??c n??y, 15 n??m t???i, Vi???t Nam s??? r??i v??o b???y thu nh???p trung b??nh v?? ng?????i d??n s??? ng??y c??ng c?? nguy c?? ???gi?? tr?????c khi gi??u???.</p>
      <p class="quote">???Getting old before getting rich??? - kh??i ni???m v?? m??, t??c ?????ng c?? nh??n.</p>
      <p>B??o c??o ???Vietnam as an Ageing Society??? m???i ????y ???? ch??? ra r???ng c?? ?????n 16% ng?????i Vi???t Nam tr??n 60 tu???i r??i v??o nh??m ngh??o. Trong khi ????, ch??? c?? 23,5% ng?????i tr??n 60 tu???i ???????c h?????ng l????ng h??u ho???c tr??? c???p b???o hi???m x?? h???i h??ng th??ng. Thu nh???p c???a ng?????i cao tu???i sau v??? h??u ph??? thu???c l???n v??o tr??? c???p t??? con c??i. M?? h??nh gia ????nh truy???n th???ng nhi???u th??? h??? c??ng chung s???ng d?????i m???t m??i nh?? ??ang chuy???n d???n sang m?? h??nh gia ????nh h???t nh??n. Khi ????, ng?????i cao tu???i ph???i s???ng xa con c??i v?? c?? kh??? n??ng s???ng m???t m??nh. Ngo??i ra, h??? th???ng ch??m s??c s???c kh???e c??n h???n ch??? ??? Vi???t Nam, c??ng v???i chi ph?? kh??m ch???a b???nh ng??y c??ng t??ng ???? ???nh h?????ng ti??u c???c ?????n s??? h?????ng th??? sau khi v??? h??u c???a ng?????i cao tu???i.  
      </p>
      <div class="container">
          <div class="row counters">
  
            <div class="col-lg-4 col-6 text-center">
              <span data-toggle="counter-up">20%</span>
              <p>Ng?????i tr??n 60 tu???i v??o n??m 2035</p>
            </div>
  
            <div class="col-lg-4 col-6 text-center">
              <span data-toggle="counter-up">16%</span>
              <p>Ng?????i tr??n 60 tu???i v??o nh??m ngh??o</p>
            </div>
  
            <div class="col-lg-4 col-6 text-center">
              <span data-toggle="counter-up">23.5%</span>
              <p>Ng?????i tr??n 60 tu???i c?? l????ng h??u</p>
            </div>
          </div>
    </div>
      <div class = "row space-need">
        <div class="col-lg-6">
          <div class="scholarship-img">
            <img src="./public/image/make-plan.jpeg" alt="" class="img-fluid">
          </div>
        </div>
        <div class ="col-lg-6">
          <p>N???u kh??ng c?? th??i ????? t??ch c???c chu???n b??? cho ????? tu???i tr??n 60, ng?????i cao tu???i s??? ph???i ?????i m???t v???i nh???ng h???u qu??? nghi??m tr???ng nh?? h???n ch??? t??i ch??nh v?? h???n ch??? ti???p c???n c??c d???ch v??? ch??m s??c s???c kh???e.</p>
          <p class="quote">"Nh???ng v???n ????? tr??n s??? tr??? n??n c??ng tr???m tr???ng h??n trong 15 n??m t???i ????y, khi s??? ng?????i cao tu???i s??? gia t??ng ????ng k???"</p>
        </div>
      </div>

      <div class= "row space-need-1">
        <div class="col-lg-6">
          <p>Nh???n th???y nh???ng v???n ????? tr??n s??? tr??? n??n c??ng tr???m tr???ng h??n khi 15 n??m t???i ????y, s??? ng?????i cao tu???i s??? t??ng v?? chi???m h??n ??? d??n s???, Active Ageing Vietnam mong mu???n c?? th??? c???ng h?????ng v???i nh???ng thay ?????i hi???n c?? ????? gi??p m???i ng?????i c?? s??? chu???n b??? cho tu???i gi?? t???t h??n, s???m h??n. C??ng v???i nh???ng thay ?????i ch??nh s??ch c???a Ch??nh ph???, Active Ageing l?? m???t gi???i ph??p t???i ??u cho t??nh tr???ng gi?? h??a d??n s??? t???i Vi???t Nam.</p>
          <p class="quote">"Th??c ?????y t?? duy t??ch c???c h?????ng t???i chu???n b??? an to??n t??i ch??nh v?? ti???p c???n ch??m s??c s???c kh???e l?? v?? c??ng c???n thi???t"</p>
        </div>

        <div class="col-lg-6">
          <img src="./public/image/active ageing.jpg" alt="" class="img-fluid">
        </div>
      </div>

      <p>
      Chu???n b??? cho Vi???t Nam - qu???c gia ???????c d??? ??o??n s??? b?????c v??o th???i k??? d??n s??? gi?? v??o n??m 2035. <br>
      Trong giai ??o???n ?????u, ?????i t?????ng m???c ti??u c???a ch??ng t??i l?? nh???ng ng?????i lao ?????ng c?? thu nh???p trung b??nh ??t nh???t 15 n??m tr?????c khi ngh??? h??u.
      </p>

    </div>
  </section><!-- #portfolio -->

  <div class="container" style="padding-top: 30px;">
      <header class="section-header">
      <h3>Gi???i ph??p x?? h???i c???a Active Ageing Vietnam</h3>
      <p></p>
    </header>
    <div class="row feature-item wow fadeInUp" style="text-align: justify; visibility: visible; animation-name: fadeInUp;">
    <p style="color : #232323">
      Hi???n nay, th??? gi???i ??ang ph???i v???t l???n v???i qu?? tr??nh gi?? h??a d??n s??? di???n ra r???t nhanh, v?? Vi???t Nam c??ng kh??ng ph???i l?? ngo???i l???. Th???c t???, Vi???t Nam l?? m???t trong nh???ng qu???c gia c?? t???c ????? gi?? h??a d??n s??? nhanh nh???t, ?????t n?????c ta tr?????c th??ch th???c ???gi?? tr?????c khi gi??u???. N???u thi???u s??? chu???n b??? ch??? ?????ng cho tu???i gi??, m???i ng?????i s??? g???p ph???i c??c v???n ????? nghi??m tr???ng nh??: thi???u h???t t??i ch??nh, suy gi???m s???c kho???,...khi v??? gi??.
    </p>
    <p>
    Video n??y th??? hi???n m???c ????? m?? Active Ageing Vietnam hi???u r?? nguy??n nh??n g???c r??? c???a v???n ????? x?? h???i n??u tr??n; gi???i th??ch qu?? tr??nh m?? ch??ng t??i ti???p c???n ch??ng ????? ????a ra c??c gi???i ph??p cho ng?????i lao ?????ng nh???m gi??p h??? n??ng cao m???c s???ng c???a m??nh khi v??? h??u; v?? ch??? ra nh???ng t??c ?????ng x?? h???i m?? Active Ageing Vietnam c?? th??? mang ?????n cho c???ng ?????ng.

    </p>
    </div>
        <div class="row feature-item">
          <div class="col-lg-8 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
        <div class= "embed-responsive embed-responsive-16by9">
        <iframe class= "embed-responsive-item" width="100%" src="https://www.youtube.com/embed/K22EmimdUsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>    
           
          </div>
          <div class="col-lg-4 wow fadeInUp pt-5 pt-lg-0" style="text-align: justify; visibility: visible; animation-name: fadeInUp;">
            
            <p style="color : #232323">
            B??n c???nh ????, ch??ng t??i ???? m???i ??ng L?? H???ng L??nh (CEO c???a Hi???p h???i CFO Vi???t Nam) v?? ??ng Ng?? ????nh ?????c (Nh?? s??ng l???p ki??m T???ng Gi??m ?????c C??ng ty C??? ph???n T?? v???n POCD) g??p m???t trong video n??y nh???m chia s??? quan ??i???m v??? gi???i ph??p c???a Active Ageing Vietnam. 
            </p>
          </div>
        </div>
        <div class="row feature-item wow fadeInUp">
            <p>
            C??c t??c ?????ng x?? h???i m?? ch??ng t??i h?????ng ?????n d???a tr??n m???c ti??u ph??t tri???n b???n v???ng th??? #1, #3 v?? #11 c???a Li??n H???p Qu???c.???
            </p>
        </div>

          
        </div>

   <!--==========================
    Footer
  ============================-->
  <footer id="footer" class="section-bg">
    <div class="footer-top">
      <div class="container">
  
        <div class="row">
  
          <div class="col-lg-6">
  
            <div class="row">
  
                <div class="col-sm-6">
  
                  <div class="footer-info">
                    <h4>Active Ageing Vietnam</h4>
                    <p>D??? ??n Active Ageing ???????c ra ?????i v???i n???i tr??n tr??? v??? m???t v???n ????? m?? Vi???t Nam v?? c??c n?????c trong khu v???c ??ang v?? s??? ph???i ?????i m???t trong t????ng lai g???n, ???? ch??nh l?? gi?? ho?? d??n s??? v?? nh???ng h??? lu??? c?? li??n quan. Ch??ng t??i tin r???ng vi???c ?????ng h??nh c??ng m???i c?? nh??n n??ng cao s??? ch??? ?????ng trong qu???n l?? t??i ch??nh v?? b???o v??? s???c kho??? s??? t???o ra nh???ng ???nh h?????ng t??ch c???c cho c???ng ?????ng, g??p ph???n ki???n t???o m???t t????ng lai b???n v???ng h??n.</p>
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <div class="footer-links">
                    <h4>Li??n h???</h4>
                    <p>
                      (Ms.) L??m T??? Nh??<br>
                      External Relations Executive<br>
                      <strong>Phone:</strong> +84 914864707<br>
                      <strong>Email:</strong> activeageingvietnam@gmail.com
                      <br>
                    </p>
                  </div>
  
              
  
                </div>
  
            </div>
  
          </div>
  
          <div class="col-lg-6">
  
            <div class="form">
              
              <h4>?????t c??u h???i cho ch??ng t??i</h4>
              <p>Ch??ng t??i s???n s??ng l???ng nghe m???i c??u h???i, b??n kho??n t??? b???n!</p>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="T??n c???a b???n" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Ch??? ?????" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="N???i dung"></textarea>
                  <div class="validation"></div>
                </div>
  
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
  
                <div class="text-center"><button type="submit" title="Send Message">G???i c??u h???i</button></div>
              </form>
            </div>
  
          </div>
  
          
  
        </div>
  
      </div>
    </div>

  </footer><!-- #footer -->
</main>



<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
<!-- Uncomment below i you want to use a preloader -->
<!-- <div id="preloader"></div> -->
`
components.scholarshipScreen = `
<main id="main">
<section id="about" class="section-bg">
      <div class="container justify-content-center align-self-center">

        <header class="section-header" style="margin-top: 13%;">
          <h3>Th??ng tin</h3>
          
        </header>

        <div id='listPost' class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp prepare-retire" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="">Chu???n b??? v??? h??u </a></h4>
              <p class="description">Cung c???p c??ng c???, gi???i ph??p v?? th??ng tin gi??p chu???n b??? k??? ho???ch v??? h??u m???t c??c hi???u qu???.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp prosperous-retire" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
              <h4 class="title"><a href="">V??? h??u th???nh v?????ng</a></h4>
              <p class="description">Cung c???p thong tin h???u ??ch chu???n b??? cho cu???c s???ng v??? h??u th???nh v?????ng.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp healthy-retire" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">V??? h??u kho??? m???nh</a></h4>
              <p class="description">Cung c???p thong tin h???u ??ch chu???n b??? cho cu???c s???ng v??? h??u kh???e m???nh.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp happy-retire" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">V??? h??u an vui</a></h4>
              <p class="description">Cung c???p thong tin h???u ??ch chu???n b??? cho cu???c s???ng v??? h??u an vui.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp events" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">S??? ki???n</a></h4>
              <p class="description">C???p nh???t c??c tin t???c s??? ki???n v?? th??ng tin t??i ch??nh, s???c kh???e h???u ??ch t??? Active Ageing Vietnam.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
`
components.studentLifeScreen = `
      <section id="intro" class="clearfix intro">
        <div class="container d-flex h-100">
          <div class="row justify-content-center align-self-center">
            <div class="col-md-6 intro-info order-md-first order-last">
              <h2>Active Ageing <br><span>Vietnam</span></h2>
              
            </div>

            <div class="col-md-6 intro-img order-md-last order-first">
              <img src="public/image/regist.png" alt="" class="img-fluid">
            </div>
          </div>

        </div>
      </section><!-- #intro -->
        <div>
            <main>
            <!--==========================
          University Section
        ============================-->
            <div class="container">
              <header class="section-header">
                <br><br>
                <h3 class="section-title">????ng k?? th??nh vi??n</h3>
                <p>B???n mu???n m???t k??? ho???ch v??? h??u, qu???n l?? t??i ch??nh v?? s???c kh???e m???t c??ch khoa h???c, ???????c theo s??t v?? c???p nh???t ??i???u ????? m?? kh??ng lo d??? li???u b??? th???t l???c? H??y s???m tr??? th??nh h???i vi??n c???a Active Ageing Vietnam, ????? c?? th??? nh???n ???????c nhi???u quy???n l???i ?????c bi???t v?? cho ch??ng t??i c?? h???i mang ?????n cho b???n nh???ng tr???i nghi???m t???t nh???t t???i ????y. H??y ????ng k?? ngay!</p>
              </header>
              </main>
            </div>
            <div class = "container">
            <div class = "container-fluid">
            <div class = "membership">
            <form action="" method="post" role="form" class="contactForm">
            <div class="col-lg-12">
              <div class="form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="H??? v?? t??n">
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="email" id="email" placeholder="?????a ch??? email" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
              <select class="form-control" name= "flatform" id="address" style ="    font-size: 14px;">
              <option value=""selected disabled hidden>N??i ???
              <option value="H?? N???i">H?? N???i
              <option value="???? N???ng">???? N???ng
              <option value="TP. H??? Ch?? Minh">TP. H??? Ch?? Minh
              <option value="Kh??c">Kh??c
              </select> 
              </div>
              <div class="form-group">
              <select class="form-control" name= "type" id="type" style ="    font-size: 14px;">
              <option value=""selected disabled hidden>Vai tr?? ?????ng h??nh
              <option value="?????i t??c">?????i t??c
              <option value="Th??nh vi??n">Th??nh vi??n
              <option value="Nh???n th??ng tin">Nh???n th??ng tin
              <option value="Tuy???n d???ng">Tuy???n d???ng
              </select> 
              </div>
              <div class="form-group">
                <input value = "" class="form-control" name="job" id="job" placeholder="C??ng vi???c hi???n t???i" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input value = ""  class="form-control" name="phone" id="phone" placeholder="S??? ??i???n tho???i"/>
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input value = ""  class="form-control" type="password" name="password" id="password" placeholder="M???t kh???u"/>
                <div class="validation"></div>
              </div>
            </div>
            <div id="submit_btn" class="text-center register"><button type="submit" title="Send Message">????NG K??</button></div>
            </form>
            </div>
            </div>
            </div>
            </div>


              <section id="faq" class="faq">
              <div class="container" data-aos="fade-up">
                <header class="section-header">
                  <h3>C??u h???i th?????ng g???p</h3>
                  <p>Nh???ng th???c m???c c???a b???n ?????u s??? ???????c gi???i ????p.</p>
                </header>
        
                <ul class="faq-list" data-aso="fade-up" data-aos-delay="100">
        
                  <li>
                    <div data-bs-toggle="collapse" class="collapsed question" href="#faq1">L?? do t??i n??n ????ng k?? h???i vi??n t???i Active Ageing Vietnam?<i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                      <p>
                      T??c ?????ng x?? h???i c???a Active Ageing Vietnam ???????c ??o l?????ng m???t ph???n d???a tr??n m???c ????? quan t??m c???a kh??ch h??ng. Do ????, qu?? kh??ch h??ng khi ????ng k?? tr??? th??nh h???i vi??n kh??ng ch??? c?? th??? tr???i nghi???m d???ch v??? t???t h??n, m?? c??n g??p ph???n cho ch??ng t??i ph??t tri???n d??? ??n ho??n thi???n h??n.
                      </p>
                    </div>
                  </li>
        
                  <li>
                    <div data-bs-toggle="collapse" href="#faq2" class="collapsed question">L???i ??ch m?? t??i nh???n ???????c khi tr??? th??nh h???i vi??n c???a Active Ageing Vietnam?<i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                      <p>
                      -	???????c l??u tr???, theo d??i th?????ng tr???c k??? ho???ch v??? h??u ???? l???p.<br>
                      -	???????c l??u tr???, theo d??i qu?? tr??nh ti???t ki???m, qu???n l?? t??i ch??nh v?? t??nh h??nh s???c kh???e.<br>
                      -	???????c h?????ng d???n, h??? tr??? l???p k??? ho???ch v??? h??u.<br>
                      -	???????c k???t n???i ?????n m???t c???ng ?????ng nh???ng ng?????i c?? c??ng m???i quan t??m, s??? th??ch.<br>
                      -	???????c tr???i nghi???m d???ch v??? ch??m s??c kh??ch h??ng t???t h??n.<br>
                      -	???????c ????ng k?? g??i cao c???p c???a Active Ageing Vietnam (g??i t?? v???n c?? nh??n).<br>
                      -	????ng g??p ?? ki???n, chia s??? tr???i nghi???m gi??p ch??ng t??i n??ng cao ch???t l?????ng d???ch v???.
                      </p>
                    </div>
                  </li>
                </ul>
        
              </div>
              </section>
          
            </div>
          </section><!-- #portfolio -->
   
        </main>
        </div> 

   
      <!--==========================
          Footer
        ============================-->
        <footer id="footer" class="section-bg">
          
            
          </footer><!-- #footer -->
  
  
        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        <!-- Uncomment below i you want to use a preloader -->
        <!-- <div id="preloader"></div> -->`
components.findScreen = `
      <!--==========================
      Intro Section
      ============================-->
      
      <section id="intro" class="clearfix">
      <div class="container d-flex h-100">
        <div class="row justify-content-center align-self-center">
          <div class="col-md-6 intro-info order-md-first order-last">
          <h2>????? <span>ch??ng t??i</span> t??nh to??n k??? ho???ch v??? h??u gi??p b???n.</h2s>
        
          <div>
          <a href="#retirement" class="btn-get-started">B???T ?????U NGAY</a>
          </div>
          </div>
          <div class="col-md-6 intro-img order-md-last order-first">
            <img src="public/image/plan.png" alt="" class="img-fluid">
          </div>
        </div>


      </div>
      </section><!-- #intro -->
      
      <div class = "container" id="retirement">
      <div class="container-fluid">
          <br><br>
          <header class="section-header">
            <h3>L???P K??? HO???CH V??? H??U</h3>
            <p style ="padding-bottom: 3px;">B???n ??ang t??m ki???m m???t k??? ho???ch v??? h??u m?? kh??ng bi???t b???t ?????u nh?? th??? n??o? Ngay ????y ch??ng t??i s??? gi??p b???n. Thi???t l???p t???m nh??n k??? ho???ch v??? h??u c???a c?? nh??n b???n ch??? b???ng vi???c tr??? l???i m???t s??? c??u h???i. B???t ?????u th??i!</p>
            <p>Xem h?????ng d???n s??? d???ng t??nh n??ng <a href="./posts/Lap ke hoach ve huu cung active ageing vietnam.html" target="_blank" style="color : #12B281">t???i ????y</a></p>
            </header>
          <div class = "retirement">
          <div class="form">
          <div class="row">
          <div class="col-lg-6">
            <h4>Th??ng tin c?? b???n</h4>
          </div>
          <div class="col-lg-6">
            <h4>Th??ng tin t??i ch??nh</h4>
          </div>
          </div>
            <p></p>
            <form id ='input-form' class="contactForm" onsubmit="return false;">
            <div class = "row">
            <div class="col-lg-6">
              <div class="form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="T??n c???a b???n" required>
                <div class="validation"></div>
              </div>
              <div class="form-group">
              <input value = "" type='email'  class="form-control" name="email" id="email" placeholder="?????a ch??? email" data-rule="email" data-msg="Please enter at least 8 chars of subject"  required>
              <div class="validation"></div>
            </div>
              <div class="form-group">
              <select class="form-control" name= "flatform" id="address" style ="    font-size: 14px;" >
              <option value=""selected disabled hidden>N??i ???
              <option value="H?? N???i">H?? N???i
              <option value="???? N???ng">???? N???ng
              <option value="TP. H??? Ch?? Minh">TP. H??? Ch?? Minh
              <option value="Kh??c">Kh??c
              </select>              
              </div>
              <div class="form-group">
                <input value = "" type='number' class="form-control" name="currentAge" id="currentAge" placeholder="Tu???i hi???n t???i" min='1' required>
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input value = "" type="number"  min='1' class="form-control" name="retirementAge" id="retirementAge" placeholder="Tu???i ngh??? h??u d??? ??o??n" required/>
                <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="????? tu???i b???n d??? ?????nh ngh??? h??u, gi??? ?????nh r???ng b???n kh??ng ????ng g??p th??m v??o qu??? ti???t ki???m h??u tr?? c???a m??nh trong n??m n??y. V?? d???, n???u b???n ngh??? h??u ??? tu???i 60, vui l??ng nh???p '60'. Trong tr?????ng h???p n??y, kho???n ????ng g??p cu???i c??ng c???a b???n x???y ra khi b???n 59 tu???i. Ch??ng t??i c??ng gi??? ?????nh r???ng b???n th???c hi???n to??n b??? kho???n ????ng g??p c???a m??nh v??o cu???i m???i n??m."></span>
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input value = ""  type="number" class="form-control" name="income" id="income" placeholder="Thu nh???p h??ng n??m c???a h??? gia ????nh hi???n t???i (tri???u VN??)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="T???ng thu nh???p c???a b???n trong n??m hi???n t???i. N???u thu nh???p trong n??m nay c???a b???n l?? 180 tri???u VND, vui l??ng nh???p '180'."></span>
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input value = ""  type="number" class="form-control" name="increase" id="increase" placeholder="T??ng tr?????ng thu nh???p ?????c t??nh h???ng n??m (%)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="T??? l??? thu nh???p ?????c t??nh t??ng h??ng n??m cho ?????n n??m ngh??? h??u d??? ki???n c???a b???n. N???u b???n ?????c t??nh m???c l????ng h??ng n??m c???a b???n s??? t??ng 2%, vui l??ng nh???p '2'"></span>
                <div class="validation"></div>
              </div>
            

              
              </div>


              <div class="col-lg-6">
                  <div class="form-group">
                  <input value = "" type="number" class="form-control" name="saving" id="saving" placeholder="S??? d?? qu??? ti???t ki???m h??u tr?? hi???n t???i (tri???u VN??)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                  <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="S??? d?? t??i kho???n ti???t ki???m v??? h??u hi???n t???i c???a b???n. Gi??? s??? b???n ???? t??ch g??p ???????c 700 tri???u VN?? cho qu??? ti???t ki???m h??u tr?? c???a m??nh, vui l??ng nh???p '700'."></span>
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input value = ""  type="number" class="form-control" name="saving" id="yearsRetirement" placeholder="S??? n??m s??? d???ng thu nh???p sau v??? h??u" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                  <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="T???ng s??? n??m b???n d??? ?????nh s??? d???ng qu??? ti???t ki???m h??u tr?? c???a m??nh ????? chi ti??u k??? t??? n??m b???n ngh??? h??u. Gi??? s??? b???n d??? ?????nh v??? h??u ??? tu???i 60 v?? mong mu???n duy tr?? m???c s???ng tho???i m??i trong v??ng 30 n??m n???a nh??? qu??? ti???t ki???m h??u tr?? c???a m??nh, vui l??ng nh???p '30'. N??i c??ch kh??c, tu???i th??? d??? ki???n c???a b???n trong tr?????ng h???p n??y l?? 60 + 30 = 90 (tu???i)."></span>
                  <div class="validation"></div>
                </div>

              <div class="form-group">
              <input value = "" type="number" name="annualSaving" class="form-control" id="annualSaving" placeholder="Kho???n ti???t ki???m v??? h??u h??ng n??m t??nh theo ph???n tr??m thu nh???p (%)" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required/>
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Ph???n tr??m thu nh???p h??ng n??m s??? ???????c ????ng g??p v??o qu??? ti???t ki???m h??u tr?? c???a b???n m???i n??m. N???u thu nh???p h??ng n??m c???a b???n l?? 180 tri???u VN?? v?? t??? l??? ????ng g??p h??ng n??m c???a b???n l?? 8%, vui l??ng nh???p '8'. Nh?? v???y, m???c ????ng g??p h??ng n??m b???ng 180 x 8% = 14.4 tri???u VN??."></span>
              <div class="validation"></div>
            </div>
            <script>
            $(function () {
              $('[data-toggle="tooltip"]').tooltip()
            })
            </script>
            <div class="form-group">
              <input value = "" type="number" class="form-control" name="retirementPay" id="retirementPay" placeholder="Thu nh???p y??u c???u khi v??? h??u (%)" data-rule="email" data-msg="Please enter a valid email" required/>
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="T??? l??? ph???n tr??m thu nh???p h??? gia ????nh sau khi ngh??? h??u m?? b???n ngh?? r???ng b???n s??? c???n ????? trang tr???i c??c chi ph?? c???a m??nh khi ngh??? h??u. S??? ti???n n??y d???a tr??n thu nh???p h??? gia ????nh trong n??m l??m vi???c cu???i c??ng c???a b???n (n??m ngay tr?????c khi b???n ngh??? h??u). Gi??? s??? b???n d??? ?????nh v??? h??u ??? tu???i 60, thu nh???p n??m b???n 59 tu???i l?? 210 tri???u VN??, v?? b???n tin r???ng t??? l??? n??y l?? 60%, vui l??ng nh???p '60'. Khi ????, s??? ti???n m?? b???n c???n ????? chi ti??u v??o n??m 60 tu???i b???ng 210 x 60% = 126 tri???u VN??."></span>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input value = ""  type="number" class="form-control" name="rateBefore" id="rateBefore" placeholder="L???i su???t ?????c t??nh tr?????c khi v??? h??u (%)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="T??? su???t l???i nhu???n k??? v???ng h??ng n??m tr??n qu??? ti???t ki???m h??u tr?? c???a b???n tr?????c khi ngh??? h??u. L??u ?? r???ng t??? l??? n??y c?? xu h?????ng gi???m theo th???i gian. N???u b???n k??? v???ng t??? su???t tr??n l?? 7%, vui l??ng nh???p '7'.".></span>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input value = "" type="number" class="form-control" name="rateAfter" id="rateAfter" placeholder="L???i su???t ?????c t??nh trong qu?? tr??nh v??? h??u (%)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="T??? su???t l???i nhu???n k??? v???ng h??ng n??m tr??n qu??? ti???t ki???m h??u tr?? c???a b???n sau khi ngh??? h??u. L??u ?? r???ng t??? l??? n??y c?? xu h?????ng gi???m theo th???i gian. N???u b???n k??? v???ng t??? su???t tr??n l?? 4%, vui l??ng nh???p '4'."></span>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input value = "" type="number" class="form-control" name="pension" id="pension" placeholder="L????ng h??u v?? thu nh???p sau v??? h??u kh??c (tri???u VN??)" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
              <span class="fa fa-info-circle errspan" data-toggle="tooltip" data-placement="top" title="Thu nh???p d??? ki???n t??? l????ng h??u ho???c c??c ngu???n kh??c. N???u b???n d??? ??o??n m???c l????ng h??u c???a m??nh l?? 2 tri???u VN?? m???i th??ng hay 24 tri???u VN?? m???i n??m, vui l??ng nh???p '24'."></span>
              <div class="validation"></div>
            </div>

            
            
            
            </div>
            </div>
            <br><br>
              <div id="submit_btn" class="text-center"><button type ="submit">T??NH TO??N K??? HO???CH V??? H??U</button></div>
            </form>
          </div>
        </div>
        <div id ="resultForm">
        
          <div class ="row">
          
      
            <div class="col-md-2">
            </div>    
            <div class="col-md-8 mt-5" id="firstOutcome">
            </div>
          </div>
          <div class ="row">
            <div class="col-md-2">
            </div>    
            <div class="col-md-8 mt-5" id="result">
            </div>
          </div>
          <div class ="row mt-5"> 
            <div class="col-md-12">
            <canvas id="line-chart"></canvas>
            </div>
          </div>

          <div class ="row">
          <div class="col-md-2">
          </div>    
          <div class="mt-5" id="callToAction">
          </div>
          </div>

          <div class ="row">
            <div class="col-md-2">
            </div>    
            <div class="col-md-8 mt-5" id="advice">
            </div>
          </div>

        
  

          <div class="mt-5"  id="table">
          </div>
        </div>

      
        
        
        </div>
      </div>
    </section>
    <footer id="footer" class="section-bg">
    <div class="footer-top">
      <div class="container">
  
        <div class="row">
  
          <div class="col-lg-6">
  
            <div class="row">
  
                <div class="col-sm-6">
  
                  <div class="footer-info">
                    <h4>Active Ageing Vietnam</h4>
                    <p>D??? ??n Active Ageing ???????c ra ?????i v???i n???i tr??n tr??? v??? m???t v???n ????? m?? Vi???t Nam v?? c??c n?????c trong khu v???c ??ang v?? s??? ph???i ?????i m???t trong t????ng lai g???n, ???? ch??nh l?? gi?? ho?? d??n s??? v?? nh???ng h??? lu??? c?? li??n quan. Ch??ng t??i tin r???ng vi???c ?????ng h??nh c??ng m???i c?? nh??n n??ng cao s??? ch??? ?????ng trong qu???n l?? t??i ch??nh v?? b???o v??? s???c kho??? s??? t???o ra nh???ng ???nh h?????ng t??ch c???c cho c???ng ?????ng, g??p ph???n ki???n t???o m???t t????ng lai b???n v???ng h??n.</p>
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <div class="footer-links">
                    <h4>Li??n h???</h4>
                    <p>
                      (Ms.) L??m T??? Nh??<br>
                      External Relations Executive<br>
                      <strong>Phone:</strong> +84 914864707<br>
                      <strong>Email:</strong> activeageingvietnam@gmail.com<br>
                    </p>
                  </div>
  
              
  
                </div>
  
            </div>
  
          </div>
  
          <div class="col-lg-6">
  
            <div class="form">
              
              <h4>?????t c??u h???i cho ch??ng t??i</h4>
              <p>Ch??ng t??i s???n s??ng l???ng nghe m???i c??u h???i, b??n kho??n t??? b???n!</p>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="T??n c???a b???n" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Ch??? ?????" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="N???i dung"></textarea>
                  <div class="validation"></div>
                </div>
  
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
  
                <div class="text-center"><button type="submit" title="Send Message">G???i c??u h???i</button></div>
              </form>
            </div>
  
          </div>
  
          
  
        </div>
  
      </div>
    </div>
  
    
  </footer><!-- #footer -->

<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
<!-- Uncomment below i you want to use a preloader -->
<!-- <div id="preloader"></div> -->
  </div> 
`
components.aboutScreen = `
<section id="intro" class="clearfix">

    <div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
      <div class="col-md-6 intro-info order-md-first order-last">
        <h2>Active Ageing <span>Vietnam</span></h2>
        
      </div>
    
      <div class="col-md-6 intro-img order-md-last order-first" style = "text-align: center">
        <img src="public/image/12309cropped.png" alt="" class="img-fluid">
      </div>
    
    </div>
    </div>
  </section><!-- #intro -->
<main id="main">
  <!--==========================
    Features Section
  ============================-->
  <section id="about">
      <div class="container" style="padding-top: 30px;">

        <div class="row feature-item">
          <div class="col-lg-6 wow fadeInUp">
            <img src="./public/image/about us 1.jpeg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0" style = "text-align: justify;">
            <h2 style = "color: #333333;font-weight: 650;"">Active Ageing Vietnam</h2>
            <p style ="color : #232323">
              Active Ageing l?? d??? ??n ???????c ra ?????i v???i n???i tr??n tr??? v??? m???t v???n ????? m?? Vi???t Nam v?? m???t s??? n?????c trong khu v???c ??ang v?? s??? ph???i ?????i m???t trong t????ng lai g???n, ???? ch??nh l?? gi?? ho?? d??n s??? v?? nh???ng h??? lu??? c?? li??n quan.
            </p>
            <p style ="color : #232323">
            Khi Vi???t Nam ??ang tr??n ???? ph??t tri???n t??? nh??m n?????c c?? thu nh???p th???p sang nh??m c?? m???c thu nh???p trung b??nh, nh???ng v???n ????? v??? an sinh x?? h???i l???i ???????c quan t??m v?? ch?? ?? h??n bao gi??? h???t. Tr?????c b???i c???nh ????, s??? chu???n b??? cho giai ??o???n gi?? ho?? d??n s??? l?? v?? c??ng c???p thi???t, ?????c bi???t l?? ??? g??c ????? c?? nh??n.
            </p>
          </div>
        </div>
        <div class="row feature-item mt-5 pt-5" style = " margin-top: 0! important; padding-top: 1rem! important; ">
          <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src="./public/image/about us 3.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1" style = "text-align: justify;">
            <!-- <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4> -->
            <p style ="color : #232323">
            G??p ph???n c???ng h?????ng nh???ng n??? l???c ????? ?????i ph?? v???i c??c th??ch th???c m?? c??? x?? h???i ??ang g???p ph???i, d??? ??n ti???n h??nh th???c hi???n ???G??i gi???i ph??p h??? tr??? qu???n l?? t??i ch??nh v?? ti???p c???n ki???n th???c ch??m s??c s???c kh???e chu???n b??? cho tu???i gi?????. Ch??ng t??i tin r???ng vi???c n??ng cao s??? ch??? ?????ng trong t??i ch??nh v?? s???c kho??? kh??ng ch??? ??ch cho ri??ng m???t c?? nh??n m?? c??n t???o ra nh???ng ???nh h?????ng t??ch c???c cho c???ng ?????ng, g??p ph???n v??o vi???c ph??t tri???n kinh t???-x?? h???i, h?????ng ?????n m???t t????ng lai b???n v???ng h??n.
           </p>
          </div>
          
        </div>
      </div>
      
    <!-- </section>#feature -->
  <!--==========================
    Services Section
  ============================-->
  <!-- <section id="services" class="section-bg"> -->
      <div style = "padding-top: 30px" class="container min-height-180">

        <header class="section-header" style="text-align: center;">
          <h2 style="font-size: 48px;font-weight: 700;">D??? ??n ch??ng t??i h?????ng ?????n</h2>
          <p></p>
        </header>

        <header class="section-header" style="text-align: center;">
          <h3 style="color : #12B281">?????i v???i c?? nh??n</h3>
          <p></p>
        </header>

        <div class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">trending_up</i></div>
              <h4 class="title"><a href="">N??ng cao nh???n th???c v??? d??n s??? gi?? v?? t???m quan tr???ng c???a s??? chu???n b??? ch??? ?????ng.</a></h4>
              <p class="description"></p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">construction</i></div>
              <h4 class="title"><a href="">Cung c???p c??c c??ng c??? ???????c c?? nh??n h??a ????? qu???n l?? t??i ch??nh, s???c kh???e.</a></h4>
              <p class="description"></p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">people</i></div>
              <h4 class="title"><a href="">T???o c???ng ?????ng chia s??? th??ng tin v?? kinh nghi???m.</a></h4>
              <p class="description"></p>
            </div>
          </div>
          <!-- <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> -->

        </div>

        <header class="section-header" style="text-align: center;">
          <h3 style="color : #12B281">?????i v???i doanh nghi???p</h3>
          <p></p>
        </header>

        <div class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">check_circle</i></div>
              <h4 class="title"><a href="">N??ng cao h??nh ???nh v?? danh ti???ng c???a c??ng ty v??? tr??ch nhi???m x?? h???i.</a></h4>
              <p class="description"></p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">trending_up</i></div>
              <h4 class="title"><a href="">N??ng cao nh???n th???c cho ng?????i lao ?????ng v??? vi???c l??m vi???c ????? t??ch l??y t??i ch??nh.</a></h4>
              <p class="description"></p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">featured_video</i></div>
              <h4 class="title"><a href="">Qu???ng c??o s???n ph???m / d???ch v??? c???a h??? tr??n n???n t???ng c???a ch??ng t??i.</a></h4>
              <p class="description"></p>
            </div>
          </div>
          <!-- <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> -->

        </div>

        <header class="section-header" style="text-align: center;">
          <h3 style="color : #12B281">?????i v???i to??n x?? h???i</h3>
          <p></p>
        </header>

        <div class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">moving</i></div>
              <h4 class="title"><a href="">?????m b???o an sinh x?? h???i v?? th??c ?????y kinh t??? ph??t tri???n.</a></h4>
              <p class="description"></p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">reduce_capacity</i></div>
              <h4 class="title"><a href="">Gi???m b???t ??p l???c ch??m s??c ng?????i cao tu???i khi Vi???t Nam b?????c v??o giai ??o???n gi?? h??a.</a></h4>
              <p class="description"></p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;"><i class="material-icons" style="color: #12B281;">elderly</i></div>
              <h4 class="title"><a href="">H???n ch??? t??nh tr???ng ???gi?? r???i m???i gi??u???.</a></h4>
              <p class="description"></p>
            </div>
          </div>
          <!-- <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> -->

        </div>

      </div>
      
        
    </section><!-- #services -->

</main>

<!--==========================
  Footer
============================-->
<footer id="footer" class="section-bg">
    <div class="footer-top">
      <div class="container">
  
        <div class="row">
  
          <div class="col-lg-6">
  
            <div class="row">
  
                <div class="col-sm-6">
  
                  <div class="footer-info">
                    <h4>Active Ageing Vietnam</h4>
                    <p>D??? ??n Active Ageing ???????c ra ?????i v???i n???i tr??n tr??? v??? m???t v???n ????? m?? Vi???t Nam v?? c??c n?????c trong khu v???c ??ang v?? s??? ph???i ?????i m???t trong t????ng lai g???n, ???? ch??nh l?? gi?? ho?? d??n s??? v?? nh???ng h??? lu??? c?? li??n quan. Ch??ng t??i tin r???ng vi???c ?????ng h??nh c??ng m???i c?? nh??n n??ng cao s??? ch??? ?????ng trong qu???n l?? t??i ch??nh v?? b???o v??? s???c kho??? s??? t???o ra nh???ng ???nh h?????ng t??ch c???c cho c???ng ?????ng, g??p ph???n ki???n t???o m???t t????ng lai b???n v???ng h??n.</p>
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <div class="footer-links">
                    <h4>Li??n h???</h4>
                    <p>
                      (Ms.) L??m T??? Nh??<br>
                      External Relations Executive<br>
                      <strong>Phone:</strong> +84 914864707<br>
                      <strong>Email:</strong> activeageingvietnam@gmail.com<br>
                    </p>
                  </div>
  
              
  
                </div>
  
            </div>
  
          </div>
  
          <div class="col-lg-6">
  
            <div class="form">
              
              <h4>?????t c??u h???i cho ch??ng t??i</h4>
              <p>Ch??ng t??i s???n s??ng l???ng nghe m???i c??u h???i, b??n kho??n t??? b???n!</p>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="T??n c???a b???n" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Ch??? ?????" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="N???i dung"></textarea>
                  <div class="validation"></div>
                </div>
  
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
  
                <div class="text-center"><button type="submit" title="Send Message">G???i c??u h???i</button></div>
              </form>
            </div>
  
          </div>
  
          
  
        </div>
  
      </div>
    </div>
  
    
  </footer><!-- #footer -->

<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
<!-- Uncomment below i you want to use a preloader -->
<!-- <div id="preloader"></div> -->`

components.loginScreen =`
<body>
	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-55">
						????NG NH???P
					</span>

					<div class="wrap-input100 validate-input m-b-16" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<span class="lnr lnr-envelope"></span>
						</span>
					</div>

					<div class="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<span class="lnr lnr-lock"></span>
						</span>
					</div>

					<div class="contact100-form-checkbox m-l-4">
						<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
						<label class="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div>
					
					<div class="container-login100-form-btn p-t-25">
						<button class="login100-form-btn">
							????NG NH???P
						</button>
					</div>

					<div class="text-center w-full p-t-42 p-b-22">
            <a class="txt1 bo1 hov1" href="index.html" id="home">
              Quay l???i trang ch???							
            </a>
					</div>


					<div class="text-center w-full p-t-115">
						<span class="txt1">
							Ch??a c?? t??i kho???n?
						</span>

						<a class="txt1 bo1 hov1" href="#" id="callToAction">
							????ng k?? ngay.						
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	
	

	
<!--===============================================================================================-->	
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>

</body>
`
components.prepareRetire = `

  <main id="main">
<section id="about" class="section-bg">
      <div class="container justify-content-center align-self-center">

        <header class="section-header" style="margin-top: 13%;">
          <h3>Chu???n b??? v??? h??u</h3>
          
        </header>

        <div id='listPost' class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box" style="padding: 0;">
              <div class="image" style="background: #e6fdfc;"><img width= 100% src = "./public/image/posts/post1.jpeg" /></div>
              
              <div style = "padding: 5px 30px"><h4 class="title"><a href="">Top 3 b?? quy???t ????? c?? m???t tu???i ???x??? chi???u??? th???nh v?????ng kh???e m???nh an vui</a></h4></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
`


components.prosperousRetire = `

  <main id="main">
<section id="about" class="section-bg">
      <div class="container justify-content-center align-self-center">

        <header class="section-header" style="margin-top: 13%;">
          <h3>V??? h??u th???nh v?????ng</h3>
          
        </header>

        <div id='listPost' class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box" style="padding: 0;">
              <div class="image" style="background: #e6fdfc;"><img width= 100% src = "./public/image/posts/post1.jpeg" /></div>
              
              <div style = "padding: 5px 30px"><h4 class="title"><a href="">Top 3 b?? quy???t ????? c?? m???t tu???i ???x??? chi???u??? th???nh v?????ng kh???e m???nh an vui</a></h4></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
`
components.healthyRetire = `
<main id="main">
<section id="about" class="section-bg">
      <div class="container justify-content-center align-self-center">

        <header class="section-header" style="margin-top: 13%;">
          <h3>V??? h??u kho??? m???nh</h3>
          
        </header>

        <div id='listPost' class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box" style="padding: 0;">
              <div class="image" style="background: #e6fdfc;"><img width= 100% src = "./public/image/posts/post1.jpeg" /></div>
              
              <div style = "padding: 5px 30px"><h4 class="title"><a href="">Top 3 b?? quy???t ????? c?? m???t tu???i ???x??? chi???u??? th???nh v?????ng kh???e m???nh an vui</a></h4></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
`

components.happyRetire = `
<main id="main">
<section id="about" class="section-bg">
      <div class="container justify-content-center align-self-center">

        <header class="section-header" style="margin-top: 13%;">
          <h3>V??? h??u an vui</h3>
          
        </header>

        <div id='listPost' class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box" style="padding: 0;">
              <div class="image" style="background: #e6fdfc;"><img width= 100% src = "./public/image/posts/post1.jpeg" /></div>
              
              <div style = "padding: 5px 30px"><h4 class="title"><a href="">Top 3 b?? quy???t ????? c?? m???t tu???i ???x??? chi???u??? th???nh v?????ng kh???e m???nh an vui</a></h4></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
`
components.events =`
<main id="main">
<section id="about" class="section-bg">
      <div class="container justify-content-center align-self-center">

        <header class="section-header" style="margin-top: 13%;">
          <h3>S??? ki???n</h3>
          
        </header>

        <div id='listPost' class="row">

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fceef3;"><i class="ion-ios-analytics-outline" style="color: #ff689b;"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box" style="padding: 0;">
              <div class="image" style="background: #e6fdfc;"><img width= 100% src = "./public/image/posts/post1.jpeg" /></div>
              
              <div style = "padding: 5px 30px"><h4 class="title"><a href="">Top 3 b?? quy???t ????? c?? m???t tu???i ???x??? chi???u??? th???nh v?????ng kh???e m???nh an vui</a></h4></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.2s; animation-name: bounceInUp;">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
`

components.solutionScreen = `
<section id="intro" class="clearfix">

    <div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
      <div class="col-md-6 intro-info order-md-first order-last">
        <h2>Gi???i ph??p c???a <span>Active Ageing Vietnam</span></h2>
        
      </div>
    
      <div class="col-md-6 intro-img order-md-last order-first" style = "text-align: center">
        <img src="public/image/solution.png" alt="" class="img-fluid">
      </div>
    
    </div>
    </div>
  </section><!-- #intro -->
<main id="main">
  <!--==========================
    Features Section
  ============================-->
  <section id="about">
      <div class="container" style="padding-top: 30px;">
        <div class="row feature-item">
        <div class="section-header">
        <h3 style="font-size: 32px;">B???n c?? mong mu???n m??nh s??? c?? m???t k??? ho???ch c??? th??? ????? chu???n b??? cho tu???i ???x??? chi???u????</h3>

        <h3 style="font-size: 32px;">B???n c?? mong mu???n kho???ng th???i gian ngh??? h??u c???a m??nh s??? vui v???, an y??n?</h3>
      </div>
        </div>
        <div class="row feature-item wow fadeInUp mt-5">
          <div class="col-lg-6 wow fadeInUp">
            <img src="./public/image/about us 1.jpeg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0" style = "text-align: justify;">
            <p style ="color : #232323">
            Ch??ng t??i tin r???ng t???t c??? c??c d??? ?????nh n??y ?????u c?? th??? kh??? thi c??ng v???i Active Ageing Vietnam. ???????c ra ?????i v???i n???i tr??n tr??? v??? gi?? h??a d??n s???, g??i gi???i ph??p c???a ch??ng t??i bao g???m ???ng d???ng di ?????ng, trang website v?? c??c chu???i h???i th???o nh???m cung c???p c??c th??ng tin t??? c??c chuy??n gia c?? kinh nghi???m.
            </p>
          </div>
        </div>

        <div class="row feature-item wow fadeInUp">
            <p style="text-align: center; ">
              V???i 3 s???n ph???m tr??n, ch??ng t??i mong mu???n ?????ng h??nh c??ng m???i ng?????i tr??n h??nh tr??nh chu???n b??? cho tu???i gi?? c???a h??? v???i:
            </p>
        </div>
        <div class="row feature-item wow fadeInUp min-height-223" >

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ECF9F4;">
                <i class="material-icons" style="color :#12B281; " >construction</i>
              </div>
              <h4 class="title"><a href="">C??c c??ng c???</a></h4>
              <p class="description">H??? tr??? t??nh to??n, qu???n l??, l???p b??o c??o qua website v?? app</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;">
            <i class="material-icons" style="color :#12B281; " >school</i>
            </div>
              <h4 class="title"><a href="">Ki???n th???c</a></h4>
              <p class="description">T??? c??c b??i vi???t chuy??n m??n, chia s??? t??? di???n gi??? qua webinars, h???i th???o</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
            <div class="icon" style="background: #ECF9F4;">
            <i class="material-icons" style="color :#12B281; " >assistant</i>
            </div>
              <h4 class="title"><a href="">S??? k???t n???i v?? s??? c??? v???n</a></h4>
              <p class="description">G???n k???t c??c c???ng ?????ng c?? c??ng m???i quan t??m v???i m???ng l?????i chuy??n gia.</p>
            </div>
          </div>
          <!-- <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #eafde7;"><i class="ion-ios-speedometer-outline" style="color:#41cf2e;"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #e1eeff;"><i class="ion-ios-world-outline" style="color: #2282ff;"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div class="box">
              <div class="icon" style="background: #ecebff;"><i class="ion-ios-clock-outline" style="color: #8660fe;"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> -->

        </div>

        <div class="row feature-item">
          <div class="col-lg-8 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
        <div class= "embed-responsive embed-responsive-16by9">
        <iframe class= "embed-responsive-item" width="100%" src="https://www.youtube.com/embed/K22EmimdUsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col wow fadeInUp" style="text-align : center; visibility: visible; animation-name: fadeInUp;">
            <i>Gi???i ph??p c???a Active Ageing Vi???t Nam</i>
        </div>    
           
          </div>
          <div class="col-lg-4 wow fadeInUp mt-5 pt-lg-0" style="text-align: justify; visibility: visible; animation-name: fadeInUp;">
            
            <p style="color : #232323">
            Active Ageing Vietnam xin g???i l???i c???m ??n ch??n th??nh nh???t ?????n ??ng Raymond Chu (Chu Quang Th??i) - ?????i di???n th?????ng tr???c ph??a Nam C???c Ph??t tri???n th??? tr?????ng v?? doanh nghi???p Khoa h???c v?? C??ng ngh???, B??? Khoa h???c v?? C??ng ngh??? ???? tham gia ????ng g??p ?? ki???n v??? ti???m n??ng c???a d??? ??n. Nh???ng nh???n x??t v?? l???i ?????ng vi??n c???a ??ng l?? s??? kh??ch l??? v?? c??ng l???n ?????i v???i Active Ageing Vietnam tr??n h??nh tr??nh ho??n thi???n gi???i ph??p.
            </p>
          </div>
        </div>
        <div class="row feature-item mt-5">
          <div class="col-lg-8 wow fadeInUp order-1 order-lg-2" style="visibility: visible; animation-name: fadeInUp;">
          <div class="wow fadeInUp embed-responsive embed-responsive-16by9" style="visibility: visible; animation-name: fadeInUp;">
          <iframe class= "embed-responsive-item" width="100%" src="https://www.youtube.com/embed/GX0kH973Tm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        <div class="col wow fadeInUp" style="text-align : center; visibility: visible; animation-name: fadeInUp;">
            <i>Gi???i thi???u g??i gi???i ph??p c???a Active Ageing Vietnam</i>
        </div>    
           
          </div>
          <div class="col-lg-4 wow fadeInUp mt-5 pt-lg-0 order-2 order-lg-1" style="text-align: justify; visibility: visible; animation-name: fadeInUp;">
            
            <p style="color : #232323">
            Ngo??i ra, d??? ??n r???t mong nh???n ???????c ?? ki???n, ph???n h???i c???a b???n ????? ph??t tri???n gi???i ph??p t???t h??n. Ch??ng t??i xin tr??n tr???ng c???m ??n s??? quan t??m, theo d??i v?? ???ng h??? c???a b???n trong th???i gian qua v?? s???p t???i.
            </p>
          </div>
        </div>
        
      </div>
</main>

<!--==========================
  Footer
============================-->
<footer id="footer" class="section-bg">
    <div class="footer-top">
      <div class="container">
  
        <div class="row">
  
          <div class="col-lg-6">
  
            <div class="row">
  
                <div class="col-sm-6">
  
                  <div class="footer-info">
                    <h4>Active Ageing Vietnam</h4>
                    <p>D??? ??n Active Ageing ???????c ra ?????i v???i n???i tr??n tr??? v??? m???t v???n ????? m?? Vi???t Nam v?? c??c n?????c trong khu v???c ??ang v?? s??? ph???i ?????i m???t trong t????ng lai g???n, ???? ch??nh l?? gi?? ho?? d??n s??? v?? nh???ng h??? lu??? c?? li??n quan. Ch??ng t??i tin r???ng vi???c ?????ng h??nh c??ng m???i c?? nh??n n??ng cao s??? ch??? ?????ng trong qu???n l?? t??i ch??nh v?? b???o v??? s???c kho??? s??? t???o ra nh???ng ???nh h?????ng t??ch c???c cho c???ng ?????ng, g??p ph???n ki???n t???o m???t t????ng lai b???n v???ng h??n.</p>
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <div class="footer-links">
                    <h4>Li??n h???</h4>
                    <p>
                      (Ms.) L??m T??? Nh??<br>
                      External Relations Executive<br>
                      <strong>Phone:</strong> +84 914864707<br>
                      <strong>Email:</strong> activeageingvietnam@gmail.com<br>
                    </p>
                  </div>
  
              
  
                </div>
  
            </div>
  
          </div>
  
          <div class="col-lg-6">
  
            <div class="form">
              
              <h4>?????t c??u h???i cho ch??ng t??i</h4>
              <p>Ch??ng t??i s???n s??ng l???ng nghe m???i c??u h???i, b??n kho??n t??? b???n!</p>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="T??n c???a b???n" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Ch??? ?????" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="N???i dung"></textarea>
                  <div class="validation"></div>
                </div>
  
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
  
                <div class="text-center"><button type="submit" title="Send Message">G???i c??u h???i</button></div>
              </form>
            </div>
  
          </div>
  
          
  
        </div>
  
      </div>
    </div>
  
    
  </footer><!-- #footer -->

<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
<!-- Uncomment below i you want to use a preloader -->
<!-- <div id="preloader"></div> -->
`