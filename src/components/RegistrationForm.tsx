import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface RegistrationFormProps {
  formData: {
    name: string;
    phone: string;
    city: string;
    transport: string;
  };
  onFormChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function RegistrationForm({ formData, onFormChange, onSubmit }: RegistrationFormProps) {
  return (
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
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Имя и фамилия</Label>
                <Input
                  id="name"
                  placeholder="Иван Иванов"
                  required
                  value={formData.name}
                  onChange={(e) => onFormChange('name', e.target.value)}
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
                  onChange={(e) => onFormChange('phone', e.target.value)}
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
                  onChange={(e) => onFormChange('city', e.target.value)}
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
                  onChange={(e) => onFormChange('transport', e.target.value)}
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
  );
}
