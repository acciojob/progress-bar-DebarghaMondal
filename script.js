// document.addEventListener('DOMContentLoaded', function() {
//     const circles = document.querySelectorAll('.circle');
//     const prevButton = document.getElementById('prev');
//     const nextButton = document.getElementById('next');
//     let currentActive = 0;

//     // Function to update active class
//     function updateActiveClass() {
//         circles.forEach((circle, index) => {
//             if (index === currentActive) {
//                 circle.classList.add('active');
//             } else {
//                 circle.classList.remove('active');
//             }
//         });

//         // Enable/disable prev and next buttons based on currentActive
//         prevButton.disabled = currentActive === 0;
//         nextButton.disabled = currentActive === circles.length - 1;
//     }

//     // Initial call to set initial state
//     updateActiveClass();

//     // Event listener for prev button
//     prevButton.addEventListener('click', function() {
//         if (currentActive > 0) {
//             currentActive--;
//             updateActiveClass();
//         }
//     });

//     // Event listener for next button
//     nextButton.addEventListener('click', function() {
//         if (currentActive < circles.length - 1) {
//             currentActive++;
//             updateActiveClass();
//         }
//     });
// });
