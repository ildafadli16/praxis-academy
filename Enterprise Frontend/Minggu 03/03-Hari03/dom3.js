const tUbahWarna = document.getElementById('tUbahWarna');

//const body = document.getElementsByTagName('body')[0];
tUbahWarna.onclick = function(){
	//document.body.style.backgroundColor='lightblue';
	document.body.classList.toggle('biru-muda');
}


//membuat tombol dg javascript, untuk ketika ditekan warnanya berubah random

const tAcakWarna = document.createElement('button');
const teksTombol1 = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol1);
tAcakWarna.setAttribute('type', 'button');

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
	const r = Math.round(Math.random() * 255 + 1);
	const q = Math.round(Math.random() * 255 + 1);
	const s = Math.round(Math.random() * 255 + 1);
	console.log(r);
	document.body.style.backgroundColor = 'rgb('+ q +','+ r +' ,'+ s +')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');

sMerah.addEventListener('input', function(){
	//console.log(sMerah.value);
	const r = sMerah.value;
	const q = sHijau.value;
	document.body.style.backgroundColor	= 'rgb('+r+','+q+',0)';
	console.log(r, q);
}
);

//menggunakan eventlistener "change" hanya akan berubah ketika sudah tidak digerakkan, makanya dipake lah "input "
	sHijau.addEventListener('input', function(){
	//console.log(sMerah.value);
	const r = sMerah.value;
	const q = sHijau.value;
	document.body.style.backgroundColor	= 'rgb('+r+','+q+',0)';
	console.log(r, q);	
}
);
	
