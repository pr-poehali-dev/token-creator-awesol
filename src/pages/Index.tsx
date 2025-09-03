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
            <span className="text-2xl">🍦</span>
            <h1 className="text-2xl font-bold">Awesol</h1>
            <Badge variant="secondary" className="ml-2">BETA</Badge>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 transition-colors">
            <Icon name="Wallet" className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-6xl mb-4 block">🍦</span>
            <h1 className="text-5xl font-bold mb-4 tracking-tight">
              Awesol
            </h1>
            <p className="text-xl text-gray-600 mb-2">Token Creator & Booster</p>
            <p className="text-lg text-gray-500">Create and boost tokens on Solana blockchain</p>
          </div>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
              <Icon name="Wallet" className="mr-2 h-5 w-5" />
              Connect Wallet
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Free Starter Pack */}
          <Card className="max-w-md mx-auto mb-16 border-2 border-black">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Icon name="Gift" className="h-5 w-5" />
                Free Starter Pack
              </CardTitle>
              <CardDescription>Get started with no upfront costs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Icon name="Users" className="h-4 w-4" />
                  Wallets
                </span>
                <Badge variant="secondary">50 FREE</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="h-4 w-4" />
                  Pump Boosts
                </span>
                <Badge variant="secondary">50 FREE</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Icon name="TrendingDown" className="h-4 w-4" />
                  Dump Boosts
                </span>
                <Badge variant="secondary">50 FREE</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Icon name="Zap" className="h-4 w-4" />
                  Token Creation
                </span>
                <Badge variant="secondary">1 FREE</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Token Creation Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Create Your Token</h2>
            <p className="text-lg text-gray-600">Launch your token on Solana in minutes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  <Icon name="Coins" className="h-6 w-6" />
                </div>
                <CardTitle>Create Token</CardTitle>
                <CardDescription>Design your token with custom parameters</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  <Icon name="Rocket" className="h-6 w-6" />
                </div>
                <CardTitle>Launch & Boost</CardTitle>
                <CardDescription>Use pump/dump strategies to manage price</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  <Icon name="BarChart3" className="h-6 w-6" />
                </div>
                <CardTitle>Track Performance</CardTitle>
                <CardDescription>Monitor your token's market performance</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Beta Panel */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Beta Control Panel</h2>
            <p className="text-lg text-gray-600">Advanced tools for token management</p>
          </div>
          
          <Tabs defaultValue="boost" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="boost">Boost Tools</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="wallets">Wallets</TabsTrigger>
            </TabsList>
            
            <TabsContent value="boost" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingUp" className="h-5 w-5 text-green-600" />
                      Pump Boost
                    </CardTitle>
                    <CardDescription>Increase token demand and price</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Available Boosts</span>
                      <Badge>47/50</Badge>
                    </div>
                    <Progress value={94} className="w-full" />
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Execute Pump
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingDown" className="h-5 w-5 text-red-600" />
                      Dump Strategy
                    </CardTitle>
                    <CardDescription>Strategic selling for profit taking</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Available Dumps</span>
                      <Badge>43/50</Badge>
                    </div>
                    <Progress value={86} className="w-full" />
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Execute Dump
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$127,432</div>
                    <p className="text-xs text-green-600">+12.5% from last week</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Active Tokens</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-gray-600">2 performing well</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">78%</div>
                    <p className="text-xs text-green-600">Above average</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="wallets" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Wallet Management</CardTitle>
                  <CardDescription>Manage your connected wallets and addresses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Primary Wallet</p>
                        <p className="text-sm text-gray-600">7xKQ...9mP2</p>
                      </div>
                      <Badge variant="outline">Connected</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Available Wallet Slots</span>
                      <Badge>47/50</Badge>
                    </div>
                    <Progress value={94} />
                    <Button variant="outline" className="w-full">
                      <Icon name="Plus" className="mr-2 h-4 w-4" />
                      Add New Wallet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl">🍦</span>
            <h3 className="text-xl font-bold">Awesol</h3>
          </div>
          <p className="text-gray-600 mb-6">The future of token creation on Solana</p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Support</a>
            <a href="#" className="hover:text-black transition-colors">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;