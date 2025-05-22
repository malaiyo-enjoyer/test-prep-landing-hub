
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase";


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  institutionName: z.string().min(2, { message: "Institution name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  institutionType: z.string({ required_error: "Please select institution type" }),
  interestedIn: z.string({ required_error: "Please select the exams you're interested in" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      institutionName: "",
      email: "",
      phone: "",
      institutionType: "",
      interestedIn: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    const web3Data = {
      access_key: import.meta.env.VITE_WEB3FORMS_API_KEY,
      subject: "New Lead from Test Prep Landing Hub",
      website: "https://test-prep-landing-hub.vercel.app",
      from_name:"Entrancevault",
      name: data.name,
      email: data.email,
      phone: data.phone,
      institutionName: data.institutionName,
      institutionType: data.institutionType,
      interestedIn: data.interestedIn,
      message: data.message,
    };


    try {
      await addDoc(collection(db, "contact-us"), {
        ...data,
        createdAt: Timestamp.now(),
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(web3Data),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Form Submitted Successfully!",
          description: "Thank you for your interest. Our team will contact you within 24 hours!",
        });

        form.reset();
      } else {
        throw new Error(result.message || "Web3Forms submission failed.");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      console.error("Error adding document: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Contact Person Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} className="focus:ring-2 focus:ring-navy/30 focus:border-navy" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="institutionName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Institution Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name of your institution" {...field} className="focus:ring-2 focus:ring-navy/30 focus:border-navy" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Email Address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="email@institution.com" {...field} className="focus:ring-2 focus:ring-navy/30 focus:border-navy" />
                    <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Phone Number</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="+91 98765 43210" {...field} className="focus:ring-2 focus:ring-navy/30 focus:border-navy" />
                    <Phone className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="institutionType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Institution Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="focus:ring-2 focus:ring-navy/30 focus:border-navy">
                      <SelectValue placeholder="Select institution type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="school">School</SelectItem>
                    <SelectItem value="coaching">Coaching Institute</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                    <SelectItem value="university">University</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interestedIn"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Interested In</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="focus:ring-2 focus:ring-navy/30 focus:border-navy">
                      <SelectValue placeholder="Select exam type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="jee">JEE Test Series</SelectItem>
                    <SelectItem value="neet">NEET Test Series</SelectItem>
                    <SelectItem value="gate">GATE Test Series</SelectItem>
                    <SelectItem value="all">All Test Series</SelectItem>
                    <SelectItem value="custom">Custom Solution</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-navy font-medium">Your Requirements</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your institution's specific needs and how we can help improve your students' performance..."
                  className="min-h-[120px] focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-2">
          <Button
            type="submit"
            className="bg-gradient-to-r from-navy to-navy-light hover:from-navy-light hover:to-navy text-white w-full py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Processing Your Request..."
            ) : (
              <>
                Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
          <p className="text-center text-gray-500 mt-4 text-sm">
            We typically respond to all inquiries within 24 business hours
          </p>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
