import React from "react";
import { Avatar, AvatarImage } from "../avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Button } from "../button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {user} = useSelector(store => store.auth);

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto px-20 max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/jobs'>Job</Link>
            </li>
            <li>
              <Link to='/browse'>Browse</Link>
            </li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button className="cursor-pointer" variant="outline">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="cursor-pointer bg-[#6A38C2] hover:bg-[#5b30a6]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-2 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h2 className="font-bold">Ashikul Islam</h2>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600 my-2">
                  <div className="flex items-center">
                    <User2 />
                    <Button className="cursor-pointer" variant="link">
                      <Link to='/profile'>View Profile</Link>
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <LogOut />
                    <Button className="cursor-pointer" variant="link">
                      Log out
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
