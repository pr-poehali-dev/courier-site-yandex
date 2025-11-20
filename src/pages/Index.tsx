import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import IncomeCalculator from '@/components/IncomeCalculator';
import RegistrationForm from '@/components/RegistrationForm';

const CITIES = [
  'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань',
  'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону',
  'Уфа', 'Красноярск', 'Воронеж', 'Пермь', 'Волгоград'
];

const BENEFITS = [
  {
    icon: 'Wallet',
    title: 'Высокий доход',
    description: 'Зарабатывай до 150 000 ₽ в месяц с учетом бонусов и чаевых'
  },
  {
    icon: 'Calendar',
    title: 'Гибкий график',
    description: 'Выбирай удобное время работы и количество смен самостоятельно'
  },
  {
    icon: 'Zap',
    title: 'Быстрый старт',
    description: 'Начни работать уже через 1-2 дня после регистрации'
  },
  {
    icon: 'TrendingUp',
    title: 'Бонусы и премии',
    description: 'Получай дополнительные выплаты за выполнение плана'
  },
  {
    icon: 'Shield',
    title: 'Страховка',
    description: 'Полное страхование на время работы за счет компании'
  },
  {
    icon: 'HeadphonesIcon',
    title: 'Поддержка 24/7',
    description: 'Круглосуточная помощь по любым вопросам'
  }
];

const REQUIREMENTS = [
  { icon: 'User', text: 'Возраст от 18 лет' },
  { icon: 'FileText', text: 'Документы РФ (паспорт, ИНН)' },
  { icon: 'Bike', text: 'Свой транспорт (велосипед, самокат, авто)' },
  { icon: 'Smartphone', text: 'Смартфон с интернетом' }
];

const FAQ = [
  {
    question: 'Сколько можно заработать?',
    answer: 'Средний доход курьера составляет 80 000 - 150 000 ₽ в месяц. Итоговая сумма зависит от количества заказов, времени работы и выполнения бонусных условий.'
  },
  {
    question: 'Как быстро можно начать работать?',
    answer: 'После успешной регистрации и прохождения проверки документов вы сможете приступить к работе через 1-2 дня.'
  },
  {
    question: 'Нужен ли опыт работы курьером?',
    answer: 'Нет, опыт работы не требуется. Мы предоставим всю необходимую информацию и обучение.'
  },
  {
    question: 'Какой график работы?',
    answer: 'График полностью гибкий. Вы сами выбираете, когда и сколько работать. Можно совмещать с учебой или другой работой.'
  },
  {
    question: 'Предоставляется ли экипировка?',
    answer: 'Да, каждый курьер получает фирменную термосумку бесплатно. Также можно приобрести форменную одежду со скидкой.'
  }
];

export default function Index() {
  const [selectedCity, setSelectedCity] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    transport: ''
  });
  const { toast } = useToast();

  const filteredCities = CITIES.filter(city =>
    city.toLowerCase().includes(searchCity.toLowerCase())
  );

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setFormData({ ...formData, city });
    setShowRegistrationForm(true);
    window.scrollTo({ top: document.getElementById('registration')?.offsetTop, behavior: 'smooth' });
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: `Спасибо, ${formData.name}! Мы свяжемся с вами в ближайшее время.`,
    });
    setFormData({ name: '', phone: '', city: '', transport: '' });
    setShowRegistrationForm(false);
  };

  return (
    <Layout onRegisterClick={() => setShowRegistrationForm(true)}>
      <HeroSection onRegisterClick={() => setShowRegistrationForm(true)} />

      <IncomeCalculator onRegisterClick={() => setShowRegistrationForm(true)} />

      <section id="benefits" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Почему работать с нами выгодно?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создали лучшие условия для курьеров
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={benefit.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-xl">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cities" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Выбери свой город
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы работаем в крупнейших городах России
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="relative">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Найти город..."
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {filteredCities.map((city) => (
                <Button
                  key={city}
                  variant={selectedCity === city ? 'default' : 'outline'}
                  className="h-14 text-base hover:scale-105 transition-transform"
                  onClick={() => handleCitySelect(city)}
                >
                  <Icon name="MapPin" size={18} className="mr-2" />
                  {city}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="requirements" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Требования к кандидатам
            </h2>
            <p className="text-xl text-muted-foreground">
              Всё что нужно для начала работы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {REQUIREMENTS.map((req, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name={req.icon} className="text-primary" size={32} />
                  </div>
                  <p className="font-medium text-lg">{req.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {showRegistrationForm && (
        <RegistrationForm
          formData={formData}
          onFormChange={handleFormChange}
          onSubmit={handleSubmit}
        />
      )}

      <section id="faq" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы
            </p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {FAQ.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
}
