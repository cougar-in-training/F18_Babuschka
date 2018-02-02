let menu;
//		let imgMedium;
document.addEventListener("DOMContentLoaded", loadJson);

let modtager = document.querySelector("[data-templatemodtager]"); //div der skal modtage elementer
let template = document.querySelector("[data-templateOrigin]"); //mit template tag i HTML


async function loadJson() {
	let menuListe = await fetch("menu.json"); //henter min json fil
	menu = await menuListe.json(); //tolk den udefra fil som jason i min variabel

	//find og filtrer retter efter kategori og gem dem i nyt array
	let forretter = menu.filter(ret => ret.kategori == "forretter");
	let hovedretter = menu.filter(ret => ret.kategori == "hovedretter");
	let desserter = menu.filter(ret => ret.kategori == "desserter");
	let drikkevarer = menu.filter(ret => ret.kategori == "drikkevarer");
	let sideorders = menu.filter(ret => ret.kategori == "sideorders");

	document.querySelector("[data-forretter]").addEventListener("click", () => {
		visMenuListe(forretter, "Forretter")
	});
	document.querySelector("[data-hovedretter]").addEventListener("click", () => {
		visMenuListe(hovedretter, "Hovedretter")
	});
	document.querySelector("[data-desserter]").addEventListener("click", () => {
		visMenuListe(desserter, "Desserter")
	});
	document.querySelector("[data-sideorders]").addEventListener("click", () => {
		visMenuListe(sideorders, "Sideorders")
	});
	document.querySelector("[data-drikkevarer]").addEventListener("click", () => {
		visMenuListe(drikkevarer, "Drikkevarer")
	});
	document.querySelector("[data-alle]").addEventListener("click", () => {
		visMenuListe(menu, "Menu")
	});

	console.log(menu);

	visMenuListe(menu, "Menu");

}

function visMenuListe(menu, overskrift) {
	modtager.innerHTML = "";
	document.querySelector("[data-overskriftMenu]").textContent = overskrift;
	menu.forEach(hvermenu => {

		let klon = template.cloneNode(true).content;

		klon.querySelector("[data-navn]").textContent = hvermenu.navn;

		klon.querySelector("[data-billede]").setAttribute("src", "imgs/small/" + hvermenu.billede + "-sm.jpg"); //indsæt img her

		klon.querySelector("[data-kortbeskrivelse]").textContent = hvermenu.kortbeskrivelse;


		klon.querySelector("[data-pris]").textContent = hvermenu.pris + ",- Kr";

		modtager.appendChild(klon);
	})
}
