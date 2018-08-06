// BUDGET CONTROLLER
var budgetController = (function() {


})();


// UI CONTROLLER
var UIController = (function() {
    

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function() {
        console.log('Button was clicked.')
    })
    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            console.log('Return-key was pressed.');
        }
    })
    
})(budgetController, UIController);