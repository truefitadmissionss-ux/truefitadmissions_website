import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, Users, Award } from "lucide-react"

export default function Mission() {
  return (
    <section
      id="mission"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 via-teal-50 to-green-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
            Our Mission:{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Hope Over Fear
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            At TrueFit Admissions, we replace fear with hope, guiding you toward colleges that truly fit your goals,
            values, and future. We help you discover your unique story and craft a compelling narrative that showcases
            who you truly are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-white/80 to-blue-100/60 backdrop-blur-sm border-blue-300 hover:shadow-lg transition-all hover:border-blue-400">
            <CardContent className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Discover Your Spark</h3>
              <p className="text-sm text-slate-700">Uncover your unique qualities and strengths</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/80 to-teal-100/60 backdrop-blur-sm border-teal-300 hover:shadow-lg transition-all hover:border-teal-400">
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Strategic Guidance</h3>
              <p className="text-sm text-slate-700">Personalized strategies for your journey</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/80 to-green-100/60 backdrop-blur-sm border-green-300 hover:shadow-lg transition-all hover:border-green-400">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Deep Mentorship</h3>
              <p className="text-sm text-slate-700">1:1 support from experienced guides</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/80 to-emerald-100/60 backdrop-blur-sm border-emerald-300 hover:shadow-lg transition-all hover:border-emerald-400">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Perfect Fit</h3>
              <p className="text-sm text-slate-700">Find colleges that match your values</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
