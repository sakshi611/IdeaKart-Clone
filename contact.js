var arr=JSON.parse(localStorage.getItem("data"))||[];
document.querySelector("form").addEventListener("submit",addFunction);

function addFunction(){
    event.preventDefault();
    let form=document.querySelector("form");
    let brand=form.cpin.value;
    let name=form.ccity.value;
    let price=form.cstate.value;
    let image=form.cmobile.value;
    let mess=form.cemail.value;
    let obj =new arrAdd(brand,name,price,image,mess);
    arr.push(obj);
    localStorage.setItem("data",JSON.stringify(arr));
    alert("Thank You! Your form has been submitted.")
    window.location.href="index.html";
}

function arrAdd(b,n,p,i,m){
    this.brand=b;
    this.name=n;
    this.price=p;
    this.image=i;
    this.mess=m;
}

