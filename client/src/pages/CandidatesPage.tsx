import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Users, Globe, TrendingUp, Shield, Code, Briefcase } from "lucide-react";
import { insertCandidateApplicationSchema, type InsertCandidateApplication } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function CandidatesPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertCandidateApplication>({
    resolver: zodResolver(insertCandidateApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      skills: "",
      experience: "",
    },
  });

  const applicationMutation = useMutation({
    mutationFn: async (data: InsertCandidateApplication) => {
      const response = await apiRequest("POST", "/api/candidates/apply", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Application submitted successfully",
        description: "We'll review your profile and get back to you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertCandidateApplication) => {
    applicationMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="pt-12 pb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully</h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your interest in joining our network! Our team will review your profile and contact you within 5-7 business days.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left max-w-md mx-auto">
                  <li>• Profile review and technical assessment</li>
                  <li>• Initial screening call (if qualified)</li>
                  <li>• Skills evaluation and portfolio review</li>
                  <li>• Addition to our active candidate pool</li>
                  <li>• Matching with relevant opportunities</li>
                </ul>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary mr-4"
              >
                Submit Another Application
              </Button>
              <Button 
                onClick={() => window.location.href = "/"}
                className="btn-primary"
              >
                Learn More About Talendy
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 circuit-pattern"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain">
        {[...Array(19)].map((_, i) => (
          <div
            key={i}
            className="data-stream absolute w-px bg-gradient-to-b from-transparent via-orange-500/25 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              height: '110px'
            }}
          />
        ))}
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-orange-500 rounded-full floating-animation opacity-50"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400 rounded-full floating-animation opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-32 w-4 h-4 bg-orange-600 rounded-full floating-animation opacity-60" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6 pulse-glow">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-orange-500 text-sm font-semibold">FOR CANDIDATES</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            For Engineering <span className="text-orange-500 relative">
              Professionals
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-orange-500/20 rounded-full animate-pulse"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.3s'}}>
            Join our network of exceptional engineers and unlock global opportunities with innovative Asian companies. 
            Take your career to the next level with international experience and competitive compensation.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Join Talendy?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Globe className="text-primary mr-4 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Global Opportunities</h3>
                  <p className="text-gray-600">Work with innovative companies across Asia while enjoying the flexibility of remote work from India.</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="text-green-500 mr-4 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Competitive Compensation</h3>
                  <p className="text-gray-600">Earn international salaries with comprehensive benefits packages and performance bonuses.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Code className="text-amber-500 mr-4 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Career Growth</h3>
                  <p className="text-gray-600">Develop your skills working on cutting-edge projects with diverse, international teams.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="text-blue-500 mr-4 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Full Support</h3>
                  <p className="text-gray-600">We handle all legal and administrative aspects of international employment, so you can focus on what you do best.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Engineers collaborating on innovative technology projects"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Application Form */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Apply to Join Our Network</CardTitle>
                <p className="text-gray-600">
                  Start your journey with global opportunities. Fill out the form below and our team will review your profile.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@domain.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="skills"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Technical Skills</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="List your programming languages, frameworks, databases, cloud platforms, and other technical skills..."
                              rows={3}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience & Background</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your work experience, notable projects, education, and what type of opportunities you're looking for..."
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full btn-primary"
                      disabled={applicationMutation.isPending}
                    >
                      {applicationMutation.isPending ? "Submitting Application..." : "Submit Application"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Side Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">What We Look For</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Technical Excellence</p>
                    <p className="text-sm text-gray-600">Strong programming skills and problem-solving abilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Communication Skills</p>
                    <p className="text-sm text-gray-600">Excellent English communication for international teams</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Adaptability</p>
                    <p className="text-sm text-gray-600">Ability to work with diverse, global teams</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Growth Mindset</p>
                    <p className="text-sm text-gray-600">Eagerness to learn and take on new challenges</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm">1</div>
                    <div>
                      <p className="font-medium text-gray-900">Submit Application</p>
                      <p className="text-sm text-gray-600">Complete the form with your details</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm">2</div>
                    <div>
                      <p className="font-medium text-gray-900">Initial Review</p>
                      <p className="text-sm text-gray-600">Our team reviews your profile</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm">3</div>
                    <div>
                      <p className="font-medium text-gray-900">Assessment</p>
                      <p className="text-sm text-gray-600">Technical and cultural evaluation</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm">4</div>
                    <div>
                      <p className="font-medium text-gray-900">Network Addition</p>
                      <p className="text-sm text-gray-600">Join our active candidate pool</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Success Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-gray-600 italic">
                      "Talendy helped me land a senior engineer role with a fintech startup in Singapore. The support throughout the process was exceptional."
                    </p>
                    <p className="text-xs text-gray-500 mt-2">- Raj, Software Engineer</p>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4">
                    <p className="text-sm text-gray-600 italic">
                      "Working with an international team has accelerated my career growth. The compensation and benefits are excellent."
                    </p>
                    <p className="text-xs text-gray-500 mt-2">- Priya, Frontend Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Popular Roles Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Popular Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <Code className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Stack Developer</h3>
              <p className="text-gray-600 mb-3">Build end-to-end web applications using modern frameworks and technologies.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Node.js</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">MongoDB</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <Briefcase className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend Engineer</h3>
              <p className="text-gray-600 mb-3">Design and develop scalable server-side applications and APIs.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Java</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Spring</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">AWS</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <Users className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">DevOps Engineer</h3>
              <p className="text-gray-600 mb-3">Manage infrastructure, deployment pipelines, and cloud operations.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Docker</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Kubernetes</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Terraform</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of engineers who have advanced their careers through Talendy's global opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const formSection = document.querySelector('form');
                formSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Apply Now
            </Button>
            <Button 
              onClick={() => window.location.href = "/contact"}
              className="btn-secondary"
            >
              Have Questions? Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
