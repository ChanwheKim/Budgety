
// BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, type, quantity, unitCost, amount) {
        this.id = id;
        this.description = description;
        this.type = type;
        this.quantity = quantity;
        this.unitCost = unitCost;
        this.amount = amount;
    }

    var data = {
        allItems: [],
        totalExpenses: 0,
        budget: undefined,
        balance: '---',
        percentage: 0
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

        testing: function() {
            return data;
        }
    }

})();

var Expense = function(id, description, type, quantity, unitCost, amount) {
    this.id = id;
    this.description = description;
    this.type = type;
    this.quantity = quantity;
    this.unitCost = unitCost;
    this.amount = amount;
}


// UI CONTROLLER
var UIController = (function() {
    var DOMstrings = {
        inputBudget: '.add__budget',
        inputDescription: '.add__description',
        inputType: '.add__type',
        inputQuantity: '.add__quantity',
        inputUnitCost: '.add__unit-cost',
        inputBtn: '.add__btn'
    }
    
    return {
        getInput: function() {
            return {
                budget: document.querySelector(DOMstrings.inputBudget).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                type: document.querySelector(DOMstrings.inputType).value,
                quantity: document.querySelector(DOMstrings.inputQuantity).value,
                unitCost: document.querySelector(DOMstrings.inputUnitCost).value
            }
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
    }

    var ctrlAddItem = function() {
        var input, newItem;

        // 1. Get the field data input
        input = UICtrl.getInput();

        // 2. Add a new item to data structure
        newItem = budgetCtrl.addItem(input.description, input.type, input.quantity, input.unitCost);

        // 3. Add a new item on the user interface

        // 4. Clear the fields

        // 5. Calculate and update budget

        // 6. Calculate and update percentage

    }

    return {
        init: function() {
            console.log('Chanwhe Kim: the application has started. :)')
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();