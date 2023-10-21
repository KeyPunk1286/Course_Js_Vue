//! ==== Умовний рендерінг ====
//* v-if --> елемент генерується тільки тоді, коли умова виконується
//* <div v-if="умова для рендерінгу"></div>

//Todo приклад: вводиться вік працівника. Виводити кнопку реестрації
//Todo тьільки тоді, коли >=18
//Todo const {createApp} = Vue
//Todo     createApp({
//Todo       data(){
//Todo         return{
//Todo           age: null,
//Todo         }
//Todo       },
//Todo       computed:{
//Todo         renderButton(){
//Todo           return this.age && this.age >=18
//Todo         }

//Todo       }
//Todo     }).mount('#app')
//Todo у розмітці треба писати: <button v-if="renderButton">Реестрація</button>



//* v-else -- елемент генерується тоді, коли умова не виконується
//* <div v-else></div>

//Todo приклад:  Користувача заходить на сайт і вводить свій вік.
//Todo Якщо вік менше 16, то вивсти повідомлення про заборону користування
//Todo сайтом, інакше вивести список топ товарів.
const app2 = createApp({
  data(){
    return{
      userAge: null,
    }
  },
  computed:{
    isWorkerAgeValid(){
      return this.userAge && this.userAge >= 18
    }
  }
}).mount('#app2')

//Todo <button v-if="isWorkerAgeValid">Реестрація</button>
//Todo <div v-else>Вибачте але тільки з 18 років</div>


//Todo приклад: Користувача заходить на сайт і вводить свій вік.
//Todo Якщо вік менше 16, то вивсти повідомлення про заборону користування
//Todo сайтом, інакше вивести список топ товарів.

const app3 = createApp({
  data(){
    return{
      valueAge: null,
    }
  },
  computed:{
    isValidateAge(){
      return this.valueAge && this.valueAge >= 16
    }
  }
}).mount('#app3')

//Todo  розмітці :
//Todo  <div id="app3">
//Todo     <span>Введіть свій вік</span>
//Todo     <input type="number" v-model="valueAge">
//Todo     <div>
//Todo       <div v-if="!isValidateAge">вхід заборонено</div>
//Todo       <ul v-else>
//Todo         <li>Шоколад</li>
//Todo         <li>Хліб</li>
//Todo         <li>Молоко</li>
//Todo       </ul>
//Todo     </div>
//Todo     <div>
//Todo       <div v-if="valueAge>18">Пропонємо авто</div>
//Todo       <div v-else>Купи вертоліт</div>
//Todo   </div>


//* Умовгий рендерінг (Рендерінг альтернативних елементів в межах одного
//* контейнера)
//* v-if -- елемент генерується тільки тоді, коли умова виконується
//* v-else-if -- елемент генерується тоді, коли умова виконується
//* v-else -- елемент генерується тоді, коли умова не виконується
//Todo <div v-if="умова"></div>
//Todo <div v-else-if="умова"></div>
//Todo <div v-else-if="умова"></div>
//Todo <div v-else></div>

//Todo Приклад. З клавіатури вводиться кількість грошей
//Todo користувача та ціна товару якщо грошей не вистачає, то повідомити
//Todo скільки ще треба доплатити якщо грошей достатньо на купівлю ще й
//Todo акційного подарунку(100 грн), то запропонувати купити
//Todo (відобразити додаткову кнопку «Купити подарунок»)
//Todo (відобразити додаткову кнопку «Купити подарунок») якщо кількість
//Todo грошей співпадає з вартістю, то вивести смайл
const app5 = createApp({
  data(){
    return{
      userMoneyApp5: null,
      priceApp5: null,
    }
  }
}).mount('#app5')

//Todo У розмітці:
//Todo <div id="app5">
//Todo     <span>Enter money</span>
//Todo     <input type="number" v-model="userMoneyApp5">
//Todo     <span>Enter price</span>
//Todo     <input type="number" v-model="priceApp5">
//Todo     <div v-if="userMoneyApp5<priceApp5">
//Todo       Ще треба добплатити: {{priceApp5-userMoneyApp5}}
//Todo     </div>
//Todo     <div v-else-if="userMoneyApp5-priceApp5>=100">
//Todo       Пропонуємо придбати акційний товар
//Todo       <button>Bay</button>
//Todo     </div>
//Todo     <div v-else-if="userMoneyApp5===priceApp5">:-)</div>
//Todo   </div>


//* Умовний рендеринг декількох елементів з однією умовою :
//* v -if + template - усі елементи всередині template генеруються
//* за виконанянм однієї і тієїж умови
//* <template template v-if= "умова" >
//* ... лочірні елементи ...типу:
//* <h1></h1>
//* <p></p>
//* <div></div>
//* </template>

//Todo  Приклад.Користувач вводить логін.Якщо логін «admin» -
//Todo  відобразити поле для вводу пароля і кнопку «Увійти»,
//Todo інакше – вивести првітання «Раді бачити шановний Гість!»
//Todo const app6 = createApp({
//Todo   data(){
//Todo     return{
//Todo       admin: null,
//Todo       password: null
//Todo     }
//Todo   },
//Todo   computed:{
//Todo     isAdmin(){
//Todo       return this.admin === 'admin'
//Todo     }
//Todo   }
//Todo }).mount('#app6')

//Todo у розмітці:
//Todo <div id="app6">
//Todo     <span>Enter_login</span>
//Todo     <input type="text" v-model="admin">
//Todo     <template v-if="isAdmin">
//Todo       <span>Passord</span>
//Todo       <input type="password" v-model="passord">
//Todo       <button>enter</button>
//Todo     </template>
//Todo     <div v-else>Hello! guest :-)</div>
//Todo   </div>


//* Умовне відображення:
//* v-show -- елемент генерується, але не відображається
//* (застостовується стиль display: none), якщо умова не виконується
//* <div v-show="умова"></div>

//Todo Приклад:при натисканні на кнопку кожну секунду генерується випадкове
//Todo число. Якщо число парне, то кнопка зникає, непарне - з'являється
//Todo const app7 = createApp({
//Todo   data(){
//Todo     return{
//Todo       randomNum: 1
//Todo     }
//Todo   },
//Todo   computed:{
//Todo     isShowButton(){
//Todo       return this.randomNum && this.randomNum  % 2 !== 0
//Todo     }
//Todo   },
//Todo   methods:{
//Todo     isGenerativeNum(){
//Todo       setInterval(() => {
//Todo         return this.randomNum = Math.floor(Math.random() * 10)
//Todo       }, 3000);
//Todo     }
//Todo   }
//Todo }).mount('#app7')

//Todo у розмітці пишемо:
//Todo button v - show="isShowButton" @click="isGenerativeNum" > Згенерувати</button >