import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, History } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        {/* Technology Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Code className="h-8 w-8 text-[#2A5C82] mr-3" />
            <h2 className="text-2xl font-bold">Notre Technologie</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Notre système de détection de spam utilise des algorithmes d'apprentissage 
            automatique avancés pour analyser en temps réel les caractéristiques des 
            messages. Notre modèle est constamment mis à jour pour s'adapter aux 
            nouvelles techniques de spam.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Machine Learning</h3>
              <p className="text-sm text-gray-600">Algorithmes adaptatifs</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Analyse temps réel</h3>
              <p className="text-sm text-gray-600">Résultats instantanés</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Base de données</h3>
              <p className="text-sm text-gray-600">Millions d'échantillons</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-[#2A5C82] mr-3" />
            <h2 className="text-2xl font-bold">Notre Équipe</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Notre équipe au travail"
                className="rounded-lg shadow-md mb-4"
              />
              <p className="text-gray-600">
                Une équipe passionnée d'experts en sécurité et en développement,
                dédiée à la protection de vos communications.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Expertise Technique</h3>
                <p className="text-gray-600">
                  Plus de 10 ans d'expérience en cybersécurité et analyse de données.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Support Client</h3>
                <p className="text-gray-600">
                  Une équipe disponible 24/7 pour répondre à vos questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <History className="h-8 w-8 text-[#2A5C82] mr-3" />
            <h2 className="text-2xl font-bold">Notre Histoire</h2>
          </div>
          <div className="space-y-6">
            <div className="flex">
              <div className="w-24 flex-shrink-0">
                <span className="font-bold text-[#2A5C82]">2022</span>
              </div>
              <p className="text-gray-600">Lancement du projet SpamGuard</p>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0">
                <span className="font-bold text-[#2A5C82]">2023</span>
              </div>
              <p className="text-gray-600">
                Développement de l'algorithme d'apprentissage automatique
              </p>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0">
                <span className="font-bold text-[#2A5C82]">2024</span>
              </div>
              <p className="text-gray-600">
                Lancement de la plateforme en ligne et expansion internationale
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;