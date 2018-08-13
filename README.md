### Budgety
&nbsp;
<img src='img/budgety__main-picture.png' width='100%' alt=''>

#### Introduction
Budgety is a simple but handy application for calculating travel budget

#### Features
- Travel budget calculation
- Planning your travel budget
- Customizable categories for expenses
- Check ratis of expenses to budget

#### Bug / Feature request
If you find a bug, please kindly open an issue here with your expected result.

Should you have a request to add a new function, please feel free to ask me by opening an issue here.

#### Built with
HTML5, CSS3, Javascript(ES5 only)

#### Planning Step-1
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
<img src='img/Budgety__architecture-step-1.jpg' width='100%' alt=''>

#### License
The MIT License (MIT)

The original version of this appication comes from Jonas's online javascript lecture. I jsut revised and added some features. If you want, you can check the original version at https://www.udemy.com/the-complete-javascript-course/?couponCode=C3RESOURCES1010.