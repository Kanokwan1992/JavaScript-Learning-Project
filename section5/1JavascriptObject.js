let product = {
  name: 'พัดลม',
  price: 890,
  color: 'black',
  category: 'Electrical Machines',
  displayProduct: function () {
    return (
      'ชื่อสินค้า = ' +
      this.name +
      ' สี = ' +
      this.color +
      ' ราคา = ' +
      this.price +
      ' ราคา = ' +
      this.price +
      ' ประเภทสินค้า = ' +
      this.category
    );
  },
  discount: function () {
    return this.price - 200;
  },
};
// console.log('ชื่อสินค้า', product.name);
// console.log('สี', product.color);
// console.log('ราคา', product.price);
// console.log('ประเภทสินค้า', product.category);
console.log(product.displayProduct());
console.log(product.discount());

// let p = [];
// p.push(product);
// p.push(product);
// console.log(p);

let user = {
  name: 'Nice',
  age: 24,
  email: 'niceand2556@gmail.com',
  getUser: function () {
    return this.name + ' ' + this.email;
  },
};
// let data = user.getUser();
// console.log(data);
