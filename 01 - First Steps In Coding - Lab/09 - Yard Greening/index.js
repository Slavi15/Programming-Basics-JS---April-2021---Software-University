function yardGreening(input) {
    let squareMeters = Number(input[0]);
    let discountPercent = 0.18;
    let cost = (squareMeters * 7.61);
    let discount = (cost * discountPercent);
    let finalCost = (cost - discount);

    console.log(`The final price is: ${finalCost} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}