import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getCountries } from '../Redux/CoronaVirus';
import CoronaVirusList from './CoronaVirusList';




function CoronaVirus () {
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  const countries = useSelector(state => state.country.countries);
  

  return (
    <>
        <ul>
        {
         countries?.data?.map(country =>(
        //  <li key={country.code}>{country.name}: {country.population}</li>
        <CoronaVirusList key={country.code} country={country}/>
          ))
        }
      </ul>


     {/* {countries.loading && <div>loading...</div>}
     {!countries.loading && countries.error ? <div>Error: {countries.error}</div> : null}
     {!countries.loading && countries.countries.lenght ?(
   
     ) : null} */}
     </>
  );
}

export default CoronaVirus;