import SignUpForm from "../components/SignUpForm"

export default function SignUpPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-center">Sign Up for Hippocampi</h1>
        <SignUpForm />
      </div>
    </div>
  )
}

