let products = [
    {
        name:"iphone5",
        price:50000,
        id:5
    },
    {
        name:"iphone6",
        price:60000,
        id:6
    },
    {
        name:"iphone7",
        price:70000,
        id:7
    },
    {
        name:"iphone8",
        price:80000,
        id:8
    }
];
// Đi mua hàng rồi tính giá tiền phải trả khi mua
        // Kiểm tra xem sản phẩm đang mua có trong giỏ hàng hay chưa
            // Nếu có thì tằng số lượng
            // Nếu không có thì thêm vào giỏ hàng



let cart = [];
function addToCart() {
    let valueInput = document.getElementById("CRUD").value;
    let index = products.findIndex(product => product.name === valueInput)
    if(index !== -1) {
        let cartIndex = cart.findIndex(item =>
            (item.id === products[index].id)
        )
        if(cartIndex === -1) {
            products[index].count = 1;
            cart.push(products[index]);
        }else {
            cart[cartIndex].count+=1;
        }
    }else {
        console.log("khong co san pham nay");
    }
    console.log(cart);
}

