"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { useToast } from "../../hooks/use-toast"
import { useRouter } from "next/navigation"

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function ClientPortalPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState<"patient" | "doctor" | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })
  const { toast } = useToast()
  const router = useRouter()

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    // Here you would typically send the data to your backend for authentication
    console.log("Login submitted:", data)
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulating API call
    setIsLoading(false)
    toast({
      title: "Logged in successfully",
      description: `Welcome back, ${userType}!`,
    })
    router.push(userType === "patient" ? "/patient-dashboard" : "/doctor-dashboard")
  }

  if (!userType) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-md">
          <h1 className="text-4xl font-bold mb-8 text-center">Client Portal</h1>
          <div className="space-y-4">
            <Button onClick={() => setUserType("patient")} className="w-full">
              Patient Login
            </Button>
            <Button onClick={() => setUserType("doctor")} className="w-full">
              Doctor Login
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {userType === "patient" ? "Patient Login" : "Doctor Login"}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
              className={errors.password ? "border-red-500" : ""}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log In"}
          </Button>
        </form>
      </div>
    </div>
  )
}

