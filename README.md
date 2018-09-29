
## Budgety
&nbsp;
<img src='img/budgety__main-picture.png' width='100%' alt=''>

### Introduction
Budgety is a simple but handy application for calculating travel budget

### Features
- Travel budget calculation
- Planning your travel budget
- Customizable categories for expenses
- Check ratis of expenses to budget

### Built with
HTML5, CSS3, Javascript(ES5 only)

### Planning Step-1
<img src='img/Budgety__step-1.jpg' height='400px' width='100%' alt=''>
Users will input datas such as expenses' description, type, quantity and its value, and hit the input button or return(or enter) key. After that, the application will process datas and display on the user interface. To do this, the following are need to be done.
<br><br>
&nbsp;1. First, set event handler for the input button.<br>
&nbsp;2. Get the data values after users input datas. <br>
&nbsp;3. Add datas to the internal data structure and print out them on the UI.<br>
&nbsp;4. Calculate budget, balance and percentage and display them on the UI.<br>
<br>
In other words, the followings are the tasks that should be built.<br>
&nbsp;- Add event handler<br>
&nbsp;- Get input values<br>
&nbsp;- Add a new item to our data structure<br>
&nbsp;- Calculate budget<br>
&nbsp;- Update the UI<br>
<br>
As you can see, some tasks have to do with the user interface and some with internal data manipulation. So I could create modules for each of these task-related items. In this case, UI module and Data module. In addition to the two module, I could create a control module to control the entire app and act as a link betweeen the other two modules.
<br>
<br>
<img src='img/Budgety__architecture-step-1.jpg' width='100%' alt=''>

### Planning Step-2
<img src='img/Budgety__step-2.jpg' height='400px' width='100%' alt=''>
In Step-2, I dealt with the functionality of deleting an item from data structure and user interface. I added event handler to the delete button. The application will delete the entire row as soon as the user clicks the delete button as well as from the the data structure.
<br><br>
The followings are that I built in this step.<br>
&nbsp;-Add event handler<br>
&nbsp;-Delete the item from the data structure<br>
&nbsp;-Delete the item from the UI<br>
&nbsp;-re-calculate the budget<br>
&nbsp;-Update the UI<br>
<br>
<img src='img/Budgety__architecture-step-2.jpg' width='100%' alt=''>

### Planning Step-3
<img src='img/Budgety__step-3.jpg' height='400px' width='100%' alt=''>
Lastly, I added a couple of methods to calculate percentages of each expense which represent in percentage of the total budget and to display them on the UI.
<br><br>
I also added methods to display current month and year, and to format numbers.
<br><br>
<img src='img/Budgety__architecture-step-3.jpg' width='100%' alt=''>

### Bug / Feature request
If you find a bug, please kindly open an issue here with your expected result.

Should you have a request to add a new function, please feel free to ask me by opening an issue here.

### License
The MIT License (MIT)

The original version of this appication comes from Jonas's online javascript lecture. I jsut revised and added some features. If you want, you can check the original version at https://www.udemy.com/the-complete-javascript-course/?couponCode=C3RESOURCES1010.