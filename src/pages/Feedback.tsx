import * as React from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FormSchema = z.object({
  customer_name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  visit_frequency: z.enum(["First Time", "Weekly", "Monthly", "Rarely"], {
    required_error: "Please choose a visit frequency",
  }),
  coffee_quality: z.coerce.number().min(1).max(5),
  service_quality: z.coerce.number().min(1).max(5),
  favorite_item: z.string().min(2, "Please enter your favorite item"),
  improvement_suggestions: z.string().min(5, "Please add a short message"),
});

type FormValues = z.infer<typeof FormSchema>;

const Feedback = () => {
  const { toast } = useToast();
  const [webhookUrl, setWebhookUrl] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("n8n_webhook_url");
    if (saved) setWebhookUrl(saved);
  }, []);

  const saveWebhook = () => {
    localStorage.setItem("n8n_webhook_url", webhookUrl);
    toast({ title: "Saved", description: "Webhook URL saved locally." });
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      customer_name: "",
      email: "",
      visit_frequency: undefined as unknown as FormValues["visit_frequency"],
      coffee_quality: 5,
      service_quality: 5,
      favorite_item: "",
      improvement_suggestions: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data: FormValues) => {
    if (!webhookUrl) {
      toast({
        title: "Webhook URL missing",
        description: "Please add your n8n webhook URL and save it first.",
        variant: "destructive",
      });
      return;
    }

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(data),
      });
      toast({
        title: "Feedback sent",
        description: "Your feedback was sent. Check your n8n workflow history to confirm.",
      });
      form.reset();
    } catch (e) {
      console.error(e);
      toast({ title: "Error", description: "Failed to send feedback.", variant: "destructive" });
    }
  };

  const canonical = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="container mx-auto py-12 md:py-16">
      <Helmet>
        <title>Feedback | Cozy Cup Cafe</title>
        <meta name="description" content="Share your experience at Cozy Cup Cafe. We value your feedback to keep improving our coffee and service." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">We value your feedback</h1>
        <p className="text-muted-foreground mb-8">Tell us how we did and how we can improve.</p>

        <div className="mb-8 rounded-lg border bg-card p-4">
          <Label htmlFor="webhook">n8n Webhook URL</Label>
          <div className="mt-2 flex gap-2">
            <Input
              id="webhook"
              placeholder="https://n8n.yourdomain.com/webhook/XXXX"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
            />
            <Button type="button" variant="gold" onClick={saveWebhook}>Save</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Stored locally in your browser. Replace anytime.</p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="customer_name">Name</Label>
              <Input id="customer_name" {...form.register("customer_name")} />
              {form.formState.errors.customer_name && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.customer_name.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...form.register("email")} />
              {form.formState.errors.email && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Visit frequency</Label>
              <Select
                value={form.watch("visit_frequency") as any}
                onValueChange={(v) => form.setValue("visit_frequency", v as FormValues["visit_frequency"], { shouldValidate: true })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="pointer-events-auto">
                  <SelectItem value="First Time">First Time</SelectItem>
                  <SelectItem value="Weekly">Weekly</SelectItem>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                  <SelectItem value="Rarely">Rarely</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.visit_frequency && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.visit_frequency.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="favorite_item">Favorite item</Label>
              <Input id="favorite_item" {...form.register("favorite_item")} />
              {form.formState.errors.favorite_item && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.favorite_item.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Label>Coffee quality</Label>
              <RadioGroup
                defaultValue={String(form.getValues("coffee_quality"))}
                onValueChange={(v) => form.setValue("coffee_quality", Number(v), { shouldValidate: true })}
                className="flex gap-4"
              >
                {[1,2,3,4,5].map((n) => (
                  <div key={n} className="flex items-center gap-2">
                    <RadioGroupItem id={`coffee_${n}`} value={String(n)} />
                    <Label htmlFor={`coffee_${n}`}>{n}</Label>
                  </div>
                ))}
              </RadioGroup>
              {form.formState.errors.coffee_quality && (
                <p className="text-sm text-destructive mt-1">Rating is required</p>
              )}
            </div>
            <div>
              <Label>Service quality</Label>
              <RadioGroup
                defaultValue={String(form.getValues("service_quality"))}
                onValueChange={(v) => form.setValue("service_quality", Number(v), { shouldValidate: true })}
                className="flex gap-4"
              >
                {[1,2,3,4,5].map((n) => (
                  <div key={n} className="flex items-center gap-2">
                    <RadioGroupItem id={`service_${n}`} value={String(n)} />
                    <Label htmlFor={`service_${n}`}>{n}</Label>
                  </div>
                ))}
              </RadioGroup>
              {form.formState.errors.service_quality && (
                <p className="text-sm text-destructive mt-1">Rating is required</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="improvement_suggestions">Improvement suggestions</Label>
            <Textarea id="improvement_suggestions" rows={5} {...form.register("improvement_suggestions")} />
            {form.formState.errors.improvement_suggestions && (
              <p className="text-sm text-destructive mt-1">{form.formState.errors.improvement_suggestions.message}</p>
            )}
          </div>

          <Button type="submit" size="lg" variant="hero">Submit Feedback</Button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
