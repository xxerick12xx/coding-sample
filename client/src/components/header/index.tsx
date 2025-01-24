import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";
import { Button, Container } from "./../../ui";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Button variant="ghost">
    <NavLink to={href}>{children}</NavLink>
  </Button>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background">
      <Container className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-xl font-bold">
                Logo
              </NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <NavItem href="/create">Create Referral</NavItem>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </Container>

      {isOpen && (
        <div className="md:hidden bg-background" id="mobile-menu">
          <div className="pt-4 pb-3 border-t border-blue-700 flex flex-col">
            <NavItem href="/create">Create Referral</NavItem>
          </div>
        </div>
      )}
    </nav>
  );
};
