export default function Fahrenheit({id, value, onChange}){
    return (
        <div className="text-gray-600 text-3xl text-center">
            <label htmlFor={id}>
            <input id={id} value={value} className="text-center w-1/3" onChange={onChange}></input>
            F°
            </label>
        </div>
    );
}