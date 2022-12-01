import createHeader from './src/components/header.js';
import createSubHeader from './src/components/sub-header.js';
import createListEl from './src/components/links.js';
import createDecorative1 from './src/components/decorative1.js';

const body = document.body;
body.id  = "background";
const poster = document.getElementById('poster');

//Create Row Div Elements:
const first_row = document.createElement('div');
const second_row = document.createElement('div');
const third_row = document.createElement('div');
const forth_row = document.createElement('div');

first_row.classList.add("row-first","flex","flex-cn-e");
second_row.classList.add("row-second","flex");
third_row.classList.add("row-third","flex");
forth_row.classList.add("row-forth","flex");

poster.appendChild(createHeader());
poster.appendChild(createSubHeader());

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
story__header.classList.add("story__header","font-regular");
story__disc.classList.add("story__disc","font-regular");

story__header.innerText = "This area is about my story, how i got into programming etc.";
story__disc.innerText  = "Sed porta est vitae leo volutpat, pharetra pharetra nulla laoreet. Mauris pulvinar tellus eget dui elementum congue. Fusce molestie malesuada tellus sit amet condimentum. Maecenas id mi ut leo porttitor aliquet non ut ex. Ut ante nulla, tempus ac rutrum id, vehicula at augue. Phasellus maximus elit ut cursus aliquet. Donec  enim tempus vitae.";

third_row.appendChild(content_el2);
third_row.appendChild(story_el);
poster.appendChild(third_row);

forth_row.appendChild(createListEl());
forth_row.appendChild(createDecorative1());

poster.appendChild(forth_row);
