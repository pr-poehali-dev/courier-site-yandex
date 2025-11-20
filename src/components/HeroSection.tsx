import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  return (
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
              <Button size="lg" className="text-lg h-14 px-8" onClick={onRegisterClick}>
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
  );
}
