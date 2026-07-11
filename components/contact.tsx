"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Spinner } from "@/components/ui/spinner"
import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"

export function Contact() {
  const router = useRouter()
  const [formType, setFormType] = useState<"register" | "contact">("register")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    petInfo: "",
    message: "",
  })
  
  const [state, handleSubmit] = useForm("mqarynkl")
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  // Helper to safely check if a field has any errors
  const hasFieldError = (field: string) => {
    return !!(
      validationErrors[field] ||
      (state.errors && state.errors.getFieldErrors(field).length > 0)
    )
  }

  // Handle redirect on successful submission
  useEffect(() => {
    if (state.succeeded) {
      router.push("/thank-you")
    }
  }, [state.succeeded, router])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    if (validationErrors[id]) {
      setValidationErrors((prev) => {
        const updated = { ...prev }
        delete updated[id]
        return updated
      })
    }
  }

  const handleCustomSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValidationErrors({})

    // Form validation
    const errors: Record<string, string> = {}
    if (!formData.firstName.trim()) errors.firstName = "First name is required."
    if (!formData.lastName.trim()) errors.lastName = "Last name is required."
    if (!formData.email.trim()) {
      errors.email = "Email address is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address."
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required."

    if (formType === "register" && !formData.petInfo.trim()) {
      errors.petInfo = "Pet information is required."
    } else if (formType === "contact" && !formData.message.trim()) {
      errors.message = "Message is required."
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      return
    }

    // Call Formspree's handleSubmit
    await handleSubmit(e)
  }

  return (
    <section id="contact" className="py-10 sm:py-20 bg-white scroll-mt-20 px-5 sm:px-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-[#1e3a5f]">
            {formType === "register" ? "Contact the Practice" : "Get in Touch"}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {formType === "register"
              ? "Tell us about your pet and our team will be in touch."
              : "Have questions about our services? Contact our team."}
          </p>
          <div className="w-20 h-1.5 bg-[#00bcd4] mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Form Column */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#f9fafb] p-8 sm:p-12 rounded-[2.5rem] shadow-xl border-2 border-gray-100">
              {/* Form Selector Tabs */}
              <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-8">
                <button
                  type="button"
                  disabled={state.submitting}
                  onClick={() => {
                    setFormType("register")
                    setValidationErrors({})
                  }}
                  className={`flex-1 py-3 text-center rounded-xl text-base font-bold transition-all ${
                    formType === "register"
                      ? "bg-[#00bcd4] text-white shadow-lg"
                      : "text-[#1e3a5f]/70 hover:text-[#1e3a5f] hover:bg-gray-200/50"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  Pet Enquiry
                </button>
                <button
                  type="button"
                  disabled={state.submitting}
                  onClick={() => {
                    setFormType("contact")
                    setValidationErrors({})
                  }}
                  className={`flex-1 py-3 text-center rounded-xl text-base font-bold transition-all ${
                    formType === "contact"
                      ? "bg-[#00bcd4] text-white shadow-lg"
                      : "text-[#1e3a5f]/70 hover:text-[#1e3a5f] hover:bg-gray-200/50"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  General Enquiry
                </button>
              </div>

              {state.errors && (
                <Alert variant="destructive" className="mb-6 border-red-200 bg-red-50 text-red-800 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <AlertDescription>
                    <ValidationError errors={state.errors} />
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleCustomSubmit} className="space-y-6">
                <input type="hidden" name="formType" value={formType} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-base font-bold text-[#1e3a5f]">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={state.submitting}
                      placeholder="Your first name"
                      className={`h-14 rounded-xl border-2 focus:border-[#00bcd4] transition-all bg-white ${
                        hasFieldError("firstName")
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                      aria-invalid={hasFieldError("firstName") ? "true" : "false"}
                      aria-describedby={
                        validationErrors.firstName
                          ? "firstName-error"
                          : state.errors && state.errors.getFieldErrors("firstName").length > 0
                          ? "firstName-formspree-error"
                          : undefined
                      }
                    />
                    {validationErrors.firstName && (
                      <p id="firstName-error" role="alert" className="text-sm text-red-600 font-semibold">{validationErrors.firstName}</p>
                    )}
                    <ValidationError
                      prefix="First Name"
                      field="firstName"
                      errors={state.errors}
                      className="text-sm text-red-600 font-semibold mt-1"
                      role="alert"
                      id="firstName-formspree-error"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-base font-bold text-[#1e3a5f]">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={state.submitting}
                      placeholder="Your last name"
                      className={`h-14 rounded-xl border-2 focus:border-[#00bcd4] transition-all bg-white ${
                        hasFieldError("lastName")
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                      aria-invalid={hasFieldError("lastName") ? "true" : "false"}
                      aria-describedby={
                        validationErrors.lastName
                          ? "lastName-error"
                          : state.errors && state.errors.getFieldErrors("lastName").length > 0
                          ? "lastName-formspree-error"
                          : undefined
                      }
                    />
                    {validationErrors.lastName && (
                      <p id="lastName-error" role="alert" className="text-sm text-red-600 font-semibold">{validationErrors.lastName}</p>
                    )}
                    <ValidationError
                      prefix="Last Name"
                      field="lastName"
                      errors={state.errors}
                      className="text-sm text-red-600 font-semibold mt-1"
                      role="alert"
                      id="lastName-formspree-error"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-bold text-[#1e3a5f]">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={state.submitting}
                    placeholder="email@example.com"
                    className={`h-14 rounded-xl border-2 focus:border-[#00bcd4] transition-all bg-white ${
                      hasFieldError("email")
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : ""
                    }`}
                    aria-invalid={hasFieldError("email") ? "true" : "false"}
                    aria-describedby={
                      validationErrors.email
                        ? "email-error"
                        : state.errors && state.errors.getFieldErrors("email").length > 0
                        ? "email-formspree-error"
                        : undefined
                    }
                  />
                  {validationErrors.email && (
                    <p id="email-error" role="alert" className="text-sm text-red-600 font-semibold">{validationErrors.email}</p>
                  )}
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-sm text-red-600 font-semibold mt-1"
                    role="alert"
                    id="email-formspree-error"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-bold text-[#1e3a5f]">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={state.submitting}
                    placeholder="Your phone number"
                    className={`h-14 rounded-xl border-2 focus:border-[#00bcd4] transition-all bg-white ${
                      hasFieldError("phone")
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : ""
                    }`}
                    aria-invalid={hasFieldError("phone") ? "true" : "false"}
                    aria-describedby={
                      validationErrors.phone
                        ? "phone-error"
                        : state.errors && state.errors.getFieldErrors("phone").length > 0
                        ? "phone-formspree-error"
                        : undefined
                    }
                  />
                  {validationErrors.phone && (
                    <p id="phone-error" role="alert" className="text-sm text-red-600 font-semibold">{validationErrors.phone}</p>
                  )}
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                    className="text-sm text-red-600 font-semibold mt-1"
                    role="alert"
                    id="phone-formspree-error"
                  />
                </div>

                {formType === "register" ? (
                  <div className="space-y-2">
                    <Label htmlFor="petInfo" className="text-base font-bold text-[#1e3a5f]">Pet(s) Information</Label>
                    <Textarea
                      id="petInfo"
                      name="petInfo"
                      value={formData.petInfo}
                      onChange={handleChange}
                      disabled={state.submitting}
                      placeholder="Tell us about your pets (names, species, breeds...)"
                      className={`min-h-[120px] rounded-xl border-2 focus:border-[#00bcd4] transition-all bg-white ${
                        hasFieldError("petInfo")
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                      aria-invalid={hasFieldError("petInfo") ? "true" : "false"}
                      aria-describedby={
                        validationErrors.petInfo
                          ? "petInfo-error"
                          : state.errors && state.errors.getFieldErrors("petInfo").length > 0
                          ? "petInfo-formspree-error"
                          : undefined
                      }
                    />
                    {validationErrors.petInfo && (
                      <p id="petInfo-error" role="alert" className="text-sm text-red-600 font-semibold">{validationErrors.petInfo}</p>
                    )}
                    <ValidationError
                      prefix="Pet Information"
                      field="petInfo"
                      errors={state.errors}
                      className="text-sm text-red-600 font-semibold mt-1"
                      role="alert"
                      id="petInfo-formspree-error"
                    />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-bold text-[#1e3a5f]">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={state.submitting}
                      placeholder="How can we help you?"
                      className={`min-h-[120px] rounded-xl border-2 focus:border-[#00bcd4] transition-all bg-white ${
                        hasFieldError("message")
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                      aria-invalid={hasFieldError("message") ? "true" : "false"}
                      aria-describedby={
                        validationErrors.message
                          ? "message-error"
                          : state.errors && state.errors.getFieldErrors("message").length > 0
                          ? "message-formspree-error"
                          : undefined
                      }
                    />
                    {validationErrors.message && (
                      <p id="message-error" role="alert" className="text-sm text-red-600 font-semibold">{validationErrors.message}</p>
                    )}
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-sm text-red-600 font-semibold mt-1"
                      role="alert"
                      id="message-formspree-error"
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#00bcd4] hover:bg-[#00acc1] text-white font-black h-16 rounded-xl text-xl shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {state.submitting ? (
                    <>
                      <Spinner className="w-6 h-6 text-white animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>{formType === "register" ? "Send Pet Enquiry" : "Send Message"}</span>
                  )}
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  By submitting, you agree to our Privacy Policy and to receive updates about Almond Vet Care.
                </p>
              </form>
            </div>
          </div>

          {/* Info & Map Column */}
          <div className="order-1 lg:order-2 space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <a href="https://maps.google.com/?q=Lawgrove+Place+Perth+PH1+3XQ" target="_blank" rel="noopener noreferrer" className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#00b4d8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00b4d8] transition-colors">
                  <MapPin className="w-6 h-6 text-[#00b4d8] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] mb-1">Our Location</h4>
                  <p className="text-muted-foreground group-hover:text-[#00b4d8] transition-colors">Lawgrove Place<br />Inveralmond Industrial Estate<br />Perth, PH1 3XQ</p>
                </div>
              </a>
              <a href="tel:01738234811" className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#00b4d8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00b4d8] transition-colors">
                  <Phone className="w-6 h-6 text-[#00b4d8] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] mb-1">Call Us</h4>
                  <p className="text-[#00b4d8] font-bold group-hover:underline">01738 234811</p>
                </div>
              </a>
              <a href="mailto:reception@almondvetcare.org" className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#00b4d8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00b4d8] transition-colors">
                  <Mail className="w-6 h-6 text-[#00b4d8] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] mb-1">Email Us</h4>
                  <p className="text-[#00b4d8] font-bold group-hover:underline">reception@almondvetcare.org</p>
                </div>
              </a>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00b4d8]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#00b4d8]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] mb-1">Opening Hours</h4>
                  <dl className="text-muted-foreground text-sm leading-relaxed grid grid-cols-[auto_1fr] gap-x-4">
                    <dt>Monday</dt><dd>8am-7pm</dd>
                    <dt>Tuesday</dt><dd>8am-7pm</dd>
                    <dt>Wednesday</dt><dd>8am-7pm</dd>
                    <dt>Thursday</dt><dd>8am-7pm</dd>
                    <dt>Friday</dt><dd>8am-7pm</dd>
                    <dt>Saturday</dt><dd>8am-12pm</dd>
                    <dt>Sunday</dt><dd>9am-12pm</dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white h-[300px] sm:h-[400px] relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.956784561234!2d-3.468833!3d56.420861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTCheckingNDMnMTUuMSJOIDPCsDI4JzA3LjgiVw!5e0!3m2!1sen!2suk!4v1715760000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-[2.5rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
