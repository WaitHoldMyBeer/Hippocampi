import PatientDashboard from "../components/PatientDashboard"

export default function PatientDashboardPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Patient Dashboard</h1>
        <PatientDashboard />
      </div>
    </div>
  )
}

