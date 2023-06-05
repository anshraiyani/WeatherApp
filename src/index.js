import renderData, { clearData } from "./render-data"

const cityInput=document.querySelector('.city-input')
const searchCityBtn=document.querySelector('.search-city-btn')
let currentWeather={}

//default data
function defaultData(){
    // clearData()
    getData('vadodara').then(currentData=>{
        renderData(currentData)
    }).catch(err=>{
        confirm.log(err)
    })
}

defaultData()

searchCityBtn.addEventListener('click',()=>{
    clearData()
    getData(cityInput.value).then(currentData=>{
        renderData(currentData)
    }).catch(err=>{
        confirm.log(err)
    })
    cityInput.value=""
    // console.log(data)
})


async function getData(city) {
    try{
        const respone = await fetch(`https://api.weatherapi.com/v1/current.json?key=81c359feb7164feaafb100658230406&q=${city}`,{mode:"cors"})
        const currentData=await respone.json()
        // console.log(currentData.current)
        const currentWeather={
            city: currentData.location.name,
            state: currentData.location.region,
            country: currentData.location.country,
            time: currentData.location.localtime,
            tempCel: currentData.current.temp_c,
            tempFer: currentData.current.temp_f,
            condition: currentData.current.condition.text,
            icon: currentData.current.condition.icon,
            code:currentData.current.condition.code
        }
        return currentData
    }catch(err) {
        console.log(err)
    }
}