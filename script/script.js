const select = document.getElementById("CountryNames");
const dataInfo = document.getElementById("dataInfo");
const countryMenu = document.getElementById("InfoPage");
const closeBtn = document.getElementById("close");
const imgSide = document.getElementById("ImgSide");
let data;

let getUsers = async () => {
  let response = await fetch("https://restcountries.com/v3.1/all");
  data = await response.json();
  data.forEach((el) => {
    let nameList = document.createElement("option");
    nameList.innerText = el.name.common;
    nameList.value = el.name.official;
    select.appendChild(nameList);
  });
  return data;
};
getUsers();

function createList(obj) {
  dataInfo.innerHTML = ``;
  imgSide.innerHTML = "";
  let name = document.createElement("li");
  name.innerText = `${obj.name.common}`;
  let capital = document.createElement("li");
  capital.innerText = `Capital - ${obj.capital[0]}`;
  let region = document.createElement("li");
  region.innerText = `Region - ${obj.region}`;
  let languages = document.createElement("li");
  languages.innerText = `Languages - ${Object.values(obj.languages)}`;
  let audNameList = Object.keys(obj.currencies);
  let audName = document.createElement("li");
  audName.innerText = `Aud name - ${audNameList[0]} ${Object.values(
    obj.currencies[audNameList[0]]
  )}`;
  let car = document.createElement("li");
  car.innerText = `Car - ${obj.car.side}`;
  let startOfWeek = document.createElement("li");
  startOfWeek.innerText = `Start of week - ${obj.startOfWeek}`;
  let status = document.createElement("li");
  status.innerText = `Status - ${obj.status}`;
  let subregion = document.createElement("li");
  subregion.innerText = `Subregion - ${obj.subregion}`;
  let timeZones = document.createElement("li");
  timeZones.innerText = `Time zones - ${obj.timezones[0]}`;
  let area = document.createElement("li");
  area.innerText = `Area - ${obj.area}`;
  let population = document.createElement("li");
  population.innerText = `Population - ${obj.population}`;
  let flag = document.createElement("img");
  flag.src = obj.flags.png;
  flag.id = "flag";
  let coatOfArms = document.createElement("img");
  coatOfArms.src = obj.coatOfArms.png;
  coatOfArms.id = "coatOfArms";
  dataInfo.appendChild(name);
  dataInfo.appendChild(capital);
  dataInfo.appendChild(region);
  dataInfo.appendChild(languages);
  dataInfo.appendChild(audName);
  dataInfo.appendChild(car);
  dataInfo.appendChild(startOfWeek);
  dataInfo.appendChild(status);
  dataInfo.appendChild(subregion);
  dataInfo.appendChild(timeZones);
  dataInfo.appendChild(area);
  dataInfo.appendChild(population);
  imgSide.appendChild(flag);
  imgSide.appendChild(coatOfArms);
}

select.addEventListener("change", (e) => {
  data.forEach((element) => {
    if (element.name.official == e.target.value) {
      countryMenu.style.display = "flex";
      createList(element);
    }
  });
});

closeBtn.addEventListener("click", () => {
  countryMenu.style.display = "none";
});
