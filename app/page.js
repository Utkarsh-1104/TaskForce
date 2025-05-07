import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, BarChart3, Users, Calendar, MessageSquare, ArrowRight, ChevronRight } from "lucide-react"
import CompanyCarousel from "@/components/CompanyCarousel"

export default function LandingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex items-center justify-center min-h-screen flex-col">
        {/* Header */}
        {/* <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-2 font-bold text-xl">
                <BarChart3 className="h-6 w-6" />
                <span>TaskForce</span>
              </div>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#features" className="text-sm font-medium hover:text-primary">
                Features
              </Link>
              <Link href="#companies" className="text-sm font-medium hover:text-primary">
                Customers
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
                How It Works
              </Link>
              <Link href="#pricing" className="text-sm font-medium hover:text-primary">
                Pricing
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Log in
              </Link>
              <Button>Get Started</Button>
            </div>
          </div>
        </header> */}

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-5">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Manage projects with precision and ease
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      TaskForce helps teams organize, track, and manage their work. Streamline your workflow and boost
                      productivity.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/onboarding">
                      <Button size="lg" className="px-8 cursor-pointer">
                        Start for free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="px-8 cursor-pointer">
                      Book a demo
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>No credit card required</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full h-[400px] overflow-hidden rounded-lg border bg-background p-2 shadow-2xl">
                    <Image
                      src="/hero.png"
                      alt="TaskForce Dashboard"
                      width={600}
                      height={400}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Everything you need to manage projects
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    TaskForce combines powerful features with an intuitive interface to help teams of all sizes deliver
                    projects on time.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Project Tracking</h3>
                  <p className="text-center text-muted-foreground">
                    Track progress, milestones, and deadlines with customizable dashboards.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Team Collaboration</h3>
                  <p className="text-center text-muted-foreground">
                    Assign tasks, share files, and communicate with your team in one place.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Sprint Planning</h3>
                  <p className="text-center text-muted-foreground">
                    Plan sprints, set goals, and prioritize tasks with agile methodologies.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Feedback & Comments</h3>
                  <p className="text-center text-muted-foreground">
                    Provide feedback and discuss tasks directly within the platform.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Reporting & Analytics</h3>
                  <p className="text-center text-muted-foreground">
                    Generate detailed reports to track team performance and project status.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Customizable Workflows</h3>
                  <p className="text-center text-muted-foreground">
                    Create custom workflows that match your team's unique processes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Used by Companies Section */}
          <section id="companies" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trusted by innovative teams</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    Join thousands of companies that use TaskForce to streamline their project management.
                  </p>
                </div>
              </div>
              <CompanyCarousel />
              {/* <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-4">
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Company Logo"
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Company Logo"
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Company Logo"
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Company Logo"
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div> */}
              <div className="mx-auto max-w-3xl border rounded-lg p-8 bg-muted/30">
                <blockquote className="text-center text-xl italic text-muted-foreground">
                  "TaskForce has transformed how our team manages projects. We've increased productivity by 35% and
                  reduced meeting time by half."
                </blockquote>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">CTO, TechCorp</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Getting Started
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How TaskForce works</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    Get up and running with TaskForce in minutes, not weeks.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Create your workspace</h3>
                  <p className="text-center text-muted-foreground">
                    Sign up and create your team workspace in less than 2 minutes.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Invite your team</h3>
                  <p className="text-center text-muted-foreground">
                    Add team members and assign roles based on their responsibilities.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Start managing projects</h3>
                  <p className="text-center text-muted-foreground">
                    Create your first project, add tasks, and start collaborating.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button size="lg" className="px-8">
                  Start your free trial
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Pricing</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    Choose the plan that's right for your team. All plans include a 14-day free trial.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Starter</h3>
                    <p className="text-muted-foreground">Perfect for small teams just getting started.</p>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="ml-1 text-muted-foreground">/user/month</span>
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Up to 10 team members</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>5 projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Basic reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>24/7 support</span>
                    </li>
                  </ul>
                  <Button className="mt-8" variant="outline">
                    Start free trial
                  </Button>
                </div>
                <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Professional</h3>
                    <p className="text-muted-foreground">For growing teams that need more features.</p>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">$19</span>
                    <span className="ml-1 text-muted-foreground">/user/month</span>
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Unlimited team members</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Unlimited projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Advanced reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Custom workflows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <Button className="mt-8">Start free trial</Button>
                </div>
                <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Enterprise</h3>
                    <p className="text-muted-foreground">For large organizations with specific needs.</p>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="ml-1 text-muted-foreground">/user/month</span>
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Everything in Professional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>SSO & advanced security</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>99.9% uptime SLA</span>
                    </li>
                  </ul>
                  <Button className="mt-8" variant="outline">
                    Contact sales
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Ready to transform your project management?
                  </h2>
                  <p className="max-w-[900px] md:text-xl/relaxed">
                    Join thousands of teams that use TaskForce to deliver projects on time, every time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="secondary" className="px-8">
                    Start your free trial
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground px-8">
                    Schedule a demo
                  </Button>
                </div>
                <p className="text-sm">No credit card required. 14-day free trial.</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full border-t bg-background py-6 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-xl">
                  <BarChart3 className="h-6 w-6" />
                  <span>TaskForce</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Project management software that helps teams deliver on time.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Roadmap
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} TaskForce. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
