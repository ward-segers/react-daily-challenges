export default function LoanForm({cost, setCost, numberOfPayments, 
    setNumberOfPayments, 
    calculateEmi}) {
        const handleSubmit = (e) => {
            e.preventDefault();
            calculateEmi();
        }
  return (
    <>
      <form className="flex flex-col gap-4 justify-center items-start 
      text-gray-600">
        <div className="flex items-center justify-between w-full">
          <label htmlFor="totalCost" className="w-2/3 text-left">
            Total loan amount:
          </label>
          <input
            id="totalCost"
            type="number"
            value={cost}
            onChange={e => setCost(e.target.value)}
            className="p-2 border border-gray-300 rounded w-1/3 text-right"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <label htmlFor="numberOfIntervals" className="w-2/3 text-left">
            Number of monthly payments:
          </label>
          <input
            id="numberOfIntervals"
            type="number"
            value={numberOfPayments}
            onChange={e => setNumberOfPayments(e.target.value)}
            className="p-2 border border-gray-300 rounded w-1/3 text-right"
          />
        </div>
        <button
          id="calculate"
          className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-600 cursor-pointer self-end mt-4"
            onClick={handleSubmit}
       >
          Calculate
        </button>
      </form>
    </>
  );
}
