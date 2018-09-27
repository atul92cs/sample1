$(document).ready(function(){
  $('#updatemodal').on('show.bs.modal','#updatebutton',function(){
     var rowEl=$(this).closest('tr');
	 var position=rowEl.find('.position').text();
	 console.log(position);
  });
});