
const allTheStrings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var randomString = '';
var textA = 'Fuck';
var textB = [];
for (var i = 0; i < textA.length; i++) {
	textB.push(textA[i]);
}
var start = 0;
setInterval(()=>{
	randomString = zeroTo(10) ? allTheStrings[zeroTo(allTheStrings.length)]:textA[start];
	textB[start] = randomString;
	output.getElementsByTagName('span')[start].innerHTML = textB[start];
	if(randomString === textA[start]){
		start+=1;
		start = start === textA.length ? 0:start; 
	}


}, 70)
var zeroTo =(n)=>{
	var a = (typeof(n) != 'number' || n < 2) ? 2:n;
	a = Math.floor(Math.random()*a);
	return a;
}
var animationText = () => {
	var a = '';
	for (var i = 0; i < textB.length; i++) {
		a+='<span>'+textB[i]+'</span>';
	}
	return a;
}
var output = document.querySelector('#output');
output.innerHTML = animationText();
