const button = document.querySelector(".buttonip");
const test = "https://ipwhois.app/json/213.87.128.62";

async function FindIP() {
    let IP = document.querySelector(".tbip").value;
    let url2 = "https://ipwhois.app/json/" + IP;
    let url = "http://ip-api.com/json/" + IP;
    try {
        const response = await fetch(url)
        const data = await response.json();

        document.querySelector(".nyip").innerHTML = "IP: " + data.query;
        document.querySelector(".nyip2").innerHTML = "Country: " + data.country;
        document.querySelector(".nyip3").innerHTML = "City: " + data.regionName;
    } catch (error) {
        console.log(error)
    }
    // 2 try
    try {
        const response = await fetch(url2)
        const data = await response.json();

        document.querySelector(".nyip4").innerHTML = "Asn: " + data.asn;
        document.querySelector(".nyip5").innerHTML = "Phone: " + data.country_phone;
        document.querySelector(".nyip6").innerHTML = "Tmezone: " + data.timezone_gmt;
        document.querySelector(".nyip7").innerHTML = "Currency: " + data.currency_code;
    } catch (error) {
        console.log(error)
    }
}

async function YourIP() {
    let IP = document.querySelector(".tbip").value;
    let url2 = "https://ipwhois.app/json/" + IP;
    let url = "http://ip-api.com/json/" + IP;
    try {
        const response = await fetch(url)
        const data = await response.json();

        document.querySelector(".yip").innerHTML = "Your IP: " + data.query;
        document.querySelector(".yip2").innerHTML = "Your country: " + data.country;
        document.querySelector(".yip3").innerHTML = "Your city: " + data.regionName;
    } catch (error) {
        console.log(error)
    }
    // 2 try
    try {
        const response = await fetch(url2)
        const data = await response.json();

        document.querySelector(".yip4").innerHTML = "Your asn: " + data.asn;
        document.querySelector(".yip5").innerHTML = "Your phone: " + data.country_phone;
        document.querySelector(".yip6").innerHTML = "Your timezone: " + data.timezone_gmt;
        document.querySelector(".yip7").innerHTML = "Your currency: " + data.currency_code;
    } catch (error) {
        console.log(error)
    }
}

FindIP();
YourIP();