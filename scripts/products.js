
 import  {navBar} from "../components/navbar.js"
 document.getElementById('navbar').innerHTML = navBar()

 import { bottom }from '../components/footer.js'

 document.getElementById('footer').innerHTML=bottom();


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


let arr = JSON.parse(localStorage.getItem("cart"))||[];

function append(data){

    let container1=document.getElementById("container1");
    
    let leftDiv = document.createElement("div");
    leftDiv.setAttribute("id","left");

    let rightDiv = document.createElement("div");
    rightDiv.setAttribute("id","right");

    let priceDiv = document.createElement("div");
    priceDiv.setAttribute("id","price");

    let price = document.createElement("p");
    price.setAttribute("class","weight");
    price.innerText = "Rs. 300";

    let pBook = document.createElement("p");
    pBook.innerText = "Buy it at best price from here"

    let h1 = document.createElement("h1");
    h1.innerText = data.title;

    let rightDivInner = document.createElement("div");
    rightDivInner.setAttribute("id","desc");

    let button = document.createElement("button");
    button.setAttribute("class","btn");
    button.innerText = "Buy Now";
    button.addEventListener("click",function(){

        arr.push(data);
        localStorage.setItem("cart",JSON.stringify(arr));
        window.location.href="cart.html";

    })

    let bookSpecs = document.createElement("div");
    bookSpecs.setAttribute("id","specs");

    let imgBox = document.createElement("div");
    imgBox.setAttribute("class","imgBox");

    let img = document.createElement("img");
    img.src = `https://covers.openlibrary.org/b/id/${data.cover_i}-L.jpg`;
    imgBox.append(img);

    let instantBox = document.createElement("div");
    instantBox.setAttribute("id","instant");

    let instantInner = document.createElement("p");
    instantInner.setAttribute("id","instantInner")
    instantInner.innerText = "Get Instant Cashback when you pay using Amazon Pay... Click Here";

    instantBox.append(instantInner);

    let tableDiv = document.createElement("div");

    let table = document.createElement("table")
    table.setAttribute("id","tab")

    let tr1 = document.createElement("tr");
    tr1.setAttribute("id","border");
    let td1 = document.createElement("td")
    td1.setAttribute("id","bold")
    td1.innerText = "Binding"
    let td2 = document.createElement("td")
    td2.innerText = "Paperback"

    let tr2 = document.createElement("tr");
    tr2.setAttribute("id","border");
    let td3 = document.createElement("td")
    td3.setAttribute("id","bold")
    td3.innerText = "Language"
    let td4 = document.createElement("td")
    td4.innerText = "English"

    let tr3 = document.createElement("tr");
    tr3.setAttribute("id","border");
    let td5 = document.createElement("td");
    td5.setAttribute("id","bold")
    td5.innerText = "Number of Pages"
    let td6 = document.createElement("td")
    td6.innerText = data.number_of_pages_median;

    let tr4 = document.createElement("tr");
    tr4.setAttribute("id","border");
    let td7 = document.createElement("td");
    td7.setAttribute("id","bold")
    td7.innerText = "Author"
    let td8 = document.createElement("td")
    td8.innerText = data.author_name[0];

    let tr5 = document.createElement("tr");
    tr5.setAttribute("id","border");
    let td9 = document.createElement("td");
    td9.setAttribute("id","bold")
    td9.innerText = "Publisher";
    let td10 = document.createElement("td")
    td10.innerText = data.publisher[0];

    let tr6 = document.createElement("tr");
    tr6.setAttribute("id","border");
    let td11 = document.createElement("td");
    td11.setAttribute("id","bold")
    td11.innerText = "Isbn";
    let td12 = document.createElement("td")
    td12.innerText = data.isbn[0];

    let tr7 = document.createElement("tr");
    tr7.setAttribute("id","border");
    let td13 = document.createElement("td");
    td13.setAttribute("id","bold")
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

    let rightBottom = document.createElement("div");
    rightBottom.setAttribute("id","shadow")
    let table1 = document.createElement("table");
    table1.setAttribute("id","tab1");
    let tr8 = document.createElement("tr")
    let td15 = document.createElement("td");
    td15.setAttribute("class","weight")
    td15.innerText = "Store"

    let td16 = document.createElement("td");
    td16.setAttribute("class","weight")
    td16.innerText = "Price"

    let td17 = document.createElement("td");
    td17.setAttribute("class","weight")
    td17.innerText = "Add to Cart"

    tr8.append(td15, td16, td17);

    let tr9 = document.createElement("tr")
    let td18 = document.createElement("td");
    td18.innerText = "Amazon, Paperback"

    let td19 = document.createElement("td");
    td19.innerText = "Rs. 300.0"

    let td20 = document.createElement("td");

    let button1 = document.createElement("button");
    button1.setAttribute("id","btn1")
    button1.innerText = "Add to Cart"
    button1.addEventListener("click", function(){
        
        arr.push(data);

        localStorage.setItem("cart",JSON.stringify(arr));
    });

    let history = document.createElement("h3");
    history.innerText = "This is the price history of this book :"
    
    td20.append(button1)

    tr9.append(td18, td19, td20);

    table1.append(tr8, tr9);

    rightBottom.append(table1)
    
    container1.append(leftDiv, rightDiv);

    leftDiv.append(imgBox, pBook, priceDiv, instantBox, tableDiv);

    rightDiv.append(h1,rightDivInner, rightBottom, history);

    priceDiv.append(price, button);

}

let app = (data) =>{
    let desc = document.getElementById("desc");
    
    let title = document.createElement("h1");
    title.setAttribute("id","title_name")
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
