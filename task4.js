// Create Function to Calculate the mean of an array of y and x-axis 
function calculateMean(arr) {
    let sumOfAllArray = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfAllArray += arr[i];
    }
    return sumOfAllArray / arr.length;
}
//Create Function of linear regression which will return value of slope and intercept
function linearRegression(x, y) {
    // Calculate the means of x and y arrays
    let x_axis_Mean = calculateMean(x);
    let y_axis_Mean = calculateMean(y);

    // Initialize the numerator and denominator for the slope calculation
    let numerator = 0;
    let denominator = 0;

    // Loop through each data point to calculate the numerator and denominator
    for (let i = 0; i < x.length; i++) {
        numerator += (x[i] - x_axis_Mean) * (y[i] - y_axis_Mean);
        denominator += (x[i] - x_axis_Mean) ** 2;
    }

    // Calculate the slope (m)
    const slope = numerator / denominator;

    // Calculate the intercept (b)
    const intercept = y_axis_Mean - slope * x_axis_Mean;

    // Return the slope and intercept
    return { slope, intercept };
}

// Function to predict y value given x using the linear equation y = mx + b
function predict(x, slope, intercept) {
    return slope * x + intercept;
}

// Creating the array and Sample data points (x, y)
const x_axis = [4, 5, 6, 7, 8];
const y_axis = [1, 5, 7, 12, 15];

// Perform linear regression on the sample data
const { slope, intercept } = linearRegression(x_axis, y_axis);

console.log('Sample Data Points');
console.log('x:', x_axis);
console.log('y:', y_axis);

// Output the results to the console
console.log(`Slope (m): ${slope.toFixed(2)}`);
console.log(`Intercept (b): ${intercept.toFixed(2)}`);
console.log(`Equation of the line: y = ${slope.toFixed(2)}x + ${intercept.toFixed(2)}`);

// Predict and output the y value for a given x using the regression equation
const xValue = 6;
const predictedY = predict(xValue, slope, intercept);
console.log(`Predicted y for x = ${xValue}: ${predictedY.toFixed(2)}`);
