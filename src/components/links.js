export default function createListEl(){

	 let createLinkElement = (icon_url,link_url,disc) => {

		let link_el = document.createElement('li');
		link_el.classList.add("link_el");

		let link_a = document.createElement('a');
		link_a.classList.add("link__a");
		link_a.href = link_url;
		link_el.appendChild(link_a);

		let img_el = document.createElement('object');
		img_el.classList.add("link__img");
		img_el.data = icon_url;
		link_a.appendChild(img_el);

		let disc_el = document.createElement('p');
		disc_el.classList.add("link__p","font-regular");
		disc_el.innerText = disc;
		link_a.appendChild(disc_el);

		return link_el;
	}

let createLinksTitle = () =>{
			const links_title = document.createElement('h3');
			links_title.classList.add("links__title");
			links_title.innerText = "Links";
				return links_title;
		}
	//FORTH ROW
	const links_div = document.createElement("div");
	links_div.classList.add("links__div");

	const links_ul = document.createElement('ul');
	links_ul.classList.add("links_ul","flex");

	const links = [
		['./src/images/box-biohazard.svg','http://bborasen.com','Projects'],
		['./src/images/box-fragile.svg','https://tr.linkedin.com/in/bborasen','LinkedIn'],
		['./src/images/recycle.svg','https://github.com/bora-sen','Github']
	]
	links.forEach(link=>{
		let temp_link = createLinkElement(link[0],link[1],link[2]);
		links_ul.appendChild(temp_link);
	});
	links_div.appendChild(createLinksTitle());
	links_div.appendChild(links_ul);


	return links_div;
}
