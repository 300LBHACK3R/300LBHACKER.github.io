
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎

// -- DISPLAYS CURRENT DATE SIMILAR TO NEWSPAPER.
function displayDate() {
    let dateElement = document.getElementById("newspaper-date");
    let today = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerHTML = today.toLocaleDateString('en-US', options);
}

// -- ARRAY OF TESTIMONIALS. 
const testimonials = [
    "Tate's passion for technology is unmatched. He always delivers high-quality results!",
    "An exceptional professional who brings creativity and technical expertise to every project.",
    "Working with Tate has been an absolute pleasure. His approach to challenges is methodical yet innovative.",
    "Tate's technical knowledge, coupled with his passion for learning, makes him a standout in the IT industry.",
    "Not only is Tate a skilled technical expert, but he excels at making complex concepts simple!"
];

let index1 = 0;
let index2 = 1;

function changeTestimonials() {
    document.getElementById("testimonial-text-1").innerHTML = `"${testimonials[index1]}"`;
    document.getElementById("testimonial-text-2").innerHTML = `"${testimonials[index2]}"`;

    index1 = (index1 + 1) % testimonials.length;
    index2 = (index2 + 1) % testimonials.length;
}

// -- TYPEWRITER EFFECT FOR HEADLINES.
function typeWriterEffect(text, elementId, speed) {
    let i = 0;
    let element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear existing text
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Run everything on page load
window.onload = function() {
    displayDate();
    changeTestimonials();
    setInterval(changeTestimonials, 8000); // Rotate testimonials every 5s
    typeWriterEffect("💬 What People Are Saying 💬", "headline-1", 75);
    typeWriterEffect("💬 What People Are Saying 💬", "headline-2", 75);
};


//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎
//----- 2025 Tate R.A Byers - Crafted with Intellect and Ingenuity. 😎