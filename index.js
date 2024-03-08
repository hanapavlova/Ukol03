/*Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.*/

const urovenHTML = Number(prompt("Ohodnoťte svoje dovednosti v HTML. Zadejte svoji úroveň v bodech 0-100."))
const urovenCSS = Number(prompt("Ohodnoťte svoje dovednosti v CSS. Zadejte svoji úroveň v bodech 0-100."))
const urovenJS = Number(prompt("Ohodnoťte svoje dovednosti v JS. Zadejte svoji úroveň v bodech 0-100."))

const updateSkill = (skillId, value) => {
  const progress = document.querySelector(`#${skillId} .skill__progress`)
  progress.style.width = `${value}%`
  const newValue = document.querySelector(`#${skillId} .skill__value`)
  newValue.textContent = `${value}/100`
}

if (urovenHTML >=0 && urovenHTML <=100) { 
updateSkill("skill1", urovenHTML)
} else {
  document.body.innerHTML += "Zadané hodnoty pro úroveň HTML nejsou v rozmezí 0-100. Prosím, zadejte platné hodnoty."
}

if (urovenCSS >=0 && urovenCSS <=100)
  {updateSkill("skill2", urovenCSS)
} else {
  document.body.innerHTML += "Zadané hodnoty pro úroveň CSS nejsou v rozmezí 0-100. Prosím, zadejte platné hodnoty."
} 

if (urovenJS >=0 && urovenJS <=100) {
  updateSkill("skill3", urovenJS)
} else {
  document.body.innerHTML += "Zadané hodnoty pro úroveň JS nejsou v rozmezí 0-100. Prosím, zadejte platné hodnoty."
} 