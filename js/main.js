// accordion
    $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
        	$(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    });

    // map

  
  
  //scroll on mobile
$('#pills-tab li').click(function(){
  $('#pills-tab li').removeClass('navtabs-active');
  $('#pills-tab a').removeClass('navtabs-active');
  $(this).addClass('navtabs-active');
  $(this).children().addClass('navtabs-active');
})

  // scroll

  window.addEventListener("scroll", (event) => {
    var scroll = this.scrollY;
    if  (scroll > 600){
      $('#mynav').addClass('nav-colored');
      $('#mynav').removeClass('navbar-padding');
    }else {
      $('#mynav').removeClass('nav-colored');
      $('#mynav').addClass('navbar-padding');
    }
});


// lightbox 
$(document).on('click touchstart', '[data-toggle="lightbox"]', function(event){
  event.preventDefault();
  $(this).ekkoLightbox();
})



// navbar
$(document).ready(function () {
  $(document).click(
      function (event) {
          var target = $(event.target);
          var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
          if (_mobileMenuOpen === true && !target.hasClass("navbar-toggler")) {
              $("button.navbar-toggler").click();
          }
      }
  );
});

// pop up
function removeFooter(id){
	$("#source").val('');
	$("#source").val(id);
  if($(window).width() <= 576){
    $('#share-bar').css('display','none');
  }
    
}

function addFooter(){
  if($(window).width() <= 576){
    $('#share-bar').css('display','block');
  }
}







