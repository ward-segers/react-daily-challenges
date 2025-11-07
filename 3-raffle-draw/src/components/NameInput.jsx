export default function NameInput({onKeyUp, value, onChange}){
    return(
        <input id="nameInput" className="border" onKeyUp={onKeyUp} onChange={onChange} value={value}></input>
    );
}