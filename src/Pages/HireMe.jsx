import { useForm } from "react-hook-form";

function HireMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch("https://formsubmit.co/ajax/7b74e04edd9559cb25198d137d9e0087", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full"
      >
        <h1 className="text-2xl font-bold text-rose-500 mb-6">Hire Me !</h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Enter Your Full Name :
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-rose-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            E-mail Address :
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-rose-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Details of company :
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-rose-500"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-rose-500 text-white font-bold py-2 px-4 rounded-md hover:bg-rose-600"
        >
          Submit
        </button>
        
        <br></br><br></br>
            <p className="pt-3 text-center text-blue-500 underline"><a href="https://drive.google.com/file/d/1y0c9IHBwKflN3QntGKQDR_HVOg1AQVV1/view">Download my Resume</a></p>
            
      </form>
    </div>
  );
}

export default HireMe;