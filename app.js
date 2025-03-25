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
    if (item == "BUR001") {
      price = 670 * qty;
      discount = price * 0.02;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    }
    if (item == "BUR002") {
      price = 870 * qty;
      discount = price * 0.03;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    }
    if (item == "BUR003") {
      price = 1070 * qty;
      discount = price * 0.05;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    }
    if (item == "BUR004") {
      price = 670 * qty;
      discount = price * 0.02;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    } if (item == "BUR005") {
      price = 970 * qty;
      discount = price * 0.04;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    } if (item == "BUR006") {
      price = 570 * qty;
      discount = price * 0.02;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    } if (item == "BUR007") {
      price = 999 * qty;
      discount = price * 0.04;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    }
    if (item == "BUR008") {
      price = 1270 * qty;
      discount = price * 0.04;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    }
    if (item == "BUR009") {
      price = 1570 * qty;
      discount = price * 0.05;
      newprice = price - discount;
      Swal.fire({
        title: "Item Placed Succesfully!",
        icon: "success",
        draggable: true
      });
      array.push(order);
    }
    if (item == "BUR010") {
      price = 470 * qty;
      discount = price * 0.02;
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