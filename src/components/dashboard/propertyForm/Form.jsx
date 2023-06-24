import { generatePropertyInfo } from "api/ai";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🚀 ~ file: PropertyForm.jsx:11 ~ onSubmit ~ data:", data);
    const arr = Object.entries(data);
    const joinedArr = arr.map((pair) => pair.join(':'));
    const finalPromptData = joinedArr.join(', ');
    const prompt = { prompt: finalPromptData, size: 'medium' };
    // send request to generate info
    generatePropertyInfo(prompt)
      .then((data) => {
        console.log(data?.imageUrl, data?.createdText);
      }).catch((err) => {
        console.log(err?.message);
      })
  };
  
  return (
    <div>
      <section className="py-1">
        <div className="w-full px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Fill up the forms to generate data
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow-xl bg-indigo-50/50 p-10 mb-10">
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Location Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Street Address
                      </label>
                      <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="streetAddress"
                        {...register("streetAddress", { required: "Street Address is required" })} />
                      {errors.street && <p className="mt-1 text-red-500 font-medium">{errors?.street.message}</p>}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        City
                      </label>
                      <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="city" {...register("city", { required: "City is required" })} />
                      {errors.city && <p className="mt-1 text-red-500 font-medium">{errors?.city.message}</p>}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        State
                      </label>
                      <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="state" {...register("state", { required: "State is required" })} />
                      {errors.state && <p className="mt-1 text-red-500 font-medium">{errors?.state.message}</p>}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Zip Code
                      </label>
                      <input type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="zipcode" {...register("zipcode", { required: "Zip Code is required" })} />
                      {errors.zipcode && <p className="mt-1 text-red-500 font-medium">{errors?.zipcode.message}</p>}
                    </div>
                  </div>
                </div>
                </div>
                <div className="shadow-xl bg-indigo-50/50 p-10 mb-10">
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Property Details
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Number of Bedrooms
                      </label>
                      <input type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="numberOfBedrooms" {...register("numberOfBedrooms", { required: "Number of Bedrooms is required" })} />
                      {errors.bedrooms && <p className="mt-1 text-red-500 font-medium">{errors?.bedrooms.message}</p>}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Number of Bathrooms
                      </label>
                      <input type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="numberOfBathrooms" {...register("numberOfBathrooms", { required: "Number of Bathrooms is required" })} />
                      {errors.bathrooms && <p className="mt-1 text-red-500 font-medium">{errors?.bathrooms.message}</p>}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Square Footage
                      </label>
                      <input type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="squareFootage" {...register("squareFootage", { required: "Square Footage is required" })} />
                      {errors.footage && <p className="mt-1 text-red-500 font-medium">{errors?.footage.message}</p>}
                    </div>
                  </div>
                </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Property Condition
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Condition
                      </label>
                      <select name="condition" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...register('condition', { required: "Condition is required" })}>
                        <option defaultValue hidden>Select</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="Poor">Poor</option>
                      </select>
                      {errors.condition && <p className="mt-1 text-red-500 font-medium">{errors?.condition.message}</p>}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Recent Renovations
                      </label>
                      <select name="renovation" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...register('renovation', { required: "Renovation is required" })}>
                        <option defaultValue hidden>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      {errors.renovation && <p className="mt-1 text-red-500 font-medium">{errors?.renovation.message}</p>}
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Comparable Sales
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="firstAddress">
                        First Address
                      </label>
                      <input type="text" id="firstAddress" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="firstAddress"
                        {...register("firstAddress", { required: 'First Address is required' })} />
                      {errors.firstAddress && <p className="mt-1 text-red-500 font-medium">{errors?.firstAddress.message}</p>}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="secondAddress">
                        Second Address
                      </label>
                      <input type="text" id="secondAddress" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="secondAddress"
                        {...register("secondAddress", { required: 'Secondary Address is required' })} />
                      {errors.secondAddress && <p className="mt-1 text-red-500 font-medium">{errors?.secondAddress.message}</p>}
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Property Features
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="features">
                        Special Features or Upgrades
                      </label>
                      <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="features" {...register("features", { required: "Features is required" })} />
                      {errors.features && <p className="mt-1 text-red-500 font-medium">{errors?.features.message}</p>}
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Zoning and Land Use
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="condition">
                        Zoning
                      </label>
                      <select name="condition" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...register('zoning', { required: "Zoning is required" })}>
                        <option defaultValue hidden>Select</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Mixed-Use">Mixed-Use</option>
                      </select>
                      {errors.condition && <p className="mt-1 text-red-500 font-medium">{errors?.condition.message}</p>}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="landUse">
                        Permitted Land Use
                      </label>
                      <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="landUse" {...register("landUse", { required: "Permitted Land Use is required" })} />
                      {errors.landUse && <p className="mt-1 text-red-500 font-medium">{errors?.landUse.message}</p>}
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Purpose
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Purpose
                      </label>
                      <select name="condition" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...register('purpose', { required: "purpose is required" })}>
                        <option defaultValue hidden>Select</option>
                        <option value="Selling">Selling</option>
                        <option value="Refinancing">Refinancing</option>
                        <option value="Insurance">Insurance</option>
                      </select>
                      {errors.purpose && <p className="mt-1 text-red-500 font-medium">{errors?.purpose.message}</p>}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <button type="submit" className="bg-indigo-500 w-full py-2 text-white font-bold">Generate</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}