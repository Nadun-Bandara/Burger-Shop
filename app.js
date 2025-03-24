let array=[];

function addOrder(){   
    let name;
    let address;
    let phone;
    let item;
    let qty;
    name = document.getElementById("txt1").value;
    address = document.getElementById("txt2").value;
    phone = parseInt(document.getElementById("txt3").value);
    item=document.getElementById("txt4").value;
    qty=parseInt(document.getElementById("txt5").value);
    let price;
    if(item=="BUR001"){
        price=670*qty;
        Swal.fire({
            title: "Item placed Succesfully...Your balance is "+price+".00/=",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }
    if(item=="BUR002"){
        price=870*qty;
        Swal.fire({
            title: "Item placed Succesfully...Your balance is "+price+".00/=",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }
    if(item=="BUR003"){
        price=1070*qty;
        Swal.fire({
            title: "Item placed Succesfully...Your balance is "+price+".00/=",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }
    if(item=="BUR004"){
        price=670*qty;
        Swal.fire({
            title: "Item placed Succesfully...Your balance is "+price+".00/=",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }if(item=="BUR005"){
        price=970*qty;
        Swal.fire({
            title: "Item placed Succesfully...Your balance is "+price+".00/=",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }if(item=="BUR006"){
        price=570*qty;
        Swal.fire({
            title: "Item placed Succesfully...Your balance is "+price+".00/=",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }if(item=="BUR007"){
        price=999*qty;
        Swal.fire({
            title: "Item placed Succesfully...Your balance is "+price+".00/=",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }
    if(item=="BUR008"){
        price=1270*qty;
        Swal.fire({
            title: "Item placed Succesfully...Your balance is "+price+".00/=",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }
    if(item=="BUR009"){
        price=470*qty;
        Swal.fire({
            title: "Item placed Succesfully...Your balance is "+price+".00/=",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }
    if(item=="BUR010"){
        price=1570*qty;
        Swal.fire({
            title: "Item placed Succesfully...Your balance is "+price+".00/=",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }
    let order={
        name,
        address,
        phone,
        item,
        qty,
        price
    }
    array.push(order);
   
    
    }

    console.log(array);
    console.log(12222);

    function cancel(){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });

          window.location.href = "index.html"; 
    }