//! ==== Прив'язування класів і стилей ====
//* Статичний клас - це звичайний css клас

//* Дінамічний клас(або обчислювальний css клас)
//* у залежності від значення даних використовуємо
//* один з наперед визначених статичних класів.

//Todo Динамічне визначення класу(у залежності
//Todo від даних застосувати один з класів)

const { createApp } = Vue 
const app1 = createApp({
  data() {
    return {
      eneryLevel: null
    }
  },
  computed: {
    selctColor() {
      let curectClass
      if (this.eneryLevel >= 80) curectClass = 'High'
      else if (this.eneryLevel >= 30) curectClass = 'middle'
      else curectClass = 'low'
      return curectClass
    }
  }
}).mount('#app')

  //Todo у розмітці вказуємо:
//Todo < input type = "number" v - model="eneryLevel" :class="selctColor">
  

//Todo приклад: Вводиться номер місця пацієнта у черзі. Відображати
//Todo зеленим кольором та 18 шрифтом перший, жовтой та 14 друге
//Todo помаранчевий 12 третте .. синій 10 усі інщі

const app2 = createApp({
  data() {
    return {
      numberPlace: null
    }
  },
  computed: {
    placeClass(){
      let classModel
      switch (this.numberPlace) {
        case 1: classModel = 'first-place'
          break;
        case 2: classModel = 'second-place'
          break;
        case 3: classModel = 'third-place'
          break;
        case 4: classModel = 'fourth-place'
          break;
        }
        return classModel
      },
  }
}).mount('#app2')
//Todo у розмітці пишимо:
//Todo <input type="number" v-model="numberPlace" :class="placeClass">


  //* У залежності від значення даних застосовувати декілька класів 
  //* (масив класів) <тег :клас="[назва першого, н.другого,..]"></тег>
  //? якщо назва класу пишеться у '' лапках то тоді він статичний клас
  
  //Todo приклад. Вводиться рівень заряду батареї:
  //Todo 1 -- у залежності від заряду застосовувати відповідний колір
  //Todo фону, 80 зелений, 30 жовтий, 20 червоний
  //Todo кщщо зарад більше 50% то іконка одна, інакше друга
  
  const app3 = createApp({
    data() {
      return {
        inLowBatarry: null
      }
    },
    computed: {
      chaingeColor(){
        let bgColor = null
        if(this.inLowBatarry){
          if(this.inLowBatarry >= 80) bgColor = 'high'
          else if(this.inLowBatarry >= 40) bgColor = 'middle'
          else bgColor = 'low'
        }
        return bgColor
      },
      chaingeIcon(){
        let icon
        if(this.inLowBatarry){
          icon = this.inLowBatarry  >= 50? 'icon-before' : 'icon-after'
        }
        return  icon
      },
    }
  }).mount('#app3')
//Todo у розмітці :
//Todo <span :class="[chaingeColor, chaingeIcon]">Заряд з іконками</span>
//Todo <input type="number" v-model="inLowBatarry" ></input>

//* умовні статичні класи
//* на перед визначиний клас застосоввати за деякої умови
//* <div :class="{
//*   клас:умова_застосування,
//*   клас:умова_застосування,
//*  }"
//*  v-model="...">
//* </div >

//Todo приклад: вводимо вік працівника. якщо вік працівника блільше за 18
//Todo то колір фону - зелений, якщо поле порожне - колір фону жовтий

const app4 = createApp({
  data(){
    return{
      personeAge: null,
    }
  },
  computed:{
    isWorkerAgeVailde(){
      return this.personeAge && this.personeAge >= 18
    },
    isAgeEmpty(){
      return !this.personeAge
    }
  }
}).mount('#app4')
//Todo У розмітці пишемо:
//Todo  <input type="number"
//Todo   :class="{
//Todo     'allowed': isWorkerAgeVailde,
//Todo     'empty': isAgeEmpty
//Todo   }"
//Todo   v-model="personeAge"
//Todo   > */}


//*  умовно динамічні класи . Наперед визначиний клас застосувати за
//* деякої умови(об'єкт з властивостями-моделями класів(у кваддратних
//* дужках!!!) значенями умовами застосування)

// Todo приклад: користувач вводить вік працівника. Якщо вік користувача
// Todo некорректний(<18) то кнопка реестраціі заблокована, а якщо
//Todo коректний ві користувача < 45, то кнопка зелена, якщо коректний
//Todo вік >= 45  то кнопка синя:

const app5 = createApp({
  data(){
    return{
      personeAge: null,
    }
  },
  computed:{
    isValidPersoneAge(){
      return this.personeAge && this.personeAge >= 18
    },
    statusClass(){
      return this.personeAge < 45? 'young' : 'senior'
    }
  }
}).mount('#app5')

//Todo у розмітці пишемо:
//Todo  <button :class="{
//Todo     [statusClass] : isValidPersoneAge,
//Todo   }"
//Todo   :disabled="!isValidPersoneAge"
//Todo   >Зареєстрватись</button>



//* Декілька динамічних класів: деякі постійно, деякі застосувати за
//* певної умови(ммасив з класами, та об'єктами з умовними класами)
//*   <div
//*   : class="[
//*   модель класу1,(діниамічні постійні класи можуть бути різні з деякої
//*   модель класу2, множини, але завжди один з них застосовується)
//* {
//*   класс1:умова застосування, (класи які застосовються при умові
//*   класс2:умова застосування, умова застосування логічний вираз)
//*   ...
//*   [дин.класс1] : умови ззастосування,
//*   [дин.класс2] : умови ззастосування,
//*   }
//* ]"
//*   ></div>

//Todo прирклад: Вводимо кількість грошей користуача та вартість товару
//Todo ----Динамічний постійний колір кнопки кпити:
//Todo - не введено значення - сірий
//Todo   - недостатньо грошей - червона
//Todo   - достатньо грошей зелена
//Todo ----Динамічні статичні:
//Todo - якщо вартість покупки більше 1000 гр(елітний) - додати жовту рамку
//Todo   - якщо вартість покупки більще 100 000(супер елітний) - додддати тінь
//Todo ----Динамічні умовні шрифт тексту кнопки застосувати якщщо введено:
//Todo - якщо вартість і ціна співпадають - червоний
//Todo - інакше помаранчевий


const app6 = createApp({
      data(){
        return{
          price: null,
          userMoney: null,
        }
      },
      computed:{
        isCompleted(){
          return this.price && this.userMoney
        },
        statusColor(){
          let colorClass
          if(!this.isCompleted) colorClass = 'color-button-grey'
          else if(this.price > this.userMoney) colorClass = 'color-button-red'
          else colorClass = 'color-button-green'
          return colorClass
        },
        txtFont(){
          return this.price === this.userMoney? 'font-red' : 'font-orange'
        },
        isEliteUser(){
          return this.price && this.userMoney > 1000
        },
        isSuperEliteUser(){
          return this.price && this.userMoney > 10000
        }
      }
}).mount('#app6')
    
//Todo у розмітці :
//Todo  <button
//Todo     :class="[
//Todo     statusColor,
//Todo     {
//Todo       'border-button': isEliteUser,
//Todo       'button-shadow': isSuperEliteUser,
//Todo       [txtFont] : isCompleted
//Todo     }
//Todo     ]"
//Todo     >Придбати</button>


