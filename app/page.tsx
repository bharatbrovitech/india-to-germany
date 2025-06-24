import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  FileText,
  Users,
  Home,
  Briefcase,
  Phone,
  Mail,
  Clock,
  Star,
  ArrowRight,
  Building2,
  GraduationCap,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function GermanyServicesWebsite() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-xl font-bold text-white">IndiaToGermany</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#visa" className="text-sm text-orange-100 hover:text-white transition-colors">
                Visa Help
              </Link>
              <Link href="#housing" className="text-sm text-orange-100 hover:text-white transition-colors">
                Housing & Anmeldung
              </Link>
              <Link href="#jobs" className="text-sm text-orange-100 hover:text-white transition-colors">
                Jobs
              </Link>
              <Link href="#groceries" className="text-sm text-orange-100 hover:text-white transition-colors">
                Groceries
              </Link>
              <Link href="#contact" className="text-sm text-orange-100 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-white hover:bg-orange-50 text-orange-600 px-6 font-semibold">Get Started</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-orange-50 via-white to-green-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Moving to Germany from India?
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto">
                  Expert help for visas, jobs & more.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-base shadow-lg"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 text-base"
                >
                  Free Consultation
                </Button>
              </div>

              <div className="pt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">1000+</div>
                    <div className="text-sm text-gray-500">Successful Relocations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-500">Visa Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-500">Expert Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full py-20 bg-gradient-to-br from-green-50 to-orange-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need for Germany</h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                  From visa applications to finding your first apartment, we've got you covered.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:scale-105">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Visa Processing</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Complete visa assistance including document preparation and application tracking.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:scale-105">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Job Placement</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Connect with German employers and get your dream job with our network.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:scale-105">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <Home className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Housing & Anmeldung</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Find apartments and complete your registration with German authorities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:scale-105">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Community Support</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Connect with Indian communities and find familiar groceries and restaurants.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                India-Germany: A Growing Partnership
              </h2>
              <p className="text-lg text-gray-500 mb-12">
                Join thousands of Indians who have successfully made Germany their new home.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">180K+</div>
                  <div className="text-sm text-gray-500">Indians in Germany</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">25K+</div>
                  <div className="text-sm text-gray-500">Students Annually</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">1.7K+</div>
                  <div className="text-sm text-gray-500">Indian Companies</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">€24B+</div>
                  <div className="text-sm text-gray-500">Trade Volume</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-20 bg-gradient-to-br from-orange-50 to-green-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
                <p className="text-lg text-gray-500">Real experiences from Indians who made Germany their home.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-white border-0 shadow-sm p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      "The visa process was seamless. They handled everything from document preparation to interview
                      coaching."
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">Priya Sharma</div>
                      <div className="text-sm text-gray-500">Software Engineer, Munich</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-sm p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      "Found my dream job in Berlin within 3 months. Their network of employers is incredible."
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">Rajesh Patel</div>
                      <div className="text-sm text-gray-500">Data Scientist, Berlin</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-sm p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      "They helped us find an apartment near an Indian temple and grocery stores. Perfect for our
                      family."
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">Dr. Arjun Mehta</div>
                      <div className="text-sm text-gray-500">Medical Professional, Hamburg</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your German journey?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Get personalized guidance from our experts who understand the unique challenges faced by Indians moving
                to Germany.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white hover:bg-orange-50 text-orange-600 px-8 py-3 text-base font-semibold shadow-lg"
                >
                  Get Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-base"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">info@indiatogermany.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gradient-to-r from-orange-50 to-green-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-900">IndiaToGermany</span>
            </div>
            <p className="text-xs text-gray-500">© 2024 IndiaToGermany. Making German dreams come true since 2014.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
