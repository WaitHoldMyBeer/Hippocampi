import BookAppointmentForm from "../components/BookAppointmentForm"

export default function BookAppointmentPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-center">Book an Appointment</h1>
        <BookAppointmentForm />
      </div>
    </div>
  )
}

