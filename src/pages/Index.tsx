import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍦</span>
            <div>
              <h1 className="text-2xl font-bold">Awesol</h1>
              <p className="text-sm text-gray-600">Token Creator & Booster</p>
            </div>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 transition-colors px-6 py-3">
            <Icon name="Wallet" className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <span className="text-8xl mb-6 block animate-fade-in">🍦</span>
            <h1 className="text-6xl font-bold mb-6 tracking-tight">
              Awesol
            </h1>
            <p className="text-2xl font-medium mb-2">Token Creator & Booster</p>
            <p className="text-lg text-gray-600 mb-8">Create and boost tokens on Solana blockchain with advanced tools</p>
          </div>
          
          <div className="flex justify-center gap-4 mb-16">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg">
              <Icon name="Wallet" className="mr-3 h-5 w-5" />
              Connect Wallet
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2">
              <Icon name="Play" className="mr-3 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center">
                  <Icon name="Coins" className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Create Tokens</CardTitle>
                <CardDescription>Launch custom tokens on Solana in minutes</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center">
                  <Icon name="TrendingUp" className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Boost Performance</CardTitle>
                <CardDescription>Advanced pump/dump strategies for market control</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center">
                  <Icon name="BarChart3" className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Real-time Analytics</CardTitle>
                <CardDescription>Track performance with detailed metrics</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Starter Pack */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Free Starter Pack</h2>
          <p className="text-xl text-gray-600 mb-12">Get started with everything you need - completely free</p>
          
          <Card className="max-w-2xl mx-auto border-4 border-black shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                <Icon name="Gift" className="h-6 w-6" />
                Free Starter Pack
              </CardTitle>
              <CardDescription className="text-lg">No upfront costs, start creating immediately</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Users" className="h-5 w-5" />
                    <span className="font-medium">Wallets</span>
                  </div>
                  <Badge variant="secondary" className="bg-black text-white text-lg px-3 py-1">50 FREE</Badge>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="TrendingUp" className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Pump Boosts</span>
                  </div>
                  <Badge variant="secondary" className="bg-black text-white text-lg px-3 py-1">50 FREE</Badge>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="TrendingDown" className="h-5 w-5 text-red-600" />
                    <span className="font-medium">Dump Boosts</span>
                  </div>
                  <Badge variant="secondary" className="bg-black text-white text-lg px-3 py-1">50 FREE</Badge>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Zap" className="h-5 w-5" />
                    <span className="font-medium">Token Creation</span>
                  </div>
                  <Badge variant="secondary" className="bg-black text-white text-lg px-3 py-1">1 FREE</Badge>
                </div>
              </div>
              
              <div className="pt-4">
                <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800 py-4 text-lg">
                  <Icon name="Wallet" className="mr-3 h-5 w-5" />
                  Connect Wallet to Claim
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Beta Control Panel */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-4xl font-bold">Beta Control Panel</h2>
              <Badge variant="outline" className="bg-black text-white border-black">BETA</Badge>
            </div>
            <p className="text-xl text-gray-600">Advanced tools for professional token management</p>
          </div>
          
          <Tabs defaultValue="boost" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-12">
              <TabsTrigger value="boost" className="text-lg py-3">Boost Tools</TabsTrigger>
              <TabsTrigger value="analytics" className="text-lg py-3">Analytics</TabsTrigger>
              <TabsTrigger value="wallets" className="text-lg py-3">Wallet Manager</TabsTrigger>
            </TabsList>
            
            <TabsContent value="boost" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Icon name="TrendingUp" className="h-6 w-6 text-green-600" />
                      Pump Boost System
                    </CardTitle>
                    <CardDescription className="text-base">Increase token demand and drive price upward</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Available Boosts</span>
                      <Badge className="text-lg px-3 py-1">47/50</Badge>
                    </div>
                    <Progress value={94} className="w-full h-3" />
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Success Rate: 89%</span>
                        <span>Avg Increase: +23%</span>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700 py-3 text-lg">
                        <Icon name="Rocket" className="mr-2 h-5 w-5" />
                        Execute Pump
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Icon name="TrendingDown" className="h-6 w-6 text-red-600" />
                      Dump Strategy Manager
                    </CardTitle>
                    <CardDescription className="text-base">Strategic selling for optimal profit taking</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Available Dumps</span>
                      <Badge className="text-lg px-3 py-1">43/50</Badge>
                    </div>
                    <Progress value={86} className="w-full h-3" />
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Success Rate: 94%</span>
                        <span>Avg ROI: +31%</span>
                      </div>
                      <Button className="w-full bg-red-600 hover:bg-red-700 py-3 text-lg">
                        <Icon name="Target" className="mr-2 h-5 w-5" />
                        Execute Dump
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <Button variant="outline" className="py-3">
                      <Icon name="Zap" className="mr-2 h-4 w-4" />
                      Auto Boost
                    </Button>
                    <Button variant="outline" className="py-3">
                      <Icon name="Shield" className="mr-2 h-4 w-4" />
                      Stop Loss
                    </Button>
                    <Button variant="outline" className="py-3">
                      <Icon name="Clock" className="mr-2 h-4 w-4" />
                      Schedule
                    </Button>
                    <Button variant="outline" className="py-3">
                      <Icon name="Settings" className="mr-2 h-4 w-4" />
                      Advanced
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-medium">Total Volume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">$2,847,592</div>
                    <div className="flex items-center gap-2">
                      <Icon name="TrendingUp" className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-600 font-medium">+18.2% from last week</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-medium">Active Tokens</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">7</div>
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">5 performing above target</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-medium">Success Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">91.3%</div>
                    <div className="flex items-center gap-2">
                      <Icon name="Award" className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm text-gray-600">Top 5% performer</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">MYSOL Token</p>
                          <p className="text-sm text-gray-600">Last boost: 2h ago</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">+47%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">ROCKET Token</p>
                          <p className="text-sm text-gray-600">Last boost: 4h ago</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">+23%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">MOON Token</p>
                          <p className="text-sm text-gray-600">Last boost: 1d ago</p>
                        </div>
                        <Badge className="bg-red-100 text-red-800">-12%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Total Boosts Executed</span>
                        <span className="font-bold">127</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Successful Operations</span>
                        <span className="font-bold text-green-600">116</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average ROI</span>
                        <span className="font-bold">+28.4%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Best Performance</span>
                        <span className="font-bold text-green-600">+89%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="wallets" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Connected Wallets</CardTitle>
                  <CardDescription className="text-base">Manage your wallet addresses and connections</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border-2 border-black rounded-lg bg-gray-50">
                      <div>
                        <p className="font-bold text-lg">Primary Wallet</p>
                        <p className="text-gray-600 font-mono">9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM</p>
                        <p className="text-sm text-green-600 font-medium">✓ Connected & Active</p>
                      </div>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">Primary</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Secondary Wallet #1</p>
                        <p className="text-gray-600 font-mono">7xKQm2VreqP8Au4G3tN9mP2kLxZ8J5tRnWqYx9uB3sT4</p>
                        <p className="text-sm text-gray-500">Idle</p>
                      </div>
                      <Badge variant="outline">Connected</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Secondary Wallet #2</p>
                        <p className="text-gray-600 font-mono">4mT9LpJ8FnQ2vR7YsK3xE6uN8wP5gA2hC9sZ1bX4fR7M</p>
                        <p className="text-sm text-gray-500">Idle</p>
                      </div>
                      <Badge variant="outline">Connected</Badge>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-medium">Available Wallet Slots</span>
                      <Badge className="text-lg px-3 py-1">47/50</Badge>
                    </div>
                    <Progress value={94} className="mb-4 h-3" />
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button variant="outline" className="py-3 text-base">
                        <Icon name="Plus" className="mr-2 h-5 w-5" />
                        Add New Wallet
                      </Button>
                      <Button variant="outline" className="py-3 text-base">
                        <Icon name="RefreshCw" className="mr-2 h-5 w-5" />
                        Sync All Wallets
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-3xl">🍦</span>
            <div>
              <h3 className="text-2xl font-bold">Awesol</h3>
              <p className="text-gray-600">Token Creator & Booster</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8">The future of token creation and management on Solana</p>
          <div className="flex justify-center gap-8 text-gray-500 mb-6">
            <a href="#" className="hover:text-black transition-colors text-lg">Terms</a>
            <a href="#" className="hover:text-black transition-colors text-lg">Privacy</a>
            <a href="#" className="hover:text-black transition-colors text-lg">Support</a>
            <a href="#" className="hover:text-black transition-colors text-lg">Documentation</a>
          </div>
          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">© 2024 Awesol. Built on Solana blockchain.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;