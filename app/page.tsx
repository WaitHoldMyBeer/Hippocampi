import Hero from "./components/Hero"
import Link from "next/link"
import { Button } from "../components/ui/button"

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Patient Management", "Appointment Scheduling", "Telemedicine Support"].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive {service.toLowerCase()} tailored to improve neurological care delivery.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Neurological Care?</h2>
          <p className="text-xl mb-8">Join Hippocampi today and experience the future of healthcare management.</p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/signup">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

