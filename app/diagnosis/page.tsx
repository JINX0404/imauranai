'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserInput, PersonalityType, MBTIType, BirthLocation } from '@/types';
import { generatePatternId } from '@/lib/diagnosis';
import { COUNTRIES } from '@/lib/countries';
import { MBTI_TYPES } from '@/lib/mbti';

const PERSONALITY_TYPES: { value: PersonalityType; label: string; emoji: string }[] = [
  { value: '直感型', label: 'Intuitive', emoji: '💫' },
  { value: '論理型', label: 'Logical', emoji: '🧠' },
  { value: '感情型', label: 'Emotional', emoji: '❤️' },
  { value: '現実型', label: 'Realistic', emoji: '⚡' }
];

export default function DiagnosisPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showMBTI, setShowMBTI] = useState(false);
  const [formData, setFormData] = useState<{
    birthDate: string;
    birthLocation: BirthLocation;
    birthTime?: string;
    personalityType: PersonalityType;
    mbtiType?: MBTIType;
  }>({
    birthDate: '',
    birthLocation: { country: 'JP', region: '東京都' },
    birthTime: '',
    personalityType: '直感型',
    mbtiType: undefined
  });

  const handleCountryChange = (countryCode: string) => {
    const country = COUNTRIES.find(c => c.code === countryCode);
    setFormData({
      ...formData,
      birthLocation: {
        country: countryCode,
        region: country?.regions?.[0]?.nameJa || ''
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const userInput: UserInput = {
      ...formData,
      mbtiType: showMBTI ? formData.mbtiType : undefined
    };
    
    const patternId = generatePatternId(userInput);
    const queryParams = new URLSearchParams({
      pattern: patternId,
      birthDate: formData.birthDate,
      country: formData.birthLocation.country,
      region: formData.birthLocation.region || '',
      personalityType: formData.personalityType,
      ...(formData.mbtiType && { mbti: formData.mbtiType })
    });
    
    router.push(`/result?${queryParams.toString()}`);
  };

  const currentCountry = COUNTRIES.find(c => c.code === formData.birthLocation.country);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl opacity-20 animate-pulse" style={{ top: '20%', left: '10%' }} />
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 blur-3xl opacity-20 animate-pulse" style={{ bottom: '20%', right: '10%' }} />
      </div>

      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Step {step} of 3</span>
              <span className="text-sm text-gray-400">{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Birth Info */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center space-y-4 mb-8">
                  <h1 className="text-4xl md:text-5xl font-black">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      BIRTH INFO
                    </span>
                  </h1>
                  <p className="text-gray-400">When and where did your journey begin?</p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 space-y-6">
                  {/* Birth Date */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wider">Birth Date</label>
                    <input
                      type="date"
                      required
                      value={formData.birthDate}
                      onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>

                  {/* Birth Location */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wider">Country</label>
                    <select
                      value={formData.birthLocation.country}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    >
                      {COUNTRIES.map((country) => (
                        <option key={country.code} value={country.code} className="bg-gray-900">
                          {country.nameJa} / {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Region (if available) */}
                  {currentCountry?.regions && (
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 uppercase tracking-wider">
                        {formData.birthLocation.country === 'JP' ? 'Prefecture' : 'State/Region'}
                      </label>
                      <select
                        value={formData.birthLocation.region}
                        onChange={(e) => setFormData({
                          ...formData,
                          birthLocation: { ...formData.birthLocation, region: e.target.value }
                        })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                      >
                        {currentCountry.regions.map((region) => (
                          <option key={region.code} value={region.nameJa} className="bg-gray-900">
                            {region.nameJa}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Birth Time (Optional) */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wider">
                      Birth Time <span className="text-xs">(Optional)</span>
                    </label>
                    <input
                      type="time"
                      value={formData.birthTime}
                      onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                >
                  Next Step →
                </button>
              </div>
            )}

            {/* Step 2: Personality */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center space-y-4 mb-8">
                  <h1 className="text-4xl md:text-5xl font-black">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      PERSONALITY
                    </span>
                  </h1>
                  <p className="text-gray-400">How do you see the world?</p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 space-y-6">
                  {/* Basic Personality Type */}
                  <div className="space-y-4">
                    <label className="text-sm text-gray-400 uppercase tracking-wider">Choose Your Type</label>
                    <div className="grid grid-cols-2 gap-4">
                      {PERSONALITY_TYPES.map((type) => (
                        <label
                          key={type.value}
                          className={`
                            relative cursor-pointer p-6 rounded-2xl border-2 transition-all
                            ${formData.personalityType === type.value
                              ? 'border-purple-500 bg-purple-500/20'
                              : 'border-white/20 hover:border-white/40 bg-white/5'
                            }
                          `}
                        >
                          <input
                            type="radio"
                            name="personalityType"
                            value={type.value}
                            checked={formData.personalityType === type.value}
                            onChange={(e) => setFormData({ ...formData, personalityType: e.target.value as PersonalityType })}
                            className="sr-only"
                          />
                          <div className="text-center space-y-2">
                            <div className="text-3xl">{type.emoji}</div>
                            <div className="font-bold">{type.label}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* MBTI Toggle */}
                  <div className="pt-6 border-t border-white/10">
                    <label className="flex items-center justify-between cursor-pointer">
                      <div>
                        <div className="font-bold">Know your MBTI?</div>
                        <div className="text-sm text-gray-400">Optional: Add your 16 personality type</div>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={showMBTI}
                          onChange={(e) => setShowMBTI(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-14 h-8 rounded-full transition-colors ${showMBTI ? 'bg-purple-500' : 'bg-white/20'}`}>
                          <div className={`w-6 h-6 bg-white rounded-full transition-transform transform ${showMBTI ? 'translate-x-7' : 'translate-x-1'} mt-1`} />
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* MBTI Selection */}
                  {showMBTI && (
                    <div className="space-y-4 animate-fadeIn">
                      <label className="text-sm text-gray-400 uppercase tracking-wider">Select Your MBTI Type</label>
                      <div className="grid grid-cols-4 gap-3">
                        {MBTI_TYPES.map((mbti) => (
                          <label
                            key={mbti.type}
                            className={`
                              relative cursor-pointer p-3 rounded-lg border transition-all text-center
                              ${formData.mbtiType === mbti.type
                                ? 'border-purple-500 bg-purple-500/20'
                                : 'border-white/20 hover:border-white/40 bg-white/5'
                              }
                            `}
                          >
                            <input
                              type="radio"
                              name="mbtiType"
                              value={mbti.type}
                              checked={formData.mbtiType === mbti.type}
                              onChange={(e) => setFormData({ ...formData, mbtiType: e.target.value as MBTIType })}
                              className="sr-only"
                            />
                            <div className="font-bold text-sm">{mbti.type}</div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 bg-white/10 rounded-xl font-bold hover:bg-white/20 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold hover:scale-105 transition-transform"
                  >
                    Next Step →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center space-y-4 mb-8">
                  <h1 className="text-4xl md:text-5xl font-black">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      READY?
                    </span>
                  </h1>
                  <p className="text-gray-400">Your destiny awaits...</p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 space-y-4">
                  <div className="space-y-4 text-center">
                    <div className="text-6xl">🔮</div>
                    <h2 className="text-2xl font-bold">Let&apos;s Reveal Your Destiny</h2>
                    <p className="text-gray-400">
                      Combining ancient Eastern wisdom with modern psychology
                      to unlock your true potential.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Birth Date:</span>
                      <span>{new Date(formData.birthDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Location:</span>
                      <span>{formData.birthLocation.region || currentCountry?.nameJa}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Personality:</span>
                      <span>{PERSONALITY_TYPES.find(p => p.value === formData.personalityType)?.label}</span>
                    </div>
                    {formData.mbtiType && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">MBTI:</span>
                        <span>{formData.mbtiType}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 py-4 bg-white/10 rounded-xl font-bold hover:bg-white/20 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold hover:scale-105 transition-transform"
                  >
                    Reveal My Destiny ✨
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}