"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function About() {
  return (
    <div>
      <main>
        {/* Hero / Intro about Karim */}
        <section className="overflow-hidden bg-white dark:bg-transparent">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="">Karim Shaikh</h2>
              <p className="mx-auto my-6 max-w-2xl text-lg">
                Software developer specializing in web applications, WebGL
                animations, and blockchain integrations. I build fast, secure,
                and delightful user experiences.
              </p>

              <div className="flex justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="#contact">
                    <span>Contact</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#projects">Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About / Background */}
        <section className="py-16">
          <div className="m-auto max-w-5xl px-6">
            <div className="mx-auto max-w-3xl text-lg leading-relaxed">
              <h2 className="mb-4 text-2xl font-semibold">About me</h2>
              <p>
                I'm Karim, a full-stack software developer with a passion for
                building performant front-end experiences and resilient
                backends. I enjoy working with modern React stacks, TypeScript,
                WebGL for interactive visuals, and experimenting with
                blockchain tooling for secure integrations.
              </p>
              <p className="mt-4">
                I'm available for freelance work and collaborations. I focus on
                shipping quality, accessible interfaces and well-tested code.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-background py-16">
          <div className="m-auto max-w-5xl px-6">
            <h3 className="mb-8 text-center text-2xl font-semibold">Skills</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6">
                <CardContent>
                  <CardTitle>Frontend</CardTitle>
                  <CardDescription>
                    React, Next.js, TypeScript, Tailwind CSS, accessibility,
                    performance optimizations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <CardTitle>Graphics</CardTitle>
                  <CardDescription>
                    WebGL, Three.js, GLSL shaders, motion design and canvas
                    optimizations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <CardTitle>Backend & Blockchain</CardTitle>
                  <CardDescription>
                    Node.js, databases, REST/GraphQL APIs, smart contract
                    integrations and web3 tooling.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <div className="m-auto max-w-5xl px-6">
            <h3 className="mb-8 text-center text-2xl font-semibold">Selected projects</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6">
                <CardContent>
                  <CardTitle>WebGL Portfolio</CardTitle>
                  <CardDescription>
                    Interactive WebGL portfolio with custom shaders and
                    performance optimizations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <CardTitle>DeFi Dashboard</CardTitle>
                  <CardDescription>
                    Dashboard for tracking on-chain positions, analytics and
                    alerts.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <CardTitle>Open-source UI Kit</CardTitle>
                  <CardDescription>
                    A set of accessible UI primitives and components used across
                    multiple projects.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="bg-background py-16">
          <div className="m-auto max-w-5xl px-6 text-center">
            <h3 className="mb-4 text-2xl font-semibold">Let’s build something</h3>
            <p className="mx-auto mb-6 max-w-2xl">
              If you have an idea or a project and you'd like to collaborate,
              send a message — I usually respond within a day.
            </p>
            <Button asChild>
              <a href="mailto:karim@example.com">Email me</a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
