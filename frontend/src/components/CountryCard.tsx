import { Link } from "react-router-dom";
type CountryProps = {
  name: string;
  code: string;
  hasFlag: boolean;
};

export default function CountryCard({name, code, hasFlag} : CountryProps) {
  return (
  <Link to={"/"}>  
    <div className="bg-gray-100 border border-gray-300 w-[100px] h-[100px] rounded-lg flex items-center justify-center">
      <div className="m-auto text-center">
        <p className="font-semibold text-lg p-2">{name}</p> 
        {hasFlag ? <span>🏳️‍🌈</span> : <span>🚫</span>}
      </div>  
    </div>
  </Link>)
  ;
}