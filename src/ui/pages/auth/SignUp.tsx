import { BrainCog } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { useNavigate } from "react-router-dom";
import { login } from "../../state/authSlice.ts";
import { useState } from "react";
import { toast } from "sonner";

const SignUp = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await window.electronAPI.authenticateUser(
        username,
        password
      ); 

      if (response.success) {
        await window.electronAPI.setAuthenticatedUser(username);
        toast.success("Login successful!");
        dispatch(login());
        navigate("/courseselect");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(`Authentication error: ${error}`);
    }
  };

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <a
                  href="#"
                  className="flex flex-col items-center gap-2 font-medium"
                >
                  <div className="flex size-8 items-center justify-center rounded-md">
                    <BrainCog className="size-20 text-blue-400" />
                  </div>
                  <span className="sr-only">eClassroom</span>
                </a>
                <h1 className="text-xl font-bold">Welcome to eClassroom</h1>
              </div>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    type="username"
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full hover:cursor-pointer"
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
