const body = document.body;
body.id  = "background";
const poster = document.getElementById('poster');
console.log("Hello World");

//Create Row Div Elements:
const first_row = document.createElement('div');
const second_row = document.createElement('div');
const third_row = document.createElement('div');
const forth_row = document.createElement('div');

first_row.classList.add("row-first","flex","flex-cn-e");
second_row.classList.add("row-second","flex");
third_row.classList.add("row-third","flex");
forth_row.classList.add("row-forth","flex");

// HEADER ELEMENT
const header_el  = document.createElement('h1');
header_el.classList.add("header","flex","flex-cn-e");
header_el.innerText = "BORA";
poster.appendChild(header_el);


// FIRST ROW
const subheader_el = document.createElement('h2');
const subheader_line = document.createElement('span');

subheader_el.classList.add("subheader");
subheader_line.classList.add("subheader_line")

subheader_el.innerText  = "Jr. Front-End Dev.";

first_row.appendChild(subheader_line);
first_row.appendChild(subheader_el);
poster.appendChild(first_row);


// SECOND ROW
const disc_el  = document.createElement('div');
const disc_span = document.createElement('span');

const content_el = document.createElement('div');
content_el.id ="content1";

disc_el.classList.add("disc");
content_el.classList.add("content1");

disc_span.innerText = "Lorem ipsum dolor sit amet cart curt";
disc_el.appendChild(disc_span);

second_row.appendChild(disc_el);
second_row.appendChild(content_el);
poster.appendChild(second_row);


// THIRD ROW
const content_el2 = document.createElement('div');
content_el2.classList.add("content2");
content_el2.id = "content2";

const story_el = document.createElement('div');
const story__header = document.createElement('h3');
const story__disc = document.createElement('p');
story_el.appendChild(story__header);
story_el.appendChild(story__disc);
story_el.classList.add("story");
story__header.classList.add("story__header");
story__disc.classList.add("story__disc");

story__header.innerText = "This area is about my story, how i got into programming etc.";
story__disc.innerText  = "Sed porta est vitae leo volutpat, pharetra pharetra nulla laoreet. Mauris pulvinar tellus eget dui elementum congue. Fusce molestie malesuada tellus sit amet condimentum. Maecenas id mi ut leo porttitor aliquet non ut ex. Ut ante nulla, tempus ac rutrum id, vehicula at augue. Phasellus maximus elit ut cursus aliquet. Donec  enim tempus vitae.";

third_row.appendChild(content_el2);
third_row.appendChild(story_el);
poster.appendChild(third_row);



// FORTH ROW
function createLinkElement(icon_url,link_url,disc){
	let link_el = document.createElement('li');
	link_el.classList.add("link_el");


	let link_a = document.createElement('a');
	link_a.classList.add("link__a");
	link_a.href = link_url;
	link_el.appendChild(link_a);

	let img_el = document.createElement('img');
	img_el.classList.add("link__img");
	img_el.src = icon_url;
	link_a.appendChild(img_el);

	let disc_el = document.createElement('p');
	disc_el.innerText = disc;
	link_a.appendChild(disc_el);

	return link_el;

}

//FORTH ROW
const links_ul = document.createElement('ul');
links_ul.classList.add("links_ul","flex");

const links = [
	['https://loremflickr.com/100/100','#','Test Link'],
	['https://loremflickr.com/100/100/2','#','Testtte3'],
	['https://loremflickr.com/100/100/3','#','Testtte3'],
	['https://loremflickr.com/100/100/1','#','My Test 23Link']
]
links.forEach(link=>{
	let temp_link = createLinkElement(link[0],link[1],link[2]);
	links_ul.appendChild(temp_link);
});

const decorative_div1 = document.createElement('div');
decorative_div1.classList.add("decorative1","flex");

const decorative_icon1_img = document.createElement('img');
decorative_icon1_img.classList.add('dec__icon1');
decorative_icon1_img.src="https://loremflickr.com/430/539";
decorative_div1.appendChild(decorative_icon1_img);

forth_row.appendChild(links_ul);
forth_row.appendChild(decorative_div1);

poster.appendChild(forth_row);
//  #=============== VANTA SCRIPTS ====================#

VANTA.NET({
  el: "#content1",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xB5f70eff,
  backgroundColor: 0x000,
  points: 7.00,
  maxDistance: 25.00,
  spacing: 19.00,
  showDots: false
})


VANTA.DOTS({
  el: "#content2",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
	backgroundColor: 0x000,
  color: 0xB5f70eff,
  color2: 0xc8c8c8,
  size: 2.50,
  spacing: 62.00,
  showLines: false
})

VANTA.WAVES({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 1100.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x0d0d0d,
  shininess: 0.00,
  waveHeight: 22.00,
  waveSpeed: 0.45,
  zoom: 0.65
})
