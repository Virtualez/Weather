

fetch('https://api.openweathermap.org/data/2.5/weather?q=Perm&appid=fcbba0e3de4a96a2936469f23de9205a&lang=en')
.then(response => response.json())
.then(data => setWeather_1(data));

function setWeather_1( { name, main: {temp}, weather }) {

        let perm = document.querySelector('.perm')
        perm.insertAdjacentHTML(
        'afterbegin',

        `
        <h1>${name}</h1>
        <br>
        <h1>${Math.round(temp-273)}°C</h1>
        

        <div class='image'>${setArr(weather)}</div>
    
        
        `
    );  
};

fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=fcbba0e3de4a96a2936469f23de9205a&lang=en')
.then(response => response.json())
.then(data => setWeather(data));

function setWeather({name, main: {temp}, weather }) {

        let moscow = document.querySelector('.moscow')
        moscow.insertAdjacentHTML(
        'afterbegin',

        `
        <h1>${name}</h1>
        <br>
        <h1>${Math.round(temp-273)}°C</h1>

        <div class='image'>${setArr(weather)}</div>

        `
    );  
};

fetch('https://api.openweathermap.org/data/2.5/weather?q=Salou&appid=fcbba0e3de4a96a2936469f23de9205a')
.then(response => response.json())
.then(data => setWeather_3(data));

function setWeather_3({name, main: {temp}, weather }) {

        let perm = document.querySelector('.salou')
        perm.insertAdjacentHTML(
        'afterbegin',

        `
        <h1>${name}</h1>
        <br>
        <h1>${Math.round(temp-273)}°C</h1>

        <div class='image'>${setArr(weather)}</div>
        
        `
    );  
};


fetch('https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=fcbba0e3de4a96a2936469f23de9205a')
.then(response => response.json())
.then(data => setWeather_4(data));

function setWeather_4({name, main: {temp}, weather}) {

        let perm = document.querySelector('.miami')
        perm.insertAdjacentHTML(
        'afterbegin',

        `
        <h1>${name}</h1>
        <br>
        <h1>${Math.round(temp-273)}°C </h1>

        <div class='image'>${setArr(weather)}</div>
        
        `
    );  
};

fetch('https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=fcbba0e3de4a96a2936469f23de9205a')
.then(response => response.json())
.then(data => setWeather_5(data));

function setWeather_5({name, main: {temp}, weather}) {

        let perm = document.querySelector('.la')
        perm.insertAdjacentHTML(
        'afterbegin',

        `
        <h1>${name}</h1>
        <br>
        <h1> ${Math.round(temp-273)}°C </h1>

        <div class='image'>${setArr(weather)}</div>
        
        `
    );  
};

fetch('https://api.openweathermap.org/data/2.5/weather?q=Yakutsk&appid=fcbba0e3de4a96a2936469f23de9205a&lang=en')
.then(response => response.json())
.then(data => setWeather_6(data));

function setWeather_6({name, main: {temp, humidity}, weather}) {

        let yakutsk = document.querySelector('.yakutsk')
        yakutsk.insertAdjacentHTML(
        'afterbegin',

        `
        <h1>${name}</h1>
        <br>
        <h1>${Math.round(temp-273)}°C </h1>
        

        <div class='image'>${setArr(weather)}</div>
     
        `
    );  
};

fetch('https://api.openweathermap.org/data/2.5/weather?q=New York&appid=fcbba0e3de4a96a2936469f23de9205a')
.then(response => response.json())
.then(data => setWeather_7(data));

function setWeather_7({name, main: {temp, humidity}, weather}) {

        let ny = document.querySelector('.ny')
        ny.insertAdjacentHTML(
        'afterbegin',

        `
        <h1>${name}</h1>
        <br>
        <h1>${Math.round(temp-273)}°C </h1>
        

        <div class='image'>${setArr(weather)}</div>
     
        `
    );  
};

fetch('https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=fcbba0e3de4a96a2936469f23de9205a')
.then(response => response.json())
.then(data => setWeather_8(data));

function setWeather_8({name, main: {temp, humidity}, weather}) {

        let syd = document.querySelector('.sydney')
        syd.insertAdjacentHTML(
        'afterbegin',

        `
        <h1>${name}</h1>
        <br>
        <h1>${Math.round(temp-273)}°C </h1>
        

        <div class='image'>${setArr(weather)}</div>
     
        `
    );  
};





function setArr(weather) {
    return weather.map((item)=>
    `
    <img src= https://openweathermap.org/img/wn/${item.icon}@2x.png>
    
    ` 
    );  
};














































