import React from 'react';
import { Shield, CheckCircle, Zap, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Protection Avancée',
      description: 'Détection en temps réel des messages indésirables'
    },
    {
      icon: CheckCircle,
      title: 'Haute Précision',
      description: '95% de taux de détection précise'
    },
    {
      icon: Zap,
      title: 'Analyse Rapide',
      description: 'Résultats instantanés en moins de 2 secondes'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#2A5C82] mb-6">
          Protection Intelligente Contre le Spam
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Une solution moderne et efficace pour détecter et bloquer les messages indésirables en temps réel.
        </p>
      </motion.div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <feature.icon className="h-12 w-12 text-[#2A5C82] mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Statistics */}
      <div className="bg-[#2A5C82] text-white rounded-lg p-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <BarChart className="h-12 w-12 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">95%</h4>
            <p>Précision de détection</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-2">1M+</h4>
            <p>Messages analysés</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-2">24/7</h4>
            <p>Protection continue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;