import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText, CheckCircle } from "lucide-react";
import { insertDownloadRequestSchema, type InsertDownloadRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function DownloadPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertDownloadRequest>({
    resolver: zodResolver(insertDownloadRequestSchema),
    defaultValues: {
      companyName: "",
      email: "",
      department: "",
    },
  });

  const downloadMutation = useMutation({
    mutationFn: async (data: InsertDownloadRequest) => {
      const response = await apiRequest("POST", "/api/download", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Download request submitted",
        description: "Your company overview will be sent to your email shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit download request",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertDownloadRequest) => {
    downloadMutation.mutate(data);
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
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Download Request Submitted</h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your interest in Talendy! Our company overview will be sent to your email within the next few minutes.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">What's included in the overview:</h3>
                <ul className="text-sm text-gray-600 space-y-1 text-left max-w-md mx-auto">
                  <li>• Comprehensive service descriptions</li>
                  <li>• Success stories and case studies</li>
                  <li>• Pricing and engagement models</li>
                  <li>• Implementation timeline</li>
                  <li>• Contact information for next steps</li>
                </ul>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary mr-4"
              >
                Download Another Resource
              </Button>
              <Button 
                onClick={() => window.location.href = "/contact"}
                className="btn-primary"
              >
                Schedule a Consultation
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
        {[...Array(17)].map((_, i) => (
          <div
            key={i}
            className="data-stream absolute w-px bg-gradient-to-b from-transparent via-orange-500/25 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              height: '100px'
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
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-glow">
            <Download className="text-white h-8 w-8" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Download <span className="text-orange-500 relative">
              Resources
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-orange-500/20 rounded-full animate-pulse"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.3s'}}>
            Access comprehensive guides, case studies, and resources to help you make informed 
            decisions about your global talent acquisition strategy.
          </p>
        </div>

        {/* Main Download Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Download Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Company Overview</CardTitle>
                <p className="text-gray-600">
                  Get detailed information about our services, success stories, and how we can help your company build exceptional engineering teams.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
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
                            <Input type="email" placeholder="your.email@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Engineering">Engineering</SelectItem>
                              <SelectItem value="HR">HR</SelectItem>
                              <SelectItem value="Management">Management</SelectItem>
                              <SelectItem value="Business Development">Business Development</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full btn-primary"
                      disabled={downloadMutation.isPending}
                    >
                      {downloadMutation.isPending ? "Processing..." : "Download Company Overview"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Resources */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Talendy Hub Guide</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Detailed guide on our direct recruitment platform and how it can help you find the right engineers.
                    </p>
                    <Button size="sm" variant="outline">Download PDF</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-amber-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">EOR Services Handbook</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Comprehensive overview of our Employer of Record services and compliance management.
                    </p>
                    <Button size="sm" variant="outline">Download PDF</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hiring Best Practices</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Expert insights on building successful international engineering teams.
                    </p>
                    <Button size="sm" variant="outline">Download PDF</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-purple-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Success Stories</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Real case studies of companies that have successfully scaled with Talendy.
                    </p>
                    <Button size="sm" variant="outline">Download PDF</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What's Included in Our Company Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Overview</h3>
              <p className="text-gray-600">
                Detailed descriptions of Talendy Hub and EOR services with feature comparisons.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Success Metrics</h3>
              <p className="text-gray-600">
                Real data on placement success rates, client satisfaction, and engineer retention.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation Guide</h3>
              <p className="text-gray-600">
                Step-by-step process for getting started with our platform and services.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need More Information?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is ready to discuss your specific requirements and answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = "/contact"}
              className="btn-primary"
            >
              Schedule a Consultation
            </Button>
            <Button 
              onClick={() => window.location.href = "/faq"}
              className="btn-secondary"
            >
              View FAQ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
