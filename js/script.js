$(function() {


  //hamburger
  $(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });


  //accordion
  $('.accordion_one .ac_header').click(function(){
    $(this).next('.ac_inner').slideToggle();//スライドさせながら表示
    $(this).toggleClass("open"); //クラス名(open)の CSS がある場合は削除を行い、なければ追加する
  });


  // swiper
  let mySwiper = new Swiper ('.swiper', {
    // 以下にオプションを設定
    loop: true, //最後に達したら先頭に戻る
    slidesPerView:1,  //スライドを1つ（分）表示
  
    //ページネーション表示の設定
    pagination: { 
      el: '.swiper-pagination', //ページネーションの要素
      type: 'bullets', //ページネーションの種類
      clickable: true, //クリックに反応させる
    },
  
  //ナビゲーションボタン（矢印）表示の設定
    navigation: { 
      nextEl: '.swiper-button-next', //「次へボタン」要素の指定
      prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
    },
    
    //スクロールバー表示の設定
    scrollbar: { 
      el: '.swiper-scrollbar', //要素の指定
    },
  });


  //pagetop
var topBtn=$('#pagetop');
topBtn.hide();

//ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>800){
    //---- 画面を800pxスクロールしたら、ボタンを表示する
    topBtn.fadeIn();
  }else{
    //---- 画面が800pxより上なら、ボタンを表示しない
    topBtn.fadeOut();
  } 
});

//ボタンをクリックしたら、スクロールして上に戻る
topBtn.click(function(){
  $('body,html').animate({
    scrollTop: 0},500);
  return false;
});
})