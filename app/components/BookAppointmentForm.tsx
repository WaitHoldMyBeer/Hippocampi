"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "../../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { useToast } from "../../hooks/use-toast"
import { useRouter } from "next/navigation"

const bookingSchema = z.object({
  date: z.string().min(1, { message: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" }),
  doctor: z.string().min(1, { message: "Please select a doctor" }),
})

type BookingFormData = z.infer<typeof bookingSchema>

const availableDates = ["2023-07-01", "2023-07-02", "2023-07-03", "2023-07-04", "2023-07-05"]
const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]
const availableDoctors = ["Dr. Smith", "Dr. Johnson", "Dr. Williams", "Dr. Brown", "Dr. Jones"]

export default function BookAppointmentForm() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })
  const { toast } = useToast()
  const router = useRouter()

  const onSubmit = async (data: BookingFormData) => {
    setIsLoading(true)
    // Here you would typically send the data to your backend
    console.log("Appointment booked:", data)
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulating API call
    setIsLoading(false)
    toast({
      title: "Appointment booked successfully",
      description: "You can view your appointment in your dashboard.",
    })
    router.push("/patient-dashboard")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Select onValueChange={(value) => register("date").onChange({ target: { value } })}>
          <SelectTrigger className={errors.date ? "border-red-500" : ""}>
            <SelectValue placeholder="Select date" />
          </SelectTrigger>
          <SelectContent>
            {availableDates.map((date) => (
              <SelectItem key={date} value={date}>
                {date}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
      </div>
      <div>
        <Select onValueChange={(value) => register("time").onChange({ target: { value } })}>
          <SelectTrigger className={errors.time ? "border-red-500" : ""}>
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            {availableTimes.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
      </div>
      <div>
        <Select onValueChange={(value) => register("doctor").onChange({ target: { value } })}>
          <SelectTrigger className={errors.doctor ? "border-red-500" : ""}>
            <SelectValue placeholder="Select doctor" />
          </SelectTrigger>
          <SelectContent>
            {availableDoctors.map((doctor) => (
              <SelectItem key={doctor} value={doctor}>
                {doctor}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.doctor && <p className="text-red-500 text-sm mt-1">{errors.doctor.message}</p>}
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Booking..." : "Book Appointment"}
      </Button>
    </form>
  )
}

