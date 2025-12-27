import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Code, Rocket, Shield, TrendingUp, Zap, ExternalLink, Star, Clock, Award } from "lucide-react";
import { useState } from "react";

/**
 * 技术未来主义风格的Web3学习路径网站
 * 设计理念：深色背景 + 青紫色调 + 发光效果 + 流动布局
 */
export default function Home() {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  const learningPhases = [
    {
      id: 1,
      title: "区块链基础",
      duration: "2-4周",
      icon: BookOpen,
      color: "from-cyan-500 to-blue-600",
      description: "建立对区块链技术的基本认知，理解EVM工作机制",
      topics: ["区块链原理", "以太坊基础", "EVM机制", "Gas费用模型", "MetaMask实践"],
      resources: ["北京大学肖臻公开课", "以太坊官方文档", "登链社区"]
    },
    {
      id: 2,
      title: "Solidity智能合约",
      duration: "4-8周",
      icon: Code,
      color: "from-purple-500 to-pink-600",
      description: "掌握Solidity语言，编写安全的智能合约",
      topics: ["Solidity语法", "Remix IDE", "Foundry框架", "ERC-20标准", "ERC-721 NFT"],
      resources: ["CryptoZombies", "WTF Solidity", "Solidity by Example"]
    },
    {
      id: 3,
      title: "Web3后端开发",
      duration: "4-6周",
      icon: Zap,
      color: "from-blue-500 to-indigo-600",
      description: "构建DApp后端服务，实现链上链下交互",
      topics: ["viem.sh/ethers.js", "事件监听", "交易签名", "钱包集成", "API开发"],
      resources: ["Viem文档", "Ethers.js文档", "Alchemy SDK"]
    },
    {
      id: 4,
      title: "DeFi与安全",
      duration: "4-8周",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      description: "深入DeFi协议，掌握智能合约安全最佳实践",
      topics: ["Uniswap源码", "借贷协议", "安全漏洞", "Slither工具", "审计实践"],
      resources: ["Ethernaut", "Damn Vulnerable DeFi", "How to DeFi"]
    },
    {
      id: 5,
      title: "进阶与专业化",
      duration: "持续学习",
      icon: Rocket,
      color: "from-orange-500 to-red-600",
      description: "探索多链生态，掌握前沿技术",
      topics: ["Rust语言", "Solana生态", "Move语言", "Layer2技术", "跨链协议"],
      resources: ["Solana文档", "Substrate文档", "Sui/Aptos文档"]
    }
  ];

  const cppAdvantages = [
    {
      title: "底层理解优势",
      description: "内存管理和指针经验有助于理解EVM字节码和Gas优化",
      icon: "🔧"
    },
    {
      title: "性能优化能力",
      description: "可直接应用于智能合约Gas优化和区块链节点性能调优",
      icon: "⚡"
    },
    {
      title: "系统编程思维",
      description: "便于理解区块链共识机制、P2P网络和分布式系统",
      icon: "🌐"
    },
    {
      title: "快速学习Rust",
      description: "C++背景使学习Rust更轻松，进入Solana/Polkadot高薪生态",
      icon: "🦀"
    }
  ];

  const topResources = [
    {
      name: "Cyfrin Updraft",
      description: "从零到专家的完整课程，包含安全审计",
      url: "https://updraft.cyfrin.io",
      rating: 5,
      type: "在线课程",
      badge: "强烈推荐"
    },
    {
      name: "Alchemy University",
      description: "以太坊开发训练营，免费且有证书",
      url: "https://www.alchemy.com/university",
      rating: 5,
      type: "在线课程",
      badge: "免费"
    },
    {
      name: "登链社区",
      description: "中文区块链学习资源，社区活跃",
      url: "https://learnblockchain.cn",
      rating: 5,
      type: "中文社区",
      badge: "中文友好"
    },
    {
      name: "CryptoZombies",
      description: "游戏化学习Solidity，互动性强",
      url: "https://cryptozombies.io",
      rating: 5,
      type: "实战平台",
      badge: "游戏化"
    },
    {
      name: "Speed Run Ethereum",
      description: "7个Web3项目挑战，实战性强",
      url: "https://speedrunethereum.com",
      rating: 5,
      type: "实战平台",
      badge: "项目驱动"
    },
    {
      name: "Ethernaut",
      description: "智能合约安全挑战，学习常见漏洞",
      url: "https://ethernaut.openzeppelin.com",
      rating: 5,
      type: "安全训练",
      badge: "安全专项"
    }
  ];

  const careerPaths = [
    {
      title: "智能合约工程师",
      salary: "$80k-$150k+",
      skills: ["Solidity", "Foundry", "安全最佳实践"],
      demand: "高"
    },
    {
      title: "Web3后端工程师",
      salary: "$90k-$160k+",
      skills: ["Node.js/Go/Rust", "ethers.js", "数据库"],
      demand: "高"
    },
    {
      title: "区块链协议开发",
      salary: "$120k-$200k+",
      skills: ["Rust/Go/C++", "分布式系统", "密码学"],
      demand: "中高"
    },
    {
      title: "智能合约安全审计",
      salary: "$100k-$250k+",
      skills: ["Solidity", "安全工具", "漏洞模式"],
      demand: "极高"
    },
    {
      title: "DeFi协议开发",
      salary: "$120k-$300k+",
      skills: ["Solidity", "经济模型", "数学", "安全"],
      demand: "高"
    },
    {
      title: "全栈Web3开发",
      salary: "$100k-$180k+",
      skills: ["Solidity", "React", "Node.js", "ethers.js"],
      demand: "高"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        
        <div className="container relative py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* 标签 */}
            <div className="flex items-center justify-center gap-2">
              <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 px-4 py-1.5">
                <Zap className="w-3 h-3 mr-1" />
                C/C++工程师专属
              </Badge>
            </div>

            {/* 主标题 */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                从C++到Web3
              </span>
              <br />
              <span className="text-white">开启区块链开发之旅</span>
            </h1>

            {/* 副标题 */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              利用您的底层编程优势，平滑过渡到Web3后端与智能合约开发。
              <span className="text-cyan-400 font-semibold"> 3-6个月</span>即可入门，
              <span className="text-purple-400 font-semibold"> 6-12个月</span>成为专业开发者。
            </p>

            {/* CTA按钮 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/60 hover:scale-105"
                onClick={() => document.getElementById('learning-path')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Rocket className="w-5 h-5 mr-2" />
                开始学习
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-white font-semibold px-8 py-6 text-lg transition-all"
                onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                浏览资源
              </Button>
            </div>

            {/* 统计数据 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
              {[
                { label: "学习阶段", value: "5" },
                { label: "精选资源", value: "50+" },
                { label: "职业方向", value: "6" },
                { label: "平均薪资", value: "$120k+" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* C++工程师优势 */}
      <section className="py-20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-purple-500/50 text-purple-400 mb-4">
              <TrendingUp className="w-3 h-3 mr-1" />
              转型优势
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              您的<span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">C++背景</span>是巨大优势
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              底层编程经验让您在Web3开发中拥有独特的竞争力
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cppAdvantages.map((advantage, idx) => (
              <Card 
                key={idx} 
                className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="text-4xl mb-3">{advantage.icon}</div>
                  <CardTitle className="text-white text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 学习路径 */}
      <section id="learning-path" className="py-20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 mb-4">
              <Rocket className="w-3 h-3 mr-1" />
              学习路线
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              五阶段<span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">渐进式</span>学习路径
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              从区块链基础到前沿技术，系统化构建您的Web3技能树
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {learningPhases.map((phase, idx) => {
              const Icon = phase.icon;
              const isActive = activePhase === phase.id;
              
              return (
                <Card 
                  key={phase.id}
                  className={`bg-slate-900/50 border-slate-800 transition-all duration-300 cursor-pointer backdrop-blur-sm ${
                    isActive 
                      ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                      : 'hover:border-slate-700 hover:-translate-y-1'
                  }`}
                  onClick={() => setActivePhase(isActive ? null : phase.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${phase.color} shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                              阶段 {phase.id}
                            </Badge>
                            <Badge variant="outline" className="border-slate-700 text-slate-400">
                              <Clock className="w-3 h-3 mr-1" />
                              {phase.duration}
                            </Badge>
                          </div>
                          <CardTitle className="text-white text-2xl mb-2">{phase.title}</CardTitle>
                          <CardDescription className="text-slate-400 text-base">
                            {phase.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className={`text-slate-500 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </CardHeader>

                  {isActive && (
                    <CardContent className="pt-0 animate-in fade-in-50 slide-in-from-top-2 duration-300">
                      <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Code className="w-4 h-4 text-cyan-400" />
                            核心主题
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.topics.map((topic, i) => (
                              <Badge key={i} variant="secondary" className="bg-slate-800 text-slate-300">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-purple-400" />
                            推荐资源
                          </h4>
                          <ul className="space-y-2">
                            {phase.resources.map((resource, i) => (
                              <li key={i} className="text-slate-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                {resource}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 精选资源 */}
      <section id="resources" className="py-20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-blue-500/50 text-blue-400 mb-4">
              <Star className="w-3 h-3 mr-1" />
              精选资源
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">高质量</span>学习资源
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              精心筛选的免费学习资源，助您快速上手Web3开发
            </p>
          </div>

          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 bg-slate-900/50 border border-slate-800 p-1">
              <TabsTrigger value="all" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                全部
              </TabsTrigger>
              <TabsTrigger value="course" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                在线课程
              </TabsTrigger>
              <TabsTrigger value="practice" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                实战平台
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                安全训练
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topResources.map((resource, idx) => (
                  <Card 
                    key={idx}
                    className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 backdrop-blur-sm group"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                          {resource.type}
                        </Badge>
                        {resource.badge && (
                          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                            {resource.badge}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-white text-xl group-hover:text-cyan-400 transition-colors">
                        {resource.name}
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(resource.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                          onClick={() => window.open(resource.url, '_blank')}
                        >
                          访问
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="course" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topResources.filter(r => r.type === "在线课程" || r.type === "中文社区").map((resource, idx) => (
                  <Card 
                    key={idx}
                    className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 backdrop-blur-sm group"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                          {resource.type}
                        </Badge>
                        {resource.badge && (
                          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                            {resource.badge}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-white text-xl group-hover:text-cyan-400 transition-colors">
                        {resource.name}
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(resource.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                          onClick={() => window.open(resource.url, '_blank')}
                        >
                          访问
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="practice" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topResources.filter(r => r.type === "实战平台").map((resource, idx) => (
                  <Card 
                    key={idx}
                    className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 backdrop-blur-sm group"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                          {resource.type}
                        </Badge>
                        {resource.badge && (
                          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                            {resource.badge}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-white text-xl group-hover:text-cyan-400 transition-colors">
                        {resource.name}
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(resource.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                          onClick={() => window.open(resource.url, '_blank')}
                        >
                          访问
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="security" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topResources.filter(r => r.type === "安全训练").map((resource, idx) => (
                  <Card 
                    key={idx}
                    className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 backdrop-blur-sm group"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                          {resource.type}
                        </Badge>
                        {resource.badge && (
                          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                            {resource.badge}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-white text-xl group-hover:text-cyan-400 transition-colors">
                        {resource.name}
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(resource.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                          onClick={() => window.open(resource.url, '_blank')}
                        >
                          访问
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 职业发展 */}
      <section className="py-20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-green-500/50 text-green-400 mb-4">
              <Award className="w-3 h-3 mr-1" />
              职业发展
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">高薪</span>职业方向
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Web3行业薪资水平领先，多种职业路径供您选择
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {careerPaths.map((career, idx) => (
              <Card 
                key={idx}
                className="bg-slate-900/50 border-slate-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-1 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge 
                      variant="secondary" 
                      className={`${
                        career.demand === "极高" ? "bg-red-500/20 text-red-400" :
                        career.demand === "高" ? "bg-green-500/20 text-green-400" :
                        "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      需求: {career.demand}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{career.title}</CardTitle>
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {career.salary}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-slate-400 text-sm font-semibold">核心技能：</p>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-slate-700 text-slate-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container">
          <Card className="bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 border-cyan-500/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                准备好开始您的<span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Web3之旅</span>了吗？
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                利用您的C++优势，在3-6个月内掌握Web3开发核心技能，进入这个充满机遇的高薪领域
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/60 hover:scale-105"
                  onClick={() => document.getElementById('learning-path')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  查看学习路径
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-white font-semibold px-8 py-6 text-lg transition-all"
                  onClick={() => window.open('https://learnblockchain.cn', '_blank')}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  访问登链社区
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="container">
          <div className="text-center space-y-4">
            <p className="text-slate-400">
              由 <span className="text-cyan-400 font-semibold">Manus AI</span> 精心整理
            </p>
            <p className="text-slate-500 text-sm">
              本指南基于2025年最新的Web3开发趋势和学习资源编写
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
