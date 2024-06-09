document.querySelector("button").addEventListener("click",result)

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

var main  = document.createElement("div");
main.className = "main";

async function result()
{
    main.innerHTML = ""
    try
    {
        var ask = document.getElementById("search").value;

        var data = await fetch(`https://api.tcgdex.net/v2/en/cards/${ask}`)
        var res = await data.json();
        console.log(res);

        var col = document = document.createElement("div");
        col.className = "col-lg-12 col-md-8 col-sm-6";
        col.innerHTML = `
        <div class="card">
            <img src="${res.set.logo}.png" alt="image">
            <div class="card-body">
                <h5 class="card-title">
                Card Name : ${res.name}</h5>
                <p class="card-text">Id: ${res.id}</p>
                <p class="card-text">Card Count: ${res.set.cardCount.total}</p>
                <p class="card-text">Updated : ${res.updated}</p>
                <p class="card-text">Hp : ${res.hp}</p>
            </div>
        </div>`

        main.append(col);
        row.append(main);
        container.append(row);
        document.body.append(container);
    }
    catch
    {
        console.log("error");
    }

}