(function () {
    document.getElementById("ex1_button")?.addEventListener("click", () => {
        const numbers = [];
        for (let i = 0; i < 10; i++) {
            numbers.push(i);
        }
        document.getElementById("ex1_content").textContent = numbers.join(",");
    })

    const inputField = document.getElementById("ex2_text");
    inputField?.addEventListener("input", () => {
        const text = inputField.value;
        let error;
        let counter = "Wpisano " + text.length + " znaków";
        if(text.length !== 9) {
            error = "Długość numeru musi być równa 9";
        }
        else if (/\p{L}/u.test(text)) {
            error = "Numer nie może zawierać liter"
        }
        else if (/\D/.test(text)) {
            error = "Numer nie może zawierać znaków specjalnych"
        }
        else {
            error = "Numer telefonu jest poprawny"
        }
        document.getElementById("ex2_content").textContent = error;
        document.getElementById("ex2_counter").textContent = counter;
    })

    const item = document.getElementById("ex3_element");
    item?.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
    })

    document.getElementById("ex3_two")?.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    document.getElementById("ex3_two")?.addEventListener("drop", (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const dragged = document.getElementById(id);

        if(dragged) {
            e.currentTarget.appendChild(dragged);
        }
    })

    document.getElementById("ex3_one")?.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    document.getElementById("ex3_one")?.addEventListener("drop", (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const dragged = document.getElementById(id);

        if(dragged) {
            e.currentTarget.appendChild(dragged);
        }
    })

    const animatedBox = document.getElementById("ex6_element");
    document.getElementById("ex6_animate_button")?.addEventListener("click", () => {
        animatedBox.classList.add("animate");
    })

    animatedBox?.addEventListener("animationend", () => {
        animatedBox.classList.remove("animate");
    })

    const colors = [
        "#f4f6f8",
        "#eef2f5",
        "#e8ecef",
        "#e9edc9",
        "#faedcd",
        "#e2ece9",
        "#f0e6ef"
    ];
    document.getElementById("ex4_button")?.addEventListener("click", () => {
        const num = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[num];
    })
})();