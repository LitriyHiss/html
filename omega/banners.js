const banners = document.getElementById('banners');

let time = 15;

const changeBanner = () => {
    if(time === 10){
        banners.classList.remove('firstbanner');
        banners.classList.add('secondbanner');
    }
    if(time === 5){
        banners.classList.remove('secondbanner');
        banners.classList.add('thirdbanner');
    }
    if(time === 0){
        banners.classList.remove('thirdbanner');
        banners.classList.add('firstbanner');
        time = 15;
    }
    time--;
}

setInterval(changeBanner, 1000);