import parajImage from "../assets/paraj.jpg";
import vishalImage from "../assets/vishal.jpg";
import harshImage from "../assets/harsh.jpg";
import bhaskarImage from "../assets/bhaskar.jpg";


import {
  ClipboardList,
  ShieldCheck,
  BarChart3,
  LayoutDashboard,
  Zap,
  Users, 
  UserPlus,
  Activity,
  LayoutGrid,
  Workflow,
  User,
  LogIn,
  ArrowRight,
  Rocket,
} from "lucide-react";

export default function HomePage() {

  return (
<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">

  {/* NAVBAR */}
  <nav
    className="
      sticky top-0 z-50
      bg-slate-950/80
      backdrop-blur-xl
      border-b border-white/10
    "
  >
    <div
      className="
        px-4 sm:px-6 lg:px-20
        h-16
        flex items-center justify-between
      "
    >

<a
  href="/"
  className="
    text-xl md:text-2xl
    font-extrabold
    tracking-wide

    bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300
    bg-clip-text text-transparent

    drop-shadow-sm
    hover:drop-shadow-md
    transition
  "
>
  Leadash
</a>

      {/* ================= DESKTOP NAV ================= */}
      <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
        <a href="#features" className="hover:text-cyan-400 transition">Features</a>
        <a href="#workflow" className="hover:text-cyan-400 transition">Workflow</a>
        <a href="#team" className="hover:text-cyan-400 transition">Team</a>
        <a href="/developer" className="hover:text-cyan-400 transition">Developer</a>
      </div>

      {/* DESKTOP ACTIONS */}
      <div className="hidden md:flex items-center gap-3">

        <a
          href="/login"
          className="
            p-2.5 rounded-xl
            bg-white/5 border border-white/10
            hover:border-cyan-400/40 transition
          "
        >
          <LogIn size={18} />
        </a>

        <a href="/register">
          <button
            className="
              px-5 py-2.5 rounded-full
              bg-cyan-500 text-black font-semibold
              shadow-lg shadow-cyan-500/30
              hover:scale-105 transition
            "
          >
            Get Started
          </button>
        </a>

      </div>

      {/* ================= MOBILE CENTER TRAY ================= */}
      <div className="md:hidden flex-1 flex justify-center">
        <div
          className="
            flex items-center gap-2
            bg-white/5
            border border-white/10
            rounded-2xl
            px-3 py-0.5
          "
        >
          <a href="#features" className="p-2 rounded-xl hover:bg-white/10 transition">
            <LayoutGrid size={20} className="text-slate-300" />
          </a>

          <a href="#workflow" className="p-2 rounded-xl hover:bg-white/10 transition">
            <Workflow size={20} className="text-slate-300" />
          </a>

          <a href="#team" className="p-2 rounded-xl hover:bg-white/10 transition">
            <Users size={20} className="text-slate-300" />
          </a>

          <a href="/developer" className="p-2 rounded-xl hover:bg-white/10 transition">
            <User size={20} className="text-slate-300" />
          </a>
        </div>
      </div>

      {/* MOBILE RIGHT ACTIONS */}
      <div className="md:hidden flex items-center gap-2">

        <a
          href="/login"
          className="
            p-2 rounded-xl
            bg-white/10
            border border-white/10
            hover:bg-white/20
            transition
          "
        >
          <LogIn size={18} className="text-slate-200" />
        </a>

        <a
          href="/register"
          className="
            p-2 rounded-xl
            bg-cyan-500
            text-black
            shadow-md shadow-cyan-500/30
            hover:scale-105 transition
          "
        >
          <ArrowRight size={20} />
        </a>

      </div>

    </div>
  </nav>


{/* HERO SECTION */}
<section className="relative px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 overflow-hidden">

  {/* Glow Effects (slightly reduced on mobile impact) */}
  <div className="absolute top-16 left-0 w-40 sm:w-72 h-40 sm:h-72 bg-cyan-500/20 blur-[100px] rounded-full" />
  <div className="absolute bottom-10 right-0 w-40 sm:w-72 h-40 sm:h-72 bg-purple-500/20 blur-[100px] rounded-full" />

  {/* LEFT */}
  <div className="flex-1 z-10 text-center lg:text-left">

<div className="inline-flex items-center gap-2 px-2.5 sm:px-4 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-[10px] sm:text-sm mb-4 sm:mb-6">
  
  {/* ICON */}
  <Rocket size={14} className="text-cyan-300" />

  <span className="tracking-wide">
    Full Stack Task Management Platform
  </span>

</div>

    {/* Heading (mobile optimized) */}
    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-[1.1] sm:leading-tight">
      Manage Tasks
      <br />
      <span className="text-cyan-400">
        Like a Pro
      </span>
    </h1>

    {/* Paragraph */}
    <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
      Leadash helps teams manage tasks, assign work, track progress,
      monitor productivity, and collaborate efficiently through a
      modern dashboard experience.
    </p>

{/* Buttons */}
<div className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">

  {/* PRIMARY */}
  <a href="/register" className="w-full sm:w-auto">
    <button className="
      w-full sm:w-auto
      px-5 sm:px-7
      py-3 sm:py-4
      rounded-xl sm:rounded-2xl

      bg-cyan-500 hover:bg-cyan-400
      text-black font-semibold sm:font-bold

      text-sm sm:text-base lg:text-lg

      transition
      shadow-lg sm:shadow-xl shadow-cyan-500/30
      hover:scale-[1.03]
      duration-300
    ">
      Start Free
    </button>
  </a>

  {/* SECONDARY */}
  <a href="/login" className="w-full sm:w-auto">
    <button className="
      w-full sm:w-auto
      px-5 sm:px-7
      py-3 sm:py-4
      rounded-xl sm:rounded-2xl

      border border-white/15 sm:border-white/20
      hover:bg-white/10

      text-sm sm:text-base lg:text-lg
      font-medium

      transition
      hover:scale-[1.03]
      duration-300
    ">
      Login Dashboard
    </button>
  </a>

</div>

      {/* STATS */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">

        {[
          ["10K+", "Tasks Completed"],
          ["500+", "Team Members"],
          ["99%", "Secure Auth"],
          ["24/7", "Cloud Access"],
        ].map(([number, label]) => (

          <div
            key={label}
            className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:-translate-y-1 transition"
          >

            <h2 className="text-xl sm:text-2xl font-bold text-cyan-400">
              {number}
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {label}
            </p>

          </div>

        ))}

      </div>

    </div>

    {/* RIGHT CARD */}
    <div className="flex-1 z-10 w-full max-w-xl">

      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 shadow-2xl">

        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">

          <div>
            <h2 className="text-lg sm:text-xl font-bold">
              Dashboard Preview
            </h2>

            <p className="text-xs sm:text-sm text-slate-400">
              Interactive Task Management Panel
            </p>
          </div>

          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">

          {[
            ["Total Tasks", "1240"],
            ["Pending", "321"],
            ["In Progress", "598"],
            ["Completed", "96"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="p-4 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/40 transition"
            >

              <p className="text-xs sm:text-sm text-slate-400">
                {title}
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold mt-2">
                {value}
              </h3>

            </div>

          ))}

        </div>

        {/* Activity */}
        <div className="space-y-3">

          {[
            "Task assigned to team members",
            "New Task created",
            "Dashboard analytics updated",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10"
            >

              <span className="text-xs sm:text-sm text-slate-300">
                {item}
              </span>

              <span className="text-xs text-cyan-400">
                Live
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  </section>

{/* FEATURES */}
<section
  id="features"
  className="px-5 lg:px-20 py-6 lg:py-8"
>
  <div className="text-center mb-12 lg:mb-16">

    <span
      className="
        inline-block
        px-4 py-2
        rounded-full
        bg-cyan-500/10
        border border-cyan-500/20
        text-cyan-400
        text-sm
        font-medium
        mb-4
      "
    >
      Features
    </span>

    <h2 className="text-3xl lg:text-5xl font-black">
      Powerful Features
    </h2>

    <p
      className="
        text-slate-400
        mt-4
        max-w-2xl
        mx-auto
        leading-relaxed
      "
    >
      Everything needed to manage tasks, teams,
      productivity, and workflows efficiently
      through a modern dashboard experience.
    </p>

  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      {
        icon: ClipboardList,
        title: "Task Assignment",
        desc: "Assign tasks to team members and monitor progress efficiently.",
      },
      {
        icon: ShieldCheck,
        title: "Role Management",
        desc: "Admin, Manager, and Worker role-based access control.",
      },
      {
        icon: BarChart3,
        title: "Progress Tracking",
        desc: "Track pending, active, and completed tasks in real time.",
      },
      {
        icon: LayoutDashboard,
        title: "Dashboard Analytics",
        desc: "View productivity and task completion metrics instantly.",
      },
      {
        icon: Zap,
        title: "Modern UI",
        desc: "Fast, responsive, and user-friendly dashboard experience.",
      },
      {
        icon: Users,
        title: "Team Collaboration",
        desc: "Collaborate seamlessly through organized workflows.",
      },
    ].map((feature) => {

      const Icon = feature.icon;

      return (

        <div
          key={feature.title}
          className="
            group
            p-7 lg:p-8
            rounded-3xl
            bg-white/5
            border border-white/10
            backdrop-blur-xl

            hover:border-cyan-400/40
            hover:-translate-y-2

            transition-all
            duration-300

            flex
            flex-col
            items-center
            text-center

            h-full
          "
        >

          {/* ICON */}
          <div
            className="
              w-16 h-16
              lg:w-20 lg:h-20

              rounded-3xl

              bg-gradient-to-br
              from-cyan-500/15
              to-cyan-500/5

              border border-cyan-500/20

              shadow-lg
              shadow-cyan-500/10

              flex
              items-center
              justify-center

              mb-6

              group-hover:scale-110
              group-hover:shadow-cyan-500/20

              transition-all
              duration-300
            "
          >
            <Icon
              size={36}
              strokeWidth={1.8}
              className="text-cyan-400"
            />
          </div>

          {/* TITLE */}
          <h3
            className="
              text-xl
              lg:text-2xl
              font-bold
              mb-3
            "
          >
            {feature.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              text-slate-400
              leading-relaxed
              text-sm
              lg:text-base
            "
          >
            {feature.desc}
          </p>

        </div>

      );
    })}

  </div>
</section>

{/* WORKFLOW */}
<section
  id="workflow"
  className="
    px-5 lg:px-20
    py-16 lg:py-20
    bg-white/5
    border-y border-white/10
  "
>
  <div className="text-center mb-12 lg:mb-14">

    <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
      Workflow
    </span>

    <h2 className="text-3xl lg:text-5xl font-black">
      Simple Workflow
    </h2>

    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
      Get started within minutes and manage your entire team
      through a streamlined process.
    </p>

  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      {
        title: "Create Account",
        Icon: UserPlus,
        desc: "Register and access your dashboard instantly.",
      },
      {
        title: "Create Tasks",
        Icon: ClipboardList,
        desc: "Create and assign tasks to your team members.",
      },
      {
        title: "Manage Team",
        Icon: Users,
        desc: "Organize managers and workers efficiently.",
      },
      {
        title: "Track Progress",
        Icon: Activity,
        desc: "Monitor task status and productivity in real time.",
      },
    ].map((step, index) => (

      <div
        key={step.title}
        className="
          group
          relative
          p-7 lg:p-8
          rounded-3xl
          bg-slate-900/70
          border border-white/10
          backdrop-blur-xl

          hover:border-cyan-400/40
          hover:-translate-y-2

          transition-all
          duration-300

          flex
          flex-col
          items-center
          text-center
        "
      >

        {/* BIG NUMBER */}
        <div
          className="
            absolute
            top-4
            right-5
            text-5xl
            font-black
            text-white/[0.04]
            select-none
          "
        >
          0{index + 1}
        </div>

        {/* ICON */}
        <div
          className="
            w-16 h-16
            lg:w-20 lg:h-20

            rounded-3xl

            bg-cyan-500/10
            border border-cyan-500/20

            flex
            items-center
            justify-center

            mb-6

            shadow-lg
            shadow-cyan-500/10

            group-hover:scale-110
            group-hover:shadow-cyan-500/20

            transition-all
            duration-300
          "
        >
          <step.Icon
            size={34}
            className="text-cyan-400"
            strokeWidth={2}
          />
        </div>

        <h3 className="text-xl font-bold mb-3">
          {step.title}
        </h3>

        <p className="text-slate-400 leading-relaxed">
          {step.desc}
        </p>

      </div>

    ))}

  </div>
</section>

      {/* TEAM SECTION */}
      <section
        id="team"
        className="px-5 lg:px-20 py-16 lg:py-20"
      >
        <div className="text-center mb-12 lg:mb-14">

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Team
          </span>

          <h2 className="text-3xl lg:text-5xl font-black">
            Meet Our Team
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            The people behind Leadash Task Manager.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">

          {[
            {
              name: "Paraj Mandal",
              role: "Owner & Developer",
              image: parajImage,
              link: "/team/paraj",
            },
            {
              name: "Vishal Pramanik",
              role: "Manager",
              image: vishalImage,
              link: "/team/vishal",
            },
            {
              name: "Harsh Raj",
              role: "Junior Developer",
              image: harshImage,
              link: "/team/harsh",
            },
            {
              name: "Bhaskar Mandal",
              role: "Junior Developer",
              image: bhaskarImage,
              link: "/team/bhaskar",
            },
          ].map((member) => (

            <a
              key={member.name}
              href={member.link}
            >
              <div
                className="
                  group
                  p-6 lg:p-8
                  rounded-3xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  text-center
                  hover:border-cyan-400/40
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-20 h-20 lg:w-24 lg:h-24
                    rounded-full
                    object-cover
                    mx-auto
                    mb-5
                    border-2 border-cyan-400
                    group-hover:scale-105
                    transition
                  "
                />

                <h3 className="text-xl lg:text-2xl font-bold mb-2">
                  {member.name}
                </h3>

                <p className="text-cyan-400 text-sm lg:text-base">
                  {member.role}
                </p>

              </div>
            </a>

          ))}

        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="
          px-5 lg:px-20
          py-16 lg:py-24
          text-center
          relative
          overflow-hidden
        "
      >

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto">

          <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            Get Started Today
          </span>

          <h2 className="text-3xl lg:text-6xl font-black leading-tight">
            Build Your Task Workflow
            <br />
            <span className="text-cyan-400">
              Faster & Smarter
            </span>
          </h2>

          <p className="mt-5 text-slate-300 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Start managing tasks, teams, and productivity with a
            modern task management dashboard designed for
            growing organizations.
          </p>

<div className="mt-8 flex justify-center gap-3 sm:gap-4 flex-wrap">

  {/* PRIMARY CTA */}
  <a href="/register">
    <button
      className="
        px-5 sm:px-7
        py-3 sm:py-3.5
        rounded-xl sm:rounded-2xl

        bg-cyan-500 hover:bg-cyan-400
        text-black font-semibold sm:font-bold

        text-sm sm:text-base

        transition
        hover:scale-[1.03]
        duration-300

        shadow-md sm:shadow-lg
        shadow-cyan-500/30
      "
    >
      Create Account
    </button>
  </a>

  {/* SECONDARY CTA */}
  <a href="/login">
    <button
      className="
        px-5 sm:px-7
        py-3 sm:py-3.5
        rounded-xl sm:rounded-2xl

        border border-white/15 sm:border-white/20
        hover:bg-white/10

        text-sm sm:text-base
        font-medium

        transition
        hover:scale-[1.03]
        duration-300
      "
    >
      Open Dashboard
    </button>
  </a>

</div>

        </div>

      </section>

{/* FOOTER */}
<footer className="border-t border-white/10 bg-white/[0.02] backdrop-blur-sm">
  <div className="px-5 lg:px-20 py-12">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* BRAND */}
      <div>
        <h3 className="text-2xl font-bold">
          Leadash <span className="text-cyan-400">Task Manager</span>
        </h3>

        <p className="text-slate-400 mt-3 leading-relaxed max-w-sm">
          Modern task management platform designed to help teams
          organize work, improve productivity, and track progress
          efficiently.
        </p>
      </div>

      {/* QUICK LINKS */}
      <div>
        <h4 className="font-semibold text-white mb-4">
          Quick Links
        </h4>

        <div className="flex flex-col gap-3 text-slate-400">
          <a
            href="#features"
            className="hover:text-cyan-400 transition"
          >
            Features
          </a>

          <a
            href="#workflow"
            className="hover:text-cyan-400 transition"
          >
            Workflow
          </a>

          <a
            href="#team"
            className="hover:text-cyan-400 transition"
          >
            Team
          </a>

          <a
            href="/developer"
            className="hover:text-cyan-400 transition"
          >
            Developer
          </a>
        </div>
      </div>

      {/* TECH STACK */}
      <div>
        <h4 className="font-semibold text-white mb-4">
          Built With
        </h4>

        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>

    {/* BOTTOM */}
    <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

      <p className="text-slate-500 text-sm text-center md:text-left">
        © 2026 Leadash Task Manager. All rights reserved.
      </p>

      <p className="text-slate-500 text-sm text-center md:text-right">
        Built with ❤️ by
        <span className="text-cyan-400 font-medium">
          {" "}Paraj Mandal & Team
        </span>
      </p>

    </div>

  </div>
</footer>


    </div>
  );
}
