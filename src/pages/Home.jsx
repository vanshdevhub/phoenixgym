import { useState } from "react";
import MembershipCard from "../components/MembershipCard";
import TrainerCard from "../components/TrainerCard";
import ProgramCard from "../components/ProgramCard";
import TestimonialCard from "../components/TestimonialCard";
import GalleryCard from "../components/GalleryCard";
import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

function Home() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setSelectedProgram("");

    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    setSelectedPlan("");

    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <main>
      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section
        id="home"
        className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-black"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />

        {/* Content */}
        <div className="relative z-10 min-h-[calc(100svh-80px)] flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-10 lg:px-12 py-16 sm:py-20">
            <Reveal>
              <div className="max-w-4xl">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 sm:w-9 h-px bg-orange-500" />

                  <p className="text-orange-500 font-bold tracking-[0.16em] uppercase text-[10px] sm:text-xs md:text-sm">
                    Train. Transform. Become Stronger.
                  </p>
                </div>

                {/* Heading */}
                <h1 className="font-[var(--font-display)] text-[3.4rem] leading-[0.88] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-[-0.03em] text-white">
                  Build Your
                  <br />
                  <span className="text-orange-500">Strongest</span> Self.
                </h1>

                {/* Description */}
                <p className="mt-7 max-w-xl text-sm sm:text-base md:text-lg text-gray-300 leading-7">
                  Push your limits, build your strength, and become the best
                  version of yourself with expert coaching, quality equipment,
                  and a community built around progress.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="#membership"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1"
                  >
                    Explore Membership

                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </a>

                  <a
                    href="#programs"
                    className="w-full sm:w-auto inline-flex items-center justify-center border border-white/30 hover:border-white hover:bg-white hover:text-black text-white px-7 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1"
                  >
                    Explore Programs
                  </a>
                </div>

                {/* Trust Line */}
                <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-gray-500">
                  <span>Strength</span>
                  <span className="text-orange-500">•</span>
                  <span>Performance</span>
                  <span className="text-orange-500">•</span>
                  <span>Community</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Desktop Scroll Indicator */}
        <a
          href="#programs"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll to programs"
        >
          <span className="text-[9px] uppercase tracking-[0.25em]">
            Scroll
          </span>

          <span className="w-px h-8 bg-white/30 overflow-hidden relative">
            <span className="absolute top-0 left-0 w-full h-1/2 bg-orange-500 animate-pulse" />
          </span>
        </a>
      </section>

      {/* =========================================================
          WHY PHOENIX
      ========================================================== */}
      <section className="bg-zinc-950 text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Why Phoenix Gym"
              title={
                <>
                  More Than A Gym.
                  <br />
                  A Place To Grow.
                </>
              }
              description="Everything you need to train harder, stay consistent, and reach your fitness goals."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* Feature 1 */}
            <Reveal>
              <div className="h-full border border-white/10 bg-black/30 p-7 sm:p-8 hover:border-orange-500/60 hover:-translate-y-2 transition-all duration-300">
                <div className="text-orange-500 text-3xl font-black mb-6">
                  01
                </div>

                <h3 className="text-xl font-bold uppercase mb-4">
                  Expert Coaching
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Train with knowledgeable coaches who help you improve your
                  technique, strength, and overall performance.
                </p>
              </div>
            </Reveal>

            {/* Feature 2 */}
            <Reveal>
              <div className="h-full border border-white/10 bg-black/30 p-7 sm:p-8 hover:border-orange-500/60 hover:-translate-y-2 transition-all duration-300">
                <div className="text-orange-500 text-3xl font-black mb-6">
                  02
                </div>

                <h3 className="text-xl font-bold uppercase mb-4">
                  Modern Equipment
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Train with quality equipment designed to support everything
                  from strength training to functional workouts.
                </p>
              </div>
            </Reveal>

            {/* Feature 3 */}
            <Reveal>
              <div className="h-full border border-white/10 bg-black/30 p-7 sm:p-8 hover:border-orange-500/60 hover:-translate-y-2 transition-all duration-300">
                <div className="text-orange-500 text-3xl font-black mb-6">
                  03
                </div>

                <h3 className="text-xl font-bold uppercase mb-4">
                  Strong Community
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Surround yourself with motivated people who keep you
                  accountable and push you to become better.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAMS
      ========================================================== */}
      <section
        id="programs"
        className="bg-black text-white py-20 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Our Programs"
              title={
                <>
                  Train With
                  <br />
                  Purpose.
                </>
              }
              description="Choose a training program designed around your goals, fitness level, and lifestyle."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            <Reveal>
              <ProgramCard
                number="01"
                title="Strength Training"
                description="Build strength, improve technique, and develop a powerful foundation with structured resistance training."
                image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=90"
                onSelect={handleProgramSelect}
              />
            </Reveal>

            <Reveal>
              <ProgramCard
                number="02"
                title="Personal Training"
                description="Get one-on-one guidance with workouts tailored to your goals, experience, and individual needs."
                image="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1400&q=90"
                onSelect={handleProgramSelect}
              />
            </Reveal>

            <Reveal>
              <ProgramCard
                number="03"
                title="Fat Loss"
                description="Follow a structured training approach focused on improving fitness, building consistency, and supporting fat-loss goals."
                image="https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1400&q=90"
                onSelect={handleProgramSelect}
              />
            </Reveal>

            <Reveal>
              <ProgramCard
                number="04"
                title="Functional Training"
                description="Improve mobility, coordination, endurance, and everyday movement with dynamic functional workouts."
                image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=90"
                onSelect={handleProgramSelect}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================== */}
      <section className="bg-orange-500 text-black py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center">
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black">
                  1,000+
                </p>

                <p className="mt-2 uppercase text-xs sm:text-sm font-bold tracking-wide">
                  Members
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black">
                  10+
                </p>

                <p className="mt-2 uppercase text-xs sm:text-sm font-bold tracking-wide">
                  Expert Trainers
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black">
                  5+
                </p>

                <p className="mt-2 uppercase text-xs sm:text-sm font-bold tracking-wide">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black">
                  24/7
                </p>

                <p className="mt-2 uppercase text-xs sm:text-sm font-bold tracking-wide">
                  Motivation
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          TRAINERS
      ========================================================== */}
      <section
        id="trainers"
        className="bg-zinc-950 text-white py-20 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Meet The Team"
              title={
                <>
                  Coaches Who
                  <br />
                  Push You Forward.
                </>
              }
              description="Work with experienced trainers who are focused on helping you train with confidence and consistency."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <Reveal>
              <TrainerCard
                image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85"
                role="Strength Coach"
                name="Alex Carter"
                description="Focused on strength development, technique, and progressive training."
              />
            </Reveal>

            <Reveal>
              <TrainerCard
                image="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=85"
                role="Personal Trainer"
                name="Ryan Wilson"
                description="Helping members build consistency, confidence, and better training habits."
              />
            </Reveal>

            <Reveal>
              <TrainerCard
                image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85"
                role="Fitness Coach"
                name="Jordan Lee"
                description="Focused on functional training, conditioning, and overall fitness."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          MEMBERSHIP
      ========================================================== */}
      <section
        id="membership"
        className="bg-black text-white py-20 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Membership Plans"
              title={
                <>
                  Choose Your
                  <br />
                  Membership.
                </>
              }
              description="Choose the membership duration that works best for your fitness journey."
              centered={true}
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <Reveal>
              <MembershipCard
                duration="3 Months"
                price="₹3,499"
                monthlyPrice="₹1,166"
                onSelect={handlePlanSelect}
                features={[
                  "Full gym access",
                  "Cardio equipment",
                  "Strength equipment",
                  "Locker access",
                ]}
              />
            </Reveal>

            <Reveal>
              <MembershipCard
                duration="6 Months"
                price="₹5,999"
                monthlyPrice="₹1,000"
                popular={true}
                onSelect={handlePlanSelect}
                features={[
                  "Everything in 3 Months",
                  "Fitness assessment",
                  "Trainer guidance",
                  "Group training sessions",
                ]}
              />
            </Reveal>

            <Reveal>
              <MembershipCard
                duration="1 Year"
                price="₹9,999"
                monthlyPrice="₹833"
                onSelect={handlePlanSelect}
                features={[
                  "Everything in 6 Months",
                  "Personal training guidance",
                  "Personalized workout plan",
                  "Progress tracking",
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================== */}
      <section className="bg-zinc-950 text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Member Stories"
              title={
                <>
                  Real People.
                  <br />
                  Real Progress.
                </>
              }
              description="A strong community makes every workout better."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <Reveal>
              <TestimonialCard
                name="Arjun Mehta"
                role="Member"
                text="The environment keeps me motivated every single day. The trainers are supportive and the equipment is excellent."
              />
            </Reveal>

            <Reveal>
              <TestimonialCard
                name="Priya Sharma"
                role="Member"
                text="I finally became consistent with my training. The atmosphere here makes me want to show up and keep improving."
              />
            </Reveal>

            <Reveal>
              <TestimonialCard
                name="Rohan Kapoor"
                role="Member"
                text="The coaching and community made a huge difference in my training. I feel stronger and more confident than ever."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================== */}
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Inside Phoenix"
              title={
                <>
                  Train In
                  <br />
                  The Right Environment.
                </>
              }
              description="A space built for focused training, serious workouts, and consistent progress."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Reveal>
              <GalleryCard
                image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=90"
                title="Training Floor"
                className="h-[320px] md:h-[520px] lg:col-span-2 lg:row-span-2"
              />
            </Reveal>

            <Reveal>
              <GalleryCard
                image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=90"
                title="Strength Zone"
                className="h-[250px]"
              />
            </Reveal>

            <Reveal>
              <GalleryCard
                image="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=90"
                title="Personal Training"
                className="h-[250px]"
              />
            </Reveal>

            <Reveal>
              <GalleryCard
                image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=90"
                title="Workout Area"
                className="h-[280px] lg:h-[250px] lg:col-span-2"
              />
            </Reveal>

            <Reveal>
              <GalleryCard
                image="https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1200&q=90"
                title="Functional Training"
                className="h-[280px] lg:h-[250px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-orange-500 text-black py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 text-center">
          <Reveal>
            <p className="font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-5">
              Your Stronger Chapter Starts Here
            </p>

            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-[0.95]">
              Ready To
              <br />
              Get Started?
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
              Take the first step toward becoming stronger, healthier, and
              more confident. Visit Phoenix Gym or get in touch with our team
              today.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#membership"
                className="bg-black text-white hover:bg-zinc-900 hover:-translate-y-1 px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300"
              >
                Join Phoenix Gym
              </a>

              <a
                href="#contact"
                className="border-2 border-black hover:bg-black hover:text-white hover:-translate-y-1 px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================== */}
      <section
        id="contact"
        className="bg-zinc-950 text-white py-20 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

              {/* Contact Information */}
              <div>
                <SectionHeading
                  eyebrow="Visit Us"
                  title={
                    <>
                      Come Train
                      <br />
                      With Us.
                    </>
                  }
                  description="Ready to start? Visit our gym, speak with our team, and find the membership that works best for you."
                />

                <div className="mt-10 space-y-7">
                  {/* Location */}
                  <div>
                    <p className="text-orange-500 text-xs uppercase tracking-[0.2em] font-bold">
                      Location
                    </p>

                    <p className="mt-2 text-gray-300">
                      123 Fitness Street, Rohini, Delhi
                    </p>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Phoenix+Gym+Rohini+Delhi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors"
                    >
                      Get Directions
                      <span>↗</span>
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <p className="text-orange-500 text-xs uppercase tracking-[0.2em] font-bold">
                      Phone
                    </p>

                    <a
                      href="tel:+919876543210"
                      className="inline-block mt-2 text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>

                  {/* Instagram */}
                  <div>
                    <p className="text-orange-500 text-xs uppercase tracking-[0.2em] font-bold">
                      Instagram
                    </p>

                    <a
                      href="https://www.instagram.com/phoenixgymrohini/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      <span className="text-lg">◎</span>
                      @phoenixgymrohini
                    </a>
                  </div>

                  {/* Opening Hours */}
                  <div>
                    <p className="text-orange-500 text-xs uppercase tracking-[0.2em] font-bold">
                      Opening Hours
                    </p>

                    <p className="mt-2 text-gray-300">
                      Monday – Sunday
                    </p>

                    <p className="text-gray-500 mt-1">
                      6:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center border border-white/10 px-4 py-4 text-xs font-bold uppercase tracking-wide text-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
                  >
                    Call Gym
                  </a>

                  <a
                    href="https://www.instagram.com/phoenixgymrohini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center border border-white/10 px-4 py-4 text-xs font-bold uppercase tracking-wide text-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Phoenix+Gym+Rohini+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-orange-500 px-4 py-4 text-xs font-bold uppercase tracking-wide text-white hover:bg-orange-600 transition-all duration-300"
                  >
                    Directions
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm
                selectedPlan={selectedPlan}
                selectedProgram={selectedProgram}
              />

            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Home;