import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <Card className="max-w-xl text-center">
        <h1 className="text-4xl font-bold">Welcome to MargaVeda ERP</h1>

        <p className="text-gray-500 mt-5">
          Build your educational institution with a modern cloud ERP.
        </p>

        <div className="mt-10">
          <Button onClick={() => navigate("/setup/type")}>Get Started</Button>
        </div>
      </Card>
    </div>
  );
}
