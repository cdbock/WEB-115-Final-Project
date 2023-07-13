function generateMealPlan() {
    // Get the user input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;
    var breakfast = document.getElementById("breakfast").value;
    var snack1 = document.getElementById("snack1").value;
    var lunch = document.getElementById("lunch").value;
    var snack2 = document.getElementById("snack2").value;
    var dinner = document.getElementById("dinner").value;

    // Perform email validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Generate the dynamic meal plan page
    var mealPlanPage = `
      <html>
      <head>
        <title>Meal Plan</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
      </head>
      <body>
        <header>
          <h1>Meal Plan for ${name}</h1>
          <h3>Email: ${email}</h3>
          <h3>Weekly Goal:</h3>
          <p>${goal}</p>
        </header>
  
        <h2>Meal Plan</h2>
        <table>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Snack 1</th>
            <th>Lunch</th>
            <th>Snack 2</th>
            <th>Dinner</th>
          </tr>
          <tr>
            <td>Monday</td>
            <td>${breakfast}</td>
            <td>${snack1}</td>
            <td>${lunch}</td>
            <td>${snack2}</td>
            <td>${dinner}</td>
          </tr>
          <!-- Repeat the above row for the remaining days of the week -->
        </table>
      </body>
      </html>
    `;
  
    // Open the generated meal plan page in a new window
    var mealPlanWindow = window.open();
    mealPlanWindow.document.write(mealPlanPage);
    mealPlanWindow.document.close();
  }
  
  function clearForm() {
    document.getElementById("mealPlanForm").reset();
  }
  
  function validateEmail(email) {
    // Use a simple regular expression for email validation
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }
  