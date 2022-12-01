export default function createSubHeader() {
	// FIRST ROW
	const subheader = document.createElement('div');
	subheader.classList.add("subheader","flex","flex-cn-e");
	const subheader_el = document.createElement('h2');
	const subheader_line = document.createElement('span');

	subheader_el.classList.add("subheader","font-gothic");
	subheader_line.classList.add("subheader_line")

	subheader_el.innerText  = "Jr. Front-End Dev.";

	subheader.appendChild(subheader_line);
	subheader.appendChild(subheader_el);

	return subheader;
}
