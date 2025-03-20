// products
let products;
// localStorage.clear();
// Check if there is an array of products in localStorage
if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
} else {
    // If not, use the default array
    products = [
        {
            product_name: "Giày Nike cao cấp ",
            product_price: "1.599.000đ",
            product_image: "img-giaynike.jpg",
            added_to_cart: false
        },
        {
            product_name: "Tai nghe headphone",
            product_price: "1.699.000đ",
            product_image: "img-headphone.jpg",
            added_to_cart: false
        },
        {
            product_name: "Apple Airpod 3 Pro +++",
            product_price: "4.899.000đ",
            product_image: "img-airpod.jpg",
            added_to_cart: false
        },
        {
            product_name: "Nước ép dứa, nhập khẩu từ châu Phi",
            product_price: "189.000đ",
            product_image: "img-nuocepdua.jpg",
            added_to_cart: false
        },
        {
            product_name: "Combo chăm sóc da den",
            product_price: "199.000đ",
            product_image: "img-nuochoa.jpg",
            added_to_cart: false
        },
        {
            product_name: "Máy ảnh Canon GT650 Plus Ultra Promax",
            product_price: "21.799.000đ",
            product_image: "img-camera.jpg",
            added_to_cart: false
        },
        {
            product_name: "Bí kíp: Vạn tiễn quy tiên - một cân một bầy",
            product_price: "70.599.000đ",
            product_image: "IMG-1448.jpeg",
            added_to_cart: false
        },
        {
            product_name: "Bí kíp võ thuật tối cao - chúng sinh bình đẳng",
            product_price: "999.000.000.000đ",
            product_image: "IMG-1449.jpeg",
            added_to_cart: false
        }
        
    ]

    // Save the default array to localStorage
    localStorage.setItem("products", JSON.stringify(products));
}



// cards
let cards = document.querySelector(".cards");
for (let i = 0; i < products.length; i++) {
    let new_card = document.querySelector(".cards").innerHTML;
    cards.innerHTML = `<div class="card-container">
    <div class="card">
        <img src="${products[i].product_image}" class="card-img" alt="">
        <div class="card-body">
        <div class="list-group">
                <h2 class="card-title">${products[i].product_name}
               </h2>
                <span id="price" class="card-title">${products[i].product_price}</span>
                </div>
                <div class="card-btn">
                <button class="btn" id="view" data-id="${i}">Xem</button>
                <button class="btn_add" id="add" data-id="${i}">Thêm vào giỏ hàng</button>
                <button class="btn_remove" id="remove" data-id="${i}">Xoá khỏi giỏ hàng</button>
                </div>
                </div>
                </div>
                </div>`+ new_card
}


// add product to cart as product
function add_item_to_bag(i) {
    let item = document.querySelector(".items");
    let new_item = document.querySelector(".items").innerHTML;
    item.innerHTML = `
                <div class="item" data-id="${i}">
        <div class="image">
            <img src="${products[i].product_image}" alt="" />
        </div>
        <div class="name">
            <h3>${products[i].product_name}</h3>
        </div>
        <div class="price">
            <span>${products[i].product_price}</span>
        </div>
        <button class="btn_cancel" id="remove_btn" data-id="${i}">x</button>
        </div>`+ new_item
}


// remove product from cart as product
function remove_item_from_bag(num) {
    let item = document.querySelectorAll(".item");
    for (let i = 0; i < item.length; i++) {
        if (parseInt(item[i].getAttribute("data-id")) === num) {
            item[i].remove();
                    number.forEach(n => {
            if (n.textContent > '0') {
                n.textContent--;
            }
        })
            break;
        }
    }
}

// card view
let card_content = document.querySelector(".card_content");
function product_view(i) {
    card_content.innerHTML = `<img src="${products[i].product_image}" class="card-img" alt="">
<div class="card-body">
    <div class="list-group">
        <h2 class="card-title">${products[i].product_name}
            <span id="price">${products[i].product_price}</span>
        </h2>
    </div>
    <div class="card-btn">
    <button class="btn_add" id="add_from_view" data-id="${i}">Thêm</button>
    <button class="btn_remove_product_from_view " id="remove_from_view" data-id="${i}">Xoá</button> 
    </div>
    </div>`
}


// add product to cart as number
let number = document.querySelectorAll(".number");
let add = document.querySelectorAll("#add");
function added() {
    add.forEach((a, i) => {
        a.addEventListener("click", event => {
            number.forEach(n => {
                n.textContent++;
            })
            a.style = "top:100%";
            remove[i].style = "top:0";
            add_item_to_bag(parseInt(event.target.getAttribute('data-id')));
            remove_item_from_bag_button();
        })
    });
}
added();

// remove product from cart as number
let remove = document.querySelectorAll("#remove");
function removed() {
    remove.forEach((r, i) => {
        r.addEventListener("click", event => {
            number.forEach(n => {
                if (n.textContent !== '0') {
                    n.textContent--;
                }
            })
            add[i].style = "top:0";
            r.style = "top:100%";
            remove_item_from_bag(parseInt(event.target.getAttribute('data-id')));
        })
    })
}
removed();




//remove use button
function remove_item_from_bag_button() {
    let remove_button = document.querySelectorAll("#remove_btn");
    remove_button.forEach(r => {
        let x = parseInt(r.getAttribute('data-id'));
        r.onclick = function () {
            add.forEach((a, i) => {
                if (parseInt(a.getAttribute("data-id")) === x) {
                    a.style = "top:0";
                    remove[i].style = "top:100%";
                }
            })
            remove_item_from_bag(x);
            number.forEach(n => {
                if (n.textContent !== '0') {
                    n.textContent--;
                }
            })
        }
    })
}


// show dropdown list of product
let content = document.querySelector(".dropdown-content");
let item = document.getElementById("items");
item.onclick = function () {
    content.style.display = "block";
}

// cancel dropdown list of product
let cancel = document.querySelector("#btn_cancel");
cancel.onclick = function () {
    content.style.display = "none";
}

// cancel quik view
let cancel_view = document.getElementById("btn_cancel_card_view");
cancel_view.onclick = function () {
    card_view.style.display = "none";
}

// add from view
function add_product_from_view() {
    let add_view = document.getElementById("add_from_view");
    add_view.addEventListener("click", event => {
        number.forEach(n => {
            n.textContent++;
        })
        let x = parseInt(event.target.getAttribute('data-id'));
        add_item_to_bag(x);
        remove_item_from_bag_button();
        remove.forEach((r, i) => {
            if (parseInt(r.getAttribute("data-id")) === x) {
                r.style = "top:0";
                add[i].style = "top:100%";
            }
        })
    })
}
// remove from view
function remove_product_from_view() {
    let remove_view = document.getElementById("remove_from_view");
    remove_view.addEventListener("click", event => {
        let x = parseInt(event.target.getAttribute('data-id'));
        remove_item_from_bag(x);
        add.forEach((a, i) => {
            if (parseInt(a.getAttribute("data-id")) === x) {
                a.style = "top:0";
                remove[i].style = "top:100%";
            }
        })
    })
}


// quik view product
let card_view = document.querySelector(".card_view");
let view = document.querySelectorAll("#view");
view.forEach(v => {
    v.addEventListener("click", event => {
        let x = parseInt(event.target.getAttribute("data-id"));
        product_view(x);
        card_view.style.display = "block";
        add_product_from_view()
        remove_product_from_view()
    })
})

