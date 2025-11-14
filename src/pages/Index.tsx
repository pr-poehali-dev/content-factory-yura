import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [articles, setArticles] = useState([10]);
  const [socialPosts, setSocialPosts] = useState([20]);
  const [videos, setVideos] = useState([2]);

  const articlePrice = 500;
  const socialPostPrice = 200;
  const videoPrice = 5000;

  const totalPrice = articles[0] * articlePrice + socialPosts[0] * socialPostPrice + videos[0] * videoPrice;

  const services = [
    {
      icon: 'FileText',
      title: 'Статьи и посты',
      description: 'SEO-оптимизированные статьи для блога и сайта',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Share2',
      title: 'Соцсети',
      description: 'Контент для Instagram, Facebook, VK, Telegram',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'Video',
      title: 'Видео',
      description: 'Сценарии, монтаж и продакшн видеоконтента',
      gradient: 'from-purple-600 to-indigo-500'
    },
    {
      icon: 'Mail',
      title: 'Email-рассылки',
      description: 'Персонализированные письма для клиентов',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  const benefits = [
    { icon: 'Zap', text: 'Быстрое производство' },
    { icon: 'Target', text: 'Точное попадание в ЦА' },
    { icon: 'TrendingUp', text: 'Рост конверсий' },
    { icon: 'Award', text: 'Экспертный подход' }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden gradient-primary py-24 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 text-lg px-6 py-2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
              🚀 Контент-завод нового поколения
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Производство контента<br />
              <span className="text-white/90">на автопилоте</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Создаём качественный контент для вашего бизнеса: статьи, посты, видео и рассылки. 
              Быстро, профессионально, с гарантией результата.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-6 hover-scale">
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать работу
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 hover-scale">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-scale-in">
            {services.map((service, index) => (
              <Card key={index} className="glass hover-scale cursor-pointer border-2 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                    <Icon name={service.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Калькулятор стоимости</h2>
            <p className="text-xl text-muted-foreground">
              Рассчитайте стоимость контент-продукции для вашего проекта
            </p>
          </div>

          <Card className="glass border-2 shadow-2xl animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl">Выберите объём контента</CardTitle>
              <CardDescription className="text-lg">Настройте параметры под ваши задачи</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Icon name="FileText" className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Статьи</p>
                      <p className="text-sm text-muted-foreground">{articlePrice} ₽ за штуку</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">{articles[0]} шт.</Badge>
                </div>
                <Slider
                  value={articles}
                  onValueChange={setArticles}
                  max={50}
                  min={1}
                  step={1}
                  className="py-4"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                      <Icon name="Share2" className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Посты для соцсетей</p>
                      <p className="text-sm text-muted-foreground">{socialPostPrice} ₽ за пост</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">{socialPosts[0]} шт.</Badge>
                </div>
                <Slider
                  value={socialPosts}
                  onValueChange={setSocialPosts}
                  max={100}
                  min={1}
                  step={1}
                  className="py-4"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center">
                      <Icon name="Video" className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Видеоролики</p>
                      <p className="text-sm text-muted-foreground">{videoPrice} ₽ за видео</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">{videos[0]} шт.</Badge>
                </div>
                <Slider
                  value={videos}
                  onValueChange={setVideos}
                  max={10}
                  min={0}
                  step={1}
                  className="py-4"
                />
              </div>

              <div className="pt-6 border-t-2">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Итоговая стоимость</p>
                    <p className="text-5xl font-bold gradient-text">{totalPrice.toLocaleString()} ₽</p>
                    <p className="text-sm text-muted-foreground mt-1">в месяц</p>
                  </div>
                  <Button size="lg" className="gradient-primary text-white hover:opacity-90 text-lg px-8 py-6 hover-scale">
                    <Icon name="Send" className="mr-2" size={20} />
                    Получить предложение
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-fade-in">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name={benefit.icon} className="text-white" size={36} />
                </div>
                <p className="text-xl font-semibold">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-secondary py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Готовы начать?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 text-lg px-12 py-7 hover-scale shadow-2xl">
            <Icon name="MessageCircle" className="mr-2" size={24} />
            Связаться с нами
          </Button>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2024 Контент-Завод. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
