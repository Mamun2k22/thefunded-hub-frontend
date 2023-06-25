import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";
import { arrow, facebook, google, tringle } from "../ui/images";
import { Link, useLocation,} from "react-router-dom";
import { useForm } from "react-hook-form";
import { Country } from "country-state-city";
import { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
const allCountry = Country.getAllCountries();

export default function Registration() {
  const { pathname } = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm()

  // Handel
  const handleSignUp = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("http://localhost:5000/register", data);
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data); 
    }
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (

    <>
      <Navbar />
      <section className="registration relative">
        <div className="container">
          <div className="wrapper flex justify-center items-center min-h-[40vh] py-20">
            <form onSubmit={handleSubmit(handleSignUp)}
              className="grid gap-6 sm:gap-8 md:gap-10 p-7 sm:p-9 md:p-12 relative z-10 rounded-xl bg-primary/[5%] max-w-[35rem]  border-primary"
              action=""
            >
              <div className="heading flex justify-center items-center">
                <h1 className="text-center text-xl xs:text-2xl sm:text-3xl px-4 sm:px-8">
                  Registration
                </h1>
              </div>
              {/* Slected */}
              <div className="selecte-title">
                <div className="wrapper relative mt-2">
                  {/* arrow */}
                  <img
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-5"
                    src={arrow}
                    alt="arrow"
                  />
                  <select
                    {...register("title")}
                    id="title"
                    name="title"

                    className="form-control w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200 bg-[#13121f]"
                  >
                    <option value="Mr.">Select Title</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mr.">Ms.</option>
                    <option value="Mr.">Mrs.</option>
                    <option value="Mr.">Mx.</option>
                  </select>
                </div>

              </div>
              {/* First name */}
              <div className="first-name">
                <input
                  type="text" {...register("name")}
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200"
                  placeholder="First Name" />

              </div>
              {/* First name */}
              <div className="last-name">
                <input
                  type="text" {...register("lastName")}
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200"
                  placeholder="Last Name" />

              </div>

              {/* Email */}
              <div className="email">
                <input
                  {...register("email", {
                    required: "email address is required"
                  })}
                  name="email"
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200"
                  type="email"
                  placeholder="Email"
                />
              </div>
              {/* Mobile */}
              <div className="mobile">
                <input
                  {...register("number", {
                    required: "number is required"
                  })}
                  name="number"
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200 appearance-none m-0"
                  type="number"
                  placeholder="Mobile"
                />
              </div>
              {/* Password */}
              <div className="password">
                <input
                  {...register("password", {
                    required: "password is required",

                  })}
                  name="password"
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200"
                  type="password"
                  placeholder="Password"
                />
              </div>
              {/* Confirm Password */}
              {/* <div className="confirm-pass">
                <input
                  {...register("password", {
                    required: "password is required",
                    pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/, message: "Password should be minimum six characters, at least one uppercase, one lowercase and one number" },
                    minLength: { value: 6, message: "password should be at least 6 characters or long" },
                  })}
                  name="confirm-pass"
                  className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div> */}
              {/* Country Residence */}
              <div className="country-residence">
                <div className="wrapper relative">
                  {/* arrow */}
                  <img
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-5"
                    src={arrow}
                    alt="arrow"
                  />
                  <select
                    {...register("country")}
                    id="country"
                    name="country"
                    className="form-control w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2.5 md:py-3 px-6 rounded-md transition-all duration-200 bg-[#13121f]"
                  >
                    <option defaultChecked>Choose a country</option>
                    {allCountry.map((country) => {
                      return (
                        <option key={country.phonecode} value={country.name}>
                          {country.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* Checkboxs */}
              <div className="checkboxs grid gap-3 justify-start max-w-[35rem] mt-8">
                {/* checkbox */}
                <div className="checkbox flex gap-3 justify-start items-center">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    className="relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  />
                  <label htmlFor="checkbox1" className="sm:cursor-pointer">
                    I agree to the processing of personal data according to
                    PRIVACY POLICY.
                  </label>
                </div>
                {/* checkbox */}
                <div className="checkbox flex gap-3 justify-start items-center">
                  <input
                    type="checkbox"
                    id="checkbox2"
                    className="relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  />
                  <label htmlFor="checkbox2" className="sm:cursor-pointer">
                    Do you want to receive news about our project? Sign up to
                    our NEWSLETTER.
                  </label>
                </div>
                {/* checkbox */}
                <div className="checkbox flex gap-3 justify-start items-center">
                  <input
                    type="checkbox"
                    id="checkbox3"
                    className="relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  />
                  <label htmlFor="checkbox3" className="sm:cursor-pointer">
                    I acknowledge my name is correct and corresponds to the
                    government issued identification.
                  </label>
                </div>
              </div>

              {/* Para */}
              <div className="para w-full text-center">
                <p className="w-full text-base md:text-[1.1rem]">
                  Note that only one registration is allowed per client.
                  Multiple registrations or registrations with invalid data may
                  lead to the termination of the services.
                </p>
              </div>
              {/* Registration button */}
              <div className="login-btn mt-6 flex justify-center items-center">
                <input className="py-2 px-16 border-[4px] border-all hover:border-all/50 transition-all duration-300 rounded-lg" type="submit" value="register" />
              </div>
              {/* signin */}
              {/* <div className="signup grid gap-4">
                <div className="heading flex justify-center items-center">
                  <h5>Or sign up with:</h5>
                </div>

                <div className="logos flex justify-center items-center gap-3">

                  <a>
                    <img
                      className="w-10 sm:w-[2.8rem] md:w-[3.2rem]"
                      src={google}
                      alt="google"
                    />
                  </a>
                  <a
                   >
                    <img
                      className="w-10 sm:w-[2.8rem] md:w-[3.2rem]"
                      src={facebook}
                      alt="facebook"
                    />
                  </a>
             
                </div>
              </div> */}
              {/* already have an account */}
              <div className="signup grid gap-4">
                <div className="flex gap-1 justify-center text-center items-center">
                  <Link to="/login">
                    <span className="font-codePro text-base sm: text-[1.12rem]">
                      Already have an account?{" "}
                      <span className="underline font-codePro text-base sm:text-[1.12rem]">
                        Login
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* triangle */}
        <img
          className="triangle absolute -left-[28%] bottom-[30%]  w-[50rem] rotate-[80deg] opacity-[0.1] md:opacity-[0.25]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute -bottom-[5%] -right-[30%]  w-[50rem] rotate-[80deg] opacity-[0.1]  md:opacity-[0.2]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute bottom-[90%] md:-bottom-[2%] -left-[20%]  w-[35rem] rotate-[-80deg] opacity-[0.07]  md:opacity-[0.25]"
          src={tringle}
          alt="tringle"
        />
      </section>

      <Footer />
      {/* <ToastContainer position="top-center" /> */}
      <Toaster />
    </>
  );
};
