//Em xin phép note hơi nhiều để tiện đọc code ạ
let fetched = 'false'; //Đặt để đảm bảo lấy hàng thành công
let product = null; 
async function getProduct (){
    if(fetched == 'false'){
        product = await fetch ("https://dummyapi-0uzr.onrender.com/products");
        product = await product.json();        
        fetched = 'true'; // nếu lấy được hàng thì chuyển qua true
        data = JSON.stringify(product);
        console.log (product);
        console.log(fetched);
        return product;
    }
}
console.log(getProduct()); 

//Nhiệm vụ là lấy product và đưa nó vào hàm bài trước
//unit_price và tag không in hoa chữ cái đầu =((
//price là số viết liền 

function autocapitalize (unit_price_or_tag) { // Khi nhập tham số thì nó tự động viết hoa chữ cái đầu
    const data1 = unit_price_or_tag.split (" "); 
    // Split để text khi nhập sẽ tự động tách (tham khảo thêm trên gg)
    // Khúc này chỉ tách chứ chưa in hoa
    for (let i = 0; i< data1.length; i++){ // Cho i chạy đến hết độ dài chữ
        data1[i] = data1[i][0].toUpperCase() + data1[i].substr(1).toLowerCase();
        //Khi i chạy thì ta lấy hết giá trị i đưa thành array của data
        //Lấy index đầu (số 0) in hoa (toUpperCase)
        //Lấy các index sau (từ 1 trở đi)(substr) rồi viết thường (toLowerCase)
    }
    return data1.join(" "); //data đang là array[ele1,ele2,...] nên cần join lại thành 1 str
}

function format_price(price){ //nhìn hơi thủ công nhưng mà nó dễ hiểu =))
    let data2 = Array.from(String(price));
    data2.splice(1,0,".");
    data2.splice(5,0,".");
    return data2.join(" ");
}

function choose_product(product) { 
    if (product.tag) { //lấy 'key' tag của product
        product.tag = autocapitalize(product.tag) //viết hoa tag
    }
    if (product.image) {
        product.image = "data:image/png;base64," + product.image;
    }
    product.price = format_price(product.price); //tự thêm dấu chấm vô price
    product.unit_price = autocapitalize(product.unit_price); //viết hoa unit_price
}
const a = document.getElementById('sec1-img');
console.log(a);