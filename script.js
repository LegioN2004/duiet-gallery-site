let circle = document.querySelector('#circle');

window.addEventListener('mousemove', function(details){
		let x = details.clientX;
		let y = details.clientY;

		// we'll be using this set timeout so as to make the cursor follower a after a little delay, it takes a function first and then takes the time after which it'll update
		setTimeout(function(){
				circle.style.top = `${y}px`;
				circle.style.left = `${x}px`;
				}, 50);
})
