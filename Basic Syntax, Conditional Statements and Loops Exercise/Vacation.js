function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {

    let price = 0;

    switch (typeOfTheGroup) {
        case "Students":
            switch (dayOfTheWeek) {
                case "Friday": price = 8.45; break;
                case "Saturday": price = 9.80; break;
                case "Sunday": price = 10.46; break;
            } break;
        case "Business":
            switch (dayOfTheWeek) {
                case "Friday": price = 10.90; break;
                case "Saturday": price = 15.60; break;
                case "Sunday": price = 16; break;
            } break;
        case "Regular":
            switch (dayOfTheWeek) {
                case "Friday": price = 15; break;
                case "Saturday": price = 20; break;
                case "Sunday": price = 22.50; break;
            } break;
    }

    let totalPrice = groupOfPeople * price;

    if (groupOfPeople >= 30 && typeOfTheGroup === "Students") {
        totalPrice = totalPrice - ((totalPrice / 100) * 15);
    }
    if (groupOfPeople >= 100 && typeOfTheGroup === "Business") {
        totalPrice = totalPrice - (10 * price);
    }
    if (groupOfPeople >= 10 && groupOfPeople <= 20 && typeOfTheGroup === "Regular") {
        totalPrice = totalPrice - ((totalPrice / 100) * 5);
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
