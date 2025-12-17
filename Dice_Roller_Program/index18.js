function rolldice() {
    const numofDice = document.getElementById("numofDice").value;
    const diceresult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for (let i = 0; i < numofDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="JS_Bro-Code/Dice_Roller_Program/dice_images/${value}.png" alt="Dice ${value}">`);
    }

    diceresult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}
