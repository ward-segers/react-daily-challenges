export default function Output({emi}){
    return (
        <div id="output" className="self-start">
            {emi !== null ? (
                <h2>Monthly EMI: ${emi}</h2>
            ) : (
                <h2 className="text-red-500">Please enter the loan amount and number of payments</h2>
            )}
        </div>
    )
}