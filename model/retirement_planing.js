console.log("retirement planning");
var myChart;
var user = {};
var listLabels = [];
var beginningRetirementBalance = [];
var investmentGrowth = [];
var contributions =  [];
var retirementWithdrawals = [];
var pension = [];
var endingRetirementBalance = [];
var innerHTML = document.getElementById("retirement").innerHTML;
function calculate(event){
    var form = document.querySelector(".contactForm");
    // console.log($('#input-form')[0].checkValidity());
    if  (!$('#input-form')[0].checkValidity()) return;
    // event.preventDefault();;
    user = {};
    listLabels = [];
    beginningRetirementBalance = [];
    investmentGrowth = [];
    contributions =  [];
    retirementWithdrawals = [];
    pension = [];
    endingRetirementBalance = [];
    //console.log('submitted');
    // document.getElementById('introduction').innerHTML = '';
    // console.log(language);
    

    // console.log(form.innerHTML);
    var listInput  = form.querySelectorAll("input");
    for (var i = 0;i< listInput.length;i++){
        user[listInput[i].id] = listInput[i].value;
    }
    listInput  = form.querySelectorAll("select");
    for (var i = 0;i< listInput.length;i++){
        user[listInput[i].id] = listInput[i].value;
    }
    //user.yearsRetirement = 35;
    //80 - parseInt(user.retirementAge);
    user.inflation = 3.5;
    // console.log(user);
    submitData(user);
    user.year = user.retirementAge - user.currentAge;
    user.lastYearIncome = user.income*Math.pow(1+user.increase/100,user.year-1);
    var retirementPaymentMoney = user.lastYearIncome*user.retirementPay/100;

    
    beginningRetirementBalance.push(parseInt(user.saving));
    investmentGrowth.push(user.saving*user.rateBefore/100);
    contributions.push(user.income*user.annualSaving/100); // can sua
    retirementWithdrawals.push(0);
    pension.push(0);
    var tmp = beginningRetirementBalance[0]+investmentGrowth[0]+contributions[0]-retirementWithdrawals[0];
    endingRetirementBalance.push(tmp);
    
    var i = parseInt(user.currentAge)+1;
    check = beginningRetirementBalance[0]; 
    while ( (check > 0 && i < parseInt(user.retirementAge)+parseInt(user.yearsRetirement)+1) || i== parseInt(user.currentAge)+1 ){
        beginningRetirementBalance.push(LastValue(endingRetirementBalance));
        var rate;
        if (i < user.retirementAge) rate = user.rateBefore;
        else rate =user.rateAfter;
        investmentGrowth.push(LastValue(beginningRetirementBalance)*rate/100);
        if (i< user.retirementAge) contributions.push((user.income*parseInt(user.annualSaving)/100)*Math.pow(1+parseInt(user.increase)/100,i-parseInt(user.currentAge)));
        else contributions.push(0);
        if (user.retirementAge > i) retirementWithdrawals.push(0);
        else retirementWithdrawals.push(retirementPaymentMoney*Math.pow(1+user.inflation/100,i-user.retirementAge));
        if (i <user.retirementAge) pension.push(0);
        else pension.push(parseInt(user.pension));
        endingRetirementBalance.push(LastValue(beginningRetirementBalance)+LastValue(investmentGrowth)+LastValue(contributions)+parseInt(LastValue(pension))-LastValue(retirementWithdrawals));
        check = LastValue(beginningRetirementBalance);
        i++;

        if (LastValue(endingRetirementBalance)<0) endingRetirementBalance[endingRetirementBalance.length-1]=0;
        if (LastValue(beginningRetirementBalance)<0) beginningRetirementBalance[beginningRetirementBalance.length-1]=0;
    }
    var start = parseInt(user.currentAge);
    var end = parseInt(user.retirementAge)+parseInt(user.yearsRetirement);
    end = i-2;

    var notification = `B???n s??? ngh??? h??u v??o ${user.year} n??m t???i. V???i m???c t??ng thu nh???p h???ng n??m l?? ${user.increase}%, thu nh???p v??o n??m cu???i c??ng tr?????c khi v??? h??u c???a b???n s??? l?? ${numberWithCommas(user.lastYearIncome.toFixed(2))} Tri???u VND. ${user.retirementPay}% thu nh???p n??m cu???i c??ng tr?????c khi v??? h??u c???a b???n s??? ???????c ?????c t??nh l?? chi ti??u h???ng n??m trong giai ??o???n h??u tr?? c???a b???n t????ng ???ng ${numberWithCommas(retirementPaymentMoney.toFixed(2))} tri???u VN??. Gi?? tr??? n??y s??? t??ng theo t??? l??? l???m ph??t sau ????.`;
    if ((parseInt(user.yearsRetirement))  > beginningRetirementBalance.length - (parseInt(user.retirementAge)-parseInt(user.currentAge))) notification += ` Tuy nhi??n, c?? th??? b???n c???n ph???i ??i???u ch???nh k??? ho???ch v??? h??u c???a m??nh ????i ch??t v?? qu??? ti???t ki???m v??? h??u c???a b???n s??? c???n ki???t v??o n??m b???n ${end} tu???i. Xem bi???u ????? minh ho??? b??n d?????i.`;
    else notification += ` K??? ho???ch Qu??? ti???t ki???m v??? h??u c???a b???n ??ang ??i ????ng h?????ng. H??y s??? d???ng ch???c n??ng Qu???n l?? ti???t ki???m ????? d??? d??ng theo d??i v?? qu???n l?? ti???n ????? c???a m??nh nh??!`;
    document.getElementById("result").innerHTML = `<p style="color : #696592; text-align : justify">${notification}</p>`;
    
    for (var i = start;i<= end;i++) listLabels.push(i);
    function savingAdvice(saving,rateBefore,income,increase,annualSaving,retirementAge,currentAge,yearsRetirement,rateAfter,inflation,retirementPay){
      for (let i = currentAge;i<retirementAge-1;i++){
        saving += saving*rateBefore/100 + income*annualSaving/100;
        income += income * increase/100; 
      }
      var incomeAfter = income * retirementPay/100;
      for (let i = 1; i<=yearsRetirement;i++){
        saving += saving*rateAfter/100;
        saving -= incomeAfter;
        incomeAfter += incomeAfter*inflation/100;
      }
      return saving; 
    }
    // var check = parseFloat(user.annualSaving);
    // money = savingAdvice(parseFloat(user.saving),parseFloat(user.rateBefore),
    // parseFloat(user.income),parseFloat(user.increase),
    // parseFloat(user.annualSaving),parseFloat(user.retirementAge),
    // parseFloat(user.currentAge),parseFloat(user.yearsRetirement),
    // parseFloat(user.rateAfter),parseFloat(user.inflation), parseFloat(user.retirementPay));
    // console.log(money);
    // while (money<0){
    //   check += 0.0001;
    //   money = savingAdvice(parseFloat(user.saving),parseFloat(user.rateBefore),
    //   parseFloat(user.income),parseFloat(user.increase),
    //   parseFloat(user.annualSaving),parseFloat(user.retirementAge),
    //   parseFloat(user.currentAge),parseFloat(user.yearsRetirement),
    //   parseFloat(user.rateAfter),parseFloat(user.inflation), parseFloat(user.retirementPay));
    //   console.log("hello"); 
    // }

    //ADVICE
    if ((parseInt(user.yearsRetirement))  > beginningRetirementBalance.length - (parseInt(user.retirementAge)-parseInt(user.currentAge))){
      var outcome = `<h3>K??? ho???ch ngh??? h??u n??y ch??a h???p l?? r???i!</h3><img src="public/image/fail.png" alt="" class="img-fluid">`;
    } else {
      var outcome = `<h3>B???n ???? c?? m???t k??? ho???ch v??? h??u tuy???t v???i!</h3><img src="public/image/success.png" alt="" class="img-fluid">`;
    }
    document.getElementById('firstOutcome').innerHTML = `<p style="color : #696592; text-align : justify">${outcome}</p>`;


    //????NG K?? TH??NH VI??N
    var callToAction = `<section id="call-to-action" class="call-to-action">
    <div class="container" data-aos="zoom-out">
      <div class="row">
        <div class="col-lg-9 text-center text-lg-start">
          <h3 class="cta-title">X??y d???ng k??? ho???ch v??? h??u h???p l?? c??ng Active Ageing ngay h??m nay!</h3>
          <p class="cta-text">H??y s???m tr??? th??nh h???i vi??n c???a Active Ageing Vietnam, ????? c?? th??? nh???n ???????c nhi???u quy???n l???i ?????c bi???t v?? cho ch??ng t??i c?? h???i mang ?????n cho b???n nh???ng tr???i nghi???m t???t nh???t t???i ????y.</p>
        </div>
        <div class="col-lg-3 cta-btn-container text-center">
          <a class="cta-btn align-middle" id="register" href="#" style = "text-transform: uppercase;">????ng k?? th??nh vi??n</a>
        </div>
      </div>

    </div>
  </section>`; 

  document.getElementById('callToAction').innerHTML = `<p style="color : #696592;">${callToAction}</p>`;


    var advice = `????? ?????t ???????c c??c m???c ti??u ngh??? h??u, ch??ng t??i c?? nh???ng ????? xu???t d??nh cho b???n nh?? sau, h??y th??? m???t trong nh???ng ????? xu???t n??y nh??:<br>
    <ul class="bullet">
      <li>T??ng m???c ????ng g??p cho kho???n ti???t ki???m h??u tr?? h??ng n??m l??n.</li>
      <li>T??ng t??? su???t l???i nhu???n c???a b???n tr?????c khi ngh??? h??u l??n.</li>
      <li>Gi???m thu nh???p y??u c???u c???a b???n khi ngh??? h??u xu???ng th???p h??n so v???i m???c hi???n t???i.</li>
      <li>Tr?? ho??n vi???c ngh??? h??u c???a b???n m???t v??i n??m n???a.</li>
      <li>T??ng l????ng h??u / thu nh???p kh??c c???a b???n sau khi ngh??? h??u l??n.</li>
    </ul>`;
    document.getElementById('advice').innerHTML = `<p style="color : #696592; text-align : justify">${advice}</p>`;
    var inner = ``;
    for (var i= 0;i< beginningRetirementBalance.length-1;i++)
    {
        var age = parseInt(user.currentAge) +i;
        inner = inner + `<tr>
                        <th scope="row">${age}</th>
                        <td>${numberWithCommas((beginningRetirementBalance[i].toFixed(2)))}</td>
                        <td>${numberWithCommas((investmentGrowth[i].toFixed(2)))}</td>
                        <td>${numberWithCommas((contributions[i].toFixed(2)))}</td>
                        <td>${numberWithCommas((retirementWithdrawals[i].toFixed(2)))}</td>
                        <td>${numberWithCommas((retirementWithdrawals[i].toFixed(2)))}</td>
                        <td>${numberWithCommas((pension[i].toFixed(2)))}</td>
                        <td>${numberWithCommas((endingRetirementBalance[i].toFixed(2)))}</td>
                    </tr>`
    }

    var table = `<table class="table table-bordered">
                    <thead style="background-color: #F89595; color : white">
                    <tr>
                        <th scope="col">Tu???i</th>
                        <th scope="col">S??? d?? Qu??? ti???t ki???m H??u tr?? ?????u k???</th>
                        <th scope="col">T??ng tr?????ng c???a Qu???</th>
                        <th scope="col">????ng g??p v??o Qu??? ti???t ki???m H??u tr??</th>
                        <th scope="col">Ngh??? h??u v???i ${user.retirementPay}% thu nh???p n??m cu???i c??ng</th>
                        <th scope="col">Kho???n ti???n r??t ra t??? Qu??? ????? ph???c v??? chi ti??u</th>
                        <th scope="col">Thu nh???p t??? l????ng h??u ho???c c??c ngu???n kh??c</th>
                        <th scope="col">S??? d?? Qu??? ti???t ki???m H??u tr?? cu???i k???</th>
                    </tr>
                    </thead>
                    <tbody>
                    ${inner}
                    </tbody>
                </table>`;
    document.getElementById("table").innerHTML = table;

    if (language == "english") {
      var obj = document.getElementById("resultForm");
    var inner = obj.innerHTML;
    
    for (var i = 0;i < diction.length;i++)
    {
        var word = diction[i];
        inner = inner.replace(word["Vietnamese"],word["English"]);
    }
    obj.innerHTML = inner;
    }
    drawChart(listLabels,endingRetirementBalance,retirementWithdrawals);

    // var listId = [];
    // console.log(" don dep data");
    // firebase.firestore().collection("retirementPlan").where("name", "==", "")
    // .get()
    // .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         //console.log(doc.id);
    //         listId.push(doc.id);
    //     });
    // }).then(()=>{
    //   listId.forEach((id)=>{
    //     firebase.firestore().collection("retirementPlan").doc(id).delete().then(() => {
    //       console.log("Document successfully deleted!");
    //   }).catch((error) => {
    //     console.error("Error removing document: ", error);
    // });
    
    //   })
    // })
    // .catch((error) => {
    //     console.log("Error getting documents: ", error);
    // });
};
function removePercent(s) {
  console.log("remove");
  s = s.replace("%","");
  s = parseInt(s);
  console.log(s);
  return s;
  }
function LastValue(list ){
    return list[list.length-1];
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function drawChart(listLabels,data1, data2) {
    console.log("da draw");
    if (myChart != null) myChart.destroy();
    myChart = new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: listLabels,
          datasets: [{ 
              data: data1,
              label: "Ending Retirement Balance",
              borderColor: "#ea7d32",
              fill: false
            }, { 
              data: data2,
              label: "Retirement Withdrawals",
              borderColor: "#4763c4",
              fill: false
            },
          ]
        },
        options: {
          tooltips: {
            callbacks: {
              label: (item) => `${item.yLabel} GB`,
            },
          },
          title: {
            display: true,
            text: 'World population per region (in millions)'
          }
        }
      });
  }
  function submitData(user){
    var db = firebase.firestore();
    db.collection("retirementPlan").add(user)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  }
  function retirementRecall(){
    $("#submit_btn").on('click', calculate);
    var form = document.querySelector(".contactForm");
    var listInput  = form.querySelectorAll("input");
    for (var i = 0;i< listInput.length;i++){
      listInput[i].value = user[listInput[i].id];
    }
    listInput  = form.querySelectorAll("select");
    for (var i = 0;i< listInput.length;i++){
      listInput[i].value = user[listInput[i].id];
    }
    drawChart(listLabels,endingRetirementBalance,retirementWithdrawals);
  }


function checkScreen (){
  if (window.innerWidth < 990){
    document.getElementById("retirement").innerHTML =  "";
    document.querySelector('.intro-info').innerHTML = `
      <h2> Xin l???i ! T??nh n??ng n??y kh??ng kh??? d???ng tr??n c??c thi???t b??? di ?????ng! </h2>

    `
  }
  else {
    document.getElementById("retirement").innerHTML = innerHTML;
    $("#submit_btn").on('click', calculate);
  }
}
$("#submit_btn").on('click', calculate);
checkScreen();
$(window).resize(checkScreen);