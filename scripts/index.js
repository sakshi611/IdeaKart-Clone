// navBar

import  {navBar,searchfunc,getData,saveFunc} from "../components/navbar.js"
document.getElementById('navbar').innerHTML = navBar()


let query =document.getElementById('query')
query.addEventListener('click',()=>{
    let nav_input = document.getElementById('input_value').value
    searchfunc(nav_input)

})


let container = document.querySelector('#container')
let url

async function searchbooks(url){
    getData(url).then((res)=>{
        appendfunc(res.works,res.name)
    })
}
let subject=['arts','fiction','science & mathematics',"children's book","business & Finance","history","biography",'social Sciences',"places","textbooks","books by Language"]
    let sub='kids'
    searchbooks(`https://openlibrary.org/subjects/${sub}.json`)
    sub='arts'
    searchbooks(`https://openlibrary.org/subjects/${sub}.json`)
    sub='fiction'
    searchbooks(`https://openlibrary.org/subjects/${sub}.json`)
    sub='science&mathematics'
    searchbooks(`https://openlibrary.org/subjects/${sub}.json`)
    sub="children's_book"
    searchbooks(`https://openlibrary.org/subjects/${sub}.json`)
    sub='god'
    searchbooks(`https://openlibrary.org/subjects/${sub}.json`)
    sub='history'
    searchbooks(`https://openlibrary.org/subjects/${sub}.json`)
    sub='biography'
    searchbooks(`https://openlibrary.org/subjects/${sub}.json`)
    sub='social'
    searchbooks(`https://openlibrary.org/subjects/${sub}.json`)
    sub='places'
    searchbooks(`https://openlibrary.org/subjects/${sub}.json`)
    sub='textbooks'
    searchbooks(`https://openlibrary.org/subjects/${sub}.json`)
    sub='language'
    searchbooks(`https://openlibrary.org/subjects/${sub}.json`)

    // subject.forEach(e => {
    //     searchbooks(`https://openlibrary.org/subjects/${e}.json`)
    // });

    function appendfunc(data,da){

        let sub_div =  document.createElement('div')
        sub_div.id= 'sub_div'
        let heading = document.createElement('h1')
        heading.innerHTML=`<i class="fa-solid fa-book"></i> ${da}`
       
        sub_div.append(heading)
        let img_div  = document.createElement('div')
        img_div.id ='img_div'
        data.forEach(ele => {
            if(ele.cover_id !=undefined){
    
                let title_div =  document.createElement('div')
                title_div.id= 'title_div'
                let h4 =  document.createElement('h4')
                h4.innerText= ele.title
    
                title_div.append(h4)
    
                let book_div =  document.createElement('div')
                book_div.id= 'book_div'
                let img = document.createElement('img')
                img.src=`https://covers.openlibrary.org/b/id/${ele.cover_id}-L.jpg`
      
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
                    console.log(e.path[0].className)
                })
                view_now.addEventListener('click',(e)=>{
                    saveFunc(e.path[0].className)
                    console.log(e.path[0].className)
                })
            }
        });
      
        sub_div.append(img_div)
        container.append(sub_div)
    }


import  {bottom} from "../components/footer.js"
document.getElementById('footer').innerHTML=bottom()   