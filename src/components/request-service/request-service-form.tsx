"use client";

import { useMemo, useState } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestServiceSchema, type RequestServiceInput } from "@/lib/validators";
import { getServices } from "@/lib/content";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";
import { FormProgress } from "@/components/request-service/form-progress";

const services = getServices();
const steps = ["Contact", "Issue", "Schedule"] as const;

export function RequestServiceForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const stepLabels = useMemo(() => steps.map((label) => label), []);
  const form = useForm<RequestServiceInput>({
    resolver: zodResolver(requestServiceSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      service: "",
      urgency: "soon",
      details: "",
      preferredDate: "",
      preferredTimeWindow: "any",
      contactPreference: "either",
      _company: "",
    },
    mode: "onTouched",
  });

  const fieldsByStep: Record<(typeof steps)[number], (keyof RequestServiceInput)[]> = useMemo(
    () => ({
      Contact: ["name", "email", "phone", "address", "city"],
      Issue: ["service", "urgency", "details"],
      Schedule: ["preferredDate", "preferredTimeWindow", "contactPreference"],
    }),
    [],
  );

  const goToStep = async (direction: 1 | -1) => {
    const currentStep = steps[step];
    if (direction > 0) {
      const valid = await form.trigger(fieldsByStep[currentStep], { shouldFocus: true });
      if (!valid) return;
    }
    setStep((prev) => Math.min(Math.max(prev + direction, 0), steps.length - 1));
  };

  const onSubmit = async (values: RequestServiceInput) => {
    setStatus("idle");
    setMessage("");
    try {
      const res = await fetch("/api/request-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error ?? "Unable to submit your request right now.");
      }
      setStatus("success");
      setMessage(result.message ?? "Request received. We’ll confirm shortly.");
      form.reset();
      setStep(0);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We couldn’t submit your request. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        noValidate
      >
        <FormProgress steps={stepLabels} currentStep={step} />
        <div className="space-y-6">
          {step === 0 && <ContactStep form={form} />}
          {step === 1 && <IssueStep form={form} />}
          {step === 2 && <ScheduleStep form={form} />}
        </div>

        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...form.register("_company")} />

        <div aria-live="polite" className="space-y-3">
          {status === "success" ? <Alert variant="success">{message}</Alert> : null}
          {status === "error" ? <Alert variant="error">{message}</Alert> : null}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={() => goToStep(-1)}
            disabled={step === 0 || form.formState.isSubmitting}
          >
            Previous
          </Button>
          {step < steps.length - 1 ? (
            <Button type="button" onClick={() => goToStep(1)} disabled={form.formState.isSubmitting}>
              Next
            </Button>
          ) : (
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Spinner size="sm" />
                  Sending…
                </span>
              ) : (
                "Submit request"
              )}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}

function ContactStep({ form }: { form: UseFormReturn<RequestServiceInput> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className="sm:col-span-1">
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Jane Smith" autoComplete="name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="sm:col-span-1">
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="you@example.com" autoComplete="email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem className="sm:col-span-1">
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input type="tel" placeholder="(555) 123-4567" autoComplete="tel" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem className="sm:col-span-1">
            <FormLabel>Service address</FormLabel>
            <FormControl>
              <Input placeholder="123 Main Street" autoComplete="address-line1" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="city"
        render={({ field }) => (
          <FormItem className="sm:col-span-1">
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input placeholder="Fortville" autoComplete="address-level2" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

function IssueStep({ form }: { form: UseFormReturn<RequestServiceInput> }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="service"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What do you need help with?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.slug} value={service.title}>
                    {service.title}
                  </SelectItem>
                ))}
                <SelectItem value="General plumbing">Something else</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="urgency"
        render={({ field }) => (
          <FormItem>
            <FormLabel>How urgent is it?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Choose urgency" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="emergency">Emergency – flooding or no water</SelectItem>
                <SelectItem value="soon">Within the next few days</SelectItem>
                <SelectItem value="planning">Planning / getting estimate</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="details"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Describe the issue</FormLabel>
            <FormControl>
              <Textarea rows={5} placeholder="Tell us what’s happening, when it started, and anything you’ve tried." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

function ScheduleStep({ form }: { form: UseFormReturn<RequestServiceInput> }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="preferredDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preferred date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormDescription>Leave blank if you&apos;re flexible.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="preferredTimeWindow"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preferred time window</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a window" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="morning">Morning (8a – 11a)</SelectItem>
                <SelectItem value="afternoon">Afternoon (11a – 2p)</SelectItem>
                <SelectItem value="evening">Late afternoon (2p – 5p)</SelectItem>
                <SelectItem value="any">Any time works</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="contactPreference"
        render={({ field }) => (
          <FormItem>
            <FormLabel>How should we reach you?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Choose an option" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="either">Phone or email is fine</SelectItem>
                <SelectItem value="phone">Phone call</SelectItem>
                <SelectItem value="email">Email only</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}


