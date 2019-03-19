var app = new function () {
    this.productID = document.getElementById('products');
    this.products = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4', 'Apple iPhone 6S', 'Xiaomi Mi 5s Plus', 'Apple iPhone 8 Plus', 'Fujitsu F-04E', 'Oppo A71'];
    
    this.count = function (data) {
        let countID = document.getElementById('counter');
        let name = 'product';
        if (data){
            if (data > 1){
                name = 'products';
            }
            countID.innerHTML = data + '' +name;
        }else {
            countID.innerHTML = 'NO '+ name;
        }
    };
    
    this.display = function () {
        let data ='';
        for (let i=0; i<this.products.length;i++){
            data += '<tr>';
            data += '<td>' + this.products[i]+'</td>';
            data += '<td><button onclick="app.edit('+i+')">Edit</button><td/>';
            data += '<td><button onclick="app.delete('+i+')">Delete</button><td/>';
            data += '<tr/>'
        }
        this.count(this.products.length);
        return this.productID.innerHTML = data;
    };
    this.add = function () {
      let addNameID = document.getElementById('add_name');
      let product = addNameID.value;
      if (product){
          this.products.push(product.trim());
          addNameID.value = '';
          this.display();
      }
    };
    this.edit = function (data) {
        let editNameID = document.getElementById('edit_name');
        editNameID.value = this.products[data];
        document.getElementById('tableEdit').style.display = 'block';
          self = this;
        document.getElementById('saveEdit').onsubmit = function () {
            let product = editNameID.value;
            if (product){
             self.products.splice(data,1,product.trim());
             console.log(this.products);
             console.log(self.products);
             self.display();
                closeTableEdit();
            }
        }
    };
    this.delete = function (data) {
        this.products.splice(data,1);
        this.display();
    }
};
app.display();
function closeTableEdit() {
    document.getElementById('tableEdit').style.display = 'none';
}