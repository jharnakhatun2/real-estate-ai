import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🚀 ~ file: PropertyForm.jsx:11 ~ onSubmit ~ data:", data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* location information */}
      <div>
        <label htmlFor="location">Location</label>
        <div>
          <input type="text" name="street" placeholder="Street Address" {...register('street')} />
          <input type="text" name="city" placeholder="City" {...register('city')} />
          <input type="text" name="state" placeholder="State" {...register('state')} />
          <input type="number" name="zipCode" placeholder="Zip Code" {...register('zipCode')} />
        </div>
      </div>
      {/* property details */}
      <div>
        <label htmlFor="location">Property Details</label>
        <div>
          <input type="number" name="bedrooms" placeholder="Number of Bedrooms" {...register('bedrooms')} />
          <input type="number" name="bathrooms" placeholder="Number of Bathrooms" {...register('bathrooms')} />
          <input type="number" name="squareFootage" placeholder="Square Footage"
            {...register('squareFootage')} />
        </div>
      </div>
      {/* property condition */}
      <div>
        {/* condition */}
        <div>
          <label htmlFor="location">Property Condition</label>
          <div>
            <select name="condition" {...register('condition')}>
              <option defaultValue hidden>Select</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Poor">Poor</option>
            </select>
          </div>
        </div>
        {/* renovations */}
        <div>
          <label htmlFor="location">Recent Renovations</label>
          <div>
            <select name="renovation" {...register('renovation')}>
              <option defaultValue hidden>Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>
      {/* comparable sales */}
      <div>
        <label htmlFor="location">Comparable Sales</label>
        <div>
          <input type="text" name="recentSales" placeholder="Recent Sales" {...register('recentSales')} />
        </div>
      </div>
      {/* property features */}
      <div>
        <label htmlFor="location">Special Features</label>
        <div>
          <input type="text" name="recentSales" placeholder="Recent Sales" {...register('recentSales')} />
        </div>
      </div>
      {/* Zoning and Land Use */}
      <div>
        <label htmlFor="zoning">Zoning and Land Use</label>
        <div>
          <select name="zoning" {...register('zoning')}>
            <option defaultValue hidden>Select</option>
            <option value="Excellent">Residential</option>
            <option value="Good">Commercial</option>
            <option value="Fair">Mixed-Use</option>
          </select>
        </div>
      </div>
      {/* Purpose of Valuation */}
      <div>
        <label htmlFor="purpose">Purpose of Valuation</label>
        <div>
          <select name="purpose" {...register('purpose')}>
            <option defaultValue hidden>Select</option>
            <option value="Excellent">Selling</option>
            <option value="Good">Refinancing</option>
            <option value="Fair">Insurance</option>
          </select>
        </div>
      </div>
      {/* submit */}
      <button className="px-4 py-2 my-4 bg-slate-900 text-white" type="submit">Generate Valuation</button>
    </form>
  )
}