"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { LuTextSearch } from "react-icons/lu";
import { NavButtons, NavButtonsProps } from "./NavButtons";
import { NavLinks, NavLinksProps } from "./NavLinks";

import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  const links: NavLinksProps[] = [
    { url: "#catalogo", label: "Catálogo" },
    { url: "#servicos", label: "Serviços" },
    { url: "#parceiros", label: "Parceiros" },
    { url: "#contato", label: "Contato" },
  ];

  const buttons: NavButtonsProps[] = [
    { url: "/transparencia", label: "Transparência", icon: <LuTextSearch /> },
    { url: "/entrar", label: "Entrar", icon: <FaArrowRightToBracket /> },
  ];

  return (
    <Disclosure as="nav" className="bg-blue-1074BC">
      <div className="w-full  px-32 max-xl:px-16 max-lg:px-10 max-md:px-6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <DisclosureButton
              className="group relative inline-flex
              items-center
              justify-center rounded-md p-2
              text-white hover:bg-blue-1C58A8 focus:ring-2
              focus:ring-white focus:outline-hidden focus:ring-inset"
            >
              {({ open }) => (
                <>
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Abrir menu</span>
                  <Bars3Icon aria-hidden="true" className={`${open ? "hidden" : "block"} size-6`} />
                  <XMarkIcon aria-hidden="true" className={`${open ? "block" : "hidden"} size-6`} />
                </>
              )}
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="flex shrink-0">
              <Link href="/">
                <Image
                  alt="Logo Softeam"
                  src="logo-softeam-with-name.svg"
                  className="h-12 w-auto"
                  width={258}
                  height={66}
                />
              </Link>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="flex justify-between items-center gap-4 h-full">
                {links.map((link, index) => (
                  <NavLinks key={index} url={link.url} label={link.label} />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            {buttons.map((button, index) => (
              <NavButtons key={index} url={button.url} label={button.label} icon={button.icon} />
            ))}
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {links.map((link, index) => (
            <DisclosureButton
              key={index}
              as="a"
              href={link.url}
              className="block px-3 py-2 text-base font-medium text-white hover:bg-blue-1C58A8"
            >
              {link.label}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
