//! ==== Рендерінг списків ====

//* v-for з діапазонами (зробити вказану кількість екземплярів елемента)
<div v-for="лічильник in кількість повторень"></div>
//* тобто лічільник змінеться від 1 до кількість повторів

//Todo приклад: згенерувати 10 рандомних чисел від 0 до 15
    const {createApp} = Vue
    const app1 = createApp({
      methods:{
        isRandomNum(){
        return Math.floor(Math.random()*15)
        }
      }
      }).mount('#app1')
      
//Todo у розмтці пишемо так:
// Todo  <div id="app1">
// Todo     <div v-for="i in 10">{{isRandomNum()}}</div>
// Todo   </div>


//* v-for з діапазонами (зробити вказану кількість екземплярів елемента)
//* тобто назва лічильніка можна як шаблон для відображення {{лічильник}}

//Todo Приклад такий самий як попередній , але з відображенням лічильника
//Todo у шаблоні : <div v-for="i in 10">{{i}} - {{isRandomNum()}}</div>


//* Створення екземплярів декількох елементів без спільного батьківського
//* елемента
//* <template v-for="лічильник in кількість повторень">
//* <div></div> елементи які тре створювати
//* <div></div> вставляємо в середину
//* ...
//* </template>

//Todo Приклад. Генерується 5 чисел (від 0 до 10) Вивести числа від 1 до 5
//Todo Для кожгого із чисел вивести число, його квадрат, та його куб
//Todo  <template v-for="i in 5">
//Todo       <h3>{{i}}</h3>
//Todo       <div>{{i}} ^ 2 = {{i*i}}</div>
//Todo       <div>{{i}} ^ 3 = {{i*i*i}}</div>
//Todo </template>


//Todo Приклад. Дано масив з побажаннями. Вибрати випадковим чином 4 із них
const app4 = createApp({
  methods:{
    isRandomWish(){
      const random = Math.floor(Math.random() * wishes.length)
      return wishes[random].wish
    }
  }
}).mount('#app4')
//Todo у розмітці : <div v-for="i in 4">{{isRandomWish()}}</div>


//* Рендеринг списків (на основі даних кожного з елементів списку
//* генеруємо новий елемент)
//* <div v-for="елемент in список" :key="унікальинй індитифікатор"></div>
//* якщо потрібен index :
//* <div
//* v -for= "(елемент, индекс елемента) in список"
//* : key = "унікальинй індитифікатор" >
//* </div >

//Todo Приклад.Дано список об’єктів з інформацією
//Todo про товари. Вивести їх
const app5 = createApp({
  data(){
    return{
      productList:[
        {
          id:1,
          title: 'Milk',
          price: 90,
        },
        {
          id:1,
          title: 'Tea',
          price: 10,
        },
        {
          id:1,
          title: 'Milk',
          price: 90,
        },
        {
          id:1,
          title: 'Bread',
          price: 50,
        },
      ]

    }
  }
}).mount('#app5')
//Todo у розмітці пишемо:
//Todo  <div v-for="product in productList" :key="product.id">
//Todo       <div>{{}} {{product.title}}</div>
//Todo       <div>Price: {{product.price}}</div>
//Todo       <hr>
//Todo     </div>


//* Приклад з використанням індекса там де :key="index" і цей індекс
//* використовуєш в якості індивідуального індетифікатора

//Todo Приклад. Дано масив з даними про книги. Вивести його
const app6 = createApp({
  computed:{
    books(){
      return bookList
    }
  }
}).mount('#app6')
//Todo у розмітці пишемо:
//Todo  <template v-for="(book, index) in books" :key="index">
//Todo       <h3>{{index+1}} : {{book.author}}</h3>
//Todo       <h4>{{book.title}}</h4>
//Todo       <img :src="book.img">
//Todo       <div>{{book.price}}</div>
//Todo       <hr>
//Todo     </template>



//* Виявлення зміни масиву ​Vue здатний виявляти,коли викликаються методи
//* мутації(змінюють масив) реактивного масиву, і запускати необхідні
//* оновлення.Цими методами мутації є:
//* push()
//* pop()
//* shift()
//* unshift()
//* splice()
//* sort()
//* reverse()

//Todo приклад. Розробити список покупок. Користувач у формі поступово
//Todo додає назву товару і кількість і товари  поступово додаються у
//Todo список покупок
const app7 = createApp({
  data(){
    return{
      nameProduct:null,
      numProduct: null,
      listProduct: [],
    }
  },
  methods:{
    addProduct(){
        this.listProduct.push(
        {
          title: this.nameProduct,
          count: this.numProduct,
        }
      )
      this.nameProduct = null,
      this.numProduct = null
    },
    clearList(){
      this.listProduct = []
    }
  },
}).mount('#app7')

//Todo у розмітці :
//Todo  <div id="app7">
//Todo     <div>
//Todo       <span>Назва товару</span>
//Todo       <input type="text" v-model="nameProduct">
//Todo     </div>
//Todo     <div>
//Todo       <span>Кількість</span>
//Todo       <input type="number" v-model="numProduct">
//Todo     </div>
//Todo     <div><button @click="addProduct">Додати</button></div>
//Todo     <div>
//Todo       <h4>Список продуктів</h4>
//Todo       <p v-for="(product, index) in listProduct" :key="index">
//Todo         {{index+1}}:{{product.title}} - {{product.count}}
//Todo       </p>
//Todo       <div><button @click="clearList">Видалити</button></div>
//Todo   </div>
//Todo   </div> 