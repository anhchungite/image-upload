$(document).ready(function(){
    $('.preview img').on('click',function(){
         var src = $(this).attr('src');
         var img = '<img src="' + src + '" class="img-responsive"/>';
         $('#myModal .modal-body').html(img);
      $('#myModal').modal();
         $('#myModal').on('hidden.bs.modal', function(){
             $('#myModal .modal-body').html('');
         });
    });
 });