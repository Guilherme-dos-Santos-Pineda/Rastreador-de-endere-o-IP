
var input = document.querySelector(".search-val");
var botao = document.querySelector(".botao");
var addresos = document.querySelector(".display-addres");
var locationo = document.querySelector(".display-location");
var timezones = document.querySelector(".display-timezone");
var ispo = document.querySelector(".display-ISP");
var url = 'https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_Xf4uZrHsHwfT9B6OOerIyXxu7qXdD&ipAddress=' + input.value;
var a = 0
botao.addEventListener("click",(e)=>{
    var lat
    var lng



    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        addresos.innerHTML = data.ip
        locationo.innerHTML = data.location.city + ` - ` + data.location.country + ` - ` + data.location.postalCode
        timezones.innerHTML = data.location.timezone
        ispo.innerHTML = data.isp
        lat = data.location.lat
        lng = data.location.lng

        setTimeout(()=>{

            var map = L.map('map').setView([lat, lng], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        },200)
    })
    if(a === 1){
        window.location.reload();
    }else{
        a++
    }
    
})

