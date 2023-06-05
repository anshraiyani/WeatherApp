export default function renderData(data) {
    // main div
    const dataDiv=document.querySelector('.data-div')

    // temp div
    const tempDiv=document.createElement('div')
    tempDiv.classList.add('temp-div')
    const currTemp=document.createElement('div')
    currTemp.classList.add('current-temp')
    currTemp.textContent=data.current.temp_c+"°C"


    // location & time div
    const locTimeDiv = document.createElement('div')
    locTimeDiv.classList.add('location-time')

    const location=document.createElement('div')
    location.classList.add('location')

    const city=document.createElement('div')
    city.classList.add('city')
    city.textContent=data.location.name

    const stateCountry=document.createElement('div')
    stateCountry.classList.add('state-country')
    stateCountry.textContent=data.location.region+", "+data.location.country

    location.appendChild(city)
    location.appendChild(stateCountry)

    const time=document.createElement('div')
    time.classList.add('time')
    time.innerHTML=data.location.localtime.split(" ")[1] + "<br>" + data.location.localtime.split(" ")[0]

    locTimeDiv.appendChild(location)
    locTimeDiv.appendChild(time)


    //image div
    const weatherIcon=document.createElement('img')
    weatherIcon.classList.add('weather-icon')
    weatherIcon.src="https:"+data.current.condition.icon

    tempDiv.appendChild(currTemp)
    tempDiv.appendChild(weatherIcon)

    dataDiv.appendChild(tempDiv)
    dataDiv.append(locTimeDiv)
}

export function clearData(){
    const dataDiv=document.querySelector('.data-div')
    const tempDiv=document.querySelector('.temp-div')
    const locTimeDiv=document.querySelector('.location-time')
    dataDiv.removeChild(tempDiv)
    dataDiv.removeChild(locTimeDiv)
}