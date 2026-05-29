"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { HoverLift, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for solo developers getting started.",
    features: [
      "3 projects",
      "Basic AI assistant",
      "Community support",
      "1GB storage",
    ],
    cta: "Get Started",
    href: "/signup",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "For developers who ship daily.",
    features: [
      "Unlimited projects",
      "Advanced AI workspace",
      "Priority support",
      "10GB storage",
      "Team collaboration",
    ],
    cta: "Start Pro Trial",
    href: "/signup",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams with advanced needs.",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    href: "/signup",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-purple-400">
            Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-zinc-400">
            Start free. Scale when you&apos;re ready.
          </p>
        </div>

        <StaggerContainer className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <HoverLift>
                <GlassCard
                  className={`relative h-full flex flex-col ${
                    plan.popular
                      ? "border-indigo-500/30 neon-glow"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-3 py-0.5 text-xs font-medium text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-100">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-zinc-500">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">
                    {plan.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-zinc-300"
                      >
                        <Check className="h-4 w-4 shrink-0 text-indigo-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.href} className="mt-8 block">
                    <Button
                      variant={plan.popular ? "primary" : "secondary"}
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </GlassCard>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
