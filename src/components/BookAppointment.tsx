import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Clock, Video, MapPin, User, Mail, Phone, MessageSquare, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

// Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoP0u6uyNFmTqrYOHz7o-FY82hz-dtW-I",
  authDomain: "ahmed-effd6.firebaseapp.com",
  projectId: "ahmed-effd6",
  storageBucket: "ahmed-effd6.firebasestorage.app",
  messagingSenderId: "1059277448571",
  appId: "1:1059277448571:web:1da4d37f3fb4c79de789de",
  measurementId: "G-WQDDPJ0ZCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const appointmentSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().min(10, { message: "Please enter a valid phone number" }).max(20),
  company: z.string().trim().min(2, { message: "Company name is required" }).max(100),
  service: z.string().min(1, { message: "Please select a service" }),
  meetingType: z.string().min(1, { message: "Please select meeting type" }),
  preferredDate: z.string().min(1, { message: "Please select a preferred date" }),
  preferredTime: z.string().min(1, { message: "Please select a preferred time" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const BookAppointment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      meetingType: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const services = [
    "HR Operations Setup & Process Optimization",
    "Personnel Management & Legal Compliance",
    "Social Insurance & Labor Office Coordination",
    "HR Policies, Procedures & Documentation Reviews",
    "General HR Consultation"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      });
    }
    return dates;
  };

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    
    try {
      // حفظ بيانات الحجز في Firebase Firestore
      const docRef = await addDoc(collection(db, "appointments"), {
        // معلومات شخصية
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        
        // تفاصيل الموعد
        service: data.service,
        meetingType: data.meetingType,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        message: data.message,
        
        // معلومات إضافية
        timestamp: serverTimestamp(),
        status: "pending", // حالة الموعد: pending, confirmed, completed, cancelled
        createdAt: new Date().toISOString(),
        
        // معلومات مفيدة للمتابعة
        appointmentId: `APT-${Date.now()}`,
        viewed: false, // هل تم الاطلاع على الموعد
        notes: "" // ملاحظات إضافية من المسؤول
      });

      console.log("✅ تم حفظ الموعد بنجاح! Document ID:", docRef.id);

      // عرض رسالة نجاح
      toast.success("✅ تم حجز الموعد بنجاح!");
      setIsSubmitted(true);
      
    } catch (error) {
      console.error("❌ خطأ في حفظ الموعد:", error);
      toast.error("❌ فشل في حجز الموعد. الرجاء المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5" id="book-appointment">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-none bg-gradient-to-br from-card to-accent/10 shadow-strong">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Appointment Booked Successfully!
                </h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for booking a consultation. You'll receive a confirmation email with meeting details shortly.
                </p>
                <Button 
                  onClick={() => {
                    setIsSubmitted(false);
                    form.reset();
                  }}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-primary text-primary-foreground"
                >
                  Book Another Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5" id="book-appointment">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              Book Consultation
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Book an Appointment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your HR operations? Schedule a consultation to discuss your specific needs 
              and discover how I can help your organization achieve excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Appointment Form */}
            <Card className="lg:col-span-2 border-none bg-gradient-to-br from-card to-accent/5 shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  Schedule Your Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground flex items-center gap-2">
                              <User className="w-4 h-4" />
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                {...field} 
                                className="border-border focus:ring-2 focus:ring-primary/20 transition-all"
                              />
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
                            <FormLabel className="text-foreground flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="your.email@company.com" 
                                {...field}
                                className="border-border focus:ring-2 focus:ring-primary/20 transition-all"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="+20 XXX XXX XXXX" 
                                {...field}
                                className="border-border focus:ring-2 focus:ring-primary/20 transition-all"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Company Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your company name" 
                                {...field}
                                className="border-border focus:ring-2 focus:ring-primary/20 transition-all"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Service Selection */}
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Service Needed</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-border focus:ring-2 focus:ring-primary/20">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Meeting Type */}
                    <FormField
                      control={form.control}
                      name="meetingType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Meeting Type</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 gap-4"
                            >
                              <div className="flex items-center space-x-2 p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                                <RadioGroupItem value="in-person" id="in-person" />
                                <Label htmlFor="in-person" className="flex items-center gap-2 cursor-pointer">
                                  <MapPin className="w-4 h-4 text-primary" />
                                  In-Person Meeting
                                </Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="preferredDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              Preferred Date
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-border focus:ring-2 focus:ring-primary/20">
                                  <SelectValue placeholder="Select a date" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {generateDateOptions().map((date) => (
                                  <SelectItem key={date.value} value={date.value}>
                                    {date.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              Preferred Time
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-border focus:ring-2 focus:ring-primary/20">
                                  <SelectValue placeholder="Select a time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            Additional Information
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your specific HR challenges and what you hope to achieve..." 
                              rows={4}
                              {...field}
                              className="border-border focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-primary text-primary-foreground shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Booking Appointment...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5 mr-2" />
                          Book Consultation
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="border-none bg-gradient-to-br from-primary/10 to-secondary/10 shadow-medium">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    What to Expect
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>✓ Needs assessment</div>
                    <div>✓ Custom solution proposal</div>
                    <div>✓ Implementation timeline</div>
                    <div>✓ Pricing discussion</div>
                    <div>✓ Q&A session</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;