// this code to rerun js file
const reCallJsFiles = (screenName)=>{
    //$.getScript( "model/navigation.js");
      if (screenName=="loginScreen"){
        $.getScript("model/log_in.js");
      }
      if (screenName == 'scholarshipScreen'){
        $.getScript("model/navigation_infor_tab.js");
      }
      if (screenName == 'welcomeScreen'){
        $.getScript("model/homepage.js");
      }
      // $.getScript("public/js/main.js");
    // $.getScript("lib/mobile-nav/mobile-nav.js");
    // $.getScript("contactform/contactform.js");
    //$.getScript("public/js/main.js");
    // $.getScript('lib/isotope/isotope.pkgd.min.js');
    // $.getScript("lib/counterup/counterup.min.js");
   
    
}
const view = {}
view.setActiveScreen = (screenName) => {
  console.log('change to ' + screenName);
  currentScreen = screenName;
  if (screenName == 'loginScreen')
  {
    document.querySelector('body').innerHTML = components[screenName];
  }
  else{
      document.getElementById('app').innerHTML = components[screenName];
    }
    // console.log(language);
  if (language == "english") changeToEnglish();
  //NavigationActive();
  reCallJsFiles(screenName);
    
}
card = function (data) { 
  var item = `<div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
            <a href="${data.href}" target="_blank">
            <div class="box" style="padding: 0;">
              <div class="image" style="background: #e6fdfc;"><img width="100%" src="${data.imgSrc}"></div>
              <div style="padding: 5px 30px"><h4 class="title"><a href="${data.href}" target="_blank">${data.title}</a></h4></div>
            </div>
            </a>
          </div>`;
  return item;
 }

renderInformationData= function (type){
  // var card = `<div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.1s; animation-name: bounceInUp;">
  //           <div class="box" style="padding: 0;">
  //             <div class="image" style="background: #e6fdfc;"><img width="100%" src="./public/image/posts/post1.jpeg"></div>
  //             <div style="padding: 5px 30px"><h4 class="title"><a href="">Top 3 b?? quy???t ????? c?? m???t tu???i ???x??? chi???u??? th???nh v?????ng kh???e m???nh an vui</a></h4></div>
  //           </div>
  //         </div>`;
  var data= [];
  if(type == 'prepare-retire'){
    data = [
      {
        'title' : 'Top 3 b?? quy???t ????? c?? m???t tu???i ???x??? chi???u??? th???nh v?????ng kh???e m???nh an vui',
        'imgSrc' : './public/image/posts/post1.jpeg',
        'href' : './posts/Top 3 bi quyet de co 1 tuoi xe chieu khoe manh an vui.html'
      },
      {
        'title' : 'T???m quan tr???ng c???a qu???n l?? t??i ch??nh, ch??m s??c s???c kh???e trong th???I ?????i ???vuca???',
        'imgSrc' : './public/image/posts/post2.jpeg',
        'href' : './posts/Tam quan trong cua quan li tai chinh cham soc suc khoe trong thoi dai vuca.html'
      },
      {
        'title' : 'T??i ???? ngh??? h??u ??? tu???i 40 b???ng c??ch n??o?',
        'imgSrc' : './public/image/posts/post3.jpeg',
        'href' : './posts/Toi da nghi huu o tuoi 40 bang cach nao.html'
      },
    ];
  }
  
  if (type == 'prosperous-retire')
    data = [
      {
        'title' : 'L???p k??? ho???ch v??? h??u c??ng active ageing vietnam',
        'imgSrc' : './public/image/posts/post4.jpeg',
        'href' : './posts/Lap ke hoach ve huu cung active ageing vietnam.html'
      },
      {
        'title' : 'Ti???t ki???m l?? m???t h??nh tr??nh c???a th??i quen',
        'imgSrc' : './public/image/posts/post5.jpeg',
        'href' : './posts/Tiet kiem la 1 hanh trinh cua thoi quen.html'
      },
      {
        'title' : 'Gi???i m?? ph????ng ph??p 50/20/30 trong qu???n l?? t??i ch??nh c?? nh??n hi???u qu???',
        'imgSrc' : './public/image/posts/post6.jpeg',
        'href' : './posts/Giai ma phuong phap 50 30 20.html'
      }
    ];

  if (type == 'healthy-retire')
    data = [
      {
        'title' : 'B??? t??i nh???ng th??i quen t???t cho s???c kh???e',
        'imgSrc' : './public/image/posts/post7.jpeg',
        'href' : './posts/Bo tui nhung thoi quen tot cho suc khoe.html'
      }
    ]
    if (type == 'happy-retire')
    data = [
      {
        'title' : '5 cu???n s??ch c?? th??? thay ?????i suy ngh?? c???a b???n v?? bi???n t???ng kho???nh kh???c c??n l???i c???a n??m 2021 tr??? n??n tuy???t v???i',
        'imgSrc' : './public/image/posts/post8.jpeg',
        'href' : './posts/5 cuon sach to the thay doi suy nghi cua ban.html'
      }
    ]

    if (type == 'events')
      data = [
        {
          'title' : '??i t??m h???nh ph??c th???i covid-19: an to??n t??i ch??nh v?? s???c kho??? tinh th???n',
          'imgSrc' : './public/image/posts/post11.jpeg',
          'href' : './posts/webinar.html'
        },
        {
          'title' : 'Gi?? h??a d??n s??? v?? nh???ng g??nh n???ng ng?????i gi?? ??ang v?? s??? g???p ph???i',
          'imgSrc' : './public/image/posts/post9.jpeg',
          'href' : './posts/Gia hoa dan so va nhung ganh nang ma nguoi gia gap phai.html'
        },
        {
          'title' : '"Gi?? h??a d??n s???" - Th??ch th???c m?? Vi???t Nam ph???i ?????i m???t',
          'imgSrc' : './public/image/posts/post10.jpeg',
          'href' : './posts/Gia hoa dan so- thach thuc ma viet nam phai doi mat.html'
        },
        {
          'title' : 'X??y d???ng k??? ho???ch cu???c ?????i h???u ?????i d???ch covid-19',
          'imgSrc' : './public/image/posts/post12.jpeg',
          'href' : './posts/webinar2.html'
        }
      ]
    var list = document.getElementById('listPost');
    var listUI =  data.map((data)=> card(data));
    listUI = listUI.join('');
    console.log(listUI);
    list.innerHTML = listUI;
}