import React, {useState, useEffect} from 'react'
const apiUrl = "https://restcountries.eu/rest/v2/all"

const Countries = () => {
  const [countries, setCountries] = useState([])

  const fetchCountryData = async () => {
      const response = await fetch(apiUrl)
      const countries = await response.json()
      setCountries(countries)
      console.log(countries)  }


  useEffect(() => {
      fetchCountryData()
    }, [])
     
  return (
    <>
   <section className="grid">
      
    {countries.map((country) =>{
      const { numericCode, name, population, region, capital, flag } = country

      return <article key={numericCode}>
        <div>
          <img src={flag} alt={name} />
        <div className="country-details"> 
            <h3>{name}</h3>
          <ul>
            <li>Population: <span>{population}</span></li>
            <li>Capital: <span>{capital}</span></li>
            <li>Region: <span>{region}</span></li>
          </ul>
        </div>
        </div>
      </article>
    })}
      
   
   </section>

    </>
  )
}
export default Countries


