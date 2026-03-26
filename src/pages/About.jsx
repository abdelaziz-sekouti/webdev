import { Target, Award, Users, Code, Palette, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  const skills = [
    { icon: Code, title: t('about.s1_title'), description: t('about.s1_desc') },
    { icon: Palette, title: t('about.s2_title'), description: t('about.s2_desc') },
    { icon: Rocket, title: t('about.s3_title'), description: t('about.s3_desc') },
    { icon: Users, title: t('about.s4_title'), description: t('about.s4_desc') }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('about.title')}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="w-full h-80 md:h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="text-8xl font-bold">+150</span>
                    <p className="text-xl mt-2">{t('about.projects_done')}</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-2xl flex items-center justify-center">
                  <Award className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>

            <div className="animate-on-scroll delay-200">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                {t('about.history_title')}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {t('about.history_p1')}
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {t('about.history_p2')}
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                {t('about.history_p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('about.mission_title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('about.mission_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {t('about.mission_card_title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('about.mission_card_desc')}
              </p>
            </div>

            <div className="animate-on-scroll bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {t('about.vision_card_title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('about.vision_card_desc')}
              </p>
            </div>

            <div className="animate-on-scroll bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center" style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {t('about.values_card_title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('about.values_card_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('about.skills_title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('about.skills_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                  <skill.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('about.ready_title')}
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            {t('about.ready_subtitle')}
          </p>
          <a
            href={`https://wa.me/212612236660?text=${encodeURIComponent(t('hero.whatsapp_message'))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
          >
            {t('about.ready_btn')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;