import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    return new Promise((res) => {
      setTimeout(() => {
        reset();
        console.log("submitted data", data);
        res();
      }, 2000);
    });
  };
  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-100px)]">
      <div className="w-[698px]  bg-[#FFFFFF] rounded-[49px] flex justify-center items-center flex-col gap-12 py-16">
        {/* top */}
        <div className="text-black flex justify-center items-center flex-col">
          <p className="font-bold text-[55px] leading-[71px] text-center ">
            Create An Account
          </p>
          <p className="text-[23px] leading-[29px] w-[472px]">
            Create an account to enjoy all the services without any ads for
            free!
          </p>
        </div>
        {/* form */}
        <form
          className="flex justify-center items-center flex-col gap-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-center items-center flex-col gap-6">
            <input
              {...register("name", { required: true, maxLength: 10 })}
              className="w-[575px] h-[84px] rounded-2xl bg-[#FFFFFF] border-black border-opacity-[40%] border-[1.53px] py-8 pl-8 outline-none text-[#000000] text-2xl opacity-[60%]"
              type="text"
              id=""
              placeholder="Name"
            />
            <input
              {...register("email", { required: true })}
              className="w-[575px] h-[84px] rounded-2xl bg-[#FFFFFF] border-black border-opacity-[40%] border-[1.53px] py-8 pl-8 outline-none text-[#000000] text-2xl opacity-[60%]"
              type="email"
              id=""
              placeholder="Email Address"
            />
            <input
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "password must be contain atleast six characters",
                },
              })}
              className="w-[575px] h-[84px] rounded-2xl bg-[#FFFFFF] border-black border-opacity-[40%] border-[1.53px] py-8 pl-8 outline-none text-[#000000] text-2xl opacity-[60%]"
              type="password"
              id=""
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          {/* button */}
          <div className="flex justify-center items-center flex-col gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#84C7AE] w-[391px] h-[90px] rounded-3xl text-white text-[33px] font-bold"
            >
              {isSubmitting ? "Submitting..." : "Create Account"}
            </button>
            <p className="text-xl text-black leading-7">
              Already Have An Account?{" "}
              <span className="underline cursor-pointer">Sign In</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
