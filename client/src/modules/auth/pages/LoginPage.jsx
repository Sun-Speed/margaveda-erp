import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

import { loginUser } from "../services/auth.service";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    login: "",

    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  }

  async function submit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await loginUser(form);

      login(response);

      navigate("/dashboard");
    } catch (error) {
      alert(error?.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <h1 className="text-3xl font-bold">Login</h1>

        <p className="text-gray-500 mt-2">Welcome back to MargaVeda ERP</p>

        <form onSubmit={submit} className="space-y-5 mt-8">
          <Input
            label="Email or Phone"
            name="login"
            value={form.login}
            onChange={handleChange}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing In..." : "Login"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
