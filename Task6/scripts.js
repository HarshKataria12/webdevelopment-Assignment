document.addEventListener('DOMContentLoaded', function() {
    const increaseButtons = document.querySelectorAll('.increase');
    const decreaseButtons = document.querySelectorAll('.decrease');
    const orderForm = document.getElementById('orderForm');
    const summaryText = document.getElementById('summaryText');
    

    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = document.getElementById(button.getAttribute('data-target'));
            let currentValue = parseInt(target.value);
            target.value = currentValue + 1;
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = document.getElementById(button.getAttribute('data-target'));
            let currentValue = parseInt(target.value);
            if (currentValue > 1) {
                target.value = currentValue - 1;
            }
        });
    });

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const monitor = document.getElementById('monitor').value;
        const monitorQuantity = document.getElementById('monitorQuantity').value;
        const cpu = document.getElementById('cpu').value;
        const cpuQuantity = document.getElementById('cpuQuantity').value;
        const gpu = document.getElementById('gpu').value;
        const gpuQuantity = document.getElementById('gpuQuantity').value;
        const ram = document.getElementById('ram').value;
        const ramQuantity = document.getElementById('ramQuantity').value;
        const storage = document.getElementById('storage').value;
        const storageQuantity = document.getElementById('storageQuantity').value;
        const comments = document.getElementById('comments').value;

        summaryText.innerHTML = `
            <strong>Monitor:</strong> ${monitor} (${monitorQuantity})<br>
            <strong>CPU:</strong> ${cpu} (${cpuQuantity})<br>
            <strong>GPU:</strong> ${gpu} (${gpuQuantity})<br>
            <strong>RAM:</strong> ${ram} (${ramQuantity})<br>
            <strong>Storage:</strong> ${storage} (${storageQuantity})<br>
            <strong>Additional Notes:</strong> ${comments}<br>
        `;
    });
});
