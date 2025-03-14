document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('growthChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0m', '3m', '6m', '9m', '12m'],
            datasets: [{
                label: 'Weight (kg)',
                data: [3.5, 5.8, 7.5, 8.9, 10],
                borderColor: 'blue',
                fill: false
            }]
        },
        options: {
            responsive: true
        }
    });
});
