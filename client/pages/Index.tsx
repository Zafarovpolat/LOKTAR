import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Info, Sun, Moon, ChevronDown } from "lucide-react";

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [budgetRange, setBudgetRange] = useState([50000, 1500000]);
  const [nicheBudgetRange, setNicheBudgetRange] = useState([0, 1500000]);
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  const [selectedNiche, setSelectedNiche] = useState("");

  const periodOptions = [
    { value: "week", label: "За прошлую неделю", selected: true },
    { value: "month", label: "За месяц", selected: false },
    { value: "3months", label: "Средмесячный бюджет за 3 месяца", selected: false },
  ];

  const rankingData = [
    {
      id: 1,
      name: "Анонимный Таргетолог",
      amount: "1,5 млн ₽",
      leads: "54 321",
      niche: "Онлайн-образование: Деньги",
      score: 85,
      rank: "1 место",
      color: "purple",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/c3efa9275e21bd7572e001b1d0a9d9facfa3359d?width=173"
    },
    {
      id: 2,
      name: "Анонимный Таргетолог",
      amount: "999 тыс. ₽",
      leads: "54 321",
      niche: "Не определена",
      score: 85,
      rank: "2 место",
      color: "teal",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/c3efa9275e21bd7572e001b1d0a9d9facfa3359d?width=173"
    },
    {
      id: 3,
      name: "Анонимный Таргетолог",
      amount: "999 тыс. ₽",
      leads: "54 321",
      niche: "Не определена",
      score: 85,
      rank: "3 место",
      color: "teal",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/c3efa9275e21bd7572e001b1d0a9d9facfa3359d?width=173"
    },
    {
      id: 4,
      name: "Анонимный Таргетолог",
      amount: "80 тыс. ₽",
      leads: "54 321",
      niche: "Не определена",
      score: 85,
      rank: "4 место",
      color: "default"
    },
    {
      id: 5,
      name: "Анонимный Таргетолог",
      amount: "80 тыс. ₽",
      leads: "54 321",
      niche: "Не определена",
      score: 85,
      rank: "5 место",
      color: "default"
    },
    {
      id: 6,
      name: "Анонимный Таргетолог",
      amount: "80 тыс. ₽",
      leads: "54 321",
      niche: "Не определена",
      score: 85,
      rank: "6 место",
      color: "default"
    },
    {
      id: 7,
      name: "Анонимный Таргетолог",
      amount: "80 тыс. ₽",
      leads: "54 321",
      niche: "Не определена",
      score: 85,
      rank: "7 место",
      color: "default"
    },
    {
      id: 8,
      name: "Анон��мный Таргетолог",
      amount: "80 тыс. ₽",
      leads: "54 321",
      niche: "Не определена",
      score: 85,
      rank: "8 место",
      color: "default"
    },
    {
      id: 9,
      name: "Анонимный Таргетолог",
      amount: "80 тыс. ₽",
      leads: "54 321",
      niche: "Не определена",
      score: 85,
      rank: "9 место",
      color: "default"
    },
    {
      id: 10,
      name: "Анонимный Таргетолог",
      amount: "80 тыс. ₽",
      leads: "54 321",
      niche: "Не определена",
      score: 85,
      rank: "10 место",
      color: "default"
    }
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const formatBudget = (value: number) => {
    if (value >= 1000000) {
      return `${Math.floor(value / 1000000)} 500 000`;
    }
    return value.toLocaleString();
  };

  return (
    <div className={cn("min-h-screen", isDarkMode ? "dark" : "")}>
      <div className="bg-background text-foreground min-h-screen relative overflow-x-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[272px] opacity-15">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-background"></div>
          </div>
        </div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-6 lg:px-16 py-6">
          <div className="flex items-center gap-3">
            <div className="w-[78px] h-[79px] rounded-lg flex items-center justify-center relative overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b2e92087c71437861f4b1c1823f4ca760eae7cd0?width=156"
                alt="VK Rating Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
          >
            <span className="font-inter">Сменить тему</span>
            <div className="w-5 h-5 text-white/70">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.55469 1.25L7.30648 2.5H5.02602C3.05703 2.5 2.72875 2.5168 2.62273 2.62273C2.5168 2.72875 2.5 3.05664 2.5 5.02211V7.29875L1.25 8.55703C0.343125 9.47 0 9.86609 0 10C0 10.1339 0.343125 10.53 1.25 11.443L2.5 12.7013V14.9713C2.5 17.0713 2.5107 17.2511 2.64289 17.3707C2.76891 17.4848 3.05219 17.5 5.04227 17.5H7.29875L8.55703 18.75C9.47 19.6569 9.86609 20 10 20C10.1339 20 10.53 19.6569 11.443 18.75L12.7013 17.5H14.9713C17.0713 17.5 17.2511 17.4893 17.3707 17.3571C17.4848 17.2311 17.5 16.9478 17.5 14.9577V12.7013L18.75 11.443C19.6569 10.53 20 10.1339 20 10C20 9.86609 19.6569 9.47 18.75 8.55703L17.5 7.29875V5.02211C17.5 3.05664 17.4832 2.72875 17.3773 2.62273C17.2712 2.5168 16.9434 2.5 14.9779 2.5H12.7013L11.443 1.25C10.5066 0.319844 10.1358 0 9.99375 0C9.85125 0 9.48625 0.317109 8.55469 1.25ZM9.81867 4.2557L9.64844 4.34055L9.62836 9.97281C9.6107 14.9538 9.62219 15.6165 9.72813 15.7044C9.89914 15.8463 10.7362 15.8063 11.4579 15.6218C14.0364 14.9623 15.7878 12.6884 15.7878 10C15.7878 7.455 14.2462 5.2975 11.8548 4.49578C11.1387 4.2557 10.0712 4.12977 9.81867 4.2557Z" fill="url(#paint0_linear_theme_toggle)"/>
                <defs>
                  <linearGradient id="paint0_linear_theme_toggle" x1="0" y1="-9.28571" x2="10.8687" y2="30.0467" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#2F2E37"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </button>
        </header>

        {/* Main Title */}
        <div className="text-center mb-12 px-6">
          <h1 className="font-exo text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-tight max-w-4xl mx-auto">
            Рейтинг по открученному бюджету во ВКонтакте
          </h1>
        </div>

        {/* Info Link */}
        <div className="flex justify-end px-6 lg:px-16 mb-8">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <span>Как рассчитывается рейтинг</span>
            <Info className="w-4 h-4" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 px-6 lg:px-16 mb-16">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-[400px] xl:w-[451px] flex-shrink-0">
            <Card className="bg-vk-dark-card border-white/10 relative overflow-hidden">
              {/* Blur Background Effects */}
              <div className="absolute -left-40 -top-20 w-96 h-48 bg-purple-600/20 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute left-0 top-10 w-48 h-32 bg-vk-teal/80 rounded-full blur-3xl opacity-80"></div>
              
              <CardContent className="p-8 relative z-10">
                <h2 className="font-exo text-2xl font-medium text-white mb-6">Фильтры</h2>
                
                <div className="space-y-6">
                  {/* Budget Filter */}
                  <div className="bg-vk-dark-card border border-vk-border rounded-xl p-5">
                    <h3 className="font-inter text-lg font-semibold text-white mb-6">Бюджет общий</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>5000 ₽</span>
                        <span>1 500 000 ₽</span>
                      </div>
                      
                      <div className="relative">
                        <Slider
                          value={budgetRange}
                          onValueChange={setBudgetRange}
                          max={1500000}
                          min={5000}
                          step={1000}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex-1 border border-vk-border rounded-lg px-4 py-3 bg-background/5">
                          <div className="flex items-center gap-3 text-white">
                            <span className="font-semibold">₽</span>
                            <span>{formatBudget(budgetRange[0])}</span>
                          </div>
                        </div>
                        <span className="text-white font-semibold">-</span>
                        <div className="flex-1 border border-vk-border rounded-lg px-4 py-3 bg-background/5">
                          <div className="flex items-center gap-3 text-white">
                            <span className="font-semibold">₽</span>
                            <span>{formatBudget(budgetRange[1])}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Period Filter */}
                  <div className="bg-vk-dark-card border border-vk-border rounded-xl p-5">
                    <h3 className="font-inter text-lg font-semibold text-white mb-6">Перио��</h3>
                    
                    <div className="space-y-3">
                      {periodOptions.map((option) => (
                        <div key={option.value} className="flex items-center justify-between">
                          <span className="text-white font-inter">{option.label}</span>
                          <div 
                            className={cn(
                              "w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer",
                              selectedPeriod === option.value
                                ? "bg-vk-teal border-vk-teal"
                                : "border-vk-border"
                            )}
                            onClick={() => setSelectedPeriod(option.value)}
                          >
                            {selectedPeriod === option.value && (
                              <div className="w-3 h-3 bg-background rounded-full flex items-center justify-center">
                                <svg className="w-2 h-2 text-background" viewBox="0 0 12 9" fill="currentColor">
                                  <path d="M11.7 1.4L4.5 8.2L0.3 4.2L1.7 2.8L4.5 5.4L10.3 0L11.7 1.4Z"/>
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Niche Filter */}
                  <div className="bg-vk-dark-card border border-vk-border rounded-xl p-5">
                    <div className="space-y-4">
                      <h3 className="font-inter text-lg font-semibold text-white">Ниша</h3>
                      
                      <Select value={selectedNiche} onValueChange={setSelectedNiche}>
                        <SelectTrigger className="bg-background/5 border-vk-border text-white/50">
                          <SelectValue placeholder="Выберите нишу" />
                        </SelectTrigger>
                        <SelectContent className="bg-vk-dark-card border-vk-border">
                          <SelectItem value="education">Образование</SelectItem>
                          <SelectItem value="finance">Финансы</SelectItem>
                          <SelectItem value="health">Здоровье</SelectItem>
                          <SelectItem value="business">Бизнес</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="h-px bg-white/10 my-6"></div>
                    
                    <div className="space-y-4">
                      <h3 className="font-inter text-lg font-semibold text-white">Бюджет в нише</h3>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>5000 ₽</span>
                          <span>1 500 000 ₽</span>
                        </div>
                        
                        <div className="relative">
                          <Slider
                            value={nicheBudgetRange}
                            onValueChange={setNicheBudgetRange}
                            max={1500000}
                            min={0}
                            step={1000}
                            className="w-full"
                          />
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex-1 border border-vk-border rounded-lg px-4 py-3 bg-background/5">
                            <div className="flex items-center gap-3 text-white/20">
                              <span className="font-semibold">₽</span>
                              <span>0</span>
                            </div>
                          </div>
                          <span className="text-white font-semibold">-</span>
                          <div className="flex-1 border border-vk-border rounded-lg px-4 py-3 bg-background/5">
                            <div className="flex items-center gap-3 text-white/20">
                              <span className="font-semibold">₽</span>
                              <span>1 500 000</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-3 mt-8">
                  <Button variant="outline" className="flex-1 border-vk-teal text-vk-teal hover:bg-vk-teal hover:text-background">
                    Очистить
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-vk-teal to-emerald-500 text-background hover:from-vk-teal/90 hover:to-emerald-500/90">
                    Показать (21)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Tabs */}
            <Tabs defaultValue="targetologists" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-transparent gap-2">
                <TabsTrigger 
                  value="targetologists" 
                  className="border border-vk-teal bg-vk-teal/10 text-vk-teal data-[state=active]:bg-vk-teal/20 data-[state=active]:text-vk-teal"
                >
                  Таргетологи
                </TabsTrigger>
                <TabsTrigger 
                  value="agencies" 
                  className="border border-white/20 text-white/40 data-[state=active]:border-white/60 data-[state=active]:text-white/80"
                >
                  Агентства
                </TabsTrigger>
              </TabsList>

              <TabsContent value="targetologists" className="space-y-4">
                {rankingData.map((item, index) => (
                  <Card 
                    key={item.id} 
                    className={cn(
                      "relative overflow-hidden",
                      item.color === "purple" 
                        ? "border-vk-purple bg-gradient-to-r from-purple-600/0 to-purple-600/50" 
                        : item.color === "teal" 
                        ? "border-vk-teal bg-gradient-to-r from-vk-teal/0 to-vk-teal/50"
                        : "bg-vk-dark-card border-vk-border"
                    )}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          {/* Avatar */}
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-vk-darker-card flex-shrink-0 relative">
                            {item.avatar ? (
                              <img 
                                src={item.avatar} 
                                alt="Avatar" 
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-vk-darker-card flex items-center justify-center">
                                <div className="w-8 h-8 bg-blue-900 rounded"></div>
                              </div>
                            )}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-inter text-lg text-white truncate">{item.name}</h3>
                            <p className="font-exo text-3xl font-medium text-white">{item.amount}</p>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-sm text-white/34">Кол-во лидов:</p>
                            <p className="font-inter text-white">{item.leads}</p>
                          </div>
                          
                          <div className="w-px h-12 bg-white/10"></div>
                          
                          <div className="flex items-center gap-3">
                            {/* Circular Progress */}
                            <div className="relative w-12 h-12">
                              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
                                <circle
                                  cx="24"
                                  cy="24"
                                  r="21"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  fill="none"
                                  className={cn(
                                    item.color === "purple" ? "text-purple-800" :
                                    item.color === "teal" ? "text-teal-800" :
                                    "text-vk-darker-card"
                                  )}
                                />
                                <circle
                                  cx="24"
                                  cy="24"
                                  r="21"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  fill="none"
                                  strokeDasharray={`${2 * Math.PI * 21}`}
                                  strokeDashoffset={`${2 * Math.PI * 21 * (1 - item.score / 100)}`}
                                  className={cn(
                                    item.color === "purple" ? "text-vk-purple" :
                                    item.color === "teal" ? "text-vk-teal" :
                                    "text-vk-teal"
                                  )}
                                />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className={cn(
                                  "text-sm font-bold",
                                  item.color === "purple" ? "text-vk-purple" :
                                  item.color === "teal" ? "text-vk-teal" :
                                  "text-vk-teal"
                                )}>
                                  {item.score}
                                </span>
                              </div>
                            </div>
                            
                            <div>
                              <p className="text-sm text-white/34">Топ-ниша:</p>
                              <p className="font-inter text-white text-sm">{item.niche}</p>
                            </div>
                          </div>
                        </div>

                        {/* Rank Badge */}
                        <Badge 
                          className={cn(
                            "absolute -top-2 -right-3 px-3 py-1",
                            item.color === "purple" ? "bg-vk-purple text-purple-100" :
                            item.color === "teal" ? "bg-vk-teal text-teal-100" :
                            "bg-vk-darker-card text-white/70"
                          )}
                        >
                          {item.rank}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="agencies">
                <div className="text-center py-12 text-muted-foreground">
                  <p>Данные агентств будут добавлены позже</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Registration Section */}
        <div className="relative mt-16">
          <Card className="bg-vk-popover border-white/10 rounded-t-3xl border-b-0 mx-0 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute -left-40 -top-20 w-96 h-48 bg-purple-600/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute right-60 top-20 w-48 h-32 bg-vk-teal/80 rounded-full blur-3xl opacity-80"></div>
            
            <CardContent className="px-6 lg:px-16 py-12 text-center relative z-10">
              <div className="max-w-2xl mx-auto space-y-7">
                <div>
                  <h2 className="font-exo text-3xl lg:text-4xl font-medium text-white mb-2">
                    Зар��гистрируйтесь
                  </h2>
                  <p className="font-exo text-white/70">
                    чтобы получить доступ к контактам таргетологов и агентств
                  </p>
                </div>
                
                <Button className="bg-gradient-to-r from-vk-teal to-emerald-500 text-background hover:from-vk-teal/90 hover:to-emerald-500/90 px-8 py-3">
                  Зарегистрироваться
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
