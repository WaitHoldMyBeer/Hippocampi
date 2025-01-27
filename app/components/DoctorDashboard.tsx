"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { useToast } from "../../hooks/use-toast"

// Placeholder data
const newSurveys = [
  { id: 1, patientName: "Alice Johnson", submissionDate: "2023-06-28" },
  { id: 2, patientName: "Bob Smith", submissionDate: "2023-06-29" },
]

const patients = [
  { id: 1, name: "Alice Johnson", age: 28, lastVisit: "2023-06-15" },
  { id: 2, name: "Bob Smith", age: 45, lastVisit: "2023-06-20" },
]

const appointments = [
  { id: 1, patientName: "Alice Johnson", date: "2023-07-03", time: "10:00" },
  { id: 2, patientName: "Bob Smith", date: "2023-07-04", time: "14:00" },
]

export default function DoctorDashboard() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleViewSurvey = (id: number) => {
    // Here you would typically fetch the survey details
    toast({
      title: "Survey Viewed",
      description: `Viewing survey for patient ${id}`,
    })
  }

  const handleManagePatient = (id: number) => {
    // Here you would typically navigate to a patient management page
    toast({
      title: "Patient Management",
      description: `Managing patient ${id}`,
    })
  }

  const handleJoinZoom = () => {
    setIsLoading(true)
    // Here you would typically initiate a Zoom call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Zoom Meeting",
        description: "Joining Zoom meeting...",
      })
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">New Survey Submissions</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          {newSurveys.map((survey) => (
            <div key={survey.id} className="flex justify-between items-center mb-2">
              <span>
                {survey.patientName} - {survey.submissionDate}
              </span>
              <Button onClick={() => handleViewSurvey(survey.id)}>View</Button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Patient Management</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          {patients.map((patient) => (
            <div key={patient.id} className="flex justify-between items-center mb-2">
              <span>
                {patient.name} - Age: {patient.age}, Last Visit: {patient.lastVisit}
              </span>
              <Button onClick={() => handleManagePatient(patient.id)}>Manage</Button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Upcoming Appointments</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="mb-2">
              <p>
                {appointment.patientName} - {appointment.date} at {appointment.time}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Zoom Integration</h2>
        <Button onClick={handleJoinZoom} disabled={isLoading}>
          {isLoading ? "Joining..." : "Join Next Zoom Meeting"}
        </Button>
      </div>
    </div>
  )
}

