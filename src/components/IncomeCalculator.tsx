import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface IncomeCalculatorProps {
  onRegisterClick: () => void;
}

export default function IncomeCalculator({ onRegisterClick }: IncomeCalculatorProps) {
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerWeek, setDaysPerWeek] = useState(5);

  const calculateIncome = () => {
    const ordersPerHour = 2.5;
    const avgOrderPrice = 250;
    const weeksPerMonth = 4.3;
    
    const dailyOrders = hoursPerDay * ordersPerHour;
    const weeklyOrders = dailyOrders * daysPerWeek;
    const monthlyOrders = weeklyOrders * weeksPerMonth;
    const monthlyIncome = monthlyOrders * avgOrderPrice;
    
    const bonus = monthlyIncome * 0.15;
    const tips = monthlyIncome * 0.1;
    
    return {
      base: Math.round(monthlyIncome),
      bonus: Math.round(bonus),
      tips: Math.round(tips),
      total: Math.round(monthlyIncome + bonus + tips)
    };
  };

  const income = calculateIncome();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Рассчитай свой доход
          </h2>
          <p className="text-xl text-muted-foreground">
            Узнай, сколько сможешь зарабатывать
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Часов в день</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        type="range"
                        min="2"
                        max="12"
                        value={hoursPerDay}
                        onChange={(e) => setHoursPerDay(Number(e.target.value))}
                        className="flex-1"
                      />
                      <div className="w-16 h-12 bg-primary/10 rounded-lg flex items-center justify-center font-bold text-lg">
                        {hoursPerDay}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Дней в неделю</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        type="range"
                        min="1"
                        max="7"
                        value={daysPerWeek}
                        onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                        className="flex-1"
                      />
                      <div className="w-16 h-12 bg-primary/10 rounded-lg flex items-center justify-center font-bold text-lg">
                        {daysPerWeek}
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Info" size={16} />
                      <span>Средняя стоимость заказа: 250 ₽</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Info" size={16} />
                      <span>Среднее количество заказов: 2-3 в час</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Базовый доход</div>
                      <div className="font-heading font-bold text-2xl">{income.base.toLocaleString()} ₽</div>
                    </div>
                    <div className="h-px bg-border"></div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Бонусы (15%)</span>
                        <span className="font-semibold">+{income.bonus.toLocaleString()} ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Чаевые (10%)</span>
                        <span className="font-semibold">+{income.tips.toLocaleString()} ₽</span>
                      </div>
                    </div>
                    <div className="h-px bg-border"></div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Итого в месяц</div>
                      <div className="font-heading font-bold text-4xl text-primary">
                        {income.total.toLocaleString()} ₽
                      </div>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="w-full h-14 text-lg"
                    onClick={onRegisterClick}
                  >
                    Хочу зарабатывать столько!
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
