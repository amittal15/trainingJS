export default (urls) => {
	let elem = document.querySelector('#gifs')
	elem.innerHTML = urls.map(url => `<img src = "${url}" >`).join('\n')
}