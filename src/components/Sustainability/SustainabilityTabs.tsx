import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Leaf, Users, TrendingUp, Target, BarChart3 } from "lucide-react";
import PolicySection from "./PolicySection";
import DetailedEnvironmentalSection from "./DetailedEnvironmentalSection";
import DetailedSocialSection from "./DetailedSocialSection";
import DetailedEconomicSection from "./DetailedEconomicSection";
import PerformanceReporting from "./PerformanceReporting";
import FutureGoals from "./FutureGoals";
import CollaborationSection from "./CollaborationSection";

const SustainabilityTabs = () => {
    
    return (
        <section id="sustainability-tabs">
            <div className="section-content">
                <Tabs defaultValue="overview" className="w-full">
                    <div className="flex justify-center mb-8">
                        <div className="w-full max-w-5xl">
                            {/* Mobile: 2 rows of 3 tabs */}
                            <div className="lg:hidden space-y-2">
                                <TabsList className="grid grid-cols-3 w-full">
                                    <TabsTrigger value="overview" className="flex items-center gap-1 px-2 py-2">
                                        <Leaf className="w-4 h-4" />
                                        <span className="text-xs break-keep">Genel</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="environmental" className="flex items-center gap-1 px-2 py-2">
                                        <Leaf className="w-4 h-4" />
                                        <span className="text-xs break-keep">Çevre</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="social" className="flex items-center gap-1 px-2 py-2">
                                        <Users className="w-4 h-4" />
                                        <span className="text-xs break-keep">Sosyal</span>
                                    </TabsTrigger>
                                </TabsList>
                                <TabsList className="grid grid-cols-3 w-full">
                                    <TabsTrigger value="economic" className="flex items-center gap-1 px-2 py-2">
                                        <TrendingUp className="w-4 h-4" />
                                        <span className="text-xs break-keep">Ekonomik</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="future" className="flex items-center gap-1 px-2 py-2">
                                        <Target className="w-4 h-4" />
                                        <span className="text-xs break-keep">Hedefler</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="reporting" className="flex items-center gap-1 px-2 py-2">
                                        <BarChart3 className="w-4 h-4" />
                                        <span className="text-xs break-keep">Rapor</span>
                                    </TabsTrigger>
                                </TabsList>
                            </div>
                            
                            {/* Desktop: Single row */}
                            <TabsList className="hidden lg:grid lg:grid-cols-6 w-full">
                                <TabsTrigger value="overview" className="flex items-center gap-2 px-3 py-2">
                                    <Leaf className="w-4 h-4" />
                                    <span className="break-keep">Genel Bakış</span>
                                </TabsTrigger>
                                <TabsTrigger value="environmental" className="flex items-center gap-2 px-3 py-2">
                                    <Leaf className="w-4 h-4" />
                                    <span className="break-keep">Çevresel</span>
                                </TabsTrigger>
                                <TabsTrigger value="social" className="flex items-center gap-2 px-3 py-2">
                                    <Users className="w-4 h-4" />
                                    <span className="break-keep">Sosyal</span>
                                </TabsTrigger>
                                <TabsTrigger value="economic" className="flex items-center gap-2 px-3 py-2">
                                    <TrendingUp className="w-4 h-4" />
                                    <span className="break-keep">Ekonomik</span>
                                </TabsTrigger>
                                <TabsTrigger value="future" className="flex items-center gap-2 px-3 py-2">
                                    <Target className="w-4 h-4" />
                                    <span className="break-keep">Hedefler</span>
                                </TabsTrigger>
                                <TabsTrigger value="reporting" className="flex items-center gap-2 px-3 py-2">
                                    <BarChart3 className="w-4 h-4" />
                                    <span className="break-keep">Raporlama</span>
                                </TabsTrigger>
                            </TabsList>
                        </div>
                    </div>

                    <TabsContent value="overview">
                        <PolicySection />
                    </TabsContent>

                    <TabsContent value="environmental">
                        <DetailedEnvironmentalSection />
                    </TabsContent>

                    <TabsContent value="social">
                        <DetailedSocialSection />
                    </TabsContent>

                    <TabsContent value="economic">
                        <DetailedEconomicSection />
                    </TabsContent>

                    <TabsContent value="future">
                        <FutureGoals />
                    </TabsContent>

                    <TabsContent value="reporting">
                        <PerformanceReporting />
                        <div className="mt-8">
                            <CollaborationSection />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default SustainabilityTabs;
