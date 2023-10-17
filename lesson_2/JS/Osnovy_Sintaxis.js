//! ==== Особливості Vue ====
//* Працює на базі звичайного HTML, CSS та JS (низький порог старту)
//Todo декларативний ренедерінг: Vue розширює стандартний HTML шаблонним
//Todo синтаксисом, який дозволяє нам декларативно задавати стуктуру
//Todo HTML на основі стану описаного JS

//* Широко використовується компонентний підхід до розробки Single File
//* Component(SFC)

//* Зручний для створення одно-сторінкового додатку (Single Page
//* Application - SPA)

//* Можливість розробки додатків з рендерингом на стороні серверу (SSR)

//* Генерація статичного додатку (SSG)

//* Дозволяє використання у інших вже готових проєктах, розширюючи їх
//* функціональність

//* Гнучкість у використанні сторонніх рішень та компонентів

//* Наявність готових інструментів та бібліотек

//* Можливість розробки десктопних додатків, мобільних додатків та ін.
//* (https://ua.vuejs.org/guide/extras/ways-of-using-vue.html)

//* Наявність зручної і вичерпної документації
//* (https://ua.vuejs.org/guide/introduction.html)

//*  Велика спільнота розробників


//! ==== Основи синтаксису ====
//* 1. Створюємо HTML файл, або відкриваємо вже існуючий файл, у який
//* хочемо додати Vue елементи
/* 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html> 
*/
//* 2. Додаємо посилання на Vue <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
/* 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  
</body>
</html> 
*/
//* 3. Додаємо контейнер, у якому хочемо виводити результат (наприклад, це буде div)
/* 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app"></div>
</body>
</html> 
*/
//* 4. Створюємо екземпляр додатку та монтуємо його (це вже в скріпте)
//Todo 1 імпортуємо createApp
const { createApp } = Vue
//Todo 2 створюємо об'єкт додатку
const app = createApp({}) //? тут буде весь наш код(данні, очислення ітд)
//Todo 3 монтуємо додаток
app.mount('#app')

//* 5. Додаємо моделі даних, як властивості об’єкта, що повертає функція
//* data



//Todo створюємо об'єкт додатку
const app2 = createApp({
  //Todo описуємо моделі даних(властивості)
  data() {
    return {
      //Todo властивість1: значення1,
      //Todo властивість2: значення2,
      //Todo ітд
      //* Опис моделей даних. Опція data:
      //* -- моделі даних є реактивними (при їх зміні автоматично оновлюються
      //* відповідні елементи розмітки та перераховуються залежні від них величини)
      //* -- функція data повинна повертати об’єкт даних(з описом реактивних
      //*   моделей даних)
      //* -- усі потрібні реактивні моделі даних повинні бути описані у data
      //* (навіть якщо початкові значення null або undefined(в іншому разі
      //* вони не будуть реактивними !!! )
      //* --  моделі даних додаються як властивості екземпляра додатку
      //* --  у шаблоні дані доступні лише за назвою
      //* --  у методах дані доступні через this
      //* приклад:
      message: 'Welcome',
      price1: 100,
      price2: 150,
    }
  }
})


//* Використовуємо дані всередині контейнеру, де змонтовано додаток
//* Інтерполяція тексту <тег>{{дані}}</тег>, <тег>{{price1 + price2}}</тег>
//* Треба пам'ятати складні вирази краще не писати тут .


//* 6 . Використовуємо дані як значення атрибутів (одностороння
//* прив’язка: зміна даних --> зміна атрибуту)
//* значення атрибутів задаємо за схемою:
//Todo <тег v-bind:атрибут="значення" >...</тег>
//Todo <тег :атрибут="значення" >...</тег>  скорочена форма, головне
//Todo головне щоб попереду атрибута було ':' двокрапка, вона і говорить
//Todo о том що значення буде обчислюватись. І буде братись з `data`


//*7 динамічні значення назв атрибутів. (тільки маленькими літерами)
//Todo <тег v-baind:[назва_атрибуту]="значення" >...</тег>
//Todo <тег :[назва_атрибуту]="значення" >...</тег> так само і скоротчений



//! ==== Двостороння прив'язка даних ====
//* -- Зміна значення в input --> зміна значення змінної-моделі
//* -- Зміна моделі --> зміна значення в input

//Todo значення атребутів задаємо за схемою:
//Todo <тег v-model="змінна_модель">...</тег>
//Todo з використанням модифікаторів(lazy, number, trim):
//Todo <тег v-model.модификатор="змінна_модель">...</тег>

//Todo !Задача! Розробити конвертер валют.Вводиться курс долара, та кількість гривень.
//Todo Вивести кількість доларів:

//* const {createApp} = Vue
//* createApp({
//* data(){
//* return{
//* dolllarRate: 38,
//* grnSum:null,
//* dollarSum:null,
//* }
//* }
//* }).mount('#app')
//* <input type="number" v-model="dolllarRate">
//* <input type="number" v-model="grnSum">
//* <input type="number" :value="grnSum/dolllarRate">



//! ==== Опис методів. Опція methods ====
//* • методи описуємо у розділі methods
//* • не використовуємо стрілкових функцій!
//* • для звертання до даних та методів екземпляру додатку використовуємо this
//* • викликається кожного разу, якщо змінюються реактивні дані, які фігурують
//*   у функції
//Todo приклад:
//Todo methods: {
//Todo   getSum(){
//Todo     return this.num1 + this.num2
//Todo   }
//Todo }



//! ==== Обчислювальні властивості. Опція computed
//* обчислювальні властивості описуємо у розділі computed

//* значення обчислюється на основі інших даних, можливо реактивних
//* (з розділів data або computed)

//* для звертання до даних та методів екземпляру додатку використовуємо this

//* значення перераховується кожного разу, коли змінюються реактивні дані,
//* на основі яких обчислюється значення цієї властивості

//* значення хешуються (один раз обчислили і запамятали, якщо реактивні змінні,
//* на основі яких обчислюється значення не змінилися, то наступного разу
//* при звертанні буде повернуто збережене значення)

//* можуть описуватися як функції, що обов’язково повертають значення
//* (значення інших властивостей можна тільки зчитувати, зміна заборонена!)
//Todo приклад:
//Todo const app = createApp({
//Todo computed: {
//Todo   property_1(){
//Todo     return computed_value1
//Todo     }
//Todo   },

//* можуть описуватись як об’єкти з методами get, set (у методі set
//* допускається зміна інших даних)
//Todo приклад:
//Todo property_2:{
//Todo getComputedStyle(){
//Todo   return computed_value_2
//Todo },
//Todo setInterval(newValue){
//Todo   // опрацьовуємо нове значення
//Todo }
//Todo }
//Todo })


//! ==== Опрацювання подій ====
//* значення атрибутів задаємо за схемою:
//Todo <т v-on:подія="обробник"></тег> це старий варіант
//Todo <тег @подія="обробник"></тег> це новий варіант скоротчена форма