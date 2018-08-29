function whatCanIDrink(age) {
        if (age<0 && "number"){
            return "Sorry I can't tell what drink because that age is incorrect!"
        }
        else if (age <14 && age>=0 && "number") {
            return "Drink Toddy"
        }
        else if (age <18 && age>=14 && "number") {
            return "Drink Coke"
        }
        else if (age <21 && age>=18 && "number") {
            return "Drink Beer"
        } 
        else if (age <130 && age>=21 && "number") {
            return "Drink Whisky"
        } else {
            return "Sorry I can't tell what drink because that age is incorrect!"
        }
};
