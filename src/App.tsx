import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  ExternalLink,
  Calendar,
  Award,
  Languages,
  Target,
  ChevronDown,
  Github,
  Eye,
  Download,
  Menu,
  X,
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  Globe,
  Server,
  Database,
  Smartphone,
  Monitor,
  Cloud,
  Sparkles,
  Rocket,
  Heart,
  Coffee,
  Music,
  Trophy,
  BookOpen,
  Lightbulb,
  Shield,
  Cpu,
  Terminal,
  Layers,
  GitBranch,
  Sun,
  Moon,
  Home
} from 'lucide-react';

import image from "./assets/profil.jpg"
import logo from "./assets/profil.jpg"
// 1. Ton objet avec les URLs
const techLogos = {
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  Linux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  Ubuntu: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg',
} as const; // 👈 très important pour typer automatiquement

// 2. Type dérivé automatiquement
type TechLogoKeys = keyof typeof techLogos;

// 3. Tu peux maintenant utiliser `techLogos[skill]` sans erreur :
const getLogo = (skill: TechLogoKeys): string => techLogos[skill];


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animation de chargement initial
    setIsLoaded(true);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      
      const sections = ['hero', 'about', 'experience', 'skills', 'contact'];
      const scrollPosition = scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Animation au scroll pour les éléments
      const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'experience', label: 'Expérience' },
    { id: 'skills', label: 'Compétences' },
    { id: 'contact', label: 'Contact' }
  ];

  const experiences = [
    {
      period: 'Août 2024 – Janvier 2025',
      role: 'Stage - Développeur Full Stack & Infrastructure',
      company: 'Pôle Anti-Corruption de Madagascar',
      location: 'Antananarivo',
      type: 'Stage',
      description: 'Conception et déploiement d\'un portail applicatif pour l\'accès aux ressources numériques avec mise en place d\'un serveur de messagerie Zimbra.',
      achievements: [
        'Conception et déploiement d\'un portail applicatif avec PHP, MySQL, HTML5 et CSS3',
        'Mise en place d\'un serveur de messagerie Zimbra sur Ubuntu Server',
        'Collaboration à des audits réguliers pour garantir la sécurité et performance',
        'Technologies : PHP, MySQL, HTML5, CSS3, Zimbra, Ubuntu Server, Git'
      ],
      color: 'from-blue-500 via-purple-500 to-pink-500',
      icon: Monitor,
      bgPattern: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
    },
    {
      period: 'Octobre 2024',
      role: 'Projet Académique - Développeur Mobile & Backend',
      company: 'École Nationale d\'Informatique',
      location: 'Fianarantsoa',
      type: 'Projet',
      description: 'Développement d\'une application mobile de gestion de stock et de vente avec React Native et backend Node.js.',
      achievements: [
        'Développement d\'une application mobile avec React Native (Expo)',
        'Conception d\'un backend robuste avec Node.js, Express.js et Sequelize',
        'API RESTful connectée à PostgreSQL avec optimisation des requêtes SQL',
        'Technologies : React Native, Expo, Node.js, Express.js, PostgreSQL, Sequelize'
      ],
      color: 'from-green-500 via-teal-500 to-cyan-500',
      icon: Smartphone,
      bgPattern: 'bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20'
    },
    {
      period: 'Septembre 2024',
      role: 'Projet Académique - Développeur Full Stack',
      company: 'École Nationale d\'Informatique',
      location: 'Fianarantsoa',
      type: 'Projet',
      description: 'Création d\'une application web de gestion de pointage pour le suivi des présences.',
      achievements: [
        'Application web de gestion de pointage pour suivi des présences',
        'Backend avec Node.js, Express.js et Sequelize',
        'Interface utilisateur avec React.js et Tailwind CSS',
        'Technologies : React.js, Node.js, Express.js, PostgreSQL, Sequelize, Tailwind CSS'
      ],
      color: 'from-purple-500 via-pink-500 to-red-500',
      icon: Monitor,
      bgPattern: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      period: 'Mars 2024',
      role: 'Projet Académique - Développeur Full Stack',
      company: 'École Nationale d\'Informatique',
      location: 'Fianarantsoa',
      type: 'Projet',
      description: 'Conception d\'une application web de réservation de salles avec React.js et Spring Boot.',
      achievements: [
        'Application web de réservation de salles avec React.js et Tailwind CSS',
        'Backend avec Java (Spring Boot) et Hibernate',
        'API RESTful connectée à PostgreSQL',
        'Technologies : React.js, Java, Spring Boot, PostgreSQL, Hibernate, Tailwind CSS'
      ],
      color: 'from-orange-500 via-red-500 to-pink-500',
      icon: Server,
      bgPattern: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    },
    {
      period: 'Juin 2024',
      role: 'Projet Académique - Développeur Backend',
      company: 'École Nationale d\'Informatique',
      location: 'Fianarantsoa',
      type: 'Projet',
      description: 'Développement d\'une API RESTful pour une application mobile de gestion de stock.',
      achievements: [
        'API RESTful pour application mobile de gestion de stock',
        'Développement avec Node.js, Express.js et Sequelize',
        'Optimisation des requêtes MySQL pour synchronisation avec Android',
        'Technologies : Java, Node.js, Express.js, MySQL, Sequelize, Git'
      ],
      color: 'from-teal-500 via-cyan-500 to-blue-500',
      icon: Database,
      bgPattern: 'bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20'
    },
    {
      period: 'Juin 2024',
      role: 'Projet Académique - Administrateur Réseau',
      company: 'École Nationale d\'Informatique',
      location: 'Fianarantsoa',
      type: 'Projet',
      description: 'Configuration d\'un Active Directory sur Windows Server pour la gestion des utilisateurs.',
      achievements: [
        'Configuration d\'un Active Directory sur Windows Server',
        'Gestion des utilisateurs et des permissions',
        'Mise en place de politiques de groupe pour sécuriser l\'accès',
        'Technologies : Windows Server, Active Directory, PowerShell'
      ],
      color: 'from-indigo-500 via-purple-500 to-pink-500',
      icon: Shield,
      bgPattern: 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20'
    },
    {
      period: 'Juin 2024',
      role: 'Projet Académique - Sécurité Informatique',
      company: 'École Nationale d\'Informatique',
      location: 'Fianarantsoa',
      type: 'Projet',
      description: 'Analyse de la sécurité d\'un serveur Ubuntu 20.04 avec ClamAV pour détecter les malwares.',
      achievements: [
        'Analyse de sécurité d\'un serveur Ubuntu 20.04 avec ClamAV',
        'Audit des configurations pour identifier les vulnérabilités',
        'Renforcement des mesures de sécurité',
        'Technologies : Ubuntu Server, ClamAV, Bash'
      ],
      color: 'from-emerald-500 via-teal-500 to-cyan-500',
      icon: Shield,
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'
    }
  ];

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['JavaScript', 'TypeScript', 'React.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'] as TechLogoKeys[],
      color: 'from-blue-400 to-cyan-400',
      icon: Monitor,
      description: 'Interfaces modernes et responsives'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Java', 'Spring Boot', 'Express.js', 'PHP'] as TechLogoKeys[],
      color: 'from-green-400 to-emerald-400',
      icon: Server,
      description: 'APIs robustes et scalables'
    },
    {
      title: 'Bases de Données',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB'] as TechLogoKeys[],
      color: 'from-purple-400 to-violet-400',
      icon: Database,
      description: 'Gestion et optimisation'
    },
    {
      title: 'Mobile',
      skills: ['React Native', 'Java'] as TechLogoKeys[], // Changed 'Java Android' to 'Java'
      color: 'from-pink-400 to-rose-400',
      icon: Smartphone,
      description: 'Applications cross-platform'
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'Git', 'Linux', 'Ubuntu'] as TechLogoKeys[],
      color: 'from-orange-400 to-amber-400',
      icon: Cloud,
      description: 'Déploiement et administration'
    }
  ];

  const stats = [
    { number: '20+', label: 'Projets', icon: Rocket, color: 'from-blue-500 to-cyan-500' },
    { number: '25+', label: 'Technologies', icon: Cpu, color: 'from-purple-500 to-pink-500' },
    { number: '2+', label: 'Années', icon: Calendar, color: 'from-green-500 to-teal-500' },
    { number: '99.9%', label: 'Disponibilité', icon: Shield, color: 'from-orange-500 to-red-500' }
  ];

  const achievements = [
    {
      title: 'Diplôme d\'Ingénieur',
      subtitle: 'École Nationale d\'Informatique',
      year: '2024',
      mention: 'Mention Bien',
      icon: GraduationCap,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Portail Applicatif',
      subtitle: 'Pôle Anti-Corruption',
      year: '2024',
      mention: 'Déployé avec succès',
      icon: Globe,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Serveur Zimbra',
      subtitle: 'Messagerie d\'entreprise',
      year: '2024',
      mention: 'Configuration complète',
      icon: Server,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-700 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        
        {/* Navigation avec animations */}
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isLoaded ? 'animate-fade-in-down' : ''}`}>
          <div className="max-w-6xl mx-auto container-responsive">
            <div className="flex justify-between items-center h-16">
              
             {/* Logo avec animation */}
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover-glow animate-petit-a-petit">
              <span className="text-2xl font-bold text-white tracking-tight font-mono">
                JL
              </span>
            </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''} animate-fade-in-down delay-${(index + 1) * 100}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Controls avec animations */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover-scale animate-scale-in delay-500"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500 animate-spin-slow" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600 animate-pulse-custom" />
                  )}
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover-scale animate-scale-in delay-700"
                >
                  {mobileMenuOpen ? 
                    <X className="w-5 h-5 animate-wiggle" /> : 
                    <Menu className="w-5 h-5" />
                  }
                </button>
              </div>
            </div>

            {/* Mobile Navigation avec animation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-slide-in-up">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover-lift animate-fade-in-up delay-${index * 100} ${
                        activeSection === item.id 
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section avec animations avancées */}
        <section id="hero" className="section-hero particle-bg">
          <div className="max-w-6xl mx-auto container-responsive text-center">
            
            {/* Profile Image avec animation */}
            <div className={`mb-8 ${isLoaded ? 'animate-scale-in' : ''}`}>
                <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 hover-glow animate-float">
                  <img 
                    src={image}
                    alt="Jeanson Landrie's profile picture"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
             </div>
            
            {/* Main Title avec animation */}
            <h1 className={`text-5xl md:text-7xl font-black mb-6 ${isLoaded ? 'animate-fade-in-up delay-200' : ''}`}>
              <span className="gradient-text animate-gradient">
                 LANDRIE Jeanson
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 ${isLoaded ? 'animate-fade-in-up delay-400' : ''}`}>
              Développeur <span className="font-bold text-blue-600">Full Stack</span>
            </p>
            
            <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 ${isLoaded ? 'animate-fade-in-up delay-600' : ''}`}>
              Diplômé de l'École Nationale d'Informatique avec une expertise en 
              <span className="text-blue-600 font-semibold"> Node.js</span>, 
              <span className="text-purple-600 font-semibold"> React.js</span> et 
              <span className="text-pink-600 font-semibold"> Spring Boot</span>
            </p>
            
            {/* Stats avec animations */}
            <div className="grid grid-2-4 gap-6 mb-12">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className={`text-center card-interactive animate-fade-in-up delay-${800 + index * 100}`}>
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center hover-rotate">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* CTA Buttons avec animations */}
            <div className={`flex flex-col sm:flex-row justify-center gap-4 ${isLoaded ? 'animate-fade-in-up delay-1000' : ''}`}>
              <a
                href="mailto:landrie.jeanson@gmail.com"
                className="btn-primary hover-lift animate-glow"
              >
                <Mail className="w-5 h-5 mr-2" />
                Me contacter
              </a>
              
              <a
                href="https://linkedin.com/in/jeanson-landrie-3a2756256"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline hover-lift"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>

            {/* Scroll Indicator avec animation */}
            <button
              onClick={() => scrollToSection('about')}
              className="mt-16 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 animate-bounce-custom"
            >
              <ChevronDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </section>

        {/* About Section avec animations au scroll */}
        <section id="about" className="section bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto container-responsive">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="section-title">À propos de moi</h2>
              <p className="section-subtitle">
                Développeur Full Stack passionné avec une expertise approfondie
              </p>
            </div>

            <div className="grid grid-1-2-3 gap-8">
              {/* Personal Info */}
              <div className="card hover-lift scroll-reveal-left">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
                    <User className="w-6 h-6 mr-2" />
                    Informations
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center hover-scale">
                      <Phone className="w-5 h-5 mr-3 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">+261 38 09 818 30</span>
                    </div>
                    <div className="flex items-center hover-scale">
                      <Mail className="w-5 h-5 mr-3 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">landrie.jeanson@gmail.com</span>
                    </div>
                    <div className="flex items-center hover-scale">
                      <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">Antananarivo, Madagascar</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="card hover-lift scroll-reveal">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-600 flex items-center">
                    <GraduationCap className="w-6 h-6 mr-2" />
                    Formation
                  </h3>
                  <div className="space-y-4">
                    <div className="hover-scale">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Diplôme d'Ingénieur</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">École Nationale d'Informatique</p>
                      <p className="text-sm text-gray-500">2023 – 2024 • Mention Bien</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="card hover-lift scroll-reveal-right">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-600 flex items-center">
                    <Languages className="w-6 h-6 mr-2" />
                    Langues
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between hover-scale">
                      <span className="text-gray-700 dark:text-gray-300">Français</span>
                      <span className="text-sm text-green-600 font-medium">B2</span>
                    </div>
                    <div className="flex justify-between hover-scale">
                      <span className="text-gray-700 dark:text-gray-300">Anglais</span>
                      <span className="text-sm text-blue-600 font-medium">B1/B2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements avec animations */}
            <div className="grid grid-1-2-3 gap-8 mt-12">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className={`card-interactive text-center scroll-reveal-scale delay-${index * 200}`}>
                    <div className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center hover-rotate">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {achievement.subtitle}
                      </p>
                      <span className="text-sm text-green-600 font-medium">
                        {achievement.mention}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Section avec animations */}
        <section id="experience" className="section">
          <div className="max-w-6xl mx-auto container-responsive">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="section-title">Expériences</h2>
              <p className="section-subtitle">
                Mon parcours professionnel et académique
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <div key={index} className={`card hover-lift scroll-reveal delay-${index * 100}`}>
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div className="flex items-start mb-4 md:mb-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 hover-rotate">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1 hover:text-blue-600 transition-colors duration-200">
                              {exp.role}
                            </h3>
                            <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-full text-sm font-medium mr-3 hover-scale">
                            {exp.type}
                          </span>
                          <span className="text-gray-500 text-sm">{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start hover-scale">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-custom" />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills Section avec animations */}
        <section id="skills" className="section bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto container-responsive">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="section-title">Compétences</h2>
              <p className="section-subtitle">
                Technologies et outils que je maîtrise
              </p>
            </div>

            <div className="grid grid-auto-fit gap-8">
              {skillCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className={`card-interactive scroll-reveal-scale delay-${index * 100}`}>
                    <div className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl flex items-center justify-center mb-4 hover-rotate">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100 hover:text-blue-600 transition-colors duration-200">
                        {category.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {category.description}
                      </p>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex flex-col items-center hover-scale">
                            <div className="w-10 h-10 mb-2 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg hover-glow">
                              {techLogos[skill] ? (
                                <img 
                                  src={techLogos[skill]} 
                                  alt={skill}
                                  className="w-6 h-6 object-contain"
                                />
                              ) : (
                                <Code2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                              )}
                            </div>
                            <span className="text-xs text-center text-gray-600 dark:text-gray-400 font-medium leading-tight">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section avec animations */}
        <section id="contact" className="section">
          <div className="max-w-6xl mx-auto container-responsive">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="section-title">Contact</h2>
              <p className="section-subtitle">
                N'hésitez pas à me contacter pour discuter de vos projets
              </p>
            </div>

            <div className="grid grid-1-2-3 gap-8 mb-12">
              <a
                href="mailto:landrie.jeanson@gmail.com"
                className="card-interactive text-center scroll-reveal-left"
              >
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center hover-rotate">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">landrie.jeanson@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+261380981830"
                className="card-interactive text-center scroll-reveal"
              >
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl flex items-center justify-center hover-rotate">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Téléphone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+261 38 09 818 30</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/jeanson-landrie-3a2756256"
                target="_blank"
                rel="noopener noreferrer"
                className="card-interactive text-center scroll-reveal-right"
              >
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl flex items-center justify-center hover-rotate">
                    <Linkedin className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-400">Jeanson LANDRIE</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer avec animation */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto container-responsive text-center">
            <div className="text-2xl font-bold mb-4 text-blue-400 hover-scale animate-float">JL</div>
            <p className="text-gray-400 mb-6">
              © 2024  LANDRIE Jeanson. Développeur Full Stack.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:landrie.jeanson@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200 hover-scale">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/jeanson-landrie-3a2756256" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 hover-scale">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="tel:+261380981830" className="text-gray-400 hover:text-white transition-colors duration-200 hover-scale">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;