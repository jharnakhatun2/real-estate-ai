import { generatePropertyInfo } from "api/ai";
import { useForm } from "react-hook-form";

export default function Form({ setPropertyData, setLoading, setJsxData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const arr = Object.entries(data);
    const joinedArr = arr.map((pair) => pair.join(":"));
    const finalPromptData = joinedArr.join("\n");
    console.log(finalPromptData)
    const prompt = { prompt: finalPromptData, size: "medium" };
    setJsxData(null);
    setLoading(true);
    // send request to generate info
    generatePropertyInfo(prompt)
      .then((data) => {
        console.log(data?.imageUrl, data?.createdText, data?.valuationCost);
        setPropertyData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err?.message);
        setLoading(false);
      });
  };

  const formBgColor = ["shadow-sm bg-indigo-50 p-5 mb-6"];
  const formInputStyles = ["border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"];
  const formLabelStyle = ["py-2.5 px-3 text-gray-500 bg-indigo-50/50 rtl:rounded-r rtl:rounded-l-none rounded-l-lg"];
  const propertyDetailsInputStyle = ["flex items-center relative w-full mb-3 shadow rounded"]
  const formInputStyle = ["block w-full rounded-l-none rtl:rounded-l rtl:rounded-r-none placeholder-gray-400/70  rounded-lg border-0  bg-white px-5 py-2.5 text-gray-700 focus:border-0 focus:outline-none focus:ring focus:ring-[#7C6EE4]"];

  // search function


  return (
    <>
      <section className="-mt-2">
        <div className="w-full px-0 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white pb-5">
              <div className="text-center flex justify-between">
                <h6 className="text-2xl lg:text-3xl font-semibold">
                  Property Valuation Generator:
                </h6>
              </div>
            </div>
            <div className="flex-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={formBgColor}>
                  <h6 className="text-blueGray-400 text-sm font-bold uppercase pl-5 pb-3">
                    Location Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3 ">
                        <input
                          type="text"
                          className={formInputStyles}
                          name="streetAddress"
                          placeholder="Street Address"
                          {...register("streetAddress", {
                            required: "Street Address is required",
                          })}
                        />
                        {errors.streetAddress && (
                          <p className="mt-1 text-red-500 text-sm font-semibold">
                            {errors?.streetAddress.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <input
                          type="text"
                          className={formInputStyles}
                          placeholder="City"
                          name="city"
                          {...register("city", {
                            required: "City is required",
                          })}
                        />
                        {errors.city && (
                          <p className="mt-1 text-red-500 text-sm font-semibold">
                            {errors?.city.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <input
                          type="text"
                          className={formInputStyles}
                          placeholder="State"
                          name="state"
                          {...register("state", {
                            required: "State is required",
                          })}
                        />
                        {errors.state && (
                          <p className="mt-1 text-red-500 text-sm font-semibold">
                            {errors?.state.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <input
                          type="number"
                          className={formInputStyles}
                          placeholder="Zip Code"
                          name="zipcode"
                          {...register("zipcode", {
                            required: "Zip Code is required",
                          })}
                        />
                        {errors.zipcode && (
                          <p className="mt-1 text-red-500 text-sm font-semibold">
                            {errors?.zipcode.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={formBgColor}>
                  <h6 className="text-blueGray-400 text-sm font-bold uppercase pl-5 pb-3">
                    Property Details
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className={propertyDetailsInputStyle}>
                        <p className={formLabelStyle}>
                          Bedrooms
                        </p>
                        <input
                          type="number"
                          min={0}
                          placeholder="Number of Bedrooms"
                          className={formInputStyle}
                          name="numberOfBedrooms"
                          {...register("numberOfBedrooms", {
                            required: "Number of Bedrooms is required",
                          })}
                        />
                        {errors.bedrooms && (
                          <p className="mt-1 text-red-500 text-sm font-semibold">
                            {errors?.bedrooms.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className={propertyDetailsInputStyle}>
                        <p className={formLabelStyle}>
                          Bathrooms
                        </p>
                        <input
                          type="number"
                          min={0}
                          placeholder="Number of Bathrooms"
                          className={formInputStyle}
                          name="numberOfBathrooms"
                          {...register("numberOfBathrooms", {
                            required: "Number of Bathrooms is required",
                          })}
                        />
                        {errors.bathrooms && (
                          <p className="mt-1 text-red-500 text-sm font-semibold">
                            {errors?.bathrooms.message}
                          </p>
                        )}
                      </div>
                    </div>

                  </div>
                  <div className="w-full px-4">
                    <div className={propertyDetailsInputStyle}>
                      <p className={`w-4/12 ${formLabelStyle}`}>
                        Square Footage
                      </p>
                      <input
                        type="number"
                        min={0}
                        placeholder="Total Square Footage"
                        className={formInputStyle}
                        name="squareFootage"
                        {...register("squareFootage", {
                          required: "Square Footage is required",
                        })}
                      />
                      {errors.footage && (
                        <p className="mt-1 text-red-500 text-sm font-semibold">
                          {errors?.footage.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className={formBgColor}>
                  <h6 className="text-blueGray-400 text-sm pl-5 pb-3 font-bold uppercase">
                    Property Condition
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 px-5">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Condition
                        </label>
                        <select
                          name="condition"
                          className={formInputStyles}
                          {...register("condition", {
                            required: "Condition is required",
                          })}
                        >
                          <option defaultValue hidden>Select</option>
                          <option value="Excellent">Excellent</option>
                          <option value="Good">Good</option>
                          <option value="Fair">Fair</option>
                          <option value="Poor">Poor</option>
                        </select>
                        {errors.condition && (
                          <p className="mt-1 text-red-500 text-sm font-semibold">
                            {errors?.condition.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Recent Renovations
                        </label>
                        <select
                          name="renovation"
                          className={formInputStyles}
                          {...register("renovation", {
                            required: "Renovation is required",
                          })}
                        >
                          <option defaultValue hidden>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                        {errors.renovation && (
                          <p className="mt-1 text-red-500 text-sm font-semibold">
                            {errors?.renovation.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={formBgColor}>
                  <h6 className="text-blueGray-400 text-sm pl-5 pb-3 font-bold uppercase">
                    Comparable Sales
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 px-5">
                      <div className="relative w-full mb-3">
                        <input
                          type="text"
                          id="firstAddress"
                          placeholder="First Address"
                          className={formInputStyles}
                          name="firstAddress"
                          {...register("firstAddress", {
                            required: "First Address is required",
                          })}
                        />
                        {errors.firstAddress && (
                          <p className="mt-1 text-red-500 text-sm font-semibold">
                            {errors?.firstAddress.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                      <div className="relative w-full mb-3">
                        <input
                          type="text"
                          id="secondAddress"
                          placeholder="Second Address"
                          className={formInputStyles}
                          name="secondAddress"
                          {...register("secondAddress", {
                            required: "Secondary Address is required",
                          })}
                        />
                        {errors.secondAddress && (
                          <p className="mt-1 text-red-500 text-sm font-semibold">
                            {errors?.secondAddress.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={formBgColor}>
                  <h6 className="text-blueGray-400 text-sm pl-5 pb-3 font-bold uppercase">
                    Property Features
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full px-4">
                      <div className="relative w-full mb-3">
                        <textarea
                          type="text"
                          placeholder="Give your property special Features or upgrades .."
                          className={formInputStyles}
                          name="features"
                          {...register("features", {
                            required: "Features is required",
                          })}
                        ></textarea>
                        {errors.features && (
                          <p className="text-red-500 text-sm font-semibold">
                            {errors?.features.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={formBgColor}>
                  <h6 className="text-blueGray-400 text-sm pl-5 pb-3 font-bold uppercase">
                    Zoning and Land Use
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 px-5">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="condition"
                        >
                          Zoning
                        </label>
                        <select
                          name="condition"
                          className={formInputStyles}
                          {...register("zoning", {
                            required: "Zoning is required",
                          })}
                        >
                          <option defaultValue hidden>
                            Select
                          </option>
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Mixed-Use">Mixed-Use</option>
                        </select>
                        {errors.condition && (
                          <p className="mt-1 text-red-500 text-sm font-semibold">
                            {errors?.condition.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="landUse"
                        >
                          Permitted Land Use
                        </label>
                        <input
                          type="text"
                          placeholder="Indicate the permitted land"
                          className={formInputStyles}
                          name="landUse"
                          {...register("landUse", {
                            required: "Permitted Land Use is required",
                          })}
                        />
                        {errors.landUse && (
                          <p className="mt-1 text-red-500 text-sm font-semibold">
                            {errors?.landUse.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={formBgColor}>
                  <h6 className="text-blueGray-400 text-sm pl-5 pb-3 font-bold uppercase">
                    Purpose
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full px-5">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Select the purpose of the property valuation
                        </label>
                        <select
                          name="condition"
                          className={formInputStyles}
                          {...register("purpose", {
                            required: "purpose is required",
                          })}
                        >
                          <option defaultValue hidden>
                            Select
                          </option>
                          <option value="Selling">Selling</option>
                          <option value="Refinancing">Refinancing</option>
                          <option value="Insurance">Insurance</option>
                        </select>
                        {errors.purpose && (
                          <p className="mt-1 text-red-500 text-sm font-semibold">
                            {errors?.purpose.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 justify-center">
                  <div>
                    <button
                      type="submit"
                      className="w-full text-white px-20 py-3 uppercase bg-indigo-500 hover:bg-indigo-400 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 rounded"
                    >
                      Generate Property
                    </button>
                  </div>
                  <div>
                    {/* <button
                    type="submit"
                    className={`w-full text-white px-20 py-3 uppercase bg-[#9f95e9] hover:bg-[#7C6EE4] shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 ${
                      isChecked ? "" : "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!isChecked}
                  >
                    Generate Poster
                  </button> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}