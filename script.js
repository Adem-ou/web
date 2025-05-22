document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', calculateBMI);

    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const heightCm = parseFloat(heightInput.value);

    
        if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
            resultDiv.innerHTML = '<p style="color: #dc3545;">Please enter valid positive numbers for weight and height.</p>';
            resultDiv.className = 'result-area'; 
            return;
        }
        const heightM = heightCm / 100;
        const bmi = weight / (heightM * heightM);
        const bmiRounded = bmi.toFixed(2);
        let category = '';
        let categoryClass = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            categoryClass = 'underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
            categoryClass = 'normal';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            categoryClass = 'overweight';
        } else {
            category = 'Obese';
            categoryClass = 'obese';
        }
        resultDiv.innerHTML = `
            <p>Your BMI is: <span class="bmi-value">${bmiRounded}</span></p>
            <p class="bmi-category">Category: ${category}</p>
        `;
        resultDiv.className = `result-area ${categoryClass}`;
    }
});