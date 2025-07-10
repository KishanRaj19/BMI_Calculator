function calculateBMI() {
    // Get input values
    const heightInput=document.getElementById("height");
    const weightInput=document.getElementById("weight");
    const bmiOutput=document.getElementById("bmi-result");
    const conditionOutput=document.getElementById("condition");

    const height=parseFloat(heightInput.value);
    const weight=parseFloat(weightInput.value);

    // Check if inputs are valid
    if (isNaN(height) || isNaN(weight) || height <=0 || weight <=0) {
        bmiOutput.value="";
        conditionOutput.textContent="Please enter valid height and weight.";
        return;
    }

    // Calculate BMI
    const bmi=weight / ((height / 100) * (height / 100));
    bmiOutput.value=bmi.toFixed(12);

    // Determine condition
    let condition="";

    if (bmi < 18.5) {
        condition="Underweight";
    }

    else if (bmi >=18.5 && bmi < 25) {
        condition="Normal weight";
    }

    else if (bmi >=25 && bmi < 30) {
        condition="Overweight";
    }

    else {
        condition="Obese";
    }

    conditionOutput.textContent="Weight Condition: "+condition;
}