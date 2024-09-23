import { useEffect , useState} from "react"

const Countries = () => {
    const [countries , setCountries] = useState([])
    const [visited, setVisited] = useState(false)
    console.log(visited)
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])
    const handleVisited = () => {
        setVisited(!visited)
       
    }
    return (
        <>
        
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
    {
            countries?.map(country => <div key={country.ccn3} className="country text-red-600 flex flex-col justify-center items-center p-10">
                <img src={country.flags.png} alt="" className="w-60 h-60 rounded"/>
                <h1 className="text-4xl">{country.name.common}</h1>
                <button className="btn btn-primary bg-violet-600 py-3 px-5 text-2xl rounded text-white" onClick={() => handleVisited()}>Visited</button>
                <h1>{visited ? 'already visited' : 'not visited'}</h1>
            </div>)
        }
    </div>
        
        </>
    ) 
}

export default Countries