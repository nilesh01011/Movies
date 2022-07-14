let sideBarBtn = document.querySelector('#btn_menu .btn_menu button');
let sideBar = document.querySelector('#btn_menu');
let sidebarSearching = document.querySelector(
  '#btn_menu .btn_menu .sidebar_content form'
);
let overlay = document.querySelector('#overlay');

sideBarBtn.addEventListener('click', () => {
  sideBar.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  console.log(overlay);
  sideBar.classList.remove('active');
  overlay.classList.remove('active');
});

sidebarSearching.addEventListener('click', () => {
  sidebarSearching.classList.toggle('activeSearch');
});

// =============Sidebar End================

// Movie Links

let lionking = document.querySelectorAll('#lionking');
let tarzan = document.querySelectorAll('#tarzan');
let alladin = document.querySelectorAll('#alladin');
let greenland = document.querySelectorAll('#greenland');
let tenet = document.querySelectorAll('#tenet');
let gentelmen = document.querySelectorAll('#gentelmen');
let threehundered = document.querySelectorAll('#threehundered');
let vikings = document.querySelectorAll('#vikings');
let got = document.querySelectorAll('#got');
let troy = document.querySelectorAll('#troy');
let jumanji = document.querySelectorAll('#jumanji');
let moneyheist = document.querySelectorAll('#moneyheist');

lionking.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.open('./pages/lionDetails.html', '_blank');
  });
});

tarzan.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.open('./pages/tarzanDetails.html', '_blank');
  });
});

alladin.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.open('./pages/alladdinDetails.html', '_blank');
  });
});

greenland.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.open('./pages/greenlandDetails.html', '_blank');
  });
});

tenet.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.open('./pages/tenetDetails.html', '_blank');
  });
});

gentelmen.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.open('./pages/thegentelmenDetails.html', '_blank');
  });
});

threehundered.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.open('./pages/threeHunderedDetails.html', '_blank');
  });
});

vikings.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.open('./pages/vikingsDetails.html', '_blank');
  });
});

got.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.open('./pages/gotDetails.html', '_blank');
  });
});

troy.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.open('./pages/troyDetails.html', '_blank');
  });
});

jumanji.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.open('./pages/jumanjiDetails.html', '_blank');
  });
});

moneyheist.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.open('./pages/moneyHeistDetails.html', '_blank');
  });
});

// Movies Links End

let preloader = document.querySelector('#preloader');

window.addEventListener('load', () => {
  preloader.style.display = 'none';
});

// Preloader End

let videoTrailer = document.querySelector('#VideoPlayer');
let videoTrailerBtn = document.querySelector('#videoTrailerBtn');
let closeTrailer = document.querySelector('#closeTrailer');
let overlay_2 = document.querySelector('#overlay_2');

if (closeTrailer) {
  closeTrailer.addEventListener('click', closeTrailerVideo, false);
}

if (overlay_2) {
  overlay_2.addEventListener('click', closeTrailerVideo, false);
}

if (videoTrailerBtn) {
  videoTrailerBtn.addEventListener('click', () => {
    videoTrailer.style.display = 'block';
  });
}

function closeTrailerVideo() {
  videoTrailer.style.display = 'none';
}
