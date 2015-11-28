$(document).ready(function() {
  
   $('#list').sortable();
   $('#list').disableSelection();


   $('button').click(function() {
   		var newItem = $('input').val();
   		$('#list').append('<li>' + newItem + '</li>');
   		$('input:text').val('');
   });

   $('input').keypress(function(e){
        if(e.which == 13) {
   		var newItem = $('input').val();
   		var newClear = $('#clear');
   		$('#list').append('<li>' + newItem + '</li>');
   		$('input:text').val('');
      	}
   });

   $('#list').on('click', 'li', function() {
   		$(this).fadeOut(150); 
   });

});

