const nav = document.querySelector('#nav');
const main = document.querySelector('#main');
const cursor = document.createElement("div");
const items = document.querySelectorAll('.item')
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);


window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        // checking the width of the screen to remove the blur circle around the cursor to not appear in the phone when click on the screen
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });
    } else {
        cursor.classList.remove('.custom-cursor')
    }
})


let isOutsideMain = false;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition) {
        isOutsideMain = true;
        nav.style.backgroundColor = '#3333339a';
        items.forEach(item => {
            item.style.color = "#F6F4EB"
        })
    } else if (!scrollPosition) {
        isOutsideMain = false;
        nav.style.backgroundColor = 'transparent';
        items.forEach(item => {
            item.style.color = "#333"
        })
    }
});