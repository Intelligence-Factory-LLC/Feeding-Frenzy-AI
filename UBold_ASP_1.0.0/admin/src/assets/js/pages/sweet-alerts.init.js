/*
Template Name: Ubold - Responsive Bootstrap 5 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Sweet Alerts init js
*/

//Basic
document.getElementById("sa-basic").addEventListener("click", function() {
  Swal.fire(
      {
          title: 'Any fool can use a computer!',
      }
  )
});

//A title with a text under
document.getElementById("sa-title").addEventListener("click", function() {
  Swal.fire(
      {
          title: "The Internet?",
          text: 'That thing is still around?',
          icon: 'question'
      }
  )
});

//Success Message
document.getElementById("sa-success").addEventListener("click", function() {
  Swal.fire(
      {
          title: 'Good job!',
          text: 'You clicked the button!',
          icon: 'success'
      }
  )
});

//Success Message
document.getElementById("sa-long-content").addEventListener("click", function() {
  Swal.fire(
      {
        imageUrl: 'https://placeholder.pics/svg/300x1500',
        imageHeight: 1500,
        imageAlt: 'A tall image'
      }
  )
});

//custom position
document.getElementById("sa-custom-position").addEventListener("click", function() {
  Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
  })
});


//sa-error
document.getElementById("sa-error").addEventListener("click", function() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href>Why do I have this issue?</a>'
  })
});

//Warning Message
document.getElementById("sa-warning").addEventListener("click", function() {
  Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#28bb4b",
      cancelButtonColor: "#f34e4e",
      confirmButtonText: "Yes, delete it!"
    }).then(function (result) {
      if (result.value) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success"
        );
      }
  });
});

//Parameter
document.getElementById("sa-params").addEventListener("click", function() {
  Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success mt-2',
      cancelButtonClass: 'btn btn-danger ms-2 mt-2',
      buttonsStyling: false
  }).then(function (result) {
      if (result.value) {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
            confirmButtonColor: '#4a4fea',
          })
        } else if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
            confirmButtonColor: '#4a4fea',
          })
        }
  });
});

//Custom Image
document.getElementById("sa-image").addEventListener("click", function() {
  Swal.fire({
      title: 'UBold',
      text: 'Responsive Bootstrap 5 Admin Dashboard',
      imageUrl: '../assets/images/logo-sm.png',
      imageHeight: 50,
      confirmButtonColor: "#4a4fea",
      animation: false
  })
});

//Auto Close Timer
document.getElementById("sa-close").addEventListener("click", function() {
  var timerInterval;
  Swal.fire({
  title: 'Auto close alert!',
  html: 'I will close in <strong></strong> seconds.',
  timer: 2000,
  onBeforeOpen:function () {
      Swal.showLoading()
      timerInterval = setInterval(function() {
      Swal.getContent().querySelector('strong')
          .textContent = Swal.getTimerLeft()
      }, 100)
  },
  onClose: function () {
      clearInterval(timerInterval)
  }
  }).then(function (result) {
  if (
      // Read more about handling dismissals
      result.dismiss === Swal.DismissReason.timer
  ) {
      console.log('I was closed by the timer')
  }
  })
});

//custom html alert
document.getElementById("custom-html-alert").addEventListener("click", function() {
  Swal.fire({
      title: '<i>HTML</i> <u>example</u>',
      icon: 'info',
      html: 'You can use <b>bold text</b>, ' +
      '<a href="//coderthemes.com/">links</a> ' +
      'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonClass: 'btn btn-confirm',
      cancelButtonClass: 'btn btn-cancel ml-1',
      confirmButtonText: '<i class="mdi mdi-thumb-up-outline"></i> Great!',
      cancelButtonText: '<i class="mdi mdi-thumb-down-outline"></i>'
  })
});

//Custom width padding
document.getElementById("custom-padding-width-alert").addEventListener("click", function() {
  Swal.fire({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: 100,
      background: '#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)'
  })
});

//Ajax
document.getElementById("ajax-alert").addEventListener("click", function() {
  Swal.fire({
      title: 'Submit email to run ajax request',
      input: 'email',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      confirmButtonColor: "#4a4fea",
      cancelButtonColor: "#f34e4e",
      preConfirm: function (email) {
          return new Promise(function (resolve, reject) {
              setTimeout(function () {
                  if (email === 'taken@example.com') {
                      reject('This email is already taken.')
                  } else {
                      resolve()
                  }
              }, 2000)
          })
      },
      allowOutsideClick: false
  }).then(function (email) {
      Swal.fire({
          icon: 'success',
          title: 'Ajax request finished!',
          confirmButtonColor: "#4a4fea",
          html: 'Submitted email: ' + email
      })
  })
});

//chaining modal alert
document.getElementById("chaining-alert").addEventListener("click", function() {
  Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      confirmButtonColor: "#4a4fea",
      cancelButtonColor: "#74788d",
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Question 1',
        text: 'Chaining swal2 modals is easy'
      },
      'Question 2',
      'Question 3'
    ]).then( function (result) {
      if (result.value) {
        Swal.fire({
          title: 'All done!',
          confirmButtonColor: "#4a4fea",
          html:
            'Your answers: <pre><code>' +
              JSON.stringify(result.value) +
            '</code></pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
});

//Danger
document.getElementById("dynamic-alert").addEventListener("click", function() {
  swal.queue([{
      title: 'Your public IP',
      confirmButtonColor: "#4a4fea",
      confirmButtonText: 'Show my public IP',
      text: 'Your public IP will be received ' +
      'via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: function () {
          return new Promise(function (resolve) {
              $.get('https://api.ipify.org?format=json')
                  .done(function (data) {
                      swal.insertQueueStep(data.ip)
                      resolve()
                  })
          })
      }
  }]).catch(swal.noop)
});


