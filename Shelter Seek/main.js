//  +++++++++++++++++++++++++  ALERT MESSAGE ON CLICKING LOCATION AND MIC ICONS   +++++++++++++++++++++++++++

// Getting icons
const locationIcon = document.getElementById('locationlogo');
const microphoneIcon = document.getElementById('microphonelogo');

// Add event listeners to the icons using arrow functions
locationIcon.addEventListener('click', (e) => {
  alert('Please Allow Location Access From Settings!');
});

microphoneIcon.addEventListener('click', (e) => {
  alert('Please Allow Voice Speech Access From Settings!');
});


//  +++++++++++++++++++++++++  NEW DIV ON HOVER ON (FOR BUYERS) IN NAVIGATION   +++++++++++++++++++++++++++

const hoverBuyers = document.querySelector('.for_buyers');
const hoverContent1 = document.querySelector('.for_buyers_hover');

// Event listeners for both hoverBuyers and hoverContent
hoverBuyers.addEventListener('mouseover', () => {
    hoverContent1.style.display = 'flex';
});

hoverContent1.addEventListener('mouseover', () => {
    hoverContent1.style.display = 'flex';
});

hoverBuyers.addEventListener('mouseout', () => {
    hoverContent1.style.display = 'none';
});

hoverContent1.addEventListener('mouseout', () => {
    hoverContent1.style.display = 'none';
});


//  +++++++++++++++++++++++++  ON CLICKING BUY RENT etc.. IN SEARCHBAR   +++++++++++++++++++++++++++

const h5 = document.querySelector('#searchbar_2_div_change_h5');
const buy = document.querySelector('#buy_searchbar_1');
const rent = document.querySelector('#rent_searchbar_1');
const new_launch = document.querySelector('#new_launch_searchbar_1');
const pg = document.querySelector('#pg_searchbar_1');
const commercial = document.querySelector('#commercial_searchbar_1');
const plots = document.querySelector('#plots_searchbar_1');
const projects = document.querySelector('#projects_searchbar_1');



//Event listeners

buy.addEventListener('click' , () => {
    h5.innerHTML = "Buy Now";
    buy.style.color = "black";
    rent.style.color = "rgb(116, 107, 107)";
    new_launch.style.color = "rgb(116, 107, 107)";
    pg.style.color = "rgb(116, 107, 107)";
    commercial.style.color = "rgb(116, 107, 107)";
    plots.style.color = "rgb(116, 107, 107)";
    projects.style.color = "rgb(116, 107, 107)";
});

rent.addEventListener('click' , () => {
  h5.innerHTML = "Rent now";
  buy.style.color =  "rgb(116, 107, 107)";
  rent.style.color = "black";
  new_launch.style.color = "rgb(116, 107, 107)";
  pg.style.color = "rgb(116, 107, 107)";
  commercial.style.color = "rgb(116, 107, 107)";
  plots.style.color = "rgb(116, 107, 107)";
  projects.style.color = "rgb(116, 107, 107)";
});

new_launch.addEventListener('click' , () => {
  h5.innerHTML = "Newly Launched";
  buy.style.color =  "rgb(116, 107, 107)";
  rent.style.color = "rgb(116, 107, 107)";
  new_launch.style.color = "black";
  pg.style.color = "rgb(116, 107, 107)";
  commercial.style.color = "rgb(116, 107, 107)";
  plots.style.color = "rgb(116, 107, 107)";
  projects.style.color = "rgb(116, 107, 107)";
});

pg.addEventListener('click' , () => {
  h5.innerHTML = "PG/Co-living";
  buy.style.color =  "rgb(116, 107, 107)";
  rent.style.color = "rgb(116, 107, 107)";
  new_launch.style.color = "rgb(116, 107, 107)";
  pg.style.color ="black";
  commercial.style.color = "rgb(116, 107, 107)";
  plots.style.color = "rgb(116, 107, 107)";
  projects.style.color = "rgb(116, 107, 107)";
});

commercial.addEventListener('click' , () => {
  h5.innerHTML = "All Residentials";
  buy.style.color =  "rgb(116, 107, 107)";
  rent.style.color = "rgb(116, 107, 107)";
  new_launch.style.color = "rgb(116, 107, 107)";
  pg.style.color = "rgb(116, 107, 107)";
  commercial.style.color = "black";
  plots.style.color = "rgb(116, 107, 107)";
  projects.style.color = "rgb(116, 107, 107)";
});

plots.addEventListener('click' , () => {
  h5.innerHTML = "Find Plots/Lands";
  buy.style.color =  "rgb(116, 107, 107)";
  rent.style.color = "rgb(116, 107, 107)";
  new_launch.style.color = "rgb(116, 107, 107)";
  pg.style.color = "rgb(116, 107, 107)";
  commercial.style.color = "rgb(116, 107, 107)";
  plots.style.color ="black";
  projects.style.color = "rgb(116, 107, 107)";
});

projects.addEventListener('click' , () => {
  h5.innerHTML = "Residential Project";
  buy.style.color =  "rgb(116, 107, 107)";
  rent.style.color = "rgb(116, 107, 107)";
  new_launch.style.color = "rgb(116, 107, 107)";
  pg.style.color = "rgb(116, 107, 107)";
  commercial.style.color = "rgb(116, 107, 107)";
  plots.style.color = "rgb(116, 107, 107)";
  projects.style.color = "black";
});