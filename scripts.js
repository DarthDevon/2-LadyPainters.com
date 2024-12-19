document.addEventListener("DOMContentLoaded", () => {// Image Arrays for Left and Right Fields
const leftImages = [
    "Images/HomeLeft/Black and Dark.jpg",
    "Images/HomeLeft/Blue wall.jpg",
    "Images/HomeLeft/empty-chairs-table-against-wall-home_1048944-14937239.jpg",
    "Images/HomeLeft/Green wall with plant.jpg",
    "Images/HomeLeft/living_room_big.jpg"
];

const middleImages = [
    "Images/HomeMiddle/illustration-living-room-interior_252025-163845.jpg",
    "Images/HomeMiddle/illustration-living-room-interior_252025-163845.jpg",
    "Images/HomeMiddle/interior-new-house-with-paint-can-half-painted-wall-with-stairs-moving-boxes-back-room-3d-rendering_360032-176.jpg",
    "Images/HomeMiddle/light-blue-painted-walls.jpg"
];

const rightImages = [
    "Images/HomeRight/illustration-empty-interior-room_252025-141901.jpg",
    "Images/HomeRight/Olive with chair.jpg",
    "Images/HomeRight/Redwall.jpg",
    "Images/HomeRight/room-with-red-wall-chair-red-wall-with-sun-shining-it_1319868-70568.jpg",
    "Images/HomeRight/illustration-empty-interior-room_252025-141901.jpg"

];


let leftIndex = 0;
let middleIndex = 0;
let rightIndex = 0;


// Function to cycle images
function cycleImages() {
    document.getElementById("left-image").src = leftImages[leftIndex];
    document.getElementById("middle-image").src = middleImages[middleIndex];
    document.getElementById("right-image").src = rightImages[rightIndex];

    leftIndex = (leftIndex + 1) % leftImages.length;
    middleIndex = (middleIndex + 1) % middleImages.length;
    rightIndex = (rightIndex + 1) % rightImages.length;
}

 // Initial image load
 cycleImages();

 // Cycle images every 5 seconds
 setInterval(cycleImages, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
    const slideContainer = document.querySelector(".testimonial-slide");
    const testimonials = document.querySelectorAll(".testimonial");
    const totalSlides = testimonials.length;

    let index = 0; // Start at the first testimonial

    function cycleTestimonials() {
        // Translate the container to show the current testimonial
        slideContainer.style.transform = `translateX(-${index * 100}%)`;

        // Increment index; reset to 0 when reaching the last testimonial
        index = (index + 1) % totalSlides;
    }

    // Run cycleTestimonials initially
    cycleTestimonials();

    // Automatically cycle every 4 seconds
    setInterval(cycleTestimonials, 4000);
});



