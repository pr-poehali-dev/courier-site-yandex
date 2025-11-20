import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface LayoutProps {
  children: React.ReactNode;
  onRegisterClick: () => void;
}

export default function Layout({ children, onRegisterClick }: LayoutProps) {
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
          <Button onClick={onRegisterClick}>
            Стать курьером
          </Button>
        </div>
      </header>

      {children}

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
