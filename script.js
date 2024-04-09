
// promise task 1 rest-countries  Api
//Display in counturyname, flags, capital, region, cca3

let res = fetch("https://restcountries.com/v3.1/all")
.then((data) =>data.json()).then((data1)=>bar(data1))
.catch((err)=>console.log(err))

//Using dom manipulatin create div
let container = document.createElement("div")
container.className = "container"

let row = document.createElement("div")
row.className ="row"

function bar(data1){
console.log(data1)

// Using for loop
    for(let i=0; i<data1.length;i++){
        let col = document.createElement("div")
        col.className = "col-lg-4"
        col.innerHTML = `<div class="card text-center" style="width: 18rem;">
        <div class="card-header">${data1[i].name.common}</div>
        <img src="${data1[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Capital:${data1[i].capital}</p>
          <p class="card-text">Region:${data1[i].region}</p>
          <p class="card-text">latlng:${data1[i].latlng}</p>
          <p class="card-text">Country Code:${data1[i].cca3}</p>
          
        </div>
      </div>`
      row.append(col)
      container.append(row)
      document.body.append(container)

    }
}
