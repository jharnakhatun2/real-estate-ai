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
          <input type="text" name="street" placeholder="Street Address" {...register('street')} />
          <input type="text" name="city" placeholder="City" {...register('city')} />
          <input type="text" name="state" placeholder="State" {...register('state')} />
          <input type="number" name="zipCode" placeholder="Zip Code" {...register('zipCode')} />
        </div>
      </div>
    </form>
  )
}