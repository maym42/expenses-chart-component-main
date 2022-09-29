import dataJson from "./../data.json" assert { type: "json" };

/*When page loading finsh */
document.body.onload = function () {
  let today = new Date()
    .toLocaleString("en-us", { weekday: "short" })
    .toLowerCase();

  for (let i = 0; i < dataJson.length; i++) {
    genrateColumn(dataJson[i].day, dataJson[i].amount);
  }
  //afer gentrate the graph
  let cyanColor = "hsl(186, 34%, 60%)";
  document.getElementById(today).style.backgroundColor = cyanColor;
};

function genrateColumn(day, amount) {
  let colContainer = document.createElement("div");
  colContainer.classList.add("barContainer");
  /*bar element */
  let newBar = document.createElement("div");
  newBar.id = day;
  newBar.style.height = amount + "%";
  newBar.classList.add("bar");
  /*day label element */
  let newDayLabel = document.createElement("sapn");
  newDayLabel.innerText = day;
  newDayLabel.classList.add("dayLabel");
  /*amount label element*/
  let newAmountLabel = document.createElement("span");
  newAmountLabel.innerText = "$" + amount;
  newAmountLabel.classList.add("amountLabel");
  /*add to the container element*/
  colContainer.appendChild(newAmountLabel);
  colContainer.appendChild(newBar);
  colContainer.appendChild(newDayLabel);
  /*add to the graph element*/
  document.getElementById("graphContainer").appendChild(colContainer);
}
