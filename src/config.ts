import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Hachian",
	subtitle: "PCゲーム、Switch{2}ゲームのレビューや攻略情報を発信するブログ",
	lang: "ja", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 88, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "Youtube",
			url: "https://www.youtube.com/@%E3%83%8F%E3%83%81%E3%82%A2%E3%83%B3-y4x", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.avif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "ハチアン",
	bio: "記事にはAmazonアソシエイトによるリンクが含まれます。詳しくはAboutページをご覧ください。",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://x.com/_hachian",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/hachian/fuwari_blog",
		},
		{
			name: "YouTube",
			icon: "fa6-brands:youtube",
			url: "https://www.youtube.com/@%E3%83%8F%E3%83%81%E3%82%A2%E3%83%B3-y4x",
		}
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
