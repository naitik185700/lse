export interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PolicySection {
  title: string;
  paragraphs: string[];
  items?: string[];
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
}

export const SITE_CONFIG = {
  name: "Loan Settlement Expert",
  legalName: "Loan Settlement Expert",
  tagline: "From Constant Worry to Complete Relief — Loan Settlement Expert Stands With You.",
  phone: "+91-92203 60824",
  phoneRaw: "919220360824",
  email: "info@loansettlementexpert.in",
  address: "Plot No. 38p, Saraswati Kunj, 1, Golf Course Rd, Sector 54, Gurugram, Haryana 122001",
  location: "Gurugram (HR)",
  url: "https://loansettlementexpert.in",
  zohoFormUrl: "https://forms.zohopublic.in/guardianlegalsgm1/form/ConsultOurExpertsNow/formperma/wn_1pnWBS5Z0wCplXYOzG-uLMiEFY-hEHJbVahALAKo",
  whatsappUrl: "https://wa.me/919220360824",
  disclaimer: "Loan Settlement Expert is a financial consultancy and advisory service provider. We are not a bank, NBFC, lending institution, or government-authorized agency. Loan settlement outcomes depend on lender policies, borrower profile, and legal factors. We do not guarantee loan waivers, fixed settlement amounts, or assured results. Users are advised to consult qualified legal or financial professionals before taking any decision.",
  copyrightYear: 2026,
  designerCredit: "Pixel Pragati",
  designerUrl: "https://pixelpragati.com/"
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "From Constant Worry to Complete Relief",
    subtitle: "Loan Settlement Expert Stands With You.",
    cta: "Contact Us",
    image: "/images/hero/hero_3_bg.png"
  },
  {
    title: "Life Feels Better When Loans Stop Controlling Your Home",
    subtitle: "Loan Settlement Expert Stands With You.",
    cta: "Contact Us",
    image: "/images/hero/hero_3_bg3.png"
  },
  {
    title: "A Secure Family Life Begins with the Right Financial Support",
    subtitle: "Loan Settlement Expert Stands With You.",
    cta: "Contact Us",
    image: "/images/hero/hero_3_bg4.png"
  },
  {
    title: "From Harassment Calls to Peaceful Nights",
    subtitle: "Loan Settlement Expert Stands With You.",
    cta: "Contact Us",
    image: "/images/hero/hero_3_bg5.png"
  }
];

export const ABOUT_HOMEPAGE_PARAGRAPHS = [
  "Loan Settlement Expert helps borrowers across India resolve difficult debt and regain financial peace. We work with individuals, families, and small business owners who face heavy EMI stress. When illness, job loss, or business drops make regular payments impossible, our legal team steps in. We help you negotiate fair, lawful settlements with banks and NBFCs so you can close your dues with dignity.",
  "Many borrowers deal with non-stop collection calls, high penalty charges, and legal notices. Loan Settlement Expert was created to protect you from this pressure. We provide clear, practical debt advice with realistic outcomes. We believe financial trouble should be solved through legal dialogue, not fear or intimidation.",
  "Our approach follows the Reserve Bank of India (RBI) Fair Practices Code. First, we review your debt total, active defaults, and what you can afford to pay. Next, our legal advisors speak directly with your lenders to reach an affordable one-time settlement. We inspect every settlement letter carefully to confirm real waivers and genuine account closure.",
  "Consumer protection laws form the base of our service. Many people do not know their legal rights when lenders demand payment. We explain the RBI rules on recovery agents. Agents cannot call at odd hours or contact your family. If lenders send legal notices or arbitration summons, our advocates draft proper legal replies.",
  "We give each case personal care and complete privacy. We keep you informed at every step of your journey toward financial freedom. Our guidance does not stop at negotiation. We support you until your bank issues the final No Dues Certificate (NOC) and your account is closed.",
  "Our main goal is to lift the weight of unpaid debts, protect your peace of mind, and help you start fresh. With ethical practices and sound legal advice, Loan Settlement Expert is here to guide you to a debt-free life."
];

export const SETTLEMENT_JOURNEY_STEPS = [
  {
    step: 1,
    title: "Case Assessment",
    description: "Complete evaluation of your loan situation and recovery pressure."
  },
  {
    step: 2,
    title: "Settlement Strategy",
    description: "Customized strategy to reduce principal and interest burden."
  },
  {
    step: 3,
    title: "Legal Protection",
    description: "Protection from harassment & unfair recovery actions."
  },
  {
    step: 4,
    title: "Bank Negotiation",
    description: "Professional negotiation with banks & NBFCs."
  },
  {
    step: 5,
    title: "Successful Closure",
    description: "Settlement letter, NOC & financial relief delivered."
  }
];

export const BUSINESS_STATS = [
  { value: 95000, display: "95,000+", label: "Client Conversations" },
  { value: 25000, display: "25,000+", label: "Customers" },
  { value: 2700, display: "2,700+", label: "Debt Handled" },
  { value: 99, display: "99%", label: "Clients Satisfied" }
];

export const HOMEPAGE_TESTIMONIALS: Testimonial[] = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    quote: "I was under huge pressure from banks. SettleLoan360 helped me legally settle my loan and stop harassment."
  },
  {
    name: "Pooja Verma",
    location: "Mumbai",
    quote: "Very professional team. They guided me step by step and reduced my loan burden significantly."
  },
  {
    name: "Amit Singh",
    location: "Bangalore",
    quote: "I finally got peace of mind. Calls stopped and settlement was done smoothly."
  },
  {
    name: "Neha Gupta",
    location: "Jaipur",
    quote: "Transparent process and genuine support. Highly recommended for loan settlement."
  }
];

export const ALL_TESTIMONIALS: Testimonial[] = [
  {
    "quote": "I had taken a personal loan which became impossible to repay after job loss. Loan Settlement Expert negotiated with the bank and closed my loan at a much lower amount. The process was completely transparent and professional.",
    "name": "Rahul S.",
    "location": "Noida"
  },
  {
    "quote": "Daily recovery calls were mentally exhausting. After enrolling with Loan Settlement Expert, they handled all bank communication and helped me settle my dues legally without any harassment.",
    "name": "Neha K.",
    "location": "Ghaziabad"
  },
  {
    "quote": "I liked their honest approach. They clearly explained settlement impact, documentation, and timelines before starting. No fake promises at all.",
    "name": "Amit P.",
    "location": "Meerut"
  },
  {
    "quote": "I was afraid of legal action from the bank. Their team guided me properly, negotiated confidently, and closed my loan at a fair settlement amount.",
    "name": "Sonal T.",
    "location": "Lucknow"
  },
  {
    "quote": "Loan pressure was affecting my family life. With their support, my loan settlement was completed smoothly and I finally feel stress-free.",
    "name": "Vikram J.",
    "location": "Kanpur"
  },
  {
    "quote": "They explained RBI guidelines and settlement process clearly. Every step was documented and shared with me. Very professional service.",
    "name": "Priya M.",
    "location": "Aligarh"
  },
  {
    "quote": "Recovery agents stopped disturbing me once the team intervened. They handled everything calmly and legally.",
    "name": "Arun B.",
    "location": "Agra"
  },
  {
    "quote": "I never thought credit card dues could be settled properly. Their experts proved me wrong and helped me close my account peacefully.",
    "name": "Pooja R.",
    "location": "Varanasi"
  },
  {
    "quote": "Settlement amount was far less than what the bank initially demanded. Very knowledgeable and experienced team.",
    "name": "Rajesh G.",
    "location": "Bareilly"
  },
  {
    "quote": "From first consultation to final closure letter, the entire process was smooth and well-managed.",
    "name": "Shalini D.",
    "location": "Moradabad"
  },
  {
    "quote": "Their negotiation skills saved me lakhs of rupees. I highly recommend Loan Settlement Expert to anyone facing loan stress.",
    "name": "Deepak L.",
    "location": "Mathura"
  },
  {
    "quote": "Everything was explained in advance — fees, timeline, and settlement outcome. Very ethical service.",
    "name": "Anita S.",
    "location": "Gorakhpur"
  },
  {
    "quote": "I didn’t have to talk to the bank at all. The team managed negotiations and kept me informed regularly.",
    "name": "Karan V.",
    "location": "Jhansi"
  },
  {
    "quote": "No hidden charges, no pressure tactics. Genuine experts who focus on client relief rather than sales.",
    "name": "Manisha P.",
    "location": "Saharanpur"
  },
  {
    "quote": "Because of them, I avoided legal notices and closed my loan properly.",
    "name": "Rohan T.",
    "location": "Firozabad"
  },
  {
    "quote": "I can finally focus on my job and family again. Loan stress is gone.",
    "name": "Neetu B.",
    "location": "Etawah"
  },
  {
    "quote": "Support team always responded patiently to my questions. Very reassuring experience.",
    "name": "Sumit N.",
    "location": "Shahjahanpur"
  },
  {
    "quote": "They stood with me during the most difficult financial phase of my life.",
    "name": "Alka C.",
    "location": "Faizabad"
  },
  {
    "quote": "Reliable and trustworthy loan settlement professionals.",
    "name": "Suresh K.",
    "location": "Azamgarh"
  },
  {
    "quote": "I feel confident about my finances again after settlement.",
    "name": "Divya J.",
    "location": "Prayagraj"
  },
  {
    "quote": "Quick response and disciplined settlement process.",
    "name": "Vimal R.",
    "location": "Hardoi"
  },
  {
    "quote": "They genuinely care about client relief, not just fees.",
    "name": "Archana S.",
    "location": "Basti"
  },
  {
    "quote": "Settlement completed while I continued my job peacefully.",
    "name": "Mahesh Y.",
    "location": "Gorakhpur"
  },
  {
    "quote": "Proper documentation and closure letter provided on time.",
    "name": "Inder P.",
    "location": "Bulandshahr"
  },
  {
    "quote": "CIBIL impact was clearly explained before starting settlement.",
    "name": "Megha L.",
    "location": "Muzaffarnagar"
  },
  {
    "quote": "Strong negotiation skills and deep legal knowledge.",
    "name": "Arvind J.",
    "location": "Rampur"
  },
  {
    "quote": "Professional till the final settlement and closure.",
    "name": "Nidhi C.",
    "location": "Bijnor"
  },
  {
    "quote": "Deep understanding of RBI recovery and settlement guidelines.",
    "name": "Ashish P.",
    "location": "Deoria"
  },
  {
    "quote": "Loan Settlement Expert truly helped me rebuild my financial life.",
    "name": "Ritu S.",
    "location": "Sitapur"
  }
];

export const ALL_FAQS: FAQItem[] = [
  {
    "question": "What is loan settlement?",
    "answer": "Loan settlement is a lawful process where a borrower and lender mutually agree to close a loan by paying a reduced amount due to genuine financial hardship, with proper documentation and written closure."
  },
  {
    "question": "Is loan settlement legal in India?",
    "answer": "Yes. Loan settlement is legal in India when conducted transparently and in accordance with RBI Fair Practices Code and recovery guidelines, with mutual consent."
  },
  {
    "question": "Do you provide loan settlement services across all cities in India?",
    "answer": "Yes. We provide Pan-India loan settlement services, including metros, Tier-2, and Tier-3 cities across all states and union territories of India."
  },
  {
    "question": "Can I get loan settlement help in my city?",
    "answer": "Yes. Loan settlement assistance is available in all cities in India through a structured and compliant process."
  },
  {
    "question": "What types of loans can be settled?",
    "answer": "Loan settlement may be considered for personal loans, credit card dues, business loans, application-based loans, and secured loans (case-specific)."
  },
  {
    "question": "Who is eligible for loan settlement?",
    "answer": "Borrowers facing EMI stress, job loss, medical emergencies, business losses, or long-term financial hardship may be eligible, subject to lender policies."
  },
  {
    "question": "Can loan settlement be done with banks and NBFCs?",
    "answer": "Yes. Loan settlement discussions can be carried out with banks and NBFCs, subject to their internal policies and borrower eligibility."
  },
  {
    "question": "Does loan settlement stop recovery harassment?",
    "answer": "Settlement support includes guidance against unlawful recovery practices, helping borrowers deal with excessive calls, threats, or harassment under RBI norms."
  },
  {
    "question": "Can recovery agents visit my home during settlement?",
    "answer": "As per RBI guidelines, recovery actions must be fair, non-coercive, and respectful of borrower privacy. Unlawful visits are not permitted."
  },
  {
    "question": "How long does the loan settlement process take?",
    "answer": "The timeline varies by lender and case complexity. On average, settlement discussions may take a few weeks to a few months."
  },
  {
    "question": "Will loan settlement affect my credit score?",
    "answer": "Yes. Initially the account may be marked as “settled.” However, credit rebuilding is possible over time with proper guidance."
  },
  {
    "question": "Is loan settlement better than continuing default?",
    "answer": "For borrowers facing genuine hardship, structured settlement may be a better alternative than prolonged default with documented closure."
  },
  {
    "question": "Can loan settlement be done after legal notice?",
    "answer": "In many cases, yes. Settlement may still be explored after legal notices, depending on lender policy and case status."
  },
  {
    "question": "Can multiple loans be settled at the same time?",
    "answer": "Yes. Borrowers with multiple loans across lenders may explore settlement through a coordinated approach."
  },
  {
    "question": "Are loan settlement charges fixed?",
    "answer": "No. Charges vary based on loan amount, number of lenders, and case complexity, with full transparency."
  },
  {
    "question": "Is my personal and financial information safe?",
    "answer": "Yes. Confidentiality is strictly maintained and information is shared only for lawful settlement purposes."
  },
  {
    "question": "Do you support salaried and self-employed borrowers?",
    "answer": "Yes. We support salaried professionals, self-employed individuals, freelancers, and business owners."
  },
  {
    "question": "Can business loans be settled?",
    "answer": "Business loan settlement may be explored based on cash-flow issues, financial stress, and lender policies."
  },
  {
    "question": "What documents are required for loan settlement?",
    "answer": "Documents may include loan statements, income details, bank records, notices received, and identity documents."
  },
  {
    "question": "What happens after loan settlement is completed?",
    "answer": "Borrowers receive written confirmation and closure documents, along with guidance for credit rebuilding."
  },
  {
    "question": "Do you offer city-specific loan settlement support?",
    "answer": "Yes. Services are available across every city and state in India."
  },
  {
    "question": "Can loan settlement be done for old defaults?",
    "answer": "In many cases, yes. Older or long-pending defaults may still be reviewed, subject to lender discretion."
  },
  {
    "question": "Will loan settlement remove all legal issues?",
    "answer": "Settlement helps resolve outstanding dues, but proper documentation and lender confirmation are essential."
  },
  {
    "question": "How do I start the loan settlement process?",
    "answer": "You can begin with a free initial consultation to review your loan and financial position."
  },
  {
    "question": "Is loan settlement available PAN-India online?",
    "answer": "Yes. The entire loan settlement process can be handled remotely for borrowers across India."
  }
];

export const ABOUT_PAGE_SECTIONS = [
  {
    "title": "About Us – Loan Settlement Expert",
    "paragraphs": [
      "Loan Settlement Expert is a trusted loan settlement and debt resolution service provider in India, offering Pan-India support to borrowers facing EMI stress, recovery pressure, or long-term financial hardship. We assist salaried professionals, self-employed individuals, entrepreneurs, and business owners across India with lawful, transparent, and RBI-guided loan settlement solutions.",
      "Our organisation was founded to help borrowers navigate financial distress without fear, harassment, or misinformation. With rising loan defaults, complex lending processes, and aggressive recovery practices, many borrowers struggle to find ethical guidance. Loan Settlement Expert bridges this gap by providing structured, compliant, and borrower-focused debt resolution services.",
      "We specialise in personal loan settlement, credit card debt settlement, business loan settlement, application-based loan resolution, and secured loan settlements, working closely with banks and NBFCs nationwide. Each case begins with a detailed financial and legal assessment to evaluate repayment capacity, outstanding liabilities, and regulatory position. Based on this, we design a customised settlement strategy focused on lawful negotiation and proper loan closure.",
      "A core pillar of our services is legal and RBI-compliant advisory. We help borrowers understand their rights under the RBI Fair Practices Code and recovery guidelines, and support clients facing recovery agent harassment, excessive calls, or unlawful visits, ensuring all actions remain within legal boundaries.",
      "Unlike generic debt services, we do not follow a one-size-fits-all approach. We emphasise clear documentation, written confirmations, and transparent execution, helping borrowers avoid future disputes. We also provide post-settlement guidance on credit rebuilding and financial discipline to support long-term stability.",
      "With a Pan-India presence and personalised service standards, Loan Settlement Expert is committed to confidentiality, integrity, and borrower dignity. Our goal goes beyond loan closure—we strive to deliver financial relief with clarity, confidence, and peace of mind."
    ],
    "items": []
  },
  {
    "title": "Our Story",
    "paragraphs": [
      "The journey of Loan Settlement Expert began with a simple but powerful realisation — thousands of borrowers across India are pushed into financial distress not because of irresponsibility, but due to unexpected life events such as medical emergencies, job loss, business slowdowns, or economic instability.",
      "Over the years, we witnessed how borrowers struggling with personal loans, credit cards, and business loans were often overwhelmed by complex banking processes, rising interest, and aggressive recovery practices. Many did not know their rights, while others feared engaging with lenders due to harassment or misinformation.",
      "Our story is rooted in the belief that financial hardship should never lead to loss of dignity. We started with a mission to provide borrowers across India with transparent, RBI-guided, and legally compliant loan settlement solutions.",
      "From handling a few cases to now assisting clients across Pan-India locations, our growth has been driven by trust, results, and word-of-mouth referrals. We focus on fairness, confidentiality, and long-term recovery.",
      "Today, Loan Settlement Expert stands as a dependable name in loan settlement, debt resolution, and anti-harassment support services in India—helping borrowers move forward with confidence and peace of mind."
    ],
    "items": []
  },
  {
    "title": "How Our Journey Began",
    "paragraphs": [
      "The journey of Loan Settlement Expert began by observing a reality that many borrowers across India silently endure — financial distress without access to proper guidance or lawful support. Individuals and families burdened by personal loans, credit card dues, and business liabilities were struggling not due to poor intent, but because of medical emergencies, job uncertainty, business losses, and unforeseen life events.",
      "During these early interactions, it became evident that borrowers were left confused and exposed. While banks and NBFCs followed institutional processes, borrowers lacked awareness of RBI guidelines, lawful settlement options, and their rights. In several cases, aggressive recovery pressure and unethical practices intensified emotional distress.",
      "Our journey took shape with a clear objective — to create a structured, ethical, and borrower-centric platform focused on transparent loan settlement, responsible debt resolution, and strict legal compliance. We began by assisting borrowers individually, understanding their financial realities, and guiding them through lawful settlement discussions with clarity and confidence.",
      "What started as a focused effort soon evolved into a Pan-India support system, driven by trust, referrals, and consistent results. Each successful resolution reaffirmed our belief that financial recovery is possible when guided by the right process and intent.",
      "Today, our journey continues on the same foundation — empathy, integrity, and commitment — helping borrowers across India move from financial stress toward stability and peace of mind."
    ],
    "items": []
  },
  {
    "title": "Our Mission & Vision",
    "paragraphs": [
      "At Loan Settlement Expert, our mission is to empower borrowers across India with lawful, transparent, and RBI-compliant loan settlement solutions that reduce financial stress and protect borrower dignity. We are committed to helping individuals, families, and businesses navigate financial hardship through structured debt resolution, ethical negotiation, and informed decision-making.",
      "Our mission is not just to settle loans, but to ensure that every borrower understands their rights, receives fair treatment, and achieves a sustainable path toward financial stability.",
      "Our vision is to become India’s most trusted Pan-India loan settlement and debt resolution platform, recognised for integrity, compliance, and borrower-first practices. We aspire to create a financial ecosystem where borrowers facing hardship are supported with respect, clarity, and lawful solutions rather than fear or harassment.",
      "Through continuous learning, legal compliance, and customer-centric innovation, we strive to set new benchmarks in responsible debt resolution services in India."
    ],
    "items": []
  },
  {
    "title": "Why Choose Loan Settlement Expert",
    "paragraphs": [
      "Choosing the right support during financial distress is critical. At Loan Settlement Expert, we provide lawful, transparent, and borrower-focused loan settlement solutions across India. Our approach is built on compliance, clarity, and compassion.",
      "We strictly follow RBI Fair Practices Code and recovery guidelines, ensuring lawful, ethical, and compliant settlement processes.",
      "Our Pan-India reach allows us to assist borrowers across metros, Tier-2, and Tier-3 cities with consistent expert support.",
      "Each case is customised based on repayment capacity, loan type, lender policy, and legal position.",
      "Our experience enables structured, documented negotiations focused on fair and lawful loan closure.",
      "We protect borrowers from recovery harassment, unlawful calls, and unethical visits under RBI norms.",
      "Clear documentation, written communication, and full transparency from assessment to closure.",
      "We also guide borrowers on credit rebuilding and financial discipline for long-term stability and confidence.",
      "Loan Settlement Expert is a trusted financial advisory firm specializing in loan settlement solutions, debt relief services, and bank dispute resolution. We help individuals and businesses reduce their outstanding liabilities through strategic negotiations with banks and NBFCs, ensuring legal compliance and financial stability.",
      "+91-92203 60824",
      "info@loansettlementexpert.in",
      "Gurugram (HR)",
      "Disclaimer: Loan Settlement Expert is a financial consultancy and advisory service provider. We are not a bank, NBFC, lending institution, or government-authorized agency. Loan settlement outcomes depend on lender policies, borrower profile, and legal factors. We do not guarantee loan waivers, fixed settlement amounts, or assured results. Users are advised to consult qualified legal or financial professionals before taking any decision."
    ],
    "items": [
      "About Us",
      "Testimonials",
      "Faq's",
      "Blog",
      "Join our Team",
      "Terms and Conditions",
      "Privacy Policy",
      "Credit Rebuilding",
      "Anti Harassment Support",
      "Personal Loan Settlement",
      "Credit Card Debt Settlement",
      "Business Loan Settlement",
      "Application Based Loan Settlement",
      "Loan Against Property Settlement",
      "Vehicle Loan Settlement",
      "Education Loan Settlement"
    ]
  }
];

export const JOIN_TEAM_SECTIONS = [
  {
    "title": "Why Work With Us",
    "paragraphs": [
      "At Loan Settlement Expert, we value:",
      "A people-first work culture focused on empathy and real solutions.",
      "Professional growth through training and industry exposure.",
      "Rewarding careers in financial services and client advocacy.",
      "Working with a growing team of experts driven by impact and integrity.",
      "You’ll be making a difference in lives — not just closing cases."
    ],
    "items": []
  },
  {
    "title": "Our Core Values",
    "paragraphs": [
      "Our team members thrive because we believe in:",
      "In every settlement and client interaction.",
      "Tailored to the borrower’s real needs.",
      "Aligned with RBI guidelines and financial regulations.",
      "In debt resolution strategies."
    ],
    "items": []
  },
  {
    "title": "Available Roles / Opportunities",
    "paragraphs": [
      "We’re hiring for various positions — whether you’re experienced or looking to grow:"
    ],
    "items": [
      "Handle loan settlement documentation & case review",
      "Ensure compliance with RBI and regulatory guidelines",
      "Coordinate with clients for legal clarification",
      "Assist in drafting settlement communication",
      "Build partnerships and referral networks",
      "Identify growth opportunities in target markets",
      "Engage with potential clients professionally",
      "Support strategic expansion initiatives"
    ]
  },
  {
    "title": "What You’ll Do",
    "paragraphs": [
      "At Loan Settlement Expert, your typical responsibilities may include:",
      "Understanding client financial profiles and loan history.",
      "Assisting in structuring settlement proposals.",
      "Supporting negotiations with banks & NBFCs.",
      "Coordinating with legal advisory teams to ensure compliant documentation.",
      "Providing ongoing client communication and case updates.",
      "Contributing to process improvements and service excellence.",
      "Specific job descriptions and skill requirements will be shared once you apply."
    ],
    "items": []
  },
  {
    "title": "Benefits & Growth",
    "paragraphs": [
      "Why Our Team Loves Working Here",
      "Attractive salary structure with performance-based incentives.",
      "Continuous learning opportunities and clear role advancement pathways.",
      "Guidance and collaboration with experienced industry specialists.",
      "Work on impactful cases that genuinely relieve client stress.",
      "A supportive workplace that values feedback, growth, and learning."
    ],
    "items": []
  },
  {
    "title": "Join Us",
    "paragraphs": [
      "Ready to be part of a purpose-driven team?",
      "Submit your resume or connect with us directly. Our HR team will review your profile and get in touch with you soon.",
      "Loan Settlement Expert is a trusted financial advisory firm specializing in loan settlement solutions, debt relief services, and bank dispute resolution. We help individuals and businesses reduce their outstanding liabilities through strategic negotiations with banks and NBFCs, ensuring legal compliance and financial stability.",
      "+91-92203 60824",
      "info@loansettlementexpert.in",
      "Gurugram (HR)",
      "Disclaimer: Loan Settlement Expert is a financial consultancy and advisory service provider. We are not a bank, NBFC, lending institution, or government-authorized agency. Loan settlement outcomes depend on lender policies, borrower profile, and legal factors. We do not guarantee loan waivers, fixed settlement amounts, or assured results. Users are advised to consult qualified legal or financial professionals before taking any decision."
    ],
    "items": [
      "About Us",
      "Testimonials",
      "Faq's",
      "Blog",
      "Join our Team",
      "Terms and Conditions",
      "Privacy Policy",
      "Credit Rebuilding",
      "Anti Harassment Support",
      "Loan Settlement Services",
      "Personal Loan Settlement",
      "Credit Card Debt Settlement",
      "Business Loan Settlement",
      "Application Based Loan Settlement",
      "Loan Against Property Settlement",
      "Vehicle Loan Settlement",
      "Education Loan Settlement"
    ]
  }
];

export const TERMS_SECTIONS: PolicySection[] = [
  {
    "title": "1. Acceptance of Terms",
    "paragraphs": [
      "By using this Site, you confirm that you are at least 18 years old and have the legal capacity to enter into a binding agreement. These Terms constitute a legally binding agreement between you and Loan Settlement Expert."
    ],
    "items": []
  },
  {
    "title": "2. Legal Disclaimer",
    "paragraphs": [
      "The information provided on this Site is for general informational purposes only and does not constitute legal advice. While we strive to ensure accuracy, we make no guarantees about the completeness, reliability, or suitability of the information. Consult an attorney for advice specific to your legal needs."
    ],
    "items": []
  },
  {
    "title": "3. Services",
    "paragraphs": [
      "Loan Settlement Expert specializes in banking law, arbitration, and the settlement of unsecured loans. Use of our services is governed by separate agreements entered into with our clients. These Terms do not replace or modify the terms of any client agreement."
    ],
    "items": []
  },
  {
    "title": "4. Intellectual Property Rights",
    "paragraphs": [
      "All content on this Site, including text, graphics, logos, and other materials, is the property of Loan Settlement Expert or its licensors and is protected by copyright, trademark, and other intellectual property laws. Unauthorized use of this content is prohibited."
    ],
    "items": []
  },
  {
    "title": "5. Prohibited Uses",
    "paragraphs": [],
    "items": [
      "Use the Site for unlawful purposes.",
      "Attempt to gain unauthorized access to the Site’s systems.",
      "Copy, modify, or distribute the Site’s content without prior written consent."
    ]
  },
  {
    "title": "6. Third-Party Links",
    "paragraphs": [
      "Our Site may contain links to third-party websites. Loan Settlement Expert is not responsible for the content, policies, or practices of any third-party websites. Access these sites at your own risk."
    ],
    "items": []
  },
  {
    "title": "7. Limitation of Liability",
    "paragraphs": [
      "Loan Settlement Expert shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this Site. This includes damages resulting from inaccuracies, delays, or errors in the information provided."
    ],
    "items": []
  },
  {
    "title": "8. Indemnification",
    "paragraphs": [
      "You agree to indemnify and hold harmless Loan Settlement Expert, its employees, agents, and affiliates from any claims, damages, losses, or expenses, including legal fees, arising from your use of the Site or violation of these Terms."
    ],
    "items": []
  },
  {
    "title": "9. Privacy Policy",
    "paragraphs": [
      "Your use of the Site is also governed by our Privacy Policy, which details how we collect, use, and protect your personal information. By using the Site, you consent to the practices described there."
    ],
    "items": []
  },
  {
    "title": "10. Changes to Terms",
    "paragraphs": [
      "Loan Settlement Expert reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Site constitutes acceptance of the revised Terms."
    ],
    "items": []
  },
  {
    "title": "11. Governing Law and Jurisdiction",
    "paragraphs": [
      "These Terms are governed by the laws of INDIA. Any disputes arising under these Terms shall be resolved exclusively in the courts located in Uttar Pradesh."
    ],
    "items": []
  },
  {
    "title": "12. Termination",
    "paragraphs": [
      "Loan Settlement Expert reserves the right to suspend or terminate your access to the Site at its sole discretion, without notice or liability, for any reason, including violation of these Terms."
    ],
    "items": []
  },
  {
    "title": "13. Contact Us",
    "paragraphs": [
      "Email: Info@loansettlementexpert.in",
      "Phone: 9220360824",
      "Loan Settlement Expert is a trusted financial advisory firm specializing in loan settlement solutions, debt relief services, and bank dispute resolution. We help individuals and businesses reduce their outstanding liabilities through strategic negotiations with banks and NBFCs, ensuring legal compliance and financial stability.",
      "+91-92203 60824",
      "info@loansettlementexpert.in",
      "Gurugram (HR)",
      "Disclaimer: Loan Settlement Expert is a financial consultancy and advisory service provider. We are not a bank, NBFC, lending institution, or government-authorized agency. Loan settlement outcomes depend on lender policies, borrower profile, and legal factors. We do not guarantee loan waivers, fixed settlement amounts, or assured results. Users are advised to consult qualified legal or financial professionals before taking any decision."
    ],
    "items": [
      "About Us",
      "Testimonials",
      "Faq's",
      "Blog",
      "Join our Team",
      "Terms and Conditions",
      "Privacy Policy",
      "Credit Rebuilding",
      "Anti Harassment Support",
      "Loan Settlement Services",
      "Personal Loan Settlement",
      "Credit Card Debt Settlement",
      "Business Loan Settlement",
      "Application Based Loan Settlement",
      "Home Loan Settlement",
      "Loan Against Property Settlement",
      "Vehicle Loan Settlement",
      "Education Loan Settlement"
    ]
  }
];

export const PRIVACY_SECTIONS: PolicySection[] = [
  {
    "title": "1. Information We Collect",
    "paragraphs": [],
    "items": [
      "Personal Information: Name, email address, phone number, and other details you provide.",
      "Non-Personal Information: Browser type, IP address, cookies, and analytics data."
    ]
  },
  {
    "title": "2. How We Use Your Information",
    "paragraphs": [],
    "items": [
      "Respond to inquiries and provide services.",
      "Improve website functionality and user experience.",
      "Send updates, promotional offers, and policy changes.",
      "Comply with legal obligations and enforce Terms & Conditions."
    ]
  },
  {
    "title": "3. Sharing Your Information",
    "paragraphs": [
      "We do not sell, rent, or trade your personal information."
    ],
    "items": [
      "Service Providers: IT support, payment processors, etc.",
      "Legal Authorities: When required by law.",
      "Affiliated Entities: Under common ownership."
    ]
  },
  {
    "title": "4. Cookies & Tracking Technologies",
    "paragraphs": [
      "Our website uses cookies to enhance browsing experience and analyze traffic. You can manage cookie preferences through your browser settings."
    ],
    "items": []
  },
  {
    "title": "5. Data Security",
    "paragraphs": [
      "We implement industry-standard security measures to protect your data. However, no online transmission is 100% secure. Use the site at your own risk."
    ],
    "items": []
  },
  {
    "title": "6. Your Rights",
    "paragraphs": [],
    "items": [
      "Access, update, or delete your personal information.",
      "Opt-out of marketing communications.",
      "Request a copy of stored data."
    ]
  },
  {
    "title": "7. Third-Party Links",
    "paragraphs": [
      "Our website may contain external links. We are not responsible for third-party privacy practices. Please review their policies separately."
    ],
    "items": []
  },
  {
    "title": "8. Changes to This Policy",
    "paragraphs": [
      "We may update this Privacy Policy anytime. Changes become effective upon posting. Continued use means acceptance of updates."
    ],
    "items": []
  },
  {
    "title": "9. Contact Us",
    "paragraphs": [
      "Loan Settlement Expert – Gurugram",
      "Email: Info@loansettlementexpert.in",
      "Phone: 9220360824",
      "Loan Settlement Expert is a trusted financial advisory firm specializing in loan settlement solutions, debt relief services, and bank dispute resolution. We help individuals and businesses reduce their outstanding liabilities through strategic negotiations with banks and NBFCs, ensuring legal compliance and financial stability.",
      "+91-92203 60824",
      "support@loansettlementexpert.in",
      "Gurugram (HR)",
      "Disclaimer: Loan Settlement Expert is a financial consultancy and advisory service provider. We are not a bank, NBFC, lending institution, or government-authorized agency. Loan settlement outcomes depend on lender policies, borrower profile, and legal factors. We do not guarantee loan waivers, fixed settlement amounts, or assured results. Users are advised to consult qualified legal or financial professionals before taking any decision."
    ],
    "items": [
      "About Us",
      "Testimonials",
      "Faq's",
      "Blog",
      "Join our Team",
      "Terms and Conditions",
      "Privacy Policy",
      "Credit Rebuilding",
      "Anti Harassment Support",
      "Loan Settlement Services",
      "Personal Loan Settlement",
      "Credit Card Debt Settlement",
      "Business Loan Settlement",
      "Application Based Loan Settlement",
      "Home Loan Settlement",
      "Loan Against Property Settlement",
      "Vehicle Loan Settlement",
      "Education Loan Settlement"
    ]
  }
];
