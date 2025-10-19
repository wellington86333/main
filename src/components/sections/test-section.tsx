'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle } from 'lucide-react';
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
    const testElement = document.getElementById('test');
    if (testElement) {
        testElement.scrollIntoView({ behavior: 'smooth' });
    }
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
            <div className="mt-4 inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                <span>{t.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-headline mt-4">{t.title}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t.description}</p>
        </div>

        {!showResult ? (
          <Card className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200/30">
            <CardContent className="p-0">
              <div className="space-y-10">
                {t.questions.map((question, index) => (
                  <div key={question.id} className="border-b border-slate-200/30 pb-10 last:border-b-0 last:pb-0">
                    <div className="flex items-start space-x-6">
                      <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-indigo-600 font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-800 mb-6 leading-relaxed">{question.question}</h3>
                        <div className="space-y-3">
                          {question.options.map((option) => (
                            <label
                              key={option.value}
                              className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                                answers[question.id] === option.value
                                  ? 'border-indigo-500 bg-indigo-50 shadow-md'
                                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
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
                               <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                                    answers[question.id] === option.value 
                                      ? 'border-indigo-500 bg-indigo-500' 
                                      : 'border-slate-300'
                                  }`}>
                                    {answers[question.id] === option.value && (
                                      <div className="w-2 h-2 bg-white rounded-full"></div>
                                    )}
                                  </div>
                              <span className="text-slate-700 font-medium">{option.text}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Button
                  onClick={handleTestSubmit}
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 h-auto rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  {t.submitButton}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-slate-200/30">
            <CardContent className="p-0">
               <div className="mb-8">
                    <div className={`w-20 h-20 ${recommendation.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <RecommendationIcon className={`w-10 h-10 ${recommendation.color}`} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">
                      {t.resultTitle} <span className={recommendation.color}>{recommendation.level}</span>
                    </h3>
                    <p className={`text-xl ${recommendation.color} max-w-2xl mx-auto leading-relaxed`}>
                      {recommendation.message}
                    </p>
                  </div>
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/50">
                    <p className="text-slate-600 text-lg leading-relaxed">
                        {t.resultDisclaimer}
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white h-auto px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <a href="https://wa.me/5581996903004" target="_blank" rel="noopener noreferrer nofollow">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      {t.scheduleButton}
                    </a>
                  </Button>
                  <Button onClick={resetTest} variant="outline" size="lg" className="bg-white text-slate-700 px-8 py-4 h-auto rounded-xl font-semibold border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-md hover:shadow-lg">
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
