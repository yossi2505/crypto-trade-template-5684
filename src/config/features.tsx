import { BarChart3, ShieldCheck, Wallet, ArrowUpDown, Sparkles, MessageSquare, Calendar } from "lucide-react";

export const features = [
	{
		title: "AI Content Generation",
		description: "Create high-quality content at scale",
		icon: <Sparkles className="w-6 h-6" />,
	},
	{
		title: "Brand Voice Training",
		description: "Maintain consistent brand messaging",
		icon: <MessageSquare className="w-6 h-6" />,
	},
	{
		title: "Smart Scheduling",
		description: "Automate your content calendar",
		icon: <Calendar className="w-6 h-6" />,
	},
	{
		title: "Advanced Trading Interface",
		description:
			"Professional-grade trading tools with real-time market data and advanced charting capabilities.",
		icon: <BarChart3 className="w-6 h-6" />,
		image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
	},
	{
		title: "Portfolio Management",
		description:
			"Track your investments and monitor your gains with our comprehensive portfolio dashboard.",
		icon: <Wallet className="w-6 h-6" />,
		image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
	},
	{
		title: "Security & Verification",
		description:
			"Industry-leading security measures with KYC verification process to protect your assets.",
		icon: <ShieldCheck className="w-6 h-6" />,
		image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
	},
	{
		title: "Performance Analytics",
		description:
			"Detailed analytics and credit scoring system to help you make informed decisions.",
		icon: <ArrowUpDown className="w-6 h-6" />,
		image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png",
	},
	// ...add more features as needed
];