function computerFirm(input) {
    let allComputers = Number(input[0]);
    let index = 1;
    let computerModel = Number(input[index]);
 
    //•	Рейтинг 2 взима 0% от  възможните продажби.
    //•	Рейтинг 3 взима 50% от възможните продажби.
    //•	Рейтинг 4 взима 70% от възможните продажби.
    //•	Рейтинг 5 взима 85% от възможните продажби.
    //•	Рейтинг 6 взима 100% от възможните продажби.

    let allRatings = 0;
    let allSales = 0;
    while (index !== allComputers) {
        let rating = (computerModel % 10).toFixed(0);
        let possibleSales = Math.floor(computerModel / 10);
        allRatings += rating;
        let sales = 0;
        if (rating === 2) {
            sales = 0;
        } else if (rating === 3) {
            sales = possibleSales * 0.5;
        } else if (rating === 4) {
            sales = possibleSales * 0.7;
        } else if (rating === 5) {
            sales = possibleSales * 0.85;
        } else if (rating === 6) {
            sales = possibleSales;
        }
        allSales += sales;

        index++;
        computerModel = Number(input[index]);
    }
    let ratingsSummed = allRatings / allComputers;
    console.log(allSales.toFixed(2));
    console.log(ratingsSummed.toFixed(2));
}
computerFirm((["3",
"103",
"103",
"103"])
)