import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeSection, setActiveSection] = useState('home')

  const products = [
    {
      id: 1,
      name: 'Минималистичная рубашка',
      price: '4 500 ₽',
      image: '/img/6e7dc6dc-13e0-4825-954f-e6b36fbffbce.jpg',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: 'Базовая футболка',
      price: '2 200 ₽',
      image: '/img/61a221ff-f340-4101-88e4-9f278f5387a6.jpg',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 3,
      name: 'Классические брюки',
      price: '6 800 ₽',
      image: '/img/39ac79f5-436b-4435-85c0-ba4a017d8836.jpg',
      sizes: ['S', 'M', 'L', 'XL']
    }
  ]

  const sizeChart = {
    'XS': { chest: '84-88', waist: '68-72', hips: '88-92' },
    'S': { chest: '88-92', waist: '72-76', hips: '92-96' },
    'M': { chest: '92-96', waist: '76-80', hips: '96-100' },
    'L': { chest: '96-100', waist: '80-84', hips: '100-104' },
    'XL': { chest: '100-104', waist: '84-88', hips: '104-108' },
    'XXL': { chest: '104-108', waist: '88-92', hips: '108-112' }
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-montserrat font-bold text-xl text-black">
              UNSEEN
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`font-open-sans text-sm transition-colors ${activeSection === 'home' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('catalog')}
                className={`font-open-sans text-sm transition-colors ${activeSection === 'catalog' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
              >
                Каталог
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`font-open-sans text-sm transition-colors ${activeSection === 'about' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
              >
                О бренде
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`font-open-sans text-sm transition-colors ${activeSection === 'contact' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
              >
                Контакты
              </button>
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-montserrat font-light text-4xl lg:text-6xl text-black leading-tight">
                  Невидимая
                  <br />
                  <span className="font-semibold">элегантность</span>
                </h1>
                <p className="font-open-sans text-lg text-gray-600 max-w-md">
                  UNSEEN — это философия минимализма в одежде. Каждая вещь создана для тех, кто ценит качество и утонченность.
                </p>
              </div>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="font-open-sans"
                  onClick={() => scrollToSection('catalog')}
                >
                  Смотреть коллекцию
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="font-open-sans"
                  onClick={() => scrollToSection('about')}
                >
                  О бренде
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src="/img/61a221ff-f340-4101-88e4-9f278f5387a6.jpg" 
                  alt="UNSEEN Fashion" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-semibold text-3xl lg:text-4xl text-black mb-4">
              Коллекция
            </h2>
            <p className="font-open-sans text-gray-600 max-w-2xl mx-auto">
              Каждая вещь в нашей коллекции — это результат тщательного отбора материалов и внимания к деталям
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="aspect-[3/4] bg-gray-100 overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-montserrat font-medium text-lg text-black">
                        {product.name}
                      </h3>
                      <p className="font-open-sans text-gray-600 mt-1">
                        {product.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="outline" className="font-open-sans">
                        {size}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full font-open-sans">
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Size Chart */}
          <div className="bg-white rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <Icon name="Ruler" size={24} className="text-black" />
              <h3 className="font-montserrat font-semibold text-xl text-black">
                Таблица размеров
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="font-montserrat font-medium text-left py-3 px-4">Размер</th>
                    <th className="font-montserrat font-medium text-left py-3 px-4">Грудь (см)</th>
                    <th className="font-montserrat font-medium text-left py-3 px-4">Талия (см)</th>
                    <th className="font-montserrat font-medium text-left py-3 px-4">Бедра (см)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(sizeChart).map(([size, measurements]) => (
                    <tr key={size} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="font-open-sans py-3 px-4 font-medium">{size}</td>
                      <td className="font-open-sans py-3 px-4">{measurements.chest}</td>
                      <td className="font-open-sans py-3 px-4">{measurements.waist}</td>
                      <td className="font-open-sans py-3 px-4">{measurements.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} className="text-gray-600 mt-0.5" />
                <div className="font-open-sans text-sm text-gray-600">
                  <p className="font-medium mb-2">Гид по посадке:</p>
                  <ul className="space-y-1">
                    <li>• Измеряйте по самым широким точкам</li>
                    <li>• Для точной посадки выбирайте размер по наибольшему измерению</li>
                    <li>• При сомнениях между размерами выбирайте больший</li>
                    <li>• Наши модели имеют свободный крой для комфорта</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-montserrat font-semibold text-3xl lg:text-4xl text-black">
                О бренде UNSEEN
              </h2>
              <div className="space-y-4 font-open-sans text-gray-600">
                <p>
                  UNSEEN — это больше чем бренд одежды. Это философия, основанная на принципах минимализма, качества и осознанного потребления.
                </p>
                <p>
                  Мы создаем вещи, которые не кричат о себе, но говорят о вкусе своего владельца. Каждая деталь продумана, каждый материал выбран с заботой о комфорте и долговечности.
                </p>
                <p>
                  Наша миссия — помочь людям выразить свою индивидуальность через одежду, которая подчеркивает, а не затмевает их личность.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="font-montserrat font-bold text-2xl text-black">100%</div>
                  <div className="font-open-sans text-sm text-gray-600">Натуральные материалы</div>
                </div>
                <div className="text-center">
                  <div className="font-montserrat font-bold text-2xl text-black">2019</div>
                  <div className="font-open-sans text-sm text-gray-600">Год основания</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src="/img/39ac79f5-436b-4435-85c0-ba4a017d8836.jpg" 
                  alt="UNSEEN Store" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-montserrat font-semibold text-3xl lg:text-4xl mb-4">
                  Контакты
                </h2>
                <p className="font-open-sans text-gray-300">
                  Свяжитесь с нами, чтобы узнать больше о коллекции или задать любые вопросы
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={20} className="text-gray-300" />
                  <div className="font-open-sans">
                    <div className="text-white">Москва, ул. Остоженка, 25</div>
                    <div className="text-gray-300 text-sm">Флагманский магазин</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={20} className="text-gray-300" />
                  <div className="font-open-sans">
                    <div className="text-white">+7 (495) 123-45-67</div>
                    <div className="text-gray-300 text-sm">Ежедневно с 10:00 до 22:00</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={20} className="text-gray-300" />
                  <div className="font-open-sans">
                    <div className="text-white">hello@unseen.ru</div>
                    <div className="text-gray-300 text-sm">Ответим в течение 24 часов</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Icon name="Instagram" size={20} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Facebook" size={20} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Twitter" size={20} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-8">
              <h3 className="font-montserrat font-medium text-xl mb-6">
                Написать нам
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-open-sans text-gray-300">Имя</Label>
                    <Input 
                      id="name" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-open-sans text-gray-300">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="font-open-sans text-gray-300">Сообщение</Label>
                  <Textarea 
                    id="message"
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Расскажите, чем можем помочь..."
                  />
                </div>
                <Button variant="secondary" className="w-full font-open-sans">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-montserrat font-bold text-xl mb-4">UNSEEN</div>
            <p className="font-open-sans text-gray-400 text-sm">
              © 2024 UNSEEN. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index