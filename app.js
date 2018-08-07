// BUDGET CONTROLLER
var budgetController = (function() {


})();


// UI CONTROLLER
var UIController = (function() {
    

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

        console.log('It works!')
        // Get the field data input

        // Add a new item to data structure

        // Add a new item on the user interface

        // Clear the fields

        // Calculate and update budget

        // Calculate and update percentage

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })

})(budgetController, UIController);