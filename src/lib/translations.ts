export const translations = {
  pt: {
    header: {
      title: "PsiWell",
      nav_about: "Sobre",
      nav_services: "Serviços",
      nav_test: "Teste Emocional",
      nav_contact: "Contato",
    },
    hero: {
      mainTitle: "Wellington Brito - Psicólogo",
      crp: "CRP 02/15189",
      subtitle: "Seu espaço seguro para cuidar da saúde mental. Oferecemos apoio profissional, recursos e ferramentas interativas para promover seu bem-estar emocional.",
      audience: "Para brasileiros no Brasil e no exterior",
      ctaButton: "Faça o Teste de Necessidade",
      ctaButtonSecondary: "Agende sua Sessão"
    },
    about: {
      title: "Sobre mim",
      text: "Sou Wellington Brito, psicólogo clínico com formação baseada na Psicanálise. Meu trabalho é oferecer um espaço de escuta e reflexão, ajudando você a lidar com questões emocionais, conflitos internos e a buscar maior autoconhecimento. Atendo de forma online, em plataformas seguras e de fácil acesso.",
    },
    services: {
      title: "Serviços",
      cards: [
        {
          title: "Psicanálise",
          description: "Atendimento voltado para compreender o inconsciente e promover mudanças internas.",
        },
        {
          title: "Terapia Individual",
          description: "Sessões personalizadas para trabalhar ansiedade, depressão, autoestima e conflitos.",
        },
        {
          title: "Atendimento Online",
          description: "Sessões seguras pelas principais plataformas de atendimento psicológico online.",
        },
      ],
    },
    socialValues: {
      title: "Valores Sociais",
      text: "Acredito que o acesso à saúde mental deve ser possível para todos. Por isso, ofereço valores sociais e flexibilidade de negociação, considerando as condições individuais de cada pessoa. Se você deseja iniciar seu processo terapêutico, entre em contato para conversar sobre a melhor forma de adequar o atendimento à sua realidade.",
    },
    contact: {
      title: "Entre em Contato",
      form: {
        name: "Seu nome",
        email: "Seu e-mail",
        message: "Escreva sua mensagem",
        submit: "Enviar Mensagem",
        success: "Mensagem enviada com sucesso! Em breve entrarei em contato.",
        error: "Ocorreu um erro. Tente novamente.",
      },
    },
    footer: {
      title: "Contato",
      subtitle: "Cuidando da sua saúde mental com profissionalismo e empatia.",
      email: "Email",
      phone: "Telefone",
      copyright: "© 2025 wellingtonbritopsi - Todos os direitos reservados.",
    },
    test: {
      title: "Teste de Saúde Emocional",
      description: "Este teste rápido ajuda a avaliar seu estado emocional e a identificar se você pode se beneficiar de apoio psicológico. Não substitui um diagnóstico profissional.",
      submitButton: "Ver Resultado",
      pleaseAnswer: "Por favor, responda todas as perguntas antes de continuar.",
      resultTitle: "Resultado: Nível",
      resultDisclaimer: "Este teste é apenas uma orientação inicial. Para uma avaliação completa, recomendamos agendar uma consulta com um profissional qualificado.",
      scheduleButton: "Agendar Consulta",
      retakeButton: "Fazer Novo Teste",
      recommendations: {
        low: {
          level: "Baixo",
          message: "Seus resultados indicam um nível baixo de sintomas. Continue cuidando do seu bem-estar emocional!",
        },
        moderate: {
          level: "Moderado",
          message: "Seus resultados sugerem sintomas moderados. Considere buscar apoio psicológico para melhorar sua qualidade de vida.",
        },
        high: {
          level: "Elevado",
          message: "Seus resultados indicam sintomas significativos. Recomendamos fortemente que você procure ajuda profissional o mais breve possível.",
        },
      },
      questions: [
        {
          id: 1,
          question: "Nas últimas 2 semanas, com que frequência você se sentiu triste ou deprimido?",
          options: [
            { value: 0, text: "Nunca" },
            { value: 1, text: "Alguns dias" },
            { value: 2, text: "Mais da metade dos dias" },
            { value: 3, text: "Quase todos os dias" }
          ]
        },
        {
          id: 2,
          question: "Você tem sentido dificuldade em concentrar-se em tarefas diárias?",
          options: [
            { value: 0, text: "Nunca" },
            { value: 1, text: "Raramente" },
            { value: 2, text: "Frequentemente" },
            { value: 3, text: "Sempre" }
          ]
        },
        {
          id: 3,
          question: "Com que frequência você se sente ansioso ou preocupado excessivamente?",
          options: [
            { value: 0, text: "Nunca" },
            { value: 1, text: "Alguns dias por mês" },
            { value: 2, text: "Várias vezes por semana" },
            { value: 3, text: "Diariamente" }
          ]
        },
        {
          id: 4,
          question: "Você tem tido dificuldade para dormir (insônia ou sono excessivo)?",
          options: [
            { value: 0, text: "Nunca" },
            { value: 1, text: "1-2 noites por semana" },
            { value: 2, text: "3-4 noites por semana" },
            { value: 3, text: "Quase todas as noites" }
          ]
        },
        {
          id: 5,
          question: "Você sente que perdeu o interesse em atividades que antes gostava?",
          options: [
            { value: 0, text: "Não" },
            { value: 1, text: "Um pouco" },
            { value: 2, text: "Moderadamente" },
            { value: 3, text: "Muito" }
          ]
        },
        {
          id: 6,
          question: "Você se sente sobrecarregado(a) com as responsabilidades diárias?",
          options: [
            { value: 0, text: "Nunca" },
            { value: 1, text: "Raramente" },
            { value: 2, text: "Frequentemente" },
            { value: 3, text: "Sempre" }
          ]
        },
        {
          id: 7,
          question: "Você tem sentido dificuldade em manter relacionamentos saudáveis?",
          options: [
            { value: 0, text: "Não" },
            { value: 1, text: "Levemente" },
            { value: 2, text: "Moderadamente" },
            { value: 3, text: "Severamente" }
          ]
        },
        {
          id: 8,
          question: "Você sente que sua autoestima está baixa ultimamente?",
          options: [
            { value: 0, text: "Não" },
            { value: 1, text: "Às vezes" },
            { value: 2, text: "Frequentemente" },
            { value: 3, text: "Sempre" }
          ]
        }
      ]
    }
  },
  en: {
    header: {
      title: "PsiWell",
      nav_about: "About",
      nav_services: "Services",
      nav_test: "Emotional Test",
      nav_contact: "Contact",
    },
    hero: {
      mainTitle: "Wellington Brito - Psychologist",
      crp: "CRP 02/15189",
      subtitle: "Your safe space for mental health care. We offer professional support, resources, and interactive tools to promote your emotional well-being.",
      audience: "For Brazilians in Brazil and abroad",
      ctaButton: "Take the Needs Test",
      ctaButtonSecondary: "Schedule your session",
    },
    about: {
      title: "About me",
      text: "I am Wellington Brito, a clinical psychologist with a background in Psychoanalysis. My work is to offer a space for listening and reflection, helping you deal with emotional issues, internal conflicts, and seek greater self-knowledge. I provide online services on secure and easily accessible platforms.",
    },
    services: {
      title: "Services",
      cards: [
        {
          title: "Psychoanalysis",
          description: "Care focused on understanding the unconscious and promoting internal changes.",
        },
        {
          title: "Individual Therapy",
          description: "Personalized sessions to work on anxiety, depression, self-esteem, and conflicts.",
        },
        {
          title: "Online Sessions",
          description: "Secure sessions through the main online psychological care platforms.",
        },
      ],
    },
    socialValues: {
      title: "Social Values",
      text: "I believe that access to mental health should be possible for everyone. Therefore, I offer social prices and negotiation flexibility, considering the individual conditions of each person. If you wish to start your therapeutic process, get in touch to discuss the best way to adapt the service to your reality.",
    },
    contact: {
      title: "Get in Touch",
      form: {
        name: "Your name",
        email: "Your email",
        message: "Write your message",
        submit: "Send Message",
        success: "Message sent successfully! I will get in touch soon.",
        error: "An error occurred. Please try again.",
      },
    },
    footer: {
      title: "Contact",
      subtitle: "Caring for your mental health with professionalism and empathy.",
      email: "Email",
      phone: "Phone",
      copyright: "© 2025 wellingtonbritopsi - All rights reserved.",
    },
    test: {
      title: "Emotional Health Test",
      description: "This quick test helps assess your current emotional state and identify if you could benefit from professional psychological support. It does not replace a professional diagnosis.",
      submitButton: "View Result",
      pleaseAnswer: "Please answer all questions before continuing.",
      resultTitle: "Result: Level",
      resultDisclaimer: "This test is only an initial guide. For a full assessment, we recommend scheduling a consultation with a qualified professional.",
      scheduleButton: "Schedule Consultation",
      retakeButton: "Retake Test",
      recommendations: {
        low: {
          level: "Low",
          message: "Your results indicate a low level of symptoms. Keep taking care of your emotional well-being!",
        },
        moderate: {
          level: "Moderate",
          message: "Your results suggest moderate symptoms. Consider seeking psychological support to improve your quality of life.",
        },
        high: {
          level: "High",
          message: "Your results indicate significant symptoms. We strongly recommend that you seek professional help as soon as possible.",
        },
      },
      questions: [
        {
          id: 1,
          question: "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
          options: [
            { value: 0, text: "Not at all" },
            { value: 1, text: "Several days" },
            { value: 2, text: "More than half the days" },
            { value: 3, text: "Nearly every day" }
          ]
        },
        {
          id: 2,
          question: "Have you been finding it difficult to concentrate on daily tasks?",
          options: [
            { value: 0, text: "Never" },
            { value: 1, text: "Rarely" },
            { value: 2, text: "Frequently" },
            { value: 3, text: "Always" }
          ]
        },
        {
          id: 3,
          question: "How often do you feel anxious or worry excessively?",
          options: [
            { value: 0, text: "Never" },
            { value: 1, text: "A few days a month" },
            { value: 2, text: "Several times a week" },
            { value: 3, text: "Daily" }
          ]
        },
        {
          id: 4,
          question: "Have you been having trouble sleeping (insomnia or excessive sleep)?",
          options: [
            { value: 0, text: "Never" },
            { value: 1, text: "1-2 nights a week" },
            { value: 2, text: "3-4 nights a week" },
            { value: 3, text: "Nearly every night" }
          ]
        },
        {
          id: 5,
          question: "Do you feel you have lost interest in activities you used to enjoy?",
          options: [
            { value: 0, text: "No" },
            { value: 1, text: "A little" },
            { value: 2, text: "Moderately" },
            { value: 3, text: "A lot" }
          ]
        },
        {
          id: 6,
          question: "Do you feel overwhelmed by daily responsibilities?",
          options: [
            { value: 0, text: "Never" },
            { value: 1, text: "Rarely" },
            { value: 2, text: "Frequently" },
            { value: 3, text: "Always" }
          ]
        },
        {
          id: 7,
          question: "Have you found it difficult to maintain healthy relationships?",
          options: [
            { value: 0, text: "No" },
            { value: 1, text: "Slightly" },
            { value: 2, text: "Moderately" },
            { value: 3, text: "Severely" }
          ]
        },
        {
          id: 8,
          question: "Do you feel your self-esteem has been low lately?",
          options: [
            { value: 0, text: "No" },
            { value: 1, text: "Sometimes" },
            { value: 2, text: "Frequently" },
            { value: 3, text: "Always" }
          ]
        }
      ]
    }
  },
};

export type Translations = typeof translations.pt;
