// Création du conteneur principal
const encadrementInfo = document.createElement('div');
encadrementInfo.className = 'encadrementInfo';

// On l’insère juste avant le footer
const footer = document.querySelector('footer');
document.body.insertBefore(encadrementInfo, footer);

// Zone pour les inputs
const zoneInput = document.createElement('div');
zoneInput.className = 'zoneInput';
encadrementInfo.appendChild(zoneInput);

// --------- NAME ----------
const zoneName = document.createElement('div');
zoneName.className = 'zoneDpd'; 
zoneInput.appendChild(zoneName);

const textName = document.createElement('small');
textName.textContent = 'Nom : ';
zoneName.appendChild(textName);

const inputName = document.createElement('input');
inputName.placeholder = 'Nom';
inputName.className = 'inputName';
zoneName.appendChild(inputName);

// --------- LASTNAME ----------
const zoneLastname = document.createElement('div');
zoneLastname.className = 'zoneLastname'; 
zoneInput.appendChild(zoneLastname);

const textLastName = document.createElement('small');
textLastName.textContent = 'Prénom : ';
zoneLastname.appendChild(textLastName);

const inputLastName = document.createElement('input');
inputLastName.placeholder = 'Prénom';
inputLastName.className = 'inputLastName';
zoneLastname.appendChild(inputLastName);

// --------- ADDRESS ----------
const zoneAddress = document.createElement('div');
zoneAddress.className = 'zoneAddress'; 
zoneInput.appendChild(zoneAddress);


const textAddress = document.createElement('small');
textAddress.textContent = 'Adresse : ';
zoneAddress.appendChild(textAddress);

const inputAddress = document.createElement('input');
inputAddress.placeholder = 'Adresse';
inputAddress.className = 'inputAddress';
zoneAddress.appendChild(inputAddress);

// --------- TELEPHONE ----------
const zoneTelephone = document.createElement('div');
zoneTelephone.className = 'zoneTelephone'; 
zoneInput.appendChild(zoneTelephone);

const textTelephone = document.createElement('small');
textTelephone.textContent = 'Téléphone : ';
zoneTelephone.appendChild(textTelephone);

const inputTelephone = document.createElement('input');
inputTelephone.placeholder = 'Téléphone';
inputTelephone.className = 'inputTelephone';
zoneTelephone.appendChild(inputTelephone);

// --------- EMAIL ----------
const zoneEmail = document.createElement('div');
zoneAddress.className = 'zoneEmail'; 
zoneInput.appendChild(zoneEmail);


const textEmail = document.createElement('small');
textEmail.textContent = 'Email : ';
zoneEmail.appendChild(textEmail);

const inputEmail = document.createElement('input');
inputEmail.placeholder = 'Email';
inputEmail.className = 'inputEmail';
zoneEmail.appendChild(inputEmail);

// --------- MODE DE LIVRAISON ----------
const zoneModeDeLivraison = document.createElement('div');
zoneModeDeLivraison.className = 'zoneModeDeLivraison';
encadrementInfo.appendChild(zoneModeDeLivraison);


const titreModeDeLivraison = document.createElement('h2');
titreModeDeLivraison.textContent = 'Choisissez votre mode de livraison :'; 
zoneModeDeLivraison.appendChild(titreModeDeLivraison);


// ZONE DPD
const zoneDpd = document.createElement('div');
zoneDpd.className = 'zoneDpd'; 
zoneModeDeLivraison.appendChild(zoneDpd);

// const imgDpd = document.createElement('img');
// imgDpd.src = './assets/images/livraison-dpd.png';
// imgDpdimg.alt = 'Logo DPD';
// ZoneDpd.appendChild(img);

const textdpd = document.createElement('small');
textdpd.textContent = "délai : 2 jours ouvrabes. Prix : 4,99e";
zoneDpd.appendChild(textdpd);

const inputTextdpd = document.createElement('input');
inputTextdpd.type= 'radio';
zoneDpd.appendChild(inputTextdpd); 

// ZONE ECOLO

const zoneEcolo = document.createElement('div');
zoneEcolo.className = 'zoneEcolo';
zoneModeDeLivraison.appendChild(zoneEcolo);


// const imgEcolo = document.createElement('img');
// imgEcolo.src = './assets/images/livraison-dpd.png';
// imgEcolo.alt = 'Logo DPD';
// imgEcolo.appendChild(img);

const textEcolo = document.createElement('small');
textEcolo.textContent = "délai : 3 jours ouvrabes. Prix : 3,99e";
zoneEcolo.appendChild(textEcolo);

const inputTextEcolo = document.createElement('input');
inputTextEcolo.type= 'radio';
zoneEcolo.appendChild(inputTextEcolo);




// ZONE LAPOSTE
const zoneLaposte = document.createElement('div');
zoneLaposte.className = 'zoneLaposte';
zoneModeDeLivraison.appendChild(zoneLaposte);


// const imglaposte = document.createElement('img');
// imglaposte.src = './assets/images/livraison-dpd.png';
// imglaposte.alt = 'Logo DPD';
// imglaposte.appendChild(img);

const textlaposte = document.createElement('small');
textlaposte.textContent = "délai : 2 jours ouvrabes. Prix : 1,99e";
zoneLaposte.appendChild(textlaposte);

const inputtextlaposte = document.createElement('input');
inputtextlaposte.type= 'radio';
zoneLaposte.appendChild(inputtextlaposte);

// Affichage total
const AffichageTotal = document.createElement('p');
zoneLaposte.appendChild(AffichageTotal);





//  BOUTON CONTINUER
const boutonContinuer = document.createElement('button');
boutonContinuer.textContent = "CONTINUER";
boutonContinuer.className = "boutonContinuer";
zoneModeDeLivraison.appendChild(boutonContinuer); 


addEventListener(click,() =>{
    
} )