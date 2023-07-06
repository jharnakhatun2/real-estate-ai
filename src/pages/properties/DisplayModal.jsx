export default function DisplayModal({ propertyData}) {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="display-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div>
            <img src={propertyData?.propertyImage} alt="" />
          </div>
          <h3 className="mt-5 text-lg font-bold">{propertyData?.valuationCost}</h3>
          <p className="py-4">{propertyData?.description}</p>
          <div className="flex justify-between items-center">
          <h1 className="font-semibold text-primary">
            User Name : <span className="text-gray-800">{propertyData?.userName}</span>
          </h1>
          <label className="modal-backdrop bg-black text-white px-6 py-2 cursor-pointer rounded" htmlFor="display-modal">
          Close
        </label>
        </div>
        </div>
      </div>
    </div>
  );
}
