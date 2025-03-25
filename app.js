let array = [];

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