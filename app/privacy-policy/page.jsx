"use client"

import { useState } from "react";
import ArticleLayout from "../components/ArticleLayout";

const privacySections = [
  {
    id: "collect",
    icon: "◈",
    title: "Information We Collect",
    content: [
      {
        sub: "Information you provide",
        text: "When you contact us, submit a news tip, sign up for a newsletter, or interact with our platform, we may collect your name, email address, and any other information you choose to provide.",
      },
      {
        sub: "Automatically collected data",
        text: "When you visit Wiresavvy, we automatically collect certain technical information including your IP address, browser type, operating system, referring URLs, pages visited, and time spent on the site. This data is used to understand how readers engage with our content and to improve the platform.",
      },
      {
        sub: "Cookies and tracking technologies",
        text: "We use cookies and similar technologies to enhance your experience, remember your preferences, and gather analytics data. You can control cookie settings through your browser at any time.",
      },
    ],
  },
  {
    id: "use",
    icon: "◉",
    title: "How We Use Your Information",
    content: [
      {
        sub: "",
        text: "We use the information we collect to operate and improve the Wiresavvy platform, deliver newsletters and communications you have requested, respond to enquiries and news tips, analyse readership trends and content performance, and comply with applicable legal obligations.",
      },
      {
        sub: "",
        text: "We do not sell your personal information to third parties. We do not use your data to build advertising profiles or to target you with personalised advertisements without your consent.",
      },
    ],
  },
  {
    id: "share",
    icon: "◌",
    title: "Sharing Your Information",
    content: [
      {
        sub: "Service providers",
        text: "We may share data with trusted third-party service providers who assist in operating our website, sending emails, or analysing usage. These providers are contractually required to keep your information confidential and to use it only for the services they provide to us.",
      },
      {
        sub: "Legal requirements",
        text: "We may disclose your information if required to do so by law or in response to a valid legal process, such as a court order or government request.",
      },
      {
        sub: "Business transfers",
        text: "In the event of a merger, acquisition, or sale of assets, user data may be transferred as part of that transaction. We will notify users of any such change and your choices regarding your data.",
      },
    ],
  },
  {
    id: "retention",
    icon: "◷",
    title: "Data Retention",
    content: [
      {
        sub: "",
        text: "We retain personal information for as long as necessary to fulfil the purposes for which it was collected, to comply with legal obligations, and to resolve disputes. When data is no longer required, we take reasonable steps to delete or anonymise it.",
      },
    ],
  },
  {
    id: "rights",
    icon: "◎",
    title: "Your Rights",
    content: [
      {
        sub: "",
        text: "Depending on your jurisdiction, you may have the right to access, correct, or delete the personal information we hold about you. You may also have the right to object to or restrict certain types of processing, or to request a copy of your data in a portable format.",
      },
      {
        sub: "",
        text: "To exercise any of these rights, please contact us at the address below. We will respond to all legitimate requests within the timeframe required by applicable law.",
      },
    ],
  },
  {
    id: "security",
    icon: "◆",
    title: "Security",
    content: [
      {
        sub: "",
        text: "We take reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. However, no method of data transmission over the internet is completely secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "children",
    icon: "◇",
    title: "Children's Privacy",
    content: [
      {
        sub: "",
        text: "Wiresavvy is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will take steps to delete it.",
      },
    ],
  },
  {
    id: "changes",
    icon: "◈",
    title: "Changes to This Policy",
    content: [
      {
        sub: "",
        text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. Continued use of Wiresavvy after changes are published constitutes acceptance of the updated policy.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  const [active, setActive] = useState(null);

  return (
    <ArticleLayout>
    <div className="min-h-screen font-['Georgia',serif]">
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500" />

      {/* Hero — full bleed with grid lines */}
      <section className="relative border-b border-black/10 overflow-hidden">

        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Your Privacy,
            <br />
            <span className="text-black/75">Our Responsibility</span>
          </h1>
          <p className="text-black/50 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
            This policy explains what data Wiresavvy collects, how we use it,
            and the choices you have. We collect only what we need to deliver
            independent journalism.
          </p>
          <p className="text-black/55 font-sans text-xs mt-6">
            Effective date: June 2026
          </p>
        </div>
      </section>

      {/* Accordion sections */}
      <main className="max-w-4xl mx-auto px-6 py-14">
        <div className="divide-y divide-black/50">
          {privacySections.map((s, i) => (
            <div key={s.id}>
              <button
                className="w-full text-left py-7 flex items-center gap-5 group"
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="text-red-400/60 text-lg w-6 shrink-0">{s.icon}</span>
                <span className="flex-1 text-base md:text-lg font-bold tracking-tight group-hover:text-red-400 transition-colors">
                  {s.title}
                </span>
                <span className="text-black/25 text-xl shrink-0 w-6 text-center">
                  {active === i ? "−" : "+"}
                </span>
              </button>
              {active === i && (
                <div className="pb-8 pl-11 space-y-5">
                  {s.content.map((c, j) => (
                    <div key={j}>
                      {c.sub && (
                        <p className="text-black/80 font-sans text-xs uppercase tracking-widest mb-2">
                          {c.sub}
                        </p>
                      )}
                      <p className="text-black/60 font-sans text-sm leading-relaxed">
                        {c.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact block */}
        <div className="mt-14 bg-black/4 border border-black/10 p-8">
          <h3 className="text-lg font-bold mb-2">Privacy Enquiries</h3>
          <p className="text-black/50 font-sans text-sm mb-5 leading-relaxed">
            For any questions about this Privacy Policy, to exercise your data
            rights, or to report a privacy concern, contact us at:
          </p>
          <a
            href="mailto:privacy@wiresavvy.com"
            className="inline-block bg-red-400 hover:bg-red-500 transition-colors text-black font-sans text-sm font-semibold px-6 py-3"
          >
            privacy@wiresavvy.com →
          </a>
        </div>

        <p className="text-black/45 font-sans text-xs mt-8">Last updated: June 2026</p>
      </main>
    </div>
    </ArticleLayout>
  );
}