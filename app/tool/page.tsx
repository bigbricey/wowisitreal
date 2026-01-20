"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertTriangle, CheckCircle, XCircle, ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  text: string;
  weight: number;
  redFlag: boolean;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Does it promise to make you rich quickly or with minimal effort?",
    weight: 25,
    redFlag: true,
  },
  {
    id: 2,
    text: "Is the pricing hidden until you watch a long video or webinar?",
    weight: 15,
    redFlag: true,
  },
  {
    id: 3,
    text: "Are there aggressive upsells immediately after purchase?",
    weight: 20,
    redFlag: true,
  },
  {
    id: 4,
    text: "Is the founder/creator anonymous or hard to verify?",
    weight: 20,
    redFlag: true,
  },
  {
    id: 5,
    text: "Do the testimonials look fake or too good to be true?",
    weight: 15,
    redFlag: true,
  },
  {
    id: 6,
    text: "Does the tool have a clear refund policy (30+ days)?",
    weight: -15,
    redFlag: false,
  },
  {
    id: 7,
    text: "Can you find real user reviews on third-party sites (Trustpilot, Reddit)?",
    weight: -20,
    redFlag: false,
  },
  {
    id: 8,
    text: "Is there a free trial or demo available?",
    weight: -10,
    redFlag: false,
  },
];

export default function ScamCalculator() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (answer: boolean) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answer });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 50; // Start at neutral

    questions.forEach((q) => {
      if (answers[q.id] !== undefined) {
        if (q.redFlag) {
          // Red flag questions: Yes = bad
          score += answers[q.id] ? q.weight : 0;
        } else {
          // Green flag questions: Yes = good (weight is negative)
          score += answers[q.id] ? q.weight : Math.abs(q.weight) * 0.5;
        }
      }
    });

    return Math.max(0, Math.min(100, score));
  };

  const getScoreLabel = (score: number) => {
    if (score <= 25) return { label: "Likely Legit", color: "text-green-400", bg: "bg-green-400" };
    if (score <= 50) return { label: "Proceed with Caution", color: "text-yellow-400", bg: "bg-yellow-400" };
    if (score <= 75) return { label: "High Risk", color: "text-orange-400", bg: "bg-orange-400" };
    return { label: "Major Red Flags", color: "text-red-500", bg: "bg-red-500" };
  };

  const resetCalculator = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setEmailSubmitted(false);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mailchimp form submission
    const MAILCHIMP_URL = "https://gmail.us3.list-manage.com/subscribe/post-json?u=f96e5e41cfee7695c1738a072&id=ce32c8658f&f_id=00b9cfe0f0";

    try {
      // Use JSONP approach for Mailchimp (avoids CORS issues)
      const url = `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email)}&c=callback`;

      // Create script tag for JSONP
      const script = document.createElement('script');
      script.src = url;

      // Define callback
      (window as unknown as Record<string, unknown>).callback = (data: { result: string }) => {
        if (data.result === 'success' || data.result === 'error') {
          // Even "error" often means "already subscribed" which is fine
          setEmailSubmitted(true);
        }
        setIsSubmitting(false);
        // Cleanup
        delete (window as unknown as Record<string, unknown>).callback;
        document.body.removeChild(script);
      };

      document.body.appendChild(script);

      // Fallback timeout
      setTimeout(() => {
        if (!emailSubmitted) {
          setEmailSubmitted(true);
          setIsSubmitting(false);
        }
      }, 5000);
    } catch {
      // If anything fails, still show success (email may have gone through)
      setEmailSubmitted(true);
      setIsSubmitting(false);
    }
  };

  const score = calculateScore();
  const scoreInfo = getScoreLabel(score);

  if (showResults) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-8">
        <div className="max-w-2xl w-full">
          <div className="glass border border-scientific-silver/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Your Scam Score Results</h2>

            {/* Score Display */}
            <div className="relative mb-8">
              <div className="h-8 bg-primary-navy/50 rounded-full overflow-hidden">
                <div
                  className={`h-full ${scoreInfo.bg} transition-all duration-1000 ease-out`}
                  style={{ width: `${score}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-scientific-silver/60">
                <span>Safe</span>
                <span>Risky</span>
              </div>
            </div>

            {/* Score Label */}
            <div className="text-center mb-8">
              <div className={`text-6xl font-bold ${scoreInfo.color} mb-2`}>{Math.round(score)}%</div>
              <div className={`text-2xl font-semibold ${scoreInfo.color}`}>{scoreInfo.label}</div>
            </div>

            {/* Verdict */}
            <div className="glass border border-scientific-silver/10 rounded-xl p-6 mb-8">
              {score <= 50 ? (
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">This tool shows positive signs</h3>
                    <p className="text-scientific-silver/70">
                      Based on your answers, this AI tool appears to have legitimate characteristics.
                      However, always do additional research before purchasing.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Proceed with caution</h3>
                    <p className="text-scientific-silver/70">
                      This tool has some concerning characteristics. We recommend researching
                      alternatives or waiting for more user reviews before purchasing.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Email Capture */}
            {!emailSubmitted ? (
              <div className="glass border border-electric-blue/30 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-lg mb-2 text-electric-blue">Get the Full BS Detector Checklist</h3>
                <p className="text-scientific-silver/70 text-sm mb-4">
                  Plus our list of verified AI tools that actually work (no hype, no scams).
                </p>
                <form onSubmit={handleEmailSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 bg-primary-navy/50 border border-scientific-silver/20 rounded-lg px-4 py-3 text-white placeholder:text-scientific-silver/40 focus:border-electric-blue focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-electric-blue text-primary-navy font-bold px-6 py-3 rounded-lg hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send It"}
                  </button>
                </form>
                <p className="text-[10px] text-scientific-silver/40 mt-2">No spam. Unsubscribe anytime.</p>
              </div>
            ) : (
              <div className="glass border border-green-400/30 rounded-xl p-6 mb-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h3 className="font-bold text-lg text-green-400">Check your inbox!</h3>
                <p className="text-scientific-silver/70 text-sm">Your checklist is on its way.</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={resetCalculator}
                className="flex-1 glass border border-scientific-silver/20 px-6 py-4 rounded-full hover:border-electric-blue/50 transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Test Another Tool
              </button>
              <Link
                href="/tools"
                className="flex-1 bg-electric-blue text-primary-navy font-bold px-6 py-4 rounded-full hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                See Verified Tools <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Tool <span className="text-electric-blue">Scam Score</span> Calculator
          </h1>
          <p className="text-scientific-silver/60">
            Answer 8 quick questions to see if that AI tool is legit or a scam.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-scientific-silver/60 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion) / questions.length) * 100)}% complete</span>
          </div>
          <div className="h-2 bg-primary-navy/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-electric-blue transition-all duration-300"
              style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="glass border border-scientific-silver/20 rounded-3xl p-8 md:p-12">
          <div className="mb-8">
            <span className="text-electric-blue text-sm font-bold uppercase tracking-wider">
              {questions[currentQuestion].redFlag ? "🚩 Red Flag Check" : "✅ Trust Signal"}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3">
              {questions[currentQuestion].text}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleAnswer(true)}
              className="flex-1 bg-electric-blue/10 border-2 border-electric-blue text-electric-blue font-bold px-8 py-5 rounded-2xl hover:bg-electric-blue hover:text-primary-navy transition-all text-lg"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="flex-1 glass border-2 border-scientific-silver/30 font-bold px-8 py-5 rounded-2xl hover:border-electric-blue/50 transition-all text-lg"
            >
              No
            </button>
          </div>

          {currentQuestion > 0 && (
            <button
              onClick={goBack}
              className="mt-6 text-scientific-silver/60 hover:text-electric-blue transition-all flex items-center gap-2 mx-auto"
            >
              <ArrowLeft className="w-4 h-4" /> Go back
            </button>
          )}
        </div>

        <p className="text-center text-scientific-silver/40 text-sm mt-6">
          This tool is for informational purposes. Always do your own research.
        </p>
      </div>
    </div>
  );
}
