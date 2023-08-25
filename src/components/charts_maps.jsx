import { TileLayer,useMap,MapContainer,Marker,Popup } from 'react-leaflet';
import {Chart as ChartJS,registerables} from 'chart.js/auto'
import { Chart,Line } from "react-chartjs-2";
import {useQuery} from 'react-query';
import { fetch_world_data } from '../api/fetch_data';

ChartJS.register(...registerables);


const position = [51.505, -0.09]

const Map_comp = () => {
  return(
    <div className='maps'>
      <MapContainer center={position} zoom = {13}>
      <TileLayer 
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      >
      <Marker position={position}>
      <Popup>
        Countries
      </Popup>
    </Marker>

      </TileLayer>

    </MapContainer>
    </div>
    
  )
}

export default function Maps() {
  

  const {data,isLoading,error} = useQuery('data',fetch_world_data)
  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  const chart_data = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Cases Chart",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data:Object.values(data)
      },
    ],
  };
  const LineChart = () => {
    return (
        <Line data={chart_data} />
    );
  };
    
    return (
        <div className='charts'>
          <LineChart/>
          <Map_comp />
        </div>
    );
}
