"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Users,
  Home,
  Briefcase,
  Phone,
  Mail,
  Star,
  Calendar,
  Heart,
  Plane,
  Globe,
  CheckCircle,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function GermanyServicesWebsite() {
  const [currentStep, setCurrentStep] = useState(0)
  const [animatedStats, setAnimatedStats] = useState({ users: 0, success: 0, support: 0 })
  const [selectedCity, setSelectedCity] = useState("berlin")

  const journeySteps = [
    { icon: Heart, title: "Dream", desc: "Your German dream begins", color: "from-red-500 to-pink-500" },
    { icon: FileText, title: "Plan", desc: "We create your roadmap", color: "from-orange-500 to-yellow-500" },
    { icon: CheckCircle, title: "Prepare", desc: "Documents & applications", color: "from-green-500 to-emerald-500" },
    { icon: Plane, title: "Journey", desc: "Your flight to Germany", color: "from-blue-500 to-cyan-500" },
    { icon: Home, title: "Settle", desc: "Your new German home", color: "from-purple-500 to-indigo-500" },
  ]

  const cities = {
    berlin: { name: "Berlin", temp: "18°C", cost: "€1,200", jobs: "15,000+", culture: "Tech & Arts Hub" },
    munich: { name: "Munich", temp: "16°C", cost: "€1,500", jobs: "12,000+", culture: "Traditional & Modern" },
    hamburg: { name: "Hamburg", temp: "15°C", cost: "€1,300", jobs: "8,000+", culture: "Maritime Culture" },
    frankfurt: { name: "Frankfurt", temp: "17°C", cost: "€1,400", jobs: "10,000+", culture: "Financial Center" },
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % journeySteps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const animateStats = () => {
      const targets = { users: 180, success: 95, support: 24 }
      const duration = 2000
      const steps = 60
      const increment = {
        users: targets.users / steps,
        success: targets.success / steps,
        support: targets.support / steps,
      }

      let step = 0
      const timer = setInterval(() => {
        step++
        setAnimatedStats({
          users: Math.min(Math.floor(increment.users * step), targets.users),
          success: Math.min(Math.floor(increment.success * step), targets.success),
          support: Math.min(Math.floor(increment.support * step), targets.support),
        })
        if (step >= steps) clearInterval(timer)
      }, duration / steps)
    }

    animateStats()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Floating Navigation */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-lg rounded-full shadow-2xl border border-orange-200">
        <div className="px-8 py-3">
          <nav className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-green-500 rounded-full animate-pulse"></div>
              <span className="text-lg font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                IndiaToGermany
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#journey" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                Journey
              </Link>
              <Link href="#cities" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                Cities
              </Link>
              <Link href="#culture" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                Culture
              </Link>
              <Link href="#stories" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                Stories
              </Link>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white px-6 rounded-full">
              Start Journey
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section with Interactive Bridge */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-green-100"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-bounce delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-200 rounded-full opacity-20 animate-bounce delay-2000"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto text-center space-y-12">
              <div className="space-y-8">
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <div className="text-6xl">🇮🇳</div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                  </div>
                  <div className="text-6xl">🇩🇪</div>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-orange-600 via-red-500 to-green-600 bg-clip-text text-transparent">
                    Bridge
                  </span>
                  <br />
                  <span className="text-gray-900">Your Dreams</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
                  From the vibrant streets of India to the innovative cities of Germany - we're your cultural bridge to
                  a new life.
                </p>
              </div>

              {/* Interactive Journey Steps */}
              <div className="flex flex-wrap justify-center gap-4 py-8">
                {journeySteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-500 cursor-pointer ${
                        currentStep === index
                          ? `bg-gradient-to-r ${step.color} text-white shadow-lg scale-110`
                          : "bg-white text-gray-600 hover:shadow-md"
                      }`}
                      onClick={() => setCurrentStep(index)}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{step.title}</span>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Start Your Journey
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-10 py-4 text-lg rounded-full"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {animatedStats.users}K+
                  </div>
                  <div className="text-sm text-gray-500 mt-2">Indians in Germany</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {animatedStats.success}%
                  </div>
                  <div className="text-sm text-gray-500 mt-2">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {animatedStats.support}/7
                  </div>
                  <div className="text-sm text-gray-500 mt-2">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive City Explorer */}
        <section className="w-full py-20 bg-white" id="cities">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Explore German Cities</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Interactive city guide to help you choose your perfect German destination
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  {Object.entries(cities).map(([key, city]) => (
                    <Card
                      key={key}
                      className={`cursor-pointer transition-all duration-300 ${
                        selectedCity === key ? "ring-2 ring-orange-500 shadow-xl scale-105" : "hover:shadow-lg"
                      }`}
                      onClick={() => setSelectedCity(key)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
                            <p className="text-gray-600">{city.culture}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-orange-600">{city.jobs}</div>
                            <div className="text-sm text-gray-500">Available Jobs</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-3xl p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {cities[selectedCity as keyof typeof cities].name}
                    </h3>
                    <Badge className="bg-orange-100 text-orange-800">
                      {cities[selectedCity as keyof typeof cities].culture}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white rounded-2xl">
                      <div className="text-2xl mb-2">🌡️</div>
                      <div className="font-bold text-gray-900">{cities[selectedCity as keyof typeof cities].temp}</div>
                      <div className="text-sm text-gray-500">Avg Temperature</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-2xl">
                      <div className="text-2xl mb-2">💰</div>
                      <div className="font-bold text-gray-900">{cities[selectedCity as keyof typeof cities].cost}</div>
                      <div className="text-sm text-gray-500">Monthly Cost</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-2xl">
                      <div className="text-2xl mb-2">💼</div>
                      <div className="font-bold text-gray-900">{cities[selectedCity as keyof typeof cities].jobs}</div>
                      <div className="text-sm text-gray-500">Job Openings</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-2xl">
                      <div className="text-2xl mb-2">🏠</div>
                      <div className="font-bold text-gray-900">Available</div>
                      <div className="text-sm text-gray-500">Housing Options</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Fusion Services */}
        <section className="w-full py-20 bg-gradient-to-br from-orange-50 to-green-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cultural Bridge Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Bridging two beautiful cultures with expert guidance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: FileText,
                    title: "Visa Magic",
                    desc: "Transform paperwork into possibilities",
                    color: "from-orange-400 to-red-500",
                    emoji: "📋",
                  },
                  {
                    icon: Briefcase,
                    title: "Dream Jobs",
                    desc: "Connect with your ideal German employer",
                    color: "from-green-500 to-emerald-600",
                    emoji: "💼",
                  },
                  {
                    icon: Home,
                    title: "Perfect Homes",
                    desc: "Find your cozy German nest",
                    color: "from-blue-500 to-cyan-600",
                    emoji: "🏠",
                  },
                  {
                    icon: Users,
                    title: "Desi Community",
                    desc: "Connect with fellow Indians",
                    color: "from-purple-500 to-pink-600",
                    emoji: "👥",
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 hover:scale-105 cursor-pointer"
                  >
                    <CardContent className="p-0 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300`}
                      >
                        <span className="text-2xl">{service.emoji}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3 text-xl">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Calendar */}
        <section className="w-full py-20 bg-white" id="culture">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cultural Calendar</h2>
                <p className="text-xl text-gray-600">Celebrate both cultures in your new German home</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-0 p-8">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="text-3xl">🇮🇳</div>
                      <h3 className="text-2xl font-bold text-gray-900">Indian Festivals</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: "Diwali", date: "Nov 12", icon: "🪔" },
                        { name: "Holi", date: "Mar 25", icon: "🎨" },
                        { name: "Dussehra", date: "Oct 15", icon: "🏹" },
                      ].map((festival, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">{festival.icon}</span>
                            <span className="font-medium">{festival.name}</span>
                          </div>
                          <Badge variant="secondary">{festival.date}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 p-8">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="text-3xl">🇩🇪</div>
                      <h3 className="text-2xl font-bold text-gray-900">German Traditions</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: "Oktoberfest", date: "Sep 16", icon: "🍺" },
                        { name: "Christmas Markets", date: "Dec 1", icon: "🎄" },
                        { name: "Karneval", date: "Feb 20", icon: "🎭" },
                      ].map((festival, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">{festival.icon}</span>
                            <span className="font-medium">{festival.name}</span>
                          </div>
                          <Badge variant="secondary">{festival.date}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Carousel */}
        <section className="w-full py-20 bg-gradient-to-br from-green-50 to-blue-50" id="stories">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
                <p className="text-xl text-gray-600">Real journeys, real dreams achieved</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Priya Sharma",
                    role: "Software Engineer",
                    city: "Munich",
                    story: "From Bangalore to Munich - found my dream job in just 2 months!",
                    avatar: "👩‍💻",
                    rating: 5,
                  },
                  {
                    name: "Rajesh Patel",
                    role: "Data Scientist",
                    city: "Berlin",
                    story: "The cultural bridge made my transition so smooth. Now I'm thriving!",
                    avatar: "👨‍🔬",
                    rating: 5,
                  },
                  {
                    name: "Dr. Arjun Mehta",
                    role: "Medical Professional",
                    city: "Hamburg",
                    story: "Found the perfect balance of German efficiency and Indian warmth.",
                    avatar: "👨‍⚕️",
                    rating: 5,
                  },
                ].map((story, index) => (
                  <Card
                    key={index}
                    className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
                  >
                    <CardContent className="p-0 text-center">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {story.avatar}
                      </div>
                      <div className="flex justify-center space-x-1 mb-4">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 italic leading-relaxed">"{story.story}"</p>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{story.name}</div>
                        <div className="text-orange-600 font-medium">{story.role}</div>
                        <div className="text-gray-500 text-sm">{story.city}, Germany</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Cross the Bridge?</h2>
              <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto">
                Your German adventure is just one click away. Let's build your bridge to success together!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-orange-600 px-10 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Start My Journey
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-4 text-lg rounded-full"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Expert
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center space-x-2 text-gray-200">
                  <Phone className="h-5 w-5" />
                  <span>+49 (30) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-200">
                  <Mail className="h-5 w-5" />
                  <span>hello@indiatogermany.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-200">
                  <Globe className="h-5 w-5" />
                  <span>Available Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-green-500 rounded-full animate-pulse"></div>
              <span className="text-xl font-bold text-white">IndiaToGermany</span>
              <div className="flex space-x-2">
                <span className="text-2xl">🇮🇳</span>
                <Heart className="h-5 w-5 text-red-500 animate-pulse" />
                <span className="text-2xl">🇩🇪</span>
              </div>
            </div>
            <p className="text-gray-400 text-center">
              © 2024 IndiaToGermany. Building bridges, creating dreams.
              <span className="text-orange-400 ml-2">Made with ❤️ for the Indian community</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
