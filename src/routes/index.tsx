import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import mainBook from "@/assets/main_book.png";
import bundleImage from "@/assets/bundle.png";
import recommendedFood from "@/assets/recommended_food.png";
import exercises from "@/assets/excercises.png";
import mindfulness from "@/assets/mindfulness.png";
import recipesDetox from "@/assets/recipes_detox.png";
import resetChecklist from "@/assets/reset_checklist.png";
import weeklyGrocery from "@/assets/weekly_grocery.png";
import guaranteeIcon from "@/assets/garantia.png";

type MetaPixelTrack = (eventName: string, parameters?: Record<string, unknown>) => void;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Practical Manual to Improve Liver Health in 30 Days | High-Conversion Landing" },
      {
        name: "description",
        content:
          "Practical Manual to Improve Liver Health in 30 Days with nutrition, movement, habits, and consistency.",
      },
    ],
  }),
});

const painPoints = [
  "Constant fatigue without a clear cause",
  "A feeling of abdominal bloating or heaviness",
  "Difficulty losing fat even when eating less",
  "Abnormal clinical test results without an obvious reason",
];

const includes = [
  "A clear explanation of the liver's role and why overload often goes unnoticed",
  "What fatty liver is, why it develops, and when it is reversible",
  "The 4 pillars system: strategic nutrition, movement, metabolic habits, and consistency",
  "A full 4-week protocol: Adaptation, Activation, Optimization, and Stabilization",
  "Practical nutrition structure: recommended foods, foods to limit, and smart substitutions",
  "Exercise basics, progress indicators, and a 7-day checklist to start strong",
];

const fascinationBullets = [
  "Why the liver can keep working under stress and still show no obvious warning signs",
  "The most common Week 4 mistake that causes people to lose momentum",
  "How the 80/20 rule helps you stay consistent without obsession",
  "The practical substitutions chapter that removes all-or-nothing dieting",
  "The progress indicators beyond body weight: energy, appetite, digestion, and clarity",
  "The " + '"never two failures in a row"' + " rule to prevent relapse after a bad day",
];

const bonuses = [
  {
    title: "30 Healthy Recipes for Liver Support",
    image: recipesDetox,
  },
  {
    title: "Exercise Guide for Supporting Liver Health",
    image: exercises,
  },
  {
    title: "Mindfulness Guide for Strengthening Willpower and Staying Consistent",
    image: mindfulness,
  },
  {
    title: "Recommended Foods and what to avoid",
    image: recommendedFood,
  },
  {
    title: "7 Day Liver Reset Checklist",
    image: resetChecklist,
  },
  {
    title: "Weekly Grocery List",
    image: weeklyGrocery,
  },
];

const faqs = [
  {
    q: "How long does it take to see a change?",
    a: "It depends on your starting point and consistency. Some improvements are felt within days, others take weeks.",
  },
  {
    q: "Do I have to eliminate all " + '"bad"' + " foods?",
    a: "No. The guide recommends reducing frequency and quantity, not extreme restriction.",
  },
  {
    q: "Is intense exercise necessary?",
    a: "No. Consistent, gradual movement and basic strength work are enough to support progress.",
  },
  {
    q: "What happens if I skip a day?",
    a: "The key is getting back on track the next day. The problem is not one missed day; it is giving up.",
  },
  {
    q: "Do I have to count calories all the time?",
    a: "Not necessarily. You can use calories as a reference, but structure and consistency are the primary drivers.",
  },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const corePrice = 5.99;
  const bundlePrice = 15.99;
  const bundleValue = 22.93;

  const trackMetaPixel: MetaPixelTrack = (eventName, parameters) => {
    if (typeof window === "undefined") {
      return;
    }

    const fbq = (window as Window & {
      fbq?: (action: string, eventName: string, parameters?: Record<string, unknown>) => void;
    }).fbq;

    if (typeof fbq === "function") {
      fbq("track", eventName, parameters);
    }
  };

  const bundleSavings = useMemo(() => {
    const pct = Math.round(((bundleValue - bundlePrice) / bundleValue) * 100);
    return pct;
  }, [bundlePrice, bundleValue]);

  return (
    <main className="lp-page">
      <section className="lp-hero">
        <div className="lp-container lp-hero-grid">
          <div>
            <p className="lp-kicker">30-Day Practical System</p>
            <h1>Improve Liver Health in 30 Days with a Structured, Practical Manual</h1>
            <p className="lp-sub">
              Demystify fatty liver with a clear method based on nutrition, movement, metabolic
              habits, and consistency so you can take purposeful action from day one.
            </p>
            <div className="lp-hero-ctas">
              <a href="#offer-core" className="lp-btn lp-btn-accent">
                Get Instant Access
              </a>
              <p className="lp-micro">Instant access • Secure checkout • 7-day guarantee</p>
            </div>
          </div>

          <aside className="lp-book-card" aria-label="Main ebook cover">
            <img className="lp-book-image" src={mainBook} alt="Practical Manual to Improve Liver Health in 30 Days cover" />
          </aside>
        </div>
      </section>

      <section className="lp-section lp-problem">
        <div className="lp-container lp-narrow">
          <h2>Fatty Liver Often Progresses Silently Until It Affects Daily Life</h2>
          <p className="lp-center-copy">
            Around 25% of people may have hepatic steatosis without knowing it. This guide helps
            you understand the process and act with structure instead of random decisions.
          </p>
          <ul className="lp-pain-list">
            {painPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="lp-quote">
            <p>
              "The liver usually does not send clear signals in early stages. Not feeling pain does
              not always mean everything is in balance."
            </p>
            <p>
              The objective is not fear. The objective is clarity: when you understand the system,
              you can change it with precise and sustainable habits.
            </p>
          </div>
        </div>
      </section>

      <section className="lp-section">
        <div className="lp-container lp-narrow">
          <h2>What You Will Learn Across 23 Chapters</h2>
          <div className="lp-check-list">
            {includes.map((item) => (
              <article key={item}>
                <strong>✓</strong>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section lp-fascination">
        <div className="lp-container lp-narrow">
          <h2>Key Practical Insights from the Manual</h2>
          <ul>
            {fascinationBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lp-section lp-bundle-highlight">
        <div className="lp-container lp-narrow">
          <h2>Get Your Ultimate Liver Health Collection with Action Tools</h2>
          <p className="lp-center-copy">
            Add practical trackers and planners built from the manual so implementation becomes
            easier in your first 30 days.
          </p>
          <div className="lp-bonus-grid">
            {bonuses.map((bonus) => (
              <article key={bonus.title}>
                <img src={bonus.image} alt={bonus.title} />
                <p>{bonus.title}</p>
              </article>
            ))}
          </div>
          <div className="lp-bundle-cta">
            <a href="#offer-bundle" className="lp-btn lp-btn-accent">
              Get Instant Access
            </a>
          </div>
          <p className="lp-urgency">Launch offer ending soon. Price increase after launch.</p>
        </div>
      </section>

      <section className="lp-section lp-imagine">
        <div className="lp-container lp-narrow">
          <h2>Imagine...</h2>
          <p>
            Waking up with more stable energy, fewer cravings, and clearer food decisions because
            your meals, movement, and routines are finally structured.
          </p>
          <p>
            Imagine evaluating progress not only by weight, but also by digestion, appetite control,
            physical performance, and mental clarity.
          </p>
        </div>
      </section>

      <section className="lp-section lp-objections">
        <div className="lp-container lp-narrow">
          <h2>Still Unsure? Let Us Clear It Up</h2>
          <div className="lp-objection-grid">
            <article>
              <h3>"I do not have time to read."</h3>
              <p>
                The book is practical and structured in weekly phases, so you can apply it with
                short daily actions.
              </p>
            </article>
            <article>
              <h3>"Do I need a perfect diet to make progress?"</h3>
              <p>
                No. The method prioritizes consistency and smart substitutions over extreme rules.
              </p>
            </article>
            <article>
              <h3>"Do I need intense workouts?"</h3>
              <p>
                No. The guide emphasizes regular movement, basic strength work, and routine.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="lp-section lp-testimonials">
        <div className="lp-container lp-narrow">
          <h2>What Progress Looks Like in This System</h2>
          <div className="lp-testimonial-grid">
            <article>
              <p>
                "Week by week, I noticed more stable energy, better appetite control, and less
                abdominal bloating once my meals became structured."
              </p>
              <span>Expected outcome from Chapters 6-9 and 22</span>
            </article>
            <article>
              <p>
                "The biggest shift is consistency: fewer impulsive decisions, better routine, and
                clearer progress indicators beyond the scale."
              </p>
              <span>Expected outcome from Chapters 20-22</span>
            </article>
          </div>
        </div>
      </section>

      <section className="lp-section lp-pricing" id="pricing">
        <div className="lp-container">
          <h2>Choose Your Path to Liver Recovery</h2>
          <p className="lp-center-copy">
            Start with the core manual, or add implementation assets for faster execution.
          </p>

          <div className="lp-pricing-grid">
            <article className="lp-price-card" id="offer-core">
              <img className="lp-price-visual" src={mainBook} alt="Practical Manual to Improve Liver Health in 30 Days" />
              <p className="lp-badge lp-badge-core">Core Offer</p>
              <h3>Practical Manual to Improve Liver Health in 30 Days</h3>
              <p className="lp-price">${corePrice.toFixed(2)}</p>
              <ul>
                <li>Core manual only</li>
                <li>Introduction + 23 chapters + conclusion</li>
                <li>30-day protocol organized into 4 practical weekly phases</li>
                <li>Includes FAQ and final practical considerations from the manual</li>
              </ul>
              <a
                href="https://reinkode.gumroad.com/l/liverguide"
                className="lp-btn lp-btn-light"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackMetaPixel("InitiateCheckout", {
                    content_name: "Practical Manual to Improve Liver Health in 30 Days",
                    content_type: "product",
                    currency: "USD",
                    value: corePrice,
                  })
                }
              >
                I Want the Ebook Now
              </a>
            </article>

            <article className="lp-price-card lp-price-featured" id="offer-bundle">
              <img className="lp-price-visual" src={bundleImage} alt="Your Ultimate Liver Health Collection bundle" />
              <p className="lp-badge">Most Popular • Save {bundleSavings}%</p>
              <h3>Your Ultimate Liver Health Collection</h3>
              <p className="lp-price">${bundlePrice.toFixed(2)}</p>
              <p className="lp-anchor">Value ${bundleValue.toFixed(2)}</p>
              <ul>
                <li>Practical Manual to Improve Liver Health in 30 Days</li>
                <li>All 6 implementation tools from manual content</li>
                <li>Guided templates for meal planning and routine tracking</li>
                <li>Fast-start checklist system for Week 1</li>
              </ul>
              <a
                href="https://reinkode.gumroad.com/l/liver-health-bundle"
                className="lp-btn lp-btn-accent"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackMetaPixel("InitiateCheckout", {
                    content_name: "Your Ultimate Liver Health Collection",
                    content_type: "product",
                    currency: "USD",
                    value: bundlePrice,
                  })
                }
              >
                I Want the Complete Bundle
              </a>
            </article>
          </div>

          <p className="lp-micro lp-center">Instant access after payment • Secure checkout • 7-day guarantee</p>
        </div>
      </section>

      <section className="lp-section lp-guarantee">
        <div className="lp-container lp-narrow lp-guarantee-inner">
          <div className="lp-guarantee-copy">
            <h2>BUY NOW AND GET A 7-DAY GUARANTEE!</h2>
            <p>
              This product includes a 100% satisfaction guarantee. You have 7 days to access the
              content, and if you still feel it is not for you, simply request a refund and you
              will receive your money back in full.
            </p>
          </div>
          <div className="lp-guarantee-visual">
            <img src={guaranteeIcon} alt="7-day satisfaction guarantee" className="lp-guarantee-icon" />
          </div>
        </div>
      </section>

      <section className="lp-section lp-faq" id="faq">
        <div className="lp-container lp-narrow">
          <h2>Frequently Asked Questions</h2>
          <div className="lp-faq-list">
            {faqs.map((item, index) => {
              const open = openFaq === index;
              return (
                <article key={item.q}>
                  <button onClick={() => setOpenFaq(open ? null : index)} type="button">
                    <span>{item.q}</span>
                    <span>{open ? "−" : "+"}</span>
                  </button>
                  {open && <p>{item.a}</p>}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="lp-footer">
        <div className="lp-container lp-footer-inner">
          <p>Practical Manual to Improve Liver Health in 30 Days</p>
        </div>
        <div className="lp-container">
          <p className="lp-micro" style={{ marginTop: "0.6rem" }}>
            This material is a support guide and does not replace professional medical evaluation.
          </p>
        </div>
      </footer>
    </main>
  );
}
