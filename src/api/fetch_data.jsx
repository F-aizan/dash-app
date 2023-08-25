import { useQuery } from 'react-query';
import axios from 'axios'


//fetching worldwide data of cases
export async function fetch_world_data()  {
    const response = await axios.get('https://disease.sh/v3/covid-19/all')
    return response.data
}
  
/*
{
  data:{
    updated,cases,todayCases,deaths,todayDeaths,recovered,
todayRecovered,active,critical,casesPerOneMilliondeathsPerOneMillion,tests,testsPerOneMillion,
oneTestPerPeople,activePerOneMillion,recoveredPerOneMillion,CriticalPerOneMillion,affectedCountries
  }
  const mod_data = {
    updated,cases,todayCases,deaths,todayDeaths,recovered,
todayRecovered,active,critical,casesPerOneMilliondeathsPerOneMillion,tests,testsPerOneMillion,
oneTestPerPeople,activePerOneMillion,recoveredPerOneMillion,CriticalPerOneMillion,affectedCountries
  }
*/
//fetching country specific data
export async function Fetch_cont_spec() {
  const {data, isLoading,error} = useQuery('data', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries')
    return response.json()
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

}

//fetching data for graph
export function Fetch_graph_data() {
  const { data, error, isLoading } = useQuery('data', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    return response.body;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


  return (
    <div>
     <p>{data['updated']}</p>
    </div>
  );
}

