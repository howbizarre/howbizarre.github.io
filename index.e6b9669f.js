var $3600cfbdb0937bc1$exports = {};
const $3600cfbdb0937bc1$var$docElm = document.documentElement;
const $3600cfbdb0937bc1$var$themeToggleBtn = $3600cfbdb0937bc1$var$docElm.querySelector("#theme-toggle");
const $3600cfbdb0937bc1$var$darkIcon = $3600cfbdb0937bc1$var$themeToggleBtn.querySelector("#dark-icon");
const $3600cfbdb0937bc1$var$lightIcon = $3600cfbdb0937bc1$var$themeToggleBtn.querySelector("#light-icon");
if (localStorage.getItem("color-theme") === "dark") {
    $3600cfbdb0937bc1$var$darkIcon.classList.remove("hidden");
    $3600cfbdb0937bc1$var$docElm.classList.remove("light");
    $3600cfbdb0937bc1$var$docElm.classList.add("dark");
} else if (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    $3600cfbdb0937bc1$var$darkIcon.classList.remove("hidden");
    $3600cfbdb0937bc1$var$docElm.classList.remove("light");
    $3600cfbdb0937bc1$var$docElm.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
} else {
    $3600cfbdb0937bc1$var$lightIcon.classList.remove("hidden");
    $3600cfbdb0937bc1$var$docElm.classList.remove("dark");
    $3600cfbdb0937bc1$var$docElm.classList.add("light");
    localStorage.setItem("color-theme", "light");
}
$3600cfbdb0937bc1$var$themeToggleBtn.addEventListener("click", function() {
    $3600cfbdb0937bc1$var$darkIcon.classList.toggle("hidden");
    $3600cfbdb0937bc1$var$lightIcon.classList.toggle("hidden");
    if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
            $3600cfbdb0937bc1$var$docElm.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        } else {
            $3600cfbdb0937bc1$var$docElm.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        }
    } else if ($3600cfbdb0937bc1$var$docElm.classList.contains("dark")) {
        $3600cfbdb0937bc1$var$docElm.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
    } else {
        $3600cfbdb0937bc1$var$docElm.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
    }
});
console.group("How Bizarre");
console.info("- I am a Front-end Senpai, who strictly follows the W3Code of Bushido!");
console.info("- Use link https://www.paypal.com/donate/?hosted_button_id=RCUKNHLL35ZZS to send me a beer.");
console.groupEnd();


