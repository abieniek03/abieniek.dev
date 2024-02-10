"use client";

import { useState, type ReactElement } from "react";
import Logo from "./Logo";
import { stylesNavbarLinkButton } from "@/app/styles";
import SwitchThemeButton from "./SwitchThemeButton";

export default function Navbar(): ReactElement {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

	return (
		<nav>
			<div className="w-full max-w-screen-2xl mx-auto px-4 py-3 flex justify-between items-center flex-wrap md:flex-nowrap">
				<Logo />
				<div
					className={`${
						menuIsOpen ? "flex" : "hidden"
					} order-last w-full justify-center items-center md:flex md:order-none h-[calc(100vh-56px)] md:h-auto`}
				>
					<ul className="flex gap-2">
						<li>Item1</li>
						<li>Item2</li>
						<li>Item3</li>
					</ul>
				</div>
				<div className="flex items-center justify-end">
					<div className="flex gap-3">
						<div className="flex flex-row-reverse">
							<div className="flex gap-2 items-center">
								<a
									href="https://www.linkedin.com/in/adrian-bieniek/"
									rel="noopener"
									target="_blank"
									className={stylesNavbarLinkButton}
								>
									<i className="ri-linkedin-box-fill" />
								</a>
								<a
									href="https://github.com/abieniek03"
									rel="noopener"
									target="_blank"
									className={stylesNavbarLinkButton}
								>
									<i className="ri-github-fill" />
								</a>
								<SwitchThemeButton />
								<button
									className={`${stylesNavbarLinkButton} "group md:hidden text-2xl"`}
									onClick={() => setMenuIsOpen(!menuIsOpen)}
								>
									<i className={menuIsOpen ? "ri-close-line" : "ri-menu-line"}></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
