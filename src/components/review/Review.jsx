import React from "react";
import { useForm } from "react-hook-form";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const { register, handleSubmit } = useForm();
  const imageHostKey = "da54ff642e64f180f3bd684f47c48276";

  const handleReviewData = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const addReview = {
            name: data.name,
            email: data.email,
            image: imgData.data.url,
            message: data.message,
          };

          // fetch(" ", {
          //   method: "POST",
          //   headers: {
          //     "content-type": "application/json",
          //   },
          //   body: JSON.stringify(addReview),
          // })
          //   .then((res) => res.json())
          //   .then((result) => {
          //     console.log(result);
          //   });

          console.log(addReview);
        }
      });
  };

  return (
    <div className="mx-5">
      <div className=" mt-5">
        <div className="w-full mx-auto">
          <h1 className="ml-12 text-3xl text-center mb-4">
            What Our <span className="text-[#8879FB] font-bold">Clients</span> Say
          </h1>
          <h2 className="mb-5 mt-5 ml-5 text-2xl font-semibold text-center">Total Reviews</h2>
          {/* {reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))} */}
          <ReviewCard></ReviewCard>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl">Write your Review here</h2>
        <form onSubmit={handleSubmit(handleReviewData)}>
          {/* <Link to="/login">Login</Link> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="your name"
              className="input input-bordered w-full"
            />
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="your email"
              className="input input-bordered w-full"
            />
            <input
              {...register("image", { required: true })}
              type="file"
              className="input input-bordered w-full mb-4"
            />
          </div>
          <textarea
            {...register("message", { required: true })}
            className="textarea textarea-bordered h-24 w-full"
            placeholder="Write your review here:"
          ></textarea>
          <input
            className="btn bg-[#8879FB] hover:bg-[#8879FB] border-none w-1/3 ml-96 mt-4"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
