$( document ).ready(function() {
  $('form').on('submit', function(e){
    e.preventDefault()
    
    const obj = {
      country: [],
      device: []
    }

    const deviceIds = {
      'iPhone 4': 1,
      'iPhone 4 S': 2,
      'iPhone 5': 3,
      'Galaxy S3': 4,
      'Galaxy S4': 5,
      'Nexus 4': 6,
      'Droid Razor': 7,
      'Droid DNA': 8,
      'HTC One': 9,
      'iPhone 3': 10
    }

     $('input[type="checkbox"]:checked').each(function(){
        if ($(this).val().length > 2) {
          obj.device.push(deviceIds[$(this).val()])
        } else {
          obj.country.push($(this).val())
        }
     })
     
     const params = decodeURIComponent($.param(obj))
    $.get( "http://localhost:4000/testers?" + params, function( data ) {
      return(data)
    })
    .then(function(testers){
      $('.testers').empty()
      testers.forEach(function(tester){
        $('.testers').append("<div class='row'><div class='col-md-3'>" + tester.firstName + " " + tester.lastName + "</div><div class='col-md-3'>" + tester.country + "</div><div class='col-md-3'>" + tester.lastLogin + "</div><div class='col-md-3'>" + tester.bugs + "</div></div>")
      })
    })
  })
})
