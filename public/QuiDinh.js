$(document).ready(function() {
	let i = 0;
	$('#btn1').on('click', function(){
		console.log(i);
		$(this).html('Lưu');
		$('.qd1').eq(0).prop('readonly', '')
		$('.qd1').eq(1).prop('readonly', '')
		$('.qd1').eq(2).prop('readonly', '')
		$(this).eq(0).prop('type', 'Submit')
		if(i == 0){
			i++;
			return false;
		}
	})	
})
$(document).ready(function() {
	let i = 0;
	$('#btn2').on('click', function(){
		console.log(i);
		$(this).html('Lưu');
		$('.qd2').eq(0).prop('readonly', '')
		$(this).eq(0).prop('type', 'Submit')
		if(i == 0){
			i++;
			return false;
		}
	})	
})
$(document).ready(function() {
	let i = 0;
	$('#btn3').on('click', function(){
		console.log(i);
		$(this).html('Lưu');
		$('.qd3').eq(0).prop('readonly', '')
		$('.qd3').eq(1).prop('readonly', '')
		$(this).eq(0).prop('type', 'Submit')
		if(i == 0){
			i++;
			return false;
		}
	})	
})



