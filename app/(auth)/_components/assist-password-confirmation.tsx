"use client";

import type React from "react";

import { PasswordInput } from "@/components/password-input";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface AssistedPasswordConfirmationProps {
	password: string;
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	className?: string;
	error?: boolean;
}

export function AssistedPasswordConfirmation({
	password,
	value,
	onChange,
	placeholder = "Confirm Password",
	className,
	error = false,
}: AssistedPasswordConfirmationProps) {
	const [shake, setShake] = useState(false);

	const handleConfirmPasswordChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		if (
			value.length >= password.length &&
			e.target.value.length > value.length
		) {
			setShake(true);
		} else {
			onChange(e.target.value);
		}
	};

	useEffect(() => {
		if (shake) {
			const timer = setTimeout(() => setShake(false), 500);
			return () => clearTimeout(timer);
		}
	}, [shake]);

	const getLetterStatus = (letter: string, index: number) => {
		if (!value[index]) return "";
		return value[index] === password[index]
			? "bg-green-500/20"
			: "bg-red-500/20";
	};

	const passwordsMatch = password === value;

	const bounceAnimation = {
		x: shake ? [-5, 5, -5, 5, 0] : 0,
		transition: { duration: 0.5 },
	};

	const matchAnimation = {
		scale: passwordsMatch && value.length > 0 ? [1, 1.02, 1] : 1,
		transition: { duration: 0.3 },
	};

	return (
		<motion.div
			className="relative w-full"
			animate={{
				...bounceAnimation,
				...matchAnimation,
			}}
		>
			{/* Background indicators */}
			{value && (
				<div className="pointer-events-none absolute top-0 left-2 z-10 flex h-full items-center">
					<div className="flex overflow-hidden rounded-md">
						{value.split("").map((_, index) => (
							<motion.div
								key={index}
								className={cn("h-7 w-4", getLetterStatus(value[index], index))}
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								style={{ transformOrigin: "left" }}
								transition={{ duration: 0.2 }}
							/>
						))}
					</div>
				</div>
			)}

			{/* Use the existing PasswordInput component */}
			<PasswordInput
				className={cn(
					"tracking-[0.75em]",
					passwordsMatch && value.length > 0
						? "border-green-500"
						: error
							? "border-red-500"
							: "",
					className,
				)}
				placeholder={placeholder}
				value={value}
				onChange={handleConfirmPasswordChange}
			/>
		</motion.div>
	);
}
