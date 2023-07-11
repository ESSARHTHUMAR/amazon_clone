import React from "react";

const FooterList = ({ title, listItem }) => {
  return (
    <div className="w-full">
      <h3 className="text-white text-base font-semibold mb-3 font-titleFont">{title}</h3>
      <ul className="flex flex-col gap-2 ">
        {listItem.map((item) =>
          item.listData.map((data,i) => <li key={i} className="footerLink">{data}</li>)
        )}
      </ul>
    </div>
  );
};

export default FooterList;
