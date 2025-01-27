"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useToast } from "../../hooks/use-toast";
import { useRouter } from "next/navigation";

const surveySchema = z.object({
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .max(120, { message: "Invalid age" }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
  location: z.string().min(1, { message: "Location is required" }),
});

type SurveyFormData = z.infer<typeof surveySchema>;

export default function SurveyForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SurveyFormData>({
    resolver: zodResolver(surveySchema),
  });
  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (data: SurveyFormData) => {
    setIsLoading(true);
    // Here you would typically send the data to your backend
    console.log("Survey submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call
    setIsLoading(false);
    toast({
      title: "Survey submitted successfully",
      description: "You can now book an appointment.",
    });
    router.push("/book-appointment");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          type="number"
          placeholder="Age"
          {...register("age", { valueAsNumber: true })}
          className={errors.age ? "border-red-500" : ""}
        />
        {errors.age && (
          <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
        )}
      </div>
      <div>
        <Select onValueChange={(value) => setValue("gender", value as "male" | "female" | "other")}>
          <SelectTrigger className={errors.gender ? "border-red-500" : ""}>
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.gender && (
          <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
        )}
      </div>
      <div>
        <Input
          type="text"
          placeholder="Location"
          {...register("location")}
          className={errors.location ? "border-red-500" : ""}
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit Survey"}
      </Button>
    </form>
  );
}
