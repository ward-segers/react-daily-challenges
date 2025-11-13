export default function NameInput({onKeyDown, value, onChange}){
    return(
        <input id="nameInput" className="border" onKeyDown={onKeyDown} onChange={onChange} value={value}></input>
    );
}