
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


        // history add 

        const historyItem = document.createElement('div')
        historyItem.className = ("bg-white p-3 rounded-md border-l-2 border-indigo-500")
    
        historyItem.innerHTML = `
            <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>    
            <p class="text-xs text-gray-500">Income: $ ${income.toFixed(2)}</p>
            <p class="text-xs text-gray-500">Expenses: $ ${totalExpenses.toFixed(2)}</p>
            <p class="text-xs text-gray-500">Balance: $ ${balance.toFixed(2)}</p>
        `
        const historyList = document.getElementById('history-list')
    
        // appendchild --> korle prottekbar repeat sobar sese asbe
        // insertBefore --> korle repeat a sobar age asbe
        // prepend --> ata korleo repeat a sobar age asbe      // insertBefore & prepend er kaj motamuti same
    
        // insertBefore --> dui ta value accept kore -->
        // 1. ki insert korte chai 2. kothay insert korte chai
        historyList.insertBefore( historyItem, historyList.firstChild)

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


// history Tab functionality

const historyTab = document.getElementById('history-tab')
const assistantTab = document.getElementById('assistant-tab')
const expenseForm = document.getElementById('expense-form')
const results = document.getElementById('results')
const historySection = document.getElementById('history-section')

historyTab.addEventListener('click', function(){

    historyTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    historyTab.classList.remove('text-gray-600')

    assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
   
    expenseForm.classList.add('hidden')
    
    results.classList.remove('hidden')

    historySection.classList.remove('hidden')                   // history section a history ta vigible korar jonno
    // document.getElementById('history-section').classList.remove('hidden')       // varriable na niye eivabe direct o kora jay
    
})

// history tab theke abr assistant tab a switch korar function

assistantTab.addEventListener('click', function(){
    assistantTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    assistantTab.classList.remove('text-gray-600')

    historyTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')

    expenseForm.classList.remove('hidden')
    results.classList.add('hidden')

    historySection.classList.add('hidden') 


})
