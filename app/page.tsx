import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Plane,
  FileText,
  Users,
  Home,
  Briefcase,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GermanyServicesWebsite() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold">GermanyGuide</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-sm font-medium hover:text-red-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-red-600 transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-red-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-red-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700">Get Started</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-red-50 to-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">🇩🇪 Your Gateway to Germany</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Journey to Germany Starts Here
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Whether you're migrating for a new life or planning the perfect vacation, we provide comprehensive
                    services to make your German experience seamless and unforgettable.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    <Plane className="mr-2 h-4 w-4" />
                    Plan Your Journey
                  </Button>
                  <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50">
                    <Phone className="mr-2 h-4 w-4" />
                    Free Consultation
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-green-600" />
                    500+ Happy Clients
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-green-600" />
                    Expert Guidance
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-green-600" />
                    24/7 Support
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Germany landscape with castle"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive support for every aspect of your German journey
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* Migration Services */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Home className="h-6 w-6 text-red-600" />
                  <h3 className="text-2xl font-bold">Migration Services</h3>
                </div>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <span>Visa & Documentation</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Complete assistance with visa applications, work permits, and all required documentation for
                        permanent relocation.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Briefcase className="h-5 w-5 text-green-600" />
                        <span>Job Placement</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Connect with German employers, CV optimization, interview preparation, and career guidance in
                        your field.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Home className="h-5 w-5 text-purple-600" />
                        <span>Housing Solutions</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Find the perfect home with our housing search, rental assistance, and settlement support
                        services.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Vacation Services */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Plane className="h-6 w-6 text-red-600" />
                  <h3 className="text-2xl font-bold">Vacation Services</h3>
                </div>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-red-600" />
                        <span>Custom Itineraries</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Personalized travel plans covering Germany's best destinations, from historic castles to modern
                        cities.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-orange-600" />
                        <span>Guided Tours</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Expert local guides for cultural tours, historical sites, and authentic German experiences.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-teal-600" />
                        <span>Travel Support</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        24/7 travel assistance, booking management, and emergency support throughout your stay.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Why Choose GermanyGuide?
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With over 10 years of experience helping people achieve their German dreams, we're your trusted
                    partner every step of the way.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start space-x-3">
                    <Globe className="mt-1 h-5 w-5 text-red-600" />
                    <div>
                      <h4 className="font-semibold">Local Expertise</h4>
                      <p className="text-gray-600">Deep knowledge of German culture, laws, and best practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="mt-1 h-5 w-5 text-red-600" />
                    <div>
                      <h4 className="font-semibold">Personalized Service</h4>
                      <p className="text-gray-600">Tailored solutions that match your unique needs and goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="mt-1 h-5 w-5 text-red-600" />
                    <div>
                      <h4 className="font-semibold">End-to-End Support</h4>
                      <p className="text-gray-600">From initial planning to successful settlement or return.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Team helping clients"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real stories from people who achieved their German dreams with our help
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle>Sarah M.</CardTitle>
                  <CardDescription>Software Engineer - Migration Client</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "GermanyGuide made my dream of working in Berlin a reality. From visa processing to finding the
                    perfect apartment, they handled everything professionally."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle>James & Lisa K.</CardTitle>
                  <CardDescription>Vacation Clients</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Our 2-week German adventure was perfectly planned. Every detail was taken care of, and we
                    experienced Germany like locals. Absolutely unforgettable!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle>Ahmed R.</CardTitle>
                  <CardDescription>Medical Professional - Migration Client</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "The job placement service was exceptional. They connected me with a hospital in Munich and guided
                    me through the entire process. Highly recommended!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-red-600 to-red-700 text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Start Your German Journey?
                  </h2>
                  <p className="max-w-[600px] text-red-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get in touch with our experts today for a free consultation. Let's make your German dreams come
                    true.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <span>info@germanyguide.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5" />
                    <span>Mon-Fri: 9AM-6PM (EST)</span>
                  </div>
                </div>
              </div>
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle>Get Your Free Consultation</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Select a service</option>
                      <option value="migration">Migration Services</option>
                      <option value="vacation">Vacation Planning</option>
                      <option value="both">Both Services</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your plans and how we can help..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-red-600" />
          <span className="text-sm font-medium">GermanyGuide</span>
        </div>
        <p className="text-xs text-gray-600 sm:ml-auto">
          © 2024 GermanyGuide. All rights reserved. Making German dreams come true.
        </p>
      </footer>
    </div>
  )
}
