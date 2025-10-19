'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, MessageCircle } from 'lucide-react';
import type { Translations } from '@/lib/translations';

type TestSectionProps = {
  t: Translations['test'];
};

type TestAnswers = { [key: number]: number };

export function TestSection({ t }: TestSectionProps) {
  const [answers, setAnswers] = useState<TestAnswers>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const totalScore = useMemo(() => {
    return Object.values(answers).reduce((sum, score) => sum + score, 0);
  }, [answers]);

  const recommendation = useMemo(() => {
    if (totalScore <= 8) {
      return {
        ...t.recommendations.low,
        color: "text-green-600",
        bgColor: "bg-green-50",
        icon: CheckCircle
      };
    } else if (totalScore <= 16) {
      return {
        ...t.recommendations.moderate,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        icon: AlertTriangle
      };
    } else {
      return {
        ...t.recommendations.high,
        color: "text-red-600",
        bgColor: "bg-red-50",
        icon: AlertTriangle
      };
    }
  }, [totalScore, t.recommendations]);

  const handleTestSubmit = () => {
    if (Object.keys(answers).length !== t.questions.length) {
      alert(t.pleaseAnswer);
      return;
    }
    setShowResult(true);
  };

  const resetTest = () => {
    setAnswers({});
    setShowResult(false);
  };

  const RecommendationIcon = recommendation.icon;

  return (
    <section id="test" className="py-16 sm:py-24">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline sm:text-4xl text-gray-800 mb-4">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.description}</p>
        </div>

        {!showResult ? (
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl p-6 sm:p-8">
            <CardContent className="p-0">
              <div className="space-y-8">
                {t.questions.map((question, index) => (
                  <div key={question.id} className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-semibold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">{question.question}</h3>
                        <div className="space-y-3">
                          {question.options.map((option) => (
                            <label
                              key={option.value}
                              className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                answers[question.id] === option.value
                                  ? 'border-primary bg-primary/5'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={option.value}
                                checked={answers[question.id] === option.value}
                                onChange={() => handleAnswerSelect(question.id, option.value)}
                                className="sr-only"
                              />
                               <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                                    answers[question.id] === option.value 
                                      ? 'border-primary bg-primary' 
                                      : 'border-gray-300'
                                  }`}>
                                    {answers[question.id] === option.value && (
                                      <div className="w-2 h-2 bg-white rounded-full"></div>
                                    )}
                                  </div>
                              <span className="text-gray-700">{option.text}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleTestSubmit}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-white"
                >
                  {t.submitButton}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl p-8 text-center">
            <CardContent className="p-0">
              <div className="mb-6">
                <div className={`w-16 h-16 ${recommendation.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <RecommendationIcon className={`w-8 h-8 ${recommendation.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {t.resultTitle} {recommendation.level}
                </h3>
                <p className={`text-lg ${recommendation.color}`}>
                  {recommendation.message}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">{t.resultDisclaimer}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
                    <a href="mailto:Wellington.brito@rocketmail.com">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {t.scheduleButton}
                    </a>
                  </Button>
                  <Button onClick={resetTest} variant="outline">
                    {t.retakeButton}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
