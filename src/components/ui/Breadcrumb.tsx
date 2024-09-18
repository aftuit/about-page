import { Link } from "react-router-dom";

interface Item {
  name: string;
  active: boolean;
  path: string;
}

interface IProps {
  items: Item[];
}

export const Breadcrumb = ({ items }: IProps) => {
  return (
    <div className="w-full flex gap-2">
      {items.map((item: Item) => (
        <Link to={item.path} key={item.name} className="border p-[13px] flex-center gap-x-[5px] rounded-md">
          <span className={`font-medium text-sm ${item.active ? "text-primary" : "text-muted"}`}>{item.name}</span>{" "}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.82474 5.13026C8.91638 5.04342 9.02176 5 9.14089 5C9.26002 5 9.36541 5.04342 9.45704 5.13026L15.8625 11.2004C15.9542 11.2872 16 11.3871 16 11.5C16 11.6129 15.9542 11.7128 15.8625 11.7996L9.45705 17.8697C9.36541 17.9566 9.26002 18 9.14089 18C9.02176 18 8.91638 17.9566 8.82474 17.8697L8.13746 17.2184C8.04582 17.1316 8 17.0317 8 16.9188C8 16.8059 8.04582 16.7061 8.13746 16.6192L13.5395 11.5L8.13746 6.38076C8.04582 6.29392 8 6.19405 8 6.08116C8 5.96827 8.04582 5.8684 8.13746 5.78156L8.82474 5.13026Z"
              fill={item.active ? "#003087" : "#767676"}
            />
          </svg>
        </Link>
      ))}
    </div>
  );
};
