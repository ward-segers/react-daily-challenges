import { address } from "../api/mock_data";

function AddressContainer (){

    return (
        <div>
        <p>Street: {address.street}</p>
        <p>City: {address.city}</p>
        <p>State: {address.state}</p>
        <p>Zip: {address.zip}</p>
        </div>
    );

}

export default AddressContainer;