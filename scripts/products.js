let workID =JSON.parse(localStorage.getItem("workId"));


fetch(`https://openlibrary.org/search.json?q=${workID}`)
.then(function(res){
    return res.json()

})

.then(function(res){
    append(res.docs[0])
    console.log(res.docs[0]);
    let id = res.docs[0].key
    console.log(id)

    fetch(`https://openlibrary.org${id}.json`)
.then(function(res){
    return res.json()

})

.then(function(res){
    app(res)
    // console.log(res);
})
})



function append(data){

    let container=document.getElementById("container");
    
    let leftDiv = document.createElement("div");
    leftDiv.setAttribute("id","left");

    let rightDiv = document.createElement("div");
    rightDiv.setAttribute("id","right");

    let priceDiv = document.createElement("div");
    priceDiv.setAttribute("id","price");

    let price = document.createElement("p");
    price.innerText = "Rs. 300";

    // let pBook = document.createElement("p");


    let h1 = document.createElement("h1");
    h1.innerText = data.title;

    let rightDivInner = document.createElement("div");
    rightDivInner.setAttribute("id","desc");

    
    let button = document.createElement("button");
    button.setAttribute("class","btn");
    button.innerText = "Buy Now";

    let bookSpecs = document.createElement("div");
    bookSpecs.setAttribute("id","specs");

    let imgBox = document.createElement("div");
    imgBox.setAttribute("class","imgBox");

    let img = document.createElement("img");
    img.src = `https://covers.openlibrary.org/b/id/${data.cover_i}-L.jpg`;
    imgBox.append(img);

    let tableDiv = document.createElement("div");

    let table = document.createElement("table")
    table.setAttribute("id","tab")

    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td")
    td1.innerText = "Binding"
    let td2 = document.createElement("td")
    td2.innerText = "Papeback"

    let tr2 = document.createElement("tr");
    let td3 = document.createElement("td")
    td3.innerText = "Language"
    let td4 = document.createElement("td")
    td4.innerText = "English"

    let tr3 = document.createElement("tr");
    let td5 = document.createElement("td")
    td5.innerText = "Number of Pages"
    let td6 = document.createElement("td")
    td6.innerText = data.number_of_pages_median;


    let tr4 = document.createElement("tr");
    let td7 = document.createElement("td")
    td7.innerText = "Author"
    let td8 = document.createElement("td")
    td8.innerText = data.author_name[0];

    let tr5 = document.createElement("tr");
    let td9 = document.createElement("td")
    td9.innerText = "Publisher";
    let td10 = document.createElement("td")
    td10.innerText = data.publisher[0];


    let tr6 = document.createElement("tr");
    let td11 = document.createElement("td")
    td11.innerText = "Isbn";
    let td12 = document.createElement("td")
    td12.innerText = data.isbn[0];


    let tr7 = document.createElement("tr");
    let td13 = document.createElement("td")
    td13.innerText = "Published At"
    let td14 = document.createElement("td")
    td14.innerText = data.publish_date[0];

    tr1.append(td1,td2)
    tr2.append(td3,td4)
    tr3.append(td5,td6)
    tr4.append(td7,td8)
    tr5.append(td9,td10)
    tr6.append(td11,td12)
    tr7.append(td13,td14)

    table.append(tr1, tr2, tr3, tr4, tr5, tr6, tr7)
    tableDiv.append(table)
    







    container.append(leftDiv, rightDiv);

    leftDiv.append(imgBox, priceDiv, tableDiv);

    rightDiv.append(h1,rightDivInner);

    priceDiv.append(price, button);


}

let app = (data) =>{
    let desc = document.getElementById("desc");
    
    let title = document.createElement("h1");
    title.innerText = data.title;

    let para = document.createElement("p");
    // console.log(data.description)
    if(data.description.value == undefined){
        para.innerText = data.description;
    }else{
    para.innerText =data.description.value;
}
    desc.append(title, para)
}
