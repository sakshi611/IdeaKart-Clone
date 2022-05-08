
let workId = ''

function navBar(){
    return `
    <div id="nav-left">
        <div id="brand"><a href="index.html"><i class="fa-solid fa-lightbulb"></i>IDEAKART</a></div>
        <div id=search_div>
            <div id="nav-input"><input type="text" placeholder=" Search" id="input_value"><button  id="query"><i class="fa-solid fa-magnifying-glass"></i></button></div>
            <div id="search_details"></div>
        </div>
        
    </div>
    <div id="nav-right">
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="signin.html">Login</a>
        <a href="cart.html">Cart</a>
    </div>
    `;
}




function searchfunc(queryId){
 if(queryId){
    console.log('searching')
   
    document.getElementById('input_value').value=null
    document.getElementById('input_value').placeholder ='Searching....'

    getData(`https://openlibrary.org/search.json?q=${queryId}&limit=30`).then((res)=>{
        appendfun(res.docs,res.q)

    })
    
 }
}

function appendfun(data,da){
    // console.log(data)
    container.innerHTML=null
    let sub_div =  document.createElement('div')
    sub_div.id= 'sub_div'
    let heading = document.createElement('h1')
    heading.innerText=da
   
    sub_div.append(heading)
    let img_div  = document.createElement('div')
    img_div.id ='img_div'
    data.forEach(ele => {
        if(ele.isbn !=undefined){
    
            let title_div =  document.createElement('div')
            title_div.id= 'title_div'
            let h4 =  document.createElement('h4')
            h4.innerText= ele.title

            title_div.append(h4)

            let book_div =  document.createElement('div')
            book_div.id= 'book_div'
            let img = document.createElement('img')
            img.src=`https://covers.openlibrary.org/b/isbn/${ele.isbn[5]}-L.jpg`
  
            let a_div =  document.createElement('div')
            a_div.id= 'a_div'
            
            let view_now = document.createElement('a')
            view_now.className = ele.title
            view_now.innerHTML='<i class="fa-solid fa-eye"></i> View Now'

            let more_details = document.createElement('a')
            more_details.className = ele.title
            more_details.innerHTML='<i class="fa-solid fa-circle-info"></i> More Details'

            let hr = document.createElement('hr')
            let hr1 = document.createElement('hr')

            a_div.append(view_now,hr1,more_details)
        

            a_div.style.display='flex'
            book_div.append(img,title_div,hr,a_div)
            img_div.append(book_div)

            more_details.addEventListener('click',(e)=>{
                saveFunc(e.path[0].className)
            })
            view_now.addEventListener('click',(e)=>{
                saveFunc(e.path[0].className)
            })
        }
    });
  
    sub_div.append(img_div)
    container.append(sub_div)
    document.getElementById('input_value').placeholder =''
}

let getData = async(url)=>{
    let res = await fetch(url)
    let data = await res.json()
    return data
}

function saveFunc(data){
    console.log(data)
    workId = data
    localStorage.setItem('workId',JSON.stringify(workId))
    window.location.href='products.html'
}


export  {navBar,searchfunc,getData,saveFunc};
