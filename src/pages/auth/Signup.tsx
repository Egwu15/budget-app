import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { FormEvent, useState } from "react";
import { userNameAndPasswordSignUP } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function register(email: string, password: string, name: string) {
    const response = await userNameAndPasswordSignUP(email, password);


    if (response instanceof Error) {
      toast.error(response.message.toString());
      return;
    }
    navigate("/");
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    await register(email, password, name);
    setIsLoading(false);
  };

  return (
    <div className="mx-auto mt-20 ">
      <Card color="transparent" shadow={false} className="items-center">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          onSubmit={onSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              color="black"
              minLength={3}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              size="lg"
              label="Email"
              color="black"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              color="black"
              minLength={5}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            className="mt-6 bg-primary"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner className="fill-primary mx-auto" color="brown" />
            ) : (
              <>Sign Up</>
            )}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="/" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
        <ToastContainer />
      </Card>
    </div>
  );
}
