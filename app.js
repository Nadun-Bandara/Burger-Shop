let array = [];
let extraOrders=[];

function addOrder() {
  let name;
  let address;
  let phone;
  let item;
  let qty;
  let discount;
  name = document.getElementById("txt1").value;
  address = document.getElementById("txt2").value;
  phone = parseInt(document.getElementById("txt3").value);
  item = document.getElementById("txt4").value;
  qty = parseInt(document.getElementById("txt5").value);
  let newprice;
  let price;

  let order = {
    name,
    address,
    phone,
    item,
    qty,
    price,
    discount,
    newprice
  }

  if (typeof name == "string" && qty > 0 && typeof address == "string" && phone.toString().length == 9) {
    if (item == "B1001") {
      price = 750 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    }
    if (item == "B1002") {
      price = 1500 * qty;
      discount = price * 0.15;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    }
    if (item == "B1003") {
      price = 1600 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    }
    if (item == "B1004") {
      price = 1400 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    } if (item == "B1005") {
      price = 800 * qty;
      discount = price * 0.20;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    } if (item == "B1006") {
      price = 1000 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    } if (item == "B1007") {
      price = 600 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    }
    if (item == "B1008") {
      price = 650 * qty;
      discount = price * 0.15;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    }
    if (item == "B1009") {
      price = 800 * qty;
      discount = price * 0.05;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    }
    if (item == "B1010") {
      price = 1800 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1012") {
      price = 1250 * qty;
      discount = price * 0.20;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1013") {
      price = 1200 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1014") {
      price = 1600 * qty;
      discount = price * 0.10;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1015") {
      price = 900 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1016") {
      price = 2000 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1017") {
      price = 1500 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1018") {
      price = 1800 * qty;
      discount = price * 0.03;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1019") {
      price = 1400 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }

    if (item == "B1020") {
      price = 2300 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1021") {
      price = 2200 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1022") {
      price = 1900 * qty;
      discount = price * 0.16;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1023") {
      price = 2800 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1024") {
      price = 3000 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1025") {
      price = 1200 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1026") {
      price = 600 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1027") {
      price = 800 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1028") {
      price = 650 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1029") {
      price = 450 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1030") {
      price = 600 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1031") {
      price = 1600 * qty;
      discount = price * 0.15;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1032") {
      price = 1700 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1033") {
      price = 2900 * qty;
      discount = price * 0.10;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1034") {
      price = 2000 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1035") {
      price = 1950 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1036") {
      price = 2400 * qty;
      discount = price * 0.01;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1037") {
      price = 2000 * qty;
      discount = price * 0.01;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1038") {
      price = 1200 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1039") {
      price = 2300 * qty;
      discount = price * 0.10;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1040") {
      price = 3100 * qty;
      discount = price * 0.05;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1041") {
      price = 2400 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }

    if (item == "B1042") {
      price = 900 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }

    if (item == "B1043") {
      price = 2100 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }

    if (item == "B1044") {
      price = 990 * qty;
      discount = price * 0.05;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }

    if (item == "B1045") {
      price = 1230 * qty;
      discount = price * 0.00;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1046") {
      price = 1500 * qty;
      discount = price * 0.03;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }
    if (item == "B1047") {
      price = 850 * qty;
      discount = price * 0.07;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });

      array.push(order);
    }


    setTimeout(() => {
      Swal.fire({
        title: "The Amount you have to pay is RS." + newprice + "/= Discount : RS." + discount + "/=",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    }, 5000);

  } else {

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "your inputs went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
}

function selectOrder() {
  if (array.length > 0) {
    let lastname = array[array.length - 1].order.name;
    document.getElementById("p01").innerText = "neww";
  }
  else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please place this Order!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
}
console.log(array);

function cancel() {
  (array.join(", "));
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="index.html">Why do I have this issue?</a>'
  });
  document.getElementById("txt1").value = "";
  document.getElementById("txt2").value = "";
  document.getElementById("txt3").value = "";
  document.getElementById("txt4").value = "";
  document.getElementById("txt5").value = "";
}

async function extraOrder1(){

  let name;
  let address;
  let tp;
  let qty;

  const { value: formValues } = await Swal.fire({
    title: "Fill in the Form",
    html: `
     <input id="swal-input1" class="swal2-input" placeholder="Enter your Name">
      <input id="swal-input2" class="swal2-input" placeholder="Enter your Address">
      <input id="swal-input3" class="swal2-input" placeholder="Enter your Contact-No">
      <input id="swal-input4" class="swal2-input" placeholder="Enter Item Quantity">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
      name= document.getElementById("swal-input1").value,
      address= document.getElementById("swal-input2").value,
      tp=parseInt(  document.getElementById("swal-input3").value),
      qty=parseInt(document.getElementById("swal-input4").value)
      ];
    }
  });
  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }

    
    let price=2000*qty;
    let discount=price-(price*0.9);
    let newprice = price-discount;
    Swal.fire({
      title: "Your Order Succesfully..! "+"Your Payment : RS."+newprice+" Discount : RS."+discount,
      icon: "success",
      draggable: true
    });
    let order={
      name,
      address,
      tp,
      qty,
      newprice,
      discount
    }
    extraOrders.push(order);
}
async function extraOrder2(){

  let name;
  let address;
  let tp;
  let qty;

  const { value: formValues } = await Swal.fire({
    title: "Fill in the Form",
    html: `
     <input id="swal-input1" class="swal2-input" placeholder="Enter your Name">
      <input id="swal-input2" class="swal2-input" placeholder="Enter your Address">
      <input id="swal-input3" class="swal2-input" placeholder="Enter your Contact-No">
      <input id="swal-input4" class="swal2-input" placeholder="Enter Item Quantity">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
      name= document.getElementById("swal-input1").value,
      address= document.getElementById("swal-input2").value,
      tp=parseInt(  document.getElementById("swal-input3").value),
      qty=parseInt(document.getElementById("swal-input4").value)
      ];
    }
  });
  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }


  let price=3000*qty;
  let discount=price*0.10;
  let newprice = price-discount;
  Swal.fire({
    title: "Your Order Succesfully..! "+"Your Payment : RS."+newprice+" Discount : RS."+discount,
    icon: "success",
    draggable: true
  });
  let order={
    name,
    address,
    tp,
    qty,
    newprice,
    discount
  }
  extraOrders.push(order);
}
async function extraOrder3(){

  let name;
  let address;
  let tp;
  let qty;

  const { value: formValues } = await Swal.fire({
    title: "Fill in the Form",
    html: `
     <input id="swal-input1" class="swal2-input" placeholder="Enter your Name">
      <input id="swal-input2" class="swal2-input" placeholder="Enter your Address">
      <input id="swal-input3" class="swal2-input" placeholder="Enter your Contact-No">
      <input id="swal-input4" class="swal2-input" placeholder="Enter Item Quantity">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
      name= document.getElementById("swal-input1").value,
      address= document.getElementById("swal-input2").value,
      tp=parseInt(  document.getElementById("swal-input3").value),
      qty=parseInt(document.getElementById("swal-input4").value)
      ];
    }
  });
  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }


  let price=800*qty;
 
  Swal.fire({
    title: "Your Order Succesfully..! "+"Your Payment : RS."+price,
    icon: "success",
    draggable: true
  });
  let order={
    name,
    address,
    tp,
    qty,
    price
  }
  extraOrders.push(order);
}

async function extraOrder4(){

  let name;
  let address;
  let tp;
  let qty;

  const { value: formValues } = await Swal.fire({
    title: "Fill in the Form",
    html: `
     <input id="swal-input1" class="swal2-input" placeholder="Enter your Name">
      <input id="swal-input2" class="swal2-input" placeholder="Enter your Address">
      <input id="swal-input3" class="swal2-input" placeholder="Enter your Contact-No">
      <input id="swal-input4" class="swal2-input" placeholder="Enter Item Quantity">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
      name= document.getElementById("swal-input1").value,
      address= document.getElementById("swal-input2").value,
      tp=parseInt(  document.getElementById("swal-input3").value),
      qty=parseInt(document.getElementById("swal-input4").value)
      ];
    }
  });
  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }



  let price=1800*qty;
  let discount=price*0.08;
  let newprice = price-discount;
  Swal.fire({
    title: "Your Order Succesfully..! "+"Your Payment : RS."+newprice+" Discount : RS."+discount,
    icon: "success",
    draggable: true
  });
  let order={
    name,
    address,
    tp,
    qty,
    newprice,
    discount
  }
  extraOrders.push(order);
}
console.log(extraOrders);

let cartArray=[];
 
    
 function addCart(button){
  let btn=button.innerText;
  console.log(btn);
  
  if(btn=="B1001"){   
    btn={
      name : "classic burger(large)",
      price : 750.00,
      dom :"2025-03-22",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }

  //==============================

  if(btn=="B1002"){   
    btn={
      name : "classic burger(Regular)",
      price : 1500.00,
      dom :"2025-03-22",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1003"){   
    btn={
      name : "Turkey Burger",
      price : 1600.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1004"){   
    btn={
      name : "Chicken Burger(Large)",
      price : 1400.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1005"){   
    btn={
      name : "Chicken Burger(Regular)",
      price : 800.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1006"){   
    btn={
      name : "Cheese Burger (Large)",
      price : 1000.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1007"){   
    btn={
      name : "Cheese Burger (Regular)",
      price : 600.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1006"){   
    btn={
      name : "Cheese Burger (Large)",
      price : 1000.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1007"){   
    btn={
      name : "Cheese Burger (Regular)",
      price : 600.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1008"){   
    btn={
      name : "Bacon Burger ",
      price : 650.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1009"){   
    btn={
      name : "Shawarma Burger ",
      price : 800.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1010"){   
    btn={
      name : "Olive Burger ",
      price : 1800.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1012"){   
    btn={
      name : "Double Cheese Burger ",
      price : 1250.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1013"){   
    btn={
      name : "Chrispy Chicken Burger (Regular)",
      price : 1200.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1014"){   
    btn={
      name : "Chrispy Chicken Burger (Large)",
      price : 1600.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1015"){   
    btn={
      name : "Paneer Burger ",
      price : 1250.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
   //==============================

   if(btn=="B1016"){   
    btn={
      name : "Crispy Chicken Submarine(Large) ",
      price : 2000.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
   //==============================

   if(btn=="B1017"){   
    btn={
      name : "Crispy Chicken Submarine(Regular)",
      price : 1500.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
   //==============================

   if(btn=="B1018"){   
    btn={
      name : "Chicken Submarine(Large) ",
      price : 1800.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
   //==============================

   if(btn=="B1019"){   
    btn={
      name : "Chicken Submarine(Regular) ",
      price : 1400.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
   //==============================

   if(btn=="B1020"){   
    btn={
      name : "Grinder Submarine ",
      price : 2300.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
   //==============================

   if(btn=="B1021"){   
    btn={
      name : "Cheese Submarine ",
      price : 2200.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
   //==============================

   if(btn=="B1022"){   
    btn={
      name : "Double Cheese n Chicken Submarine  ",
      price : 1900.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1023"){   
    btn={
      name : "Special Horgie Submarine ",
      price : 2800.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
  //==============================

  if(btn=="B1024"){   
    btn={
      name : "MOS Special Submarine  ",
      price : 3000.00,
      dom :"2025-03-26",
      exp :"2025-03-30"
    }
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
      showConfirmButton: false,
      timer: 1500
    });

    array.push(btn);
  }
//==============================

if(btn=="B1025"){   
  btn={
    name : "Steak Fries (Large) ",
    price : 1200.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1026"){   
  btn={
    name : "Steak Fries (Medium) ",
    price : 600.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1027"){   
  btn={
    name : "French Fries (Large)  ",
    price : 800.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1028"){   
  btn={
    name : "French Fries (Medium)   ",
    price : 650.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1029"){   
  btn={
    name : "French Fries (Small)   ",
    price : 450.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1030"){   
  btn={
    name : "Sweet Potato Fries (Large)    ",
    price : 600.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1031"){   
  btn={
    name : "Chicken n Cheese Pasta     ",
    price : 1600.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1032"){   
  btn={
    name : "Chicken Penne Pasta     ",
    price : 1700.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1033"){   
  btn={
    name : "Ground Turkey Pasta Bake    ",
    price : 2900.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1034"){   
  btn={
    name : "Creamy Shrimp Pasta     ",
    price : 2000.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1035"){   
  btn={
    name : "Lemon Butter Pasta     ",
    price : 1950.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1036"){   
  btn={
    name : "Tagliatelle Pasta      ",
    price : 2400.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1037"){   
  btn={
    name : "Baked Ravioli       ",
    price : 2000.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1038"){   
  btn={
    name : "Fried Chicken (Small)       ",
    price : 1200.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1039"){   
  btn={
    name : "Fried Chicken (Regular)       ",
    price : 2300.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1040"){   
  btn={
    name : "Fried Chicken (Large)       ",
    price : 3100.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1041"){   
  btn={
    name : "Hot Wings (Large)       ",
    price : 2400.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1042"){   
  btn={
    name : "Devilled Chicken (Large)",
    price :900.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}

//==============================

if(btn=="B1043"){   
  btn={
    name : "BBQ Chicken (Regular)",
    price :2100.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1044"){   
  btn={
    name : "Pepsi(330ml)",
    price :990.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1045"){   
  btn={
    name : "Coca-Cola(330ml)",
    price :1230.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1046"){   
  btn={
    name : "Sprite(330ml)",
    price :1500.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}
//==============================

if(btn=="B1047"){   
  btn={
    name : "Mirinda(330ml)",
    price :850.00,
    dom :"2025-03-26",
    exp :"2025-03-30"
  }
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: btn.name+" : Rs "+btn.price+".00\n"+"Your Order Added Succsfully",
    showConfirmButton: false,
    timer: 1500
  });

  array.push(btn);
}


 }
