import React from "react";
import { Download } from "lucide-react";
import Icon from "./Icon";
import contactData from "../data/contact.json";
import aboutData from "../data/about.json";

const AVATAR_URL = `${import.meta.env.VITE_BASE_PATH || ""}/avatar.jpg`; // dynamic base path

type ContactItem = {
	icon: "github" | "Phone" | "Mail" | "linkedin";
	title: string;
	value: string;
	href?: string;
};

const resolveGithub = (value: string): string =>
	value.startsWith("http") ? value : `https://github.com/${value}`;

const resolveLinkedin = (value: string): string =>
	value.startsWith("http") ? value : `https://www.linkedin.com/in/${value}`;

// Helper function to "cast" contact.json entries, assuming icons are always correct in content
function mapContactItem(item: any): ContactItem {
	let icon: ContactItem["icon"];
	if (
		item.icon === "github" ||
		item.icon === "Phone" ||
		item.icon === "Mail" ||
		item.icon === "linkedin"
	) {
		icon = item.icon;
	} else {
		icon = "Mail";
	}
	return {
		icon,
		title: item.title,
		value: item.value,
		href: item.href,
	};
}

const Hero = () => {
	const [imgError, setImgError] = React.useState(false);

	// Check if contactInfo contains GitHub or LinkedIn, otherwise add defaults
	const contactInfo: ContactItem[] = [
		...(Array.isArray(contactData.contactInfo)
			? contactData.contactInfo.map(mapContactItem)
			: []),
		// If there's already a github, don't add
		...(Array.isArray(contactData.contactInfo) &&
		contactData.contactInfo.some((item) => item.icon === "github")
			? []
			: [
					{
						icon: "github" as const,
						title: "GitHub",
						value: "kssasarma",
						href: "https://github.com/kssasarma",
					},
			  ]),
		// Add default linkedin if not present
		...(Array.isArray(contactData.contactInfo) &&
		contactData.contactInfo.some((item) => item.icon === "linkedin")
			? []
			: [
					{
						icon: "linkedin" as const,
						title: "LinkedIn",
						value: "surya-kodamanchili",
						href: "https://www.linkedin.com/in/surya-kodamanchili/",
					},
			  ]),
	];

	// Find email contact info for the Get In Touch button
	const emailContact = contactData.contactInfo.find((contact) => contact.icon === "Mail");
	const emailHref =
		emailContact?.href || (emailContact?.value ? `mailto:${emailContact.value}` : "#contact");

	return (
		<section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<div className="mb-8">
						<div className="relative w-32 h-32 mx-auto mb-6">
							{!imgError ? (
								<img
									src={AVATAR_URL}
									alt="User Avatar"
									className="w-32 h-32 object-cover rounded-full border-4 border-blue-600 shadow-lg"
									onError={() => setImgError(true)}
								/>
							) : (
								<div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold select-none">
									{aboutData.name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</div>
							)}
						</div>
						<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
							{aboutData.name}
						</h1>
						<h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
							{aboutData.title}
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
							{aboutData.description}
						</p>
					</div>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
						{contactInfo.map((item, idx) => {
							// Flexible for Phone/Mail (use tel/mailto), GitHub/linkedin/link types
							let href = item.href;
							if (!href) {
								if (item.icon === "Phone") href = `tel:${item.value}`;
								else if (item.icon === "Mail") href = `mailto:${item.value}`;
								else if (item.icon === "github") href = resolveGithub(item.value);
								else if (item.icon === "linkedin")
									href = resolveLinkedin(item.value);
							}

							// For LinkedIn, ensure open in new tab no matter what
							const isExternal = item.icon === "github" || item.icon === "linkedin";
							return (
								<a
									key={item.icon + idx}
									href={href}
									className={`flex items-center gap-2 font-semibold transition underline ${
										item.icon === "github"
											? "text-gray-800 hover:text-black"
											: item.icon === "Phone"
											? "text-gray-600"
											: item.icon === "Mail"
											? "text-gray-600"
											: item.icon === "linkedin"
											? "text-blue-700 hover:text-blue-900"
											: ""
									}`}
									target={isExternal ? "_blank" : undefined}
									rel={isExternal ? "noopener noreferrer" : undefined}
									aria-label={item.title}
								>
									<Icon name={item.icon} />
									<span>
										{item.title === "GitHub" || item.title === "LinkedIn"
											? item.title
											: item.value}
									</span>
								</a>
							);
						})}
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href={`${import.meta.env.VITE_BASE_PATH || ""}/resume.pdf`}
							download
							className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 justify-center"
						>
							<Download size={20} />
							Download Resume
						</a>
						<a
							href={emailHref}
							className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold
             hover:bg-blue-600 hover:text-white transition-all duration-200"
						>
							Get In Touch
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
