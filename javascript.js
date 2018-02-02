let menu;
//		let imgMedium;
document.addEventListener("DOMContentLoaded", loadJson);

let modtager = document.querySelector("[data-templatemodtager]"); //div der skal modtage elementer
let template = document.querySelector("[data-templateOrigin]"); //mit template tag i HTML

async function loadJson() {
	let menuListe = await fetch("menu.json"); //henter min json fil
	menu = await menuListe.json(); //tolk den udefra fil som jason i min variabel

	console.log(menu);

	visMenuListe(menu);

}

function visMenuListe() {
	menu.forEach(hvermenu => {

		let klon = template.cloneNode(true).content;

		klon.querySelector("[data-navn]").textContent = hvermenu.navn;

		klon.querySelector("[data-billede]").setAttribute("src", "imgs/small/" + hvermenu.billede + "-sm.jpg"); //indsæt img her

		klon.querySelector("[data-kortbeskrivelse]").textContent = hvermenu.kortbeskrivelse;


		klon.querySelector("[data-pris]").textContent = hvermenu.pris;

		modtager.appendChild(klon);
	})
}
