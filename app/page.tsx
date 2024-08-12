"use client"

import { CarCard, CustomeFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default  function Home() {

  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)

  //search states
  const [manufacturer, setmanufacturer] = useState('')
  const [model, setModel] = useState('')
  //filter states
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)
  //pagination states
  const [limit, setLimit] = useState(10)

  const getCars = async () =>{

    setLoading(true)

     try {
      const result = await fetchCars({
        manufacturers: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || '',
    
      })
      setAllCars(result)
     } catch (error) {
      console.log(error);
      
     }finally{
      setLoading(false)
     }
  }

  useEffect(() => {
    getCars()
      console.log(fuel, year, limit, manufacturer, model);
      
    }, [fuel, year, limit, manufacturer, model])
  

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars


  //fetch data

  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width">
        
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Car catalogue</h1>
          <p>explore the care you want</p>
        </div>

        <div className="home__filters">
          <SearchBar setmanufacturer={setmanufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomeFilter title="feul" options= {fuels} setFilter = {setFuel} />
            <CustomeFilter title="year" options = {yearsOfProduction} setFilter={setYear} />
          </div>
        </div>


        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">

              {allCars?.map((car) => (
                 <CarCard car={car} />
              ))}

            </div>

            {loading && (

              <div className="mt-16 w-full flex-center ">
                <Image src='/loader.svg' alt="loader" width={50} height={50} className="object-contain" />
                loader
              </div>

            )}

            <ShowMore  pageNumber= {limit / 10 }
              isNext={limit > allCars.length} 
              setLimit= {setLimit}
            />

          </section>
        )
        :
        (
          <div className="text-black text-xl font-bold">
            <h3>Oops no result</h3>
            <p>{allCars?.message}</p>
          </div>
        )
      }
      
      </div>
    </main>
  );
}
