import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Bike" className="text-primary-foreground" size={24} />
            </div>
            <span className="font-heading font-bold text-xl">Яндекс Еда</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#cities" className="text-sm font-medium hover:text-primary transition-colors">
              Города
            </a>
            <a href="#requirements" className="text-sm font-medium hover:text-primary transition-colors">
              Требования
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          <Button onClick={() => setShowRegistrationForm(true)}>
            Стать курьером
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="secondary" className="w-fit">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Вакансии открыты
              </Badge>
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
                Стань курьером <span className="text-primary">Яндекс Еды</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Зарабатывай до 150 000 ₽ в месяц с гибким графиком. Начни работать уже завтра!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg h-14 px-8" onClick={() => setShowRegistrationForm(true)}>
                  Подать заявку
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="font-heading font-bold text-3xl">150K ₽</div>
                  <div className="text-sm text-muted-foreground">Средний доход</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-3xl">15+</div>
                  <div className="text-sm text-muted-foreground">Городов России</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-3xl">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/0004f755-445d-4aa5-b671-c76eb7208eea/files/4e9df40f-1207-48d1-83ec-153b981dfbff.jpg"
                alt="Курьер Яндекс Еды"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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
        <section id="registration" className="py-20 scroll-mt-16">
          <div className="container">
            <Card className="max-w-2xl mx-auto border-2 border-primary shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="font-heading font-bold text-3xl mb-2">
                    Заполни форму
                  </h2>
                  <p className="text-muted-foreground">
                    Мы свяжемся с тобой в течение 24 часов
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя и фамилия</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Номер телефона</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Город</Label>
                    <Input
                      id="city"
                      placeholder="Выберите город"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="transport">Тип транспорта</Label>
                    <Input
                      id="transport"
                      placeholder="Велосипед, самокат, авто..."
                      required
                      value={formData.transport}
                      onChange={(e) => setFormData({ ...formData, transport: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-14 text-lg">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
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

      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Bike" className="text-primary-foreground" size={24} />
                </div>
                <span className="font-heading font-bold text-xl">Яндекс Еда</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Работа курьером в лучшем сервисе доставки еды
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>8 (800) 555-35-35</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>job@yandex-eda.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Соцсети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-8 border-t">
            © 2024 Яндекс Еда. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
