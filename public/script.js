
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product");
    const cartCount = document.getElementById("cart-count");
    const addButtons = document.querySelectorAll(".add-btn");

    let cart = [];

    // Фільтрація товарів
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            filterButtons.forEach(item => item.classList.remove("active"));
            button.classList.add("active");

            products.forEach(product => {
                const category = product.dataset.category;
                product.style.display =
                    filter === "all" || category === filter ? "" : "none";
            });
        });
    });

    // Додавання товарів до кошика
    addButtons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.dataset.name;
            const price = Number(button.dataset.price);

            cart.push({ name, price });
            cartCount.textContent = cart.length;

            button.textContent = "ДОДАНО ✓";

            setTimeout(() => {
                button.textContent = "ДОДАТИ +";
            }, 1000);

            console.log("Кошик:", cart);
        });
    });

    // Перегляд кошика
    document.querySelector(".cart").addEventListener("click", event => {
        event.preventDefault();

        if (cart.length === 0) {
            alert("Ваш кошик поки порожній.");

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product");
    const cartCount = document.getElementById("cart-count");
    const addButtons = document.querySelectorAll(".add-btn");

    let cart = [];

    // Фільтрація товарів
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            filterButtons.forEach(item => item.classList.remove("active"));
            button.classList.add("active");

            products.forEach(product => {
                const category = product.dataset.category;
                product.style.display =
                    filter === "all" || category === filter ? "" : "none";
            });
        });
    });

    // Додавання товарів до кошика
    addButtons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.dataset.name;
            const price = Number(button.dataset.price);

            cart.push({ name, price });
            cartCount.textContent = cart.length;

            button.textContent = "ДОДАНО ✓";

            setTimeout(() => {
                button.textContent = "ДОДАТИ +";
            }, 1000);

            console.log("Кошик:", cart);
        });
    });

    // Перегляд кошика
    document.querySelector(".cart").addEventListener("click", event => {
        event.preventDefault();

        if (cart.length === 0) {
            alert("Ваш кошик поки порожній.");
            return;
        }

        const items = cart.map(item =>
            `${item.name} — ${item.price.toLocaleString("uk-UA")} грн`
        );

        const total = cart.reduce((sum, item) => sum + item.price, 0);

        alert(
            "Ваше замовлення:\n\n" +
            items.join("\n") +
            "\n\nЗагальна сума: " +
            total.toLocaleString("uk-UA") +
            " грн"
        );
    });
});

