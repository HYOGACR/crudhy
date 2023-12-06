class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
 
class UI {
    addProduct(product) {
       const productlist = document.getElementById('product-list');
       const element = document.createElement('div');
       element.innerHTML = ` 
            <div class="card text-center mb-4">
               <div class="card-body">
                <strong>Nombre del Producto</strong>: ${product.name}
                <strong>Precio del Producto</strong>: ${product.price}
                <strong>Año del producto</strong>: ${product.year}
                <a  href="#" class="btn btn  btn.prymary btn-outline-warning" name ="delete">Eliminar</a>
               </div> 
            </dic>
       `;
       productlist.appendChild(element);
       this.resetForm();
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }
    deleteProduct(element) {
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto eliminado', 'danger')
        }
    }
    showMessage(message, cssClass) {
      document.createElement('div');
      div.className = `alert alert-${cssClass} mt-2`;
      div.appendChild(document.createTextNode(message));
      /// Showing in DOM
      const conatiner = document.querySelector('.container');
      const app =document.querySelector('#App');
      conatiner.insertBefore(div, app);
      setTimeout(function (){ 
        document.querySelector('.alert').remove();
      }, 2000);

      
    }
}

// Dom Events
document.getElementById('product-form')
.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);

    const ui =new UI();
    ui.addProduct(product);


    e.preventDefault();
});


const apiUrl = 'http://localhost/phpmyadmin/index.php?route=/database/structure&db=productos';
const data = {
    name: 'nombreproducto',
    price: 'precioproducto',
    year: 'añoproducto',
};

const requestOptions = {
    method: 'Post',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify(data)
};

fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('error',error);
    });