import { ForecastData } from '@/types/weather';
import WeatherIcon from './WeatherIcon';
import { formatTemperature, formatDate, formatTime } from '@/utils/weatherFormatters';
interface ForecastProps {
 data: ForecastData;
}
export default function Forecast({ data }: ForecastProps) {
 // Agrupar por día y tomar el primer registro de cada día
 const dailyForecast = data.list.filter((item, index) => index % 8 === 0);
 return (
 <div className="weather-card bg-white rounded-lg shadow-lg p-6">
 <h3 className="text-xl font-bold mb-4">
 Pronóstico 5 días - {data.city.name}, {data.city.country}
 </h3>

 <div className="grid grid-cols-1 md:grid-cols-5 gap-4 forecast-grid">
 {dailyForecast.map((day) => (
 <div key={day.dt} className="forecast-item text-center p-3 rounded-lg bg-gray50">
 <p className="font-semibold text-sm mb-2">
 {formatDate(day.dt)}
 </p>

 <WeatherIcon
 icon={day.weather[0].icon}
 description={day.weather[0].description}
 size="small"
 />

 <p className="text-lg font-bold mt-2">
 {formatTemperature(day.main.temp)}
 </p>

 <p className="text-sm text-gray-600 capitalize mb-1">
 {day.weather[0].description}
 </p>

 <p className="text-xs text-gray-500">
 💧 {day.main.humidity}% • {day.wind.speed} m/s 💨
 </p>

 <p className="text-xs text-gray-400 mt-1">
 {formatTime(day.dt)}
 </p>
 </div>
 ))}
 </div>
 </div>
 );
}
