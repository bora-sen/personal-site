export default function createHeader() {
	// HEADER ELEMENT
	const header_el  = document.createElement('h1');
	header_el.classList.add("header","font-futuristic","flex","flex-cn-e");
	header_el.innerText = "BORA";

	return header_el;
}
