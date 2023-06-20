import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🚀 ~ file: PropertyForm.jsx:11 ~ onSubmit ~ data:", data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Location Information */}
      <div>
        <label htmlFor="location">Location</label>
        <div>
          <input type="text" name="street" placeholder="Street Address" {...register('street')} />
          <input type="text" name="city" placeholder="City" {...register('city')} />
          <input type="text" name="state" placeholder="State" {...register('state')} />
          <input type="number" name="zipCode" placeholder="Zip Code" {...register('zipCode')} />
        </div>
      </div>
      {/* Property Details */}
      <div>
        <label htmlFor="location">Property Details</label>
        <div>
          <input type="number" name="bedrooms" placeholder="Number of Bedrooms" {...register('bedrooms')} />
          <input type="number" name="bathrooms" placeholder="Number of Bathrooms" {...register('bathrooms')} />
          <input type="number" name="squareFootage" placeholder="Square Footage"
            {...register('squareFootage')} />
        </div>
      </div>
      {/* Property Condition */}
      <div>
        <label htmlFor="location">Property Condition</label>
        <div>
          <select name="condition">
            <option defaultValue hidden>Select</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
      </div>
      {/* Property Details */}
      <div>
        <label htmlFor="location">Recent Renovations</label>
        <div>
          <select name="condition">
            <option defaultValue hidden>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
    </form>
  )
}