const text =["Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
"Nam gravida sapien at risus eleifend pulvinar.",
"Donec eget lacus nec turpis tempor fringilla vitae eget mauris.",
"Phasellus a neque sed dui ultrices lobortis vitae non lacus.",
"Suspendisse pharetra nulla nec nulla dictum, scelerisque lobortis tellus hendrerit.",
"Sed facilisis odio ac tellus scelerisque, vitae aliquet mauris semper.",
"Nam ornare neque sit amet consectetur porta.",
"Maecenas placerat elit quis ex dapibus fermentum.",
"Morbi sed orci at nisi cursus aliquet ut et justo.",
"Proin laoreet nibh eu ipsum maximus tempor.", 
"Curabitur hendrerit quam at nibh hendrerit, quis aliquet urna rutrum."];

let form = document.querySelector(".lorem-form");
let btn = document.querySelector("amount");
let result = document.querySelector(".lorem-text");


form.addEventListener('submit', function(e){
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor (Math.random() * text.length);

    if(isNaN(value) || value <= 0 || value > 11){
        result.innerHTML = `<p class=\"result\" style="background-color: #009688; border-radius: 10px; padding: 10px; margin: 10px;">${text[random]}</p>`;
    }
    else{
        let tempText = text.slice(0 , value).map(function (item){
            return `<p class=\"result\" style="background-color: #009688; border-radius: 10px; padding: 10px; margin: 10px;">${item}</p>`;
        }).join("");
        result.innerHTML = tempText;

}});