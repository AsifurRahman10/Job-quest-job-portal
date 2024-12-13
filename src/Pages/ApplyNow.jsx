import { useParams } from "react-router-dom";
import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export const ApplyNow = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const yourself = form.yourself.value;

    const applyData = {
      jobID: id,
      name,
      phone,
      yourself,
      userEmail: user.email,
    };
    fetch("http://localhost:4000/applyJob", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Your application has been submitted");
        }
      });
  };
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-10">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Typography variant="h4" color="blue-gray">
        Fill the form to apply
      </Typography>
      <form className="mt-8 mb-2" onSubmit={handleJobApply}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            name="name"
            required
            size="lg"
            placeholder="Your name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Phone Number
          </Typography>
          <Input
            type="number"
            required
            name="phone"
            size="lg"
            placeholder="Phone Number"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Explain your self in one line
          </Typography>
          <Input
            name="yourself"
            required
            type="text"
            size="lg"
            placeholder="Hi"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a className="font-medium transition-colors hover:text-gray-900">
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button type="submit" className="mt-6" fullWidth>
          Apply
        </Button>
      </form>
    </div>
  );
};
