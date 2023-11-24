let circle = document.querySelector('#circle');
const button = document.querySelector("#button");
var tl = gsap.timeline();
const svgelem = document.querySelector('svg');




window.addEventListener('mousemove', function(details){
		let x = details.clientX;
		let y = details.clientY;

		// we'll be using this set timeout so as to make the cursor follower a after a little delay, it takes a function first and then takes the time after which it'll update
		setTimeout(function(){
				circle.style.top = `${y}px`;
				circle.style.left = `${x}px`;
				}, 50);
})


// all the animation stuff



button.addEventListener('click', function(){
	tl.reverse(); // now to just reverse all the animations to load the final png, we can just reverse the animation using this reverse function
	setTimeout(function(){
		 svgelem.classList.add('animate');
	}, 3500);
});



// gsap working, using the gsap file you will get an object and as such we can add animations using gsap
// initial to final form basis, so add from to to using .
tl
.from('#wrapper',{ // you need to apply the wrapper so as to make the h1 show
	duration: 3, // and it'll take 2s to come to its original size
	scale: .7, // and it'll be 70% of its original size, 30% small than orignal
	// which flow you want the animation to go
	ease: 'Expo.easeInOut',
	opacity: 0, // this means that it will not be visible since we are using the from with object
})
.from('#whitestrip', {
	duration: 1.9,
	width: 0,
	ease: 'Expo.easeInOut',
}, '-=2.5')
.from('#blackcard', {
	duration: 0.5,
	x: 50,
	opacity: 0,
	ease: 'Expo.easeInOut',
}, '-=1')
.from('#linelem', {
	duration: 0.5,
	x: 50,
	opacity: 0,
	ease: 'Expo.easeInOut',
}, '-=1')
.from('#linelem .line', {
	duration: 2,
	width: 0,
	opacity: 0,
	ease: 'Expo.easeInOut',
}, '-=1')
.from('#blackcard p', {
	duration: 1.5,
	y: 30,
	opacity: 0,
	ease: 'Expo.easeInOut',
}, '-=2')
.from('#sidelem', {
	duration: 2.5,
	x: 30,
	opacity: 0,
	ease: 'Expo.easeInOut',
}, '-=2')

// when you want to apply animations one after another then you'll need to apply something called 'timeline'
// gsap.from('#whitestrip', {
// 	duration: 1.5,
// 	width: 0,
// 	ease: 'expo.easeInOut',
// })