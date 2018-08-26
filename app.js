
// BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, type, quantity, unitCost, amount) {
        this.id = id;
        this.description = description;
        this.type = type;
        this.quantity = quantity;
        this.unitCost = unitCost;
        this.amount = amount;
        this.percentage = -1;
    }

    Expense.prototype.calcPercentage = function() {
        this.percentage = this.amount / data.budget * 100;
    }

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    }

    var data = {
        allItems: [],
        totalExpenses: 0,
        budget: -1,
        balance: '---',
        percentage: -1
    }

    return {
        addItem: function(des, type, qty, price) {
            var ID, amt, newItem;

            // Create new ID
            if(data.allItems.length === 0) {
                ID = 0;
            } else {
                ID = data.allItems[data.allItems.length -1].id +1;
            }

            // Calculate amount
            amt = qty * price;

            // Create a item
            newItem = new Expense(ID, des, type, qty, price, amt);

            // Save it to the data structure
            data.allItems.push(newItem);

            // Return the new item
            return newItem

        },

        deleteItem: function(ID) {
            var ids, index;

            ids = data.allItems.map(function(cur) {
                return cur.id;
            })

            index = ids.indexOf(ID);

            if(index !== -1) {
                data.allItems.splice(index, 1);
            }
            
        },

        calculateTotalExpenses : function() {
            var total = 0;
            data.allItems.forEach(function(cur) {
                 total += cur.amount;
            })
            data.totalExpenses = total;
        },

        calculateBalance: function(budget) {
            // 1. Update Budget into data structure
            data.budget = budget;

            // 3. Calculate balances
            data.balance = data.budget - data.totalExpenses;

            // 4. Calculate percentage
            data.percentage = Math.round((data.totalExpenses / data.budget) * 100);

        },

        calculatePercentages: function() {
            data.allItems.forEach(function(cur) { cur.calcPercentage();});
        },

        getPercentages: function() {
            var allPerc = data.allItems.map(function(cur) {
                return cur.getPercentage();
            });
            return allPerc;
        },

        getTotalExpenses: function() {
            return data.totalExpenses
        },

        getBudget: function() {
            return {
                budget: data.budget,
                balance: data.balance,
                percentage: data.percentage
            }
        },

        testing: function() {
            return data;
        }
    }

})();

// UI CONTROLLER
var UIController = (function() {
    var DOMstrings = {
        inputBudget: '.add__budget',
        inputDescription: '.add__description',
        inputType: '.add__type',
        inputQuantity: '.add__quantity',
        inputUnitCost: '.add__unit-cost',
        inputBtn: '.add__btn',
        lastLineOfList: '.expenses__total',
        expensesLabel: '.budget__expenses--value',
        expensesLabelSub: '.expenses__total__amount-value',
        balanceLabel: '.budget__balance',
        percentageLabel: '.budget__expenses--percentage',
        container: '.expenses__list'
    }
    
    return {
        getInput: function() {
            return {
                budget: parseInt(document.querySelector(DOMstrings.inputBudget).value),
                description: document.querySelector(DOMstrings.inputDescription).value,
                type: document.querySelector(DOMstrings.inputType).value,
                quantity: parseInt(document.querySelector(DOMstrings.inputQuantity).value),
                unitCost: parseFloat(document.querySelector(DOMstrings.inputUnitCost).value)
            }
        },

        addListItem: function(obj) {
            var html, newHtml;

            // Create HTML string with placeholder text
            html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="item__type">%type%</div><div class="item__quantity">%quantity%</div><div class="item__unit-cost">%unitCost%</div><div class="right clearfix"><div class="item__value">%amount%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            // Replace the placehollder text with actual datas
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%type%', obj.type);
            newHtml = newHtml.replace('%quantity%', obj.quantity);
            newHtml = newHtml.replace('%unitCost%', obj.unitCost);
            newHtml = newHtml.replace('%amount%', obj.amount);

            // Insert the HTML into the DOM
            document.querySelector(DOMstrings.lastLineOfList).insertAdjacentHTML('beforebegin', newHtml);

        },

        deleteListItem: function(selectedID) {
            var el = document.getElementById(selectedID);
            el.parentNode.removeChild(el);
        },

        clearFeilds: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputType + ', ' + DOMstrings.inputQuantity + ', ' + DOMstrings.inputUnitCost);
            
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(cur) {
                cur.value = '';
            })

            fieldsArr[0].focus();
            
        },

        displayTotalExpenses: function(total) {
            document.querySelector(DOMstrings.expensesLabel).textContent = '- ' + total;
            document.querySelector(DOMstrings.expensesLabelSub).textContent = '- ' + total;
        },

        displayBudget: function(budget) {
            document.querySelector(DOMstrings.balanceLabel).textContent = budget.balance;
            document.querySelector(DOMstrings.percentageLabel).textContent = budget.percentage + '%';
        },

        getDOMstrings: function() {
            return DOMstrings
        }
    }

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
            }
        })

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    }

    var updateExpenses = function() {
        
        // 1. Calculate expenses and update into data structure
        budgetCtrl.calculateTotalExpenses();

        // 2. Return total expenses
        var totalExpenses = budgetCtrl.getTotalExpenses();

        // 3. Display total expenses on the user interface
        UICtrl.displayTotalExpenses(totalExpenses);

    }

    var updateBudget = function(budget) {

        // 1. Update budget and balance
        budgetCtrl.calculateBalance(budget);

        // 2. Return the datas
        var obj = budgetCtrl.getBudget();

        // 3. Display the budget and balance on the UI
        UICtrl.displayBudget(obj);

    }

    var updatePercentages = function() {

        // 1. Calculate percentages
        budgetCtrl.calculatePercentages();

        // 2. Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();

        // 3. Update the UI with the new percentages
        console.log(percentages);
    }

    var ctrlAddItem = function() {
        var input, newItem;

        // 1. Get the field data input
        input = UICtrl.getInput();

        if(input.description !== '' && input.type !== '' && input.quantity > 0 && input.unitCost > 0) {

            // 2. Add a new item to data structure
            newItem = budgetCtrl.addItem(input.description, input.type, input.quantity, input.unitCost);
    
            // 3. Add a new item on the user interface
            UICtrl.addListItem(newItem);
    
            // 4. Clear the fields
            UICtrl.clearFeilds();
    
            // 5. Update total expenses
            updateExpenses();
    
            // 6. Update budget and calculate balance
            if(input.budget > 0) {
                updateBudget(input.budget);
            }
    
            // 7. Calculate and update percentage
            updatePercentages();
        }

    }

    var ctrlDeleteItem = function(event) {
        var itemID, splitID, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {
            
            splitID = itemID.split('-');
            ID = parseInt(splitID[1]);

            // 1. Delete the item from the data structure
            budgetCtrl.deleteItem(ID);
    
            // 2. Delete the item from the UI
            UICtrl.deleteListItem(itemID);

            // 3. Update total expenses
            updateExpenses();
    
            // 3. Update and show the new budget
            var budget = UICtrl.getInput().budget;
            updateBudget(budget);
            
        }
    };

    return {
        init: function() {
            console.log('Chanwhe Kim: the application has started. :)')
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();