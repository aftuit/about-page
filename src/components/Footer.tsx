import { Link } from "react-router-dom";
import { links } from "../utils/const";
import LinkIcon from "../assets/icons/link.svg?react";

export const Footer = () => {
  return (
    <div className="w-full bg-primary pt-[67px] pb-[93px] text-inter">
      <div className="container-wrapper">
        <div className="flex gap-x-10 justify-between">
          {links.map((link: any) => (
            <div  key={link.name} className={`flex flex-col justify-between ${link.name === 'first' ? 'w-5/12' : link.name === 'second' ? 'pl-8 line w-7/12': 'pl-8 line'}`}>
              {link.data.map((item: any, index: number) => (
                <div key={item.title} className={link.name === 'second' && index > 0 ? 'mt-[63px]': ''}>
                  <h3 className="font-bold text-light-primary uppercase">{item.title}</h3>
                  <ul className="mt-[17px] flex flex-col gap-2.5">
                    {item.children.map((child: any) => (
                      <li key={child.name}>
                        <Link to={child.link} className="flex items-center gap-x-2 leading-[30px]">
                          <div>
                            <LinkIcon />
                          </div>
                          <span className="text-white text-base hover:translate-x-0.5 transition-all duration-200 hover:text-blue-300">{child.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
