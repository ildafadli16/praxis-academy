// DOM Selector //

//noodroot.getElementById() mengembalikan Element
const jdl = document.getElementById('judul');
jdl.style.color = 'green';
jdl.innerHTML = 'Achmad Fadli';
jdl.style.backgroundColor = 'black';


////noodroot.getElementByTagName() mengembalikan HTML Collection (adalah kumpulan elemen html)
const tw = document.getElementsByTagName('p');
for(let i=0; i<tw.length ; i++){
tw[i].style.color = 'orange';
}

//noodroot.getElementByClassName() mengembalikan HTML Collection
const tird = document.getElementsByClassName('p1');
tird[0].style.fontSize = '20px';

//noodroot.querySelector() mengembalikan Element
const p4 = document.querySelector('#b p');
const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.color = 'purple';

//noodroot.querySelectorAll() mengembalikan nodeList
const p = document.querySelectorAll('p');
	for (let i=0 ; i<p.length; i++){
	p[i].style.backgroundColor = 'black';
}

//DOM Manipulation --> a. manipulasi element, b. manipulasi node

//element.innerHTML (untuk mengubah teks di dalam tag yang diselect)
//element.style.<propertycss>
//element.setAttribute() [untuk menambah atribut]
/*element.classList [untuk memanipulasi kelas]
-element.classList.add()--> menambah
-element.classList.remove()-->menghapus
-element.classList.toggle()--> jika ada kelas brrt hapus, jika tidk brrt add
-element.classList.item() --> menunjukkan informasi
-element.classListcontains()--> ada gak kelas ini? true/false
-element.classList.replace()--> menganti
//dan masih banyak lagi

/*const judul = document.querySelector('#judul');
judul.setAtribute('nama', 'fadli');
contoh console mengkases a.getAtrtribute('href');
a.removeAttribute('href');--> tapi ga permanen krn akan muncul lagi ketika di refresh

contoh : const p2 = document.querySelector('.p2'); */



/* _DOM Manipulation node_

	- document.createElement()
	- document.createTextNode()
	- node.appendChild()
	- node.insertBefore()
	- parentNode.removeChild() --> menghapus child
	- parentNode.replaceChild() -->mengganti 
*/


const pBaru = document.createElement('p');
const tekspBaru = document.createTextNode('Paragraf Baru');
//simpan tulisan ke dalam paragraf
pBaru.appendChild(tekspBaru); //ibaratnya pBaru : vas bunga, tekspBaru : bunga
//simpan pBaru di akhir Section A
const sectionA = document.getElementById('a')//anggep aja ini sbg ruag tamu
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teksliBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksliBaru);

const ul = document.querySelector('section#b ul');
const l02 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, l02);


/* DOM EVENTS */

/* events adl sebuah kejadian. bisa dilakukan oleh user, atau scr otomatis oleh API.


cara 'mendengarkan' event

#event handler
	- inline html attribute (tidak disarankan)
	- element method

#addEventListener()

perbedaanya yaitu ketika event handler yang terpakai hanya yang terakhir, tetapi jika addeventlistener akan berlaku semuanya tidak ada yang ditimpa.

*/

const pp4 = document.querySelector('section#b p');
pp4.addEventListener('click', function(){
	const ull =document.querySelector('section#b ul');
	const lliBaru = document.createElement('li');
	const tteksBaru = document.createTextNode('Item Baru');
	lliBaru.appendChild(tteksBaru);
	ull.appendChild(lliBaru);
});

//Event List, ada banyak :search aja

pp4.addEventListener('mouseenter', function(){
	pp4.style.backgroundColor = 'green';
});

pp4.addEventListener('mouseleave', function(){
	pp4.style.backgroundColor = 'black';
});




