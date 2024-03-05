import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center">
        <li className="space-x">
          <a href="#">Logo</a>
        </li>
        <ul className="flex justify-center w-full space-x-48">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Programs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <Button variant="link" className="space-x-20">
          Get started
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
