"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { useToast } from "../../hooks/use-toast"

// Placeholder data
const patientInfo = {
  name: "John Doe",
  age: 35,
  gender: "Male",
  location: "New York, NY",
}

const appointmentInfo = {
  date: "2023-07-03",
  time: "10:00",
  doctor: "Dr. Smith",
}

export default function PatientDashboard() {
  const [isRescheduling, setIsRescheduling] = useState(false)
  const { toast } = useToast()

  const handleReschedule = () => {
    setIsRescheduling(true)
    // Here you would typically send a request to your backend
    setTimeout(() => {
      setIsRescheduling(false)
      toast({
        title: "Appointment rescheduled",
        description: "You will receive an email with the new details.",
      })
    }, 2000)
  }

  const handleSupportRequest = () => {
    toast({
      title: "Support request sent",
      description: "Our team will contact you shortly.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p>
            <strong>Name:</strong> {patientInfo.name}
          </p>
          <p>
            <strong>Age:</strong> {patientInfo.age}
          </p>
          <p>
            <strong>Gender:</strong> {patientInfo.gender}
          </p>
          <p>
            <strong>Location:</strong> {patientInfo.location}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Upcoming Appointment</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p>
            <strong>Date:</strong> {appointmentInfo.date}
          </p>
          <p>
            <strong>Time:</strong> {appointmentInfo.time}
          </p>
          <p>
            <strong>Doctor:</strong> {appointmentInfo.doctor}
          </p>
          <Button onClick={handleReschedule} disabled={isRescheduling} className="mt-2">
            {isRescheduling ? "Rescheduling..." : "Reschedule"}
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Support</h2>
        <Button onClick={handleSupportRequest}>Request Support</Button>
      </div>
    </div>
  )
}

