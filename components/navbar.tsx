'use client';

import Link from 'next/link';
import {
  PiBriefcaseBold,
  PiClockCounterClockwiseBold,
  PiHouseLineBold,
  PiInfoBold,
  PiPhoneBold,
} from 'react-icons/pi';

const Navbar = () => {
  return (
    <>
      <header>
        <nav role="navigation" className="fixed top-[100px] z-50 flex justify-between">
          {/* Left Section - Vertical Buttons */}
          <ul className="flex flex-col items-center gap-5 ml-[-150px]">
            <li className="group" key="home">
              <Link href={'#home'} aria-label="Go to Home Section">
                <PiHouseLineBold className="h-7 w-7 text-red-500 hover:scale-110 hover:text-white" />
              </Link>
            </li>
            <li className="group" key="about">
              <Link href={'#about'} aria-label="Go to About Section">
                <PiInfoBold className="h-7 w-7 text-red-500 hover:scale-110 hover:text-white" />
              </Link>
            </li>
            <li className="group" key="experience">
              <Link href={'#experience'} aria-label="Go to Experience Section">
                <PiClockCounterClockwiseBold className="h-7 w-7 text-red-500 hover:scale-110 hover:text-white" />
              </Link>
            </li>
            <li className="group" key="projects">
              <Link href={'#projects'} aria-label="Go to Projects Section">
                <PiBriefcaseBold className="h-7 w-7 text-red-500 hover:scale-110 hover:text-white" />
              </Link>
            </li>
            <li className="group" key="contact">
              <Link href={'#contact'} aria-label="Go to Contact Section">
                <PiPhoneBold className="h-7 w-7 text-red-500 hover:scale-110 hover:text-white" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
