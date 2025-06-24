import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Building2, Users, TrendingUp, MapPin, Calendar } from "lucide-react"

export function IndiaGermanySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
            🇮🇳 🤝 🇩🇪 Strong Bilateral Relations
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">India-Germany: A Growing Partnership</h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Germany is becoming the top destination for skilled Indians. Join thousands who have already made the move.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="text-center">
            <CardHeader>
              <Users className="h-8 w-8 mx-auto text-blue-600" />
              <CardTitle className="text-2xl font-bold text-blue-600">180,000+</CardTitle>
              <CardDescription>Indians living in Germany</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Growing Indian community across major German cities</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <GraduationCap className="h-8 w-8 mx-auto text-green-600" />
              <CardTitle className="text-2xl font-bold text-green-600">25,000+</CardTitle>
              <CardDescription>Indian students annually</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Studying in world-class German universities</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Building2 className="h-8 w-8 mx-auto text-purple-600" />
              <CardTitle className="text-2xl font-bold text-purple-600">1,700+</CardTitle>
              <CardDescription>Indian companies in Germany</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Creating job opportunities for Indian professionals</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="h-8 w-8 mx-auto text-red-600" />
              <CardTitle className="text-2xl font-bold text-red-600">€24B+</CardTitle>
              <CardDescription>Bilateral trade volume</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Strong economic partnership creating opportunities</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <MapPin className="h-6 w-6 text-orange-600" />
              <CardTitle>Popular Cities for Indians</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>Berlin</span>
                <Badge variant="secondary">Tech Hub</Badge>
              </div>
              <div className="flex justify-between">
                <span>Munich</span>
                <Badge variant="secondary">Engineering</Badge>
              </div>
              <div className="flex justify-between">
                <span>Frankfurt</span>
                <Badge variant="secondary">Finance</Badge>
              </div>
              <div className="flex justify-between">
                <span>Hamburg</span>
                <Badge variant="secondary">Maritime</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <GraduationCap className="h-6 w-6 text-green-600" />
              <CardTitle>Top Study Fields</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>Engineering</span>
                <Badge variant="secondary">35%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Computer Science</span>
                <Badge variant="secondary">28%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Business</span>
                <Badge variant="secondary">20%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Medicine</span>
                <Badge variant="secondary">17%</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="h-6 w-6 text-blue-600" />
              <CardTitle>Best Time to Apply</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <strong>University Applications:</strong>
                <p className="text-sm text-gray-600">December - February</p>
              </div>
              <div>
                <strong>Job Applications:</strong>
                <p className="text-sm text-gray-600">Year-round</p>
              </div>
              <div>
                <strong>Tourist Season:</strong>
                <p className="text-sm text-gray-600">May - September</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
