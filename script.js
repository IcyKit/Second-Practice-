var budget = +prompt("Ваш бюджет на месяц?", '');

if (budget < 10) {
    console.log("Ебать ты нищий");

}

var date = prompt("Введите дату в формате YYYY-MM-DD", '');
console.log(date);

let appData = {
    budget: budget,
    expenses: {},
    income: [],
    timeData: date,
    savings: false,
    optionalExpenses: {}
};

    for (i = 0; i < 2; i++) {
        let  a = prompt("Введите обязательную статью расходов в этом месяце", ''),
             b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
             && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses [a] = b;
        }

    };

    appData.moneyPerDay = appData.budget / 30;   

  
  
/* if (appData.moneyPerDay  < 100) {
        console.log("Низкий уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    } */



 /* while (appData.moneyPerDay < 100) {
        console.log("Низкий уровень достатка");
        break;
    }
    while (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
        break;
    }
    while (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
        break;
    } */

    

    
    
    for (i = appData.moneyPerDay; i < 100;) {
        console.log("Низкий уровень достатка");
        break;
    }

    for (i = appData.moneyPerDay; i > 100 && appData.moneyPerDay < 2000;) {
        console.log("Средний уровень достатка");
        break;
    }

    for (i = appData.moneyPerDay; i > 2000;) {
        console.log("Высокий уровень достатка");
        break;
    }

    alert("Ежедневный бюджет: " + appData.moneyPerDay);