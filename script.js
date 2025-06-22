const tt = [
    "Youssef Gebsi 👾",
    "Future Game Developer 🕹️"
];
let index = 0;
let chin = 0;
let delt = false;
const speed = 120;
const delay = 1500;
const element = document.getElementById("tt");

function type() {
    const current = tt[index];
    
    // Typing
    if (!delt) {
        chin++;
        element.textContent = current.substring(0, chin);
        if (chin === current.length) {
            delt = true;
            setTimeout(type, delay); // Wait before deleting
            return;
        }
    } 
    // Deleting
    else {
        chin--;
        element.textContent = current.substring(0, chin);
        if (chin === 0) {
            delt = false;
            index = (index + 1) % tt.length;
            setTimeout(type, 500); // Pause before next string
            return;
        }
    }
    
    setTimeout(type, delt ? speed / 2 : speed);
}

type(); // Start it
