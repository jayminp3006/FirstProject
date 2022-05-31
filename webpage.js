function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction1() {
    var x = document.getElementById("myDIV1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  function invoice() {
  
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;

    var q_jacket = document.getElementById("q_jacket").value;
    var q_tshirt = document.getElementById("q_tshirt").value;
    var q_caps = document.getElementById("q_caps").value;
  
    if (name == "" && number == "") {
      alert("fill the user details");
      return false;
    }
  
    var numbers = /^[0-9]+$/;
  
    if (name == "") 
    {
      alert("Please enter name")
    } 
    else 
    {
      if (number == "") 
      {
        alert("Please enter Email id")
      } 
      else {
             document.write("Invoice");
              document.write("<hr/>");
          document.write("Hello," + name + "<br/>");
          document.write("<hr/>");
          document.write("<b>Product Name &nbsp;&nbsp;&nbsp;&nbsp; Quantity &nbsp;&nbsp;&nbsp;&nbsp; Sub total</b><br/>")
          document.write("<hr/>")
          var Sub_total = 0;
            if (q_tshirt >= 0 && q_tshirt != numbers) 
            {
              var price = 18 * q_tshirt;
              Sub_total = Sub_total + price;
              document.write("T-Shirts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + q_tshirt + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $" + price + "<br/>");
            }
            else {
              alert("Invalid Quantity");
              return false;
            }
          
            if (q_jacket >= 0 && q_jacket != numbers)  
            {
              var price = 50 * q_jacket;
              Sub_total = Sub_total + price;
              document.write("Jackets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + q_jacket + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $" + price + "<br/>");
            }
            else {
              alert("Invalid Quantity");
              return false;
            }
          
            if (q_caps >= 0 && q_caps != numbers) 
            {
              var price = 10 * q_caps;
              Sub_total = Sub_total + price;
              document.write("Caps &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + q_caps + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $" + price + "<br/>");
            }
            else {
              alert("Invalid Quantity");
              return false;
            }
  
            var TotalTax = Sub_total * 0.13;
            var final_price = TotalTax + Sub_total;
              document.write("<hr/>");
              document.write("Total Tax(13%):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$ " + TotalTax + "</b><br/>");
              document.write("Total :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>$ " + final_price + "</b><br/>");
              
        }
      }
    }
  
  
  