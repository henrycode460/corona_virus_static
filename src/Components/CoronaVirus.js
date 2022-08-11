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
    <div className='wrapper'>
       
        {
         countries?.data?.map(country =>(
     
        <CoronaVirusList key={country.code} country={country}/>
          ))
        }
 
     </div>
  );
}

export default CoronaVirus;