
// getting all the value


// add event listener for calculate button

document.getElementById('calculate').addEventListener('click', function(event){

    const income = Number(document.getElementById('income').value)
    const software = Number(document.getElementById('software').value)
    const courses = Number(document.getElementById('courses').value)
    const internet = Number(document.getElementById('internet').value)
       
    // console.log({income, software, courses, internet});
    // console.table ({income, software, courses, internet});          // eita console er vitore table akare show kore

    const totalExpenses = software + courses + internet
    const balance = income - totalExpenses

    const totalExpensesElement = document.getElementById('total-expenses')
    totalExpensesElement.innerText = totalExpenses.toFixed(2)

    const totalBalanceElement = document.getElementById('balance')
    totalBalanceElement.innerText = balance.toFixed(2)

    const results = document.getElementById('results')
    results.classList.remove('hidden')
})

// add event listener for savings button

document.getElementById('calculate-savings').addEventListener('click', function(event){

    const income = Number(document.getElementById('income').value)
    const software = Number(document.getElementById('software').value)
    const courses = Number(document.getElementById('courses').value)
    const internet = Number(document.getElementById('internet').value)

    const savingsPacentange = Number(document.getElementById('savings').value)
    
    const totalExpenses = software + courses + internet
    const balance = income - totalExpenses

    const savingAmount = (savingsPacentange * balance) / 100

    const savingElement = document.getElementById('savings-amount')
    savingElement.innerText = savingAmount.toFixed(2)


    const remainingBalance = balance - savingAmount
    
    const remainingElement = document.getElementById('remaining-balance')
    remainingElement.innerText = remainingBalance.toFixed(2)

    
})