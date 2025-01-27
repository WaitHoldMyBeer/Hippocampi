import SurveyForm from "../components/SurveyForm"

export default function SurveyPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-center">Patient Survey</h1>
        <SurveyForm />
      </div>
    </div>
  )
}

