import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      companyName: "",
      email: "",
      name: "",
      department: "",
      serviceInterest: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
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
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully</h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for reaching out to Talendy! Our team has received your inquiry and will respond within 24 hours.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left max-w-md mx-auto">
                  <li>• Our team will review your requirements</li>
                  <li>• We'll prepare a customized solution proposal</li>
                  <li>• You'll receive a detailed response via email</li>
                  <li>• We'll schedule a consultation call if needed</li>
                </ul>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary mr-4"
              >
                Send Another Message
              </Button>
              <Button 
                onClick={() => window.location.href = "/download"}
                className="btn-primary"
              >
                Download Resources
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 circuit-pattern"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="data-stream absolute w-px bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              height: '80px'
            }}
          />
        ))}
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-orange-500 rounded-full floating-animation opacity-40"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400 rounded-full floating-animation opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-32 w-4 h-4 bg-orange-600 rounded-full floating-animation opacity-30" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6 pulse-glow">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-orange-500 text-sm font-semibold">WANT TO KNOW MORE</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Have Questions? <span className="text-orange-500 relative">
              Get in Touch with Us
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-orange-500/20 rounded-full animate-pulse"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            As we continue to make progress, rest assured that we are committed to keeping you informed and involved every step of the way. Your support and collaboration are invaluable to us.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 slide-in-left">
            <Card className="tech-card border-orange-500/30 relative overflow-hidden">
              {/* Animated circuit lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-transparent via-orange-500 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-white">We would love to hear from You!</CardTitle>
                <p className="text-gray-300">
                  Please fill the form below if you have any questions. We will try to get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company" {...field} />
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
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
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
                            <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select department" />
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
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="serviceInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select service of interest" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Talendy Hub (Direct Recruitment)">Talendy Hub (Direct Recruitment)</SelectItem>
                              <SelectItem value="Talendy EOR (Employer of Record)">Talendy EOR (Employer of Record)</SelectItem>
                              <SelectItem value="Both Services">Both Services</SelectItem>
                              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your hiring needs, team size, required skills, timeline, or any specific questions you have..."
                              rows={5}
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
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? "Sending Message..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">WE ARE HERE</CardTitle>
                <p className="text-orange-500 font-semibold">Contact Information</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-300">info@techjapan.work</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-white">Address</p>
                    <div className="text-gray-300 space-y-2">
                      <p><strong>Head Office:</strong> Japan, 2-21-3 Higashiueno, Taito-ku, Tokyo 110-0015</p>
                      <p><strong>India Office:</strong> Regus - The Estate Building, 8th Floor Cabin #817, Dickenson Road, Bengaluru 560042</p>
                      <p><strong>Singapore Office:</strong> TALENDY HOLDINGS PTE. LTD. 390 HAVELOCK ROAD #07-02 KING'S CENTRE Singapore 169662</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Quick Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Our team typically responds to inquiries within:
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">General Inquiries:</span>
                    <span className="font-medium text-gray-900">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Urgent Requests:</span>
                    <span className="font-medium text-gray-900">4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Technical Support:</span>
                    <span className="font-medium text-gray-900">2 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Other Ways to Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Schedule a Video Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Request a Callback
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Visit Our Office
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our frequently asked questions or download our resources for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = "/faq"}
              className="btn-secondary"
            >
              View FAQ
            </Button>
            <Button 
              onClick={() => window.location.href = "/download"}
              className="btn-primary"
            >
              Download Resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
