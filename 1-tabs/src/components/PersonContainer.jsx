import { person } from "../api/mock_data";

function PersonContainer(){
    return(<>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Occupation: {person.occupation}</p>
     </>);
}

export default PersonContainer;