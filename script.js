function macheese() {
    let macheese = prompt("Which mac n cheese would you like to prepare? Our tasty selection of consists of: Classic Macaroni and Cheese, Buffalo Chicken Mac and Cheese and plenty more.." );
    let p = document.getElementById("recipe");

alert("Here is a recipe for" + " " + macheese + "." + " " + "Get started and Enjoy!")

    if (macheese === "Classic Macaroni and Cheese") {
      p.innerHTML = "To make classic macaroni and cheese, cook elbow macaroni according to package instructions, then drain. In a saucepan, melt butter over medium heat and stir in flour, cooking for a minute. Slowly whisk in milk until smooth and thickened. Remove from heat and stir in shredded cheddar cheese until melted and creamy. Season with salt, pepper, and a pinch of mustard powder. Combine the cooked macaroni with the cheese sauce. Serve hot and enjoy the comforting classic macaroni and cheese!";
      console.log("Option 1 selected: Classic Macaroni and Cheese");
    } else if (macheese === "Buffalo Chicken Mac and Cheese") {
      p.innerHTML = "To make buffalo chicken mac and cheese, cook elbow macaroni according to package instructions, then drain. In a skillet, cook diced chicken in buffalo sauce until cooked through. In a saucepan, melt butter over medium heat and stir in flour, cooking for a minute. Slowly whisk in milk until smooth and thickened. Remove from heat and stir in shredded cheddar cheese until melted and creamy. Combine the cooked macaroni, buffalo chicken, and cheese sauce. Serve hot and savor the spicy and cheesy buffalo chicken mac and cheese!";
      console.log("Option 2 selected: Buffalo Chicken Mac and Cheese");
    } else {
      p.innerHTML = "Sorry, we don't have a recipe for that mac and cheese.";
      console.log("Invalid option selected");
    }
}