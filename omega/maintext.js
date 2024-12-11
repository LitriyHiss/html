const maintext = document.getElementById('maintext');

let time_m = 4;

const cornerText = () => {
    if(time_m === 2){
        maintext.classList.remove('mainrightcorner');
        maintext.classList.add('mainleftcorner');
    }
    if(time_m === 0){
        maintext.classList.remove('mainleftcorner');
        maintext.classList.add('mainrightcorner');
        time_m = 4;
    }
    time_m--;
}

setInterval(cornerText, 1000);
