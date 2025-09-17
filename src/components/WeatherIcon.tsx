interface WeatherIconProps {
 icon: string;
 description: string;
 size?: 'small' | 'medium' | 'large';
}
export default function WeatherIcon({ icon, description, size = 'medium' }: WeatherIconProps) {
 const sizeClasses = {
 small: 'w-8 h-8',
 medium: 'w-12 h-12',
 large: 'w-16 h-16'
 };
 return (
 <img
 src={`<a href="https://www.flaticon.com/free-icons/climate" title="climate icons">Climate icons created by bqlqn - Flaticon</a>`}
 alt={description}
 className={`mx-auto ${sizeClasses[size]}`}
 />
 );
}
