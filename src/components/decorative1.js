export default function createDecorative1(){

	const decorative_div1 = document.createElement('div');
	decorative_div1.classList.add("decorative1","flex");

	const decorative_icon1_img = document.createElement('object');
	decorative_icon1_img.classList.add('dec__icon1');
	decorative_icon1_img.data="./src/images/maze.svg";
	decorative_div1.appendChild(decorative_icon1_img);
	return decorative_div1;
}
