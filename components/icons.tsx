import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export const Icons = {
	nextJS: (props?: SVGProps<any>) => (
		<svg
			className={props?.className}
			width="180"
			height="180"
			viewBox="0 0 180 180"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_408_139"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="180"
				height="180"
			>
				<circle cx="90" cy="90" r="90" fill="black" />
			</mask>
			<g mask="url(#mask0_408_139)">
				<circle
					cx="90"
					cy="90"
					r="87"
					fill="black"
					stroke="white"
					strokeWidth="6"
				/>
				<path
					d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
					fill="url(#paint0_linear_408_139)"
				/>
				<rect
					x="115"
					y="54"
					width="12"
					height="72"
					fill="url(#paint1_linear_408_139)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_408_139"
					x1="109"
					y1="116.5"
					x2="144.5"
					y2="160.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_408_139"
					x1="121"
					y1="54"
					x2="120.799"
					y2="106.875"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	),
	neon: (props?: SVGProps<any>) => (
		<svg
			className={props?.className}
			viewBox="0 0 256 256"
			xmlns="http://www.w3.org/2000/svg"
			width="256"
			height="256"
			preserveAspectRatio="xMidYMid"
		>
			<defs>
				<linearGradient id="a" x1="100%" x2="12.069%" y1="100%" y2="0%">
					<stop offset="0%" stopColor="#62F755" />
					<stop offset="100%" stopColor="#8FF986" stopOpacity="0" />
				</linearGradient>
				<linearGradient id="b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
					<stop offset="0%" stopOpacity=".9" />
					<stop offset="100%" stopColor="#1A1A1A" stopOpacity="0" />
				</linearGradient>
			</defs>
			<path
				fill="#00E0D9"
				d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"
			/>
			<path
				fill="url(#a)"
				d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"
			/>
			<path
				fill="url(#b)"
				fillOpacity=".4"
				d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"
			/>
			<path
				fill="#63F655"
				d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"
			/>
		</svg>
	),
	vercel: (props?: SVGProps<any>) => (
		<svg
			className={props?.className}
			viewBox="0 0 256 222"
			width="256"
			height="222"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid"
		>
			<path className="fill-black dark:fill-white" d="m128 0 128 221.705H0z" />
		</svg>
	),
	betterAuth: (props?: SVGProps<any>) => (
		<svg
			width="60"
			height="45"
			viewBox="0 0 60 45"
			fill="none"
			className={props?.className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 0H15V15H30V30H15V45H0V30V15V0ZM45 30V15H30V0H45H60V15V30V45H45H30V30H45Z"
				className="fill-black dark:fill-white"
			/>
		</svg>
	),
	react: (props?: SVGProps<any>) => (
		<svg
			className={props?.className}
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 15 15"
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M5.315 1.837c-.4-.116-.695-.085-.91.032c-.216.116-.404.347-.526.745c-.122.401-.163.936-.104 1.582q.015.157.037.321a14 14 0 0 1 1.676-.311a13 13 0 0 1 1.275-1.54l-.066-.053c-.508-.402-.98-.66-1.382-.776m2.185.14q-.09-.076-.182-.148C6.746 1.377 6.16 1.04 5.594.876C5.024.711 4.441.711 3.928.99s-.833.767-1.005 1.334c-.172.564-.21 1.238-.144 1.965q.023.255.065.523q-.256.09-.49.192c-.671.287-1.246.642-1.66 1.062C.278 6.487 0 7 0 7.584S.278 8.68.694 9.103c.414.42.989.774 1.66 1.062q.235.1.49.192a9 9 0 0 0-.065.523c-.066.726-.028 1.4.144 1.965c.172.567.492 1.056 1.005 1.333c.513.278 1.097.279 1.666.114c.566-.165 1.152-.5 1.724-.953l.182-.149q.09.076.182.149c.572.452 1.158.788 1.724.953c.569.165 1.153.164 1.666-.114c.513-.277.833-.766 1.005-1.333c.172-.564.21-1.239.144-1.965a9 9 0 0 0-.065-.523q.255-.09.49-.192c.671-.288 1.246-.643 1.66-1.062c.416-.422.694-.936.694-1.52c0-.582-.278-1.096-.694-1.518c-.414-.42-.989-.775-1.66-1.062a9 9 0 0 0-.49-.192q.04-.268.065-.523c.066-.727.028-1.4-.144-1.965c-.172-.567-.492-1.056-1.005-1.334S9.975.711 9.406.876c-.566.164-1.152.5-1.724.953zm0 1.365q-.338.346-.672.755a17 17 0 0 1 1.344 0a11 11 0 0 0-.672-.755m2.012.864c-.41-.574-.84-1.092-1.275-1.54l.065-.053c.51-.402.98-.66 1.383-.776c.399-.116.695-.085.91.032c.216.116.404.347.525.745c.122.401.164.936.105 1.582q-.015.158-.037.32a14 14 0 0 0-1.676-.31m-.563.944a15.6 15.6 0 0 0-2.898 0A15.6 15.6 0 0 0 4.72 7.584a15.7 15.7 0 0 0 1.33 2.433a15.6 15.6 0 0 0 2.9 0a15.6 15.6 0 0 0 1.33-2.433A15.7 15.7 0 0 0 8.95 5.15m1.824 1.138a17 17 0 0 0-.527-.956q.39.075.752.168q-.094.385-.225.788m0 2.591a17 17 0 0 1-.527.957q.39-.075.752-.169a12 12 0 0 0-.225-.788m1.18.487a14 14 0 0 0-.588-1.782c.246-.61.443-1.209.588-1.782q.154.058.3.12c.596.256 1.047.547 1.341.845c.292.296.406.572.406.817s-.114.52-.406.816c-.294.299-.745.59-1.341.846a8 8 0 0 1-.3.12m-.765 1.285a14 14 0 0 1-1.676.311c-.41.574-.84 1.091-1.275 1.54l.066.052c.508.403.98.66 1.382.777c.399.116.695.085.91-.032s.404-.348.525-.746c.123-.4.164-.936.105-1.582a7 7 0 0 0-.037-.32M7.5 11.826q.338-.346.672-.755a17 17 0 0 1-1.344 0q.334.408.672.755m-2.746-1.99a17 17 0 0 1-.527-.957q-.13.404-.225.788q.361.094.752.169m-.942.815a14 14 0 0 0 1.676.311c.41.574.839 1.091 1.275 1.54l-.066.052c-.508.403-.98.66-1.382.777c-.4.116-.695.085-.911-.032s-.403-.348-.525-.746c-.122-.4-.163-.936-.104-1.582a8 8 0 0 1 .037-.32m-.765-1.285c.145-.574.341-1.172.588-1.782a14 14 0 0 1-.588-1.782q-.155.058-.3.12c-.596.256-1.047.547-1.341.845c-.292.296-.406.572-.406.817s.114.52.406.816c.294.299.745.59 1.341.846q.146.061.3.12m.955-3.865q.094.384.225.787a17 17 0 0 1 .527-.956q-.39.075-.752.169M6 7.584a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"
				clipRule="evenodd"
			></path>
		</svg>
	),
	hono: (props?: SVGProps<any>) => (
		<svg
			className={cn(props?.className)}
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 256 330"
		>
			<path
				className="fill-foreground"
				d="M134.129.029q1.315-.17 2.319.662a1256 1256 0 0 1 69.573 93.427q24.141 36.346 41.082 76.862q27.055 72.162-28.16 125.564q-48.313 40.83-111.318 31.805q-75.312-15.355-102.373-87.133Q-1.796 217.85.614 193.51q4.014-41.896 19.878-80.838q6.61-15.888 17.228-29.154a382 382 0 0 1 16.565 21.203q3.66 3.825 7.62 7.289Q92.138 52.013 134.13.029"
				opacity=".993"
			></path>
			<path
				className="fill-muted-foreground"
				d="M129.49 53.7q36.47 42.3 65.93 90.114a187.3 187.3 0 0 1 15.24 33.13q12.507 49.206-26.836 81.169q-38.05 26.774-83.488 15.902q-48.999-15.205-56.653-65.929q-1.857-15.993 3.314-31.142a225.4 225.4 0 0 1 17.89-35.78l19.878-29.155a5510 5510 0 0 0 44.726-58.31"
			></path>
		</svg>
	),
	astro: (props?: SVGProps<any>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			width="1.2em"
			height="1.2em"
			viewBox="0 0 128 128"
		>
			<path
				className="fill-foreground"
				d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90 90 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.1 90.1 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8 8 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a8 8 0 0 1 3.242 2.402Zm2.59 80.61c-3.57 3.054-10.696 5.136-18.903 5.136c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.67 5.67 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.6 11.6 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.5 15.5 0 0 0 1.875-7.41a15.6 15.6 0 0 0-.734-4.735Zm0 0"
			></path>
		</svg>
	),
	shadcn: (props?: SVGProps<any>) => (
		<svg
			className={props?.className}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<line
				x1="208"
				y1="128"
				x2="128"
				y2="208"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="32"
			/>
			<line
				x1="192"
				y1="40"
				x2="40"
				y2="192"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="32"
			/>
		</svg>
	),
	express: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 256 256"
		>
			<g fill="none">
				<rect
					width="256"
					height="256"
					className="fill-foreground"
					rx="60"
				></rect>
				<path
					className="fill-background"
					d="M228 182.937a12.73 12.73 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.29 13.29 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.95 11.95 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.56 5.56 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.86 33.86 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.15 45.15 0 0 1-21.573 32.972a52.26 52.26 0 0 1-60.884-7.784a54.77 54.77 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A861 861 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"
				></path>
			</g>
		</svg>
	),
	resend: (props?: SVGProps<any>) => (
		<svg
			width="600"
			height="600"
			className={props?.className}
			viewBox="0 0 600 600"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M186 447.471V154H318.062C336.788 154 353.697 158.053 368.79 166.158C384.163 174.263 396.181 185.443 404.845 199.698C413.51 213.672 417.842 229.604 417.842 247.491C417.842 265.938 413.51 282.568 404.845 297.381C396.181 311.915 384.302 323.375 369.209 331.759C354.117 340.144 337.067 344.337 318.062 344.337H253.917V447.471H186ZM348.667 447.471L274.041 314.99L346.99 304.509L430 447.471H348.667ZM253.917 289.835H311.773C319.04 289.835 325.329 288.298 330.639 285.223C336.229 281.869 340.421 277.258 343.216 271.388C346.291 265.519 347.828 258.811 347.828 251.265C347.828 243.718 346.151 237.15 342.797 231.56C339.443 225.691 334.552 221.219 328.124 218.144C321.975 215.07 314.428 213.533 305.484 213.533H253.917V289.835Z"
				className="fill-black dark:fill-white"
			/>
		</svg>
	),
	stripe: (props?: SVGProps<any>) => (
		<svg
			className="h-[30px] w-auto"
			viewBox="0 0 60 25"
			xmlns="http://www.w3.org/2000/svg"
			width="60"
			height="25"
		>
			<path
				fill="#635BFF"
				d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z"
				fillRule="evenodd"
			></path>
		</svg>
	),
	drizzle: (props?: SVGProps<any>) => (
		<svg
			className={props?.className}
			viewBox="0 0 160 160"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				width="9.63139"
				height="40.8516"
				rx="4.8157"
				transform="matrix(0.873028 0.48767 -0.497212 0.867629 43.4805 67.3037)"
				fill="currentColor"
			></rect>
			<rect
				width="9.63139"
				height="40.8516"
				rx="4.8157"
				transform="matrix(0.873028 0.48767 -0.497212 0.867629 76.9395 46.5342)"
				fill="currentColor"
			></rect>
			<rect
				width="9.63139"
				height="40.8516"
				rx="4.8157"
				transform="matrix(0.873028 0.48767 -0.497212 0.867629 128.424 46.5352)"
				fill="currentColor"
			></rect>
			<rect
				width="9.63139"
				height="40.8516"
				rx="4.8157"
				transform="matrix(0.873028 0.48767 -0.497212 0.867629 94.957 67.3037)"
				fill="currentColor"
			></rect>
		</svg>
	),
	t3stack: (props?: SVGProps<any>) => (
		<svg
			className={props?.className}
			width="258"
			height="199"
			viewBox="0 0 258 199"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M165.735 25.0701L188.947 0.972412H0.465994V25.0701H165.735Z"
				fill="#e2e8f0"
			/>
			<path
				d="M163.981 96.3239L254.022 3.68314L221.206 3.68295L145.617 80.7609L163.981 96.3239Z"
				fill="#e2e8f0"
			/>
			<path
				d="M233.658 131.418C233.658 155.075 214.48 174.254 190.823 174.254C171.715 174.254 155.513 161.738 150 144.439L146.625 133.848L127.329 153.143L129.092 157.336C139.215 181.421 163.034 198.354 190.823 198.354C227.791 198.354 257.759 168.386 257.759 131.418C257.759 106.937 244.399 85.7396 224.956 74.0905L220.395 71.3582L202.727 89.2528L210.788 93.5083C224.403 100.696 233.658 114.981 233.658 131.418Z"
				fill="#e2e8f0"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M88.2625 192.669L88.2626 45.6459H64.1648L64.1648 192.669H88.2625Z"
				fill="#e2e8f0"
			/>
		</svg>
	),
	biomejs: (props?: SVGProps<any>) => (
		<svg
			className={props?.className}
			viewBox="0 0 64 55.425"
			width="64"
			height="545.425"
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect id="background" width="100%" height="100%" fill="none" />
			<path
				id="emblem"
				d="m32 0-14.255 24.69c5.409-1.6676 11.228-1.9148 16.869-0.58434l4.8177 1.1372-4.5328 19.22-4.8247-1.1372c-5.9293-1.3987-11.628 1.716-14.036 6.6851l-4.4595-2.1575c3.4034-7.0291 11.424-11.285 19.636-9.3476l2.2595-9.579c-8.0938-1.9081-16.624-9e-3 -23.145 5.153-6.5204 5.1607-10.329 13.028-10.329 21.344l64 7.9e-4z"
				fill="#60a5fa"
				strokeLinecap="square"
				strokeWidth="4.8768"
				style={{ paintOrder: "markers fill stroke" }}
			/>
		</svg>
	),
	node: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 15 15"
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M14 4.213L7.5.42L1 4.213v6.574l1.006.587l2.057-.832A1.5 1.5 0 0 0 5 9.152V4h1v5.152a2.5 2.5 0 0 1-1.562 2.317l-1.34.542L7.5 14.58l6.5-3.792zM7 6a2 2 0 0 1 2-2h1.167C11.179 4 12 4.82 12 5.833V6h-1v-.167A.833.833 0 0 0 10.167 5H9a1 1 0 0 0 0 2h1a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2"
				clipRule="evenodd"
			></path>
		</svg>
	),
	book: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94c.98-.25 2.02-.36 3.02-.36c1.56 0 3.22.26 4.56.92c.6.3 1.28.3 1.87 0c1.34-.67 3-.92 4.56-.92c1 0 2.04.11 3.02.36c1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85c-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98c-.75-.14-1.53-.2-2.3-.2c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c.92 0 1.83.09 2.7.28c.46.1.8.51.8.98z"
			></path>
			<path
				fill="currentColor"
				d="M13.98 11.01c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.54-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39c-.08.01-.16.03-.23.03m0 2.66c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.53-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03m0 2.66c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.53-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83s-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03"
			></path>
		</svg>
	),
	remix: () => (
		<svg
			width="1.2em"
			height="1.2em"
			viewBox="0 0 412 474"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M393.946 364.768C398.201 419.418 398.201 445.036 398.201 473H271.756C271.756 466.909 271.865 461.337 271.975 455.687C272.317 438.123 272.674 419.807 269.828 382.819C266.067 328.667 242.748 316.634 199.871 316.634H161.883H1V218.109H205.889C260.049 218.109 287.13 201.633 287.13 158.011C287.13 119.654 260.049 96.4098 205.889 96.4098H1V0H228.456C351.069 0 412 57.9117 412 150.42C412 219.613 369.123 264.739 311.201 272.26C360.096 282.037 388.681 309.865 393.946 364.768Z"
				fill="currentColor"
			/>
			<path
				d="M1 473V399.553H134.697C157.029 399.553 161.878 416.116 161.878 425.994V473H1Z"
				fill="currentColor"
			/>
			<path
				d="M1 399.053H0.5V399.553V473V473.5H1H161.878H162.378V473V425.994C162.378 420.988 161.152 414.26 157.063 408.77C152.955 403.255 146.004 399.053 134.697 399.053H1Z"
				stroke="currentColor"
				strokeOpacity="0.8"
			/>
		</svg>
	),
	elysia: () => (
		<svg
			width="1.2em"
			height="1.2em"
			viewBox="0 0 512 512"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M424.404 470.816C478.089 423.889 512 354.905 512 278C512 136.615 397.385 22 256 22C114.615 22 0 136.615 0 278C0 352.658 31.9583 419.851 82.9409 466.646L83.1767 465L419.144 355L424.404 470.816Z"
				fill="currentColor"
			/>
			<path
				d="M189.915 52.7412L144.5 46L151.303 43.9069C155.402 42.6455 159.248 40.6719 162.662 38.0765L163.73 37.2654C167.845 34.1375 171.12 30.0364 173.259 25.3304C174.414 22.7883 175.224 20.1027 175.665 17.3454L176.173 14.1698C176.72 10.7473 176.692 7.25741 176.09 3.84416C175.834 2.39429 177.279 1.23239 178.64 1.79296L180.498 2.55815C182.829 3.51798 185.084 4.65434 187.242 5.95732L194.965 10.6205C205.229 16.8174 214.226 24.9023 221.48 34.4477L226.616 41.2051C228.529 43.7228 230.783 45.9625 233.313 47.8599C236.088 49.9411 239.164 51.5874 242.435 52.7418L246 54L227.274 54.749C214.785 55.2486 202.278 54.5764 189.915 52.7412Z"
				fill="currentColor"
			/>
			<path
				d="M178.321 93.006L191.79 68.3844C191.922 68.143 191.93 67.8528 191.812 67.6042L187.22 57.9361C184.337 51.8673 178.219 48 171.5 48L170.23 47.9562C161.437 47.653 152.704 46.3829 144.188 44.169L142.504 43.731C135.521 41.9153 128.746 39.3732 122.293 36.1463L119.446 34.723C115.159 32.5797 111.099 30.012 107.325 27.0584L103.55 24.1043C102.428 23.2265 100.803 23.4506 99.9606 24.5992C97.3651 28.1384 95.7379 32.2935 95.2395 36.6541L94.5535 42.6571C94.1854 45.8774 94.1446 49.1267 94.4316 52.3552L96.1031 71.1595C97.3467 85.1501 102.175 98.584 110.123 110.165L111.825 112.645C114.267 116.203 117.113 119.466 120.306 122.369C120.756 122.778 121.329 123.03 121.936 123.084C145.029 125.156 167.194 113.348 178.321 93.006Z"
				fill="currentColor"
			/>
			<path
				d="M127.378 123.538L143.376 116.613C150.438 113.557 152.588 104.577 147.676 98.6533C143.683 93.8378 136.58 93.0803 131.661 96.9453L127.867 99.9256C126.958 100.64 126.127 101.448 125.387 102.336L116.263 113.284C114.982 114.822 115.084 117.084 116.5 118.5L119.318 121.721C119.77 122.237 120.296 122.685 120.878 123.049C122.833 124.271 125.263 124.453 127.378 123.538Z"
				fill="#EDEDED"
			/>
			<path
				d="M147.988 44.8437L147.5 45L148.962 45.4651C155.294 47.4798 161.861 48.66 168.498 48.9761C168.83 48.9919 169.163 48.9534 169.483 48.8619L172.5 48L174 47.5L164.419 45.4172C163.158 45.1431 161.982 44.5687 160.991 43.7426C160.218 43.0981 160.223 41.9084 161.002 41.2708L162.423 40.1084C164.12 38.7197 165.493 36.976 166.444 35C160.934 39.3642 154.682 42.6988 147.988 44.8437Z"
				fill="#B2B2B2"
			/>
			<path
				d="M202.776 219.428L72.2905 452.693C71.643 453.851 70.0687 454.069 69.1308 453.131L66.5 450.5L55.5 438L48.4888 428.927C41.8407 420.323 35.9052 411.192 30.7414 401.624L29.7434 399.775C24.2581 389.611 19.6635 378.991 16.0112 368.034L12.5 357.5C7.22519 338.379 6.01447 318.365 8.94583 298.747L9.06961 297.919C10.354 289.323 12.4034 280.86 15.1935 272.629L21 255.5L25.3334 246.385C32.0537 232.249 41.3193 219.472 52.6669 208.691L58.1719 203.462C69.5529 192.65 83.3937 184.769 98.5 180.5C94.967 181.498 91.3608 182.216 87.7149 182.647L80.5 183.5L75 184L69 185L63 185.561L59 186L56.1186 186.18C55.1927 186.238 54.7576 185.057 55.4998 184.5L55.5002 184.5L59.5273 182.57C72.5066 176.351 83.1766 166.172 90 153.5L94.4475 146.562C99.7511 138.288 106.807 131.28 115.116 126.032L116.833 124.948C119.935 122.989 123.246 121.384 126.705 120.163L142.446 114.607C145.348 113.583 147.69 111.39 148.903 108.561L149.143 108C149.705 106.687 149.932 105.255 149.803 103.833C149.608 101.689 148.616 99.6966 147.023 98.2485L144.256 95.7328C144.086 95.5779 143.93 95.4073 143.792 95.2232L126 71.5L111.803 51.9315C108.994 48.0592 107.359 43.4599 107.094 38.6832C107.051 37.9263 107.836 37.4015 108.52 37.7295L123.881 45.1028C137.174 51.4834 152.33 52.825 166.537 48.8786C169.84 47.9612 173.214 47.3242 176.624 46.9745L183.675 46.2513C201.406 44.4328 219.32 45.9054 236.516 50.5953L238 51L254.798 57.0472C275.869 64.6329 292.567 81.0571 300.5 102L304.022 115.734C305.004 119.567 306.392 123.285 308.162 126.824C312.321 135.142 318.495 142.289 326.121 147.613L335.084 153.87C339.023 156.62 343.157 159.078 347.453 161.227L367.289 171.145C368.178 171.589 368.444 172.732 367.843 173.523C362.372 180.721 355.148 186.395 346.859 190.005L335.371 195.008C330.797 197 326.081 198.65 321.262 199.945L312.822 202.212C300.992 205.39 288.796 207 276.546 207H256.333C252.148 207 248.001 206.213 244.108 204.679C228.581 198.562 210.923 204.863 202.776 219.428Z"
				fill="white"
			/>
			<path
				d="M271.185 135.316L279.987 135.418C281.182 135.432 281.452 133.748 280.312 133.388C278.441 132.797 276.623 132.048 274.879 131.15L268.008 127.61C263.35 125.211 258.969 122.308 254.944 118.953L253.592 117.827C250.54 115.283 247.77 112.418 245.33 109.282L243.768 107.273C243.234 106.586 242.134 107.005 242.192 107.873C243.212 123.186 255.839 135.138 271.185 135.316Z"
				fill="#666666"
			/>
			<path
				d="M82.2231 456.395L231.313 323.4C245.367 310.863 257.58 296.403 267.59 280.45L268.5 279C273.404 269.192 275.497 258.217 274.547 247.293L273.24 232.258C272.436 223.009 268.618 214.28 262.373 207.41C262.131 207.144 261.81 206.961 261.457 206.889L237.5 202C220.117 196.752 201.688 195.995 183.933 199.8L183 200L169.06 203.259C128.405 212.763 92.5742 236.685 68.2116 270.592L67.597 271.447C60.8846 280.789 55.1822 290.817 50.5856 301.362L49.765 303.245C38.1544 329.881 34.2409 359.238 38.4684 387.985L39.8511 397.387C41.2751 407.07 44.1931 416.474 48.5011 425.262C52.4798 433.379 57.6014 440.883 63.7095 447.547L71.3177 455.847C74.1911 458.981 79.0498 459.225 82.2231 456.395Z"
				fill="#CCCCCC"
			/>
			<path
				d="M212.749 278.858L212.267 279.133C199.686 286.322 192.918 299.892 193.58 314.367C193.768 318.484 197.893 322.255 201.858 321.132L209.163 319.062C218.607 316.386 227.353 311.681 234.789 305.274L256 287L262.292 282.343C298.871 255.269 344.833 244.113 389.754 251.405C391.14 251.63 391.184 253.607 389.81 253.894L384.5 255L382.093 255.842C377.15 257.572 372.856 260.776 369.79 265.022C369.214 265.819 369.982 266.89 370.922 266.601L372.663 266.065C382.467 263.049 392.751 261.904 402.978 262.691L407 263C428.843 263.95 449.114 274.626 462.254 292.1L467.179 298.65C481.776 318.063 487.953 342.53 484.319 366.545L482.421 379.087C479.837 396.163 473.618 412.486 464.184 426.952L463.5 428L453 442L441.5 455L430.965 465.114C421.346 474.348 410.827 482.597 399.567 489.738L396 492L389.175 495.25C387.417 496.087 385.95 493.678 387.5 492.5L397 483.5L398.953 481.449C404.232 475.906 408.027 469.12 409.986 461.721L410.889 458.309C411.295 456.776 411.5 455.174 411.5 453.588C411.5 444.909 405.354 437.298 396.836 435.631C391.554 434.597 386.085 435.962 381.907 439.356L372.5 447L355.894 460.587C344.995 469.504 333.185 477.245 320.66 483.682L303.5 492.5L274.5 503.5L268.412 505.16C257.822 508.049 247.012 510.06 236.092 511.174L228 512H202L167.5 508.25L148.832 504.21C138.985 502.079 129.456 498.682 120.482 494.103C113.181 490.378 106.293 485.894 99.931 480.725L85.5 469C68.005 455.64 57.0449 435.448 55.3749 413.498L54.5 402L55.5295 385.822C57.134 360.608 66.7911 336.576 83.0792 317.263C89.6652 309.454 97.2376 302.534 105.606 296.675L108.677 294.526C121.458 285.579 135.72 278.961 150.805 274.976L160.947 272.297C174.135 268.813 187.952 268.445 201.307 271.22L211.887 273.418C214.542 273.97 215.103 277.513 212.749 278.858Z"
				fill="#5E5E5E"
			/>
		</svg>
	),
	tanstack: (props?: SVGProps<any>) => (
		<svg
			className={cn(props?.className)}
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 100 100"
		>
			<mask
				id="a"
				style={{ maskType: "alpha" }}
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="100"
				height="100"
			>
				<circle cx="50" cy="50" r="50" className="fill-foreground" />
			</mask>
			<g mask="url(#a)">
				<circle
					cx="11"
					cy="119"
					r="52"
					className="fill-muted-foreground stroke-foreground"
					strokeWidth="4"
				/>
				<circle
					cx="10"
					cy="125"
					r="52"
					className="fill-muted-foreground stroke-foreground"
					strokeWidth="4"
				/>
				<circle
					cx="9"
					cy="131"
					r="52"
					className="fill-muted-foreground stroke-muted-foreground"
					strokeWidth="4"
				/>
				<circle
					cx="88"
					cy="119"
					r="52"
					className="fill-muted-foreground stroke-foreground"
					strokeWidth="4"
				/>
				<path
					className="fill-foreground"
					d="M89 35h2v5h-2zM83 34l2 1-1 4h-2zM77 31l2 1-3 4-2-1zM73 27l1 1-3 4-1-2zM70 23l1 1-4 3-1-2zM68 18v2l-4 1-1-2zM68 11l1 2-5 1-1-2zM69 6v2h-5V6z"
				/>
				<circle
					cx="89"
					cy="125"
					r="52"
					className="fill-muted-foreground stroke-foreground"
					strokeWidth="4"
				/>
				<circle
					cx="90"
					cy="131"
					r="52"
					className="fill-muted-foreground stroke-muted-foreground"
					strokeWidth="4"
				/>
				<ellipse
					cx="49.5"
					cy="119"
					rx="41.5"
					ry="51"
					className="fill-muted-foreground"
				/>
				<path
					d="M34 38v-9c1 1 2 4 5 6l7 30-8 2c-1-23-2-23-4-29Z"
					className="fill-foreground stroke-muted-foreground"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M95 123c0 31-20 57-45 57S5 154 5 123c0-27 14-50 33-56l12-2c25 0 45 26 45 58Zm-45 47c22 0 39-22 39-50S72 70 50 70s-39 22-39 50 17 50 39 50Z"
					className="fill-foreground"
				/>
				<path
					d="M34 29c-4-8-11-5-14-4 2 3 5 4 9 4h5Z"
					className="fill-foreground stroke-muted-foreground"
				/>
				<path
					d="M25 38c-1 6 0 14 2 18 5-7 7-13 7-18v-9c-5 1-7 5-9 9Z"
					className="fill-muted-foreground"
				/>
				<path
					d="M34 29c-1 3-5 11-5 16m5-16c-5 1-7 5-9 9-1 6 0 14 2 18 5-7 7-13 7-18v-9Z"
					className="stroke-muted-foreground"
				/>
				<path
					d="M44 18c-10 1-11 7-10 11l4-3c5-4 6-7 6-8Z"
					className="fill-foreground stroke-muted-foreground"
				/>
				<path
					d="M34 29h7l18 4c-3-6-9-14-21-7l-4 3Z"
					className="fill-foreground"
				/>
				<path
					d="M34 29c4-2 12-5 18-1m-18 1h7l18 4c-3-6-9-14-21-7l-4 3Z"
					className="stroke-muted-foreground"
				/>
				<path
					d="M32 29a1189 1189 0 0 1-16 19c0-17 7-18 13-19h5a14 14 0 0 1-2 0Z"
					className="fill-foreground"
				/>
				<path
					d="M34 29c-5 1-7 5-9 9l-9 10c0-17 7-18 13-19h5Zm0 0c-5 2-11 3-14 10"
					className="stroke-muted-foreground"
				/>
				<path
					d="M41 29c9 2 13 10 15 14a25 25 0 0 1-22-14h7Z"
					className="fill-foreground"
				/>
				<path
					d="M34 29c3 1 11 5 15 9m-15-9h7c9 2 13 10 15 14a25 25 0 0 1-22-14Z"
					className="stroke-muted-foreground"
				/>
				<circle
					cx="91.5"
					cy="12.5"
					r="18.5"
					className="fill-foreground stroke-muted-foreground"
					strokeWidth="2"
				/>
			</g>
		</svg>
	),
	expo: (props?: SVGProps<any>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 32 32"
			{...props}
		>
			<path
				fill="currentColor"
				d="M24.292 15.547a3.93 3.93 0 0 0 4.115-3.145a2.57 2.57 0 0 0-2.161-1.177c-2.272-.052-3.491 2.651-1.953 4.323zm-9.177-10.85l5.359-3.104L18.766.63l-7.391 4.281l.589.328l1.119.629l2.032-1.176zm6.046-3.39c.089.027.161.1.188.188l2.484 7.593a.285.285 0 0 1-.125.344a5.06 5.06 0 0 0-2.317 5.693a5.066 5.066 0 0 0 5.401 3.703a.3.3 0 0 1 .307.203l2.563 7.803a.3.3 0 0 1-.125.344l-7.859 4.771a.3.3 0 0 1-.131.036a.26.26 0 0 1-.203-.041l-2.765-1.797a.3.3 0 0 1-.109-.129l-5.396-12.896l-8.219 4.875c-.016.011-.037.021-.052.032a.3.3 0 0 1-.261-.021l-1.859-1.093a.283.283 0 0 1-.115-.381l7.953-15.749a.27.27 0 0 1 .135-.131L18.615.045a.29.29 0 0 1 .292-.005zm-8.322 5.1l-1.932-1.089l-7.693 15.229l1.396.823l6.631-9.015a.28.28 0 0 1 .271-.12a.29.29 0 0 1 .235.177l7.228 17.296l1.933 1.251l-8.063-24.552zm13.406 10.557c-2.256 0-3.787-2.292-2.923-4.376c.86-2.083 3.563-2.619 5.156-1.025c.595.593.928 1.396.928 2.235a3.16 3.16 0 0 1-3.161 3.167z"
			></path>
		</svg>
	),
	x: (props?: SVGProps<any>) => (
		<svg
			{...props}
			width={30}
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			className="w-full"
		>
			<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
		</svg>
	),
	linkedIn: (props?: SVGProps<any>) => (
		<svg
			{...props}
			width={30}
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 448 512"
			xmlns="http://www.w3.org/2000/svg"
			className="w-full"
		>
			<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
		</svg>
	),
};
