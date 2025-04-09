import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

interface SpamResult {
  isSpam: boolean;
  confidence: number;
}

const Detector = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SpamResult | null>(null);

  const predefinedMessages = [
    "Gagnez 1000€ maintenant ! Cliquez ici !",
    "Bonjour, comment allez-vous aujourd'hui ?",
    "URGENT: Votre compte a été compromis !"
  ];

  const analyzeMessage = async (text: string) => {
    setLoading(true);
    try {
      const response = await fetch('https://domain.ma/api/spam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      
      if (!response.ok) throw new Error('Erreur réseau');
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de l\'analyse');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-[#2A5C82] mb-6">
          Détecteur de Spam
        </h2>

        {/* Text Area */}
        <div className="mb-6">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full min-h-[200px] p-4 border rounded-lg focus:ring-2 focus:ring-[#2A5C82] focus:border-transparent"
            placeholder="Entrez votre message ici..."
          />
        </div>

        {/* Predefined Messages */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Messages d'exemple :</p>
          <div className="flex flex-wrap gap-2">
            {predefinedMessages.map((msg, index) => (
              <button
                key={index}
                onClick={() => setMessage(msg)}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {msg}
              </button>
            ))}
          </div>
        </div>

        {/* Analyze Button */}
        <button
          onClick={() => analyzeMessage(message)}
          disabled={loading || !message.trim()}
          className={`w-full py-3 rounded-lg text-white font-medium transition-colors
            ${loading || !message.trim() 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[#2A5C82] hover:bg-[#234b6a]'
            }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <Loader className="animate-spin mr-2" />
              Analyse en cours...
            </span>
          ) : (
            'Analyser le message'
          )}
        </button>

        {/* Results */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 rounded-lg border"
          >
            <div className="flex items-center mb-4">
              {result.isSpam ? (
                <>
                  <AlertCircle className="h-8 w-8 text-[#F44336] mr-2" />
                  <span className="text-xl font-semibold text-[#F44336]">
                    Message suspect détecté
                  </span>
                </>
              ) : (
                <>
                  <CheckCircle className="h-8 w-8 text-[#4CAF50] mr-2" />
                  <span className="text-xl font-semibold text-[#4CAF50]">
                    Message légitime
                  </span>
                </>
              )}
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Niveau de confiance :</p>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    result.isSpam ? 'bg-[#F44336]' : 'bg-[#4CAF50]'
                  }`}
                  style={{ width: `${result.confidence}%` }}
                />
              </div>
              <p className="text-right text-sm mt-1">{result.confidence}%</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Detector;