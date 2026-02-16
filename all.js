$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });


  function SendEmail(name, from, proj, inquiry) {
    Email.send({
      SecureToken : "eb324792-5e17-4a3e-a959-f24cf793b6ac",
      To : from+"," +'maruelle24@gmail.com',
      From : 'maruelle08@gmail.com',
      Subject : "email from maruelle-gulfan.github.io",
      // Body : "Name: "+name+"\nEmail:"+from+"\nProject:"+proj+"\nMessage:"+inquiry,
      Body: `<html>
              <head>
              </head>
              <body>
                <div style=width:500px;min-height:500px;background-color:#1a1a1a;display:block;justify-content:center;color:#00B8F5;border-radius:10px;>
                <div style="width:100%;text-align:center;padding-top:1rem;">
                  <p style="font-size:28px;color:#00B8F5; text-align:center;">
                    Inquiry
                  </p>
                </div>
                  <div style="width:100%;color:#00B8F5;padding:1rem;">
                    <p style="font-size:24px;margin:0">Name: <span style="font-size:18px; color:#fff; font-weight:700;">${name}</span></p> 
                  </div>
                  <div style="width:100%;color:#00B8F5;padding:1rem;">
                    <p style="font-size:24px;margin:0">Email: <span style="font-size:18px; color:#fff; font-weight:700;text-decoration:none;">${from}</span></p> 
                  </div>
                  <div style="width:100%;color:#00B8F5;padding:1rem;">
                    <p style="font-size:24px;margin:0">Project: <span style="font-size:18px; color:#fff; font-weight:700;">${proj}</span></p> 
                  </div>
                  <div style="width:100%;color:#00B8F5;padding:1rem;">
                    <p style="font-size:24px;margin:0">Message: <span style="font-size:18px; color:#fff; font-weight:700;">${inquiry}</span></p> 
                  </div>
                </div>
              
              </body>
            </html>`
    }).then(
        message => {
            if (message !== "OK") {
                alert(message)
            }
            else {
                alert("Your inquiry has been submitted. Thank you!")
            }
        }
    );
}

var emailForm = document.getElementById('email1')
emailForm.addEventListener('submit', event => {

    event.preventDefault()
    var name = event.target[0].value
    var from = event.target[1].value
    var proj = event.target[2].value
    var inquiry = event.target[3].value

    SendEmail(name, from, proj, inquiry )
})

